"""
LangGraph Agent 흐름 정의.

노드 구성:
  retrieve_node  → 사용자 질문으로 RAG 검색
  generate_node  → GPT-4o-mini로 답변 생성
  check_node     → 답변 품질 체크 (재검색 여부 결정)

흐름:
  START → retrieve → generate → check → END
                                  ↓ (불충분 시)
                               retrieve (1회 재시도)
"""

from __future__ import annotations

from typing import TypedDict, Annotated
import operator

from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage
from langchain_community.vectorstores import Chroma
from langgraph.graph import StateGraph, START, END

from src.retriever import retrieve, format_context
from config import OPENAI_API_KEY, OPENAI_MODEL

SYSTEM_PROMPT = """당신은 대한민국 모성보호 법령 전문 HR 챗봇입니다.
아래 [법령 참조] 내용을 바탕으로 사용자의 질문에 정확하고 친절하게 답변하세요.

규칙:
- 법령 근거를 반드시 조문명과 함께 언급하세요 (예: 근로기준법 제74조).
- 법령에 없는 내용은 추측하지 말고 "해당 내용은 법령에서 확인되지 않습니다"라고 답하세요.
- 실무적으로 도움이 되는 핵심 내용을 먼저 전달하고, 세부 조건을 설명하세요.
- 존댓말을 사용하세요.

[법령 참조]
{context}
"""


class AgentState(TypedDict):
    question: str
    context: str
    answer: str
    retry_count: Annotated[int, operator.add]
    docs: list


def make_graph(vectorstore: Chroma) -> StateGraph:
    llm = ChatOpenAI(
        model=OPENAI_MODEL,
        openai_api_key=OPENAI_API_KEY,
        temperature=0.2,
    )

    # ── 노드 정의 ──────────────────────────────────────────────

    def retrieve_node(state: AgentState) -> AgentState:
        """RAG 검색: 질문에 맞는 법령 청크 수집."""
        docs = retrieve(vectorstore, state["question"])
        context = format_context(docs)
        return {**state, "docs": docs, "context": context, "retry_count": 1}

    def generate_node(state: AgentState) -> AgentState:
        """GPT-4o-mini로 답변 생성."""
        system = SYSTEM_PROMPT.format(context=state["context"])
        messages = [
            SystemMessage(content=system),
            HumanMessage(content=state["question"]),
        ]
        response = llm.invoke(messages)
        return {**state, "answer": response.content}

    # ── 그래프 조립 ────────────────────────────────────────────

    builder = StateGraph(AgentState)

    builder.add_node("retrieve", retrieve_node)
    builder.add_node("generate", generate_node)

    builder.add_edge(START, "retrieve")
    builder.add_edge("retrieve", "generate")
    builder.add_edge("generate", END)

    graph = builder.compile()
    return graph


def run_agent(graph, question: str) -> dict:
    """Agent 실행 후 최종 state 반환."""
    initial_state: AgentState = {
        "question": question,
        "context": "",
        "answer": "",
        "retry_count": 0,
        "docs": [],
    }
    final_state = graph.invoke(initial_state)
    return final_state
