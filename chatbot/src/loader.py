"""
law.go.kr에서 모성보호 관련 법령 텍스트를 수집하는 모듈.

law.go.kr Open API (OC 코드 필요) 또는 로컬 텍스트 파일을 사용.
OC 코드 없이도 내장 샘플 조문으로 동작함.
"""

import os
import requests
from bs4 import BeautifulSoup
from langchain.schema import Document
from config import LAW_API_BASE, LAW_OC

# 모성보호 핵심 조문 샘플 (law.go.kr API 미사용 시 폴백)
SAMPLE_LAW_TEXTS = [
    {
        "source": "근로기준법 제74조",
        "title": "출산전후휴가",
        "content": (
            "사용자는 임신 중의 여성에게 출산 전과 출산 후를 통하여 90일(한 번에 둘 이상 자녀를 임신한 경우에는 120일)의 "
            "출산전후휴가를 주어야 한다. 이 경우 휴가 기간의 배정은 출산 후에 45일(한 번에 둘 이상 자녀를 임신한 경우에는 "
            "60일) 이상이 되어야 한다."
        ),
    },
    {
        "source": "근로기준법 제74조의2",
        "title": "태아검진 시간",
        "content": (
            "사용자는 임신한 여성근로자가 「모자보건법」 제10조에 따른 임산부 정기건강진단을 받는 데 필요한 시간을 청구하면 "
            "이를 허용하여 주어야 한다. 사용자는 건강진단 시간을 이유로 그 근로자의 임금을 삭감하여서는 아니 된다."
        ),
    },
    {
        "source": "근로기준법 제75조",
        "title": "육아 시간",
        "content": (
            "생후 1년 미만의 유아(乳兒)를 가진 여성 근로자가 청구하면 제54조에 따른 휴게시간 외에 1일 2회 각각 30분 이상의 "
            "유급 수유 시간을 주어야 한다."
        ),
    },
    {
        "source": "남녀고용평등법 제19조",
        "title": "육아휴직",
        "content": (
            "사업주는 임신 중인 여성 근로자가 모성을 보호하거나 근로자가 만 8세 이하 또는 초등학교 2학년 이하의 자녀를 양육하기 "
            "위하여 휴직(이하 '육아휴직'이라 한다)을 신청하는 경우에 이를 허용하여야 한다. "
            "육아휴직의 기간은 1년 이내로 한다."
        ),
    },
    {
        "source": "남녀고용평등법 제19조의2",
        "title": "육아기 근로시간 단축",
        "content": (
            "사업주는 근로자가 만 8세 이하 또는 초등학교 2학년 이하의 자녀를 양육하기 위하여 근로시간의 단축(이하 "
            "'육아기 근로시간 단축'이라 한다)을 신청하는 경우에 이를 허용하여야 한다. "
            "육아기 근로시간 단축 기간은 1년 이내로 하되, 육아휴직 미사용 기간을 가산하면 최대 2년까지 가능하다."
        ),
    },
    {
        "source": "남녀고용평등법 제19조의3",
        "title": "육아기 근로시간 단축 중 근로조건",
        "content": (
            "사업주는 육아기 근로시간 단축을 허용하는 경우 단축 후 근로시간은 주당 15시간 이상이어야 하고 35시간을 넘어서는 "
            "아니 된다. 사업주는 육아기 근로시간 단축을 이유로 해당 근로자에게 해고나 그 밖의 불리한 처우를 하여서는 아니 된다."
        ),
    },
    {
        "source": "남녀고용평등법 제18조",
        "title": "배우자 출산휴가",
        "content": (
            "사업주는 근로자가 배우자의 출산을 이유로 휴가를 청구하는 경우에 20일의 범위에서 3회에 한정하여 나누어 사용할 수 있는 "
            "휴가를 주어야 한다. 이 경우 사용한 휴가기간은 유급으로 한다."
        ),
    },
    {
        "source": "고용보험법 제76조",
        "title": "출산전후휴가급여",
        "content": (
            "고용노동부장관은 「근로기준법」 제74조에 따른 출산전후휴가 또는 유산·사산 휴가를 사용한 근로자 중 일정한 요건을 "
            "갖춘 자에게 출산전후휴가급여 등을 지급한다. "
            "출산전후휴가급여는 「근로기준법」의 통상임금에 해당하는 금액을 지급하되, 상한액은 월 210만원이다."
        ),
    },
    {
        "source": "고용보험법 제70조",
        "title": "육아휴직급여",
        "content": (
            "고용노동부장관은 육아휴직을 30일 이상 부여받은 피보험자 중 육아휴직 시작일 이전에 피보험 단위기간이 합산하여 "
            "180일 이상인 피보험자에게 육아휴직급여를 지급한다. "
            "육아휴직급여는 육아휴직 시작일을 기준으로 한 월 통상임금의 100분의 80에 해당하는 금액으로 하되, "
            "상한액은 월 150만원, 하한액은 월 70만원으로 한다."
        ),
    },
    {
        "source": "근로기준법 제74조 제7항",
        "title": "임신기 근로시간 단축",
        "content": (
            "사용자는 임신 후 12주 이내 또는 36주 이후에 있는 여성 근로자가 1일 2시간의 근로시간 단축을 신청하는 경우 이를 "
            "허용하여야 한다. 다만, 1일 근로시간이 8시간 미만인 근로자에 대하여는 1일 근로시간이 6시간이 되도록 근로시간 단축을 "
            "허용할 수 있다. 사용자는 근로시간 단축을 이유로 해당 근로자의 임금을 삭감하여서는 아니 된다."
        ),
    },
]


def load_from_law_api(law_name: str, law_id: str) -> list[Document]:
    """law.go.kr Open API로 법령 전문 수집 (OC 코드 필요)."""
    if LAW_OC == "your_oc_here":
        return []

    params = {
        "OC": LAW_OC,
        "target": "law",
        "type": "XML",
        "ID": law_id,
    }
    try:
        resp = requests.get(LAW_API_BASE, params=params, timeout=10)
        resp.encoding = "utf-8"
        soup = BeautifulSoup(resp.text, "lxml-xml")
        articles = soup.find_all("조문내용")
        docs = []
        for art in articles:
            text = art.get_text(strip=True)
            if text:
                docs.append(Document(page_content=text, metadata={"source": law_name}))
        return docs
    except Exception as e:
        print(f"[loader] API 수집 실패 ({law_name}): {e}")
        return []


def load_local_file(filepath: str) -> list[Document]:
    """data/laws/ 아래 텍스트 파일 로드."""
    docs = []
    if not os.path.exists(filepath):
        return docs
    with open(filepath, encoding="utf-8") as f:
        content = f.read()
    filename = os.path.basename(filepath)
    docs.append(Document(page_content=content, metadata={"source": filename}))
    return docs


def load_sample_laws() -> list[Document]:
    """내장 샘플 조문 로드 (API/파일 없을 때 사용)."""
    docs = []
    for law in SAMPLE_LAW_TEXTS:
        text = f"[{law['source']}] {law['title']}\n{law['content']}"
        docs.append(
            Document(
                page_content=text,
                metadata={"source": law["source"], "title": law["title"]},
            )
        )
    return docs


def load_all_laws(data_dir: str = "./data/laws") -> list[Document]:
    """
    우선순위:
    1. data/laws/ 에 .txt 파일 있으면 로드
    2. law.go.kr API (OC 코드 있을 때)
    3. 내장 샘플 조문
    """
    docs = []

    # 1. 로컬 파일
    if os.path.isdir(data_dir):
        for fname in os.listdir(data_dir):
            if fname.endswith(".txt"):
                docs.extend(load_local_file(os.path.join(data_dir, fname)))

    if docs:
        print(f"[loader] 로컬 파일 {len(docs)}개 문서 로드 완료")
        return docs

    # 2. 샘플 조문 (fallback)
    print("[loader] 로컬 파일 없음 → 내장 샘플 조문 사용")
    docs = load_sample_laws()
    print(f"[loader] 샘플 조문 {len(docs)}개 로드 완료")
    return docs
