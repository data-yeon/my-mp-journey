"""
Deterministic answers for common leave-duration questions.

This catches short, ambiguous questions such as "나 얼마나 쉬어야함" before
they fall through to broad legal RAG and mix unrelated leave systems.
"""

from __future__ import annotations

import re

_MATERNITY_RE = re.compile(r"출산전후|출산\s*휴가|산전|산후|임신|출산")
_PATERNITY_RE = re.compile(r"배우자\s*출산|남편\s*출산|아빠\s*출산|배우자")
_PARENTAL_RE = re.compile(r"육아휴직|육휴")
_FERTILITY_RE = re.compile(r"난임|난임치료")

_POLICIES: list[tuple[re.Pattern, str, str]] = [
    (
        _PATERNITY_RE,
        "배우자 출산휴가는 법정 기준으로 20일 유급휴가입니다. 배우자가 출산한 날부터 120일 이내에 사용해야 하고, 3회까지 나누어 사용할 수 있습니다.",
        "남녀고용평등법 제18조의2",
    ),
    (
        _MATERNITY_RE,
        "출산 당사자라면 출산전후휴가는 기본 90일입니다. 미숙아를 출산한 경우에는 100일, 한 번에 둘 이상 자녀를 임신한 경우에는 120일입니다. 출산 후에는 최소 45일, 다태아의 경우 최소 60일 이상 남겨두어야 합니다.",
        "근로기준법 제74조",
    ),
    (
        _PARENTAL_RE,
        "육아휴직은 기본 1년 이내입니다. 같은 자녀를 대상으로 부모가 모두 각각 3개월 이상 육아휴직을 사용하는 경우 등에는 6개월 이내 추가 사용 가능성이 있어, 대상 요건을 확인해야 합니다.",
        "남녀고용평등법 제19조",
    ),
    (
        _FERTILITY_RE,
        "난임치료휴가는 연간 6일 이내이고, 최초 2일은 유급입니다.",
        "남녀고용평등법 제18조의3",
    ),
]

_SALARY_RE = re.compile(r"급여|지원금|월급|수당|받아|받을")
_DURATION_RE = re.compile(r"얼마|며칠|몇\s*일|기간|쉬")

_MULTI_ANSWER = (
    "어떤 휴가를 말하는지에 따라 기간이 달라요.\n\n"
    "- 출산 당사자: 출산전후휴가 기본 90일, 미숙아 100일, 다태아 120일\n"
    "- 배우자: 배우자 출산휴가 20일 유급\n"
    "- 육아휴직: 기본 1년 이내, 일부 요건에서 6개월 추가 가능\n"
    "- 난임치료휴가: 연간 6일 이내, 최초 2일 유급\n\n"
    "정확히 계산하려면 '출산휴가', '배우자 출산휴가', '육아휴직' 중 어떤 제도인지 알려주세요."
)

_COMPANY_HINT = "\n\n회사 취업규칙과 비교가 필요하면 '우리 회사 규정으로는?'이라고 이어서 물어보시면 됩니다."


def answer_leave_question(question: str) -> str:
    """출산전후휴가·육아휴직·배우자 출산휴가·난임치료휴가의 법정 기간을 즉시 반환합니다."""
    if _SALARY_RE.search(question):
        return ""  # 급여 질문은 RAG로 처리

    matched: list[tuple[str, str]] = []
    for pattern, answer, source in _POLICIES:
        if pattern.search(question):
            matched.append((answer, source))

    if len(matched) == 1:
        answer, source = matched[0]
        return f"{answer}\n\n근거: {source}{_COMPANY_HINT}"

    if len(matched) > 1 or (not matched and _DURATION_RE.search(question)):
        return _MULTI_ANSWER

    return ""  # 처리 불가 → RAG로 위임
