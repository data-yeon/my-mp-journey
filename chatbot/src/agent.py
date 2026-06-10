"""
LangGraph Agentic RAG — Query Rewriting + HyDE + Tool-calling 에이전트.

노드 구성:
  query_rewrite_node → 구어체 질문을 법령 검색 최적화 쿼리로 변환 (Query Rewriting)
                       + 가상 법령 조문 생성 (HyDE)
  agent_node         → LLM이 도구 호출 여부를 스스로 판단
  tools_node         → 선택된 도구 실행 (search_laws는 HyDE 쿼리로 검색)
  grader_node        → 답변 충분성 자체 채점 → 부족하면 1회 재시도

흐름:
  START → query_rewrite → agent → tools (도구 호출 시) → agent → ... → grader → END
                                ↑_______________________↓         (재시도 시)
"""

from __future__ import annotations

import json
import operator
from typing import Annotated, TypedDict

from langchain.schema import HumanMessage, SystemMessage
from langchain_community.vectorstores import Chroma
from langchain_core.messages import AIMessage, BaseMessage, ToolMessage
from langchain_core.tools import tool
from langgraph.graph.message import add_messages
from langchain_openai import ChatOpenAI
from langgraph.graph import END, START, StateGraph

from src.retriever import format_context, retrieve
from src.benefit_lookup import lookup_birth_services
from src.leave_policy_lookup import answer_leave_question
from src.company_rules_rag import lookup_company_rules
from src.prompts import GRADER_PROMPT, HYDE_PROMPT, QUERY_REWRITE_PROMPT, build_system_prompt

import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent.parent))
import config


class AgentState(TypedDict):
    messages: Annotated[list[BaseMessage], add_messages]
    question: str
    audience: str
    retry_count: Annotated[int, operator.add]
    rewritten_query: str
    hyde_query: str
    docs: list


def make_graph(vectorstore: Chroma) -> StateGraph:
    llm = ChatOpenAI(
        model=config.OPENAI_MODEL,
        openai_api_key=config.OPENAI_API_KEY,
        temperature=0.2,
    )

    # ── 도구 정의 ──────────────────────────────────────────────

    @tool
    def search_laws(query: str) -> str:
        """한국 모성보호 관련 법령 조문(근로기준법·남녀고용평등법·고용보험법 등)을 벡터 검색합니다.
        출산휴가 절차, 불이익 처우, 권리 침해, 법령 해석 등 법적 근거가 필요할 때 사용하세요."""
        docs = retrieve(vectorstore, query)
        return format_context(docs)

    @tool
    def lookup_birth_benefits(question: str) -> str:
        """지역별 출산·육아 지원금과 정부24 서비스를 조회합니다.
        질문에 시/도 또는 시/군/구명이 포함된 경우에만 사용하세요 (예: 서울 출산 지원금)."""
        return lookup_birth_services(question)

    @tool
    def lookup_leave_policy(question: str) -> str:
        """출산전후휴가·육아휴직·배우자 출산휴가·난임치료휴가의 법정 기간을 즉시 반환합니다.
        '며칠', '얼마나', '기간이 어떻게' 같은 기간 문의에 사용하세요."""
        return answer_leave_question(question)

    @tool
    def lookup_company_rules_tool(query: str) -> str:
        """회사 취업규칙·사내 규정에 따른 HR 정책을 조회합니다.
        '우리 회사', '사규', '취업규칙', '사내 규정' 관련 질문에 사용하세요."""
        return lookup_company_rules(query)

    tools = [search_laws, lookup_birth_benefits, lookup_leave_policy, lookup_company_rules_tool]
    tool_map = {t.name: t for t in tools}
    llm_with_tools = llm.bind_tools(tools)

    # ── 노드 정의 ──────────────────────────────────────────────

    def query_rewrite_node(state: AgentState) -> dict:
        """Query Rewriting + HyDE: 구어체 질문을 법령 검색에 최적화된 형태로 변환."""
        q = state["question"]

        rewrite_prompt = QUERY_REWRITE_PROMPT.format(question=q)
        rewritten = llm.invoke([HumanMessage(content=rewrite_prompt)]).content.strip()

        hyde_prompt = HYDE_PROMPT.format(question=q)
        hyde = llm.invoke([HumanMessage(content=hyde_prompt)]).content.strip()

        return {"rewritten_query": rewritten, "hyde_query": hyde}

    def agent_node(state: AgentState) -> dict:
        """LLM이 도구 호출 여부를 결정하고 답변을 생성."""
        audience = state.get("audience", "employee")
        system_prompt = build_system_prompt(audience)

        messages = list(state["messages"])

        # 첫 호출 시 초기 메시지 세팅
        if not messages:
            hint = f"\n\n[검색 힌트] search_laws 호출 시 이 쿼리를 사용하세요: {state['rewritten_query']}"
            messages = [HumanMessage(content=state["question"] + hint)]

        full_messages = [SystemMessage(content=system_prompt)] + messages
        response = llm_with_tools.invoke(full_messages)
        return {"messages": [response], "retry_count": 0}

    def tools_node(state: AgentState) -> dict:
        """선택된 도구를 실행. search_laws는 HyDE 쿼리로 검색."""
        last_msg = state["messages"][-1]
        tool_messages: list[ToolMessage] = []
        all_docs: list = []

        for tc in last_msg.tool_calls:
            tool_name = tc["name"]
            tool_args = tc["args"]

            if tool_name == "search_laws":
                # HyDE 쿼리 우선, 없으면 rewritten_query
                search_q = state.get("hyde_query") or state.get("rewritten_query") or tool_args.get("query", "")
                raw_docs = retrieve(vectorstore, search_q)
                all_docs.extend(raw_docs)
                result = format_context(raw_docs)
            elif tool_name in tool_map:
                try:
                    result = tool_map[tool_name].invoke(tool_args)
                except Exception as e:
                    result = f"도구 실행 오류: {e}"
            else:
                result = f"알 수 없는 도구: {tool_name}"

            tool_messages.append(ToolMessage(content=result, tool_call_id=tc["id"]))

        return {"messages": tool_messages, "docs": all_docs}

    def grader_node(state: AgentState) -> dict:
        """답변 충분성을 자체 채점하여 재시도 여부를 결정."""
        last_ai = next(
            (m for m in reversed(state["messages"]) if isinstance(m, AIMessage) and not m.tool_calls),
            None,
        )
        answer_text = last_ai.content if last_ai else ""

        grade_prompt = GRADER_PROMPT.format(
            question=state["question"],
            answer=answer_text,
        )
        grade_raw = llm.invoke([HumanMessage(content=grade_prompt)]).content.strip()

        try:
            grade = json.loads(grade_raw)
        except json.JSONDecodeError:
            grade = {"sufficient": True}

        if not grade.get("sufficient", True) and state.get("retry_count", 0) < 1:
            reason = grade.get("reason", "")
            retry_msg = HumanMessage(
                content=f"이전 답변이 충분하지 않습니다 ({reason}). 도구를 추가로 활용해 더 완전한 답변을 제공해 주세요."
            )
            return {"messages": [retry_msg], "retry_count": 1}

        return {"retry_count": 0}

    # ── 라우팅 함수 ────────────────────────────────────────────

    def route_after_agent(state: AgentState) -> str:
        last = state["messages"][-1]
        if isinstance(last, AIMessage) and last.tool_calls:
            return "tools"
        return "grader"

    def route_after_grader(state: AgentState) -> str:
        last = state["messages"][-1]
        if isinstance(last, HumanMessage) and state.get("retry_count", 0) > 0:
            return "query_rewrite"
        return END

    # ── 그래프 조립 ────────────────────────────────────────────

    builder = StateGraph(AgentState)
    builder.add_node("query_rewrite", query_rewrite_node)
    builder.add_node("agent", agent_node)
    builder.add_node("tools", tools_node)
    builder.add_node("grader", grader_node)

    builder.add_edge(START, "query_rewrite")
    builder.add_edge("query_rewrite", "agent")
    builder.add_conditional_edges("agent", route_after_agent, {"tools": "tools", "grader": "grader"})
    builder.add_edge("tools", "agent")
    builder.add_conditional_edges("grader", route_after_grader, {"query_rewrite": "query_rewrite", END: END})

    return builder.compile()


def run_agent(graph, question: str, audience: str = "employee") -> dict:
    """에이전트 실행 후 {answer, context, docs} 딕셔너리 반환."""
    initial_state: AgentState = {
        "messages": [],
        "question": question,
        "audience": audience,
        "retry_count": 0,
        "rewritten_query": "",
        "hyde_query": "",
        "docs": [],
    }
    final_state = graph.invoke(initial_state)

    last_ai = next(
        (m for m in reversed(final_state["messages"]) if isinstance(m, AIMessage) and not m.tool_calls),
        None,
    )
    answer = last_ai.content if last_ai else ""
    docs = final_state.get("docs", [])
    context = format_context(docs) if docs else ""

    return {"answer": answer, "context": context, "docs": docs}
