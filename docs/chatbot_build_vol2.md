# 모성보호 패키지 네비게이터 챗봇 — LangChain/LangGraph 설계 (v2)

> **v2 변경 사항**
>
> - `route` 노드를 **필수 노드**로 격상 (선택 → 필수)
> - `route` 결과에 따라 `retrieve` 스킵 경로 추가 (비용·지연 최적화)
> - `intent_type` 필드 State에 명시적으로 추가
> - 그래프 엣지·다이어그램 전면 수정

이 문서는 **empty base(기존 코드 없음)**에서 LangChain·LangGraph만으로 **한국 회사용 모성보호 패키지 네비게이터** 챗봇을 새로 구현할 때의 **코드 구조**, **클래스 설계**, **전체 그래프 구조**, **함수 흐름**을 정리한 설계서다.

---

## 1. 목표와 범위

### 1.1 챗봇 역할

- **입력:** 사용자(HR 담당자 또는 임산부·예비부모)의 질문 + 선택적 프로필(거주지, 임신 주수, 단/다태아, 역할)
- **출력:** 임신→출산→복직 구간의 체크리스트, 서류·제도 안내, 지자체 지원, FAQ 등 **구조화된 패키지/답변**
- **특성:** 도메인 지식(법·제도·회사 프로세스)이 많고, **조건 분기**(주수·거주지·단다태아·역할)에 따라 답이 달라짐 → RAG + 도메인 툴 + 그래프 분기가 적합

### 1.2 구현 전제

- **기존 코드 없음.** LangChain / LangGraph / Pydantic / 벡터스토어 등만 사용해 프로젝트를 처음부터 구성한다.
- 의존성은 `langchain`, `langgraph`, `langchain-openai`(또는 사용할 LLM provider) 등으로 한정한다.

---

## 2. 전체 아키텍처

### 2.1 레이어 구성

```
┌─────────────────────────────────────────────────────────────────────────┐
│  API Layer (FastAPI / Streamlit)                                         │
│  - 세션·히스토리 관리, 프로필 수집(거주지/주수/역할)                        │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│  LangGraph Application Layer                                             │
│  - StateGraph 정의, 노드·엣지, 조건 분기, invoke()                         │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│  Nodes                                                                   │
│  - ingest / route / retrieve / plan / execute_tool / respond / postprocess│
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    ▼               ▼               ▼
┌──────────────────────┐ ┌──────────────────────┐ ┌──────────────────────┐
│  LLM Components      │ │  Tools (LangChain)    │ │  Retrieval / Store    │
│  - Router, Planner   │ │  - checklist, docs,   │ │  - 벡터스토어, 정책    │
│  - Respond           │ │    benefits, dates…   │ │    문서, FAQ          │
└──────────────────────┘ └──────────────────────┘ └──────────────────────┘
```

### 2.2 디렉터리 구조

```text
birth_chatbot/
├── __init__.py
├── main.py                    # FastAPI/CLI 진입점, graph invoke
├── config.py                  # 모델/경로/상수
│
├── state.py                   # LangGraph state 정의
├── graph.py                   # StateGraph 빌드, 컴파일
│
├── nodes/
│   ├── __init__.py
│   ├── ingest.py              # 입력 정규화, 프로필 추출/갱신
│   ├── route.py               # 의도 분류 → retrieve 필요 여부 결정 (필수)
│   ├── retrieve.py            # RAG 검색 (정책/FAQ)
│   ├── plan.py                # 다음 액션 결정 (structured output)
│   ├── execute_tool.py        # 툴 디스패치
│   ├── respond.py             # 최종 답변 생성
│   └── postprocess.py        # 포맷/안전/로깅
│
├── tools/
│   ├── __init__.py
│   ├── base.py                # 공통 결과 타입, 래퍼
│   ├── checklist_tools.py     # 주수별/단계별 체크리스트
│   ├── document_tools.py      # 필요 서류, 샘플 문구
│   ├── benefit_tools.py       # 지자체/공단 지원금·휴가
│   ├── date_tools.py          # 출산예정일·복직일·신청 시기
│   ├── company_tools.py       # 회사 인프라·프로세스 (선택)
│   └── faq_tools.py           # FAQ/사례 검색
│
├── prompts/
│   ├── system_planner.txt
│   ├── system_respond.txt
│   └── route.txt              # 의도 분류 프롬프트
│
├── retrieval/
│   ├── __init__.py
│   ├── store.py               # 벡터스토어 로드/쿼리
│   └── documents/             # 모자보건법, 지자체 정책, FAQ 등 청크
│
└── models/
    ├── __init__.py
    ├── state.py               # State 필드 타입
    ├── plan.py                # Plan, Action
    ├── profile.py             # UserProfile
    └── tool_results.py        # ToolResult 공통
```

---

## 3. 상태 설계 (State)

### 3.1 State 정의 (LangGraph TypedDict)

```python
# birth_chatbot/state.py

from typing import TypedDict, Annotated, Any, Literal
from langgraph.graph.message import add_messages

class UserProfile(TypedDict, total=False):
    """사용자/상황 프로필 — 챗봇이 채우거나 사용자가 제공."""
    role: str                     # "hr" | "employee" | "unknown"
    region: str                   # 시·도 또는 시·구 (예: "서울 강남구")
    pregnancy_week: int           # 임신 주수 (1–42)
    single_or_multiple: str       # "single" | "multiple"
    due_date: str | None          # 출산예정일 (YYYY-MM-DD)
    company_scale: str | None     # "small" | "medium" | "large" (선택)

class MaternalNavigatorState(TypedDict, total=False):
    """모성보호 네비게이터 그래프 상태."""
    # 메시지 (LangGraph 표준)
    messages: Annotated[list, add_messages]

    # 프로필
    profile: UserProfile

    # ingest에서 채움
    current_turn: dict[str, Any]   # { "role": "user", "content": "..." }

    # ★ route에서 채움 (v2 신규)
    intent_type: Literal[
        "greeting",        # 인사·잡담 → retrieve 스킵, plan 스킵, 바로 respond
        "profile_update",  # 프로필만 바꿔줘 → retrieve 스킵, plan 스킵, 바로 respond
        "tool_only",       # 날짜계산·체크리스트 등 RAG 불필요 → retrieve 스킵
        "rag_required",    # 법령·정책·FAQ 검색 필요 → retrieve 실행
    ]

    # retrieve에서 채움
    retrieved_docs: list[dict]     # [{ "content": "...", "metadata": {...} }, ...]

    # plan에서 채움
    plan: dict | None
    plan_error: str | None

    # execute_tool에서 채움
    last_tool_name: str | None
    last_tool_result: dict | None
    tool_error: str | None

    # respond에서 채움
    final_text: str | None
    structured_answer: dict | None

    # 제어
    next_step: str                 # "tool" | "respond" | "end"
    step_count: int
    max_steps: int
```

### 3.2 intent_type 분류 기준

| intent_type      | 예시 발화                                   | retrieve | plan/tool                 |
| ---------------- | ------------------------------------------- | -------- | ------------------------- |
| `greeting`       | "안녕하세요", "고마워요"                    | ❌ 스킵  | ❌ 스킵 → 바로 respond    |
| `profile_update` | "저는 서울 살아요", "임신 16주예요"         | ❌ 스킵  | ❌ 스킵 → 바로 respond    |
| `tool_only`      | "출산예정일이 9월 3일이면 복직일이 언제야?" | ❌ 스킵  | ✅ plan → tool            |
| `rag_required`   | "출산휴가 급여 신청 방법 알려줘"            | ✅ 실행  | ✅ plan → tool or respond |

---

## 4. 클래스·스키마 설계

### 4.1 Plan (Structured Output)

```python
# birth_chatbot/models/plan.py

from pydantic import BaseModel, Field
from typing import Literal, Any

class Plan(BaseModel):
    """다음에 할 일: 툴 호출 또는 응답으로 종료."""
    thought: str = Field(description="현재 상황 판단과 선택 이유 (한 문장)")
    next_step: Literal["tool", "respond"] = Field(description="tool이면 툴 실행, respond면 답변 생성 후 종료")
    action_name: str | None = Field(default=None, description="next_step이 tool일 때 툴 이름")
    action_parameters: dict[str, Any] = Field(default_factory=dict, description="툴 인자")
```

### 4.2 UserProfile (Pydantic 검증용)

```python
# birth_chatbot/models/profile.py

from pydantic import BaseModel
from typing import Literal

class UserProfileModel(BaseModel):
    role: Literal["hr", "employee", "unknown"] = "unknown"
    region: str = ""
    pregnancy_week: int | None = None
    single_or_multiple: Literal["single", "multiple"] = "single"
    due_date: str | None = None
    company_scale: Literal["small", "medium", "large"] | None = None
```

### 4.3 ToolResult (툴 반환 공통)

```python
# birth_chatbot/models/tool_results.py

from pydantic import BaseModel
from typing import Literal, Any

class ToolResult(BaseModel):
    result_type: Literal["success", "structured", "not_found", "error"]
    summary: str                             # 응답 생성용 요약 (1–2문장)
    detail: Any = None                       # 표/체크리스트/문서 목록 등
    suggest_follow_up: list[str] | None = None  # 추천 후속 질문
```

---

## 5. 그래프 정의 (LangGraph)

### 5.1 노드 목록

| 노드명         | 역할                           | v2 변경                                    |
| -------------- | ------------------------------ | ------------------------------------------ |
| `ingest`       | 입력 정규화, 프로필 추출       | 동일                                       |
| `route`        | 의도 분류 → `intent_type` 설정 | **필수 노드로 격상**                       |
| `retrieve`     | RAG 검색                       | `intent_type`이 `rag_required`일 때만 실행 |
| `plan`         | LLM으로 Plan 생성              | `tool_only` / `rag_required`일 때만 실행   |
| `execute_tool` | 툴 실행                        | 동일                                       |
| `respond`      | 최종 답변 생성                 | 동일                                       |
| `postprocess`  | 포맷·안전 검사·로깅            | 동일                                       |

### 5.2 엣지와 조건 분기 (v2)

```text
                         ┌─────────┐
                         │  START  │
                         └────┬────┘
                              │
                              ▼
                         ┌─────────┐
                         │ ingest  │
                         └────┬────┘
                              │
                              ▼
                         ┌─────────┐
                         │  route  │  ← 의도 분류 (필수)
                         └────┬────┘
                              │
           ┌──────────────────┼──────────────────┐
           │                  │                  │
    greeting /         tool_only            rag_required
    profile_update          │                   │
           │                 ▼                   ▼
           │           ┌─────────┐         ┌──────────┐
           │           │  plan   │         │ retrieve │
           │           └────┬────┘         └────┬─────┘
           │                │                   │
           │                │                   ▼
           │                │             ┌──────────┐
           │                │             │   plan   │
           │                │             └────┬─────┘
           │                │                  │
           │         next_step? ───────────────┤
           │                │                  │
           │           "tool"              "respond"
           │                ▼                  │
           │        ┌──────────────┐           │
           │        │ execute_tool │           │
           │        └──────┬───────┘           │
           │               │                   │
           │    ┌──────────┴──────────┐        │
           │    │ step_count < max    │        │
           │  재plan                respond     │
           │                ▼                  │
           └──────────► ┌─────────┐ ◄──────────┘
                        │ respond │
                        └────┬────┘
                             │
                             ▼
                        ┌──────────────┐
                        │ postprocess  │
                        └──────┬───────┘
                               │
                               ▼
                            ┌─────┐
                            │ END │
                            └─────┘
```

### 5.3 그래프 빌드 코드 (graph.py)

```python
# birth_chatbot/graph.py

from langgraph.graph import StateGraph, END
from langgraph.checkpoint.memory import MemorySaver

from birth_chatbot.state import MaternalNavigatorState
from birth_chatbot.nodes.ingest import ingest_node
from birth_chatbot.nodes.route import route_node
from birth_chatbot.nodes.retrieve import retrieve_node
from birth_chatbot.nodes.plan import plan_node
from birth_chatbot.nodes.execute_tool import execute_tool_node
from birth_chatbot.nodes.respond import respond_node
from birth_chatbot.nodes.postprocess import postprocess_node


def _route_after_ingest(state: MaternalNavigatorState) -> str:
    """route 노드는 항상 실행 (필수)."""
    return "route"


def _route_after_route(state: MaternalNavigatorState) -> str:
    """
    intent_type에 따라 다음 노드 결정.
    - greeting / profile_update → retrieve·plan 생략, 바로 respond
    - tool_only               → retrieve 생략, plan으로 이동
    - rag_required            → retrieve 실행
    """
    intent = state.get("intent_type", "rag_required")
    if intent in ("greeting", "profile_update"):
        return "respond"
    elif intent == "tool_only":
        return "plan"
    else:  # rag_required
        return "retrieve"


def _route_after_plan(state: MaternalNavigatorState) -> str:
    if state.get("next_step") == "respond":
        return "respond"
    return "execute_tool"


def _route_after_tool(state: MaternalNavigatorState) -> str:
    if state.get("step_count", 0) >= state.get("max_steps", 5):
        return "respond"
    if state.get("last_tool_result", {}).get("result_type") == "error":
        return "respond"
    return "plan"


def build_maternal_navigator_graph():
    graph = StateGraph(MaternalNavigatorState)

    # 노드 등록
    graph.add_node("ingest", ingest_node)
    graph.add_node("route", route_node)          # ★ 필수 노드
    graph.add_node("retrieve", retrieve_node)
    graph.add_node("plan", plan_node)
    graph.add_node("execute_tool", execute_tool_node)
    graph.add_node("respond", respond_node)
    graph.add_node("postprocess", postprocess_node)

    # 엣지 연결
    graph.set_entry_point("ingest")
    graph.add_edge("ingest", "route")            # ingest → route 항상 실행

    graph.add_conditional_edges(                 # route → 분기
        "route",
        _route_after_route,
        ["retrieve", "plan", "respond"]
    )

    graph.add_edge("retrieve", "plan")           # retrieve → plan (rag_required 경로)

    graph.add_conditional_edges(                 # plan → 분기
        "plan",
        _route_after_plan,
        ["execute_tool", "respond"]
    )

    graph.add_conditional_edges(                 # execute_tool → 분기
        "execute_tool",
        _route_after_tool,
        ["plan", "respond"]
    )

    graph.add_edge("respond", "postprocess")
    graph.add_edge("postprocess", END)

    return graph.compile(checkpointer=MemorySaver())
```

---

## 6. 노드별 함수 흐름

### 6.1 ingest

- **입력:** `state["messages"]`
- **처리:**
    1. 마지막 `HumanMessage`를 꺼내 `current_turn`으로 저장.
    2. 메시지에서 프로필 추출 (거주지, 임신 주수, 역할 등) → `profile` 갱신.
- **출력:** `current_turn`, `profile`

### 6.2 route ★ (v2 핵심 변경)

- **입력:** `state["current_turn"]`
- **처리:**
    1. LLM 또는 규칙 기반으로 `intent_type` 분류.
    2. 규칙 기반 우선 (빠름): 발화 길이, 키워드("안녕", "몇 주", "날짜" 등)로 1차 분류.
    3. 애매한 경우만 LLM 호출 (비용 절감).
- **출력:** `state["intent_type"]`

```python
# birth_chatbot/nodes/route.py 예시 구조

GREETING_KEYWORDS = {"안녕", "반가워", "고마워", "감사", "bye", "잘가"}
PROFILE_KEYWORDS = {"저는", "살아요", "주예요", "주입니다", "역할"}
DATE_KEYWORDS = {"예정일", "복직일", "언제", "계산", "날짜", "주수"}

def route_node(state: MaternalNavigatorState) -> dict:
    text = state["current_turn"]["content"].strip()

    # 1차: 규칙 기반 (LLM 호출 없음)
    if any(kw in text for kw in GREETING_KEYWORDS) and len(text) < 20:
        return {"intent_type": "greeting"}
    if any(kw in text for kw in PROFILE_KEYWORDS) and len(text) < 40:
        return {"intent_type": "profile_update"}
    if any(kw in text for kw in DATE_KEYWORDS):
        return {"intent_type": "tool_only"}

    # 2차: LLM 분류 (애매한 경우)
    # llm.invoke(route_prompt + text) → intent_type 반환
    return {"intent_type": "rag_required"}  # 기본값: 안전하게 RAG 실행
```

### 6.3 retrieve

- **입력:** `state["current_turn"]`, `state["profile"]`
- **처리:** 쿼리 생성 → ChromaDB 검색 → 상위 k개 청크 반환
- **출력:** `state["retrieved_docs"]`
- **호출 조건:** `intent_type == "rag_required"`일 때만

### 6.4 plan

- **입력:** `state["messages"]`, `state["profile"]`, `state["retrieved_docs"]`, `state["last_tool_result"]`
- **처리:** LLM을 `with_structured_output(Plan)`으로 호출 → 다음 액션 결정
- **출력:** `state["plan"]`, `state["next_step"]`
- **호출 조건:** `intent_type in ("tool_only", "rag_required")`일 때

### 6.5 execute_tool

- **입력:** `state["plan"]`
- **처리:** `action_name`으로 툴 조회 → 실행 → `ToolResult`로 정규화
- **출력:** `state["last_tool_result"]`, `state["step_count"]` 증가

### 6.6 respond

- **입력:** `state["messages"]`, `state["plan"]`, `state["last_tool_result"]`, `state["retrieved_docs"]`, `state["intent_type"]`
- **처리:**
    - `greeting` / `profile_update`: 간단한 템플릿 응답 (LLM 호출 최소화)
    - `tool_only` / `rag_required`: 풀 LLM 응답 생성
- **출력:** `state["final_text"]`, `state["structured_answer"]`

### 6.7 postprocess

- **입력:** `state["final_text"]`, `state["structured_answer"]`
- **처리:** 금지어 검사, 포맷 정규화, 로깅
- **출력:** state 유지 (API 레이어에서 `final_text` 읽어 반환)

---

## 7. 툴 설계

### 7.1 툴 목록

| 툴 이름                  | 용도                    | 주요 파라미터               | intent_type              |
| ------------------------ | ----------------------- | --------------------------- | ------------------------ |
| `get_timeline_checklist` | 주수/단계별 체크리스트  | stage, role, pregnancy_week | tool_only / rag_required |
| `get_required_documents` | 필요 서류 목록          | stage, document_type        | rag_required             |
| `get_benefits_by_region` | 지자체 지원금·휴가      | region, benefit_type        | rag_required             |
| `calculate_dates`        | 복직일·신청 마감일 계산 | due_date, leave_type        | **tool_only**            |
| `search_faq`             | FAQ/사례 검색           | query, category             | rag_required             |
| `get_company_process`    | 결재선·프로세스         | process_type                | tool_only                |

### 7.2 툴 등록

```python
# birth_chatbot/tools/__init__.py

from langchain_core.tools import tool
from birth_chatbot.tools.checklist_tools import get_timeline_checklist_impl
from birth_chatbot.tools.benefit_tools import get_benefits_by_region_impl
from birth_chatbot.tools.date_tools import calculate_dates_impl

tools = [
    tool(get_timeline_checklist_impl),
    tool(get_benefits_by_region_impl),
    tool(calculate_dates_impl),
]
tools_by_name = {t.name: t for t in tools}
```

---

## 8. 함수 흐름 요약 (시퀀스)

```text
1. API: POST /chat { "message": "...", "profile": { ... } }
       → state 초기화, graph.invoke(state)

2. ingest:   메시지 정규화 → current_turn, profile 갱신

3. route:    intent_type 분류
             ├─ greeting / profile_update → 5b (respond 직행)
             ├─ tool_only                → 4 (plan 직행)
             └─ rag_required             → 3a (retrieve 실행)

3a. retrieve: current_turn + profile → ChromaDB → retrieved_docs

4. plan:     messages + profile + retrieved_docs + last_tool_result
             → LLM(Plan) → plan, next_step

5a. next_step == "tool"
    → execute_tool → last_tool_result, ToolMessage 추가
    → step_count++
    → 다시 plan (또는 step_count >= max_steps면 respond)

5b. next_step == "respond" (또는 greeting/profile_update 직행)
    → respond → final_text, structured_answer
    → postprocess → END

6. API: final_text, structured_answer 반환
```

---

## 9. 확장 시 고려사항

- **route 정확도 개선:** 초기엔 규칙 기반으로 빠르게, 이후 LLM 분류로 교체. 오분류 시 `rag_required`로 fallback하면 안전.
- **멀티턴:** `MemorySaver` + `thread_id`로 세션 구분, 대화 히스토리 유지.
- **스트리밍:** respond 노드에서 LLM 스트리밍 → 토큰 단위 응답 (LangGraph stream 모드).
- **비용 모니터링:** `tool_only` / `greeting` 경로는 LLM 호출 횟수가 적으므로 intent 분류 정확도가 비용에 직접 영향. 로깅 필수.

---

## 10. 참고 자료

- **LangGraph:** [StateGraph](https://langchain-ai.github.io/langgraph/concepts/low_level/), [conditional edges](https://langchain-ai.github.io/langgraph/concepts/low_level/#conditional-edges), [checkpointer](https://langchain-ai.github.io/langgraph/concepts/persistence/)
- **LangChain:** [Structured output](https://python.langchain.com/docs/how_to/structured_output/), [Tools](https://python.langchain.com/docs/modules/agents/tools/)
- **법령 소스:** [국가법령정보센터 API](https://www.law.go.kr/LSO/lsInfoP.do)
