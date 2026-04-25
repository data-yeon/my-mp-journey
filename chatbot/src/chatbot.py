"""
챗봇 인터페이스: 벡터스토어 초기화 + Agent 실행을 묶는 진입점.
"""

from src.loader import load_all_laws
from src.vectorstore import get_or_build_vectorstore
from src.agent import make_graph, run_agent


class MaternityHRChatbot:
    def __init__(self, force_rebuild: bool = False):
        print("=== 모성보호 HR 챗봇 초기화 중 ===")
        docs = load_all_laws() if force_rebuild else None

        # force_rebuild=False이고 DB 없으면 자동으로 docs 로드 후 빌드
        try:
            self.vectorstore = get_or_build_vectorstore(docs)
        except ValueError:
            print("[chatbot] DB 없음 → 법령 로드 후 새로 빌드")
            docs = load_all_laws()
            self.vectorstore = get_or_build_vectorstore(docs)

        self.graph = make_graph(self.vectorstore)
        print("=== 초기화 완료. 질문을 입력하세요. ===\n")

    def chat(self, question: str) -> str:
        result = run_agent(self.graph, question)
        return result["answer"]

    def chat_with_sources(self, question: str) -> dict:
        """답변 + 참조 법령 조문 반환."""
        result = run_agent(self.graph, question)
        sources = list({doc.metadata.get("source", "") for doc in result["docs"]})
        return {
            "answer": result["answer"],
            "sources": sources,
            "context": result["context"],
        }
