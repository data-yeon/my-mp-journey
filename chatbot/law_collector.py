# law_collector.py
# 법제처 API → ChromaDB RAG 지식베이스 구축
# 사용법: python law_collector.py

import requests
import xml.etree.ElementTree as ET
import re
import chromadb
from chromadb.utils import embedding_functions
from typing import Optional

# ── 설정 ──────────────────────────────────────────────
OC = "242dsn47"           # 법제처 API 인증값
BASE_URL = "https://www.law.go.kr/DRF"
CHROMA_PATH = "./chroma_db"
COLLECTION_NAME = "maternity_law"

# 수집할 법령 목록 (법령명: mst 번호)
LAW_LIST = {
    "근로기준법": "265959",
    "남녀고용평등과 일·가정 양립 지원에 관한 법률": "276851",
    "고용보험법": "284449",
    "모자보건법": "270399",
}

# 모성보호 관련 조문만 필터링 (법령명: [조문번호 리스트])
TARGET_ARTICLES = {
    "근로기준법": ["74", "75", "76"],
    "남녀고용평등과 일·가정 양립 지원에 관한 법률": ["18", "19", "19의2", "22의2"],
    "고용보험법": ["70", "71", "72", "73", "75", "76"],
    "모자보건법": ["10"],
}

# ── API 호출 ───────────────────────────────────────────
def fetch_law_text(mst: str, article_no: Optional[str] = None) -> str:
    """법제처 API로 조문 전문 가져오기"""
    params = {
        "OC": OC,
        "target": "law",
        "type": "XML",
        "MST": mst,
    }
    if article_no:
        params["JO"] = article_no.zfill(6)  # ex) 74 → 007400

    resp = requests.get(f"{BASE_URL}/lawService.do", params=params, timeout=10)
    resp.raise_for_status()
    return resp.text


def fetch_interpretations(query: str) -> list[dict]:
    """고용노동부 법령해석례 검색"""
    params = {
        "OC": OC,
        "target": "prec",
        "type": "XML",
        "query": query,
        "display": 20,
        "page": 1,
    }
    resp = requests.get(f"{BASE_URL}/SearchService.do", params=params, timeout=10)
    resp.raise_for_status()
    return parse_prec_xml(resp.text)


# ── XML 파싱 ───────────────────────────────────────────
def parse_law_xml(xml_text: str, law_name: str) -> list[dict]:
    """
    조문 XML → 청크 리스트
    청킹 단위: 조문단위(條) → 항(項) 분리
    """
    root = ET.fromstring(xml_text)
    chunks = []

    for article in root.iter("조문단위"):
        if article.findtext("조문여부") == "전문":
            continue

        jo_no = (article.findtext("조문번호") or "").strip()
        jo_title = (article.findtext("조문제목") or "").strip()

        if not jo_no:
            continue

        # 항(項) 단위로 분리
        hang_list = article.findall("항")
        if hang_list:
            for hang in hang_list:
                hang_no = (hang.findtext("항번호") or "①").strip()
                content = clean_text(hang.findtext("항내용") or "")
                if not content:
                    continue
                chunks.append({
                    "text": f"[{law_name} 제{jo_no}조 {jo_title}] {content}",
                    "metadata": {
                        "법령명": law_name,
                        "조문번호": f"제{jo_no}조",
                        "조문제목": jo_title,
                        "항번호": hang_no,
                        "출처": "법제처",
                        "유형": "법령",
                    }
                })
        else:
            # 항 없이 조문내용만 있는 경우
            content = clean_text(article.findtext("조문내용") or "")
            if content:
                chunks.append({
                    "text": f"[{law_name} 제{jo_no}조 {jo_title}] {content}",
                    "metadata": {
                        "법령명": law_name,
                        "조문번호": f"제{jo_no}조",
                        "조문제목": jo_title,
                        "항번호": "",
                        "출처": "법제처",
                        "유형": "법령",
                    }
                })

    return chunks


def parse_prec_xml(xml_text: str) -> list[dict]:
    """해석례 XML → 청크 리스트 (질의-회시 쌍으로 묶기)"""
    root = ET.fromstring(xml_text)
    chunks = []

    for item in root.iter("해석례"):
        title = getattr(item.find("제목"), "text", "") or ""
        question = getattr(item.find("질의요지"), "text", "") or ""
        answer = getattr(item.find("회시내용"), "text", "") or ""
        date = getattr(item.find("회시일자"), "text", "") or ""

        if not (question and answer):
            continue

        text = f"[질의] {clean_text(question)}\n[회시] {clean_text(answer)}"
        chunks.append({
            "text": text,
            "metadata": {
                "제목": title,
                "회시일자": date,
                "출처": "고용노동부",
                "유형": "해석례",
            }
        })

    return chunks


def clean_text(text: str) -> str:
    """불필요한 공백, 태그 제거"""
    text = re.sub(r"<[^>]+>", "", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


# ── ChromaDB 저장 ──────────────────────────────────────
def save_to_chroma(chunks: list[dict], collection):
    """청크 리스트 → ChromaDB 저장"""
    if not chunks:
        return

    documents = [c["text"] for c in chunks]
    metadatas = [c["metadata"] for c in chunks]
    ids = [f"chunk_{i}_{hash(c['text'])}" for i, c in enumerate(chunks)]

    collection.add(
        documents=documents,
        metadatas=metadatas,
        ids=ids,
    )
    print(f"  → {len(chunks)}개 청크 저장 완료")


# ── 메인 ──────────────────────────────────────────────
def main():
    # ChromaDB 초기화
    client = chromadb.PersistentClient(path=CHROMA_PATH)
    emb_fn = embedding_functions.SentenceTransformerEmbeddingFunction(
        model_name="jhgan/ko-sroberta-multitask"  # 한국어 특화 임베딩
    )
    collection = client.get_or_create_collection(
        name=COLLECTION_NAME,
        embedding_function=emb_fn,
    )

    all_chunks = []

    # 1. 법령 조문 수집
    print("=== 법령 조문 수집 ===")
    for law_name, mst in LAW_LIST.items():
        print(f"[{law_name}] 수집 중...")
        try:
            xml_text = fetch_law_text(mst)
            chunks = parse_law_xml(xml_text, law_name)

            # 모성보호 관련 조문만 필터링
            target = TARGET_ARTICLES.get(law_name, [])
            if target:
                chunks = [
                    c for c in chunks
                    if c["metadata"]["조문번호"] in {f"제{no}조" for no in target}
                ]

            all_chunks.extend(chunks)
            print(f"  → {len(chunks)}개 청크 파싱")
        except Exception as e:
            print(f"  ✗ 오류: {e}")

    # 2. 고용노동부 해석례 수집
    print("\n=== 법령해석례 수집 ===")
    queries = ["출산전후휴가", "육아휴직", "임산부 보호", "모성보호"]
    for q in queries:
        print(f"[{q}] 검색 중...")
        try:
            chunks = fetch_interpretations(q)
            all_chunks.extend(chunks)
            print(f"  → {len(chunks)}개 해석례")
        except Exception as e:
            print(f"  ✗ 오류: {e}")

    # 3. ChromaDB 저장
    print(f"\n=== ChromaDB 저장 (총 {len(all_chunks)}개) ===")
    save_to_chroma(all_chunks, collection)
    print("완료!")


if __name__ == "__main__":
    main()
