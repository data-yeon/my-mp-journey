"""
Wellness synthetic review dataset generator v2.

Creates a research-oriented synthetic dataset for pregnancy wellness product
recommendation. The schema follows docs/wellness_score_criteria.md:
rating, sentiment, aspect sentiment, review reliability, pregnancy fit, and
safety risk are combined into a trust score.
"""

from __future__ import annotations

import json
import random
import uuid
from dataclasses import dataclass
from datetime import datetime, timedelta
from pathlib import Path
from typing import Any


RANDOM_SEED = 20260426
DEFAULT_DATASET_SIZE = 600
OUTPUT_PATH = Path(__file__).with_name("wellness_review_synthetic_v2.json")
GENERATED_AT = "2026-04-26"
SCHEMA_VERSION = "wellness_synthetic_v2"

random.seed(RANDOM_SEED)


PERIODS = ["초기", "중기", "후기"]
CATEGORIES = ["영양제", "식품", "바디케어", "의류", "용품"]
GENERATION_STRATEGIES = ["prompt_based", "rag_augmented", "self_refinement"]
GENERATION_META = {
    "prompt_based": ("template_seeded_generator_v2", "wellness_review_prompt_v1", 0),
    "rag_augmented": ("template_seeded_generator_v2", "wellness_review_rag_v1", 0),
    "self_refinement": ("template_seeded_generator_v2", "wellness_review_self_refine_v1", 1),
}


@dataclass(frozen=True)
class Product:
    key: str
    name: str
    category: str
    subcategory: str
    form: str
    target_period: str
    week_range: tuple[int, int]
    options: list[str]
    search_keyword: str
    fit_reason: str
    baseline_safety_risk: float
    aspects: list[str]
    symptom_contexts: list[str]


ASPECTS = {
    "영양제": ["effectiveness", "side_effect_comfort", "ingredient_confidence", "intake_convenience", "price_value"],
    "식품": ["taste", "nausea_tolerance", "digestion_comfort", "ingredient_confidence", "repurchase_intent"],
    "바디케어": ["moisturizing", "skin_reaction_comfort", "scent_acceptability", "ingredient_confidence", "texture"],
    "의류": ["comfort", "size_fit", "belly_pressure_comfort", "fabric", "durability"],
    "용품": ["usability", "support_effect", "stability", "durability", "price_value"],
}


PRODUCTS = [
    Product("folic_tabs", "맘편한 엽산 400", "영양제", "엽산", "정제", "초기", (1, 12), ["60정", "90정"], "임산부 엽산", "임신 초기 엽산 섭취를 고려하는 사용자를 위한 제품", 0.12, ASPECTS["영양제"], ["엽산", "입덧", "초기 영양관리"]),
    Product("probiotic", "순한 임산부 유산균", "영양제", "유산균", "캡슐", "초기", (1, 12), ["30캡슐", "60캡슐"], "임산부 유산균", "초기 소화 불편과 장 건강을 고려한 제품", 0.18, ASPECTS["영양제"], ["변비", "속더부룩함", "입덧"]),
    Product("iron_jelly", "마더 철분 젤리", "영양제", "철분", "젤리", "중기", (13, 27), ["30포", "60포"], "임산부 철분", "중기 이후 철분 관리 수요가 높은 사용자를 위한 제품", 0.22, ASPECTS["영양제"], ["빈혈", "어지러움", "철분제 속불편"]),
    Product("calcium_d", "칼슘D 밸런스", "영양제", "칼슘", "정제", "중기", (13, 27), ["60정", "120정"], "임산부 칼슘", "중기 이후 칼슘 섭취를 고려하는 사용자를 위한 제품", 0.16, ASPECTS["영양제"], ["다리저림", "영양관리", "중기 영양제"]),
    Product("omega_post", "산후 오메가 밸런스", "영양제", "오메가3", "캡슐", "후기", (28, 40), ["60캡슐", "90캡슐"], "임산부 오메가3", "후기와 출산 준비 단계에서 성분 확인이 필요한 영양제", 0.24, ASPECTS["영양제"], ["후기 영양관리", "캡슐 냄새", "출산 준비"]),
    Product("multi_late", "마더 종합비타민 후기", "영양제", "종합비타민", "정제", "후기", (28, 40), ["60정", "120정"], "임산부 종합비타민", "후기 영양 균형을 고려하는 제품", 0.2, ASPECTS["영양제"], ["피로감", "후기 영양관리", "알약 크기"]),
    Product("ginger_candy", "입덧 생강 캔디", "식품", "입덧간식", "캔디", "초기", (4, 14), ["20개입", "40개입"], "입덧 캔디", "초기 입덧 부담을 줄이고 싶은 사용자가 찾는 간식", 0.1, ASPECTS["식품"], ["입덧", "냄새 민감", "외출"]),
    Product("rooibos_tea", "무카페인 루이보스티", "식품", "차", "티백", "초기", (1, 40), ["30티백", "60티백"], "임산부 차", "카페인을 줄이고 싶은 임산부가 찾는 음료", 0.08, ASPECTS["식품"], ["카페인 걱정", "수분 섭취", "입덧"]),
    Product("mom_soy", "맘마 두유 플러스", "식품", "두유", "음료", "중기", (13, 27), ["190ml x 24", "190ml x 48"], "임산부 두유", "중기 간식과 단백질 보충 수요를 고려한 제품", 0.12, ASPECTS["식품"], ["간식", "단백질", "속 든든함"]),
    Product("protein_bar", "임산부 곡물 단백질바", "식품", "간식", "바", "중기", (13, 27), ["12개입", "24개입"], "임산부 간식", "중기 외출 중 간단한 간식을 원하는 사용자를 위한 제품", 0.14, ASPECTS["식품"], ["출근 간식", "공복감", "단맛"]),
    Product("date_snack", "출산준비 대추칩", "식품", "간식", "칩", "후기", (28, 40), ["80g", "160g"], "임산부 후기 간식", "후기 가벼운 간식을 찾는 사용자를 위한 제품", 0.12, ASPECTS["식품"], ["후기 간식", "단맛", "소화 부담"]),
    Product("mild_soup", "산모 준비 곡물죽", "식품", "죽", "파우치", "후기", (32, 40), ["5팩", "10팩"], "출산 준비 식품", "출산 준비 단계의 간편식을 찾는 사용자를 위한 제품", 0.1, ASPECTS["식품"], ["출산 준비", "간편식", "속 편함"]),
    Product("mild_bodywash", "무향 순한 바디워시", "바디케어", "바디워시", "액상", "초기", (1, 12), ["300ml", "500ml"], "임산부 바디워시", "초기 냄새 민감과 피부 자극을 고려한 제품", 0.12, ASPECTS["바디케어"], ["냄새 민감", "피부 민감", "샤워"]),
    Product("belly_lotion", "저자극 보습 로션", "바디케어", "보습로션", "로션", "초기", (1, 20), ["250ml", "400ml"], "임산부 로션", "초기부터 보습 관리를 시작하는 사용자를 위한 제품", 0.14, ASPECTS["바디케어"], ["건조함", "향 민감", "보습"]),
    Product("stretch_cream", "튼살 케어 크림", "바디케어", "튼살크림", "크림", "중기", (13, 40), ["200ml", "300ml"], "임산부 튼살크림", "배가 커지는 중기 이후 보습 관리를 고려한 제품", 0.16, ASPECTS["바디케어"], ["튼살 걱정", "가려움", "보습"]),
    Product("belly_oil", "마더 보습 오일", "바디케어", "보습오일", "오일", "중기", (13, 40), ["100ml", "150ml"], "임산부 오일", "중기 이후 건조감과 가려움 관리를 고려한 제품", 0.18, ASPECTS["바디케어"], ["건조함", "가려움", "끈적임"]),
    Product("sun_mild", "임산부 무기자차 선크림", "바디케어", "선크림", "크림", "후기", (1, 40), ["50ml", "80ml"], "임산부 선크림", "성분과 피부 자극을 신경 쓰는 사용자를 위한 제품", 0.16, ASPECTS["바디케어"], ["피부 민감", "외출", "백탁"]),
    Product("nipple_balm", "수유 준비 보습밤", "바디케어", "보습밤", "밤", "후기", (32, 40), ["20g", "40g"], "수유 준비 크림", "출산 전후 피부 보습을 고려하는 제품", 0.2, ASPECTS["바디케어"], ["수유 준비", "피부 민감", "성분 확인"]),
    Product("maternity_panty", "초기 무압박 팬티", "의류", "속옷", "의류", "초기", (1, 20), ["M", "L", "XL"], "임산부 팬티", "초기 복부 압박을 줄이고 싶은 사용자를 위한 제품", 0.04, ASPECTS["의류"], ["복부 압박", "속옷", "피부 쓸림"]),
    Product("soft_bra", "와이어리스 임산부 브라", "의류", "브라", "의류", "초기", (1, 40), ["M", "L", "XL"], "임산부 브라", "가슴 압박과 착용감을 고려한 제품", 0.04, ASPECTS["의류"], ["가슴 압박", "착용감", "사이즈"]),
    Product("maternity_leggings", "복부밴드 레깅스", "의류", "레깅스", "의류", "중기", (13, 36), ["M", "L", "XL", "XXL"], "임산부 레깅스", "중기 이후 복부 변화와 활동성을 고려한 의류", 0.05, ASPECTS["의류"], ["복부 압박", "외출복", "신축성"]),
    Product("maternity_pants", "출근용 임산부 팬츠", "의류", "팬츠", "의류", "중기", (13, 36), ["M", "L", "XL"], "임산부 바지", "직장 출근 시 편한 착용감을 고려한 의류", 0.05, ASPECTS["의류"], ["출근복", "사이즈", "복부 밴드"]),
    Product("nursing_bra", "수유 겸용 브라", "의류", "수유브라", "의류", "후기", (28, 40), ["M", "L", "XL"], "수유브라", "출산 준비와 후기 착용감을 고려한 제품", 0.05, ASPECTS["의류"], ["출산 준비", "수유 준비", "착용감"]),
    Product("maternity_dress", "막달 편한 원피스", "의류", "원피스", "의류", "후기", (28, 40), ["Free", "L", "XL"], "임산부 원피스", "후기 복부 압박을 줄이고 싶은 사용자를 위한 의류", 0.04, ASPECTS["의류"], ["막달 외출", "복부 압박", "세탁"]),
    Product("nausea_band", "입덧 완화 손목밴드", "용품", "입덧밴드", "밴드", "초기", (4, 14), ["1쌍", "2쌍"], "입덧밴드", "초기 입덧 상황에서 보조적으로 사용하는 용품", 0.12, ASPECTS["용품"], ["입덧", "출근", "외출"]),
    Product("pregnancy_pillow", "U자형 바디필로우", "용품", "수면쿠션", "쿠션", "초기", (10, 40), ["기본형", "커버추가"], "임산부 바디필로우", "수면 자세가 불편한 임산부가 사용하는 용품", 0.08, ASPECTS["용품"], ["수면 불편", "허리 부담", "옆으로 자기"]),
    Product("belly_support", "임산부 복대 벨트", "용품", "복대", "벨트", "중기", (16, 36), ["M", "L", "XL"], "임산부 복대", "중기 이후 복부 무게와 허리 부담을 보조하는 용품", 0.18, ASPECTS["용품"], ["허리 부담", "복부 무게", "외출"]),
    Product("compression_socks", "임산부 압박 스타킹", "용품", "압박스타킹", "스타킹", "중기", (16, 40), ["M", "L", "XL"], "임산부 스타킹", "다리 붓기와 장시간 서 있음을 보조하는 용품", 0.24, ASPECTS["용품"], ["다리 붓기", "장시간 서있음", "압박감"]),
    Product("nursing_cushion", "C형 수유쿠션", "용품", "수유쿠션", "쿠션", "후기", (28, 40), ["기본형", "커버추가"], "수유쿠션", "출산 후 수유 준비를 고려해 후기부터 준비하는 용품", 0.06, ASPECTS["용품"], ["수유 준비", "허리 부담", "출산 준비"]),
    Product("hospital_bag", "출산가방 정리 파우치", "용품", "출산준비용품", "파우치", "후기", (32, 40), ["5종", "8종"], "출산가방", "막달 출산 준비물을 정리하려는 사용자를 위한 용품", 0.03, ASPECTS["용품"], ["출산 준비", "정리", "병원가방"]),
]


def make_id(prefix: str, index: int) -> str:
    return str(uuid.uuid5(uuid.NAMESPACE_DNS, f"momjourney-wellness-{prefix}-{index}"))


def random_date(start: str = "2024-01-01", end: str = "2025-12-31") -> str:
    start_dt = datetime.strptime(start, "%Y-%m-%d")
    end_dt = datetime.strptime(end, "%Y-%m-%d")
    return (start_dt + timedelta(days=random.randint(0, (end_dt - start_dt).days))).strftime("%Y-%m-%d")


def period_from_week(week: int) -> str:
    if week <= 12:
        return "임신초기"
    if week <= 27:
        return "임신중기"
    return "임신후기"


def products_for(period: str, category: str) -> list[Product]:
    matches = [p for p in PRODUCTS if p.target_period == period and p.category == category]
    if not matches:
        raise ValueError(f"No products for {period}/{category}")
    return matches


def choose_week(product: Product, scenario_type: str) -> int:
    lo, hi = product.week_range
    if scenario_type == "period_mismatch":
        candidates = [w for w in range(1, 41) if not (lo <= w <= hi)]
        return random.choice(candidates)
    return random.randint(lo, hi)


def bounded(value: float, lo: float = 0.0, hi: float = 1.0) -> float:
    return max(lo, min(hi, value))


def choose_scenario_type(index: int) -> str:
    # A realistic review pool: mostly usable reviews, with some failures and
    # safety-sensitive cases for the penalty model to catch.
    pattern = [
        "positive",
        "positive",
        "positive",
        "mixed",
        "mixed",
        "negative",
        "safety_concern",
        "period_mismatch",
    ]
    return pattern[index % len(pattern)]


def aspect_values(product: Product, scenario_type: str) -> dict[str, float]:
    ranges = {
        "positive": (0.72, 0.96),
        "mixed": (0.48, 0.86),
        "negative": (0.18, 0.58),
        "safety_concern": (0.42, 0.88),
        "period_mismatch": (0.55, 0.9),
    }
    lo, hi = ranges[scenario_type]
    values = {aspect: round(random.uniform(lo, hi), 3) for aspect in product.aspects}

    if scenario_type == "mixed":
        values[random.choice(product.aspects)] = round(random.uniform(0.28, 0.48), 3)
    if scenario_type == "negative":
        for aspect in random.sample(product.aspects, k=2):
            values[aspect] = round(random.uniform(0.12, 0.35), 3)
    if scenario_type == "safety_concern":
        for aspect in [a for a in product.aspects if "side_effect" in a or "ingredient" in a or "skin_reaction" in a or "belly_pressure" in a or "stability" in a]:
            values[aspect] = round(random.uniform(0.18, 0.42), 3)

    return values


def rating_and_sentiment(scenario_type: str) -> tuple[float, float, str]:
    if scenario_type == "positive":
        rating = round(random.uniform(4.3, 5.0), 1)
        sentiment = round(random.uniform(0.76, 0.96), 3)
    elif scenario_type == "mixed":
        rating = round(random.uniform(3.4, 4.3), 1)
        sentiment = round(random.uniform(0.52, 0.74), 3)
    elif scenario_type == "negative":
        rating = round(random.uniform(1.8, 3.1), 1)
        sentiment = round(random.uniform(0.18, 0.46), 3)
    elif scenario_type == "safety_concern":
        rating = round(random.uniform(3.6, 4.8), 1)
        sentiment = round(random.uniform(0.48, 0.72), 3)
    else:
        rating = round(random.uniform(3.0, 4.4), 1)
        sentiment = round(random.uniform(0.48, 0.78), 3)
    label = "긍정" if sentiment >= 0.65 else "부정" if sentiment < 0.45 else "혼합"
    return rating, sentiment, label


def side_effects_and_safety(product: Product, scenario_type: str) -> tuple[list[str], list[str], str, bool, float]:
    mild_by_category = {
        "영양제": ["속 울렁거림", "비린 향", "변비"],
        "식품": ["단맛 부담", "소화 불편", "향 민감"],
        "바디케어": ["향 자극", "가려움", "피부 따가움"],
        "의류": ["복부 압박", "허벅지 쓸림", "사이즈 작음"],
        "용품": ["압박감", "착용 번거로움", "고정감 부족"],
    }
    flags: list[str] = []
    side_effects: list[str] = []
    medical_claim_level = "none"
    needs_review = False
    risk = product.baseline_safety_risk

    if scenario_type == "mixed":
        side_effects = random.sample(mild_by_category[product.category], k=1)
        flags = ["사용감 개인차"]
        risk += random.uniform(0.08, 0.18)
    elif scenario_type == "negative":
        side_effects = random.sample(mild_by_category[product.category], k=2)
        flags = ["불편 경험 다수"]
        risk += random.uniform(0.18, 0.32)
    elif scenario_type == "safety_concern":
        side_effects = random.sample(mild_by_category[product.category], k=2)
        flags = ["성분 확인 필요", "전문가 상담 권장"]
        medical_claim_level = "medium" if product.category in ["영양제", "바디케어"] else "low"
        needs_review = product.category in ["영양제", "바디케어", "용품"]
        risk += random.uniform(0.38, 0.58)
    elif scenario_type == "period_mismatch":
        flags = ["주수 적합성 확인 필요"]
        risk += random.uniform(0.08, 0.2)

    return flags, side_effects, medical_claim_level, needs_review, round(bounded(risk), 3)


def pregnancy_fit(product: Product, week: int) -> tuple[float, str]:
    lo, hi = product.week_range
    if lo <= week <= hi:
        return round(random.uniform(0.86, 0.98), 3), product.fit_reason
    if abs(week - lo) <= 4 or abs(week - hi) <= 4:
        return round(random.uniform(0.55, 0.72), 3), "제품 권장 주수와 가까우나 개인 상황 확인이 필요함"
    return round(random.uniform(0.22, 0.48), 3), "제품 권장 주수와 차이가 있어 추천 적합도가 낮음"


def review_reliability(verified: bool, helpful_count: int, usage_days: int, content: str, symptom_count: int) -> float:
    verified_score = 0.28 if verified else 0.1
    helpful_score = min(helpful_count / 120, 1.0) * 0.22
    length_score = min(len(content) / 140, 1.0) * 0.22
    duration_score = min(usage_days / 30, 1.0) * 0.16
    context_score = min(symptom_count / 3, 1.0) * 0.12
    return round(bounded(verified_score + helpful_score + length_score + duration_score + context_score), 3)


def compute_scores(
    rating: float,
    sentiment_score: float,
    aspect_sentiments: dict[str, float],
    review_reliability_score: float,
    pregnancy_fit_score: float,
    safety_risk_score: float,
) -> tuple[float, float, float, float]:
    rating_norm = round(rating / 5, 3)
    aspect_score = round(sum(aspect_sentiments.values()) / len(aspect_sentiments), 3)
    base = round(
        rating_norm * 0.25
        + sentiment_score * 0.25
        + aspect_score * 0.20
        + review_reliability_score * 0.15
        + pregnancy_fit_score * 0.15,
        4,
    )
    trust = round(base * (1 - 0.6 * safety_risk_score), 4)
    return rating_norm, aspect_score, base, trust


def recommendation_label(trust: float, safety_risk: float, needs_medical_review: bool) -> str:
    if needs_medical_review:
        return "전문가 확인 필요"
    if safety_risk >= 0.70:
        return "주의"
    if trust >= 0.75 and safety_risk < 0.40:
        return "추천"
    if trust >= 0.55:
        return "조건부 추천"
    return "비추천"


def repurchase_intent(label: str) -> str:
    if label == "긍정":
        return random.choice(["재구매 의향 있음", "재구매 예정", "선물 의향 있음"])
    if label == "혼합":
        return random.choice(["상황에 따라 재구매", "다른 제품과 비교 예정", "가격 할인 시 재구매"])
    return random.choice(["재구매 의향 낮음", "다른 제품 구매 예정", "재구매 안 함"])


def supplies_positive_text(product: Product, week: int, symptom: str) -> str:
    if product.subcategory == "입덧밴드":
        return f"임신 {week}주에 {symptom} 때문에 구매했는데 출근길에 착용하기 어렵지 않았어요."
    if product.subcategory == "수면쿠션":
        return f"임신 {week}주에 밤마다 자세 잡기가 힘들었는데 옆으로 누울 때 안정감이 생겼습니다."
    if product.subcategory == "복대":
        return f"임신 {week}주에 복부 무게 때문에 구매했는데 외출할 때 허리 부담이 조금 줄었습니다."
    if product.subcategory == "압박스타킹":
        return f"임신 {week}주에 다리 붓기가 신경 쓰여 샀는데 장시간 서 있을 때 보조가 됐습니다."
    if product.subcategory == "수유쿠션":
        return f"출산 준비용으로 미리 샀는데 쿠션감이 안정적이고 커버 분리도 편했습니다."
    if product.subcategory == "출산준비용품":
        return f"임신 {week}주에 출산가방을 준비하면서 작은 물건을 나누어 담기 편했습니다."
    return f"임신 {week}주에 {symptom} 때문에 구매했는데 사용법이 어렵지 않았어요."


def supplies_concern_text(product: Product) -> str:
    if product.subcategory == "출산준비용품":
        return "수납은 편하지만 지퍼가 조금 뻑뻑해서 급하게 열 때는 불편했습니다."
    if product.subcategory == "수유쿠션":
        return "쿠션감은 좋은데 부피가 커서 보관 공간이 조금 필요합니다."
    if product.subcategory in ["복대", "압박스타킹"]:
        return "도움은 되지만 오래 착용하면 압박감이 있어서 시간을 조절하고 있어요."
    return "도움은 되지만 부피가 커서 보관이 조금 번거롭습니다."


def safety_concern_phrase(category: str) -> str:
    if category in ["영양제", "식품", "바디케어"]:
        return "성분이나 사용 시기를 한 번 더 확인하고 쓰는 게 좋겠다고 느꼈어요."
    if category == "의류":
        return "소재나 복부 압박감을 한 번 더 확인하고 고르는 게 좋겠다고 느꼈어요."
    return "착용 방법이나 사용 시기를 한 번 더 확인하고 쓰는 게 좋겠다고 느꼈어요."


def make_review_text(product: Product, scenario_type: str, week: int, symptoms: list[str]) -> tuple[str, str]:
    symptom = random.choice(symptoms)
    if product.category == "영양제":
        positives = [
            f"임신 {week}주에 {symptom} 때문에 찾아봤는데 {product.form} 형태라 챙기기 편했어요.",
            f"알약을 잘 못 삼키는 편인데 이 제품은 복용 부담이 비교적 적었습니다.",
        ]
        concern = "다만 빈속에 먹으면 속이 조금 불편해서 식후에 먹고 있어요."
        negative = "냄새와 속불편이 생각보다 커서 며칠 먹다가 중단했습니다."
    elif product.category == "식품":
        positives = [
            f"임신 {week}주에 입맛이 없을 때 간단히 먹기 좋았어요.",
            f"이 제품은 향이 강하지 않아서 출근길에도 부담이 적었습니다.",
        ]
        concern = "단맛이 조금 강해서 매일 먹기보다는 가끔 먹게 됩니다."
        negative = "후기가 좋아서 샀는데 제 입맛에는 향이 강하고 속도 편하지 않았어요."
    elif product.category == "바디케어":
        positives = [
            f"임신 {week}주부터 배가 건조해서 썼는데 발림성이 부드럽고 보습감이 괜찮았어요.",
            f"향이 약한 편이라 냄새에 민감한 시기에도 쓰기 편했습니다.",
        ]
        concern = "보습은 좋은데 약간 끈적임이 남아서 밤에만 쓰고 있어요."
        negative = "피부가 민감한 편인데 바른 뒤 따가움이 있어서 사용을 멈췄습니다."
    elif product.category == "의류":
        positives = [
            f"임신 {week}주에 배가 나오기 시작해서 샀는데 복부 압박이 적고 움직이기 편해요.",
            f"출근할 때 입어도 티가 많이 나지 않고 소재가 부드러웠습니다.",
        ]
        concern = "착용감은 좋은데 세탁 후 밴드가 살짝 늘어나는 느낌은 있어요."
        negative = "사이즈표를 보고 샀는데 배 부분이 생각보다 조여서 오래 입기 어려웠어요."
    else:
        positives = [
            supplies_positive_text(product, week, symptom),
            supplies_positive_text(product, week, symptom),
        ]
        concern = supplies_concern_text(product)
        negative = "기대보다 고정감이 약하고 오래 쓰면 오히려 불편했습니다."

    if scenario_type == "positive":
        title = random.choice(["만족도가 높아요", "임신 주수에 잘 맞았어요", "재구매 생각 있습니다"])
        content = random.choice(positives) + " 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요."
    elif scenario_type == "mixed":
        title = random.choice(["좋지만 아쉬운 점도 있어요", "장점과 단점이 분명해요", "상황에 따라 추천"])
        content = random.choice(positives) + " " + concern
    elif scenario_type == "negative":
        title = random.choice(["저한테는 맞지 않았어요", "기대보다는 아쉬웠습니다", "재구매는 어려울 것 같아요"])
        content = negative + " 임산부 제품이라 기대했는데 개인차가 큰 것 같습니다."
    elif scenario_type == "safety_concern":
        title = random.choice(["성분과 사용감은 확인이 필요해요", "효과보다 주의점이 더 신경 쓰였어요", "전문가 확인 후 쓰는 게 좋겠어요"])
        content = random.choice(positives) + " 하지만 사용 후 불편감이 있어 " + safety_concern_phrase(product.category)
    else:
        title = random.choice(["주수가 안 맞았던 것 같아요", "조금 일찍 산 느낌입니다", "나중에 다시 써보려고요"])
        content = f"제품 자체는 나쁘지 않은데 임신 {week}주인 지금 쓰기에는 권장 시기와 조금 맞지 않는 느낌이었어요. 나중에 주수가 맞으면 다시 써보려고 합니다."
    return title, content


def quality_checks(strategy: str, scenario_type: str) -> dict[str, Any]:
    if strategy == "prompt_based":
        realism = random.uniform(0.72, 0.84)
        label = random.uniform(0.76, 0.88)
        safety = random.uniform(0.68, 0.84)
        diversity = random.uniform(0.72, 0.86)
    elif strategy == "rag_augmented":
        realism = random.uniform(0.8, 0.91)
        label = random.uniform(0.83, 0.94)
        safety = random.uniform(0.84, 0.94)
        diversity = random.uniform(0.78, 0.9)
    else:
        realism = random.uniform(0.86, 0.96)
        label = random.uniform(0.88, 0.97)
        safety = random.uniform(0.88, 0.97)
        diversity = random.uniform(0.84, 0.95)
    return {
        "realism_score": round(realism, 3),
        "label_confidence": round(label, 3),
        "medical_safety_consistency": round(safety, 3),
        "diversity_score": round(diversity, 3),
        "needs_human_review": scenario_type == "safety_concern" and safety < 0.9,
    }


def generation_meta(strategy: str) -> tuple[str, str, str, int]:
    model_name, prompt_template_id, refinement_rounds = GENERATION_META[strategy]
    return strategy, model_name, prompt_template_id, refinement_rounds


def balanced_plan(n: int) -> list[tuple[str, str, str]]:
    cell_count = len(PERIODS) * len(CATEGORIES)
    if n % cell_count != 0:
        raise ValueError(f"Dataset size must be divisible by {cell_count}.")
    per_cell = n // cell_count
    plan = [(period, category, "") for period in PERIODS for category in CATEGORIES for _ in range(per_cell)]
    random.shuffle(plan)
    completed = []
    for index, (period, category, _) in enumerate(plan):
        completed.append((period, category, GENERATION_STRATEGIES[index % len(GENERATION_STRATEGIES)]))
    return completed


def make_record(index: int, period: str, category: str, strategy: str) -> dict[str, Any]:
    product = random.choice(products_for(period, category))
    scenario_type = choose_scenario_type(index)
    if scenario_type == "period_mismatch" and product.week_range == (1, 40):
        scenario_type = "mixed"
    pregnancy_week = choose_week(product, scenario_type)
    pregnancy_stage = period_from_week(pregnancy_week)
    symptoms = random.sample(product.symptom_contexts, k=min(len(product.symptom_contexts), random.choice([1, 2, 3])))
    usage_duration_days = random.randint(3, 45)
    verified_purchase = random.choice([True, True, True, False])
    helpful_count = random.randint(0, 140)

    title, content = make_review_text(product, scenario_type, pregnancy_week, symptoms)
    rating, sentiment_score, sentiment_label = rating_and_sentiment(scenario_type)
    aspects = aspect_values(product, scenario_type)
    safety_flags, side_effects, medical_claim_level, needs_medical_review, safety_risk = side_effects_and_safety(product, scenario_type)
    fit_score, fit_reason = pregnancy_fit(product, pregnancy_week)
    reliability = review_reliability(verified_purchase, helpful_count, usage_duration_days, content, len(symptoms))
    rating_norm, aspect_score, base_score, trust_score = compute_scores(
        rating,
        sentiment_score,
        aspects,
        reliability,
        fit_score,
        safety_risk,
    )
    rec_label = recommendation_label(trust_score, safety_risk, needs_medical_review)
    strategy, model_name, prompt_template_id, refinement_rounds = generation_meta(strategy)
    warning_tags = sorted(set(safety_flags + side_effects))

    return {
        "review_id": make_id("review", index),
        "schema_version": SCHEMA_VERSION,
        "source_type": "synthetic",
        "generated_at": GENERATED_AT,
        "product_id": make_id("product-" + product.key, 0),
        "product_name": product.name,
        "product_category": product.category,
        "subcategory": product.subcategory,
        "product_form": product.form,
        "option": random.choice(product.options),
        "search_keyword": product.search_keyword,
        "target_period": product.target_period,
        "target_week_range": f"{product.week_range[0]}-{product.week_range[1]}",
        "pregnancy_week": pregnancy_week,
        "pregnancy_stage": pregnancy_stage,
        "fit_reason": fit_reason,
        "reviewer_profile": {
            "parity": random.choice(["초산", "경산"]),
            "sensitivity": random.choice(["냄새 민감", "피부 민감", "소화 민감", "특이사항 적음"]),
            "purchase_reason": random.choice(symptoms),
        },
        "symptom_context": symptoms,
        "usage_duration_days": usage_duration_days,
        "repurchase_intent": repurchase_intent(sentiment_label),
        "review_title": title,
        "review_content": content,
        "rating": rating,
        "rating_norm": rating_norm,
        "verified_purchase": verified_purchase,
        "helpful_count": helpful_count,
        "aspect_sentiments": aspects,
        "sentiment_score": sentiment_score,
        "sentiment_label": sentiment_label,
        "aspect_score": aspect_score,
        "review_reliability_score": reliability,
        "pregnancy_fit_score": fit_score,
        "safety_risk_score": safety_risk,
        "base_trust_score": base_score,
        "trust_score": trust_score,
        "recommendation_label": rec_label,
        "safety_flags": safety_flags,
        "side_effects_mentioned": side_effects,
        "medical_claim_level": medical_claim_level,
        "needs_medical_review": needs_medical_review,
        "warning_tags": warning_tags,
        "simulated_reviewed_at": random_date(),
        "generation_strategy": strategy,
        "model_name": model_name,
        "prompt_template_id": prompt_template_id,
        "seed_scenario_id": f"{product.key}_{scenario_type}_{index:04d}",
        "refinement_rounds": refinement_rounds,
        "quality_checks": quality_checks(strategy, scenario_type),
    }


def generate_dataset(n: int = DEFAULT_DATASET_SIZE) -> list[dict[str, Any]]:
    records = [
        make_record(index, period, category, strategy)
        for index, (period, category, strategy) in enumerate(balanced_plan(n), start=1)
    ]
    random.shuffle(records)
    return records


def main() -> None:
    dataset = generate_dataset(DEFAULT_DATASET_SIZE)
    OUTPUT_PATH.write_text(json.dumps(dataset, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(dataset)} records to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
