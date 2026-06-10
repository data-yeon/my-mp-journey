"""
취업규칙 RAG 검색 도구.

build_company_rules_db.py로 ChromaDB에 임베딩된 취업규칙 조문을
벡터 유사도 검색으로 조회한다. 하드코딩 템플릿 없이 LLM이 동적으로
법령 결과와 합성해 답변을 만든다.
"""

from __future__ import annotations

from functools import lru_cache

from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings

import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent.parent))
import config

COLLECTION_NAME = "company_rules"
_K = 4  # 기본 검색 개수


@lru_cache(maxsize=1)
def _get_vectorstore() -> Chroma:
    embeddings = OpenAIEmbeddings(
        model="text-embedding-3-small",
        openai_api_key=config.OPENAI_API_KEY,
    )
    return Chroma(
        persist_directory=config.CHROMA_PATH,
        embedding_function=embeddings,
        collection_name=COLLECTION_NAME,
    )


def _is_available() -> bool:
    try:
        import chromadb
        client = chromadb.PersistentClient(path=config.CHROMA_PATH)
        names = client.list_collections()  # v0.6+: returns list[str]
        return COLLECTION_NAME in names
    except Exception:
        return False


def lookup_company_rules(query: str) -> str:
    """
    회사 취업규칙·사내 규정에 따른 HR 정책을 조회합니다.
    '우리 회사', '사규', '취업규칙', '사내 규정' 관련 질문에 사용하세요.
    """
    if not _is_available():
        return (
            "취업규칙 데이터베이스가 준비되지 않았습니다. "
            "scripts/build_company_rules_db.py 를 먼저 실행하세요."
        )

    try:
        vs = _get_vectorstore()
        docs = vs.similarity_search(query, k=_K)
    except Exception as e:
        return f"취업규칙 검색 중 오류가 발생했습니다: {e}"

    if not docs:
        return "취업규칙에서 관련 조항을 찾지 못했습니다. 제도명을 더 구체적으로 입력해 주세요."

    lines: list[str] = ["[취업규칙 관련 조문]"]
    for i, doc in enumerate(docs, 1):
        meta = doc.metadata
        header = f"{meta.get('article_no', '')} {meta.get('article_title', '')}".strip()
        chapter = f"{meta.get('chapter_no', '')} {meta.get('chapter_title', '')}".strip()
        lines.append(f"\n[조문 {i}] {header} ({chapter})")
        lines.append(doc.page_content)

    return "\n".join(lines)


def should_handle(question: str) -> bool:
    """에이전트가 이 도구를 쓸지 판단하는 힌트 (직접 호출 용도)."""
    keywords = ["우리 회사", "사규", "취업규칙", "사내 규정", "회사 규정", "내규"]
    return any(kw in question for kw in keywords)
