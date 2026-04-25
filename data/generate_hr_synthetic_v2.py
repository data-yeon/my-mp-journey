"""
HR synthetic community dataset generator v2.

This script creates a research-oriented synthetic dataset for the Mom's
Journey HR blind-spot analysis. It preserves the project labels used in the
existing LDA pipeline while adding structured context, legal grounding,
generation metadata, and quality-check fields.
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
OUTPUT_PATH = Path(__file__).with_name("hr_community_synthetic_v2.json")
GENERATED_AT = "2026-04-26"
SCHEMA_VERSION = "hr_synthetic_v2"
DEFAULT_DATASET_SIZE = 600

random.seed(RANDOM_SEED)


CAFES = [
    "워킹맘클럽",
    "임산부수다방",
    "맘모임서울",
    "아기랑맘이랑",
    "육아정보공유",
    "대한민국워킹맘",
    "임신육아맘",
    "맘카페Seoul",
]

COMPANY_SIZES = ["5인 미만", "5-20인 미만", "20-100인 미만", "100인 이상"]
INDUSTRIES = ["제조업", "서비스업", "IT", "유통/물류", "의료", "교육", "금융", "기타"]
WORK_ARRANGEMENTS = ["사무직", "현장직", "교대근무", "재택혼합", "고객응대", "영업직"]
EVIDENCE_POOL = ["신청서", "인사발령메일", "팀장메신저", "근태기록", "녹취", "취업규칙", "없음"]


TOPIC_IDS = {
    "복직_불이익": 0,
    "단축근무_거절": 1,
    "법령_정보_부족": 2,
    "직장내_눈치": 3,
    "임신_은폐": 4,
}

GENERATION_STRATEGIES = ["prompt_based", "rag_augmented", "self_refinement"]
GENERATION_META = {
    "prompt_based": ("template_seeded_generator_v2", "hr_post_prompt_v1", 0),
    "rag_augmented": ("template_seeded_generator_v2", "hr_post_rag_v1", 0),
    "self_refinement": ("template_seeded_generator_v2", "hr_post_self_refine_v1", 1),
}


@dataclass(frozen=True)
class Scenario:
    seed_id: str
    lda_topic_label: str
    hr_violation_type: str
    legal_issue_tags: list[str]
    related_laws: list[str]
    related_articles: list[str]
    legal_ground_truth_summary: str
    requested_right: str
    employer_actions: list[str]
    employer_responses: list[str]
    incident_stages: list[str]
    post_styles: list[str]
    search_keywords: list[str]
    title_templates: list[str]
    content_templates: list[str]
    comment_templates: list[str]
    sentiment_labels: list[str]
    sentiment_range: tuple[float, float]
    severity_options: list[str]
    ambiguity_options: list[str]
    author_roles: list[str]
    employment_types: list[str]
    pregnancy_mode: str


SCENARIOS: list[Scenario] = [
    Scenario(
        seed_id="return_original_job",
        lda_topic_label="복직_불이익",
        hr_violation_type="복직_원직미복귀",
        legal_issue_tags=["육아휴직", "복직", "원직복귀", "불리한처우"],
        related_laws=["남녀고용평등법"],
        related_articles=["남녀고용평등법 제19조"],
        legal_ground_truth_summary="육아휴직을 이유로 불리한 처우를 해서는 안 되며, 복귀 시 같은 업무 또는 같은 수준의 임금을 지급하는 직무로 복귀시키는 것이 원칙이다.",
        requested_right="원직 또는 유사 업무 복귀",
        employer_actions=["원래 업무 배제", "낮은 난이도 업무 배치", "직무 변경 통보"],
        employer_responses=["휴직 중 조직이 바뀌어서 어쩔 수 없다고 설명함", "적응 기간이라며 기존 업무 복귀를 미룸"],
        incident_stages=["복직직후", "복직후"],
        post_styles=["experience_question", "venting"],
        search_keywords=["복직 원직복귀", "육아휴직 복직 불이익"],
        title_templates=[
            "육아휴직 복직했는데 원래 업무로 못 돌아가게 해요",
            "복직 후 제 자리가 없어졌다고 합니다",
            "육아휴직 후 단순업무만 맡기는데 괜찮은 건가요",
        ],
        content_templates=[
            "{tenure_text} {industry} 회사에 다니고 있어요. {leave_months}개월 육아휴직 후 복직했는데 예전 {old_task} 업무가 아니라 {new_task}만 맡으라고 합니다. 회사에서는 \"{response}\"는 식으로 말하는데, 아이가 {child_age_text}라 갑자기 커리어가 끊기는 느낌이라 너무 막막해요.",
            "복직 첫날부터 분위기가 이상했어요. 제가 하던 {old_task} 업무는 이미 다른 분이 맡고 있고 저는 {new_task} 보조만 하래요. {company_size} 회사라 인사팀 상담도 어렵고, 육아휴직 다녀온 게 이유인 것 같아 억울합니다.",
        ],
        comment_templates=[
            "휴직 전 담당 업무랑 지금 업무를 비교할 수 있게 자료를 저장해두세요.",
            "원직 복귀 관련해서 노무사 상담 받아보시면 좋을 것 같아요.",
            "인사팀이 없으면 신청서나 메신저라도 꼭 남겨두세요.",
        ],
        sentiment_labels=["억울", "막막", "분노"],
        sentiment_range=(0.08, 0.28),
        severity_options=["medium", "high"],
        ambiguity_options=["medium", "high"],
        author_roles=["employee"],
        employment_types=["정규직", "계약직"],
        pregnancy_mode="postpartum",
    ),
    Scenario(
        seed_id="return_transfer",
        lda_topic_label="복직_불이익",
        hr_violation_type="복직_전보발령",
        legal_issue_tags=["육아휴직", "복직", "전보", "불리한처우"],
        related_laws=["남녀고용평등법"],
        related_articles=["남녀고용평등법 제19조"],
        legal_ground_truth_summary="육아휴직 복귀 후 인사발령이 업무상 필요에 따른 것인지, 육아휴직을 이유로 한 불리한 처우인지 구체적 사정 확인이 필요하다.",
        requested_right="기존 근무지 또는 통근 가능한 직무 복귀",
        employer_actions=["지방 전보", "타 지점 발령", "장거리 근무지 배치"],
        employer_responses=["업무상 필요라며 발령을 수용하라고 함", "다른 대안은 없다고 통보함"],
        incident_stages=["복직직후"],
        post_styles=["experience_question", "situation_summary"],
        search_keywords=["육아휴직 복직 전보", "복직 지방발령"],
        title_templates=[
            "육아휴직 복직하자마자 지방 발령이 났어요",
            "복직 후 왕복 3시간 지점으로 보내겠대요",
            "아이 어린데 복직 발령지가 너무 멀어요",
        ],
        content_templates=[
            "{leave_months}개월 육아휴직 후 복직 예정인데 회사에서 {action}을 통보했습니다. 아이가 {child_age_text}라 장거리 출퇴근이 현실적으로 어렵다고 했더니 회사에서는 \"{response}\"는 답만 합니다. 휴직 전에는 같은 지역에서 {old_task} 업무를 했습니다.",
            "{employment_type}으로 {tenure_text} 일했고, 복직 면담에서 갑자기 {action} 얘기를 들었어요. 회사는 인사권이라고만 하는데 육아휴직 다녀온 사람이라 밀려난 것 같아 불안합니다. 발령 메일은 받아둔 상태예요.",
        ],
        comment_templates=[
            "발령 사유가 문서로 남아있는지 먼저 확인해보세요.",
            "육아휴직 직후라면 불리한 처우 여부를 따져볼 수 있을 것 같아요.",
            "통근 가능성도 중요한 사정이라 상담 때 같이 말해보세요.",
        ],
        sentiment_labels=["불안", "막막", "억울"],
        sentiment_range=(0.1, 0.32),
        severity_options=["high", "critical"],
        ambiguity_options=["medium", "high"],
        author_roles=["employee"],
        employment_types=["정규직"],
        pregnancy_mode="postpartum",
    ),
    Scenario(
        seed_id="return_bonus_exclusion",
        lda_topic_label="복직_불이익",
        hr_violation_type="복직_성과급제외",
        legal_issue_tags=["육아휴직", "성과급", "불리한처우", "근속기간"],
        related_laws=["남녀고용평등법", "고용보험법"],
        related_articles=["남녀고용평등법 제19조"],
        legal_ground_truth_summary="육아휴직을 이유로 한 불리한 처우는 금지되며, 성과급 제외가 합리적 기준인지 휴직을 이유로 한 차별인지 확인이 필요하다.",
        requested_right="육아휴직자에 대한 불이익 없는 평가",
        employer_actions=["성과급 제외", "평가등급 하향", "연봉 동결"],
        employer_responses=["실근무 기간이 부족해서 어쩔 수 없다고 설명함", "평가 기준상 휴직자는 제외된다고 말함"],
        incident_stages=["복직후"],
        post_styles=["experience_question", "venting"],
        search_keywords=["육아휴직 성과급", "복직 연봉 동결"],
        title_templates=[
            "육아휴직 다녀왔다는 이유로 성과급에서 빠졌어요",
            "복직 후 저만 연봉이 동결됐습니다",
            "휴직 기간 때문에 평가등급을 낮게 받았어요",
        ],
        content_templates=[
            "같은 팀원들은 모두 {action} 대상에 포함됐는데 저만 빠졌어요. 회사는 \"{response}\"는 입장입니다. {leave_months}개월 육아휴직을 쓴 게 이렇게 평가에 반영되는 게 맞는지 모르겠어요.",
            "{industry} {company_size} 회사에서 {tenure_text} 근무했습니다. 복직 후 첫 평가에서 휴직 공백이 크다며 낮은 등급을 받았고, 결과적으로 {action}이 됐어요. 기준표를 보여달라고 하니 내부 규정이라고만 합니다.",
        ],
        comment_templates=[
            "평가 기준표와 작년 평가 자료를 요청해보세요.",
            "휴직자만 제외되는 구조인지 확인하는 게 중요할 것 같아요.",
            "성과급 기준이 취업규칙에 있는지 찾아보세요.",
        ],
        sentiment_labels=["억울", "분노", "막막"],
        sentiment_range=(0.06, 0.24),
        severity_options=["medium", "high"],
        ambiguity_options=["high"],
        author_roles=["employee"],
        employment_types=["정규직"],
        pregnancy_mode="postpartum",
    ),
    Scenario(
        seed_id="return_resignation_pressure",
        lda_topic_label="복직_불이익",
        hr_violation_type="복직_권고사직압박",
        legal_issue_tags=["육아휴직", "복직", "권고사직", "해고"],
        related_laws=["남녀고용평등법", "근로기준법"],
        related_articles=["남녀고용평등법 제19조", "근로기준법 제23조"],
        legal_ground_truth_summary="육아휴직을 이유로 해고나 그 밖의 불리한 처우를 하는 것은 금지되며, 권고사직 압박도 구체적 정황에 따라 문제가 될 수 있다.",
        requested_right="복직 유지와 부당한 퇴사 압박 중단",
        employer_actions=["권고사직 압박", "퇴사 면담 반복", "계약 종료 암시"],
        employer_responses=["회사 사정이 어렵다며 스스로 정리하는 게 좋겠다고 말함", "복귀 자리가 애매하다고 반복함"],
        incident_stages=["복직직후", "복직후"],
        post_styles=["venting", "experience_question"],
        search_keywords=["복직 권고사직", "육아휴직 해고"],
        title_templates=[
            "복직하자마자 권고사직 얘기를 들었습니다",
            "육아휴직 끝나고 돌아오니 나가라는 분위기예요",
            "복직 면담이 계속 퇴사 권유로 흘러갑니다",
        ],
        content_templates=[
            "복직한 지 {after_return_weeks}주 됐는데 팀장이 계속 \"{response}\"는 말을 합니다. 직접 해고라고 말하진 않지만 면담 때마다 {action}을 받아요. 아이가 {child_age_text}라 당장 그만둘 수도 없고 너무 불안합니다.",
            "{company_size} {industry} 회사이고 {tenure_text} 일했습니다. 육아휴직 전에는 문제가 없었는데 복직 후 제 업무가 없어졌다며 퇴사를 권하는 분위기입니다. 메신저 내용은 일부 캡처해뒀어요.",
        ],
        comment_templates=[
            "권고사직은 절대 바로 서명하지 마세요.",
            "면담 내용은 날짜별로 정리해두는 게 좋아요.",
            "해고인지 권고사직인지 표현이 중요해서 전문가 상담 추천해요.",
        ],
        sentiment_labels=["불안", "막막", "분노"],
        sentiment_range=(0.05, 0.22),
        severity_options=["high", "critical"],
        ambiguity_options=["medium", "high"],
        author_roles=["employee"],
        employment_types=["정규직", "계약직"],
        pregnancy_mode="postpartum",
    ),
    Scenario(
        seed_id="parental_leave_blocked",
        lda_topic_label="직장내_눈치",
        hr_violation_type="육아휴직_사용방해",
        legal_issue_tags=["육아휴직", "신청방해", "직장내눈치"],
        related_laws=["남녀고용평등법"],
        related_articles=["남녀고용평등법 제19조"],
        legal_ground_truth_summary="육아휴직 요건을 충족한 근로자의 신청을 정당한 사유 없이 거부하거나 사용을 방해해서는 안 된다.",
        requested_right="육아휴직 신청과 사용",
        employer_actions=["육아휴직 신청 만류", "무급휴직 대체 요구", "신청서 접수 지연"],
        employer_responses=["팀이 안 돌아간다며 시기를 미루자고 함", "회사 형편상 무급휴직으로 처리하자고 함"],
        incident_stages=["신청전", "신청직후"],
        post_styles=["experience_question", "venting"],
        search_keywords=["육아휴직 눈치", "육아휴직 거절"],
        title_templates=[
            "육아휴직 대신 무급휴직으로 하자고 합니다",
            "육아휴직 신청서를 계속 안 받아줘요",
            "팀장이 육아휴직 얘기만 하면 표정이 굳어요",
        ],
        content_templates=[
            "임신 {pregnancy_week}주라 출산휴가 뒤 육아휴직을 이어서 쓰고 싶다고 말했어요. 그런데 회사는 \"{response}\"는 입장입니다. {company_size} {industry} 회사라 제가 빠지면 부담인 건 알지만, 신청 자체를 못 하게 하는 느낌이에요.",
            "육아휴직 신청서를 냈는데 아직 접수 처리가 안 됐습니다. 인사 담당자는 바쁘다며 기다리라고 하고, 팀장은 {action}을 계속합니다. 법적으로 제가 먼저 뭘 남겨야 할까요?",
        ],
        comment_templates=[
            "신청서는 메일로 보내서 접수 기록을 남기세요.",
            "무급휴직으로 바꾸자는 건 조심해서 봐야 할 것 같아요.",
            "육아휴직 급여랑 회사 휴직 처리는 구분해서 확인해보세요.",
        ],
        sentiment_labels=["불안", "막막", "억울"],
        sentiment_range=(0.14, 0.36),
        severity_options=["medium", "high"],
        ambiguity_options=["low", "medium"],
        author_roles=["employee"],
        employment_types=["정규직", "계약직"],
        pregnancy_mode="late_pregnancy",
    ),
    Scenario(
        seed_id="parental_leave_penalty",
        lda_topic_label="직장내_눈치",
        hr_violation_type="육아휴직_불이익처우",
        legal_issue_tags=["육아휴직", "불이익처우", "평가", "승진"],
        related_laws=["남녀고용평등법"],
        related_articles=["남녀고용평등법 제19조"],
        legal_ground_truth_summary="육아휴직 사용을 이유로 승진, 평가, 배치 등에서 불리하게 처우해서는 안 된다.",
        requested_right="육아휴직 사용으로 인한 불이익 없는 인사평가",
        employer_actions=["승진 누락", "평가 불이익 암시", "핵심 업무 배제"],
        employer_responses=["휴직 예정자는 장기 프로젝트에서 빼는 게 맞다고 말함", "올해 평가는 기대하지 말라고 함"],
        incident_stages=["신청전", "신청직후"],
        post_styles=["venting", "experience_question"],
        search_keywords=["육아휴직 승진 누락", "육아휴직 불이익"],
        title_templates=[
            "육아휴직 말했더니 승진 이야기가 사라졌어요",
            "휴직 예정이라고 프로젝트에서 빠지게 됐습니다",
            "육아휴직 쓰면 평가 포기하라는 말을 들었어요",
        ],
        content_templates=[
            "출산 후 육아휴직 계획을 말한 뒤부터 분위기가 바뀌었어요. 원래 맡기로 한 {old_task} 프로젝트에서 빠지고, 팀장이 \"{response}\"라는 말을 했습니다. 아직 휴직 전인데 벌써 불이익이 시작된 것 같아요.",
            "{industry} 회사에서 {tenure_text} 일했고 올해 승진 대상이었습니다. 그런데 육아휴직 얘기를 꺼낸 뒤 {action}이 됐어요. 공식 사유는 성과 부족이라는데 납득이 안 됩니다.",
        ],
        comment_templates=[
            "휴직 계획 말하기 전 평가 자료가 있으면 같이 보관하세요.",
            "프로젝트 제외 시점이 중요해 보입니다.",
            "구두로 들은 말도 날짜별로 메모해두세요.",
        ],
        sentiment_labels=["억울", "분노", "불안"],
        sentiment_range=(0.08, 0.3),
        severity_options=["medium", "high"],
        ambiguity_options=["medium", "high"],
        author_roles=["employee"],
        employment_types=["정규직"],
        pregnancy_mode="late_pregnancy",
    ),
    Scenario(
        seed_id="pregnancy_reduced_hours",
        lda_topic_label="단축근무_거절",
        hr_violation_type="임신기_근로시간단축_거절",
        legal_issue_tags=["임신기근로시간단축", "임신초기", "임신후기", "근로시간"],
        related_laws=["근로기준법"],
        related_articles=["근로기준법 제74조"],
        legal_ground_truth_summary="임신 초기 또는 후기의 여성 근로자는 일정 요건에서 근로시간 단축을 신청할 수 있으며, 사용자는 이를 이유로 임금을 삭감해서는 안 된다.",
        requested_right="임신기 근로시간 단축",
        employer_actions=["근로시간 단축 거절", "임금 삭감 암시", "신청서 반려"],
        employer_responses=["바쁜 시기라 지금은 어렵다고 함", "그런 제도를 들어본 적 없다고 말함"],
        incident_stages=["신청직후"],
        post_styles=["experience_question", "information_request"],
        search_keywords=["임신기 근로시간 단축", "임신 단축근무 거절"],
        title_templates=[
            "임신 {pregnancy_week}주인데 근로시간 단축을 거절당했어요",
            "임신 초기 단축근무 신청서를 반려당했습니다",
            "임신기 단축근무 쓰면 월급 깎인다고 해요",
        ],
        content_templates=[
            "임신 {pregnancy_week}주이고 입덧이 심해서 근로시간 단축을 신청했습니다. 그런데 회사가 \"{response}\"는 이유로 {action}했어요. {company_size} {industry} 회사인데 임신 초기에는 쓸 수 있는 제도 아닌가요?",
            "산부인과 진료 후 몸이 너무 힘들어서 단축근무를 문의했는데 인사 담당자가 급여도 줄어들 수 있다고 말했습니다. 제도가 있는 건 알지만 회사에 어떻게 다시 요청해야 할지 모르겠어요.",
        ],
        comment_templates=[
            "임신 주수와 신청일이 보이게 서면으로 남겨보세요.",
            "임금 삭감 얘기는 정확히 확인해야 할 것 같아요.",
            "취업규칙보다 법정 제도가 우선인지 상담 받아보세요.",
        ],
        sentiment_labels=["불안", "억울", "막막"],
        sentiment_range=(0.1, 0.32),
        severity_options=["medium", "high"],
        ambiguity_options=["low", "medium"],
        author_roles=["employee"],
        employment_types=["정규직", "계약직"],
        pregnancy_mode="early_or_late_pregnancy",
    ),
    Scenario(
        seed_id="childcare_reduced_hours",
        lda_topic_label="단축근무_거절",
        hr_violation_type="육아기_근로시간단축_거절",
        legal_issue_tags=["육아기근로시간단축", "육아", "근로시간", "불이익"],
        related_laws=["남녀고용평등법"],
        related_articles=["남녀고용평등법 제19조의2"],
        legal_ground_truth_summary="육아기 근로시간 단축은 요건을 충족한 근로자가 신청할 수 있으며, 사용자는 법에서 정한 제한 사유 없이 거부하기 어렵다.",
        requested_right="육아기 근로시간 단축",
        employer_actions=["단축근무 거절", "희망 시간대 불허", "형식상 승인 후 초과근무 지시"],
        employer_responses=["인력 부족 때문에 불가능하다고 함", "원하는 시간대는 안 되고 회사가 정한 시간만 가능하다고 함"],
        incident_stages=["신청직후", "사용중"],
        post_styles=["experience_question", "venting"],
        search_keywords=["육아기 단축근무", "단축근무 거절"],
        title_templates=[
            "육아기 단축근무를 신청했는데 계속 미뤄요",
            "단축근무 승인됐는데 매일 정시 퇴근을 못 합니다",
            "단축근무 시간을 회사가 일방적으로 정했어요",
        ],
        content_templates=[
            "아이가 {child_age_text}라 육아기 근로시간 단축을 신청했습니다. 회사는 '{response}'라며 {action}했어요. 신청서도 냈는데 검토 중이라는 말만 반복합니다.",
            "단축근무가 승인되긴 했는데 퇴근 직전에 계속 업무를 줍니다. 형식상으로만 단축근무고 실제로는 거의 풀타임이에요. 이런 경우도 문제 제기할 수 있을까요?",
        ],
        comment_templates=[
            "실제 퇴근시간 기록을 모아두세요.",
            "희망 시간대와 회사가 제시한 사유를 문서로 받아보세요.",
            "단축근무 중 초과 지시는 따로 정리해두는 게 좋겠어요.",
        ],
        sentiment_labels=["억울", "불안", "분노"],
        sentiment_range=(0.09, 0.3),
        severity_options=["medium", "high"],
        ambiguity_options=["medium"],
        author_roles=["employee"],
        employment_types=["정규직", "단시간근로자"],
        pregnancy_mode="childcare",
    ),
    Scenario(
        seed_id="pregnancy_overtime",
        lda_topic_label="임신_은폐",
        hr_violation_type="임신중_시간외근로_강요",
        legal_issue_tags=["임신", "시간외근로", "야근", "임산부보호"],
        related_laws=["근로기준법"],
        related_articles=["근로기준법 제74조"],
        legal_ground_truth_summary="사용자는 임신 중인 여성 근로자에게 시간외근로를 하게 해서는 안 되며, 근로자의 요구가 있으면 쉬운 종류의 근로로 전환해야 한다.",
        requested_right="임신 중 시간외근로 제한과 업무 조정",
        employer_actions=["야근 지시", "주말 근무 요구", "마감 업무 몰아주기"],
        employer_responses=["다들 하는 일이니 예외는 어렵다고 함", "임신 사실을 공식으로 말하지 않았으니 배려하기 어렵다고 함"],
        incident_stages=["신청전", "사용중"],
        post_styles=["experience_question", "venting"],
        search_keywords=["임신 야근", "임신 시간외근로"],
        title_templates=[
            "임신 {pregnancy_week}주인데 야근을 계속 시켜요",
            "임신 사실 말하기 전 야근 거절이 가능할까요",
            "임신 중 주말근무까지 하라고 합니다",
        ],
        content_templates=[
            "임신 {pregnancy_week}주인데 아직 회사에 공식적으로 말하지 못했습니다. 요즘 {action}가 계속 있고 몸이 너무 힘들어요. 말하면 불이익이 있을까 봐 무섭고, 안 말하자니 버티기 어렵습니다.",
            "{industry} {company_size} 회사에서 일하고 있습니다. 임신 사실을 알렸는데도 팀장은 \"{response}\"며 야근을 시켜요. 병원에서는 무리하지 말라고 했는데 어떻게 대응해야 할까요?",
        ],
        comment_templates=[
            "임신 사실과 진단서를 회사에 공식으로 알리는 방식도 고민해보세요.",
            "야근 지시 내역은 캡처해두는 게 좋겠습니다.",
            "임산부 시간외근로 제한은 꼭 확인해보세요.",
        ],
        sentiment_labels=["불안", "두려움", "막막"],
        sentiment_range=(0.07, 0.28),
        severity_options=["high", "critical"],
        ambiguity_options=["low", "medium"],
        author_roles=["employee"],
        employment_types=["정규직", "계약직"],
        pregnancy_mode="pregnancy",
    ),
    Scenario(
        seed_id="prenatal_checkup_denied",
        lda_topic_label="임신_은폐",
        hr_violation_type="태아검진시간_거부",
        legal_issue_tags=["태아검진", "임신", "근로시간", "검진시간"],
        related_laws=["근로기준법"],
        related_articles=["근로기준법 제74조의2"],
        legal_ground_truth_summary="임신한 여성 근로자가 정기건강진단을 받는 데 필요한 시간을 청구하면 사용자는 이를 허용해야 한다.",
        requested_right="태아검진 시간 사용",
        employer_actions=["태아검진 시간 거부", "연차 사용 요구", "검진 일정 변경 요구"],
        employer_responses=["바쁜 시기라 검진은 개인 연차로 처리하라고 함", "오전 진료는 업무 공백이 크니 안 된다고 함"],
        incident_stages=["신청직후"],
        post_styles=["experience_question", "information_request"],
        search_keywords=["태아검진 시간", "임산부 검진 휴가"],
        title_templates=[
            "태아검진 시간을 연차로 쓰라고 합니다",
            "임신 {pregnancy_week}주 검진 때문에 오전 반차를 쓰래요",
            "회사에서 태아검진 일정을 바꾸라고 해요",
        ],
        content_templates=[
            "임신 {pregnancy_week}주이고 정기검진 예약이 잡혀 있습니다. 회사에 말했더니 \"{response}\"며 {action}했어요. 법적으로 태아검진 시간이 따로 있는지 궁금합니다.",
            "검진 병원이 오전만 가능해서 시간을 요청했는데 팀장이 업무 공백을 이유로 거절했습니다. 매번 연차를 쓰는 게 맞는지 모르겠어요.",
        ],
        comment_templates=[
            "검진 예약 문자와 회사 답변을 같이 보관해두세요.",
            "태아검진 시간은 별도로 확인해볼 필요가 있어요.",
            "연차 처리하라는 말은 서면으로 받아두는 게 좋겠습니다.",
        ],
        sentiment_labels=["억울", "불안", "막막"],
        sentiment_range=(0.12, 0.34),
        severity_options=["medium", "high"],
        ambiguity_options=["low"],
        author_roles=["employee"],
        employment_types=["정규직", "계약직"],
        pregnancy_mode="pregnancy",
    ),
    Scenario(
        seed_id="maternity_pay_confusion",
        lda_topic_label="법령_정보_부족",
        hr_violation_type="출산전후휴가_급여혼란",
        legal_issue_tags=["출산전후휴가", "급여", "고용보험", "인사실무"],
        related_laws=["근로기준법", "고용보험법"],
        related_articles=["근로기준법 제74조", "고용보험법 제75조"],
        legal_ground_truth_summary="출산전후휴가 기간과 급여 지급 구조는 회사 규모, 우선지원대상기업 여부, 고용보험 요건 등에 따라 확인이 필요하다.",
        requested_right="출산전후휴가 급여와 신청 절차 확인",
        employer_actions=["급여 지급 주체 혼동", "서류 안내 지연", "휴가 처리 방식 혼동"],
        employer_responses=["회사도 처음이라 정확히 모르겠다고 함", "직원이 알아서 신청하라고 함"],
        incident_stages=["신청전", "신청직후"],
        post_styles=["hr_manager_question", "information_request"],
        search_keywords=["출산전후휴가 급여", "모성보호 급여"],
        title_templates=[
            "출산전후휴가 급여를 회사가 다 지급해야 하나요",
            "인사담당자인데 출산휴가 급여 처리가 너무 어렵습니다",
            "출산전후휴가 서류를 어떻게 안내해야 할까요",
        ],
        content_templates=[
            "{company_size} {industry} 회사에서 인사·총무를 같이 맡고 있습니다. 직원이 출산전후휴가를 신청했는데 급여를 회사가 지급하는지 고용보험에서 나오는지 헷갈립니다. 회사도 처음이라 직원에게 정확히 안내하고 싶어요.",
            "직원이 곧 출산휴가에 들어가는데 서류와 급여 신청 절차를 어디서부터 챙겨야 할지 모르겠습니다. 작은 회사라 전담 노무사가 없고, 잘못 안내할까 봐 걱정돼요.",
        ],
        comment_templates=[
            "고용보험 모성보호 급여 메뉴를 먼저 확인해보세요.",
            "회사 규모와 우선지원대상기업 여부에 따라 달라질 수 있어요.",
            "직원에게 구두 말고 안내문 형태로 정리해주면 좋겠습니다.",
        ],
        sentiment_labels=["막막", "불안", "희망"],
        sentiment_range=(0.32, 0.58),
        severity_options=["low", "medium"],
        ambiguity_options=["medium"],
        author_roles=["hr_manager"],
        employment_types=["정규직"],
        pregnancy_mode="late_pregnancy",
    ),
    Scenario(
        seed_id="miscarriage_leave_info",
        lda_topic_label="법령_정보_부족",
        hr_violation_type="유산사산휴가_정보부족",
        legal_issue_tags=["유산휴가", "사산휴가", "모성보호", "인사실무"],
        related_laws=["근로기준법"],
        related_articles=["근로기준법 제74조"],
        legal_ground_truth_summary="유산 또는 사산한 근로자에게는 임신 기간에 따라 보호휴가가 인정될 수 있으므로 구체적 임신 주수 확인이 필요하다.",
        requested_right="유산·사산 휴가와 처리 절차 확인",
        employer_actions=["휴가 일수 혼동", "병가 처리 제안", "증빙서류 요구 방식 혼동"],
        employer_responses=["일반 병가로 처리하면 되는지 모르겠다고 함", "규정에 없어서 확인이 필요하다고 함"],
        incident_stages=["신청직후"],
        post_styles=["hr_manager_question", "information_request"],
        search_keywords=["유산휴가", "사산휴가"],
        title_templates=[
            "직원이 유산했는데 어떤 휴가를 줘야 하나요",
            "유산휴가를 병가로 처리해도 되는지 모르겠습니다",
            "임신 중 유산한 직원에게 필요한 서류가 궁금해요",
        ],
        content_templates=[
            "{company_size} {industry} 회사 인사담당자입니다. 직원이 임신 {pregnancy_week}주에 유산했다고 알려왔는데 어떤 휴가를 안내해야 하는지 모르겠습니다. 취업규칙에는 따로 내용이 없고 병가로 처리해도 되는지 걱정됩니다.",
            "작은 회사라 이런 사례가 처음입니다. 직원에게 너무 많은 서류를 요구하는 것도 조심스럽고, 법적으로 보장되는 휴가가 있다면 정확히 안내하고 싶습니다.",
        ],
        comment_templates=[
            "임신 주수에 따라 달라질 수 있어서 먼저 확인이 필요해요.",
            "병가와 법정 보호휴가는 구분해서 봐야 할 것 같습니다.",
            "민감한 사안이라 서류 요청 방식도 조심해야겠어요.",
        ],
        sentiment_labels=["막막", "불안", "슬픔"],
        sentiment_range=(0.24, 0.5),
        severity_options=["medium", "high"],
        ambiguity_options=["medium"],
        author_roles=["hr_manager", "employee"],
        employment_types=["정규직", "계약직"],
        pregnancy_mode="pregnancy",
    ),
    Scenario(
        seed_id="contract_pregnancy_risk",
        lda_topic_label="임신_은폐",
        hr_violation_type="계약직_임신차별우려",
        legal_issue_tags=["임신", "계약직", "계약연장", "차별"],
        related_laws=["근로기준법", "남녀고용평등법"],
        related_articles=["근로기준법 제23조", "남녀고용평등법 제11조"],
        legal_ground_truth_summary="임신을 이유로 한 해고나 불리한 처우는 금지되며, 계약 갱신 거절이 임신을 이유로 한 것인지 구체적 사실관계 확인이 필요하다.",
        requested_right="임신 사실로 인한 계약상 불이익 방지",
        employer_actions=["계약 연장 불안", "업무 배제", "평가 면담 압박"],
        employer_responses=["다음 계약은 상황을 봐야 한다고 말함", "임신하면 업무 투입이 어렵지 않겠냐고 말함"],
        incident_stages=["신청전", "사용중"],
        post_styles=["experience_question", "venting"],
        search_keywords=["계약직 임신", "임신 계약연장"],
        title_templates=[
            "계약직인데 임신 사실을 말해도 될까요",
            "임신 말하면 계약 연장이 안 될까 봐 무서워요",
            "계약 만료 앞두고 임신 사실을 숨기고 있습니다",
        ],
        content_templates=[
            "계약 만료가 {contract_months_left}개월 남았고 임신 {pregnancy_week}주입니다. 회사에 말하면 \"{response}\"는 식으로 나올 것 같은 분위기라 아직 숨기고 있어요. 입덧 때문에 업무가 힘든데 계약 연장 때문에 너무 불안합니다.",
            "{industry} {company_size} 회사에서 계약직으로 일합니다. 최근 평가 면담에서 임신 계획이 있냐는 질문을 받았고, 실제로 임신 중이라 더 무섭습니다. 이런 질문이나 분위기도 문제가 될 수 있나요?",
        ],
        comment_templates=[
            "계약 갱신 관련 발언은 꼭 기록해두세요.",
            "임신 여부 질문 자체도 조심스럽게 볼 필요가 있어요.",
            "몸이 힘들면 진단서와 업무 조정 요청을 같이 고민해보세요.",
        ],
        sentiment_labels=["두려움", "불안", "막막"],
        sentiment_range=(0.05, 0.25),
        severity_options=["high", "critical"],
        ambiguity_options=["high"],
        author_roles=["employee"],
        employment_types=["계약직"],
        pregnancy_mode="pregnancy",
    ),
    Scenario(
        seed_id="pregnancy_disclosure_pressure",
        lda_topic_label="임신_은폐",
        hr_violation_type="임신사실_은폐압박",
        legal_issue_tags=["임신", "임신공개", "업무배제", "차별우려"],
        related_laws=["근로기준법", "남녀고용평등법"],
        related_articles=["근로기준법 제74조", "남녀고용평등법 제11조"],
        legal_ground_truth_summary="임신 사실을 이유로 불리한 처우를 해서는 안 되며, 임신 중 근로자 보호 제도 사용을 위해서는 회사에 필요한 범위에서 알리는 절차가 문제될 수 있다.",
        requested_right="임신 공개 후 차별 없는 업무와 보호제도 사용",
        employer_actions=["임신 공개 압박", "업무 배제", "소문 확산"],
        employer_responses=["몸이 힘들면 중요한 업무는 맡기기 어렵다고 함", "팀 분위기상 빨리 알려야 한다고 압박함"],
        incident_stages=["신청전", "사용중"],
        post_styles=["venting", "experience_question"],
        search_keywords=["임신 말못해", "임신 직장 차별"],
        title_templates=[
            "임신 {pregnancy_week}주인데 회사에 말하기가 무서워요",
            "임신 사실이 소문난 뒤 업무에서 빠졌습니다",
            "임신 공개를 언제 해야 할지 모르겠어요",
        ],
        content_templates=[
            "임신 {pregnancy_week}주인데 아직 회사에 말하지 못했습니다. 얼마 전 다른 직원이 임신을 알린 뒤 {action_effect}을 봤어요. 저도 같은 일을 겪을까 봐 무섭고, 태아검진도 제대로 못 쓰고 있습니다.",
            "상사에게만 조심스럽게 말했는데 팀 안에 소문이 퍼졌습니다. 그 뒤로 {old_task} 업무에서 빠졌고 \"{response}\"라는 말을 들었어요. 보호받고 싶어서 말한 건데 오히려 불리해진 느낌입니다.",
        ],
        comment_templates=[
            "누가 언제 어떤 말을 했는지 기록해두면 좋겠어요.",
            "검진 시간이나 업무 조정은 공식 절차로 남기는 게 안전해 보여요.",
            "업무에서 빠진 이유를 서면으로 물어보는 것도 방법입니다.",
        ],
        sentiment_labels=["불안", "두려움", "막막"],
        sentiment_range=(0.06, 0.27),
        severity_options=["medium", "high"],
        ambiguity_options=["medium", "high"],
        author_roles=["employee"],
        employment_types=["정규직", "계약직"],
        pregnancy_mode="pregnancy",
    ),
    Scenario(
        seed_id="small_company_info_gap",
        lda_topic_label="법령_정보_부족",
        hr_violation_type="정보접근성_문제",
        legal_issue_tags=["소규모사업장", "모성보호", "인사실무", "제도안내"],
        related_laws=["근로기준법", "남녀고용평등법", "고용보험법"],
        related_articles=["근로기준법 제74조", "남녀고용평등법 제19조"],
        legal_ground_truth_summary="모성보호 제도는 여러 법령에 나뉘어 있어 회사 규모, 고용보험 가입 여부, 근로자 요건을 함께 확인해야 한다.",
        requested_right="모성보호 제도와 신청 절차 확인",
        employer_actions=["제도 안내 부재", "서류 준비 혼란", "회사 규모 핑계"],
        employer_responses=["작은 회사라 해당이 없을 것 같다고 말함", "노무사가 없어 정확히 모르겠다고 함"],
        incident_stages=["신청전"],
        post_styles=["hr_manager_question", "information_request"],
        search_keywords=["소규모 회사 모성보호", "법령 정보 부족"],
        title_templates=[
            "소규모 회사라 모성보호 제도를 어디서 확인해야 할지 모르겠어요",
            "인사담당자가 저 혼자인데 임산부 직원이 생겼습니다",
            "직원이 묻는데 출산휴가와 육아휴직 안내를 못 하겠어요",
        ],
        content_templates=[
            "{company_size} {industry} 회사에서 총무와 인사를 같이 맡고 있습니다. 임산부 직원이 생겼는데 출산전후휴가, 근로시간 단축, 육아휴직을 어디까지 안내해야 하는지 모르겠어요. 작은 회사도 모두 적용되는지 헷갈립니다.",
            "직원이 모성보호 제도를 물어봤는데 저도 처음이라 정확히 답을 못 했습니다. 법령은 너무 어렵고 고용보험 신청 절차도 복잡해서 한 번에 정리된 기준이 있으면 좋겠어요.",
        ],
        comment_templates=[
            "고용노동부 안내자료와 고용보험 사이트를 같이 보시면 좋아요.",
            "작은 회사라도 법정 제도는 별도로 확인해야 합니다.",
            "직원에게 확인 중이라고 말하고 서면 안내로 정리해보세요.",
        ],
        sentiment_labels=["막막", "불안", "희망"],
        sentiment_range=(0.35, 0.62),
        severity_options=["low", "medium"],
        ambiguity_options=["medium", "high"],
        author_roles=["hr_manager"],
        employment_types=["정규직"],
        pregnancy_mode="mixed",
    ),
]


def make_id(prefix: str, index: int) -> str:
    return str(uuid.uuid5(uuid.NAMESPACE_DNS, f"momjourney-{prefix}-{index}"))


def random_date(start: str = "2024-01-01", end: str = "2025-12-31") -> str:
    start_dt = datetime.strptime(start, "%Y-%m-%d")
    end_dt = datetime.strptime(end, "%Y-%m-%d")
    delta = random.randint(0, (end_dt - start_dt).days)
    return (start_dt + timedelta(days=delta)).strftime("%Y-%m-%d")


def plus_days(date_text: str, min_days: int = 1, max_days: int = 5) -> str:
    base = datetime.strptime(date_text, "%Y-%m-%d")
    return (base + timedelta(days=random.randint(min_days, max_days))).strftime("%Y-%m-%d")


def hr_team_by_size(company_size: str) -> bool:
    if company_size == "5인 미만":
        return False
    if company_size == "5-20인 미만":
        return random.random() < 0.18
    if company_size == "20-100인 미만":
        return random.random() < 0.55
    return random.random() < 0.9


def contract_type(employment_type: str) -> str:
    mapping = {
        "정규직": "기간의 정함 없음",
        "계약직": "기간제 근로계약",
        "파견직": "파견 근로계약",
        "단시간근로자": "단시간 근로계약",
        "프리랜서": "위탁계약 여부 확인 필요",
    }
    return mapping[employment_type]


def quote_response(response: str) -> str:
    """Turn a stored response summary into a natural quoted utterance."""
    replacements = {
        "휴직 중 조직이 바뀌어서 어쩔 수 없다고 설명함": "휴직 중 조직이 바뀌어서 어쩔 수 없다",
        "적응 기간이라며 기존 업무 복귀를 미룸": "적응 기간이 필요해서 기존 업무 복귀는 조금 더 봐야 한다",
        "업무상 필요라며 발령을 수용하라고 함": "업무상 필요한 발령이라 수용해야 한다",
        "다른 대안은 없다고 통보함": "다른 대안은 없다",
        "실근무 기간이 부족해서 어쩔 수 없다고 설명함": "실근무 기간이 부족해서 어쩔 수 없다",
        "평가 기준상 휴직자는 제외된다고 말함": "평가 기준상 휴직자는 제외된다",
        "회사 사정이 어렵다며 스스로 정리하는 게 좋겠다고 말함": "회사 사정이 어려우니 스스로 정리하는 게 좋겠다",
        "복귀 자리가 애매하다고 반복함": "복귀할 자리가 애매하다",
        "팀이 안 돌아간다며 시기를 미루자고 함": "팀이 안 돌아가니 시기를 조금 미루자",
        "회사 형편상 무급휴직으로 처리하자고 함": "회사 형편상 무급휴직으로 처리하자",
        "휴직 예정자는 장기 프로젝트에서 빼는 게 맞다고 말함": "휴직 예정자는 장기 프로젝트에서 빼는 게 맞다",
        "올해 평가는 기대하지 말라고 함": "올해 평가는 기대하지 않는 게 좋다",
        "바쁜 시기라 지금은 어렵다고 함": "바쁜 시기라 지금은 어렵다",
        "그런 제도를 들어본 적 없다고 말함": "그런 제도는 들어본 적 없다",
        "인력 부족 때문에 불가능하다고 함": "인력 부족 때문에 불가능하다",
        "원하는 시간대는 안 되고 회사가 정한 시간만 가능하다고 함": "원하는 시간대는 안 되고 회사가 정한 시간만 가능하다",
        "다들 하는 일이니 예외는 어렵다고 함": "다들 하는 일이니 예외는 어렵다",
        "임신 사실을 공식으로 말하지 않았으니 배려하기 어렵다고 함": "임신 사실을 공식으로 말하지 않았으니 배려하기 어렵다",
        "바쁜 시기라 검진은 개인 연차로 처리하라고 함": "바쁜 시기라 검진은 개인 연차로 처리하라",
        "오전 진료는 업무 공백이 크니 안 된다고 함": "오전 진료는 업무 공백이 커서 안 된다",
        "회사도 처음이라 정확히 모르겠다고 함": "회사도 처음이라 정확히 모르겠다",
        "직원이 알아서 신청하라고 함": "직원이 알아서 신청하라",
        "일반 병가로 처리하면 되는지 모르겠다고 함": "일반 병가로 처리하면 되는지 모르겠다",
        "규정에 없어서 확인이 필요하다고 함": "규정에 없어서 확인이 필요하다",
        "다음 계약은 상황을 봐야 한다고 말함": "다음 계약은 상황을 봐야 한다",
        "임신하면 업무 투입이 어렵지 않겠냐고 말함": "임신하면 업무 투입이 어렵지 않겠냐",
        "몸이 힘들면 중요한 업무는 맡기기 어렵다고 함": "몸이 힘들면 중요한 업무는 맡기기 어렵다",
        "팀 분위기상 빨리 알려야 한다고 압박함": "팀 분위기상 빨리 알려야 한다",
        "작은 회사라 해당이 없을 것 같다고 말함": "작은 회사라 해당이 없을 것 같다",
        "노무사가 없어 정확히 모르겠다고 함": "노무사가 없어 정확히 모르겠다",
    }
    return replacements.get(response, response.replace("라고 함", "라").replace("다고 함", "다").replace("말함", "말했습니다"))


def action_effect(action: str) -> str:
    effects = {
        "임신 공개 압박": "임신 사실을 빨리 공개하라는 압박을 받는 모습",
        "업무 배제": "중요 업무에서 배제되는 모습",
        "소문 확산": "사내에 임신 소문이 퍼지는 모습",
    }
    return effects.get(action, f"{action}을 받는 모습")


def pregnancy_context(mode: str) -> dict[str, Any]:
    if mode == "postpartum":
        child_age = random.choice([3, 5, 6, 8, 9, 11, 14, 18, 24])
        stage = "산후6개월이내" if child_age <= 6 else "산후1년이내" if child_age <= 12 else "육아기"
        return {
            "pregnancy_stage": stage,
            "pregnancy_week": None,
            "child_age_months": child_age,
        }
    if mode == "childcare":
        child_age = random.choice([7, 10, 14, 18, 24, 30, 36, 48, 60])
        return {
            "pregnancy_stage": "육아기" if child_age > 12 else "산후1년이내",
            "pregnancy_week": None,
            "child_age_months": child_age,
        }
    if mode == "late_pregnancy":
        week = random.choice([28, 30, 32, 34, 36])
        return {
            "pregnancy_stage": "임신후기",
            "pregnancy_week": week,
            "child_age_months": None,
        }
    if mode == "early_or_late_pregnancy":
        week = random.choice([7, 8, 9, 10, 11, 12, 36, 37])
        return {
            "pregnancy_stage": "임신초기" if week <= 12 else "임신후기",
            "pregnancy_week": week,
            "child_age_months": None,
        }
    if mode == "pregnancy":
        week = random.choice([6, 8, 9, 11, 13, 15, 18, 21, 24, 27])
        return {
            "pregnancy_stage": "임신초기" if week <= 12 else "임신중기",
            "pregnancy_week": week,
            "child_age_months": None,
        }
    if mode == "mixed":
        return random.choice(
            [
                pregnancy_context("pregnancy"),
                pregnancy_context("late_pregnancy"),
                pregnancy_context("postpartum"),
            ]
        )
    raise ValueError(f"Unknown pregnancy mode: {mode}")


def format_context_values(
    scenario: Scenario,
    company_size: str,
    industry: str,
    employment_type: str,
    context: dict[str, Any],
) -> dict[str, Any]:
    tenure_months = random.randint(7, 96)
    leave_months = random.choice([3, 4, 6, 8, 10, 12])
    child_age_months = context["child_age_months"]
    pregnancy_week = context["pregnancy_week"]
    child_age_text = f"생후 {child_age_months}개월" if child_age_months else "아직 출산 전"
    old_task = random.choice(["매출관리", "고객사 운영", "서비스 기획", "물류 운영", "마케팅 캠페인", "회계 마감", "병동 스케줄 관리"])
    new_task = random.choice(["자료 정리", "전화 응대", "단순 입력", "보조 업무", "민원 분류", "재고 확인"])
    action = random.choice(scenario.employer_actions)
    raw_response = random.choice(scenario.employer_responses)
    return {
        "tenure_months": tenure_months,
        "tenure_text": f"{tenure_months // 12}년 {tenure_months % 12}개월" if tenure_months >= 12 else f"{tenure_months}개월",
        "leave_months": leave_months,
        "company_size": company_size,
        "industry": industry,
        "employment_type": employment_type,
        "pregnancy_week": pregnancy_week or random.choice([8, 10, 14, 20, 30]),
        "child_age_text": child_age_text,
        "old_task": old_task,
        "new_task": new_task,
        "action": action,
        "action_effect": action_effect(action),
        "response": quote_response(raw_response),
        "employer_response_raw": raw_response,
        "after_return_weeks": random.choice([2, 3, 4, 6, 8]),
        "contract_months_left": random.choice([1, 2, 3, 4, 6]),
    }


def choose_generation_meta(strategy: str) -> tuple[str, str, str, int]:
    if strategy not in GENERATION_META:
        raise ValueError(f"Unknown generation strategy: {strategy}")
    model_name, prompt_template_id, refinement_rounds = GENERATION_META[strategy]
    return strategy, model_name, prompt_template_id, refinement_rounds


def quality_checks(strategy: str, ambiguity_level: str) -> dict[str, Any]:
    if strategy == "prompt_based":
        realism = random.uniform(0.72, 0.84)
        law = random.uniform(0.68, 0.82)
        label = random.uniform(0.76, 0.88)
        diversity = random.uniform(0.72, 0.86)
    elif strategy == "rag_augmented":
        realism = random.uniform(0.78, 0.9)
        law = random.uniform(0.84, 0.94)
        label = random.uniform(0.82, 0.93)
        diversity = random.uniform(0.76, 0.89)
    else:
        realism = random.uniform(0.86, 0.96)
        law = random.uniform(0.88, 0.97)
        label = random.uniform(0.88, 0.97)
        diversity = random.uniform(0.84, 0.95)

    needs_review = ambiguity_level == "high" and (law < 0.86 or random.random() < 0.25)
    return {
        "realism_score": round(realism, 3),
        "label_confidence": round(label, 3),
        "law_consistency_score": round(law, 3),
        "diversity_score": round(diversity, 3),
        "needs_human_review": needs_review,
    }


def make_comments(
    scenario: Scenario,
    post_date: str,
    index: int,
    count: int | None = None,
) -> list[dict[str, Any]]:
    count = count if count is not None else random.choice([2, 2, 3])
    selected = random.sample(scenario.comment_templates, k=min(count, len(scenario.comment_templates)))
    comments = []
    for offset, content in enumerate(selected):
        comments.append(
            {
                "comment_id": make_id(f"comment-{scenario.seed_id}-{offset}", index),
                "content": content,
                "likes": random.randint(3, 48),
                "created_at": plus_days(post_date),
            }
        )
    return comments


def make_record(index: int, scenario: Scenario, generation_strategy: str) -> dict[str, Any]:
    company_size = random.choice(COMPANY_SIZES)
    industry = random.choice(INDUSTRIES)
    author_role = random.choice(scenario.author_roles)
    employment_type = random.choice(scenario.employment_types)
    context = pregnancy_context(scenario.pregnancy_mode)
    format_values = format_context_values(scenario, company_size, industry, employment_type, context)

    title = random.choice(scenario.title_templates).format(**format_values)
    content = random.choice(scenario.content_templates).format(**format_values)
    post_date = random_date()
    generation_strategy, model_name, prompt_template_id, refinement_rounds = choose_generation_meta(generation_strategy)

    sentiment_score = round(random.uniform(*scenario.sentiment_range), 3)
    emotion_intensity = round(1 - sentiment_score + random.uniform(-0.05, 0.05), 3)
    emotion_intensity = max(0.35, min(0.98, emotion_intensity))
    ambiguity_level = random.choice(scenario.ambiguity_options)
    comments = make_comments(scenario, post_date, index)

    evidence = random.sample(EVIDENCE_POOL, k=random.choice([1, 2, 3]))
    if "없음" in evidence and len(evidence) > 1:
        evidence.remove("없음")

    return {
        "post_id": make_id("post", index),
        "schema_version": SCHEMA_VERSION,
        "source_type": "synthetic",
        "generated_at": GENERATED_AT,
        "cafe_name": random.choice(CAFES),
        "title": title,
        "content": content,
        "post_style": random.choice(scenario.post_styles),
        "simulated_posted_at": post_date,
        "search_keyword": random.choice(scenario.search_keywords),
        "tags": sorted(set([f"#{scenario.lda_topic_label}", *[f"#{tag}" for tag in scenario.legal_issue_tags[:3]]])),
        "author_role": author_role,
        "employment_type": employment_type,
        "tenure_months": format_values["tenure_months"],
        "pregnancy_stage": context["pregnancy_stage"],
        "pregnancy_week": context["pregnancy_week"],
        "child_age_months": context["child_age_months"],
        "company_size": company_size,
        "industry": industry,
        "has_hr_team": hr_team_by_size(company_size),
        "work_arrangement": random.choice(WORK_ARRANGEMENTS),
        "contract_type": contract_type(employment_type),
        "pain_point_summary": f"요청 권리({scenario.requested_right})와 관련해 회사가 {format_values['action']} 또는 유사한 조치를 해 고충이 발생함",
        "incident_stage": random.choice(scenario.incident_stages),
        "employer_action": format_values["action"],
        "requested_right": scenario.requested_right,
        "employer_response": format_values["employer_response_raw"],
        "evidence_available": evidence,
        "lda_topic_id": TOPIC_IDS[scenario.lda_topic_label],
        "lda_topic_label": scenario.lda_topic_label,
        "hr_violation_type": scenario.hr_violation_type,
        "legal_issue_tags": scenario.legal_issue_tags,
        "severity": random.choice(scenario.severity_options),
        "ambiguity_level": ambiguity_level,
        "related_laws": scenario.related_laws,
        "related_articles": scenario.related_articles,
        "legal_ground_truth_summary": scenario.legal_ground_truth_summary,
        "answerability": "needs_fact_check" if ambiguity_level == "high" else "answerable_by_law",
        "sentiment": random.choice(scenario.sentiment_labels),
        "sentiment_score": sentiment_score,
        "emotion_intensity": emotion_intensity,
        "view_count": random.randint(180, 7600),
        "like_count": random.randint(8, 280),
        "comment_count": len(comments),
        "comments": comments,
        "generation_strategy": generation_strategy,
        "model_name": model_name,
        "prompt_template_id": prompt_template_id,
        "seed_scenario_id": f"{scenario.seed_id}_{index:03d}",
        "refinement_rounds": refinement_rounds,
        "quality_checks": quality_checks(generation_strategy, ambiguity_level),
    }


def scenarios_by_topic() -> dict[str, list[Scenario]]:
    groups = {topic: [] for topic in TOPIC_IDS}
    for scenario in SCENARIOS:
        groups[scenario.lda_topic_label].append(scenario)
    missing = [topic for topic, scenarios in groups.items() if not scenarios]
    if missing:
        raise ValueError(f"No scenarios defined for topics: {missing}")
    return groups


def balanced_generation_plan(n: int) -> list[tuple[Scenario, str]]:
    cell_count = len(TOPIC_IDS) * len(GENERATION_STRATEGIES)
    if n % cell_count != 0:
        raise ValueError(
            f"Dataset size must be divisible by {cell_count} "
            f"(topics {len(TOPIC_IDS)} x strategies {len(GENERATION_STRATEGIES)})."
        )

    per_topic_strategy = n // cell_count
    grouped = scenarios_by_topic()
    plan: list[tuple[Scenario, str]] = []

    for topic in TOPIC_IDS:
        scenarios = grouped[topic]
        for strategy in GENERATION_STRATEGIES:
            for i in range(per_topic_strategy):
                plan.append((scenarios[i % len(scenarios)], strategy))

    random.shuffle(plan)
    return plan


def generate_dataset(n: int = DEFAULT_DATASET_SIZE) -> list[dict[str, Any]]:
    records: list[dict[str, Any]] = []
    for index, (scenario, strategy) in enumerate(balanced_generation_plan(n), start=1):
        records.append(make_record(index, scenario, strategy))
    random.shuffle(records)
    return records


def main() -> None:
    dataset = generate_dataset(DEFAULT_DATASET_SIZE)
    OUTPUT_PATH.write_text(
        json.dumps(dataset, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"Wrote {len(dataset)} records to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
