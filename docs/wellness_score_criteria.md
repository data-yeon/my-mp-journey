# 웰니스 추천 신뢰점수 기준

> 캡스톤 발표 보조 문서  
> 주제: 임산부 웰니스 제품 리뷰 기반 신뢰점수 산정 기준  
> 작성일: 2026-04-26  
> 관련 데이터: `data/wellness_review.json`

---

## 1. 왜 단순 별점만 쓰지 않는가

웰니스 추천의 목적은 임산부가 제품을 고를 때 참고할 수 있는 **리뷰 기반 신뢰도**를 계산하는 것이다.

하지만 별점만으로 추천하면 다음 문제가 있다.

| 문제 | 설명 |
|------|------|
| 극단값 편향 | 매우 만족하거나 매우 불만족한 사용자만 리뷰를 남기는 경향이 있음 |
| 텍스트 정보 손실 | “효과는 좋은데 냄새가 심하다”, “착용감은 좋은데 사이즈가 작다” 같은 세부 경험이 별점 하나에 묻힘 |
| 임산부 도메인 특수성 | 일반 제품과 달리 안전성, 주수 적합성, 부작용 언급을 별도로 봐야 함 |
| 허위·저품질 리뷰 가능성 | 구매인증 여부, 리뷰 구체성, 도움됨 수 등을 고려할 필요가 있음 |

따라서 본 프로젝트에서는 별점뿐 아니라 리뷰 텍스트 감성, 제품 측면별 감성, 리뷰 신뢰도, 임신 주수 적합성, 안전성 리스크를 함께 반영한다.

---

## 2. 참고한 연구 방향

본 점수식은 특정 논문에서 고정된 공식을 그대로 가져온 것이 아니라, 아래 연구 흐름을 참고해 만든 **초기 가중합 모델**이다.

| 연구 흐름 | 핵심 아이디어 | 본 프로젝트 적용 |
|-----------|--------------|------------------|
| LLM 합성 데이터 생성 | 희소·민감 도메인에서 합성 데이터 생성과 품질검증 필요 | 실제 임산부 리뷰 수집 한계를 보완하기 위해 합성 리뷰 데이터 설계 |
| Aspect-Based Sentiment Analysis | 전체 감성 하나가 아니라 제품의 세부 측면별 감성을 분석 | 효과, 부작용, 향, 착용감, 가격, 배송 등을 aspect로 분리 |
| Multi-criteria Recommendation | 단일 평점보다 여러 기준을 조합한 추천이 더 설명 가능 | 별점, 감성, aspect, 리뷰 신뢰도, 임신 주수 적합성을 함께 반영 |
| Review Helpfulness | 리뷰의 유용성, 구체성, 구매인증 여부가 신뢰도 판단에 중요 | `review_reliability_score`로 반영 |
| 임신기 영양·안전 기준 | 임산부 제품은 안전성과 주수 적합성을 별도로 고려해야 함 | `pregnancy_fit_score`, `safety_risk_score`를 분리 |

참고 자료:

- Nadas, M., Diosan, L., & Tomescu, A. (2025). *Synthetic Data Generation Using Large Language Models: Advances in Text and Code*. arXiv:2503.14023. https://arxiv.org/abs/2503.14023
- Davoodi et al. (2025/2026). *Aspect-based sentiment analysis in e-commerce reviews*. https://link.springer.com/article/10.1007/s10660-025-09948-4
- Yadav (2023). *Aspect-based sentiment analysis on product reviews*. https://link.springer.com/article/10.1007/s44230-023-00018-2
- *User review helpfulness assessment based on sentiment analysis*. https://www.sciencedirect.com/org/science/article/abs/pii/S0264047320000156
- ACOG. *Healthy Eating During Pregnancy*. https://www.acog.org/womens-health/faqs/healthy-eating-during-pregnancy
- WHO. *Daily iron and folic acid supplementation during pregnancy*. https://www.who.int/tools/elena/interventions/daily-iron-pregnancy

---

## 3. 점수식 v1

### 3-1. 기본 신뢰점수

```text
base_trust_score =
  rating_norm × 0.25
+ sentiment_score × 0.25
+ aspect_score × 0.20
+ review_reliability_score × 0.15
+ pregnancy_fit_score × 0.15
```

각 점수는 0~1 사이 값으로 정규화한다.

| 항목 | 가중치 | 의미 |
|------|------:|------|
| `rating_norm` | 0.25 | 별점 정규화 값. 사용자의 전반적 만족도 |
| `sentiment_score` | 0.25 | 리뷰 본문 전체 감성 점수 |
| `aspect_score` | 0.20 | 제품 세부 측면별 감성 평균 |
| `review_reliability_score` | 0.15 | 구매인증, 도움됨 수, 리뷰 구체성 등을 반영한 리뷰 신뢰도 |
| `pregnancy_fit_score` | 0.15 | 제품이 해당 임신 주수·단계에 적합한 정도 |

### 3-2. 안전성 리스크 반영

```text
trust_score = base_trust_score × (1 - 0.6 × safety_risk_score)
```

`safety_risk_score`는 0~1 사이 값이다.

| 값 | 해석 |
|----|------|
| 0에 가까움 | 안전성 우려가 거의 없음 |
| 0.5 부근 | 일부 부작용, 성분 우려, 사용상 주의가 있음 |
| 1에 가까움 | 임산부 사용 주의 또는 전문가 확인이 필요한 수준 |

안전성 리스크는 평균 점수 안에 단순 포함하지 않고 별도 감점으로 처리한다. 임산부 제품에서는 “별점이 높지만 부작용 언급이 많은 제품”이 추천 상위에 올라가는 것을 막아야 하기 때문이다.

---

## 4. 왜 이 가중치인가

이 가중치는 선행연구에서 그대로 가져온 값이 아니라, 연구 초기에 사용할 **설명 가능한 휴리스틱**이다.

설계 의도는 다음과 같다.

| 설계 선택 | 이유 |
|-----------|------|
| 별점과 전체 감성을 각각 0.25로 둠 | 수치 만족도와 텍스트 만족도를 같은 비중의 기본 신호로 봄 |
| aspect score를 0.20으로 둠 | 전체 감성에서 놓치는 세부 장단점을 반영하되, 별점·전체 감성보다 약간 낮게 둠 |
| 리뷰 신뢰도 0.15 | 구매인증, 도움됨 수, 구체성은 보조 신호이므로 중간 이하 비중 |
| 임신 주수 적합성 0.15 | 제품 추천의 도메인 적합성을 반영하되, 리뷰 자체의 만족도 신호와 분리 |
| safety risk를 별도 penalty로 둠 | 안전성 문제는 평균으로 희석되면 안 되므로 최종 점수에서 감점 |
| 0.6 penalty 계수 | 안전성 리스크가 높은 제품의 상위 추천을 억제하기 위한 초기 보수적 설정 |

따라서 발표에서는 이 공식을 “검증된 최종 공식”이 아니라 **선행연구 기반으로 설계한 초기 점수식**이라고 설명하는 것이 정확하다.

---

## 5. 제품군별 Aspect 예시

| 제품군 | 주요 aspect |
|--------|-------------|
| 영양제 | 효과감, 속불편·부작용, 성분 신뢰, 복용 편의성, 가격 |
| 식품 | 맛, 입덧 부담, 소화감, 성분 신뢰, 재구매 의향 |
| 바디케어·뷰티 | 향, 피부 트러블, 보습감, 성분 신뢰, 사용감 |
| 의류 | 착용감, 사이즈, 복부 압박감, 소재, 세탁 내구성 |
| 용품 | 편의성, 안정감, 통증 완화, 내구성, 가격 |

예시:

```json
{
  "aspect_sentiments": {
    "effectiveness": 0.82,
    "side_effect": 0.15,
    "safety_confidence": 0.76,
    "smell_or_taste": 0.61,
    "texture_or_comfort": 0.88,
    "price_value": 0.72,
    "delivery_packaging": 0.91
  }
}
```

---

## 6. 추천 라벨 기준

최종 `trust_score`와 안전성 리스크를 함께 사용한다.

| 조건 | 추천 라벨 |
|------|-----------|
| `safety_risk_score >= 0.70` | `주의` |
| `needs_medical_review = true` | `전문가 확인 필요` |
| `trust_score >= 0.75` and `safety_risk_score < 0.40` | `추천` |
| `0.55 <= trust_score < 0.75` | `조건부 추천` |
| `trust_score < 0.55` | `비추천` |

주의할 점:

- 이 추천은 의료적 처방이 아니라 리뷰 기반 참고 정보다.
- 영양제, 의약외품, 성분 민감 제품은 산부인과 또는 전문가 상담을 우선해야 한다.
- 별점이 높아도 부작용·성분 우려가 많으면 추천 점수를 낮춘다.

---

## 7. 발표용 요약 문장

> 웰니스 추천은 단순 별점 평균이 아니라 리뷰 텍스트의 감성, 제품 측면별 장단점, 리뷰 신뢰도, 임신 주수 적합성, 안전성 리스크를 함께 반영했습니다. 이 구조는 Aspect-Based Sentiment Analysis와 Multi-criteria Recommendation 연구 흐름을 참고한 초기 가중합 모델입니다. 특히 임산부 제품은 안전성 우려가 평균 점수에 묻히면 안 되기 때문에, safety risk를 별도 penalty로 적용했습니다.

---

## 8. 향후 검증 계획

최종 연구에서는 아래 방식으로 가중치의 타당성을 검증할 수 있다.

1. `rating only` 기준 추천 순위와 비교
2. `rating + sentiment` 기준 추천 순위와 비교
3. `trust_score_v1` 기준 추천 순위와 비교
4. 사람이 판단한 추천 순위와 Spearman 또는 Kendall 순위상관 계산
5. safety penalty 적용 전후로 위험 제품이 상위 추천에서 얼마나 줄어드는지 확인

이 과정을 통해 현재 가중치를 고정값으로 주장하는 대신, 실험적으로 보정 가능한 연구 가설로 제시한다.

---

## 9. 현재 생성 데이터

현재 구현은 `data/generate_wellness_synthetic_v2.py`로 분리되어 있으며, `data/wellness_review_synthetic_v2.json`에 600개 합성 리뷰 데이터를 생성한다.

생성 분포:

| 기준 | 분포 |
|------|------|
| 전체 개수 | 600개 |
| 임신 시기 | 초기 200개, 중기 200개, 후기 200개 |
| 제품군 | 영양제 120개, 식품 120개, 바디케어 120개, 의류 120개, 용품 120개 |
| 생성 전략 | Prompt-based 200개, RAG-augmented 200개, Self-refinement 200개 |
| 교차 분포 | 각 임신 시기마다 제품군별 40개씩 |

각 레코드는 다음 정보를 포함한다.

- 제품 정보: 제품군, 하위 카테고리, 형태, 옵션
- 임신 적합성: 대상 시기, 대상 주수, 실제 리뷰어 임신 주수, 적합성 점수
- 리뷰 정보: 제목, 본문, 별점, 구매인증, 도움됨 수
- 측면 감성: 제품군별 aspect sentiment
- 점수: `rating_norm`, `sentiment_score`, `aspect_score`, `review_reliability_score`, `pregnancy_fit_score`, `safety_risk_score`, `trust_score`
- 안전성: 부작용 언급, 주의 태그, 전문가 확인 필요 여부
- 생성 메타데이터: 생성 전략, 프롬프트 템플릿 ID, 품질검증 점수
