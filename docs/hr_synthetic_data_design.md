# 맘마중 HR 사각지대 합성 데이터 설계 노트

> 캡스톤 발표 보조 문서  
> 주제: 모성보호 HR 고충 분석을 위한 합성 커뮤니티 데이터 생성 방법론  
> 작성일: 2026-04-26  
> 관련 데이터: `data/hr_community.json`

---

## 1. 왜 HR 합성 데이터가 필요한가

맘마중 프로젝트의 HR 분석 목적은 단순히 게시글을 많이 모으는 것이 아니라, 임신·출산·육아 과정에서 발생하는 **모성보호 HR 사각지대의 고충 유형**을 찾는 것이다.

하지만 이 도메인은 실제 데이터를 그대로 수집하고 공개하기 어렵다.

| 문제 | 설명 |
|------|------|
| 개인정보 민감성 | 임신 여부, 회사 규모, 고용 형태, 상사 발언 등이 개인 식별 가능 정보와 연결될 수 있음 |
| 수집 난이도 | 커뮤니티 게시글은 플랫폼 접근 제한, 크롤링 정책, 비공개 게시판 등의 제약이 큼 |
| 라벨 부족 | 실제 게시글에는 `복직 불이익`, `단축근무 거절` 같은 분석용 라벨이 없음 |
| 법령 연결 어려움 | 게시글만으로 어떤 법령 쟁점과 연결되는지 자동 판단하기 어려움 |

따라서 본 프로젝트에서는 실제 커뮤니티 게시글의 언어적 특징과 HR 고충 구조를 참고하되, 개인정보를 포함하지 않는 **연구용 합성 데이터셋**을 설계한다.

---

## 2. 참고 논문 기반

본 데이터 생성 방향은 다음 논문의 문제의식과 방법론을 참고한다.

> Nadas, M., Diosan, L., & Tomescu, A. (2025).  
> *Synthetic Data Generation Using Large Language Models: Advances in Text and Code*.  
> arXiv:2503.14023.  
> https://arxiv.org/abs/2503.14023

이 논문은 LLM 기반 합성 데이터가 다음과 같은 상황에서 유용하다고 설명한다.

| 논문에서 제시한 관점 | 맘마중 HR 데이터 적용 |
|----------------------|------------------------|
| 데이터가 희소하거나 민감한 경우 합성 데이터가 실제 데이터를 보완할 수 있음 | 임신·출산·육아 관련 HR 고충은 민감 정보가 많아 직접 수집과 공개가 어려움 |
| Prompt-based generation, Retrieval-augmented generation, Self-refinement 등 전략을 비교할 수 있음 | 단순 템플릿 생성에서 나아가 법령 근거와 자기검토를 포함한 생성 전략 비교 가능 |
| 합성 데이터는 다양성, 현실성, 품질 검증이 중요함 | 반복 문장 제거, 상황별 고충 다양화, 법령 일관성 검증 필드 추가 필요 |
| 사실 오류, 스타일 부자연스러움, 편향 증폭 위험을 관리해야 함 | 법령 근거, 생성 메타데이터, 품질 점수, 사람 검토 플래그를 함께 저장 |

즉, 본 프로젝트의 HR 더미데이터는 단순 샘플 데이터가 아니라, **희소하고 민감한 도메인에서 LLM 합성 데이터가 연구 데이터셋으로 활용될 수 있는지 검증하기 위한 실험 기반 데이터**로 재정의된다.

---

## 3. 기존 더미데이터의 한계

현재 `data/hr_community.json`은 분석 파이프라인을 검증하기 위한 초기 데이터로는 충분하지만, 연구용 데이터셋으로는 다음 한계가 있다.

| 한계 | 예시 |
|------|------|
| 반복성 | 비슷한 표현과 상황이 여러 번 반복되어 실제 커뮤니티 분포처럼 보이지 않음 |
| 댓글 불일치 | 게시글은 단축근무 이야기인데 댓글은 출산휴가 급여 이야기처럼 맥락이 어긋나는 경우가 있음 |
| 법령 연결 부족 | 어떤 법령 조문과 연결되는 고충인지 구조화되어 있지 않음 |
| 생성 근거 부재 | 어떤 방식으로 생성했는지, 어떤 프롬프트나 전략을 썼는지 추적 불가 |
| 품질 검증 부재 | 현실성, 라벨 정확도, 법령 일관성을 판단할 수 있는 메타데이터가 없음 |

따라서 새 HR 합성 데이터는 게시글 텍스트뿐 아니라, **고충 맥락, 법령 쟁점, 생성 방식, 품질검증 결과**를 함께 저장하는 구조가 필요하다.

---

## 4. 데이터 설계 목표

새로운 HR 합성 데이터셋은 다음 네 가지 목표를 가진다.

| 목표 | 설명 |
|------|------|
| 현실성 | 실제 커뮤니티 게시글처럼 자연스러운 고민, 말투, 맥락을 갖도록 생성 |
| 다양성 | 회사 규모, 업종, 고용 형태, 임신·육아 단계, 권리 유형이 골고루 포함되도록 설계 |
| 라벨 가능성 | LDA 토픽 모델링, 분류 모델, 통계 분석에 사용할 수 있도록 고충 유형을 명시 |
| 법령 일관성 | RAG 챗봇 및 LLM-as-a-Judge 평가에 연결할 수 있도록 관련 법령과 조문을 함께 기록 |

---

## 5. 생성 전략

논문에서 제시한 LLM 합성 데이터 생성 흐름을 맘마중에 맞게 세 단계로 적용한다.

### 전략 A. Prompt-based Generation

LLM에게 상황 조건만 제공하고 커뮤니티 게시글을 생성한다.

활용 목적:

- 가장 단순한 베이스라인
- 반복성, 환각, 라벨 오류가 얼마나 발생하는지 비교 기준으로 사용

예시 입력 조건:

```text
회사 규모: 5-20인 미만
업종: 서비스업
상황: 임신 10주 근로자가 근로시간 단축 신청을 거절당함
감정: 불안
게시글 스타일: 맘카페 질문형
```

### 전략 B. RAG-augmented Generation

법령 조문 또는 요약 근거를 함께 제공한 뒤 게시글과 라벨을 생성한다.

활용 목적:

- 법령과 연결되는 고충 사례 생성
- `related_laws`, `related_articles`, `legal_ground_truth_summary` 필드의 정확도 향상
- 기존 ChromaDB 법령 벡터스토어와 연결 가능

예시 근거:

```text
근로기준법 제74조: 임신 중 여성 근로자 보호, 시간외근로 제한, 쉬운 업무 전환 등
남녀고용평등법 제19조: 육아휴직, 불리한 처우 금지, 복직 관련 보호
```

### 전략 C. Self-refinement Generation

초안 생성 후 LLM이 스스로 다음 항목을 검토하고 수정한다.

검토 항목:

- 게시글 내용이 너무 반복적이지 않은가
- 라벨과 본문 상황이 일치하는가
- 댓글이 게시글 맥락과 맞는가
- 법령 근거와 고충 유형이 충돌하지 않는가
- 실제 개인정보처럼 보이는 고유 회사명이나 실명 정보가 포함되지 않았는가

활용 목적:

- 최종 연구용 데이터셋 품질 향상
- 생성 비용은 증가하지만 현실성, 라벨 정확도, 법령 일관성 개선 기대

---

## 6. 추천 필드 정의

기존 필드는 유지하되, 연구 목적에 맞게 아래 필드를 확장한다.

### 6-1. 기본 식별 필드

| 필드 | 타입 | 설명 |
|------|------|------|
| `post_id` | string | UUID 기반 게시글 고유 ID |
| `schema_version` | string | 예: `hr_synthetic_v2` |
| `source_type` | string | `synthetic`으로 고정하여 실제 크롤링 데이터와 구분 |
| `generated_at` | string | 합성 데이터 생성일 |

### 6-2. 게시글 필드

| 필드 | 타입 | 설명 |
|------|------|------|
| `cafe_name` | string | 가상의 커뮤니티명 |
| `title` | string | 게시글 제목 |
| `content` | string | 커뮤니티 게시글 본문 |
| `post_style` | string | `experience_question`, `hr_manager_question`, `venting`, `information_request` 등 |
| `simulated_posted_at` | string | 실제 수집일이 아닌 시뮬레이션 게시일 |
| `search_keyword` | string | 생성 또는 수집 시나리오 키워드 |
| `tags` | array | 게시글 태그 |

### 6-3. 작성자 및 근로자 상황 필드

| 필드 | 타입 | 설명 |
|------|------|------|
| `author_role` | string | `employee`, `hr_manager`, `spouse`, `coworker` |
| `employment_type` | string | `정규직`, `계약직`, `파견직`, `단시간근로자`, `프리랜서` |
| `tenure_months` | integer | 근속 개월 수 |
| `pregnancy_stage` | string | `임신초기`, `임신중기`, `임신후기`, `출산직후`, `산후6개월이내`, `산후1년이내`, `육아기` |
| `pregnancy_week` | integer 또는 null | 임신 주수. 산후 사례는 null 가능 |
| `child_age_months` | integer 또는 null | 자녀 개월 수. 임신 중 사례는 null 가능 |

### 6-4. 회사 맥락 필드

| 필드 | 타입 | 설명 |
|------|------|------|
| `company_size` | string | `5인 미만`, `5-20인 미만`, `20-100인 미만`, `100인 이상` |
| `industry` | string | 제조업, 서비스업, IT, 유통/물류, 의료, 교육, 금융, 기타 |
| `has_hr_team` | boolean | 전담 인사팀 존재 여부 |
| `work_arrangement` | string | 사무직, 교대근무, 현장직, 재택혼합 등 |
| `contract_type` | string | 기간의 정함 여부, 수습 여부 등 |

### 6-5. 고충 구조화 필드

| 필드 | 타입 | 설명 |
|------|------|------|
| `pain_point_summary` | string | 게시글 고충을 한 문장으로 요약 |
| `incident_stage` | string | `신청전`, `신청직후`, `휴직중`, `복직직후`, `복직후` 등 |
| `employer_action` | string | 회사가 한 행동. 예: 거절, 지연, 전보, 업무배제, 권고사직 압박 |
| `requested_right` | string | 근로자가 요구하거나 사용하려는 권리 |
| `employer_response` | string | 회사의 반응 |
| `evidence_available` | array | 메일, 메신저, 녹취, 신청서, 없음 등 |

### 6-6. 분석 라벨 필드

| 필드 | 타입 | 설명 |
|------|------|------|
| `lda_topic_id` | integer | 기존 LDA 토픽 번호 |
| `lda_topic_label` | string | 대분류 라벨 |
| `hr_violation_type` | string | 세부 위반 또는 고충 유형 |
| `legal_issue_tags` | array | 법령 쟁점 태그 |
| `severity` | string | `low`, `medium`, `high`, `critical` |
| `ambiguity_level` | string | `low`, `medium`, `high` |

### 6-7. 법령 연결 필드

| 필드 | 타입 | 설명 |
|------|------|------|
| `related_laws` | array | 관련 법령명 |
| `related_articles` | array | 관련 조문 |
| `legal_ground_truth_summary` | string | 해당 사례와 연결되는 법령상 핵심 요약 |
| `answerability` | string | `answerable_by_law`, `needs_fact_check`, `outside_scope` |

### 6-8. 감성 및 커뮤니티 반응 필드

| 필드 | 타입 | 설명 |
|------|------|------|
| `sentiment` | string | 불안, 억울, 분노, 막막, 슬픔, 희망 등 |
| `sentiment_score` | float | 0에 가까울수록 부정, 1에 가까울수록 긍정 |
| `emotion_intensity` | float | 감정 강도 |
| `view_count` | integer | 가상 조회수 |
| `like_count` | integer | 가상 공감수 |
| `comment_count` | integer | 댓글 수 |
| `comments` | array | 맥락에 맞는 댓글 목록 |

### 6-9. 생성 메타데이터 필드

| 필드 | 타입 | 설명 |
|------|------|------|
| `generation_strategy` | string | `prompt_based`, `rag_augmented`, `self_refinement` |
| `model_name` | string | 생성에 사용한 LLM 이름 |
| `prompt_template_id` | string | 사용한 프롬프트 템플릿 ID |
| `seed_scenario_id` | string | 기반 시나리오 ID |
| `refinement_rounds` | integer | 자기검토 반복 횟수 |

### 6-10. 품질검증 필드

| 필드 | 타입 | 설명 |
|------|------|------|
| `quality_checks.realism_score` | float | 실제 커뮤니티 게시글처럼 자연스러운 정도 |
| `quality_checks.label_confidence` | float | 본문과 라벨이 일치하는 정도 |
| `quality_checks.law_consistency_score` | float | 법령 근거와 상황이 충돌하지 않는 정도 |
| `quality_checks.diversity_score` | float | 기존 생성 데이터와 표현·상황이 중복되지 않는 정도 |
| `quality_checks.needs_human_review` | boolean | 사람 검토 필요 여부 |

---

## 7. 라벨 체계

### 7-1. 대분류 라벨

기존 LDA 분석과 연결하기 위해 `lda_topic_label`은 5개 대분류를 유지한다.

| 라벨 | 설명 |
|------|------|
| `복직_불이익` | 육아휴직 후 원직 미복귀, 전보, 성과급 제외, 권고사직 압박 |
| `단축근무_거절` | 임신기 또는 육아기 근로시간 단축 거절, 형식적 승인, 불이익 |
| `직장내_눈치` | 휴가·휴직 신청 전 압박, 상사·동료 눈치, 성별 고정관념 |
| `법령_정보_부족` | 근로자 또는 HR 담당자가 제도, 서류, 급여, 절차를 모르는 문제 |
| `임신_은폐` | 임신 사실 공개 두려움, 계약 연장 불안, 업무 배제 우려 |

### 7-2. 세부 고충 라벨

`hr_violation_type`은 다음처럼 세분화한다.

```text
복직_원직미복귀
복직_전보발령
복직_성과급제외
복직_권고사직압박
육아휴직_사용방해
육아휴직_불이익처우
임신기_근로시간단축_거절
육아기_근로시간단축_거절
임신중_시간외근로_강요
태아검진시간_거부
출산전후휴가_급여혼란
유산사산휴가_정보부족
계약직_임신차별우려
임신사실_은폐압박
정보접근성_문제
```

---

## 8. 예시 레코드

```json
{
  "post_id": "uuid",
  "schema_version": "hr_synthetic_v2",
  "source_type": "synthetic",
  "generated_at": "2026-04-26",

  "cafe_name": "워킹맘클럽",
  "title": "육아휴직 복직 후 갑자기 지방 발령이 났어요",
  "content": "8개월 육아휴직 후 복직했는데 원래 하던 물류 운영 업무가 아니라 지방 지점 지원으로 발령이 났어요. 아이가 아직 9개월이라 장거리 출퇴근이 불가능한데 회사는 업무상 필요라며 받아들이라고 합니다. 육아휴직 다녀온 게 이유는 아니라고 하는데 너무 막막해요.",
  "post_style": "experience_question",
  "simulated_posted_at": "2025-04-18",

  "author_role": "employee",
  "employment_type": "정규직",
  "tenure_months": 38,
  "pregnancy_stage": "산후1년이내",
  "pregnancy_week": null,
  "child_age_months": 9,

  "company_size": "20-100인 미만",
  "industry": "유통/물류",
  "has_hr_team": false,
  "work_arrangement": "사무직",
  "contract_type": "기간의 정함 없음",

  "pain_point_summary": "육아휴직 복직 직후 원래 근무지와 다른 지역으로 전보 발령을 받음",
  "incident_stage": "복직직후",
  "employer_action": "지방전보",
  "requested_right": "원직 또는 유사 업무 복귀",
  "employer_response": "업무상 필요라며 수용 요구",
  "evidence_available": ["인사발령메일", "팀장메신저"],

  "lda_topic_id": 0,
  "lda_topic_label": "복직_불이익",
  "hr_violation_type": "복직_전보발령",
  "legal_issue_tags": ["육아휴직", "복직", "불리한처우"],
  "severity": "high",
  "ambiguity_level": "medium",

  "related_laws": ["남녀고용평등법"],
  "related_articles": ["남녀고용평등법 제19조"],
  "legal_ground_truth_summary": "육아휴직을 이유로 불리한 처우를 해서는 안 되며, 복귀 시 같은 업무 또는 같은 수준의 임금을 지급하는 직무로 복귀시켜야 한다.",
  "answerability": "answerable_by_law",

  "sentiment": "막막",
  "sentiment_score": 0.18,
  "emotion_intensity": 0.82,

  "view_count": 3240,
  "like_count": 127,
  "comment_count": 2,
  "comments": [
    {
      "comment_id": "uuid",
      "content": "발령 메일이랑 휴직 전 업무 내용 꼭 저장해두세요.",
      "likes": 21,
      "created_at": "2025-04-19"
    },
    {
      "comment_id": "uuid",
      "content": "원직 복귀 관련해서 노무사 상담 받아보시는 게 좋을 것 같아요.",
      "likes": 34,
      "created_at": "2025-04-19"
    }
  ],

  "generation_strategy": "rag_augmented",
  "model_name": "gpt-4o-mini",
  "prompt_template_id": "hr_post_rag_v1",
  "seed_scenario_id": "return_transfer_001",
  "refinement_rounds": 1,

  "quality_checks": {
    "realism_score": 0.86,
    "label_confidence": 0.93,
    "law_consistency_score": 0.9,
    "diversity_score": 0.81,
    "needs_human_review": false
  }
}
```

---

## 9. 발표에서 설명할 수 있는 문장

### 짧은 버전

> HR 커뮤니티 데이터는 개인정보와 회사 정보가 포함될 수 있어 실제 수집과 공개가 어렵습니다. 그래서 본 프로젝트에서는 LLM 기반 합성 데이터 생성 방법론을 참고해, 실제 게시글처럼 자연스럽지만 개인정보는 포함하지 않는 모성보호 HR 고충 데이터를 설계했습니다. 단순 텍스트뿐 아니라 회사 규모, 임신 단계, 고충 유형, 관련 법령, 생성 전략, 품질검증 점수를 함께 저장해 분석과 평가가 가능하도록 구성했습니다.

### 긴 버전

> 기존 더미데이터는 분석 파이프라인 검증에는 사용할 수 있었지만, 비슷한 표현이 반복되고 댓글이나 법령 근거가 상황과 어긋나는 한계가 있었습니다. 이를 개선하기 위해 Synthetic Data Generation Using LLMs 논문에서 제시한 prompt-based generation, retrieval-augmented generation, self-refinement 흐름을 적용했습니다. 먼저 회사 규모, 업종, 임신·육아 단계, 고충 유형을 seed scenario로 정의하고, 법령 근거를 함께 제공해 게시글을 생성합니다. 이후 라벨 일치성, 법령 일관성, 현실성, 다양성을 검토하는 품질검증 필드를 추가했습니다. 이렇게 만든 데이터는 LDA 토픽 모델링뿐 아니라 RAG 챗봇 평가와 LLM-as-a-Judge 실험에도 활용할 수 있습니다.

---

## 10. 다음 구현 단계

현재 구현은 `data/generate_hr_synthetic_v2.py`로 분리되어 있으며, `data/hr_community_synthetic_v2.json`에 600개 합성 데이터를 생성한다.

생성 분포:

| 기준 | 분포 |
|------|------|
| 전체 개수 | 600개 |
| 대분류 토픽 | 5개 토픽 × 각 120개 |
| 생성 전략 | Prompt-based 200개, RAG-augmented 200개, Self-refinement 200개 |
| 교차 분포 | 각 토픽마다 생성 전략별 40개씩 |
| 세부 고충 유형 | 15개 유형 |

추가 개선 단계:

1. 각 대분류 라벨별 seed scenario를 더 늘려 문장 반복을 추가로 줄인다.
2. 실제 LLM API를 연결할 경우 `model_name`과 `prompt_template_id`를 실제 실행 로그 기준으로 저장한다.
3. 일부 표본을 팀원이 직접 검토해 `realism_score`, `label_confidence`, `law_consistency_score`의 신뢰도를 보정한다.
4. 최종 데이터는 `source_type: synthetic`을 명시하여 실제 크롤링 데이터와 혼동되지 않게 한다.

---

## 11. 기대 효과

| 활용 영역 | 기대 효과 |
|-----------|-----------|
| HR 사각지대 분석 | 고충 유형별 빈도, 회사 규모별 위험 패턴, 임신 단계별 문제를 정량화 |
| LDA 토픽 모델링 | 반복 표현을 줄이고 더 다양한 토픽 구조 확인 |
| RAG 챗봇 평가 | 법령 쟁점이 연결된 질문형 게시글을 챗봇 입력으로 활용 |
| LLM-as-a-Judge | 정답 근거와 챗봇 답변을 비교하는 평가 데이터로 확장 |
| 캡스톤 발표 | 단순 구현물이 아니라 연구 방법론 기반 데이터 설계라는 기여점 제시 |
