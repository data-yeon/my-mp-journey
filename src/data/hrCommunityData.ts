/* Generated from data/hr_community_dummy_v2.json. */
export const hrCommunityData = [
    {
        post_id: '45d8338e-5d18-548c-a6de-5ac5f670c111',
        schema_version: 'hr_dummy_v2_persona',
        source_type: 'dummy_from_synthetic_v2',
        source_post_schema: 'hr_synthetic_v2_persona',
        cafe_name: '맘모임서울',
        title: '임신 초기 단축근무 신청서를 반려당했습니다',
        content:
            '산부인과 진료 후 몸이 너무 힘들어서 단축근무를 문의했는데 인사 담당자가 급여도 줄어들 수 있다고 말했습니다. 제도가 있는 건 알지만 회사에 어떻게 다시 요청해야 할지 모르겠어요.',
        post_detail_level: 'normal',
        post_style: 'experience_question',
        simulated_posted_at: '2024-01-11',
        search_keyword: '임신 단축근무 거절',
        tags: ['#단축근무_거절', '#임신기근로시간단축', '#임신초기', '#임신후기'],
        author_role: 'employee',
        persona_profile: {
            persona_id: 'fc3d7e70-ccd0-5db4-850a-c3ad31e79463',
            source: 'population_conditioned_synthetic_persona',
            source_note: 'Nemotron-Personas-Korea/ManyPerson 방식에서 착안한 한국형 인구통계 조건부 HR 페르소나',
            age: 25,
            region: {
                province: '서울',
                district: '강남구'
            },
            household_type: '배우자·반려동물과 거주',
            education_level: '4년제 대학교',
            occupation_group: '현장직',
            employment_status: '기간제',
            income_band: '중상',
            commute_context: '왕복 1시간 이상',
            support_network: '가족 지원은 있으나 제한적',
            workplace_constraint: '인사팀 부재',
            information_access_level: '회사 내 문의 창구 부족'
        },
        persona_summary: '25세 현장직, 인사팀 부재',
        employment_type: '계약직',
        tenure_months: 48,
        pregnancy_stage: '임신초기',
        pregnancy_week: 7,
        child_age_months: null,
        company_size: '5인 미만',
        industry: '유통/물류',
        has_hr_team: false,
        work_arrangement: '사무직',
        contract_type: '기간제 근로계약',
        pain_point_summary:
            '요청 권리(임신기 근로시간 단축)와 관련해 회사가 근로시간 단축 거절 또는 유사한 조치를 해 고충이 발생함',
        incident_stage: '신청직후',
        employer_action: '근로시간 단축 거절',
        requested_right: '임신기 근로시간 단축',
        employer_response: '그런 제도를 들어본 적 없다고 말함',
        evidence_available: ['취업규칙', '팀장메신저', '신청서'],
        lda_topic_id: 1,
        lda_topic_label: '단축근무_거절',
        hr_violation_type: '임신기_근로시간단축_거절',
        legal_issue_tags: ['임신기근로시간단축', '#임신초기', '#임신후기', '근로시간'],
        severity: 'high',
        ambiguity_level: 'low',
        related_laws: ['근로기준법'],
        related_articles: ['근로기준법 제74조'],
        legal_ground_truth_summary:
            '임신 초기 또는 후기의 여성 근로자는 일정 요건에서 근로시간 단축을 신청할 수 있으며, 사용자는 이를 이유로 임금을 삭감해서는 안 된다.',
        answerability: 'answerable_by_law',
        sentiment: '불안',
        sentiment_score: 0.118,
        sentiment_percent: 12,
        emotion_intensity: 0.858,
        emotion_intensity_percent: 86,
        view_count: 4565,
        like_count: 240,
        comment_count: 2,
        comments: [
            {
                comment_id: '745812d3-cff7-5938-a292-2a40366e695f',
                content: '임금 삭감 얘기는 정확히 확인해야 할 것 같아요.',
                likes: 34,
                created_at: '2024-01-14'
            },
            {
                comment_id: '84cd0ac6-413c-5b85-adac-641c8ffee128',
                content: '취업규칙보다 법정 제도가 우선인지 상담 받아보세요.',
                likes: 18,
                created_at: '2024-01-15'
            }
        ]
    }
    // ... 나머지 데이터는 생략 (실제로는 전체 복사)
];
