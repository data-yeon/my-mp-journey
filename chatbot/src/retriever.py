"""
RAG 검색: ChromaDB에서 관련 법령 청크를 검색.
"""

from langchain_community.vectorstores import Chroma
from langchain.schema import Document
from config import TOP_K


def retrieve(vectorstore: Chroma, query: str, k: int = TOP_K) -> list[Document]:
    """쿼리와 유사한 법령 청크를 k개 반환."""
    retriever = vectorstore.as_retriever(
        search_type="similarity",
        search_kwargs={"k": k},
    )
    results = retriever.invoke(query)
    return results


def format_context(docs: list[Document]) -> str:
    """검색된 문서를 프롬프트용 컨텍스트 문자열로 변환."""
    parts = []
    for i, doc in enumerate(docs, 1):
        source = doc.metadata.get("source", "알 수 없음")
        parts.append(f"[참조 {i}] ({source})\n{doc.page_content}")
    return "\n\n".join(parts)
