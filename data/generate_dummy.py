"""
더미데이터 생성기 v3
- hr_community: 500개, company_size/industry/pregnancy_stage/sentiment_score 필드 추가
- wellness_review: 500개, 제품/리뷰 풀 확대
- mobility_route: 10개 병원 × 5개 경로 = 50개
"""

import json
import uuid
import random
from datetime import datetime, timedelta

random.seed(42)

def rand_date(start="2024-01-01", end="2025-12-31"):
    s = datetime.strptime(start, "%Y-%m-%d")
    e = datetime.strptime(end, "%Y-%m-%d")
    return (s + timedelta(days=random.randint(0, (e - s).days))).strftime("%Y-%m-%d")


# ── 1. HR 커뮤니티 ─────────────────────────────────────────────────────────

COMPANY_SIZES = ["5인 미만", "5-20인 미만", "20-100인 미만", "100인 이상"]
INDUSTRIES    = ["제조업", "서비스업", "IT", "유통/물류", "의료", "교육", "금융", "기타"]
DURATIONS     = ["입사 1년차", "입사 2년차", "3년 근무", "5년 근무", "7년차", "10년차"]
CHILD_AGES    = ["생후 3개월", "생후 6개월", "돌쟁이", "18개월", "만 2세", "만 3세"]
PREGNANCY_WKS = list(range(6, 38))

SENTIMENTS = {
    "복직_불이익":    {"labels": ["억울", "분노", "막막"], "score_range": (0.05, 0.25)},
    "단축근무_거절":  {"labels": ["억울", "불안", "분노"], "score_range": (0.10, 0.30)},
    "직장내_눈치":    {"labels": ["불안", "막막", "슬픔"], "score_range": (0.15, 0.35)},
    "법령_정보_부족": {"labels": ["막막", "불안", "희망"], "score_range": (0.30, 0.55)},
    "임신_은폐":      {"labels": ["불안", "두려움", "막막"], "score_range": (0.10, 0.30)},
}

COMMENT_POOL = {
    "법적조언": [
        "노무사 무료 상담 받아보세요",
        "고용노동부 1350 전화해보세요",
        "서면으로 신청하면 거절 못 해요",
        "근로기준법 위반 해당돼요",
        "노동청 진정 넣을 수 있어요",
        "법적으로 원직 복귀 요구 가능해요",
        "직장내 괴롭힘 신고도 병행해보세요",
        "무료 법률 상담 1345로 전화해보세요",
    ],
    "공감": [
        "저도 똑같이 당했어요ㅠㅠ",
        "진짜 너무하네요 대신 화나요",
        "소규모 회사일수록 더 심하더라고요",
        "워킹맘이 살기 힘든 나라예요",
        "저도 그래서 결국 퇴사했어요",
        "힘내세요 응원할게요 ㅠ",
        "이런 일이 아직도 있다니 화가 나네요",
        "같은 엄마로서 너무 공감돼요",
    ],
    "정보공유": [
        "배우자출산휴가 2024년부터 20일이에요",
        "고용보험 홈페이지에 신청 양식 있어요",
        "육아휴직 급여 상한액 올해 올랐어요",
        "사업주가 거절하면 과태료 대상이에요",
        "국선노무사 제도 이용해보세요",
        "임신기 근로시간 단축은 1일 2시간 가능해요",
        "출산전후휴가 90일 중 60일은 유급이에요",
        "고용보험 홈페이지에서 온라인 신청 가능해요",
    ],
    "질문": [
        "혹시 서면으로 신청하셨나요?",
        "회사 규모가 어떻게 되세요?",
        "계약직이세요 정규직이세요?",
        "노동청 신고는 해보셨어요?",
        "인사팀이 따로 있는 회사인가요?",
        "취업규칙에 관련 내용 있는지 확인해보셨어요?",
    ],
}

def rand_comments():
    pool_keys = random.sample(list(COMMENT_POOL.keys()), k=random.randint(2, 3))
    comments = []
    for key in pool_keys:
        c = random.choice(COMMENT_POOL[key])
        comments.append({
            "comment_id": str(uuid.uuid4()),
            "content": c,
            "likes": random.randint(0, 50),
            "created_at": rand_date(),
        })
    return comments

# ── 토픽별 글 생성기 ──────────────────────────────────────────────────────

def make_post_bokjik():
    dur    = random.choice(DURATIONS)
    size   = random.choice(COMPANY_SIZES)
    ind    = random.choice(INDUSTRIES)
    months = random.randint(4, 12)
    child  = random.choice(CHILD_AGES)
    dept   = random.choice(["기획", "영업지원", "마케팅", "인사", "개발", "디자인", "회계"])
    new_dept = random.choice(["총무", "서류정리", "잡무", "단순업무", "콜센터 지원"])

    situations = [
        (f"복직했더니 원래 업무가 통째로 없어졌어요",
         f"{dur} {ind}에 다니고 있어요. {months}개월 육아휴직 후 복직했는데 제가 맡던 {dept} 업무가 없어지고 {new_dept}만 맡게 됐어요. {size} 회사라 인사팀도 없고 어디에 어떻게 얘기해야 할지 막막해요."),
        (f"복직 {random.randint(1,3)}개월 만에 권고사직 압박받고 있어요",
         f"{ind} {size} 규모 회사에 {dur}예요. 복직하고 나서 팀장이 계속 '회사 사정이 어렵다', '네 자리가 애매하다' 같은 말을 반복해요. 아이가 {child}인데 지금 그만두면 너무 막막해서요. 이거 부당해고 전 단계 아닌가요?"),
        (f"육아휴직 복직 후 성과급에서 제외됐어요",
         f"{months}개월 육아휴직 후 복직했는데 이번에 팀 성과급 배분에서 저만 빠졌어요. '재직 기간 기준'이라고 하는데 육아휴직 기간을 재직 기간에서 제외하는 게 맞는 건가요? {size} {ind}이에요."),
        (f"복직하자마자 지방 전보 발령 났어요",
         f"{dur} 직장인이에요. 아이가 {child}인데 복직하자마자 지방 발령이 났어요. 거절했더니 '업무 필요에 의한 인사'라며 수용하라고 해요. 부당전보 해당 되나요?"),
        (f"복직 후 중요 프로젝트에서 계속 배제돼요",
         f"{months}개월 육아휴직 후 돌아왔는데 팀 핵심 프로젝트에서 계속 빠져 있어요. 팀장은 '적응 기간이 필요하다'고 하는데 벌써 {random.randint(3,8)}개월째예요."),
        (f"복직 후 연봉협상에서 혼자 빠졌어요",
         f"같은 팀원들은 다 연봉 올랐는데 저만 동결이에요. {months}개월 육아휴직 다녀온 게 이유래요. 휴직 기간은 법적으로 근속 기간에 포함되는 거 아닌가요?"),
        (f"육아휴직 후 복직했더니 팀이 해체됐어요",
         f"복직하러 갔더니 제가 있던 팀 자체가 없어졌어요. 새로운 팀에 배치해준다는데 직급도 직무도 다 애매해요. {ind} {size} 회사예요."),
        (f"복직 후 재택 불가 통보 받았어요",
         f"육아휴직 전에는 주 2회 재택이었는데 복직하니까 전면 출근으로 바뀌었대요. 아이가 {child}인데 갑자기 이러면 너무 힘들어요."),
    ]
    title, content = random.choice(situations)
    return (title, content, ["#복직", "#육아휴직", "#불이익", f"#{size.replace(' ','')}"],
            0, "복직_불이익", "직무변경_불이익", size, ind, "산후6개월이내", "복직후")

def make_post_eyukyou():
    size  = random.choice(COMPANY_SIZES)
    ind   = random.choice(INDUSTRIES)
    wk    = random.choice(PREGNANCY_WKS[12:30])
    child = random.choice(CHILD_AGES)

    situations = [
        (f"임신 {wk}주인데 육아휴직 얘기를 못 꺼내겠어요",
         f"{ind} {size} 회사에 다녀요. 임신 {wk}주인데 아직 회사에 육아휴직 얘기를 못 했어요. 팀원이 {random.randint(2,5)}명뿐이라 제가 빠지면 팀이 안 돌아가서요."),
        (f"대표가 육아휴직 대신 무급휴직 하자고 해요",
         f"육아휴직 신청했더니 대표가 '회사가 어려우니 무급휴직으로 처리하자'고 해요. 고용보험에서 급여 나오는 걸 아는데 이게 말이 되나요? {size} {ind}이에요."),
        (f"육아휴직 쓰면 팀 성과에 영향 있다고 해요",
         f"팀장이 '육아휴직 쓰면 팀 KPI에 영향 있다'며 눈치를 줘요. {ind}에서 {random.choice(DURATIONS)}인데 이런 말 듣고 나서 너무 눈치 보여요."),
        (f"{size} 사업장인데 육아휴직 거절당했어요",
         f"사장님이 '우리 같은 작은 회사에 그런 거 해당 안 된다'고 했어요. {ind} {size} 회사인데 이게 말이 되나요? 법적으로는 규모 상관없이 적용되는 거 아닌가요?"),
        (f"육아휴직 복귀 후 연봉이 동결됐어요",
         f"같은 팀 다른 분들은 다 올랐는데 저만 동결이에요. 육아휴직 기간 공백이 이유래요. 이게 불이익 처우 아닌가요?"),
        (f"아이가 {child}인데 육아휴직 추가 사용이 가능한가요",
         f"첫 번째 육아휴직을 {random.randint(3,6)}개월만 쓰고 복직했어요. 아이가 {child}인데 추가로 남은 기간 사용이 가능한지 궁금해요. {size} {ind} 다니고 있어요."),
        (f"남편이 육아휴직 쓰겠다고 했더니 회사에서 만류해요",
         f"남편 회사에서 육아휴직 쓰겠다고 했더니 팀장이 '남자가 무슨 육아휴직이냐'며 눈치를 줬대요. {size} {ind}인데 이것도 신고 가능한가요?"),
        (f"육아휴직 중 회사에서 계속 연락이 와요",
         f"육아휴직 중인데 팀장이 거의 매일 카톡으로 업무 관련 연락을 해요. 법적으로 휴직 중 업무 지시는 문제가 되지 않나요?"),
    ]
    title, content = random.choice(situations)
    preg_stage = "임신중기" if wk <= 27 else "임신후기"
    return (title, content, ["#육아휴직", "#눈치", f"#{size.replace(' ','')}"],
            3, "직장내_눈치", "육아휴직_사용_방해", size, ind, preg_stage, "육아휴직 눈치")

def make_post_danchuk():
    size  = random.choice(COMPANY_SIZES)
    ind   = random.choice(INDUSTRIES)
    child = random.choice(CHILD_AGES)
    wk    = random.choice(PREGNANCY_WKS[:20])

    situations = [
        (f"육아기 단축근무 신청했는데 '지금은 안 된다'고 해요",
         f"{child} 아이 있어서 육아기 단축근무 신청했어요. 팀장이 '{random.choice(['지금 프로젝트 중이라','인력 부족이라','나중에 다시 얘기하자고'])}' 하면서 계속 미뤄요."),
        (f"단축근무 신청하면 성과급 불이익 준다고 해요",
         f"단축근무 신청하려고 했더니 팀장이 '그러면 성과 평가 기준이 달라진다'고 했어요. {size} 회사라 인사팀이 따로 없어요. 이거 불이익 처우 아닌가요?"),
        (f"임신 {wk}주인데 근로시간 단축 신청 거절당했어요",
         f"임신 {wk}주예요. 임신 초기 근로시간 단축 신청했는데 사장님이 '그런 제도 처음 듣는다'고 해요. {size} {ind}인데 법적으로 쓸 수 있는 거 맞죠?"),
        (f"단축근무 중인데 실제로는 정시 퇴근을 못 해요",
         f"단축근무 승인은 났는데 매일 퇴근 전에 '이것만 하고 가라'는 식이에요. {random.randint(2,5)}개월째 이러고 있어요. 형식만 단축근무지 실제론 풀타임이에요."),
        (f"단축근무 후 팀에서 소외되는 느낌이에요",
         f"단축근무 시작하고 나서 중요 회의에서 계속 빠지고 있어요. '어차피 일찍 가잖아'라는 말도 들었고요. {child} 육아 때문에 쓰는 건데 이런 분위기가 너무 힘들어요."),
        (f"단축근무 신청서를 계속 반려해요",
         f"단축근무 신청서를 3번 냈는데 매번 '검토 중'이라며 반려돼요. 이미 {random.randint(2,4)}개월 기다렸어요. 법적으로 거절 사유가 제한적이라고 알고 있는데요."),
        (f"부서 이동 후 단축근무 다시 신청해야 하나요",
         f"단축근무 쓰던 중에 부서 이동이 됐어요. 새 팀장이 '여기선 단축근무 안 된다'고 하는데 이게 맞는 말인가요? {ind} {size} 회사예요."),
        (f"육아기 단축근무 시간을 회사 맘대로 정해줬어요",
         f"단축근무 신청했더니 회사가 제가 원하는 시간대가 아닌 다른 시간으로 일방 통보해요. 근로자가 시간을 선택할 수 있는 거 아닌가요?"),
    ]
    title, content = random.choice(situations)
    preg_stage = "임신초기" if wk <= 12 else "임신중기"
    return (title, content, ["#단축근무", "#육아기", "#워킹맘"],
            1, "단축근무_거절", "육아기_단축근무_거절", size, ind, preg_stage, "단축근무 거절")

def make_post_imsin():
    wk   = random.choice(PREGNANCY_WKS[:20])
    size = random.choice(COMPANY_SIZES)
    ind  = random.choice(INDUSTRIES)

    situations = [
        (f"임신 {wk}주인데 아직 회사에 말 못 했어요",
         f"{ind} {size} 다녀요. 임신 {wk}주인데 아직 말을 못 했어요. 얼마 전에 다른 직원이 임신 알렸다가 {random.choice(['계약 연장이 안 됐고','갑자기 업무에서 배제됐고','팀 분위기가 싸늘해졌다고'])} 들어서요."),
        (f"입덧이 너무 심한데 임신 사실 말하기가 무서워요",
         f"임신 {wk}주인데 입덧이 너무 심해요. 화장실을 {random.randint(3,8)}번씩 들락거리는데 몸이 안 좋다고만 하고 있어요. 태아검진 시간도 못 쓰고 있고요. {size} 회사라 눈치가 더 보여요."),
        (f"계약직인데 임신했어요 말해야 할까요",
         f"계약 만료가 {random.randint(2,6)}개월 남았는데 임신했어요. 임신 사실 말하면 계약 연장 안 해줄 것 같아서요. 그런데 숨기자니 몸이 너무 힘들고요."),
        (f"임신 알리고 나서 중요 업무에서 빠지게 됐어요",
         f"임신 알렸더니 팀장이 '몸 상태가 불안정하니까'라며 핵심 {random.choice(['프로젝트','거래처','업무'])}를 다른 팀원한테 넘겨버렸어요. 이게 차별 아닌가요?"),
        (f"야근 강요받고 있는데 임신 사실을 말해야 할지",
         f"임신 {wk}주인데 아직 말 안 했어요. 요즘 야근이 {random.randint(2,5)}일씩 계속되는데 몸이 너무 힘들어요. 말하면 불이익 받을 것 같고, 안 말하자니 몸이 걱정되고요."),
        (f"임신 {wk}주 직장인인데 태아검진 시간을 못 쓰고 있어요",
         f"임신 {wk}주예요. 법적으로 태아검진 시간이 보장되는데 '바쁜 시기라 나중에 몰아서 쓰라'는 말을 들었어요. 이게 맞는 건가요?"),
        (f"사내에서 임신 사실이 소문났어요",
         f"아직 공식적으로 알리지 않았는데 사내에서 임신 소문이 퍼졌어요. 그 이후로 팀장 태도가 달라졌고 중요 미팅에서도 빠지게 됐어요. {ind} {size}예요."),
        (f"임신 중 과도한 업무 지시를 받고 있어요",
         f"임신 {wk}주인데 다른 동료가 퇴사하면서 업무가 저한테 다 넘어왔어요. 임신 중에 이 업무량을 감당하기가 너무 힘들어요. 어떻게 대처해야 하나요?"),
    ]
    title, content = random.choice(situations)
    preg_stage = "임신초기" if wk <= 12 else "임신중기"
    return (title, content, ["#임신", "#직장내차별", "#임산부권리"],
            4, "임신_은폐", "임신차별_우려", size, ind, preg_stage, "임신 말못해")

def make_post_beopryeong():
    size = random.choice(COMPANY_SIZES)
    ind  = random.choice(INDUSTRIES)

    situations = [
        (f"소규모 회사 인사담당인데 모성보호 법령이 너무 복잡해요",
         f"{ind} {size} 회사에서 인사·총무를 혼자 담당하고 있어요. 직원 중에 임산부가 생겼는데 출산전후휴가, 육아휴직 급여 신청 방법, 서류 준비 등을 어디서 확인해야 할지 모르겠어요."),
        (f"배우자 출산휴가 20일인 거 직원이 더 잘 알더라고요",
         f"저는 10일인 줄 알고 있었는데 직원이 '20일로 바뀌었다'며 나머지를 요청했어요. {size} {ind}인데 법령 개정 사항을 제때 파악을 못 했네요."),
        (f"출산전후휴가 급여를 회사가 다 줘야 하나요 고용보험에서 나오나요",
         f"직원이 출산전후휴가에 들어갔는데 급여를 어디서 어떻게 지급해야 하는지 모르겠어요. {size} 회사라 전담 노무사가 없어서요."),
        (f"육아휴직 급여 신청 절차가 너무 복잡해요",
         f"{ind} {size} 인사담당자예요. 육아휴직 들어간 직원 급여 신청을 회사가 도와줘야 하는지, 직원이 직접 하는 건지도 모르겠고 서류 준비가 너무 복잡해요."),
        (f"임산부 야근 금지 규정이 어떻게 되나요",
         f"임산부 직원이 있는데 야근 지시를 해도 되는 건지 모르겠어요. 법적으로 어떤 제한이 있는지, 위반하면 어떤 처벌이 있는지 궁금해요. {size} {ind} 인사담당자예요."),
        (f"직원이 임신 중 유산했는데 어떤 휴가를 줘야 하나요",
         f"직원이 임신 중 유산했어요. 출산전후휴가와 다른 별도 규정이 있는지, 며칠이나 줘야 하는지 전혀 모르겠어요. {ind} {size}이에요."),
        (f"육아휴직자 대체인력 채용 지원금이 있다고 들었어요",
         f"육아휴직자가 나와서 대체 인력을 채용했는데 정부 지원금이 있다고 들었어요. {size} {ind}인데 어디서 신청하는 건지 모르겠어요."),
        (f"출산 전후 휴가와 육아휴직 연속 사용이 가능한가요",
         f"직원이 출산전후휴가 바로 뒤에 육아휴직을 연속으로 쓰고 싶다고 해요. 법적으로 가능한지, 행정 처리는 어떻게 해야 하는지 모르겠어요."),
    ]
    title, content = random.choice(situations)
    return (title, content, ["#인사담당자", "#법령정보", "#소규모기업HR"],
            2, "법령_정보_부족", "정보접근성_문제", size, ind, "산후1년이내", "법령 정보 부족")

TOPIC_MAKERS = [
    make_post_bokjik,
    make_post_eyukyou,
    make_post_danchuk,
    make_post_imsin,
    make_post_beopryeong,
]

CAFES = ["맘스홀릭베이비", "임신육아맘", "워킹맘클럽", "육아정보공유", "맘카페Seoul",
         "아기랑맘이랑", "임산부수다방", "육아한판", "맘모임서울", "대한민국워킹맘"]

def generate_hr_community(n=500):
    data = []
    for _ in range(n):
        maker = random.choice(TOPIC_MAKERS)
        result = maker()
        title, content, base_tags, topic_id, topic_label, violation_type, company_size, industry, preg_stage, keyword = result
        sentiment_info = SENTIMENTS[topic_label]
        sentiment_label = random.choice(sentiment_info["labels"])
        lo, hi = sentiment_info["score_range"]
        sentiment_score = round(random.uniform(lo, hi), 3)
        comments = rand_comments()
        data.append({
            "post_id":          str(uuid.uuid4()),
            "cafe_name":        random.choice(CAFES),
            "title":            title,
            "content":          content,
            "search_keyword":   keyword,
            "tags":             random.sample(base_tags, k=min(3, len(base_tags))),
            "company_size":     company_size,
            "industry":         industry,
            "pregnancy_stage":  preg_stage,
            "hr_violation_type":violation_type,
            "lda_topic_id":     topic_id,
            "lda_topic_label":  topic_label,
            "sentiment":        sentiment_label,
            "sentiment_score":  sentiment_score,
            "view_count":       random.randint(50, 8000),
            "like_count":       random.randint(0, 300),
            "comment_count":    len(comments),
            "comments":         comments,
            "crawled_at":       rand_date(),
        })
    return data


# ── 2. 웰니스 리뷰 ────────────────────────────────────────────────────────

PRODUCTS = {
    "초기": [
        ("락티브 활성형 엽산 800μg",         "엽산",         "1-12",  "영양제"),
        ("마더스핸즈 임산부 종합비타민",      "임산부 비타민","1-12",  "영양제"),
        ("노노베어 입덧케어 생강캔디",        "입덧 완화",    "4-16",  "식품"),
        ("비오비타 임산부 유산균",            "임산부 유산균","1-12",  "영양제"),
        ("맘스케어 입덧밴드 2개입",           "입덧밴드",     "4-14",  "용품"),
        ("뉴트리코어 임산부 DHA",             "DHA",         "1-40",  "영양제"),
        ("네이처메이드 엽산 400μg",           "엽산",         "1-12",  "영양제"),
        ("임산부용 무카페인 루이보스티 30입", "임산부 차",    "1-40",  "식품"),
    ],
    "중기": [
        ("훼로바-유 철분제 100mg",            "철분제",       "13-27", "영양제"),
        ("코니 임산부 수면 쿠션 U자형",       "임산부 베개",  "16-36", "용품"),
        ("맘스케어 임산부 복대 골반벨트",     "임산부 복대",  "16-36", "용품"),
        ("닥터에이 임산부 요가팬츠",          "임산부 바지",  "13-36", "의류"),
        ("피죤 임산부 스트레치 레깅스",       "임산부 레깅스","13-36", "의류"),
        ("베베숲 임산부 튼살 오일 100ml",     "튼살 오일",    "13-27", "뷰티"),
        ("맘마밀 임산부 전용 두유 190ml×24",  "임산부 두유",  "13-27", "식품"),
        ("브라운 전동 유축기 싱글",           "유축기",       "20-36", "용품"),
    ],
    "후기": [
        ("베이비무브 신생아 출산준비물 세트", "출산 준비물",  "28-40", "용품"),
        ("모윤 수유브라 무봉제 3종세트",      "수유 브라",    "28-40", "의류"),
        ("마더케어 임산부 배 튼살크림 250ml", "임산부 바디로션","28-40","뷰티"),
        ("해피맘 임산부 튼살크림 200ml",      "임산부 크림",  "28-40", "뷰티"),
        ("아벤느 임산부 선크림 SPF50+",       "임산부 선크림","28-40", "뷰티"),
        ("맘큰 수유쿠션 C형 유기농",          "수유쿠션",     "32-40", "용품"),
        ("뉴트리코어 산후 오메가3",           "산후 영양제",  "36-40", "영양제"),
        ("임산부 무릎 수면 쿠션 세트",        "수면 쿠션",    "28-40", "용품"),
    ],
}

REVIEW_POOL = {
    "긍정": [
        ("강추합니다!", "임신하고 제일 먼저 찾은 제품이에요. 입덧 심할 때도 냄새 없이 넘어가서 너무 좋아요. 재구매 필수!"),
        ("효과 좋아요", "꾸준히 먹었더니 빈혈 수치도 좋아지고 몸이 한결 가벼워졌어요. 산부인과 선생님도 칭찬해주셨어요."),
        ("임신 내내 사용 중", "임신 초기부터 지금 37주까지 계속 쓰고 있어요. 아무 트러블 없고 편해서 계속 재구매 중입니다."),
        ("가격 대비 최고", "성분도 좋고 가격도 합리적이에요. 임산부 카페에서 추천받고 샀는데 정말 만족해요."),
        ("산부인과 선생님 추천 제품", "검진 때 선생님이 이 제품 드시냐고 직접 물어볼 정도로 좋은 제품이에요. 믿고 먹어요."),
        ("두 번째 임신에도 재구매", "첫째 때도 썼고 이번 임신에도 바로 구매했어요. 역시 믿을 수 있는 제품이에요."),
        ("선물로도 좋아요", "임신한 친구한테 선물했더니 너무 좋아했어요. 포장도 예쁘고 품질도 훌륭해요."),
        ("부작용 없어요", "다른 제품은 속이 불편했는데 이건 전혀 그런 게 없어요. 순하고 좋아요."),
        ("허리 통증이 사라졌어요", "임신 후기 허리가 너무 아팠는데 이거 쓰고 나서 훨씬 편해졌어요. 진작 살걸 그랬어요."),
        ("배송 빠르고 포장 꼼꼼", "다음날 도착했어요. 포장도 꼼꼼하고 제품 품질도 좋아요."),
    ],
    "부정": [
        ("기대 이하예요", "냄새가 너무 심해서 먹기 힘들어요. 입덧 있을 때는 더 심하고요. 다른 제품으로 바꿀 예정이에요."),
        ("효과를 모르겠어요", "3개월 먹었는데 딱히 차이를 모르겠어요. 수치도 그대로고요. 가격이 아깝네요."),
        ("사이즈 안 맞아요", "사이즈 표가 있는데도 맞지 않았어요. 교환하려고 했더니 과정이 복잡했어요."),
        ("생각보다 불편해요", "리뷰 보고 샀는데 실제로는 좀 달랐어요. 개인 차가 있는 것 같아요."),
        ("배송이 너무 느려요", "일주일 넘게 걸렸어요. 급하게 필요했는데 너무 답답했어요."),
        ("포장이 부실해요", "배송 중에 파손됐어요. 환불 처리는 됐지만 번거로웠어요."),
    ],
}

def generate_wellness_reviews(n=500):
    data = []
    for _ in range(n):
        period = random.choice(["초기", "중기", "후기"])
        product_name, keyword, week_range, category = random.choice(PRODUCTS[period])
        is_positive = random.random() < 0.72
        label = "긍정" if is_positive else "부정"
        title, content = random.choice(REVIEW_POOL[label])
        rating = round(random.uniform(4.0, 5.0) if is_positive else random.uniform(1.5, 3.2), 1)
        sentiment_score = round(random.uniform(0.65, 1.0) if is_positive else random.uniform(0.05, 0.40), 2)
        trust_score = round(rating / 5 * 0.6 + sentiment_score * 0.4, 4)
        wk_lo, wk_hi = int(week_range.split("-")[0]), int(week_range.split("-")[1])
        pregnancy_week = random.randint(wk_lo, wk_hi)
        data.append({
            "review_id":            str(uuid.uuid4()),
            "product_id":           str(random.randint(10000000, 99999999)),
            "product_name":         product_name,
            "product_category":     category,
            "search_keyword":       keyword,
            "period":               period,
            "pregnancy_week":       pregnancy_week,
            "pregnancy_week_range": week_range,
            "review_title":         title,
            "review_content":       content,
            "rating":               rating,
            "sentiment_score":      sentiment_score,
            "sentiment_label":      label,
            "trust_score":          trust_score,
            "helpful_count":        random.randint(0, 120),
            "verified_purchase":    random.choice([True, True, True, False]),
            "option":               random.choice(["1개", "2개", "3개", "30정", "60정", "90정", "120정"]),
            "crawled_at":           rand_date(),
        })
    return data


# ── 3. 모빌리티 경로 ──────────────────────────────────────────────────────

HOSPITALS = [
    ("이화여대목동병원",      "양천구",       37.5279, 126.8746),
    ("강남차병원",            "강남구",       37.5043, 127.0245),
    ("제일병원",              "중구",         37.5639, 126.9888),
    ("서울아산병원 산부인과", "송파구",       37.5270, 127.1081),
    ("마포 미즈메디병원",     "마포구",       37.5497, 126.9130),
    ("한림대강남성심병원",    "영등포구",     37.5255, 126.9008),
    ("분당서울대병원",        "성남시 분당구",37.3540, 127.1246),
    ("삼성서울병원 산부인과", "강남구",       37.4884, 127.0855),
    ("건국대병원 산부인과",   "광진구",       37.5409, 127.0813),
    ("고려대안암병원 산부인과","성북구",      37.5897, 127.0261),
]

ROAD_NAMES = ["사거리", "대로", "로", "길", "교차로", "언덕길", "육교구간", "지하보도", "횡단보도 구간"]
AREAS      = ["목동", "여의도", "강남", "마포", "홍대", "신촌", "이태원", "건대", "왕십리", "성북"]

def make_path(start_lat, start_lng, end_lat, end_lng, n_points=8):
    path = [[round(start_lng, 7), round(start_lat, 7)]]
    for i in range(1, n_points - 1):
        t = i / (n_points - 1)
        lat = start_lat + (end_lat - start_lat) * t + random.uniform(-0.001, 0.001)
        lng = start_lng + (end_lng - start_lng) * t + random.uniform(-0.001, 0.001)
        path.append([round(lng, 7), round(lat, 7)])
    path.append([round(end_lng, 7), round(end_lat, 7)])
    return path

def make_sections(distance_m):
    n = random.randint(2, 4)
    sections = []
    remaining = distance_m
    for i in range(n):
        seg_dist = remaining // (n - i) if i < n - 1 else remaining
        remaining -= seg_dist
        sections.append({
            "section_id":    i + 1,
            "name":          f"{random.choice(AREAS)} {random.choice(ROAD_NAMES)}",
            "distance":      int(seg_dist),
            "duration":      int(seg_dist / 1.2),
            "road_type":     random.choice(["일반도로", "이면도로", "보행자전용"]),
            "barrier_free":  random.choice([True, False]),
            "has_elevator":  random.choice([True, False]),
            "has_slope":     random.random() < 0.35,
        })
    return sections

def generate_mobility_routes():
    data = []
    for hospital_name, district, h_lat, h_lng in HOSPITALS:
        for route_label in ["경로 A", "경로 B", "경로 C", "경로 D", "경로 E"]:
            distance_m = random.randint(150, 900)
            duration_s = int(distance_m / 1.1)
            start_lat  = h_lat + random.uniform(-0.006, 0.006)
            start_lng  = h_lng + random.uniform(-0.006, 0.006)
            path       = make_path(start_lat, start_lng, h_lat, h_lng)
            sections   = make_sections(distance_m)

            n_elevator    = sum(1 for s in sections if s["has_elevator"])
            n_slope       = sum(1 for s in sections if s["has_slope"])
            n_crosswalk   = random.randint(1, 7)
            bf_ratio      = round(sum(1 for s in sections if s["barrier_free"]) / len(sections), 2)

            stress = round(
                min(n_slope / len(sections), 1.0) * 0.40
                + (n_crosswalk / 7) * 0.25
                + min(distance_m / 900, 1.0) * 0.20
                + max(0, 1 - n_elevator / 2) * 0.10
                + (1 - bf_ratio) * 0.05,
                3
            )
            stress = min(stress, 1.0)
            grade = "추천" if stress < 0.35 else ("보통" if stress < 0.55 else "비추천")

            data.append({
                "route_id":          str(uuid.uuid4()),
                "hospital_name":     hospital_name,
                "hospital_district": district,
                "destination":       {"name": hospital_name, "lat": h_lat, "lng": h_lng},
                "origin":            {"name": f"{district} 출발지", "lat": round(start_lat, 7), "lng": round(start_lng, 7)},
                "route_name":        route_label,
                "summary": {
                    "distance":              distance_m,
                    "duration":              duration_s,
                    "elevator_count":        n_elevator,
                    "slope_section_count":   n_slope,
                    "crosswalk_count":       n_crosswalk,
                    "barrier_free_ratio":    bf_ratio,
                },
                "path":              path,
                "sections":          sections,
                "stress_index":      stress,
                "accessibility_grade": grade,
                "travel_mode":       "WALKING",
                "data_source":       "공공데이터포털_보행환경DB",
                "collected_at":      rand_date(),
            })
    return data


# ── 메인 ──────────────────────────────────────────────────────────────────

def main():
    import os
    os.makedirs("/Users/yeon/Capstone/data", exist_ok=True)

    print("1/3 HR 커뮤니티 생성 중...")
    hr = generate_hr_community(500)
    with open("/Users/yeon/Capstone/data/hr_community.json", "w", encoding="utf-8") as f:
        json.dump(hr, f, ensure_ascii=False, indent=2)
    print(f"  → hr_community.json ({len(hr)}개)")

    print("2/3 웰니스 리뷰 생성 중...")
    wellness = generate_wellness_reviews(500)
    with open("/Users/yeon/Capstone/data/wellness_review.json", "w", encoding="utf-8") as f:
        json.dump(wellness, f, ensure_ascii=False, indent=2)
    print(f"  → wellness_review.json ({len(wellness)}개)")

    print("3/3 모빌리티 경로 생성 중...")
    mobility = generate_mobility_routes()
    with open("/Users/yeon/Capstone/data/mobility_route.json", "w", encoding="utf-8") as f:
        json.dump(mobility, f, ensure_ascii=False, indent=2)
    print(f"  → mobility_route.json ({len(mobility)}개)")

    print("\n=== 완료 ===")
    print(f"hr_community.json    : {len(hr)}개")
    print(f"wellness_review.json : {len(wellness)}개")
    print(f"mobility_route.json  : {len(mobility)}개")

main()
