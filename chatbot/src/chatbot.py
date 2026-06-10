"""
챗봇 인터페이스: 벡터스토어 초기화 + Agent 실행을 묶는 진입점.
"""

from pathlib import Path
import sys
sys.path.insert(0, str(Path(__file__).parent.parent))

from src.loader import load_all_laws
from src.vectorstore import get_or_build_vectorstore
from src.agent import make_graph, run_agent


def _ensure_company_rules_db() -> None:
    """company_rules ChromaDB 컬렉션이 없으면 취업규칙 docx를 파싱해 빌드."""
    from src.company_rules_rag import _is_available, COLLECTION_NAME
    if _is_available():
        return
    print("[chatbot] company_rules 컬렉션 없음 → 취업규칙 임베딩 시작")
    try:
        import sys as _sys
        _sys.path.insert(0, str(Path(__file__).parent.parent / "scripts"))
        from build_company_rules_db import build
        build(force=True)
        print("[chatbot] company_rules 컬렉션 빌드 완료")
    except Exception as e:
        print(f"[chatbot] company_rules 빌드 실패: {e} (계속 진행)")


class MaternityHRChatbot:
    def __init__(self, force_rebuild: bool = False):
        print("=== 모성보호 HR 챗봇 초기화 중 ===")
        docs = load_all_laws() if force_rebuild else None

        try:
            self.vectorstore = get_or_build_vectorstore(docs)
        except ValueError:
            print("[chatbot] DB 없음 → 법령 로드 후 새로 빌드")
            docs = load_all_laws()
            self.vectorstore = get_or_build_vectorstore(docs)

        _ensure_company_rules_db()

        self.graph = make_graph(self.vectorstore)
        print("=== 초기화 완료. 질문을 입력하세요. ===\n")

    def chat(self, question: str, audience: str = "employee") -> str:
        result = run_agent(self.graph, question, audience=audience)
        return result["answer"]

    def chat_with_sources(self, question: str, audience: str = "employee") -> dict:
        """답변 + 참조 법령 조문 반환."""
        result = run_agent(self.graph, question, audience=audience)
        sources = list({
            f"{d.metadata.get('법령명', '')} {d.metadata.get('조문번호', '')}".strip()
            for d in result["docs"]
            if d.metadata.get("법령명") or d.metadata.get("source")
        })
        if not sources:
            sources = list({d.metadata.get("source", "") for d in result["docs"] if d.metadata.get("source")})
        return {
            "answer": result["answer"],
            "sources": [s for s in sources if s],
            "context": result["context"],
        }
