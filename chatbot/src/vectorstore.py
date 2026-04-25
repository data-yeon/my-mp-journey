"""
ChromaDB 벡터스토어 초기화 및 문서 임베딩 저장.
한국어 임베딩: jhgan/ko-sroberta-multitask
"""

import chromadb
from langchain_community.vectorstores import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.schema import Document
from config import (
    CHROMA_PERSIST_DIR,
    COLLECTION_NAME,
    CHUNK_SIZE,
    CHUNK_OVERLAP,
)

KO_EMBEDDING_MODEL = "jhgan/ko-sroberta-multitask"


def get_embeddings() -> HuggingFaceEmbeddings:
    return HuggingFaceEmbeddings(model_name=KO_EMBEDDING_MODEL)


def split_documents(docs: list[Document]) -> list[Document]:
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=CHUNK_SIZE,
        chunk_overlap=CHUNK_OVERLAP,
        separators=["\n\n", "\n", "。", ". ", " ", ""],
    )
    return splitter.split_documents(docs)


def build_vectorstore(docs: list[Document]) -> Chroma:
    """문서를 청크로 분할 후 ChromaDB에 임베딩 저장."""
    chunks = split_documents(docs)
    print(f"[vectorstore] {len(docs)}개 문서 → {len(chunks)}개 청크 생성")

    embeddings = get_embeddings()
    vectorstore = Chroma.from_documents(
        documents=chunks,
        embedding=embeddings,
        collection_name=COLLECTION_NAME,
        persist_directory=CHROMA_PERSIST_DIR,
    )
    print(f"[vectorstore] ChromaDB 저장 완료: {CHROMA_PERSIST_DIR}")
    return vectorstore


def load_vectorstore() -> Chroma:
    """기존 ChromaDB 로드."""
    embeddings = get_embeddings()
    vectorstore = Chroma(
        collection_name=COLLECTION_NAME,
        embedding_function=embeddings,
        persist_directory=CHROMA_PERSIST_DIR,
    )
    return vectorstore


def get_or_build_vectorstore(docs: list[Document] | None = None) -> Chroma:
    """
    ChromaDB가 이미 존재하면 로드, 없으면 docs로 새로 빌드.
    docs=None이면 반드시 기존 DB가 있어야 함.
    """
    client = chromadb.PersistentClient(path=CHROMA_PERSIST_DIR)
    existing = client.list_collections()

    if COLLECTION_NAME in existing and docs is None:
        print("[vectorstore] 기존 ChromaDB 로드")
        return load_vectorstore()

    if docs is None:
        raise ValueError("ChromaDB가 없습니다. docs를 전달해 새로 빌드하세요.")

    return build_vectorstore(docs)
