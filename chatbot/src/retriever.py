"""RAG 검색: ChromaDB에서 관련 법령 청크를 검색."""

from __future__ import annotations


def retrieve(vectorstore, query: str, k: int = 5) -> list:
    """쿼리와 유사한 법령 청크를 k개 반환."""
    return vectorstore.similarity_search(query, k=k)


def format_context(docs: list) -> str:
    """검색된 문서를 프롬프트용 컨텍스트 문자열로 변환."""
    if not docs:
        return ""
    lines: list[str] = []
    for i, doc in enumerate(docs, 1):
        source = doc.metadata.get("source", "알 수 없음")
        lines.append(f"[참조 {i}] {source}\n{doc.page_content}")
    return "\n\n".join(lines)
