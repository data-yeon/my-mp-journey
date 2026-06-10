"""
Gov24 지역별 출산 지원 서비스 조회 도구.

LLM이 지역 혜택 질문에 답할 때 전체 데이터를 프롬프트에 넣지 않고,
질문에서 추출한 시도/시군구 기준으로 필요한 항목만 전달한다.
"""

from __future__ import annotations

import json
import os
import re
from functools import lru_cache
from pathlib import Path

_DATA_FILE = Path(__file__).parent.parent / "data" / "gov24_birth_services_v2.json"

_PROVINCE_MAP = {
    "서울": "서울특별시", "부산": "부산광역시", "대구": "대구광역시",
    "인천": "인천광역시", "광주": "광주광역시", "대전": "대전광역시",
    "울산": "울산광역시", "세종": "세종특별자치시",
    "경기": "경기도", "강원": "강원특별자치도",
    "충북": "충청북도", "충남": "충청남도",
    "전북": "전북특별자치도", "전남": "전라남도",
    "경북": "경상북도", "경남": "경상남도", "제주": "제주특별자치도",
}

_BIRTH_RE = re.compile(r"출산|양육|축하|장려|임신|산모|신생아")


@lru_cache(maxsize=1)
def load_birth_services() -> list[dict]:
    if not _DATA_FILE.exists():
        return []
    with open(_DATA_FILE, encoding="utf-8") as f:
        data = json.load(f)
    return data if isinstance(data, list) else data.get("data", [])


def extract_region(text: str) -> tuple[str, str]:
    """질문에서 시도, 시군구 추출."""
    services = load_birth_services()

    # 1. 전체 region 문자열 일치 (예: "서울특별시 마포구")
    known_regions = {s.get("region", "") for s in services if s.get("region")}
    for full in sorted(known_regions, key=len, reverse=True):
        if full and full in text:
            return "", full

    # 2. 시군구 단독 일치 (예: "마포구", "성남시")
    known_districts = {s.get("district", "") for s in services if s.get("district")}
    for district in sorted(known_districts, key=len, reverse=True):
        if district and district in text:
            return "", district

    # 3. 시도 약칭 일치 (예: "서울" → "서울특별시")
    for short, full in _PROVINCE_MAP.items():
        if short in text:
            return full, ""

    return "", ""


def should_handle_birth_benefit_question(question: str) -> bool:
    return bool(extract_region(question)[0] or extract_region(question)[1])


def lookup_birth_services(question: str, limit: int = 5) -> str:
    """지역별 출산·육아 지원금과 정부24 서비스를 조회합니다."""
    services = load_birth_services()
    if not services:
        return "출산 지원 서비스 데이터를 찾을 수 없습니다."

    province, district = extract_region(question)

    if not province and not district:
        return "지역 미확인: 시/도 또는 시/군/구명을 포함해서 다시 질문해 주세요 (예: 서울 출산 지원금)."

    def _matches(s: dict) -> bool:
        region = s.get("region", "")
        s_district = s.get("district", "")
        if district and (district in region or district == s_district):
            return True
        if province and region.startswith(province):
            return True
        return False

    matched = [s for s in services if _matches(s)]

    # 출산/육아 관련 항목 우선
    birth_related = [s for s in matched if _BIRTH_RE.search(s.get("title", "") + s.get("summary", ""))]
    results = (birth_related or matched)[:limit]

    if not results:
        return f"{'해당 지역' if district else province}의 출산 지원 서비스 정보를 찾지 못했습니다."

    lines = [f"[{district or province} 출산·육아 지원 서비스]"]
    for i, s in enumerate(results, 1):
        online = "온라인신청 가능" if s.get("onlineApplyAvailable") else "온라인신청 정보 없음"
        line = (
            f"{i}. {s.get('title', '')} | 지역: {s.get('region', '')} | "
            f"지원형태: {s.get('supportType', '')} | 신청: {online}"
        )
        if s.get("summary"):
            line += f" | 요약: {s['summary']}"
        lines.append(line)

    return "\n".join(lines)
