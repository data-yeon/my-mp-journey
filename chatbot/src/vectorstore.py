"""ChromaDB 벡터스토어 초기화 및 문서 임베딩 저장."""

from __future__ import annotations

import os

from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter

import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent.parent))
import config


def get_embeddings() -> OpenAIEmbeddings:
    return OpenAIEmbeddings(
        model="text-embedding-3-small",
        openai_api_key=config.OPENAI_API_KEY,
    )


def split_documents(docs: list) -> list:
    splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    return splitter.split_documents(docs)


def build_vectorstore(docs: list) -> Chroma:
    """문서를 청크로 분할 후 ChromaDB에 임베딩 저장."""
    chunks = split_documents(docs)
    print(f"[vectorstore] {len(docs)}개 문서 → {len(chunks)}개 청크 생성")
    vs = Chroma.from_documents(
        chunks,
        get_embeddings(),
        persist_directory=config.CHROMA_PATH,
        collection_name=config.COLLECTION_NAME,
    )
    print(f"[vectorstore] ChromaDB 저장 완료: {config.COLLECTION_NAME}")
    return vs


def load_vectorstore() -> Chroma:
    """기존 ChromaDB 로드."""
    print("[vectorstore] 기존 ChromaDB 로드")
    return Chroma(
        persist_directory=config.CHROMA_PATH,
        embedding_function=get_embeddings(),
        collection_name=config.COLLECTION_NAME,
    )


def get_or_build_vectorstore(docs: list | None = None) -> Chroma:
    """
    ChromaDB가 이미 존재하면 로드, 없으면 docs로 새로 빌드.
    docs=None이면 반드시 기존 DB가 있어야 함.
    """
    if os.path.exists(config.CHROMA_PATH):
        return load_vectorstore()
    if docs is None:
        raise ValueError("ChromaDB가 없습니다. docs를 전달해 새로 빌드하세요.")
    return build_vectorstore(docs)
