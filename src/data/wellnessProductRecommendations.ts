/* Generated from data/wellness_product_recommendation_dummy_v2.json. */
export const wellnessProductRecommendations = [
  {
    "product_id": "57f12fc3-0e5a-5d7f-8e33-20a2ae9ff373",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "다리 쿨링 젤",
    "product_category": "바디케어",
    "subcategory": "쿨링젤",
    "search_keyword": "임산부 다리젤",
    "target_period": "중기",
    "target_week_range": "16-36",
    "week": [
      16,
      36
    ],
    "fit_reason": "중기 이후 다리 붓기와 열감을 느끼는 사용자를 위한 제품",
    "review_count": 33,
    "verified_purchase_ratio": 0.758,
    "average_rating": 4.15,
    "average_sentiment_score": 0.679,
    "sentiment_percent": 68,
    "average_aspect_score": 0.6762,
    "average_review_reliability_score": 0.6817,
    "average_pregnancy_fit_score": 0.8912,
    "average_safety_risk_score": 0.2715,
    "safety_risk_percent": 27,
    "average_trust_score": 0.6318,
    "trust_percent": 63,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 17,
        "ratio": 0.515
      },
      {
        "name": "short",
        "count": 8,
        "ratio": 0.242
      },
      {
        "name": "detailed",
        "count": 8,
        "ratio": 0.242
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "1주 사용",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "한 달 사용",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "review_focuses": [
        {
          "name": "향",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "피부 자극",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "끈적임",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "purchase_contexts": [
        {
          "name": "출산 준비로 미리 구매",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "지인 추천으로 구매",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "후기 비교 후 구매",
          "count": 6,
          "ratio": 0.182
        }
      ]
    },
    "warning_tags": [
      "사용감 개인차",
      "피부 따가움",
      "향 자극",
      "가려움",
      "불편 경험 다수"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "전문직/연구직",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "판매직",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "서울",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "충남",
          "count": 2,
          "ratio": 0.061
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 15,
          "ratio": 0.455
        },
        {
          "name": "낮음",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "중하",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "care_priorities": [
        {
          "name": "피부 자극 여부",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "성분 안전성",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "보습 지속력",
          "count": 7,
          "ratio": 0.212
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "06ca9e5e-9313-591e-897e-f1726854bb4e",
        "persona_summary": "41세 경기 고양시 일산동구 전업주부, 성분 안전성 중시",
        "title": "상황에 따라 추천",
        "content": "처음 써보니 향을 특히 신경 쓰게 됐습니다. 임신 후 피부 변화가 신경 쓰여 성분 안전성을 중시해서 향과 사용감을 꼼꼼히 봤습니다. 민감성 제품과 비교하면 장단점이 갈리는 편입니다. 임신 28주부터 배가 건조해서 썼는데 발림성이 부드럽고 보습감이 괜찮았어요. 보습은 좋은데 약간 끈적임이 남아서 밤에만 쓰고 있어요.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "향",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "민감성 제품"
        },
        "review_detail_level": "detailed",
        "rating": 3.7,
        "trust_percent": 64,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "7fae25f7-421e-5c89-83fa-90c762061d5e",
        "persona_summary": "26세 경기 화성시 판매직, 보습 지속력 중시",
        "title": "재구매 생각 있습니다",
        "content": "임신 28주부터 배가 건조해서 썼는데 발림성이 부드럽고 보습감이 괜찮았어요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "피부 자극",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "normal",
        "rating": 4.7,
        "trust_percent": 81,
        "recommendation_label": "추천"
      },
      {
        "review_id": "f657d73b-9b6b-5828-9084-118423c21e55",
        "persona_summary": "31세 부산 부산진구 교육직, 피부 자극 여부 중시",
        "title": "그냥 그래요",
        "content": "나쁘진 않은데 엄청 좋지도 않아요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "향",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "short",
        "rating": 4.2,
        "trust_percent": 62,
        "recommendation_label": "조건부 추천"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "ee985732-c234-5dae-9334-88ba39014ed8",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "튼살 케어 크림",
    "product_category": "바디케어",
    "subcategory": "튼살크림",
    "search_keyword": "임산부 튼살크림",
    "target_period": "중기",
    "target_week_range": "13-40",
    "week": [
      13,
      40
    ],
    "fit_reason": "제품 권장 주수와 가까우나 개인 상황 확인이 필요함",
    "review_count": 34,
    "verified_purchase_ratio": 0.765,
    "average_rating": 4.11,
    "average_sentiment_score": 0.6994,
    "sentiment_percent": 70,
    "average_aspect_score": 0.6961,
    "average_review_reliability_score": 0.6699,
    "average_pregnancy_fit_score": 0.8727,
    "average_safety_risk_score": 0.2787,
    "safety_risk_percent": 28,
    "average_trust_score": 0.6308,
    "trust_percent": 63,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 22,
        "ratio": 0.647
      },
      {
        "name": "short",
        "count": 8,
        "ratio": 0.235
      },
      {
        "name": "detailed",
        "count": 4,
        "ratio": 0.118
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "3일 사용",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "1주 사용",
          "count": 5,
          "ratio": 0.147
        }
      ],
      "review_focuses": [
        {
          "name": "끈적임",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "향",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "성분",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "purchase_contexts": [
        {
          "name": "출산 준비로 미리 구매",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "지인 추천으로 구매",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "후기 비교 후 구매",
          "count": 5,
          "ratio": 0.147
        }
      ]
    },
    "warning_tags": [
      "사용감 개인차",
      "가려움",
      "피부 따가움",
      "향 자극",
      "주수 적합성 확인 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "전문직/연구직",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "사무직",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "교육직",
          "count": 4,
          "ratio": 0.118
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "부산",
          "count": 4,
          "ratio": 0.118
        },
        {
          "name": "경남",
          "count": 3,
          "ratio": 0.088
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "중상",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "중하",
          "count": 6,
          "ratio": 0.176
        }
      ],
      "care_priorities": [
        {
          "name": "향 자극 최소화",
          "count": 15,
          "ratio": 0.441
        },
        {
          "name": "보습 지속력",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "피부 자극 여부",
          "count": 7,
          "ratio": 0.206
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "179ffb38-0d15-5db6-a366-b93cf5edc8e9",
        "persona_summary": "29세 경북 포항시 전문직/연구직, 성분 안전성 중시",
        "title": "임신 주수에 잘 맞았어요",
        "content": "며칠 써보니 피부 자극을 특히 신경 쓰게 됐습니다. 임신 후 피부 변화가 신경 쓰여 성분 안전성을 중시해서 향과 사용감을 꼼꼼히 봤습니다. 향 있는 제품보다 피부 자극 면에서는 더 만족스러웠어요. 향이 약한 편이라 냄새에 민감한 시기에도 쓰기 편했습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "피부 자극",
          "purchase_context_type": "가격 할인 때 구매",
          "comparison_target": "향 있는 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.4,
        "trust_percent": 71,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "0c3df0b0-8144-56ca-9280-940243573e4e",
        "persona_summary": "35세 서울 마포구 IT/개발직, 성분 안전성 중시",
        "title": "임신 주수에 잘 맞았어요",
        "content": "향이 약한 편이라 냄새에 민감한 시기에도 쓰기 편했습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "향",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "기존 로션"
        },
        "review_detail_level": "normal",
        "rating": 4.9,
        "trust_percent": 78,
        "recommendation_label": "추천"
      },
      {
        "review_id": "12dd9697-a57e-5a49-93e8-2439a15b1158",
        "persona_summary": "39세 광주 서구 전문직/연구직, 피부 자극 여부 중시",
        "title": "재구매할 듯",
        "content": "아직까진 불편한 점 없어요.",
        "review_context": {
          "usage_phase": "재구매 후기",
          "review_focus": "끈적임",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "기존 로션"
        },
        "review_detail_level": "short",
        "rating": 4.3,
        "trust_percent": 79,
        "recommendation_label": "추천"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "e2d0a487-c6a8-5948-b56d-260f2dca50e9",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "마더 보습 오일",
    "product_category": "바디케어",
    "subcategory": "보습오일",
    "search_keyword": "임산부 오일",
    "target_period": "중기",
    "target_week_range": "13-40",
    "week": [
      13,
      40
    ],
    "fit_reason": "중기 이후 건조감과 가려움 관리를 고려한 제품",
    "review_count": 33,
    "verified_purchase_ratio": 0.636,
    "average_rating": 4,
    "average_sentiment_score": 0.6615,
    "sentiment_percent": 66,
    "average_aspect_score": 0.6641,
    "average_review_reliability_score": 0.6608,
    "average_pregnancy_fit_score": 0.8766,
    "average_safety_risk_score": 0.3132,
    "safety_risk_percent": 31,
    "average_trust_score": 0.5983,
    "trust_percent": 60,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "detailed",
        "count": 13,
        "ratio": 0.394
      },
      {
        "name": "normal",
        "count": 10,
        "ratio": 0.303
      },
      {
        "name": "short",
        "count": 10,
        "ratio": 0.303
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "3일 사용",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "2주 사용",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "첫 사용",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "review_focuses": [
        {
          "name": "피부 자극",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "성분",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "보습감",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "purchase_contexts": [
        {
          "name": "출산 준비로 미리 구매",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "기존 제품 대체",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "후기 비교 후 구매",
          "count": 5,
          "ratio": 0.152
        }
      ]
    },
    "warning_tags": [
      "가려움",
      "향 자극",
      "사용감 개인차",
      "피부 따가움",
      "불편 경험 다수"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "전문직/연구직",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "의료/보건직",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "사무직",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "서울",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "대구",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "중하",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "낮음",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "care_priorities": [
        {
          "name": "성분 안전성",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "향 자극 최소화",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "피부 자극 여부",
          "count": 8,
          "ratio": 0.242
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "c2da4148-314c-594c-ba2e-c78b531dc4d4",
        "persona_summary": "31세 전북 익산시 판매직, 향 자극 최소화 중시",
        "title": "재구매 생각 있습니다",
        "content": "2주 정도 써보니 향을 특히 신경 쓰게 됐습니다. 임신 후 피부 변화가 신경 쓰여 향 자극 최소화를 중시해서 향과 사용감을 꼼꼼히 봤습니다. 향 있는 제품보다 향 면에서는 더 만족스러웠어요. 임신 25주부터 배가 건조해서 썼는데 발림성이 부드럽고 보습감이 괜찮았어요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "향",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "향 있는 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.5,
        "trust_percent": 75,
        "recommendation_label": "추천"
      },
      {
        "review_id": "0df530bf-cdc8-59c0-b5ac-1ef632008204",
        "persona_summary": "31세 전남 여수시 사무직, 성분 안전성 중시",
        "title": "상황에 따라 추천",
        "content": "임신 34주부터 배가 건조해서 썼는데 발림성이 부드럽고 보습감이 괜찮았어요. 보습은 좋은데 약간 끈적임이 남아서 밤에만 쓰고 있어요.",
        "review_context": {
          "usage_phase": "재구매 후기",
          "review_focus": "피부 자극",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "향 있는 제품"
        },
        "review_detail_level": "normal",
        "rating": 3.6,
        "trust_percent": 60,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "a72e5b49-4037-5e41-ba70-743f6eaeae4e",
        "persona_summary": "33세 전남 순천시 의료/보건직, 피부 자극 여부 중시",
        "title": "무난해요",
        "content": "괜찮긴 한데 아쉬운 점도 있어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "성분",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "기존 로션"
        },
        "review_detail_level": "short",
        "rating": 3.5,
        "trust_percent": 56,
        "recommendation_label": "조건부 추천"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "be095ef0-7707-5e9c-8059-b4398adecdec",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "맘마 두유 플러스",
    "product_category": "식품",
    "subcategory": "두유",
    "search_keyword": "임산부 두유",
    "target_period": "중기",
    "target_week_range": "13-27",
    "week": [
      13,
      27
    ],
    "fit_reason": "중기 간식과 단백질 보충 수요를 고려한 제품",
    "review_count": 34,
    "verified_purchase_ratio": 0.794,
    "average_rating": 3.96,
    "average_sentiment_score": 0.6629,
    "sentiment_percent": 66,
    "average_aspect_score": 0.6559,
    "average_review_reliability_score": 0.6835,
    "average_pregnancy_fit_score": 0.9039,
    "average_safety_risk_score": 0.2764,
    "safety_risk_percent": 28,
    "average_trust_score": 0.617,
    "trust_percent": 62,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 17,
        "ratio": 0.5
      },
      {
        "name": "detailed",
        "count": 9,
        "ratio": 0.265
      },
      {
        "name": "short",
        "count": 8,
        "ratio": 0.235
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "3일 사용",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "1주 사용",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "2주 사용",
          "count": 6,
          "ratio": 0.176
        }
      ],
      "review_focuses": [
        {
          "name": "입덧 부담",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "소화감",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "맛",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "purchase_contexts": [
        {
          "name": "후기 비교 후 구매",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "지인 추천으로 구매",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "기존 제품 대체",
          "count": 6,
          "ratio": 0.176
        }
      ]
    },
    "warning_tags": [
      "향 민감",
      "소화 불편",
      "단맛 부담",
      "사용감 개인차",
      "성분 확인 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "서비스직",
          "count": 5,
          "ratio": 0.147
        },
        {
          "name": "전업주부",
          "count": 4,
          "ratio": 0.118
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 13,
          "ratio": 0.382
        },
        {
          "name": "경기",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "경북",
          "count": 3,
          "ratio": 0.088
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 12,
          "ratio": 0.353
        },
        {
          "name": "중하",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "중상",
          "count": 6,
          "ratio": 0.176
        }
      ],
      "care_priorities": [
        {
          "name": "입덧 부담",
          "count": 12,
          "ratio": 0.353
        },
        {
          "name": "소화 편안함",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "성분 단순함",
          "count": 8,
          "ratio": 0.235
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "bb4823f8-ee6b-5d33-93e1-7fd4342ce77a",
        "persona_summary": "33세 경기 남양주시 교육직, 성분 단순함 중시",
        "title": "임신 주수에 잘 맞았어요",
        "content": "며칠 써보니 소화감을 기준으로 만족도가 갈렸습니다. 외출할 때 간단히 먹을 수 있는지를 봤습니다. 임신 17주에 입맛이 없을 때 간단히 먹기 좋았어요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "소화감",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.5,
        "trust_percent": 77,
        "recommendation_label": "추천"
      },
      {
        "review_id": "8f75be3f-bb3f-56e9-907b-945c47297a30",
        "persona_summary": "39세 서울 양천구 사무직, 소화 편안함 중시",
        "title": "장점과 단점이 분명해요",
        "content": "임신 25주에 입맛이 없을 때 간단히 먹기 좋았어요. 단맛이 조금 강해서 매일 먹기보다는 가끔 먹게 됩니다.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "재구매",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "카페 추천 제품"
        },
        "review_detail_level": "normal",
        "rating": 3.4,
        "trust_percent": 60,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "851b44d9-718f-566f-80bc-5910ecda745d",
        "persona_summary": "37세 서울 송파구 IT/개발직, 성분 단순함 중시",
        "title": "상담 후 쓰는 게 좋을 듯",
        "content": "괜찮은 부분도 있지만 조심해서 써야 할 것 같아요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "맛",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "일반 간편식"
        },
        "review_detail_level": "short",
        "rating": 4.3,
        "trust_percent": 44,
        "recommendation_label": "비추천"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "c126245b-50ac-5946-ac78-0da1ff3ec8f3",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "임산부 곡물 단백질바",
    "product_category": "식품",
    "subcategory": "간식",
    "search_keyword": "임산부 간식",
    "target_period": "중기",
    "target_week_range": "13-27",
    "week": [
      13,
      27
    ],
    "fit_reason": "중기 외출 중 간단한 간식을 원하는 사용자를 위한 제품",
    "review_count": 33,
    "verified_purchase_ratio": 0.848,
    "average_rating": 3.98,
    "average_sentiment_score": 0.6686,
    "sentiment_percent": 67,
    "average_aspect_score": 0.6673,
    "average_review_reliability_score": 0.6709,
    "average_pregnancy_fit_score": 0.8579,
    "average_safety_risk_score": 0.2808,
    "safety_risk_percent": 28,
    "average_trust_score": 0.6111,
    "trust_percent": 61,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 19,
        "ratio": 0.576
      },
      {
        "name": "short",
        "count": 10,
        "ratio": 0.303
      },
      {
        "name": "detailed",
        "count": 4,
        "ratio": 0.121
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "3일 사용",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "2주 사용",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "첫 사용",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "review_focuses": [
        {
          "name": "입덧 부담",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "재구매",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "맛",
          "count": 8,
          "ratio": 0.242
        }
      ],
      "purchase_contexts": [
        {
          "name": "후기 비교 후 구매",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "기존 제품 대체",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "지인 추천으로 구매",
          "count": 6,
          "ratio": 0.182
        }
      ]
    },
    "warning_tags": [
      "단맛 부담",
      "소화 불편",
      "사용감 개인차",
      "향 민감",
      "주수 적합성 확인 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "전문직/연구직",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "판매직",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "의료/보건직",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "부산",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "인천",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 13,
          "ratio": 0.394
        },
        {
          "name": "중하",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "낮음",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "care_priorities": [
        {
          "name": "휴대 편의성",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "입덧 부담",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "소화 편안함",
          "count": 8,
          "ratio": 0.242
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "a2edb2e1-1059-5548-9c7e-52fd3e038b5c",
        "persona_summary": "34세 서울 강남구 프리랜서, 소화 편안함 중시",
        "title": "기대보다는 아쉬웠습니다",
        "content": "처음 써보니 입덧 부담을 기준으로 만족도가 갈렸습니다. 입맛이 없을 때 부담 없이 먹을 수 있는지를 봤습니다. 일반 간편식보다 낫다는 느낌은 크지 않았습니다. 후기가 좋아서 샀는데 제 입맛에는 향이 강하고 속도 편하지 않았어요. 임산부 제품이라 기대했는데 개인차가 큰 것 같습니다.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "입덧 부담",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "일반 간편식"
        },
        "review_detail_level": "detailed",
        "rating": 2.7,
        "trust_percent": 42,
        "recommendation_label": "비추천"
      },
      {
        "review_id": "f7ea186d-386f-584f-a763-3092c768068a",
        "persona_summary": "28세 인천 연수구 의료/보건직, 소화 편안함 중시",
        "title": "나중에 다시 써보려고요",
        "content": "며칠 써보니 휴대성을 기준으로 만족도가 갈렸습니다. 제품 자체는 나쁘지 않은데 임신 30주인 지금 쓰기에는 권장 시기와 조금 맞지 않는 느낌이었어요. 나중에 주수가 맞으면 다시 써보려고 합니다.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "휴대성",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "normal",
        "rating": 3.7,
        "trust_percent": 56,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "902da4fb-0566-5860-817e-a8a2647352a4",
        "persona_summary": "27세 전북 군산시 전문직/연구직, 입덧 부담 중시",
        "title": "나중에 써보려고요",
        "content": "제품은 괜찮아 보이는데 아직 잘 모르겠어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "재구매",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "기존 간식"
        },
        "review_detail_level": "short",
        "rating": 3.7,
        "trust_percent": 56,
        "recommendation_label": "조건부 추천"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "8b2e9574-d1e7-5314-97d7-bed1d12c3ec3",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "저당 곡물 그래놀라",
    "product_category": "식품",
    "subcategory": "그래놀라",
    "search_keyword": "임산부 그래놀라",
    "target_period": "중기",
    "target_week_range": "13-30",
    "week": [
      13,
      30
    ],
    "fit_reason": "중기 간식과 아침 대용을 찾는 사용자를 위한 식품",
    "review_count": 33,
    "verified_purchase_ratio": 0.606,
    "average_rating": 4,
    "average_sentiment_score": 0.6631,
    "sentiment_percent": 66,
    "average_aspect_score": 0.6607,
    "average_review_reliability_score": 0.6789,
    "average_pregnancy_fit_score": 0.8691,
    "average_safety_risk_score": 0.2929,
    "safety_risk_percent": 29,
    "average_trust_score": 0.6072,
    "trust_percent": 61,
    "recommendation_label": "비추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 14,
        "ratio": 0.424
      },
      {
        "name": "detailed",
        "count": 11,
        "ratio": 0.333
      },
      {
        "name": "short",
        "count": 8,
        "ratio": 0.242
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "3일 사용",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "첫 사용",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "1주 사용",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "review_focuses": [
        {
          "name": "입덧 부담",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "휴대성",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "소화감",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "purchase_contexts": [
        {
          "name": "기존 제품 대체",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "출산 준비로 미리 구매",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "후기 비교 후 구매",
          "count": 5,
          "ratio": 0.152
        }
      ]
    },
    "warning_tags": [
      "향 민감",
      "단맛 부담",
      "사용감 개인차",
      "성분 확인 필요",
      "전문가 상담 권장"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "의료/보건직",
          "count": 4,
          "ratio": 0.121
        },
        {
          "name": "전문직/연구직",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "경기",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "부산",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "income_bands": [
        {
          "name": "중상",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "중하",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "중간",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "care_priorities": [
        {
          "name": "성분 단순함",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "소화 편안함",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "휴대 편의성",
          "count": 8,
          "ratio": 0.242
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "af2963b9-4a5f-5790-b69d-97f8a05c234b",
        "persona_summary": "31세 경북 경산시 서비스직, 성분 단순함 중시",
        "title": "좋지만 아쉬운 점도 있어요",
        "content": "일주일 정도 써보니 재구매를 기준으로 만족도가 갈렸습니다. 외출할 때 간단히 먹을 수 있는지를 봤습니다. 기존 간식과 비교하면 장단점이 갈리는 편입니다. 임신 19주에 입맛이 없을 때 간단히 먹기 좋았어요. 단맛이 조금 강해서 매일 먹기보다는 가끔 먹게 됩니다.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "재구매",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "기존 간식"
        },
        "review_detail_level": "detailed",
        "rating": 3.9,
        "trust_percent": 68,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "198ed317-a09b-5ab6-9c98-05b5c25b773f",
        "persona_summary": "32세 충북 충주시 의료/보건직, 소화 편안함 중시",
        "title": "장점과 단점이 분명해요",
        "content": "이 제품은 향이 강하지 않아서 출근길에도 부담이 적었습니다. 단맛이 조금 강해서 매일 먹기보다는 가끔 먹게 됩니다.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "휴대성",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "카페 추천 제품"
        },
        "review_detail_level": "normal",
        "rating": 3.6,
        "trust_percent": 59,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "f0b7b235-f53a-539a-a8cf-53c1b2a48792",
        "persona_summary": "28세 부산 해운대구 교육직, 휴대 편의성 중시",
        "title": "재구매는 안 할 듯",
        "content": "개인차가 있겠지만 저는 별로였어요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "휴대성",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "기존 간식"
        },
        "review_detail_level": "short",
        "rating": 2.8,
        "trust_percent": 42,
        "recommendation_label": "비추천"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "095d366c-8cf2-5f91-be6e-b28152237018",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "마더 마그네슘 플러스",
    "product_category": "영양제",
    "subcategory": "마그네슘",
    "search_keyword": "임산부 마그네슘",
    "target_period": "중기",
    "target_week_range": "13-32",
    "week": [
      13,
      32
    ],
    "fit_reason": "제품 권장 주수와 가까우나 개인 상황 확인이 필요함",
    "review_count": 33,
    "verified_purchase_ratio": 0.667,
    "average_rating": 4.25,
    "average_sentiment_score": 0.7148,
    "sentiment_percent": 71,
    "average_aspect_score": 0.7306,
    "average_review_reliability_score": 0.6788,
    "average_pregnancy_fit_score": 0.8631,
    "average_safety_risk_score": 0.2697,
    "safety_risk_percent": 27,
    "average_trust_score": 0.65,
    "trust_percent": 65,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 18,
        "ratio": 0.545
      },
      {
        "name": "short",
        "count": 9,
        "ratio": 0.273
      },
      {
        "name": "detailed",
        "count": 6,
        "ratio": 0.182
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "3일 사용",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "2주 사용",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "review_focuses": [
        {
          "name": "가격",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "냄새",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "성분 확인",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "purchase_contexts": [
        {
          "name": "가격 할인 때 구매",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "출산 준비로 미리 구매",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "필요해서 급히 구매",
          "count": 5,
          "ratio": 0.152
        }
      ]
    },
    "warning_tags": [
      "속 울렁거림",
      "사용감 개인차",
      "주수 적합성 확인 필요",
      "변비",
      "불편 경험 다수"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "서비스직",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "자영업",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "경기",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "충북",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "income_bands": [
        {
          "name": "중하",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "중간",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "중상",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "care_priorities": [
        {
          "name": "전문가 확인 가능성",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "성분 안전성",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "복용 편의성",
          "count": 7,
          "ratio": 0.212
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "b2d69d0a-7a0d-5e49-8cc1-9205c22f2bc8",
        "persona_summary": "25세 대전 유성구 의료/보건직, 전문가 확인 가능성 중시",
        "title": "좋지만 아쉬운 점도 있어요",
        "content": "2주 정도 써보니 복용 편의성을 가장 먼저 보게 됐습니다. 꾸준히 챙겨 먹기 쉬운지, 전문가 확인 가능성을 같이 봤습니다. 임신 31주에 근육 불편 때문에 찾아봤는데 정제 형태라 챙기기 편했어요. 다만 빈속에 먹으면 속이 조금 불편해서 식후에 먹고 있어요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "복용 편의성",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4,
        "trust_percent": 63,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "c456a58b-402e-52ee-b868-3ef4d96fa7c5",
        "persona_summary": "30세 전남 순천시 서비스직, 전문가 확인 가능성 중시",
        "title": "임신 주수에 잘 맞았어요",
        "content": "알약을 잘 못 삼키는 편인데 이 제품은 복용 부담이 비교적 적었습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "재구매 후기",
          "review_focus": "성분 확인",
          "purchase_context_type": "가격 할인 때 구매",
          "comparison_target": "기존 알약 제품"
        },
        "review_detail_level": "normal",
        "rating": 4.5,
        "trust_percent": 74,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "d6535974-031e-5e30-9e3b-557925f52954",
        "persona_summary": "37세 서울 송파구 사무직, 속불편 최소화 중시",
        "title": "좋아요",
        "content": "생각보다 괜찮아요. 잘 쓰고 있습니다.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "복용 편의성",
          "purchase_context_type": "가격 할인 때 구매",
          "comparison_target": "병원 추천 제품"
        },
        "review_detail_level": "short",
        "rating": 4.8,
        "trust_percent": 79,
        "recommendation_label": "추천"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "16f51f96-7dab-5de5-8070-17e1dda4c12b",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "칼슘D 밸런스",
    "product_category": "영양제",
    "subcategory": "칼슘",
    "search_keyword": "임산부 칼슘",
    "target_period": "중기",
    "target_week_range": "13-27",
    "week": [
      13,
      27
    ],
    "fit_reason": "중기 이후 칼슘 섭취를 고려하는 사용자를 위한 제품",
    "review_count": 33,
    "verified_purchase_ratio": 0.818,
    "average_rating": 4.02,
    "average_sentiment_score": 0.6907,
    "sentiment_percent": 69,
    "average_aspect_score": 0.6832,
    "average_review_reliability_score": 0.6797,
    "average_pregnancy_fit_score": 0.8553,
    "average_safety_risk_score": 0.3011,
    "safety_risk_percent": 30,
    "average_trust_score": 0.6134,
    "trust_percent": 61,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "short",
        "count": 13,
        "ratio": 0.394
      },
      {
        "name": "normal",
        "count": 12,
        "ratio": 0.364
      },
      {
        "name": "detailed",
        "count": 8,
        "ratio": 0.242
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "1주 사용",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "3일 사용",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "첫 사용",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "review_focuses": [
        {
          "name": "냄새",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "성분 확인",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "복용 편의성",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "purchase_contexts": [
        {
          "name": "가격 할인 때 구매",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "출산 준비로 미리 구매",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "지인 추천으로 구매",
          "count": 5,
          "ratio": 0.152
        }
      ]
    },
    "warning_tags": [
      "속 울렁거림",
      "사용감 개인차",
      "비린 향",
      "변비",
      "주수 적합성 확인 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "의료/보건직",
          "count": 4,
          "ratio": 0.121
        },
        {
          "name": "IT/개발직",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 13,
          "ratio": 0.394
        },
        {
          "name": "경기",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "충남",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "income_bands": [
        {
          "name": "중상",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "중간",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "낮음",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "care_priorities": [
        {
          "name": "전문가 확인 가능성",
          "count": 14,
          "ratio": 0.424
        },
        {
          "name": "성분 안전성",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "속불편 최소화",
          "count": 7,
          "ratio": 0.212
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "2dcfa6bb-4e16-5290-8028-13d9ef41f631",
        "persona_summary": "42세 대전 서구 판매직, 성분 안전성 중시",
        "title": "상황에 따라 추천",
        "content": "2주 정도 써보니 복용 편의성을 가장 먼저 보게 됐습니다. 꾸준히 챙겨 먹기 쉬운지, 성분 안전성을 같이 봤습니다. 알약을 잘 못 삼키는 편인데 이 제품은 복용 부담이 비교적 적었습니다. 다만 빈속에 먹으면 속이 조금 불편해서 식후에 먹고 있어요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "복용 편의성",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 3.9,
        "trust_percent": 61,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "450ad2e8-f0c1-587f-9e10-5c373eee72b4",
        "persona_summary": "41세 충남 아산시 의료/보건직, 전문가 확인 가능성 중시",
        "title": "재구매 생각 있습니다",
        "content": "임신 27주에 중기 영양제 때문에 찾아봤는데 정제 형태라 챙기기 편했어요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "냄새",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "병원 추천 제품"
        },
        "review_detail_level": "normal",
        "rating": 4.9,
        "trust_percent": 83,
        "recommendation_label": "추천"
      },
      {
        "review_id": "42c09625-0e05-5ae9-ba6b-05dee16cbd7b",
        "persona_summary": "35세 전남 여수시 전문직/연구직, 성분 안전성 중시",
        "title": "확인 필요",
        "content": "쓰고 조금 불편해서 성분 다시 보려고요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "속불편",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "short",
        "rating": 4.6,
        "trust_percent": 40,
        "recommendation_label": "전문가 확인 필요"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "bca03e3f-8541-55bd-82c0-c10d6daf7cce",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "마더 철분 젤리",
    "product_category": "영양제",
    "subcategory": "철분",
    "search_keyword": "임산부 철분",
    "target_period": "중기",
    "target_week_range": "13-27",
    "week": [
      13,
      27
    ],
    "fit_reason": "중기 이후 철분 관리 수요가 높은 사용자를 위한 제품",
    "review_count": 34,
    "verified_purchase_ratio": 0.735,
    "average_rating": 3.99,
    "average_sentiment_score": 0.7042,
    "sentiment_percent": 70,
    "average_aspect_score": 0.6806,
    "average_review_reliability_score": 0.6772,
    "average_pregnancy_fit_score": 0.8668,
    "average_safety_risk_score": 0.3499,
    "safety_risk_percent": 35,
    "average_trust_score": 0.5938,
    "trust_percent": 59,
    "recommendation_label": "비추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 19,
        "ratio": 0.559
      },
      {
        "name": "short",
        "count": 9,
        "ratio": 0.265
      },
      {
        "name": "detailed",
        "count": 6,
        "ratio": 0.176
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "1주 사용",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "2주 사용",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "3일 사용",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "review_focuses": [
        {
          "name": "속불편",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "복용 편의성",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "냄새",
          "count": 6,
          "ratio": 0.176
        }
      ],
      "purchase_contexts": [
        {
          "name": "가격 할인 때 구매",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "기존 제품 대체",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "출산 준비로 미리 구매",
          "count": 6,
          "ratio": 0.176
        }
      ]
    },
    "warning_tags": [
      "변비",
      "속 울렁거림",
      "비린 향",
      "사용감 개인차",
      "성분 확인 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "의료/보건직",
          "count": 5,
          "ratio": 0.147
        },
        {
          "name": "전업주부",
          "count": 3,
          "ratio": 0.088
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "경기",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "충북",
          "count": 3,
          "ratio": 0.088
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "중하",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "중상",
          "count": 8,
          "ratio": 0.235
        }
      ],
      "care_priorities": [
        {
          "name": "전문가 확인 가능성",
          "count": 16,
          "ratio": 0.471
        },
        {
          "name": "성분 안전성",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "속불편 최소화",
          "count": 6,
          "ratio": 0.176
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "bda9aadd-e814-5558-a9ef-056e1aef07db",
        "persona_summary": "37세 서울 강남구 사무직, 전문가 확인 가능성 중시",
        "title": "만족도가 높아요",
        "content": "일주일 정도 써보니 복용 편의성을 가장 먼저 보게 됐습니다. 꾸준히 챙겨 먹기 쉬운지, 전문가 확인 가능성을 같이 봤습니다. 기존 알약 제품보다 복용 편의성 면에서는 더 만족스러웠어요. 알약을 잘 못 삼키는 편인데 이 제품은 복용 부담이 비교적 적었습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "복용 편의성",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "기존 알약 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.5,
        "trust_percent": 76,
        "recommendation_label": "추천"
      },
      {
        "review_id": "e6f08a16-0660-51a0-94ac-961a0456e73b",
        "persona_summary": "36세 인천 연수구 사무직, 성분 안전성 중시",
        "title": "만족도가 높아요",
        "content": "알약을 잘 못 삼키는 편인데 이 제품은 복용 부담이 비교적 적었습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "재구매 후기",
          "review_focus": "가격",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "가루형 영양제"
        },
        "review_detail_level": "normal",
        "rating": 4.6,
        "trust_percent": 71,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "102211b9-1dd5-5c9d-9c74-4abe9c77f5bd",
        "persona_summary": "29세 서울 노원구 자영업, 전문가 확인 가능성 중시",
        "title": "좋아요",
        "content": "생각보다 괜찮아요. 잘 쓰고 있습니다.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "냄새",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "병원 추천 제품"
        },
        "review_detail_level": "short",
        "rating": 4.3,
        "trust_percent": 75,
        "recommendation_label": "추천"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "bdc1f453-7b4f-5602-a65d-7610f1639211",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "임산부 골반 쿠션",
    "product_category": "용품",
    "subcategory": "좌식쿠션",
    "search_keyword": "임산부 좌식쿠션",
    "target_period": "중기",
    "target_week_range": "13-40",
    "week": [
      13,
      40
    ],
    "fit_reason": "오래 앉아 있을 때 허리와 골반 부담을 줄이고 싶은 사용자를 위한 용품",
    "review_count": 33,
    "verified_purchase_ratio": 0.788,
    "average_rating": 4.1,
    "average_sentiment_score": 0.7373,
    "sentiment_percent": 74,
    "average_aspect_score": 0.7339,
    "average_review_reliability_score": 0.6798,
    "average_pregnancy_fit_score": 0.883,
    "average_safety_risk_score": 0.1685,
    "safety_risk_percent": 17,
    "average_trust_score": 0.6971,
    "trust_percent": 70,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 17,
        "ratio": 0.515
      },
      {
        "name": "detailed",
        "count": 10,
        "ratio": 0.303
      },
      {
        "name": "short",
        "count": 6,
        "ratio": 0.182
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "한 달 사용",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "1주 사용",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "3일 사용",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "review_focuses": [
        {
          "name": "착용 안정감",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "사용 편의성",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "내구성",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "purchase_contexts": [
        {
          "name": "출산 준비로 미리 구매",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "필요해서 급히 구매",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "기존 제품 대체",
          "count": 5,
          "ratio": 0.152
        }
      ]
    },
    "warning_tags": [
      "사용감 개인차",
      "압박감",
      "고정감 부족",
      "성분 확인 필요",
      "전문가 상담 권장"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "전업주부",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "사무직",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "전문직/연구직",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "경기",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "전남",
          "count": 2,
          "ratio": 0.061
        }
      ],
      "income_bands": [
        {
          "name": "낮음",
          "count": 14,
          "ratio": 0.424
        },
        {
          "name": "중간",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "중하",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "care_priorities": [
        {
          "name": "착용 안정감",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "보관 편의성",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "이동 중 사용성",
          "count": 7,
          "ratio": 0.212
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "42978e31-e91a-5c8b-8463-b4ebe75be70b",
        "persona_summary": "30세 서울 관악구 사무직, 착용 안정감 중시",
        "title": "임신 주수에 잘 맞았어요",
        "content": "일주일 정도 써보니 반복해서 써도 형태가 유지되는지를 봤습니다. 설치나 사용이 번거롭지 않은지, 착용 안정감을 같이 봤습니다. 임신 19주에 장시간 앉음 때문에 구매했는데 사용법이 어렵지 않았어요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "내구성",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.6,
        "trust_percent": 88,
        "recommendation_label": "추천"
      },
      {
        "review_id": "ae53f694-4e37-5a6e-9c2f-42b412755490",
        "persona_summary": "39세 강원 강릉시 IT/개발직, 사용 편의성 중시",
        "title": "임신 주수에 잘 맞았어요",
        "content": "임신 24주에 골반 불편 때문에 구매했는데 사용법이 어렵지 않았어요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "착용 안정감",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "normal",
        "rating": 4.3,
        "trust_percent": 81,
        "recommendation_label": "추천"
      },
      {
        "review_id": "901af417-fae5-56f8-83d6-ac02633f743c",
        "persona_summary": "24세 경기 화성시 사무직, 보관 편의성 중시",
        "title": "그냥 그래요",
        "content": "나쁘진 않은데 엄청 좋지도 않아요.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "착용 안정감",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "기존 쿠션/밴드"
        },
        "review_detail_level": "short",
        "rating": 3.7,
        "trust_percent": 62,
        "recommendation_label": "조건부 추천"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "1ceb94ac-7346-5645-be59-0944eeb73356",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "임산부 복대 벨트",
    "product_category": "용품",
    "subcategory": "복대",
    "search_keyword": "임산부 복대",
    "target_period": "중기",
    "target_week_range": "16-36",
    "week": [
      16,
      36
    ],
    "fit_reason": "중기 이후 복부 무게와 허리 부담을 보조하는 용품",
    "review_count": 34,
    "verified_purchase_ratio": 0.765,
    "average_rating": 3.89,
    "average_sentiment_score": 0.6809,
    "sentiment_percent": 68,
    "average_aspect_score": 0.6647,
    "average_review_reliability_score": 0.7031,
    "average_pregnancy_fit_score": 0.8551,
    "average_safety_risk_score": 0.3161,
    "safety_risk_percent": 32,
    "average_trust_score": 0.599,
    "trust_percent": 60,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 19,
        "ratio": 0.559
      },
      {
        "name": "detailed",
        "count": 10,
        "ratio": 0.294
      },
      {
        "name": "short",
        "count": 5,
        "ratio": 0.147
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "1주 사용",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "2주 사용",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "첫 사용",
          "count": 6,
          "ratio": 0.176
        }
      ],
      "review_focuses": [
        {
          "name": "내구성",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "보관",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "이동 중 사용",
          "count": 8,
          "ratio": 0.235
        }
      ],
      "purchase_contexts": [
        {
          "name": "후기 비교 후 구매",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "지인 추천으로 구매",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "기존 제품 대체",
          "count": 7,
          "ratio": 0.206
        }
      ]
    },
    "warning_tags": [
      "사용감 개인차",
      "고정감 부족",
      "압박감",
      "착용 번거로움",
      "불편 경험 다수"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "판매직",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "서비스직",
          "count": 5,
          "ratio": 0.147
        },
        {
          "name": "사무직",
          "count": 4,
          "ratio": 0.118
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "경기",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "경북",
          "count": 4,
          "ratio": 0.118
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 15,
          "ratio": 0.441
        },
        {
          "name": "중상",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "낮음",
          "count": 6,
          "ratio": 0.176
        }
      ],
      "care_priorities": [
        {
          "name": "사용 편의성",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "착용 안정감",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "이동 중 사용성",
          "count": 7,
          "ratio": 0.206
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "0d5ccea7-6b16-560d-80aa-9eccead143b9",
        "persona_summary": "34세 서울 송파구 자영업, 착용 안정감 중시",
        "title": "임신 주수에 잘 맞았어요",
        "content": "일주일 정도 써보니 반복해서 써도 형태가 유지되는지를 봤습니다. 설치나 사용이 번거롭지 않은지, 착용 안정감을 같이 봤습니다. 임신 19주에 복부 무게 때문에 구매했는데 외출할 때 허리 부담이 조금 줄었습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "내구성",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.3,
        "trust_percent": 78,
        "recommendation_label": "추천"
      },
      {
        "review_id": "93833412-f737-5926-973b-5f1d7cf6edbb",
        "persona_summary": "40세 부산 기장군 서비스직, 보관 편의성 중시",
        "title": "효과보다 주의점이 더 신경 쓰였어요",
        "content": "임신 17주에 복부 무게 때문에 구매했는데 외출할 때 허리 부담이 조금 줄었습니다. 하지만 사용 후 불편감이 있어 착용 방법이나 사용 시기를 한 번 더 확인하고 쓰는 게 좋겠다고 느꼈어요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "사용 편의성",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "normal",
        "rating": 4.3,
        "trust_percent": 43,
        "recommendation_label": "전문가 확인 필요"
      },
      {
        "review_id": "0564304f-5c4c-5a0e-a6ea-94cf95115920",
        "persona_summary": "42세 경북 포항시 자영업, 착용 안정감 중시",
        "title": "만족해요",
        "content": "편하고 무난해서 만족합니다.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "내구성",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "short",
        "rating": 4.5,
        "trust_percent": 73,
        "recommendation_label": "조건부 추천"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "98d1615a-11a2-5191-b34c-4a9ed34739d1",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "임산부 압박 스타킹",
    "product_category": "용품",
    "subcategory": "압박스타킹",
    "search_keyword": "임산부 스타킹",
    "target_period": "중기",
    "target_week_range": "16-40",
    "week": [
      16,
      40
    ],
    "fit_reason": "다리 붓기와 장시간 서 있음을 보조하는 용품",
    "review_count": 33,
    "verified_purchase_ratio": 0.727,
    "average_rating": 3.66,
    "average_sentiment_score": 0.6024,
    "sentiment_percent": 60,
    "average_aspect_score": 0.6074,
    "average_review_reliability_score": 0.6497,
    "average_pregnancy_fit_score": 0.8914,
    "average_safety_risk_score": 0.4056,
    "safety_risk_percent": 41,
    "average_trust_score": 0.5253,
    "trust_percent": 53,
    "recommendation_label": "비추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 13,
        "ratio": 0.394
      },
      {
        "name": "short",
        "count": 11,
        "ratio": 0.333
      },
      {
        "name": "detailed",
        "count": 9,
        "ratio": 0.273
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "3일 사용",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "1주 사용",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "2주 사용",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "review_focuses": [
        {
          "name": "착용 안정감",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "사용 편의성",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "보관",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "purchase_contexts": [
        {
          "name": "출산 준비로 미리 구매",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "가격 할인 때 구매",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "지인 추천으로 구매",
          "count": 7,
          "ratio": 0.212
        }
      ]
    },
    "warning_tags": [
      "압박감",
      "고정감 부족",
      "사용감 개인차",
      "불편 경험 다수",
      "착용 번거로움"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "서비스직",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "교육직",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "사무직",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 17,
          "ratio": 0.515
        },
        {
          "name": "서울",
          "count": 4,
          "ratio": 0.121
        },
        {
          "name": "충북",
          "count": 2,
          "ratio": 0.061
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 13,
          "ratio": 0.394
        },
        {
          "name": "중하",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "중상",
          "count": 8,
          "ratio": 0.242
        }
      ],
      "care_priorities": [
        {
          "name": "이동 중 사용성",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "보관 편의성",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "착용 안정감",
          "count": 7,
          "ratio": 0.212
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "c4ad2972-851b-53bc-8c32-a64ed2495964",
        "persona_summary": "24세 경기 고양시 일산동구 서비스직, 이동 중 사용성 중시",
        "title": "나중에 다시 써보려고요",
        "content": "며칠 써보니 착용했을 때 흔들리거나 압박이 없는지를 봤습니다. 밖에서도 쓰기 편한지를 봤습니다. 제품 자체는 나쁘지 않은데 임신 13주인 지금 쓰기에는 권장 시기와 조금 맞지 않는 느낌이었어요. 나중에 주수가 맞으면 다시 써보려고 합니다.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "착용 안정감",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 3.4,
        "trust_percent": 58,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "694dcbe5-cc60-5a9c-93e7-1e8b0b10dcfb",
        "persona_summary": "27세 경기 부천시 의료/보건직, 착용 안정감 중시",
        "title": "저한테는 맞지 않았어요",
        "content": "기대보다 고정감이 약하고 오래 쓰면 오히려 불편했습니다. 임산부 제품이라 기대했는데 개인차가 큰 것 같습니다.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "내구성",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "normal",
        "rating": 2.3,
        "trust_percent": 39,
        "recommendation_label": "비추천"
      },
      {
        "review_id": "45240b7e-9549-5ed3-b73e-14efd372ec7d",
        "persona_summary": "31세 충북 청주시 사무직, 사용 편의성 중시",
        "title": "재구매는 안 할 듯",
        "content": "개인차가 있겠지만 저는 별로였어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "착용 안정감",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "후기 많은 제품"
        },
        "review_detail_level": "short",
        "rating": 2.4,
        "trust_percent": 36,
        "recommendation_label": "비추천"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "5f1026b5-f252-5778-b533-62617aca5286",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "복부밴드 레깅스",
    "product_category": "의류",
    "subcategory": "레깅스",
    "search_keyword": "임산부 레깅스",
    "target_period": "중기",
    "target_week_range": "13-36",
    "week": [
      13,
      36
    ],
    "fit_reason": "중기 이후 복부 변화와 활동성을 고려한 의류",
    "review_count": 34,
    "verified_purchase_ratio": 0.706,
    "average_rating": 3.97,
    "average_sentiment_score": 0.6997,
    "sentiment_percent": 70,
    "average_aspect_score": 0.6767,
    "average_review_reliability_score": 0.6524,
    "average_pregnancy_fit_score": 0.8804,
    "average_safety_risk_score": 0.1475,
    "safety_risk_percent": 15,
    "average_trust_score": 0.6795,
    "trust_percent": 68,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 19,
        "ratio": 0.559
      },
      {
        "name": "short",
        "count": 11,
        "ratio": 0.324
      },
      {
        "name": "detailed",
        "count": 4,
        "ratio": 0.118
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "3일 사용",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "첫 사용",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "2주 사용",
          "count": 5,
          "ratio": 0.147
        }
      ],
      "review_focuses": [
        {
          "name": "사이즈",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "출근복 활용",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "복부 압박",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "purchase_contexts": [
        {
          "name": "출산 준비로 미리 구매",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "지인 추천으로 구매",
          "count": 6,
          "ratio": 0.176
        },
        {
          "name": "후기 비교 후 구매",
          "count": 5,
          "ratio": 0.147
        }
      ]
    },
    "warning_tags": [
      "허벅지 쓸림",
      "사용감 개인차",
      "복부 압박",
      "사이즈 작음",
      "불편 경험 다수"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "서비스직",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "사무직",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "전문직/연구직",
          "count": 6,
          "ratio": 0.176
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "서울",
          "count": 5,
          "ratio": 0.147
        },
        {
          "name": "대구",
          "count": 4,
          "ratio": 0.118
        }
      ],
      "income_bands": [
        {
          "name": "중하",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "중간",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "중상",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "care_priorities": [
        {
          "name": "세탁 내구성",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "복부 압박 최소화",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "출근복 활용도",
          "count": 7,
          "ratio": 0.206
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "15f10a9b-3cb6-5d2a-80c6-5d43b35945ee",
        "persona_summary": "34세 대전 서구 IT/개발직, 출근복 활용도 중시",
        "title": "재구매 생각 있습니다",
        "content": "재구매하면서는 출근복 활용을 중심으로 보게 됐습니다. 오래 입었을 때 불편하지 않은지, 출근복 활용도를 같이 봤습니다. 일반 사이즈 옷보다 출근복 활용 면에서는 더 만족스러웠어요. 임신 13주에 배가 나오기 시작해서 샀는데 복부 압박이 적고 움직이기 편해요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "재구매 후기",
          "review_focus": "출근복 활용",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "일반 사이즈 옷"
        },
        "review_detail_level": "detailed",
        "rating": 4.9,
        "trust_percent": 88,
        "recommendation_label": "추천"
      },
      {
        "review_id": "45c528cd-3b98-547e-bdf7-e66e780465b4",
        "persona_summary": "25세 경기 남양주시 교육직, 세탁 내구성 중시",
        "title": "저한테는 맞지 않았어요",
        "content": "며칠 써보니 세탁 후 변화를 중심으로 보게 됐습니다. 사이즈표를 보고 샀는데 배 부분이 생각보다 조여서 오래 입기 어려웠어요. 임산부 제품이라 기대했는데 개인차가 큰 것 같습니다.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "세탁 후 변화",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "normal",
        "rating": 2.3,
        "trust_percent": 42,
        "recommendation_label": "비추천"
      },
      {
        "review_id": "eba4267a-97e5-5e5e-a8f6-1a1109f8d848",
        "persona_summary": "33세 인천 부평구 전문직/연구직, 사이즈 여유 중시",
        "title": "좋아요",
        "content": "생각보다 괜찮아요. 잘 쓰고 있습니다.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "사이즈",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "short",
        "rating": 4.5,
        "trust_percent": 83,
        "recommendation_label": "추천"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "f00605b0-9f4f-5b9c-9251-2c67b861658c",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "복부밴드 임산부 스커트",
    "product_category": "의류",
    "subcategory": "스커트",
    "search_keyword": "임산부 스커트",
    "target_period": "중기",
    "target_week_range": "13-36",
    "week": [
      13,
      36
    ],
    "fit_reason": "중기 출근복과 외출복을 함께 고려한 의류",
    "review_count": 33,
    "verified_purchase_ratio": 0.727,
    "average_rating": 4.01,
    "average_sentiment_score": 0.7181,
    "sentiment_percent": 72,
    "average_aspect_score": 0.6902,
    "average_review_reliability_score": 0.6631,
    "average_pregnancy_fit_score": 0.872,
    "average_safety_risk_score": 0.1712,
    "safety_risk_percent": 17,
    "average_trust_score": 0.6782,
    "trust_percent": 68,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 16,
        "ratio": 0.485
      },
      {
        "name": "short",
        "count": 11,
        "ratio": 0.333
      },
      {
        "name": "detailed",
        "count": 6,
        "ratio": 0.182
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "1주 사용",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "한 달 사용",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "review_focuses": [
        {
          "name": "출근복 활용",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "세탁 후 변화",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "복부 압박",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "purchase_contexts": [
        {
          "name": "기존 제품 대체",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "후기 비교 후 구매",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "필요해서 급히 구매",
          "count": 5,
          "ratio": 0.152
        }
      ]
    },
    "warning_tags": [
      "허벅지 쓸림",
      "사이즈 작음",
      "복부 압박",
      "사용감 개인차",
      "불편 경험 다수"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "판매직",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "교육직",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "서울",
          "count": 3,
          "ratio": 0.091
        },
        {
          "name": "경남",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "income_bands": [
        {
          "name": "낮음",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "중간",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "중하",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "care_priorities": [
        {
          "name": "복부 압박 최소화",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "세탁 내구성",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "사이즈 여유",
          "count": 8,
          "ratio": 0.242
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "17ad13fe-ee5f-5ddb-ae5b-94c655dfedc3",
        "persona_summary": "35세 서울 마포구 판매직, 세탁 내구성 중시",
        "title": "성분과 사용감은 확인이 필요해요",
        "content": "한 달 가까이 써보니 출근복 활용을 중심으로 보게 됐습니다. 오래 입었을 때 불편하지 않은지, 세탁 내구성을 같이 봤습니다. 임신 29주에 배가 나오기 시작해서 샀는데 복부 압박이 적고 움직이기 편해요. 하지만 사용 후 불편감이 있어 소재나 복부 압박감을 한 번 더 확인하고 고르는 게 좋겠다고 느꼈어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "출근복 활용",
          "purchase_context_type": "가격 할인 때 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 3.8,
        "trust_percent": 54,
        "recommendation_label": "비추천"
      },
      {
        "review_id": "e04aca80-7b58-5f38-bb2e-95bce6bb0c56",
        "persona_summary": "28세 경기 부천시 의료/보건직, 세탁 내구성 중시",
        "title": "나중에 다시 써보려고요",
        "content": "제품 자체는 나쁘지 않은데 임신 7주인 지금 쓰기에는 권장 시기와 조금 맞지 않는 느낌이었어요. 나중에 주수가 맞으면 다시 써보려고 합니다.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "출근복 활용",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "후기 많은 제품"
        },
        "review_detail_level": "normal",
        "rating": 3.9,
        "trust_percent": 58,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "7e5697e9-947e-5b30-8a67-bf027d945fed",
        "persona_summary": "31세 서울 양천구 서비스직, 사이즈 여유 중시",
        "title": "아쉬워요",
        "content": "후기 보고 샀는데 생각보다 불편했습니다.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "세탁 후 변화",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "후기 많은 제품"
        },
        "review_detail_level": "short",
        "rating": 1.8,
        "trust_percent": 41,
        "recommendation_label": "비추천"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "b4cdedd8-6b46-5519-ad9e-d97bd3869c37",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "출근용 임산부 팬츠",
    "product_category": "의류",
    "subcategory": "팬츠",
    "search_keyword": "임산부 바지",
    "target_period": "중기",
    "target_week_range": "13-36",
    "week": [
      13,
      36
    ],
    "fit_reason": "직장 출근 시 편한 착용감을 고려한 의류",
    "review_count": 33,
    "verified_purchase_ratio": 0.818,
    "average_rating": 4.08,
    "average_sentiment_score": 0.698,
    "sentiment_percent": 70,
    "average_aspect_score": 0.6783,
    "average_review_reliability_score": 0.6922,
    "average_pregnancy_fit_score": 0.8888,
    "average_safety_risk_score": 0.1745,
    "safety_risk_percent": 17,
    "average_trust_score": 0.6772,
    "trust_percent": 68,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 17,
        "ratio": 0.515
      },
      {
        "name": "detailed",
        "count": 8,
        "ratio": 0.242
      },
      {
        "name": "short",
        "count": 8,
        "ratio": 0.242
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "2주 사용",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "3일 사용",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "review_focuses": [
        {
          "name": "복부 압박",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "착용감",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "사이즈",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "purchase_contexts": [
        {
          "name": "출산 준비로 미리 구매",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "기존 제품 대체",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "지인 추천으로 구매",
          "count": 6,
          "ratio": 0.182
        }
      ]
    },
    "warning_tags": [
      "복부 압박",
      "사용감 개인차",
      "허벅지 쓸림",
      "사이즈 작음",
      "성분 확인 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "전문직/연구직",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "사무직",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "자영업",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "경기",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "광주",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "중상",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "낮음",
          "count": 8,
          "ratio": 0.242
        }
      ],
      "care_priorities": [
        {
          "name": "세탁 내구성",
          "count": 14,
          "ratio": 0.424
        },
        {
          "name": "사이즈 여유",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "출근복 활용도",
          "count": 6,
          "ratio": 0.182
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "215e665d-fc13-5de5-96b8-5aa302f0d85f",
        "persona_summary": "31세 전남 순천시 서비스직, 세탁 내구성 중시",
        "title": "효과보다 주의점이 더 신경 쓰였어요",
        "content": "일주일 정도 써보니 복부 압박을 중심으로 보게 됐습니다. 오래 입었을 때 불편하지 않은지, 세탁 내구성을 같이 봤습니다. 일반 사이즈 옷과 비교해도 사용 전 확인할 부분이 있어 보였습니다. 임신 27주에 배가 나오기 시작해서 샀는데 복부 압박이 적고 움직이기 편해요. 하지만 사용 후 불편감이 있어 소재나 복부 압박감을 한 번 더 확인하고 고르는 게 좋겠다고 느꼈어요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "복부 압박",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "일반 사이즈 옷"
        },
        "review_detail_level": "detailed",
        "rating": 4.5,
        "trust_percent": 55,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "f57c4bda-3dd4-5683-b550-e38187976ce1",
        "persona_summary": "29세 서울 마포구 사무직, 세탁 내구성 중시",
        "title": "전문가 확인 후 쓰는 게 좋겠어요",
        "content": "임신 20주에 배가 나오기 시작해서 샀는데 복부 압박이 적고 움직이기 편해요. 하지만 사용 후 불편감이 있어 소재나 복부 압박감을 한 번 더 확인하고 고르는 게 좋겠다고 느꼈어요.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "착용감",
          "purchase_context_type": "가격 할인 때 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "normal",
        "rating": 3.9,
        "trust_percent": 55,
        "recommendation_label": "비추천"
      },
      {
        "review_id": "d824ddcf-2c14-5700-9fb3-448d24c853cf",
        "persona_summary": "27세 대전 서구 프리랜서, 출근복 활용도 중시",
        "title": "그냥 그래요",
        "content": "나쁘진 않은데 엄청 좋지도 않아요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "복부 압박",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "기존 임부복"
        },
        "review_detail_level": "short",
        "rating": 3.9,
        "trust_percent": 67,
        "recommendation_label": "조건부 추천"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "7e2bd16c-0303-52cc-bf54-975916811bb5",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "무향 보습밤 미니",
    "product_category": "바디케어",
    "subcategory": "보습밤",
    "search_keyword": "임산부 보습밤",
    "target_period": "초기",
    "target_week_range": "1-20",
    "week": [
      1,
      20
    ],
    "fit_reason": "초기 피부 건조와 향 민감도를 고려한 휴대용 보습 제품",
    "review_count": 33,
    "verified_purchase_ratio": 0.848,
    "average_rating": 4.05,
    "average_sentiment_score": 0.6856,
    "sentiment_percent": 69,
    "average_aspect_score": 0.6415,
    "average_review_reliability_score": 0.6822,
    "average_pregnancy_fit_score": 0.8769,
    "average_safety_risk_score": 0.2856,
    "safety_risk_percent": 29,
    "average_trust_score": 0.6179,
    "trust_percent": 62,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 16,
        "ratio": 0.485
      },
      {
        "name": "detailed",
        "count": 9,
        "ratio": 0.273
      },
      {
        "name": "short",
        "count": 8,
        "ratio": 0.242
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "1주 사용",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "3일 사용",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "review_focuses": [
        {
          "name": "성분",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "피부 자극",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "끈적임",
          "count": 8,
          "ratio": 0.242
        }
      ],
      "purchase_contexts": [
        {
          "name": "가격 할인 때 구매",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "필요해서 급히 구매",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "후기 비교 후 구매",
          "count": 6,
          "ratio": 0.182
        }
      ]
    },
    "warning_tags": [
      "가려움",
      "피부 따가움",
      "향 자극",
      "성분 확인 필요",
      "전문가 상담 권장"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "전문직/연구직",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "사무직",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "의료/보건직",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 13,
          "ratio": 0.394
        },
        {
          "name": "인천",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "부산",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "중하",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "중상",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "care_priorities": [
        {
          "name": "향 자극 최소화",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "피부 자극 여부",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "보습 지속력",
          "count": 8,
          "ratio": 0.242
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "7481dc24-8a50-5c31-ad9c-70169f2b474b",
        "persona_summary": "31세 경기 성남시 분당구 전문직/연구직, 성분 안전성 중시",
        "title": "좋지만 아쉬운 점도 있어요",
        "content": "2주 정도 써보니 향을 특히 신경 쓰게 됐습니다. 임신 후 피부 변화가 신경 쓰여 성분 안전성을 중시해서 향과 사용감을 꼼꼼히 봤습니다. 향이 약한 편이라 냄새에 민감한 시기에도 쓰기 편했습니다. 보습은 좋은데 약간 끈적임이 남아서 밤에만 쓰고 있어요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "향",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 3.4,
        "trust_percent": 58,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "1618e160-2862-57e8-927a-a772ad94a3b6",
        "persona_summary": "39세 경북 경산시 서비스직, 보습 지속력 중시",
        "title": "임신 주수에 잘 맞았어요",
        "content": "처음 써보니 피부 자극을 특히 신경 쓰게 됐습니다. 향이 약한 편이라 냄새에 민감한 시기에도 쓰기 편했습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "피부 자극",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "향 있는 제품"
        },
        "review_detail_level": "normal",
        "rating": 4.7,
        "trust_percent": 81,
        "recommendation_label": "추천"
      },
      {
        "review_id": "197bf67b-75ef-51e1-849c-3882a7ead3cd",
        "persona_summary": "35세 전북 전주시 전문직/연구직, 성분 안전성 중시",
        "title": "괜찮네요",
        "content": "보습밤 찾다가 샀는데 무난해요.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "향",
          "purchase_context_type": "가격 할인 때 구매",
          "comparison_target": "기존 로션"
        },
        "review_detail_level": "short",
        "rating": 4.5,
        "trust_percent": 79,
        "recommendation_label": "추천"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "9b5afc2d-d8b8-5613-97e5-eb361033ea1e",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "저자극 보습 로션",
    "product_category": "바디케어",
    "subcategory": "보습로션",
    "search_keyword": "임산부 로션",
    "target_period": "초기",
    "target_week_range": "1-20",
    "week": [
      1,
      20
    ],
    "fit_reason": "제품 권장 주수와 차이가 있어 추천 적합도가 낮음",
    "review_count": 33,
    "verified_purchase_ratio": 0.848,
    "average_rating": 3.88,
    "average_sentiment_score": 0.6552,
    "sentiment_percent": 66,
    "average_aspect_score": 0.6159,
    "average_review_reliability_score": 0.7266,
    "average_pregnancy_fit_score": 0.8738,
    "average_safety_risk_score": 0.301,
    "safety_risk_percent": 30,
    "average_trust_score": 0.6011,
    "trust_percent": 60,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 21,
        "ratio": 0.636
      },
      {
        "name": "detailed",
        "count": 7,
        "ratio": 0.212
      },
      {
        "name": "short",
        "count": 5,
        "ratio": 0.152
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "3일 사용",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "첫 사용",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "1주 사용",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "review_focuses": [
        {
          "name": "피부 자극",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "보습감",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "향",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "purchase_contexts": [
        {
          "name": "후기 비교 후 구매",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "가격 할인 때 구매",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "지인 추천으로 구매",
          "count": 6,
          "ratio": 0.182
        }
      ]
    },
    "warning_tags": [
      "피부 따가움",
      "향 자극",
      "불편 경험 다수",
      "가려움",
      "사용감 개인차"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "서비스직",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "IT/개발직",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "사무직",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "경기",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "부산",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 17,
          "ratio": 0.515
        },
        {
          "name": "중하",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "중상",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "care_priorities": [
        {
          "name": "보습 지속력",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "향 자극 최소화",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "성분 안전성",
          "count": 8,
          "ratio": 0.242
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "1120668e-4271-5f21-9daa-c6da2aaf6a51",
        "persona_summary": "35세 서울 강남구 사무직, 성분 안전성 중시",
        "title": "재구매는 어려울 것 같아요",
        "content": "며칠 써보니 피부 자극을 특히 신경 쓰게 됐습니다. 임신 후 피부 변화가 신경 쓰여 성분 안전성을 중시해서 향과 사용감을 꼼꼼히 봤습니다. 향 있는 제품보다 낫다는 느낌은 크지 않았습니다. 피부가 민감한 편인데 바른 뒤 따가움이 있어서 사용을 멈췄습니다. 임산부 제품이라 기대했는데 개인차가 큰 것 같습니다.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "피부 자극",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "향 있는 제품"
        },
        "review_detail_level": "detailed",
        "rating": 2.1,
        "trust_percent": 40,
        "recommendation_label": "비추천"
      },
      {
        "review_id": "6b12af7e-8521-5ac8-b821-1373b978050f",
        "persona_summary": "39세 인천 연수구 서비스직, 보습 지속력 중시",
        "title": "재구매 생각 있습니다",
        "content": "추천받아 써보니 피부 자극을 특히 신경 쓰게 됐습니다. 향이 약한 편이라 냄새에 민감한 시기에도 쓰기 편했습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "선물/추천 구매",
          "review_focus": "피부 자극",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "민감성 제품"
        },
        "review_detail_level": "normal",
        "rating": 4.9,
        "trust_percent": 83,
        "recommendation_label": "추천"
      },
      {
        "review_id": "fdd1516a-003a-5ec9-865b-84b4d001109c",
        "persona_summary": "36세 인천 연수구 전업주부, 피부 자극 여부 중시",
        "title": "보통입니다",
        "content": "쓸 만한데 재구매는 조금 더 써보고요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "끈적임",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "기존 로션"
        },
        "review_detail_level": "short",
        "rating": 3.8,
        "trust_percent": 54,
        "recommendation_label": "비추천"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "fa0533d9-3141-593f-9220-f19629deb56c",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "무향 순한 바디워시",
    "product_category": "바디케어",
    "subcategory": "바디워시",
    "search_keyword": "임산부 바디워시",
    "target_period": "초기",
    "target_week_range": "1-12",
    "week": [
      1,
      12
    ],
    "fit_reason": "초기 냄새 민감과 피부 자극을 고려한 제품",
    "review_count": 34,
    "verified_purchase_ratio": 0.706,
    "average_rating": 3.78,
    "average_sentiment_score": 0.6294,
    "sentiment_percent": 63,
    "average_aspect_score": 0.6556,
    "average_review_reliability_score": 0.6833,
    "average_pregnancy_fit_score": 0.7993,
    "average_safety_risk_score": 0.2702,
    "safety_risk_percent": 27,
    "average_trust_score": 0.5912,
    "trust_percent": 59,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 17,
        "ratio": 0.5
      },
      {
        "name": "detailed",
        "count": 10,
        "ratio": 0.294
      },
      {
        "name": "short",
        "count": 7,
        "ratio": 0.206
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "1주 사용",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "3일 사용",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "review_focuses": [
        {
          "name": "피부 자극",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "성분",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "보습감",
          "count": 8,
          "ratio": 0.235
        }
      ],
      "purchase_contexts": [
        {
          "name": "기존 제품 대체",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "출산 준비로 미리 구매",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "가격 할인 때 구매",
          "count": 5,
          "ratio": 0.147
        }
      ]
    },
    "warning_tags": [
      "향 자극",
      "가려움",
      "주수 적합성 확인 필요",
      "사용감 개인차",
      "피부 따가움"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "전문직/연구직",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "사무직",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "자영업",
          "count": 4,
          "ratio": 0.118
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "서울",
          "count": 4,
          "ratio": 0.118
        },
        {
          "name": "전남",
          "count": 3,
          "ratio": 0.088
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "낮음",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "중하",
          "count": 8,
          "ratio": 0.235
        }
      ],
      "care_priorities": [
        {
          "name": "보습 지속력",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "성분 안전성",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "향 자극 최소화",
          "count": 8,
          "ratio": 0.235
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "ff8dbf1a-829f-5fcb-a8e5-f11e99b8a4aa",
        "persona_summary": "33세 경북 포항시 전문직/연구직, 피부 자극 여부 중시",
        "title": "상황에 따라 추천",
        "content": "재구매하면서는 끈적임을 특히 신경 쓰게 됐습니다. 임신 후 피부 변화가 신경 쓰여 피부 자극 여부를 중시해서 향과 사용감을 꼼꼼히 봤습니다. 임신 6주부터 배가 건조해서 썼는데 발림성이 부드럽고 보습감이 괜찮았어요. 보습은 좋은데 약간 끈적임이 남아서 밤에만 쓰고 있어요.",
        "review_context": {
          "usage_phase": "재구매 후기",
          "review_focus": "끈적임",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.1,
        "trust_percent": 61,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "bb825f74-9ce7-5660-b6ca-acc76fbaf7a2",
        "persona_summary": "37세 경북 구미시 전문직/연구직, 향 자극 최소화 중시",
        "title": "상황에 따라 추천",
        "content": "며칠 써보니 성분을 특히 신경 쓰게 됐습니다. 임신 11주부터 배가 건조해서 썼는데 발림성이 부드럽고 보습감이 괜찮았어요. 보습은 좋은데 약간 끈적임이 남아서 밤에만 쓰고 있어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "성분",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "기존 로션"
        },
        "review_detail_level": "normal",
        "rating": 3.8,
        "trust_percent": 66,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "76115695-08d2-57aa-a6a1-2a3a9f335005",
        "persona_summary": "24세 전남 목포시 전문직/연구직, 향 자극 최소화 중시",
        "title": "재구매할 듯",
        "content": "아직까진 불편한 점 없어요.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "성분",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "민감성 제품"
        },
        "review_detail_level": "short",
        "rating": 4.9,
        "trust_percent": 79,
        "recommendation_label": "추천"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "21272501-3135-55d3-836a-f58770543161",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "무카페인 루이보스티",
    "product_category": "식품",
    "subcategory": "차",
    "search_keyword": "임산부 차",
    "target_period": "초기",
    "target_week_range": "1-40",
    "week": [
      1,
      40
    ],
    "fit_reason": "카페인을 줄이고 싶은 임산부가 찾는 음료",
    "review_count": 33,
    "verified_purchase_ratio": 0.818,
    "average_rating": 3.97,
    "average_sentiment_score": 0.6802,
    "sentiment_percent": 68,
    "average_aspect_score": 0.6504,
    "average_review_reliability_score": 0.6684,
    "average_pregnancy_fit_score": 0.9172,
    "average_safety_risk_score": 0.1967,
    "safety_risk_percent": 20,
    "average_trust_score": 0.6567,
    "trust_percent": 66,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 13,
        "ratio": 0.394
      },
      {
        "name": "short",
        "count": 13,
        "ratio": 0.394
      },
      {
        "name": "detailed",
        "count": 7,
        "ratio": 0.212
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "1주 사용",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "첫 사용",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "한 달 사용",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "review_focuses": [
        {
          "name": "재구매",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "소화감",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "입덧 부담",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "purchase_contexts": [
        {
          "name": "출산 준비로 미리 구매",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "지인 추천으로 구매",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "후기 비교 후 구매",
          "count": 5,
          "ratio": 0.152
        }
      ]
    },
    "warning_tags": [
      "사용감 개인차",
      "향 민감",
      "소화 불편",
      "단맛 부담",
      "불편 경험 다수"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "전문직/연구직",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "프리랜서",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "서울",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "인천",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 13,
          "ratio": 0.394
        },
        {
          "name": "낮음",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "중하",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "care_priorities": [
        {
          "name": "소화 편안함",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "성분 단순함",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "입덧 부담",
          "count": 9,
          "ratio": 0.273
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "92e03845-2dc4-568b-8198-b08bda000781",
        "persona_summary": "34세 경북 구미시 전문직/연구직, 성분 단순함 중시",
        "title": "만족도가 높아요",
        "content": "한 달 가까이 써보니 재구매를 기준으로 만족도가 갈렸습니다. 입맛이 없을 때 부담 없이 먹을 수 있는지를 봤습니다. 임신 21주에 입맛이 없을 때 간단히 먹기 좋았어요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "재구매",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.4,
        "trust_percent": 84,
        "recommendation_label": "추천"
      },
      {
        "review_id": "d77b9c30-ea7e-5693-9d3f-3c93f934ee45",
        "persona_summary": "38세 부산 부산진구 사무직, 소화 편안함 중시",
        "title": "저한테는 맞지 않았어요",
        "content": "후기가 좋아서 샀는데 제 입맛에는 향이 강하고 속도 편하지 않았어요. 임산부 제품이라 기대했는데 개인차가 큰 것 같습니다.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "맛",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "normal",
        "rating": 2.6,
        "trust_percent": 46,
        "recommendation_label": "비추천"
      },
      {
        "review_id": "5f75271c-8017-56ee-89e0-f93841fc508b",
        "persona_summary": "41세 경기 수원시 영통구 전문직/연구직, 소화 편안함 중시",
        "title": "재구매는 안 할 듯",
        "content": "개인차가 있겠지만 저는 별로였어요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "입덧 부담",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "카페 추천 제품"
        },
        "review_detail_level": "short",
        "rating": 2.4,
        "trust_percent": 40,
        "recommendation_label": "비추천"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "9412e54a-884a-591e-b0b5-7d733bc186f3",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "입덧 생강 캔디",
    "product_category": "식품",
    "subcategory": "입덧간식",
    "search_keyword": "입덧 캔디",
    "target_period": "초기",
    "target_week_range": "4-14",
    "week": [
      4,
      14
    ],
    "fit_reason": "초기 입덧 부담을 줄이고 싶은 사용자가 찾는 간식",
    "review_count": 34,
    "verified_purchase_ratio": 0.647,
    "average_rating": 4.04,
    "average_sentiment_score": 0.7052,
    "sentiment_percent": 71,
    "average_aspect_score": 0.7034,
    "average_review_reliability_score": 0.656,
    "average_pregnancy_fit_score": 0.8515,
    "average_safety_risk_score": 0.2213,
    "safety_risk_percent": 22,
    "average_trust_score": 0.6526,
    "trust_percent": 65,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 15,
        "ratio": 0.441
      },
      {
        "name": "short",
        "count": 11,
        "ratio": 0.324
      },
      {
        "name": "detailed",
        "count": 8,
        "ratio": 0.235
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "1주 사용",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "2주 사용",
          "count": 6,
          "ratio": 0.176
        }
      ],
      "review_focuses": [
        {
          "name": "휴대성",
          "count": 12,
          "ratio": 0.353
        },
        {
          "name": "소화감",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "맛",
          "count": 6,
          "ratio": 0.176
        }
      ],
      "purchase_contexts": [
        {
          "name": "가격 할인 때 구매",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "출산 준비로 미리 구매",
          "count": 6,
          "ratio": 0.176
        },
        {
          "name": "후기 비교 후 구매",
          "count": 6,
          "ratio": 0.176
        }
      ]
    },
    "warning_tags": [
      "소화 불편",
      "향 민감",
      "사용감 개인차",
      "단맛 부담",
      "주수 적합성 확인 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 12,
          "ratio": 0.353
        },
        {
          "name": "전업주부",
          "count": 6,
          "ratio": 0.176
        },
        {
          "name": "전문직/연구직",
          "count": 4,
          "ratio": 0.118
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "서울",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "충북",
          "count": 3,
          "ratio": 0.088
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 14,
          "ratio": 0.412
        },
        {
          "name": "낮음",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "중상",
          "count": 6,
          "ratio": 0.176
        }
      ],
      "care_priorities": [
        {
          "name": "휴대 편의성",
          "count": 15,
          "ratio": 0.441
        },
        {
          "name": "소화 편안함",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "성분 단순함",
          "count": 6,
          "ratio": 0.176
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "7a36c896-a55e-526b-9b9c-c5e1bb4da9a3",
        "persona_summary": "27세 대구 수성구 의료/보건직, 휴대 편의성 중시",
        "title": "기대보다는 아쉬웠습니다",
        "content": "일주일 정도 써보니 소화감을 기준으로 만족도가 갈렸습니다. 입맛이 없을 때 부담 없이 먹을 수 있는지를 봤습니다. 기존 간식보다 낫다는 느낌은 크지 않았습니다. 후기가 좋아서 샀는데 제 입맛에는 향이 강하고 속도 편하지 않았어요. 임산부 제품이라 기대했는데 개인차가 큰 것 같습니다.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "소화감",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "기존 간식"
        },
        "review_detail_level": "detailed",
        "rating": 2.1,
        "trust_percent": 40,
        "recommendation_label": "비추천"
      },
      {
        "review_id": "09ddaada-ebc9-5bfb-89c1-aab0d656fbf9",
        "persona_summary": "30세 서울 마포구 전문직/연구직, 성분 단순함 중시",
        "title": "전문가 확인 후 쓰는 게 좋겠어요",
        "content": "임신 12주에 입맛이 없을 때 간단히 먹기 좋았어요. 하지만 사용 후 불편감이 있어 성분이나 사용 시기를 한 번 더 확인하고 쓰는 게 좋겠다고 느꼈어요.",
        "review_context": {
          "usage_phase": "선물/추천 구매",
          "review_focus": "맛",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "일반 간편식"
        },
        "review_detail_level": "normal",
        "rating": 4.5,
        "trust_percent": 47,
        "recommendation_label": "비추천"
      },
      {
        "review_id": "fb0d4ed0-4101-5c62-a9b5-e89b144ca878",
        "persona_summary": "39세 울산 북구 판매직, 휴대 편의성 중시",
        "title": "괜찮네요",
        "content": "입덧간식 찾다가 샀는데 무난해요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "소화감",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "카페 추천 제품"
        },
        "review_detail_level": "short",
        "rating": 5,
        "trust_percent": 81,
        "recommendation_label": "추천"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "92ae0487-6aa3-58e1-a770-f08d9e184b8c",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "순한 수분충전 파우더",
    "product_category": "식품",
    "subcategory": "수분보충",
    "search_keyword": "임산부 수분보충",
    "target_period": "초기",
    "target_week_range": "1-16",
    "week": [
      1,
      16
    ],
    "fit_reason": "초기 입덧과 수분 섭취 부담을 고려한 제품",
    "review_count": 33,
    "verified_purchase_ratio": 0.758,
    "average_rating": 4.01,
    "average_sentiment_score": 0.6822,
    "sentiment_percent": 68,
    "average_aspect_score": 0.6544,
    "average_review_reliability_score": 0.6538,
    "average_pregnancy_fit_score": 0.9004,
    "average_safety_risk_score": 0.2904,
    "safety_risk_percent": 29,
    "average_trust_score": 0.6139,
    "trust_percent": 61,
    "recommendation_label": "비추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 20,
        "ratio": 0.606
      },
      {
        "name": "short",
        "count": 10,
        "ratio": 0.303
      },
      {
        "name": "detailed",
        "count": 3,
        "ratio": 0.091
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "3일 사용",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "첫 사용",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "2주 사용",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "review_focuses": [
        {
          "name": "소화감",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "휴대성",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "재구매",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "purchase_contexts": [
        {
          "name": "후기 비교 후 구매",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "지인 추천으로 구매",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "기존 제품 대체",
          "count": 6,
          "ratio": 0.182
        }
      ]
    },
    "warning_tags": [
      "소화 불편",
      "향 민감",
      "단맛 부담",
      "성분 확인 필요",
      "전문가 상담 권장"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "서비스직",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "사무직",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "전문직/연구직",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "대구",
          "count": 3,
          "ratio": 0.091
        },
        {
          "name": "부산",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "중하",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "중상",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "care_priorities": [
        {
          "name": "성분 단순함",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "입덧 부담",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "소화 편안함",
          "count": 9,
          "ratio": 0.273
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "ed86ed0a-84a1-5d6a-9a8a-c1a04fff06ff",
        "persona_summary": "34세 부산 기장군 서비스직, 입덧 부담 중시",
        "title": "전문가 확인 후 쓰는 게 좋겠어요",
        "content": "한 달 가까이 써보니 소화감을 기준으로 만족도가 갈렸습니다. 입맛이 없을 때 부담 없이 먹을 수 있는지를 봤습니다. 기존 간식과 비교해도 사용 전 확인할 부분이 있어 보였습니다. 이 제품은 향이 강하지 않아서 출근길에도 부담이 적었습니다. 하지만 사용 후 불편감이 있어 성분이나 사용 시기를 한 번 더 확인하고 쓰는 게 좋겠다고 느꼈어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "소화감",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "기존 간식"
        },
        "review_detail_level": "detailed",
        "rating": 3.6,
        "trust_percent": 48,
        "recommendation_label": "비추천"
      },
      {
        "review_id": "7c880657-b0f8-5020-afa6-eced126d22cf",
        "persona_summary": "31세 전북 전주시 전문직/연구직, 성분 단순함 중시",
        "title": "기대보다는 아쉬웠습니다",
        "content": "후기가 좋아서 샀는데 제 입맛에는 향이 강하고 속도 편하지 않았어요. 임산부 제품이라 기대했는데 개인차가 큰 것 같습니다.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "입덧 부담",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "카페 추천 제품"
        },
        "review_detail_level": "normal",
        "rating": 2.6,
        "trust_percent": 40,
        "recommendation_label": "비추천"
      },
      {
        "review_id": "c1316689-873b-5a3b-a093-7285e43fc2d4",
        "persona_summary": "29세 경기 남양주시 사무직, 성분 단순함 중시",
        "title": "무난해요",
        "content": "괜찮긴 한데 아쉬운 점도 있어요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "소화감",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "기존 간식"
        },
        "review_detail_level": "short",
        "rating": 3.7,
        "trust_percent": 60,
        "recommendation_label": "조건부 추천"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "8a5fe554-6dbe-56c6-bdee-771bab0856ed",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "맘편한 엽산 400",
    "product_category": "영양제",
    "subcategory": "엽산",
    "search_keyword": "임산부 엽산",
    "target_period": "초기",
    "target_week_range": "1-12",
    "week": [
      1,
      12
    ],
    "fit_reason": "임신 초기 엽산 섭취를 고려하는 사용자를 위한 제품",
    "review_count": 34,
    "verified_purchase_ratio": 0.794,
    "average_rating": 3.84,
    "average_sentiment_score": 0.6511,
    "sentiment_percent": 65,
    "average_aspect_score": 0.6327,
    "average_review_reliability_score": 0.6445,
    "average_pregnancy_fit_score": 0.8673,
    "average_safety_risk_score": 0.2461,
    "safety_risk_percent": 25,
    "average_trust_score": 0.6103,
    "trust_percent": 61,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 17,
        "ratio": 0.5
      },
      {
        "name": "short",
        "count": 13,
        "ratio": 0.382
      },
      {
        "name": "detailed",
        "count": 4,
        "ratio": 0.118
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "2주 사용",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "첫 사용",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "3일 사용",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "review_focuses": [
        {
          "name": "복용 편의성",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "속불편",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "가격",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "purchase_contexts": [
        {
          "name": "출산 준비로 미리 구매",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "가격 할인 때 구매",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "지인 추천으로 구매",
          "count": 7,
          "ratio": 0.206
        }
      ]
    },
    "warning_tags": [
      "변비",
      "비린 향",
      "사용감 개인차",
      "불편 경험 다수",
      "속 울렁거림"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 14,
          "ratio": 0.412
        },
        {
          "name": "IT/개발직",
          "count": 4,
          "ratio": 0.118
        },
        {
          "name": "전업주부",
          "count": 3,
          "ratio": 0.088
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 12,
          "ratio": 0.353
        },
        {
          "name": "서울",
          "count": 5,
          "ratio": 0.147
        },
        {
          "name": "인천",
          "count": 4,
          "ratio": 0.118
        }
      ],
      "income_bands": [
        {
          "name": "중하",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "중간",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "낮음",
          "count": 6,
          "ratio": 0.176
        }
      ],
      "care_priorities": [
        {
          "name": "성분 안전성",
          "count": 13,
          "ratio": 0.382
        },
        {
          "name": "복용 편의성",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "전문가 확인 가능성",
          "count": 8,
          "ratio": 0.235
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "b959ee2a-e5f6-56cc-97bd-b90abf86b223",
        "persona_summary": "30세 경기 고양시 일산동구 IT/개발직, 성분 안전성 중시",
        "title": "만족도가 높아요",
        "content": "한 달 가까이 써보니 냄새를 가장 먼저 보게 됐습니다. 성분표와 후기를 먼저 보고 성분 안전성을 확인했습니다. 임신 9주에 초기 영양관리 때문에 찾아봤는데 정제 형태라 챙기기 편했어요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "냄새",
          "purchase_context_type": "가격 할인 때 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.4,
        "trust_percent": 83,
        "recommendation_label": "추천"
      },
      {
        "review_id": "43318f18-85d7-55eb-b1f9-6ddeb73b1988",
        "persona_summary": "34세 경기 부천시 서비스직, 성분 안전성 중시",
        "title": "장점과 단점이 분명해요",
        "content": "임신 11주에 입덧 때문에 찾아봤는데 정제 형태라 챙기기 편했어요. 다만 빈속에 먹으면 속이 조금 불편해서 식후에 먹고 있어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "냄새",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "가루형 영양제"
        },
        "review_detail_level": "normal",
        "rating": 3.5,
        "trust_percent": 63,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "3fbf966b-ccce-5d59-afab-a9a599c6eb78",
        "persona_summary": "31세 인천 서구 전문직/연구직, 복용 편의성 중시",
        "title": "아쉬워요",
        "content": "후기 보고 샀는데 생각보다 불편했습니다.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "복용 편의성",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "short",
        "rating": 2.4,
        "trust_percent": 38,
        "recommendation_label": "비추천"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "1c16bf62-3408-543a-b34d-112b64b2b91f",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "순한 임산부 유산균",
    "product_category": "영양제",
    "subcategory": "유산균",
    "search_keyword": "임산부 유산균",
    "target_period": "초기",
    "target_week_range": "1-12",
    "week": [
      1,
      12
    ],
    "fit_reason": "제품 권장 주수와 차이가 있어 추천 적합도가 낮음",
    "review_count": 33,
    "verified_purchase_ratio": 0.788,
    "average_rating": 3.96,
    "average_sentiment_score": 0.6653,
    "sentiment_percent": 67,
    "average_aspect_score": 0.6704,
    "average_review_reliability_score": 0.6876,
    "average_pregnancy_fit_score": 0.8255,
    "average_safety_risk_score": 0.3033,
    "safety_risk_percent": 30,
    "average_trust_score": 0.5995,
    "trust_percent": 60,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 14,
        "ratio": 0.424
      },
      {
        "name": "short",
        "count": 11,
        "ratio": 0.333
      },
      {
        "name": "detailed",
        "count": 8,
        "ratio": 0.242
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "3일 사용",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "첫 사용",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "1주 사용",
          "count": 8,
          "ratio": 0.242
        }
      ],
      "review_focuses": [
        {
          "name": "성분 확인",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "냄새",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "가격",
          "count": 8,
          "ratio": 0.242
        }
      ],
      "purchase_contexts": [
        {
          "name": "지인 추천으로 구매",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "가격 할인 때 구매",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "기존 제품 대체",
          "count": 5,
          "ratio": 0.152
        }
      ]
    },
    "warning_tags": [
      "속 울렁거림",
      "주수 적합성 확인 필요",
      "비린 향",
      "사용감 개인차",
      "변비"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "전문직/연구직",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "교육직",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "서울",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "전북",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "중하",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "중상",
          "count": 8,
          "ratio": 0.242
        }
      ],
      "care_priorities": [
        {
          "name": "속불편 최소화",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "복용 편의성",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "전문가 확인 가능성",
          "count": 8,
          "ratio": 0.242
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "612b8486-2375-556c-b0f0-36cf53b9ef91",
        "persona_summary": "34세 부산 부산진구 사무직, 복용 편의성 중시",
        "title": "재구매 생각 있습니다",
        "content": "한 달 가까이 써보니 가격을 가장 먼저 보게 됐습니다. 꾸준히 챙겨 먹기 쉬운지를 봤습니다. 알약을 잘 못 삼키는 편인데 이 제품은 복용 부담이 비교적 적었습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "가격",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.7,
        "trust_percent": 79,
        "recommendation_label": "추천"
      },
      {
        "review_id": "c658f47a-05c2-51ef-9b1e-878a587fc204",
        "persona_summary": "26세 서울 마포구 전업주부, 속불편 최소화 중시",
        "title": "만족도가 높아요",
        "content": "임신 12주에 변비 때문에 찾아봤는데 캡슐 형태라 챙기기 편했어요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "복용 편의성",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "병원 추천 제품"
        },
        "review_detail_level": "normal",
        "rating": 4.4,
        "trust_percent": 75,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "ffabb510-766d-57c2-94f1-2f57349f363c",
        "persona_summary": "41세 부산 기장군 서비스직, 전문가 확인 가능성 중시",
        "title": "재구매할 듯",
        "content": "아직까진 불편한 점 없어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "냄새",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "병원 추천 제품"
        },
        "review_detail_level": "short",
        "rating": 4.6,
        "trust_percent": 79,
        "recommendation_label": "추천"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "259de9da-dcdc-564b-bbdf-9a2a06c79dae",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "입덧 비타민B6 구미",
    "product_category": "영양제",
    "subcategory": "비타민B6",
    "search_keyword": "임산부 비타민B6",
    "target_period": "초기",
    "target_week_range": "4-14",
    "week": [
      4,
      14
    ],
    "fit_reason": "초기 입덧 부담과 복용 편의성을 고려하는 사용자를 위한 제품",
    "review_count": 33,
    "verified_purchase_ratio": 0.818,
    "average_rating": 3.93,
    "average_sentiment_score": 0.6858,
    "sentiment_percent": 69,
    "average_aspect_score": 0.6792,
    "average_review_reliability_score": 0.6797,
    "average_pregnancy_fit_score": 0.8145,
    "average_safety_risk_score": 0.3174,
    "safety_risk_percent": 32,
    "average_trust_score": 0.5944,
    "trust_percent": 59,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 16,
        "ratio": 0.485
      },
      {
        "name": "detailed",
        "count": 9,
        "ratio": 0.273
      },
      {
        "name": "short",
        "count": 8,
        "ratio": 0.242
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "2주 사용",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "3일 사용",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "첫 사용",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "review_focuses": [
        {
          "name": "성분 확인",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "속불편",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "가격",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "purchase_contexts": [
        {
          "name": "가격 할인 때 구매",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "후기 비교 후 구매",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "출산 준비로 미리 구매",
          "count": 5,
          "ratio": 0.152
        }
      ]
    },
    "warning_tags": [
      "사용감 개인차",
      "변비",
      "주수 적합성 확인 필요",
      "속 울렁거림",
      "비린 향"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "판매직",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "전문직/연구직",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "서울",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "광주",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "income_bands": [
        {
          "name": "중상",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "중간",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "중하",
          "count": 8,
          "ratio": 0.242
        }
      ],
      "care_priorities": [
        {
          "name": "복용 편의성",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "성분 안전성",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "속불편 최소화",
          "count": 7,
          "ratio": 0.212
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "114b477a-84ac-5efc-adab-f8c7c4cdb4e3",
        "persona_summary": "34세 광주 북구 전문직/연구직, 복용 편의성 중시",
        "title": "좋지만 아쉬운 점도 있어요",
        "content": "재구매하면서는 속불편을 가장 먼저 보게 됐습니다. 성분표와 후기를 먼저 보고 복용 편의성을 확인했습니다. 기존 알약 제품과 비교하면 장단점이 갈리는 편입니다. 임신 13주에 입덧 때문에 찾아봤는데 구미 형태라 챙기기 편했어요. 다만 빈속에 먹으면 속이 조금 불편해서 식후에 먹고 있어요.",
        "review_context": {
          "usage_phase": "재구매 후기",
          "review_focus": "속불편",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "기존 알약 제품"
        },
        "review_detail_level": "detailed",
        "rating": 3.5,
        "trust_percent": 56,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "aa45b2a7-d43c-5b00-a574-cd84082b3ed6",
        "persona_summary": "33세 광주 서구 의료/보건직, 복용 편의성 중시",
        "title": "조금 일찍 산 느낌입니다",
        "content": "제품 자체는 나쁘지 않은데 임신 39주인 지금 쓰기에는 권장 시기와 조금 맞지 않는 느낌이었어요. 나중에 주수가 맞으면 다시 써보려고 합니다.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "가격",
          "purchase_context_type": "가격 할인 때 구매",
          "comparison_target": "병원 추천 제품"
        },
        "review_detail_level": "normal",
        "rating": 3.1,
        "trust_percent": 52,
        "recommendation_label": "비추천"
      },
      {
        "review_id": "e9634b41-9cba-54f6-8fc7-eb91280b4a59",
        "persona_summary": "25세 경기 수원시 영통구 서비스직, 성분 안전성 중시",
        "title": "그냥 그래요",
        "content": "나쁘진 않은데 엄청 좋지도 않아요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "성분 확인",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "가루형 영양제"
        },
        "review_detail_level": "short",
        "rating": 4,
        "trust_percent": 57,
        "recommendation_label": "조건부 추천"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "7043f1ff-112e-5219-badf-6d56e9a184dd",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "U자형 바디필로우",
    "product_category": "용품",
    "subcategory": "수면쿠션",
    "search_keyword": "임산부 바디필로우",
    "target_period": "초기",
    "target_week_range": "10-40",
    "week": [
      10,
      40
    ],
    "fit_reason": "제품 권장 주수와 가까우나 개인 상황 확인이 필요함",
    "review_count": 33,
    "verified_purchase_ratio": 0.727,
    "average_rating": 3.99,
    "average_sentiment_score": 0.6923,
    "sentiment_percent": 69,
    "average_aspect_score": 0.6848,
    "average_review_reliability_score": 0.7097,
    "average_pregnancy_fit_score": 0.8787,
    "average_safety_risk_score": 0.2023,
    "safety_risk_percent": 20,
    "average_trust_score": 0.6633,
    "trust_percent": 66,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 15,
        "ratio": 0.455
      },
      {
        "name": "detailed",
        "count": 9,
        "ratio": 0.273
      },
      {
        "name": "short",
        "count": 9,
        "ratio": 0.273
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "1주 사용",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "3일 사용",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "review_focuses": [
        {
          "name": "착용 안정감",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "사용 편의성",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "이동 중 사용",
          "count": 8,
          "ratio": 0.242
        }
      ],
      "purchase_contexts": [
        {
          "name": "지인 추천으로 구매",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "가격 할인 때 구매",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "후기 비교 후 구매",
          "count": 6,
          "ratio": 0.182
        }
      ]
    },
    "warning_tags": [
      "사용감 개인차",
      "착용 번거로움",
      "고정감 부족",
      "압박감",
      "주수 적합성 확인 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "전문직/연구직",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "서비스직",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "서울",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "인천",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "income_bands": [
        {
          "name": "중하",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "중간",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "낮음",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "care_priorities": [
        {
          "name": "이동 중 사용성",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "사용 편의성",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "착용 안정감",
          "count": 7,
          "ratio": 0.212
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "7718cdaf-803d-57a2-982d-fd3d22e9f64f",
        "persona_summary": "34세 경기 수원시 영통구 의료/보건직, 이동 중 사용성 중시",
        "title": "임신 주수에 잘 맞았어요",
        "content": "며칠 써보니 보관할 때 부피나 정리가 부담스럽지 않은지를 봤습니다. 밖에서도 쓰기 편한지를 봤습니다. 기존 쿠션/밴드보다 보관 면에서는 더 만족스러웠어요. 임신 15주에 밤마다 자세 잡기가 힘들었는데 옆으로 누울 때 안정감이 생겼습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "보관",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "기존 쿠션/밴드"
        },
        "review_detail_level": "detailed",
        "rating": 4.9,
        "trust_percent": 87,
        "recommendation_label": "추천"
      },
      {
        "review_id": "4aa40f73-d1aa-5c4a-b7e3-2592b7b587d5",
        "persona_summary": "38세 경기 수원시 영통구 교육직, 사용 편의성 중시",
        "title": "임신 주수에 잘 맞았어요",
        "content": "임신 37주에 밤마다 자세 잡기가 힘들었는데 옆으로 누울 때 안정감이 생겼습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "착용 안정감",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "기존 쿠션/밴드"
        },
        "review_detail_level": "normal",
        "rating": 4.6,
        "trust_percent": 83,
        "recommendation_label": "추천"
      },
      {
        "review_id": "906e29f6-34c1-5033-8bb9-93297984ff3e",
        "persona_summary": "37세 서울 송파구 IT/개발직, 사용 편의성 중시",
        "title": "재구매는 안 할 듯",
        "content": "개인차가 있겠지만 저는 별로였어요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "이동 중 사용",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "short",
        "rating": 2.5,
        "trust_percent": 43,
        "recommendation_label": "비추천"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "02f8caba-e1f9-5e87-8f0d-5aaf33b25c3b",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "임신 기록 다이어리",
    "product_category": "용품",
    "subcategory": "기록용품",
    "search_keyword": "임신 다이어리",
    "target_period": "초기",
    "target_week_range": "1-40",
    "week": [
      1,
      40
    ],
    "fit_reason": "초기 검진 기록과 준비 사항을 정리하려는 사용자를 위한 용품",
    "review_count": 33,
    "verified_purchase_ratio": 0.848,
    "average_rating": 3.96,
    "average_sentiment_score": 0.6575,
    "sentiment_percent": 66,
    "average_aspect_score": 0.6397,
    "average_review_reliability_score": 0.6792,
    "average_pregnancy_fit_score": 0.9244,
    "average_safety_risk_score": 0.1744,
    "safety_risk_percent": 17,
    "average_trust_score": 0.6593,
    "trust_percent": 66,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 18,
        "ratio": 0.545
      },
      {
        "name": "short",
        "count": 10,
        "ratio": 0.303
      },
      {
        "name": "detailed",
        "count": 5,
        "ratio": 0.152
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "한 달 사용",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "3일 사용",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "review_focuses": [
        {
          "name": "내구성",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "착용 안정감",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "보관",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "purchase_contexts": [
        {
          "name": "지인 추천으로 구매",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "후기 비교 후 구매",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "기존 제품 대체",
          "count": 6,
          "ratio": 0.182
        }
      ]
    },
    "warning_tags": [
      "착용 번거로움",
      "사용감 개인차",
      "고정감 부족",
      "압박감",
      "성분 확인 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "전문직/연구직",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "서비스직",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "서울",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "인천",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "income_bands": [
        {
          "name": "중하",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "중간",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "중상",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "care_priorities": [
        {
          "name": "이동 중 사용성",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "보관 편의성",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "사용 편의성",
          "count": 8,
          "ratio": 0.242
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "a94b6808-3ea0-5db9-90b6-2b98448b4720",
        "persona_summary": "32세 대구 북구 전문직/연구직, 보관 편의성 중시",
        "title": "임신 주수에 잘 맞았어요",
        "content": "재구매하면서는 반복해서 써도 형태가 유지되는지를 봤습니다. 보관할 때 부피와 관리가 부담스럽지 않은지를 봤습니다. 저가형 제품보다 내구성 면에서는 더 만족스러웠어요. 임신 8주에 출산 준비 때문에 구매했는데 사용법이 어렵지 않았어요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "재구매 후기",
          "review_focus": "내구성",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "저가형 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.5,
        "trust_percent": 87,
        "recommendation_label": "추천"
      },
      {
        "review_id": "0129d390-a45c-5790-8360-e08f98925131",
        "persona_summary": "34세 충북 청주시 서비스직, 보관 편의성 중시",
        "title": "만족도가 높아요",
        "content": "임신 22주에 정리 때문에 구매했는데 사용법이 어렵지 않았어요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "재구매 후기",
          "review_focus": "이동 중 사용",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "저가형 제품"
        },
        "review_detail_level": "normal",
        "rating": 4.9,
        "trust_percent": 85,
        "recommendation_label": "추천"
      },
      {
        "review_id": "a9f621f1-a73e-51bb-a332-4cd59421300e",
        "persona_summary": "32세 서울 양천구 사무직, 이동 중 사용성 중시",
        "title": "재구매할 듯",
        "content": "아직까진 불편한 점 없어요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "사용 편의성",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "short",
        "rating": 4.6,
        "trust_percent": 85,
        "recommendation_label": "추천"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "11d78b86-3003-503c-8d41-1836c6041df6",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "입덧 완화 손목밴드",
    "product_category": "용품",
    "subcategory": "입덧밴드",
    "search_keyword": "입덧밴드",
    "target_period": "초기",
    "target_week_range": "4-14",
    "week": [
      4,
      14
    ],
    "fit_reason": "초기 입덧 상황에서 보조적으로 사용하는 용품",
    "review_count": 34,
    "verified_purchase_ratio": 0.882,
    "average_rating": 4.21,
    "average_sentiment_score": 0.7133,
    "sentiment_percent": 71,
    "average_aspect_score": 0.7014,
    "average_review_reliability_score": 0.716,
    "average_pregnancy_fit_score": 0.8884,
    "average_safety_risk_score": 0.2679,
    "safety_risk_percent": 27,
    "average_trust_score": 0.6529,
    "trust_percent": 65,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 17,
        "ratio": 0.5
      },
      {
        "name": "short",
        "count": 9,
        "ratio": 0.265
      },
      {
        "name": "detailed",
        "count": 8,
        "ratio": 0.235
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "1주 사용",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "첫 사용",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "2주 사용",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "review_focuses": [
        {
          "name": "이동 중 사용",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "보관",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "사용 편의성",
          "count": 6,
          "ratio": 0.176
        }
      ],
      "purchase_contexts": [
        {
          "name": "가격 할인 때 구매",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "출산 준비로 미리 구매",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "후기 비교 후 구매",
          "count": 7,
          "ratio": 0.206
        }
      ]
    },
    "warning_tags": [
      "착용 번거로움",
      "고정감 부족",
      "성분 확인 필요",
      "전문가 상담 권장",
      "사용감 개인차"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "전문직/연구직",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "교육직",
          "count": 4,
          "ratio": 0.118
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "대구",
          "count": 6,
          "ratio": 0.176
        },
        {
          "name": "경남",
          "count": 5,
          "ratio": 0.147
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 13,
          "ratio": 0.382
        },
        {
          "name": "중하",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "낮음",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "care_priorities": [
        {
          "name": "착용 안정감",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "사용 편의성",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "보관 편의성",
          "count": 8,
          "ratio": 0.235
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "b905949e-159c-5403-8e25-6a963b9e41bb",
        "persona_summary": "33세 경기 고양시 일산동구 판매직, 사용 편의성 중시",
        "title": "만족도가 높아요",
        "content": "며칠 써보니 보관할 때 부피나 정리가 부담스럽지 않은지를 봤습니다. 설치나 사용이 번거롭지 않은지를 봤습니다. 기존 쿠션/밴드보다 보관 면에서는 더 만족스러웠어요. 임신 6주에 외출 때문에 구매했는데 출근길에 착용하기 어렵지 않았어요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "보관",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "기존 쿠션/밴드"
        },
        "review_detail_level": "detailed",
        "rating": 4.5,
        "trust_percent": 81,
        "recommendation_label": "추천"
      },
      {
        "review_id": "dac52f77-d2f7-5b2b-8ad4-150a971a00e1",
        "persona_summary": "43세 대구 달서구 서비스직, 이동 중 사용성 중시",
        "title": "효과보다 주의점이 더 신경 쓰였어요",
        "content": "2주 정도 써보니 실제로 쓰기 번거롭지 않은지를 봤습니다. 임신 12주에 입덧 때문에 구매했는데 출근길에 착용하기 어렵지 않았어요. 하지만 사용 후 불편감이 있어 착용 방법이나 사용 시기를 한 번 더 확인하고 쓰는 게 좋겠다고 느꼈어요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "사용 편의성",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "normal",
        "rating": 4.5,
        "trust_percent": 52,
        "recommendation_label": "전문가 확인 필요"
      },
      {
        "review_id": "8a8f9604-0446-50ef-ae23-01d28c2ed960",
        "persona_summary": "30세 대구 달서구 전문직/연구직, 착용 안정감 중시",
        "title": "보통입니다",
        "content": "쓸 만한데 재구매는 조금 더 써보고요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "사용 편의성",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "저가형 제품"
        },
        "review_detail_level": "short",
        "rating": 3.8,
        "trust_percent": 58,
        "recommendation_label": "조건부 추천"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "cc2b3dd9-0c56-5fd5-be1a-c1ca72f8513e",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "심리스 임산부 이너웨어",
    "product_category": "의류",
    "subcategory": "이너웨어",
    "search_keyword": "임산부 이너웨어",
    "target_period": "초기",
    "target_week_range": "1-24",
    "week": [
      1,
      24
    ],
    "fit_reason": "초기부터 복부와 가슴 압박을 줄이고 싶은 사용자를 위한 의류",
    "review_count": 33,
    "verified_purchase_ratio": 0.818,
    "average_rating": 4.29,
    "average_sentiment_score": 0.7285,
    "sentiment_percent": 73,
    "average_aspect_score": 0.7476,
    "average_review_reliability_score": 0.7022,
    "average_pregnancy_fit_score": 0.8425,
    "average_safety_risk_score": 0.1286,
    "safety_risk_percent": 13,
    "average_trust_score": 0.722,
    "trust_percent": 72,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 19,
        "ratio": 0.576
      },
      {
        "name": "short",
        "count": 8,
        "ratio": 0.242
      },
      {
        "name": "detailed",
        "count": 6,
        "ratio": 0.182
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "2주 사용",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "3일 사용",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "1주 사용",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "review_focuses": [
        {
          "name": "사이즈",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "출근복 활용",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "복부 압박",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "purchase_contexts": [
        {
          "name": "후기 비교 후 구매",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "출산 준비로 미리 구매",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "기존 제품 대체",
          "count": 6,
          "ratio": 0.182
        }
      ]
    },
    "warning_tags": [
      "사용감 개인차",
      "복부 압박",
      "사이즈 작음",
      "주수 적합성 확인 필요",
      "허벅지 쓸림"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "판매직",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "서비스직",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "서울",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "대전",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 16,
          "ratio": 0.485
        },
        {
          "name": "낮음",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "중하",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "care_priorities": [
        {
          "name": "복부 압박 최소화",
          "count": 13,
          "ratio": 0.394
        },
        {
          "name": "사이즈 여유",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "세탁 내구성",
          "count": 8,
          "ratio": 0.242
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "8cf76a76-11ff-5e4b-ae88-e3b784735987",
        "persona_summary": "36세 충북 제천시 서비스직, 복부 압박 최소화 중시",
        "title": "좋지만 아쉬운 점도 있어요",
        "content": "일주일 정도 써보니 복부 압박을 중심으로 보게 됐습니다. 오래 서 있어도 배가 조이지 않는지를 봤습니다. 임신 7주에 배가 나오기 시작해서 샀는데 복부 압박이 적고 움직이기 편해요. 착용감은 좋은데 세탁 후 밴드가 살짝 늘어나는 느낌은 있어요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "복부 압박",
          "purchase_context_type": "가격 할인 때 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 3.4,
        "trust_percent": 66,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "cb553a2e-f5e0-5243-9807-797101f65dd2",
        "persona_summary": "34세 경기 수원시 영통구 서비스직, 복부 압박 최소화 중시",
        "title": "임신 주수에 잘 맞았어요",
        "content": "재구매하면서는 착용감을 중심으로 보게 됐습니다. 임신 16주에 배가 나오기 시작해서 샀는데 복부 압박이 적고 움직이기 편해요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "재구매 후기",
          "review_focus": "착용감",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "normal",
        "rating": 4.9,
        "trust_percent": 85,
        "recommendation_label": "추천"
      },
      {
        "review_id": "911c127e-2fa9-5a32-a182-b75ef5176478",
        "persona_summary": "25세 서울 양천구 전문직/연구직, 복부 압박 최소화 중시",
        "title": "무난해요",
        "content": "괜찮긴 한데 아쉬운 점도 있어요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "착용감",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "일반 사이즈 옷"
        },
        "review_detail_level": "short",
        "rating": 4.1,
        "trust_percent": 63,
        "recommendation_label": "조건부 추천"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "f55e348d-8dae-54f0-9f53-ba3cd4e4ca76",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "와이어리스 임산부 브라",
    "product_category": "의류",
    "subcategory": "브라",
    "search_keyword": "임산부 브라",
    "target_period": "초기",
    "target_week_range": "1-40",
    "week": [
      1,
      40
    ],
    "fit_reason": "가슴 압박과 착용감을 고려한 제품",
    "review_count": 33,
    "verified_purchase_ratio": 0.788,
    "average_rating": 4.08,
    "average_sentiment_score": 0.7169,
    "sentiment_percent": 72,
    "average_aspect_score": 0.6785,
    "average_review_reliability_score": 0.7156,
    "average_pregnancy_fit_score": 0.9217,
    "average_safety_risk_score": 0.1632,
    "safety_risk_percent": 16,
    "average_trust_score": 0.6947,
    "trust_percent": 69,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 17,
        "ratio": 0.515
      },
      {
        "name": "short",
        "count": 9,
        "ratio": 0.273
      },
      {
        "name": "detailed",
        "count": 7,
        "ratio": 0.212
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "재구매 후기",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "2주 사용",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "review_focuses": [
        {
          "name": "세탁 후 변화",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "사이즈",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "출근복 활용",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "purchase_contexts": [
        {
          "name": "출산 준비로 미리 구매",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "기존 제품 대체",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "가격 할인 때 구매",
          "count": 7,
          "ratio": 0.212
        }
      ]
    },
    "warning_tags": [
      "사용감 개인차",
      "복부 압박",
      "사이즈 작음",
      "허벅지 쓸림",
      "성분 확인 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "서비스직",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "판매직",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "서울",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "충남",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "중하",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "중상",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "care_priorities": [
        {
          "name": "사이즈 여유",
          "count": 13,
          "ratio": 0.394
        },
        {
          "name": "세탁 내구성",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "복부 압박 최소화",
          "count": 6,
          "ratio": 0.182
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "47857bfe-9070-5087-8c10-66313a65d9db",
        "persona_summary": "33세 서울 양천구 전업주부, 세탁 내구성 중시",
        "title": "장점과 단점이 분명해요",
        "content": "처음 써보니 출근복 활용을 중심으로 보게 됐습니다. 오래 입었을 때 불편하지 않은지, 세탁 내구성을 같이 봤습니다. 후기 많은 제품과 비교하면 장단점이 갈리는 편입니다. 임신 3주에 배가 나오기 시작해서 샀는데 복부 압박이 적고 움직이기 편해요. 착용감은 좋은데 세탁 후 밴드가 살짝 늘어나는 느낌은 있어요.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "출근복 활용",
          "purchase_context_type": "가격 할인 때 구매",
          "comparison_target": "후기 많은 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4,
        "trust_percent": 68,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "8976173d-5a8d-5686-b18d-67a71d9bd9a7",
        "persona_summary": "29세 경기 성남시 분당구 서비스직, 사이즈 여유 중시",
        "title": "좋지만 아쉬운 점도 있어요",
        "content": "출근할 때 입어도 티가 많이 나지 않고 소재가 부드러웠습니다. 착용감은 좋은데 세탁 후 밴드가 살짝 늘어나는 느낌은 있어요.",
        "review_context": {
          "usage_phase": "선물/추천 구매",
          "review_focus": "착용감",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "normal",
        "rating": 3.5,
        "trust_percent": 61,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "d6e8b23f-29af-5b6c-b3d7-84c0fb41ea2f",
        "persona_summary": "26세 충북 충주시 사무직, 세탁 내구성 중시",
        "title": "재구매는 안 할 듯",
        "content": "개인차가 있겠지만 저는 별로였어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "출근복 활용",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "일반 사이즈 옷"
        },
        "review_detail_level": "short",
        "rating": 2.1,
        "trust_percent": 40,
        "recommendation_label": "비추천"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "d4aca32a-8b17-5640-9098-55422ff6f138",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "초기 무압박 팬티",
    "product_category": "의류",
    "subcategory": "속옷",
    "search_keyword": "임산부 팬티",
    "target_period": "초기",
    "target_week_range": "1-20",
    "week": [
      1,
      20
    ],
    "fit_reason": "초기 복부 압박을 줄이고 싶은 사용자를 위한 제품",
    "review_count": 34,
    "verified_purchase_ratio": 0.765,
    "average_rating": 3.7,
    "average_sentiment_score": 0.6387,
    "sentiment_percent": 64,
    "average_aspect_score": 0.6409,
    "average_review_reliability_score": 0.6466,
    "average_pregnancy_fit_score": 0.8462,
    "average_safety_risk_score": 0.1848,
    "safety_risk_percent": 18,
    "average_trust_score": 0.627,
    "trust_percent": 63,
    "recommendation_label": "비추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 19,
        "ratio": 0.559
      },
      {
        "name": "short",
        "count": 11,
        "ratio": 0.324
      },
      {
        "name": "detailed",
        "count": 4,
        "ratio": 0.118
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "3일 사용",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "첫 사용",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "1주 사용",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "review_focuses": [
        {
          "name": "사이즈",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "세탁 후 변화",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "복부 압박",
          "count": 8,
          "ratio": 0.235
        }
      ],
      "purchase_contexts": [
        {
          "name": "출산 준비로 미리 구매",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "후기 비교 후 구매",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "지인 추천으로 구매",
          "count": 6,
          "ratio": 0.176
        }
      ]
    },
    "warning_tags": [
      "복부 압박",
      "사용감 개인차",
      "사이즈 작음",
      "불편 경험 다수",
      "허벅지 쓸림"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "교육직",
          "count": 6,
          "ratio": 0.176
        },
        {
          "name": "전업주부",
          "count": 4,
          "ratio": 0.118
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "서울",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "전북",
          "count": 5,
          "ratio": 0.147
        }
      ],
      "income_bands": [
        {
          "name": "중하",
          "count": 14,
          "ratio": 0.412
        },
        {
          "name": "중간",
          "count": 12,
          "ratio": 0.353
        },
        {
          "name": "중상",
          "count": 4,
          "ratio": 0.118
        }
      ],
      "care_priorities": [
        {
          "name": "사이즈 여유",
          "count": 12,
          "ratio": 0.353
        },
        {
          "name": "세탁 내구성",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "복부 압박 최소화",
          "count": 7,
          "ratio": 0.206
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "952f07ad-9e5a-5700-932a-decd7d94a29e",
        "persona_summary": "40세 경기 화성시 사무직, 출근복 활용도 중시",
        "title": "재구매 생각 있습니다",
        "content": "며칠 써보니 세탁 후 변화를 중심으로 보게 됐습니다. 오래 입었을 때 불편하지 않은지, 출근복 활용도를 같이 봤습니다. 후기 많은 제품보다 세탁 후 변화 면에서는 더 만족스러웠어요. 출근할 때 입어도 티가 많이 나지 않고 소재가 부드러웠습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "세탁 후 변화",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "후기 많은 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.6,
        "trust_percent": 88,
        "recommendation_label": "추천"
      },
      {
        "review_id": "28d214b8-a9e7-550b-90fe-d5b74539c661",
        "persona_summary": "36세 서울 송파구 사무직, 복부 압박 최소화 중시",
        "title": "임신 주수에 잘 맞았어요",
        "content": "임신 14주에 배가 나오기 시작해서 샀는데 복부 압박이 적고 움직이기 편해요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "재구매 후기",
          "review_focus": "복부 압박",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "일반 사이즈 옷"
        },
        "review_detail_level": "normal",
        "rating": 4.6,
        "trust_percent": 87,
        "recommendation_label": "추천"
      },
      {
        "review_id": "7d6f40ba-aa86-544e-abb6-98cda91b7c26",
        "persona_summary": "42세 광주 북구 전업주부, 복부 압박 최소화 중시",
        "title": "괜찮네요",
        "content": "속옷 찾다가 샀는데 무난해요.",
        "review_context": {
          "usage_phase": "재구매 후기",
          "review_focus": "복부 압박",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "일반 사이즈 옷"
        },
        "review_detail_level": "short",
        "rating": 4.6,
        "trust_percent": 81,
        "recommendation_label": "추천"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "e5bd62d5-c3ce-5fd8-985e-cf1a9d4e8882",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "수유 준비 보습밤",
    "product_category": "바디케어",
    "subcategory": "보습밤",
    "search_keyword": "수유 준비 크림",
    "target_period": "후기",
    "target_week_range": "32-40",
    "week": [
      32,
      40
    ],
    "fit_reason": "출산 전후 피부 보습을 고려하는 제품",
    "review_count": 33,
    "verified_purchase_ratio": 0.818,
    "average_rating": 4.07,
    "average_sentiment_score": 0.6913,
    "sentiment_percent": 69,
    "average_aspect_score": 0.6805,
    "average_review_reliability_score": 0.7171,
    "average_pregnancy_fit_score": 0.8442,
    "average_safety_risk_score": 0.33,
    "safety_risk_percent": 33,
    "average_trust_score": 0.6044,
    "trust_percent": 60,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 16,
        "ratio": 0.485
      },
      {
        "name": "detailed",
        "count": 10,
        "ratio": 0.303
      },
      {
        "name": "short",
        "count": 7,
        "ratio": 0.212
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "1주 사용",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "한 달 사용",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "review_focuses": [
        {
          "name": "보습감",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "피부 자극",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "향",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "purchase_contexts": [
        {
          "name": "후기 비교 후 구매",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "지인 추천으로 구매",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "가격 할인 때 구매",
          "count": 6,
          "ratio": 0.182
        }
      ]
    },
    "warning_tags": [
      "피부 따가움",
      "가려움",
      "사용감 개인차",
      "성분 확인 필요",
      "전문가 상담 권장"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "판매직",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "IT/개발직",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "서울",
          "count": 4,
          "ratio": 0.121
        },
        {
          "name": "전남",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 13,
          "ratio": 0.394
        },
        {
          "name": "중하",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "낮음",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "care_priorities": [
        {
          "name": "향 자극 최소화",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "성분 안전성",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "피부 자극 여부",
          "count": 7,
          "ratio": 0.212
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "129fcda2-41f3-5ab5-b991-36b43cec21b3",
        "persona_summary": "35세 부산 부산진구 서비스직, 향 자극 최소화 중시",
        "title": "임신 주수에 잘 맞았어요",
        "content": "일주일 정도 써보니 성분을 특히 신경 쓰게 됐습니다. 임신 후 피부 변화가 신경 쓰여 향 자극 최소화를 중시해서 향과 사용감을 꼼꼼히 봤습니다. 임신 40주부터 배가 건조해서 썼는데 발림성이 부드럽고 보습감이 괜찮았어요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "성분",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.4,
        "trust_percent": 76,
        "recommendation_label": "추천"
      },
      {
        "review_id": "3f3dce00-e4bf-5618-8b45-4d41f98e0dff",
        "persona_summary": "40세 경기 성남시 분당구 교육직, 보습 지속력 중시",
        "title": "좋지만 아쉬운 점도 있어요",
        "content": "향이 약한 편이라 냄새에 민감한 시기에도 쓰기 편했습니다. 보습은 좋은데 약간 끈적임이 남아서 밤에만 쓰고 있어요.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "보습감",
          "purchase_context_type": "가격 할인 때 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "normal",
        "rating": 4.1,
        "trust_percent": 64,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "ae5b67cf-7e5f-56ee-ba2a-3d5f5f8604ba",
        "persona_summary": "41세 강원 강릉시 프리랜서, 성분 안전성 중시",
        "title": "아직은 애매해요",
        "content": "지금 주수에는 조금 이른 느낌이에요.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "피부 자극",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "short",
        "rating": 3.5,
        "trust_percent": 53,
        "recommendation_label": "비추천"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "4eb275c3-f960-5850-9b75-126df1808429",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "임산부 무기자차 선크림",
    "product_category": "바디케어",
    "subcategory": "선크림",
    "search_keyword": "임산부 선크림",
    "target_period": "후기",
    "target_week_range": "1-40",
    "week": [
      1,
      40
    ],
    "fit_reason": "성분과 피부 자극을 신경 쓰는 사용자를 위한 제품",
    "review_count": 34,
    "verified_purchase_ratio": 0.882,
    "average_rating": 4.01,
    "average_sentiment_score": 0.6324,
    "sentiment_percent": 63,
    "average_aspect_score": 0.6223,
    "average_review_reliability_score": 0.7427,
    "average_pregnancy_fit_score": 0.929,
    "average_safety_risk_score": 0.339,
    "safety_risk_percent": 34,
    "average_trust_score": 0.5891,
    "trust_percent": 59,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 14,
        "ratio": 0.412
      },
      {
        "name": "detailed",
        "count": 13,
        "ratio": 0.382
      },
      {
        "name": "short",
        "count": 7,
        "ratio": 0.206
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "1주 사용",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "2주 사용",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "한 달 사용",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "review_focuses": [
        {
          "name": "성분",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "피부 자극",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "향",
          "count": 6,
          "ratio": 0.176
        }
      ],
      "purchase_contexts": [
        {
          "name": "후기 비교 후 구매",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "기존 제품 대체",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "지인 추천으로 구매",
          "count": 7,
          "ratio": 0.206
        }
      ]
    },
    "warning_tags": [
      "사용감 개인차",
      "향 자극",
      "가려움",
      "피부 따가움",
      "성분 확인 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "전업주부",
          "count": 6,
          "ratio": 0.176
        },
        {
          "name": "서비스직",
          "count": 4,
          "ratio": 0.118
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 13,
          "ratio": 0.382
        },
        {
          "name": "광주",
          "count": 4,
          "ratio": 0.118
        },
        {
          "name": "인천",
          "count": 3,
          "ratio": 0.088
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 12,
          "ratio": 0.353
        },
        {
          "name": "낮음",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "중상",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "care_priorities": [
        {
          "name": "향 자극 최소화",
          "count": 12,
          "ratio": 0.353
        },
        {
          "name": "성분 안전성",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "보습 지속력",
          "count": 7,
          "ratio": 0.206
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "cb38ccda-1e53-5bf2-8401-3937362b9263",
        "persona_summary": "31세 세종 세종시 전업주부, 향 자극 최소화 중시",
        "title": "재구매는 어려울 것 같아요",
        "content": "일주일 정도 써보니 피부 자극을 특히 신경 쓰게 됐습니다. 임신 후 피부 변화가 신경 쓰여 향 자극 최소화를 중시해서 향과 사용감을 꼼꼼히 봤습니다. 민감성 제품보다 낫다는 느낌은 크지 않았습니다. 피부가 민감한 편인데 바른 뒤 따가움이 있어서 사용을 멈췄습니다. 임산부 제품이라 기대했는데 개인차가 큰 것 같습니다.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "피부 자극",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "민감성 제품"
        },
        "review_detail_level": "detailed",
        "rating": 2.7,
        "trust_percent": 42,
        "recommendation_label": "비추천"
      },
      {
        "review_id": "7433f104-118e-5e01-bcc1-441a26b71991",
        "persona_summary": "28세 광주 서구 사무직, 향 자극 최소화 중시",
        "title": "재구매 생각 있습니다",
        "content": "임신 8주부터 배가 건조해서 썼는데 발림성이 부드럽고 보습감이 괜찮았어요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "피부 자극",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "기존 로션"
        },
        "review_detail_level": "normal",
        "rating": 4.7,
        "trust_percent": 76,
        "recommendation_label": "추천"
      },
      {
        "review_id": "fae3f1c6-3528-5ac3-b1aa-9ace99d775ae",
        "persona_summary": "39세 서울 양천구 교육직, 성분 안전성 중시",
        "title": "확인 필요",
        "content": "쓰고 조금 불편해서 성분 다시 보려고요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "성분",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "민감성 제품"
        },
        "review_detail_level": "short",
        "rating": 3.9,
        "trust_percent": 43,
        "recommendation_label": "전문가 확인 필요"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "4c6e7e77-fea8-5224-bdda-695ab11ffc43",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "출산준비 쿨링 패드",
    "product_category": "바디케어",
    "subcategory": "쿨링패드",
    "search_keyword": "출산 준비 패드",
    "target_period": "후기",
    "target_week_range": "34-40",
    "week": [
      34,
      40
    ],
    "fit_reason": "출산 전후 사용 시기와 성분 확인이 필요한 바디케어 제품",
    "review_count": 33,
    "verified_purchase_ratio": 0.788,
    "average_rating": 3.95,
    "average_sentiment_score": 0.638,
    "sentiment_percent": 64,
    "average_aspect_score": 0.658,
    "average_review_reliability_score": 0.671,
    "average_pregnancy_fit_score": 0.7884,
    "average_safety_risk_score": 0.3656,
    "safety_risk_percent": 37,
    "average_trust_score": 0.556,
    "trust_percent": 56,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 13,
        "ratio": 0.394
      },
      {
        "name": "short",
        "count": 13,
        "ratio": 0.394
      },
      {
        "name": "detailed",
        "count": 7,
        "ratio": 0.212
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "3일 사용",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "첫 사용",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "한 달 사용",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "review_focuses": [
        {
          "name": "성분",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "끈적임",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "보습감",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "purchase_contexts": [
        {
          "name": "지인 추천으로 구매",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "출산 준비로 미리 구매",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "가격 할인 때 구매",
          "count": 5,
          "ratio": 0.152
        }
      ]
    },
    "warning_tags": [
      "향 자극",
      "사용감 개인차",
      "피부 따가움",
      "주수 적합성 확인 필요",
      "성분 확인 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "IT/개발직",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "교육직",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "경기",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "인천",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "중하",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "중상",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "care_priorities": [
        {
          "name": "보습 지속력",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "성분 안전성",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "피부 자극 여부",
          "count": 8,
          "ratio": 0.242
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "ef3ae10b-11c3-5bef-968e-5c8096fbdd06",
        "persona_summary": "32세 충남 천안시 사무직, 보습 지속력 중시",
        "title": "임신 주수에 잘 맞았어요",
        "content": "일주일 정도 써보니 성분을 특히 신경 쓰게 됐습니다. 임신 후 피부 변화가 신경 쓰여 보습 지속력을 중시해서 향과 사용감을 꼼꼼히 봤습니다. 향이 약한 편이라 냄새에 민감한 시기에도 쓰기 편했습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "성분",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.5,
        "trust_percent": 76,
        "recommendation_label": "추천"
      },
      {
        "review_id": "66af9779-6035-5dd5-81c8-813314d14061",
        "persona_summary": "30세 부산 해운대구 서비스직, 보습 지속력 중시",
        "title": "장점과 단점이 분명해요",
        "content": "향이 약한 편이라 냄새에 민감한 시기에도 쓰기 편했습니다. 보습은 좋은데 약간 끈적임이 남아서 밤에만 쓰고 있어요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "끈적임",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "민감성 제품"
        },
        "review_detail_level": "normal",
        "rating": 4,
        "trust_percent": 55,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "2e6a7cd3-c2ff-545f-84a7-d4b59a8e599b",
        "persona_summary": "40세 인천 부평구 판매직, 성분 안전성 중시",
        "title": "나중에 써보려고요",
        "content": "제품은 괜찮아 보이는데 아직 잘 모르겠어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "성분",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "향 있는 제품"
        },
        "review_detail_level": "short",
        "rating": 3.3,
        "trust_percent": 49,
        "recommendation_label": "비추천"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "1d8482ad-422b-5ac9-ab12-635490d9b126",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "산모 준비 곡물죽",
    "product_category": "식품",
    "subcategory": "죽",
    "search_keyword": "출산 준비 식품",
    "target_period": "후기",
    "target_week_range": "32-40",
    "week": [
      32,
      40
    ],
    "fit_reason": "출산 준비 단계의 간편식을 찾는 사용자를 위한 제품",
    "review_count": 33,
    "verified_purchase_ratio": 0.727,
    "average_rating": 4,
    "average_sentiment_score": 0.6612,
    "sentiment_percent": 66,
    "average_aspect_score": 0.6905,
    "average_review_reliability_score": 0.6551,
    "average_pregnancy_fit_score": 0.7955,
    "average_safety_risk_score": 0.2357,
    "safety_risk_percent": 24,
    "average_trust_score": 0.6231,
    "trust_percent": 62,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 24,
        "ratio": 0.727
      },
      {
        "name": "detailed",
        "count": 5,
        "ratio": 0.152
      },
      {
        "name": "short",
        "count": 4,
        "ratio": 0.121
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "3일 사용",
          "count": 14,
          "ratio": 0.424
        },
        {
          "name": "첫 사용",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "1주 사용",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "review_focuses": [
        {
          "name": "소화감",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "맛",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "휴대성",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "purchase_contexts": [
        {
          "name": "기존 제품 대체",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "후기 비교 후 구매",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "가격 할인 때 구매",
          "count": 5,
          "ratio": 0.152
        }
      ]
    },
    "warning_tags": [
      "단맛 부담",
      "사용감 개인차",
      "소화 불편",
      "주수 적합성 확인 필요",
      "향 민감"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "전문직/연구직",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "의료/보건직",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "부산",
          "count": 4,
          "ratio": 0.121
        },
        {
          "name": "충남",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "income_bands": [
        {
          "name": "중하",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "중상",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "중간",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "care_priorities": [
        {
          "name": "소화 편안함",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "입덧 부담",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "성분 단순함",
          "count": 7,
          "ratio": 0.212
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "8a99d017-2be0-59ec-b3b8-1dc6dc7f5fbe",
        "persona_summary": "29세 세종 세종시 사무직, 입덧 부담 중시",
        "title": "재구매 생각 있습니다",
        "content": "며칠 써보니 입덧 부담을 기준으로 만족도가 갈렸습니다. 입맛이 없을 때 부담 없이 먹을 수 있는지를 봤습니다. 카페 추천 제품보다 입덧 부담 면에서는 더 만족스러웠어요. 이 제품은 향이 강하지 않아서 출근길에도 부담이 적었습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "입덧 부담",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "카페 추천 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.7,
        "trust_percent": 82,
        "recommendation_label": "추천"
      },
      {
        "review_id": "3cdb8b91-a264-5692-9b6f-6e7ba7e6a66c",
        "persona_summary": "43세 충남 당진시 IT/개발직, 입덧 부담 중시",
        "title": "효과보다 주의점이 더 신경 쓰였어요",
        "content": "며칠 써보니 입덧 부담을 기준으로 만족도가 갈렸습니다. 임신 35주에 입맛이 없을 때 간단히 먹기 좋았어요. 하지만 사용 후 불편감이 있어 성분이나 사용 시기를 한 번 더 확인하고 쓰는 게 좋겠다고 느꼈어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "입덧 부담",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "기존 간식"
        },
        "review_detail_level": "normal",
        "rating": 4.6,
        "trust_percent": 53,
        "recommendation_label": "비추천"
      },
      {
        "review_id": "be8b3a34-93d9-5811-9b39-24da420231ff",
        "persona_summary": "29세 대전 서구 전업주부, 소화 편안함 중시",
        "title": "보류",
        "content": "주수 맞으면 다시 써보려고요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "소화감",
          "purchase_context_type": "가격 할인 때 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "short",
        "rating": 3.9,
        "trust_percent": 54,
        "recommendation_label": "비추천"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "024d9164-c5ad-507b-afd1-39b25334bbde",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "출산준비 대추칩",
    "product_category": "식품",
    "subcategory": "간식",
    "search_keyword": "임산부 후기 간식",
    "target_period": "후기",
    "target_week_range": "28-40",
    "week": [
      28,
      40
    ],
    "fit_reason": "후기 가벼운 간식을 찾는 사용자를 위한 제품",
    "review_count": 34,
    "verified_purchase_ratio": 0.794,
    "average_rating": 4.06,
    "average_sentiment_score": 0.6752,
    "sentiment_percent": 68,
    "average_aspect_score": 0.6926,
    "average_review_reliability_score": 0.6695,
    "average_pregnancy_fit_score": 0.7883,
    "average_safety_risk_score": 0.2657,
    "safety_risk_percent": 27,
    "average_trust_score": 0.6171,
    "trust_percent": 62,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 13,
        "ratio": 0.382
      },
      {
        "name": "short",
        "count": 11,
        "ratio": 0.324
      },
      {
        "name": "detailed",
        "count": 10,
        "ratio": 0.294
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "3일 사용",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "2주 사용",
          "count": 5,
          "ratio": 0.147
        }
      ],
      "review_focuses": [
        {
          "name": "소화감",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "재구매",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "휴대성",
          "count": 8,
          "ratio": 0.235
        }
      ],
      "purchase_contexts": [
        {
          "name": "출산 준비로 미리 구매",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "기존 제품 대체",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "가격 할인 때 구매",
          "count": 6,
          "ratio": 0.176
        }
      ]
    },
    "warning_tags": [
      "주수 적합성 확인 필요",
      "사용감 개인차",
      "단맛 부담",
      "소화 불편",
      "향 민감"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "전문직/연구직",
          "count": 5,
          "ratio": 0.147
        },
        {
          "name": "서비스직",
          "count": 5,
          "ratio": 0.147
        },
        {
          "name": "사무직",
          "count": 5,
          "ratio": 0.147
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "서울",
          "count": 5,
          "ratio": 0.147
        },
        {
          "name": "경북",
          "count": 4,
          "ratio": 0.118
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 14,
          "ratio": 0.412
        },
        {
          "name": "중하",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "낮음",
          "count": 6,
          "ratio": 0.176
        }
      ],
      "care_priorities": [
        {
          "name": "입덧 부담",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "성분 단순함",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "휴대 편의성",
          "count": 6,
          "ratio": 0.176
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "6194756b-ab57-553a-b2f2-5425dd0c1732",
        "persona_summary": "33세 경남 김해시 자영업, 성분 단순함 중시",
        "title": "만족도가 높아요",
        "content": "2주 정도 써보니 휴대성을 기준으로 만족도가 갈렸습니다. 가격 대비 만족도와 재구매 부담을 같이 봤습니다. 이 제품은 향이 강하지 않아서 출근길에도 부담이 적었습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "휴대성",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.9,
        "trust_percent": 83,
        "recommendation_label": "추천"
      },
      {
        "review_id": "3674e3c7-6652-5872-ac5f-0970c7cb03f8",
        "persona_summary": "34세 인천 연수구 프리랜서, 휴대 편의성 중시",
        "title": "나중에 다시 써보려고요",
        "content": "제품 자체는 나쁘지 않은데 임신 24주인 지금 쓰기에는 권장 시기와 조금 맞지 않는 느낌이었어요. 나중에 주수가 맞으면 다시 써보려고 합니다.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "입덧 부담",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "일반 간편식"
        },
        "review_detail_level": "normal",
        "rating": 3.6,
        "trust_percent": 58,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "2b84c60e-be6b-5e62-9ee7-c716ce425c58",
        "persona_summary": "28세 강원 춘천시 서비스직, 입덧 부담 중시",
        "title": "보류",
        "content": "주수 맞으면 다시 써보려고요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "입덧 부담",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "일반 간편식"
        },
        "review_detail_level": "short",
        "rating": 3.4,
        "trust_percent": 55,
        "recommendation_label": "조건부 추천"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "a2320b69-4854-563b-a0fc-8c232551ccf9",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "출산 전 간편식 세트",
    "product_category": "식품",
    "subcategory": "간편식",
    "search_keyword": "출산 전 간편식",
    "target_period": "후기",
    "target_week_range": "32-40",
    "week": [
      32,
      40
    ],
    "fit_reason": "막달 출산 준비와 산후 식사를 미리 챙기려는 사용자를 위한 식품",
    "review_count": 33,
    "verified_purchase_ratio": 0.697,
    "average_rating": 3.96,
    "average_sentiment_score": 0.6714,
    "sentiment_percent": 67,
    "average_aspect_score": 0.6267,
    "average_review_reliability_score": 0.6642,
    "average_pregnancy_fit_score": 0.9332,
    "average_safety_risk_score": 0.2875,
    "safety_risk_percent": 29,
    "average_trust_score": 0.6088,
    "trust_percent": 61,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 17,
        "ratio": 0.515
      },
      {
        "name": "detailed",
        "count": 11,
        "ratio": 0.333
      },
      {
        "name": "short",
        "count": 5,
        "ratio": 0.152
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "1주 사용",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "2주 사용",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "3일 사용",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "review_focuses": [
        {
          "name": "맛",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "소화감",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "입덧 부담",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "purchase_contexts": [
        {
          "name": "기존 제품 대체",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "필요해서 급히 구매",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "지인 추천으로 구매",
          "count": 5,
          "ratio": 0.152
        }
      ]
    },
    "warning_tags": [
      "사용감 개인차",
      "단맛 부담",
      "향 민감",
      "소화 불편",
      "성분 확인 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "판매직",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "사무직",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "전문직/연구직",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "경기",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "부산",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "중하",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "낮음",
          "count": 8,
          "ratio": 0.242
        }
      ],
      "care_priorities": [
        {
          "name": "성분 단순함",
          "count": 13,
          "ratio": 0.394
        },
        {
          "name": "입덧 부담",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "소화 편안함",
          "count": 7,
          "ratio": 0.212
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "6ce8a7d1-36e9-5309-afd2-2d69f86b8849",
        "persona_summary": "32세 서울 강남구 전업주부, 입덧 부담 중시",
        "title": "장점과 단점이 분명해요",
        "content": "며칠 써보니 휴대성을 기준으로 만족도가 갈렸습니다. 입맛이 없을 때 부담 없이 먹을 수 있는지를 봤습니다. 일반 간편식과 비교하면 장단점이 갈리는 편입니다. 이 제품은 향이 강하지 않아서 출근길에도 부담이 적었습니다. 단맛이 조금 강해서 매일 먹기보다는 가끔 먹게 됩니다.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "휴대성",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "일반 간편식"
        },
        "review_detail_level": "detailed",
        "rating": 3.8,
        "trust_percent": 63,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "71162a9c-b834-5024-8707-9cc48e792528",
        "persona_summary": "43세 서울 강남구 전문직/연구직, 입덧 부담 중시",
        "title": "좋지만 아쉬운 점도 있어요",
        "content": "며칠 써보니 맛을 기준으로 만족도가 갈렸습니다. 이 제품은 향이 강하지 않아서 출근길에도 부담이 적었습니다. 단맛이 조금 강해서 매일 먹기보다는 가끔 먹게 됩니다.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "맛",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "normal",
        "rating": 3.8,
        "trust_percent": 65,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "785921bf-c7aa-59f5-b1eb-44ce42bdc180",
        "persona_summary": "36세 서울 노원구 전문직/연구직, 성분 단순함 중시",
        "title": "재구매할 듯",
        "content": "아직까진 불편한 점 없어요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "맛",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "일반 간편식"
        },
        "review_detail_level": "short",
        "rating": 4.8,
        "trust_percent": 80,
        "recommendation_label": "추천"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "7f3d8ccd-f634-5fe6-9e65-81762eee12df",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "산후 오메가 밸런스",
    "product_category": "영양제",
    "subcategory": "오메가3",
    "search_keyword": "임산부 오메가3",
    "target_period": "후기",
    "target_week_range": "28-40",
    "week": [
      28,
      40
    ],
    "fit_reason": "후기와 출산 준비 단계에서 성분 확인이 필요한 영양제",
    "review_count": 34,
    "verified_purchase_ratio": 0.794,
    "average_rating": 3.99,
    "average_sentiment_score": 0.6544,
    "sentiment_percent": 65,
    "average_aspect_score": 0.6647,
    "average_review_reliability_score": 0.6773,
    "average_pregnancy_fit_score": 0.8627,
    "average_safety_risk_score": 0.3903,
    "safety_risk_percent": 39,
    "average_trust_score": 0.5637,
    "trust_percent": 56,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 13,
        "ratio": 0.382
      },
      {
        "name": "detailed",
        "count": 12,
        "ratio": 0.353
      },
      {
        "name": "short",
        "count": 9,
        "ratio": 0.265
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "1주 사용",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "3일 사용",
          "count": 6,
          "ratio": 0.176
        }
      ],
      "review_focuses": [
        {
          "name": "냄새",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "가격",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "성분 확인",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "purchase_contexts": [
        {
          "name": "출산 준비로 미리 구매",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "필요해서 급히 구매",
          "count": 6,
          "ratio": 0.176
        },
        {
          "name": "가격 할인 때 구매",
          "count": 6,
          "ratio": 0.176
        }
      ]
    },
    "warning_tags": [
      "변비",
      "속 울렁거림",
      "사용감 개인차",
      "비린 향",
      "불편 경험 다수"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 6,
          "ratio": 0.176
        },
        {
          "name": "전문직/연구직",
          "count": 5,
          "ratio": 0.147
        },
        {
          "name": "판매직",
          "count": 4,
          "ratio": 0.118
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "부산",
          "count": 6,
          "ratio": 0.176
        },
        {
          "name": "대전",
          "count": 4,
          "ratio": 0.118
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 17,
          "ratio": 0.5
        },
        {
          "name": "중하",
          "count": 6,
          "ratio": 0.176
        },
        {
          "name": "중상",
          "count": 6,
          "ratio": 0.176
        }
      ],
      "care_priorities": [
        {
          "name": "복용 편의성",
          "count": 15,
          "ratio": 0.441
        },
        {
          "name": "전문가 확인 가능성",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "속불편 최소화",
          "count": 7,
          "ratio": 0.206
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "bb98c1b2-8b89-5843-84b1-c205d013530a",
        "persona_summary": "33세 대전 유성구 전문직/연구직, 성분 안전성 중시",
        "title": "효과보다 주의점이 더 신경 쓰였어요",
        "content": "며칠 써보니 성분 확인을 가장 먼저 보게 됐습니다. 성분표와 후기를 먼저 보고 성분 안전성을 확인했습니다. 기존 알약 제품과 비교해도 사용 전 확인할 부분이 있어 보였습니다. 임신 32주에 캡슐 냄새 때문에 찾아봤는데 캡슐 형태라 챙기기 편했어요. 하지만 사용 후 불편감이 있어 성분이나 사용 시기를 한 번 더 확인하고 쓰는 게 좋겠다고 느꼈어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "성분 확인",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "기존 알약 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.2,
        "trust_percent": 40,
        "recommendation_label": "전문가 확인 필요"
      },
      {
        "review_id": "bc39353c-20a7-5011-a9b3-d8a2d41de230",
        "persona_summary": "32세 부산 기장군 전문직/연구직, 복용 편의성 중시",
        "title": "좋지만 아쉬운 점도 있어요",
        "content": "임신 31주에 출산 준비 때문에 찾아봤는데 캡슐 형태라 챙기기 편했어요. 다만 빈속에 먹으면 속이 조금 불편해서 식후에 먹고 있어요.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "가격",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "기존 알약 제품"
        },
        "review_detail_level": "normal",
        "rating": 4.2,
        "trust_percent": 54,
        "recommendation_label": "비추천"
      },
      {
        "review_id": "3177b224-7199-5fcb-b4a8-b9abd13be222",
        "persona_summary": "41세 경기 성남시 분당구 자영업, 복용 편의성 중시",
        "title": "저한텐 별로",
        "content": "기대했는데 저한테는 잘 안 맞았어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "속불편",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "기존 알약 제품"
        },
        "review_detail_level": "short",
        "rating": 2.1,
        "trust_percent": 36,
        "recommendation_label": "비추천"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "e2541235-7a80-51fb-9685-d91d817251e8",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "마더 종합비타민 후기",
    "product_category": "영양제",
    "subcategory": "종합비타민",
    "search_keyword": "임산부 종합비타민",
    "target_period": "후기",
    "target_week_range": "28-40",
    "week": [
      28,
      40
    ],
    "fit_reason": "제품 권장 주수와 가까우나 개인 상황 확인이 필요함",
    "review_count": 33,
    "verified_purchase_ratio": 0.818,
    "average_rating": 3.87,
    "average_sentiment_score": 0.6254,
    "sentiment_percent": 63,
    "average_aspect_score": 0.6456,
    "average_review_reliability_score": 0.6526,
    "average_pregnancy_fit_score": 0.8402,
    "average_safety_risk_score": 0.3568,
    "safety_risk_percent": 36,
    "average_trust_score": 0.5593,
    "trust_percent": 56,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 16,
        "ratio": 0.485
      },
      {
        "name": "short",
        "count": 12,
        "ratio": 0.364
      },
      {
        "name": "detailed",
        "count": 5,
        "ratio": 0.152
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "3일 사용",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "1주 사용",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "첫 사용",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "review_focuses": [
        {
          "name": "냄새",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "복용 편의성",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "속불편",
          "count": 8,
          "ratio": 0.242
        }
      ],
      "purchase_contexts": [
        {
          "name": "필요해서 급히 구매",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "기존 제품 대체",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "지인 추천으로 구매",
          "count": 6,
          "ratio": 0.182
        }
      ]
    },
    "warning_tags": [
      "속 울렁거림",
      "변비",
      "불편 경험 다수",
      "주수 적합성 확인 필요",
      "비린 향"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "전문직/연구직",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "서비스직",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "경기",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "부산",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "income_bands": [
        {
          "name": "낮음",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "중간",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "높음",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "care_priorities": [
        {
          "name": "복용 편의성",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "전문가 확인 가능성",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "속불편 최소화",
          "count": 8,
          "ratio": 0.242
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "a9d243ab-896b-54b3-8a38-39a40bb96342",
        "persona_summary": "28세 경기 수원시 영통구 사무직, 전문가 확인 가능성 중시",
        "title": "효과보다 주의점이 더 신경 쓰였어요",
        "content": "2주 정도 써보니 성분 확인을 가장 먼저 보게 됐습니다. 꾸준히 챙겨 먹기 쉬운지, 전문가 확인 가능성을 같이 봤습니다. 기존 알약 제품과 비교해도 사용 전 확인할 부분이 있어 보였습니다. 임신 31주에 후기 영양관리 때문에 찾아봤는데 정제 형태라 챙기기 편했어요. 하지만 사용 후 불편감이 있어 성분이나 사용 시기를 한 번 더 확인하고 쓰는 게 좋겠다고 느꼈어요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "성분 확인",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "기존 알약 제품"
        },
        "review_detail_level": "detailed",
        "rating": 3.7,
        "trust_percent": 41,
        "recommendation_label": "전문가 확인 필요"
      },
      {
        "review_id": "e7805152-6f27-5b3c-bd9f-e4367d1fbf77",
        "persona_summary": "30세 서울 마포구 의료/보건직, 성분 안전성 중시",
        "title": "재구매 생각 있습니다",
        "content": "한 달 가까이 써보니 속불편을 가장 먼저 보게 됐습니다. 임신 38주에 알약 크기 때문에 찾아봤는데 정제 형태라 챙기기 편했어요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "속불편",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "기존 알약 제품"
        },
        "review_detail_level": "normal",
        "rating": 4.7,
        "trust_percent": 76,
        "recommendation_label": "추천"
      },
      {
        "review_id": "0106aa70-7183-5526-a7f2-3d962c911696",
        "persona_summary": "41세 서울 송파구 판매직, 복용 편의성 중시",
        "title": "재구매할 듯",
        "content": "아직까진 불편한 점 없어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "냄새",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "short",
        "rating": 4.3,
        "trust_percent": 77,
        "recommendation_label": "추천"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "1570bd3f-1b60-5fc3-a46f-a33b76f59460",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "출산준비 철분 플러스",
    "product_category": "영양제",
    "subcategory": "철분",
    "search_keyword": "임산부 후기 철분",
    "target_period": "후기",
    "target_week_range": "28-40",
    "week": [
      28,
      40
    ],
    "fit_reason": "후기와 출산 준비 단계에서 철분 관리를 고려하는 제품",
    "review_count": 33,
    "verified_purchase_ratio": 0.758,
    "average_rating": 4.03,
    "average_sentiment_score": 0.6306,
    "sentiment_percent": 63,
    "average_aspect_score": 0.6296,
    "average_review_reliability_score": 0.6903,
    "average_pregnancy_fit_score": 0.8895,
    "average_safety_risk_score": 0.4194,
    "safety_risk_percent": 42,
    "average_trust_score": 0.5454,
    "trust_percent": 55,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 14,
        "ratio": 0.424
      },
      {
        "name": "short",
        "count": 14,
        "ratio": 0.424
      },
      {
        "name": "detailed",
        "count": 5,
        "ratio": 0.152
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "3일 사용",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "2주 사용",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "첫 사용",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "review_focuses": [
        {
          "name": "냄새",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "가격",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "성분 확인",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "purchase_contexts": [
        {
          "name": "출산 준비로 미리 구매",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "지인 추천으로 구매",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "기존 제품 대체",
          "count": 5,
          "ratio": 0.152
        }
      ]
    },
    "warning_tags": [
      "속 울렁거림",
      "변비",
      "사용감 개인차",
      "비린 향",
      "성분 확인 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "서비스직",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "판매직",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "서울",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "인천",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "중상",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "낮음",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "care_priorities": [
        {
          "name": "전문가 확인 가능성",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "복용 편의성",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "속불편 최소화",
          "count": 8,
          "ratio": 0.242
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "2de56a76-cf7e-530f-8277-17f35ca6c996",
        "persona_summary": "35세 경기 남양주시 의료/보건직, 복용 편의성 중시",
        "title": "만족도가 높아요",
        "content": "2주 정도 써보니 냄새를 가장 먼저 보게 됐습니다. 꾸준히 챙겨 먹기 쉬운지를 봤습니다. 임신 29주에 캡슐 냄새 때문에 찾아봤는데 캡슐 형태라 챙기기 편했어요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "냄새",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.8,
        "trust_percent": 75,
        "recommendation_label": "추천"
      },
      {
        "review_id": "dc2b893a-4e94-5a92-a65c-4b5b6291a0ab",
        "persona_summary": "34세 인천 부평구 사무직, 전문가 확인 가능성 중시",
        "title": "재구매 생각 있습니다",
        "content": "재구매하면서는 냄새를 가장 먼저 보게 됐습니다. 알약을 잘 못 삼키는 편인데 이 제품은 복용 부담이 비교적 적었습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "재구매 후기",
          "review_focus": "냄새",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "normal",
        "rating": 4.8,
        "trust_percent": 79,
        "recommendation_label": "추천"
      },
      {
        "review_id": "55a3435f-b10d-591c-836f-efe4898540d4",
        "persona_summary": "31세 제주 제주시 서비스직, 성분 안전성 중시",
        "title": "아쉬워요",
        "content": "후기 보고 샀는데 생각보다 불편했습니다.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "속불편",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "가루형 영양제"
        },
        "review_detail_level": "short",
        "rating": 2.9,
        "trust_percent": 38,
        "recommendation_label": "비추천"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "a78b17b2-74f2-5ce0-a656-fc79cb9a57f3",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "출산가방 정리 파우치",
    "product_category": "용품",
    "subcategory": "출산준비용품",
    "search_keyword": "출산가방",
    "target_period": "후기",
    "target_week_range": "32-40",
    "week": [
      32,
      40
    ],
    "fit_reason": "막달 출산 준비물을 정리하려는 사용자를 위한 용품",
    "review_count": 33,
    "verified_purchase_ratio": 0.758,
    "average_rating": 3.95,
    "average_sentiment_score": 0.6597,
    "sentiment_percent": 66,
    "average_aspect_score": 0.6815,
    "average_review_reliability_score": 0.6959,
    "average_pregnancy_fit_score": 0.8202,
    "average_safety_risk_score": 0.1581,
    "safety_risk_percent": 16,
    "average_trust_score": 0.6636,
    "trust_percent": 66,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 18,
        "ratio": 0.545
      },
      {
        "name": "detailed",
        "count": 10,
        "ratio": 0.303
      },
      {
        "name": "short",
        "count": 5,
        "ratio": 0.152
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "1주 사용",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "3일 사용",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "review_focuses": [
        {
          "name": "사용 편의성",
          "count": 14,
          "ratio": 0.424
        },
        {
          "name": "보관",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "착용 안정감",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "purchase_contexts": [
        {
          "name": "지인 추천으로 구매",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "가격 할인 때 구매",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "필요해서 급히 구매",
          "count": 5,
          "ratio": 0.152
        }
      ]
    },
    "warning_tags": [
      "사용감 개인차",
      "압박감",
      "고정감 부족",
      "착용 번거로움",
      "주수 적합성 확인 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "자영업",
          "count": 4,
          "ratio": 0.121
        },
        {
          "name": "전문직/연구직",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "부산",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "경기",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "중하",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "낮음",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "care_priorities": [
        {
          "name": "보관 편의성",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "사용 편의성",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "이동 중 사용성",
          "count": 8,
          "ratio": 0.242
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "8cbf6e71-5e65-5076-bc56-5cc709d36eb5",
        "persona_summary": "35세 전북 전주시 사무직, 이동 중 사용성 중시",
        "title": "만족도가 높아요",
        "content": "한 달 가까이 써보니 반복해서 써도 형태가 유지되는지를 봤습니다. 몸에 부담을 덜어주는지, 이동 중 사용성을 같이 봤습니다. 후기 많은 제품보다 내구성 면에서는 더 만족스러웠어요. 임신 39주에 출산가방을 준비하면서 작은 물건을 나누어 담기 편했습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "내구성",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "후기 많은 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.7,
        "trust_percent": 83,
        "recommendation_label": "추천"
      },
      {
        "review_id": "2bbfe5ba-d5f8-5233-8ba0-82f4bca1e374",
        "persona_summary": "25세 대구 수성구 전업주부, 사용 편의성 중시",
        "title": "장점과 단점이 분명해요",
        "content": "임신 37주에 출산가방을 준비하면서 작은 물건을 나누어 담기 편했습니다. 수납은 편하지만 지퍼가 조금 뻑뻑해서 급하게 열 때는 불편했습니다.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "보관",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "기존 쿠션/밴드"
        },
        "review_detail_level": "normal",
        "rating": 4,
        "trust_percent": 71,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "79602642-7fe4-5d35-bc83-10bac5ca7af0",
        "persona_summary": "33세 서울 강남구 전문직/연구직, 보관 편의성 중시",
        "title": "그냥 그래요",
        "content": "나쁘진 않은데 엄청 좋지도 않아요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "착용 안정감",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "후기 많은 제품"
        },
        "review_detail_level": "short",
        "rating": 3.9,
        "trust_percent": 63,
        "recommendation_label": "조건부 추천"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "d0b189d5-ac61-5ce6-b07b-667f2f0027ef",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "수유 준비 소품 키트",
    "product_category": "용품",
    "subcategory": "수유준비용품",
    "search_keyword": "수유 준비 키트",
    "target_period": "후기",
    "target_week_range": "32-40",
    "week": [
      32,
      40
    ],
    "fit_reason": "출산 전 수유 관련 소품을 미리 정리하려는 사용자를 위한 용품",
    "review_count": 33,
    "verified_purchase_ratio": 0.727,
    "average_rating": 4.08,
    "average_sentiment_score": 0.685,
    "sentiment_percent": 68,
    "average_aspect_score": 0.6695,
    "average_review_reliability_score": 0.7216,
    "average_pregnancy_fit_score": 0.8332,
    "average_safety_risk_score": 0.2233,
    "safety_risk_percent": 22,
    "average_trust_score": 0.6471,
    "trust_percent": 65,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 19,
        "ratio": 0.576
      },
      {
        "name": "detailed",
        "count": 8,
        "ratio": 0.242
      },
      {
        "name": "short",
        "count": 6,
        "ratio": 0.182
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "1주 사용",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "3일 사용",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "2주 사용",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "review_focuses": [
        {
          "name": "내구성",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "착용 안정감",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "이동 중 사용",
          "count": 7,
          "ratio": 0.212
        }
      ],
      "purchase_contexts": [
        {
          "name": "후기 비교 후 구매",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "가격 할인 때 구매",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "필요해서 급히 구매",
          "count": 5,
          "ratio": 0.152
        }
      ]
    },
    "warning_tags": [
      "고정감 부족",
      "압박감",
      "성분 확인 필요",
      "전문가 상담 권장",
      "착용 번거로움"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "서비스직",
          "count": 5,
          "ratio": 0.152
        },
        {
          "name": "전문직/연구직",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "전북",
          "count": 4,
          "ratio": 0.121
        },
        {
          "name": "부산",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 14,
          "ratio": 0.424
        },
        {
          "name": "중하",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "높음",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "care_priorities": [
        {
          "name": "보관 편의성",
          "count": 14,
          "ratio": 0.424
        },
        {
          "name": "착용 안정감",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "이동 중 사용성",
          "count": 6,
          "ratio": 0.182
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "3236655f-6732-5de5-8911-d6efd37a68e2",
        "persona_summary": "39세 경기 화성시 사무직, 보관 편의성 중시",
        "title": "나중에 다시 써보려고요",
        "content": "며칠 써보니 보관할 때 부피나 정리가 부담스럽지 않은지를 봤습니다. 보관할 때 부피와 관리가 부담스럽지 않은지를 봤습니다. 제품 자체는 나쁘지 않은데 임신 8주인 지금 쓰기에는 권장 시기와 조금 맞지 않는 느낌이었어요. 나중에 주수가 맞으면 다시 써보려고 합니다.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "보관",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4,
        "trust_percent": 63,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "cba339bb-eba0-515b-8f50-3b71ddf5fa6b",
        "persona_summary": "42세 부산 부산진구 교육직, 보관 편의성 중시",
        "title": "임신 주수에 잘 맞았어요",
        "content": "재구매하면서는 외출 중에도 쓰기 편한지를 봤습니다. 임신 33주에 수유 준비 때문에 구매했는데 사용법이 어렵지 않았어요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "재구매 후기",
          "review_focus": "이동 중 사용",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "기존 쿠션/밴드"
        },
        "review_detail_level": "normal",
        "rating": 4.7,
        "trust_percent": 86,
        "recommendation_label": "추천"
      },
      {
        "review_id": "c9327ed8-d097-5289-b3d3-0a89bde3969c",
        "persona_summary": "34세 서울 강남구 서비스직, 보관 편의성 중시",
        "title": "좋아요",
        "content": "생각보다 괜찮아요. 잘 쓰고 있습니다.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "착용 안정감",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "저가형 제품"
        },
        "review_detail_level": "short",
        "rating": 4.3,
        "trust_percent": 82,
        "recommendation_label": "추천"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "d1bd1153-7520-5e17-b1ef-feb5b0034d32",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "C형 수유쿠션",
    "product_category": "용품",
    "subcategory": "수유쿠션",
    "search_keyword": "수유쿠션",
    "target_period": "후기",
    "target_week_range": "28-40",
    "week": [
      28,
      40
    ],
    "fit_reason": "출산 후 수유 준비를 고려해 후기부터 준비하는 용품",
    "review_count": 34,
    "verified_purchase_ratio": 0.676,
    "average_rating": 3.96,
    "average_sentiment_score": 0.6646,
    "sentiment_percent": 66,
    "average_aspect_score": 0.6374,
    "average_review_reliability_score": 0.705,
    "average_pregnancy_fit_score": 0.8676,
    "average_safety_risk_score": 0.2664,
    "safety_risk_percent": 27,
    "average_trust_score": 0.6162,
    "trust_percent": 62,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 20,
        "ratio": 0.588
      },
      {
        "name": "detailed",
        "count": 7,
        "ratio": 0.206
      },
      {
        "name": "short",
        "count": 7,
        "ratio": 0.206
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "한 달 사용",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "2주 사용",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "review_focuses": [
        {
          "name": "보관",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "이동 중 사용",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "사용 편의성",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "purchase_contexts": [
        {
          "name": "출산 준비로 미리 구매",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "후기 비교 후 구매",
          "count": 7,
          "ratio": 0.206
        },
        {
          "name": "지인 추천으로 구매",
          "count": 7,
          "ratio": 0.206
        }
      ]
    },
    "warning_tags": [
      "압박감",
      "착용 번거로움",
      "사용감 개인차",
      "고정감 부족",
      "성분 확인 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "전문직/연구직",
          "count": 6,
          "ratio": 0.176
        },
        {
          "name": "프리랜서",
          "count": 5,
          "ratio": 0.147
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "경남",
          "count": 4,
          "ratio": 0.118
        },
        {
          "name": "충남",
          "count": 3,
          "ratio": 0.088
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 12,
          "ratio": 0.353
        },
        {
          "name": "중상",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "낮음",
          "count": 5,
          "ratio": 0.147
        }
      ],
      "care_priorities": [
        {
          "name": "보관 편의성",
          "count": 13,
          "ratio": 0.382
        },
        {
          "name": "사용 편의성",
          "count": 12,
          "ratio": 0.353
        },
        {
          "name": "착용 안정감",
          "count": 5,
          "ratio": 0.147
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "1a3129ec-43ee-5234-a5ad-ad09cf9272be",
        "persona_summary": "32세 경기 화성시 교육직, 보관 편의성 중시",
        "title": "좋지만 아쉬운 점도 있어요",
        "content": "2주 정도 써보니 외출 중에도 쓰기 편한지를 봤습니다. 밖에서도 쓰기 편한지, 보관 편의성을 같이 봤습니다. 기존 쿠션/밴드와 비교하면 장단점이 갈리는 편입니다. 출산 준비용으로 미리 샀는데 쿠션감이 안정적이고 커버 분리도 편했습니다. 쿠션감은 좋은데 부피가 커서 보관 공간이 조금 필요합니다.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "이동 중 사용",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "기존 쿠션/밴드"
        },
        "review_detail_level": "detailed",
        "rating": 3.5,
        "trust_percent": 62,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "da6846ae-41c8-531f-842e-bf764c957198",
        "persona_summary": "32세 경기 성남시 분당구 사무직, 착용 안정감 중시",
        "title": "조금 일찍 산 느낌입니다",
        "content": "제품 자체는 나쁘지 않은데 임신 21주인 지금 쓰기에는 권장 시기와 조금 맞지 않는 느낌이었어요. 나중에 주수가 맞으면 다시 써보려고 합니다.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "보관",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "normal",
        "rating": 3.2,
        "trust_percent": 57,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "ff60f109-579f-5bb1-887e-b2ae5bc2af07",
        "persona_summary": "38세 충북 청주시 전문직/연구직, 이동 중 사용성 중시",
        "title": "아쉬워요",
        "content": "후기 보고 샀는데 생각보다 불편했습니다.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "사용 편의성",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "기존 쿠션/밴드"
        },
        "review_detail_level": "short",
        "rating": 2.3,
        "trust_percent": 39,
        "recommendation_label": "비추천"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "f957ea6d-8eb1-5397-a512-ea7a7f5ff933",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "수유 겸용 브라",
    "product_category": "의류",
    "subcategory": "수유브라",
    "search_keyword": "수유브라",
    "target_period": "후기",
    "target_week_range": "28-40",
    "week": [
      28,
      40
    ],
    "fit_reason": "출산 준비와 후기 착용감을 고려한 제품",
    "review_count": 34,
    "verified_purchase_ratio": 0.735,
    "average_rating": 4.09,
    "average_sentiment_score": 0.6842,
    "sentiment_percent": 68,
    "average_aspect_score": 0.69,
    "average_review_reliability_score": 0.6679,
    "average_pregnancy_fit_score": 0.8294,
    "average_safety_risk_score": 0.161,
    "safety_risk_percent": 16,
    "average_trust_score": 0.6725,
    "trust_percent": 67,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 13,
        "ratio": 0.382
      },
      {
        "name": "short",
        "count": 12,
        "ratio": 0.353
      },
      {
        "name": "detailed",
        "count": 9,
        "ratio": 0.265
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "3일 사용",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "한 달 사용",
          "count": 6,
          "ratio": 0.176
        }
      ],
      "review_focuses": [
        {
          "name": "출근복 활용",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "착용감",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "복부 압박",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "purchase_contexts": [
        {
          "name": "지인 추천으로 구매",
          "count": 6,
          "ratio": 0.176
        },
        {
          "name": "후기 비교 후 구매",
          "count": 6,
          "ratio": 0.176
        },
        {
          "name": "출산 준비로 미리 구매",
          "count": 6,
          "ratio": 0.176
        }
      ]
    },
    "warning_tags": [
      "사이즈 작음",
      "허벅지 쓸림",
      "주수 적합성 확인 필요",
      "복부 압박",
      "사용감 개인차"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "서비스직",
          "count": 5,
          "ratio": 0.147
        },
        {
          "name": "IT/개발직",
          "count": 4,
          "ratio": 0.118
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "서울",
          "count": 8,
          "ratio": 0.235
        },
        {
          "name": "부산",
          "count": 3,
          "ratio": 0.088
        }
      ],
      "income_bands": [
        {
          "name": "중상",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "낮음",
          "count": 10,
          "ratio": 0.294
        },
        {
          "name": "중간",
          "count": 7,
          "ratio": 0.206
        }
      ],
      "care_priorities": [
        {
          "name": "복부 압박 최소화",
          "count": 11,
          "ratio": 0.324
        },
        {
          "name": "세탁 내구성",
          "count": 9,
          "ratio": 0.265
        },
        {
          "name": "출근복 활용도",
          "count": 7,
          "ratio": 0.206
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "9c730ac5-1efa-515d-bd55-1bffc7502b1e",
        "persona_summary": "39세 인천 연수구 전문직/연구직, 복부 압박 최소화 중시",
        "title": "재구매 생각 있습니다",
        "content": "2주 정도 써보니 착용감을 중심으로 보게 됐습니다. 오래 입었을 때 불편하지 않은지, 복부 압박 최소화를 같이 봤습니다. 임신 35주에 배가 나오기 시작해서 샀는데 복부 압박이 적고 움직이기 편해요. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "착용감",
          "purchase_context_type": "지인 추천으로 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "detailed",
        "rating": 4.7,
        "trust_percent": 82,
        "recommendation_label": "추천"
      },
      {
        "review_id": "18182e03-69e9-51c3-854e-bebb2119d47d",
        "persona_summary": "38세 경기 고양시 일산동구 사무직, 복부 압박 최소화 중시",
        "title": "상황에 따라 추천",
        "content": "임신 36주에 배가 나오기 시작해서 샀는데 복부 압박이 적고 움직이기 편해요. 착용감은 좋은데 세탁 후 밴드가 살짝 늘어나는 느낌은 있어요.",
        "review_context": {
          "usage_phase": "2주 사용",
          "review_focus": "착용감",
          "purchase_context_type": "가격 할인 때 구매",
          "comparison_target": "기존 임부복"
        },
        "review_detail_level": "normal",
        "rating": 4.2,
        "trust_percent": 68,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "d58f5014-39a4-519b-9c56-be175b46b75b",
        "persona_summary": "34세 충남 당진시 사무직, 사이즈 여유 중시",
        "title": "그냥 그래요",
        "content": "나쁘진 않은데 엄청 좋지도 않아요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "복부 압박",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "첫 구매 제품"
        },
        "review_detail_level": "short",
        "rating": 4.2,
        "trust_percent": 64,
        "recommendation_label": "조건부 추천"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "e146d099-7112-51aa-bd35-228b140afb43",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "막달 편한 원피스",
    "product_category": "의류",
    "subcategory": "원피스",
    "search_keyword": "임산부 원피스",
    "target_period": "후기",
    "target_week_range": "28-40",
    "week": [
      28,
      40
    ],
    "fit_reason": "후기 복부 압박을 줄이고 싶은 사용자를 위한 의류",
    "review_count": 33,
    "verified_purchase_ratio": 0.697,
    "average_rating": 3.87,
    "average_sentiment_score": 0.6603,
    "sentiment_percent": 66,
    "average_aspect_score": 0.6578,
    "average_review_reliability_score": 0.6956,
    "average_pregnancy_fit_score": 0.8487,
    "average_safety_risk_score": 0.1857,
    "safety_risk_percent": 19,
    "average_trust_score": 0.6472,
    "trust_percent": 65,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 21,
        "ratio": 0.636
      },
      {
        "name": "detailed",
        "count": 8,
        "ratio": 0.242
      },
      {
        "name": "short",
        "count": 4,
        "ratio": 0.121
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "1주 사용",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "첫 사용",
          "count": 10,
          "ratio": 0.303
        },
        {
          "name": "재구매 후기",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "review_focuses": [
        {
          "name": "사이즈",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "출근복 활용",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "복부 압박",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "purchase_contexts": [
        {
          "name": "필요해서 급히 구매",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "지인 추천으로 구매",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "후기 비교 후 구매",
          "count": 5,
          "ratio": 0.152
        }
      ]
    },
    "warning_tags": [
      "사이즈 작음",
      "복부 압박",
      "사용감 개인차",
      "허벅지 쓸림",
      "불편 경험 다수"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "전업주부",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "교육직",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 12,
          "ratio": 0.364
        },
        {
          "name": "서울",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "부산",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 15,
          "ratio": 0.455
        },
        {
          "name": "중상",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "중하",
          "count": 5,
          "ratio": 0.152
        }
      ],
      "care_priorities": [
        {
          "name": "세탁 내구성",
          "count": 14,
          "ratio": 0.424
        },
        {
          "name": "복부 압박 최소화",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "사이즈 여유",
          "count": 6,
          "ratio": 0.182
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "350864a7-d330-5e4c-bab2-052098cc66d6",
        "persona_summary": "33세 경기 화성시 전문직/연구직, 복부 압박 최소화 중시",
        "title": "기대보다는 아쉬웠습니다",
        "content": "처음 써보니 착용감을 중심으로 보게 됐습니다. 오래 입었을 때 불편하지 않은지, 복부 압박 최소화를 같이 봤습니다. 일반 사이즈 옷보다 낫다는 느낌은 크지 않았습니다. 사이즈표를 보고 샀는데 배 부분이 생각보다 조여서 오래 입기 어려웠어요. 임산부 제품이라 기대했는데 개인차가 큰 것 같습니다.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "착용감",
          "purchase_context_type": "후기 비교 후 구매",
          "comparison_target": "일반 사이즈 옷"
        },
        "review_detail_level": "detailed",
        "rating": 3,
        "trust_percent": 46,
        "recommendation_label": "비추천"
      },
      {
        "review_id": "e7355740-9b3c-513f-9930-41539cfd3cc0",
        "persona_summary": "42세 서울 관악구 자영업, 사이즈 여유 중시",
        "title": "재구매 생각 있습니다",
        "content": "출근할 때 입어도 티가 많이 나지 않고 소재가 부드러웠습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "1주 사용",
          "review_focus": "사이즈",
          "purchase_context_type": "가격 할인 때 구매",
          "comparison_target": "후기 많은 제품"
        },
        "review_detail_level": "normal",
        "rating": 4.3,
        "trust_percent": 82,
        "recommendation_label": "추천"
      },
      {
        "review_id": "e4b6ad92-32b8-5319-a162-e167a70c9ccf",
        "persona_summary": "31세 서울 강남구 교육직, 세탁 내구성 중시",
        "title": "보류",
        "content": "주수 맞으면 다시 써보려고요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "복부 압박",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "일반 사이즈 옷"
        },
        "review_detail_level": "short",
        "rating": 3,
        "trust_percent": 55,
        "recommendation_label": "조건부 추천"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "82a64025-125e-563e-b38c-4bbc7fed044f",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "산전검진 원피스 가운",
    "product_category": "의류",
    "subcategory": "검진복",
    "search_keyword": "임산부 검진복",
    "target_period": "후기",
    "target_week_range": "28-40",
    "week": [
      28,
      40
    ],
    "fit_reason": "제품 권장 주수와 차이가 있어 추천 적합도가 낮음",
    "review_count": 33,
    "verified_purchase_ratio": 0.727,
    "average_rating": 3.85,
    "average_sentiment_score": 0.6339,
    "sentiment_percent": 63,
    "average_aspect_score": 0.6208,
    "average_review_reliability_score": 0.6798,
    "average_pregnancy_fit_score": 0.8441,
    "average_safety_risk_score": 0.2259,
    "safety_risk_percent": 23,
    "average_trust_score": 0.6143,
    "trust_percent": 61,
    "recommendation_label": "비추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 22,
        "ratio": 0.667
      },
      {
        "name": "detailed",
        "count": 6,
        "ratio": 0.182
      },
      {
        "name": "short",
        "count": 5,
        "ratio": 0.152
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 14,
          "ratio": 0.424
        },
        {
          "name": "3일 사용",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "2주 사용",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "review_focuses": [
        {
          "name": "출근복 활용",
          "count": 13,
          "ratio": 0.394
        },
        {
          "name": "사이즈",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "복부 압박",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "purchase_contexts": [
        {
          "name": "필요해서 급히 구매",
          "count": 7,
          "ratio": 0.212
        },
        {
          "name": "후기 비교 후 구매",
          "count": 6,
          "ratio": 0.182
        },
        {
          "name": "출산 준비로 미리 구매",
          "count": 6,
          "ratio": 0.182
        }
      ]
    },
    "warning_tags": [
      "허벅지 쓸림",
      "사이즈 작음",
      "복부 압박",
      "성분 확인 필요",
      "전문가 상담 권장"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 15,
          "ratio": 0.455
        },
        {
          "name": "프리랜서",
          "count": 4,
          "ratio": 0.121
        },
        {
          "name": "의료/보건직",
          "count": 3,
          "ratio": 0.091
        }
      ],
      "regions": [
        {
          "name": "경기",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "서울",
          "count": 8,
          "ratio": 0.242
        },
        {
          "name": "인천",
          "count": 6,
          "ratio": 0.182
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 13,
          "ratio": 0.394
        },
        {
          "name": "중상",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "중하",
          "count": 4,
          "ratio": 0.121
        }
      ],
      "care_priorities": [
        {
          "name": "세탁 내구성",
          "count": 11,
          "ratio": 0.333
        },
        {
          "name": "출근복 활용도",
          "count": 9,
          "ratio": 0.273
        },
        {
          "name": "사이즈 여유",
          "count": 7,
          "ratio": 0.212
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "23a0df3f-d492-5b97-b172-f1d457be256b",
        "persona_summary": "28세 경기 남양주시 사무직, 세탁 내구성 중시",
        "title": "만족도가 높아요",
        "content": "한 달 가까이 써보니 출근복 활용을 중심으로 보게 됐습니다. 출근할 때 입어도 무난한지를 봤습니다. 기존 임부복보다 출근복 활용 면에서는 더 만족스러웠어요. 출근할 때 입어도 티가 많이 나지 않고 소재가 부드러웠습니다. 불편한 점이 거의 없어서 같은 주수 분들에게 추천하고 싶어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "출근복 활용",
          "purchase_context_type": "필요해서 급히 구매",
          "comparison_target": "기존 임부복"
        },
        "review_detail_level": "detailed",
        "rating": 4.9,
        "trust_percent": 86,
        "recommendation_label": "추천"
      },
      {
        "review_id": "414010bc-9146-55a4-be04-ba727e08ff2e",
        "persona_summary": "37세 경기 부천시 프리랜서, 세탁 내구성 중시",
        "title": "상황에 따라 추천",
        "content": "임신 35주에 배가 나오기 시작해서 샀는데 복부 압박이 적고 움직이기 편해요. 착용감은 좋은데 세탁 후 밴드가 살짝 늘어나는 느낌은 있어요.",
        "review_context": {
          "usage_phase": "3일 사용",
          "review_focus": "착용감",
          "purchase_context_type": "기존 제품 대체",
          "comparison_target": "일반 사이즈 옷"
        },
        "review_detail_level": "normal",
        "rating": 3.9,
        "trust_percent": 65,
        "recommendation_label": "조건부 추천"
      },
      {
        "review_id": "ef33124d-b281-5229-858d-45405a976dc2",
        "persona_summary": "37세 전북 군산시 자영업, 복부 압박 최소화 중시",
        "title": "나중에 써보려고요",
        "content": "제품은 괜찮아 보이는데 아직 잘 모르겠어요.",
        "review_context": {
          "usage_phase": "첫 사용",
          "review_focus": "출근복 활용",
          "purchase_context_type": "출산 준비로 미리 구매",
          "comparison_target": "일반 사이즈 옷"
        },
        "review_detail_level": "short",
        "rating": 3.3,
        "trust_percent": 63,
        "recommendation_label": "조건부 추천"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "5b016f2b-4c0b-4c0a-bb1b-23b6a914d77c",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "산후 탈모 완화 샴푸",
    "product_category": "바디케어",
    "subcategory": "탈모샴푸",
    "search_keyword": "산후 탈모 샴푸",
    "target_period": "산후",
    "target_week_range": "41-52",
    "week": [
      41,
      52
    ],
    "fit_reason": "출산 후 호르몬 변화로 인한 탈모에 대응하는 두피 강화 샴푸",
    "review_count": 79,
    "verified_purchase_ratio": 0.727,
    "average_rating": 4.2,
    "average_sentiment_score": 0.74,
    "sentiment_percent": 74,
    "average_aspect_score": 0.82,
    "average_review_reliability_score": 0.84,
    "average_pregnancy_fit_score": 0.86,
    "average_safety_risk_score": 0.1,
    "safety_risk_percent": 10,
    "average_trust_score": 0.76,
    "trust_percent": 76,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 40,
        "ratio": 0.5
      },
      {
        "name": "short",
        "count": 21,
        "ratio": 0.27
      },
      {
        "name": "detailed",
        "count": 18,
        "ratio": 0.23
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 28,
          "ratio": 0.35
        },
        {
          "name": "1주 사용",
          "count": 24,
          "ratio": 0.3
        },
        {
          "name": "한 달 사용",
          "count": 16,
          "ratio": 0.2
        }
      ],
      "review_focuses": [
        {
          "name": "사용감",
          "count": 30,
          "ratio": 0.38
        },
        {
          "name": "효과",
          "count": 24,
          "ratio": 0.3
        },
        {
          "name": "성분 안전성",
          "count": 17,
          "ratio": 0.22
        }
      ],
      "purchase_contexts": [
        {
          "name": "산후 회복 목적",
          "count": 36,
          "ratio": 0.45
        },
        {
          "name": "지인 추천",
          "count": 24,
          "ratio": 0.3
        },
        {
          "name": "수유 준비",
          "count": 16,
          "ratio": 0.2
        }
      ]
    },
    "warning_tags": [
      "향 민감도 개인차"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 25,
          "ratio": 0.32
        },
        {
          "name": "전문직/연구직",
          "count": 19,
          "ratio": 0.24
        },
        {
          "name": "전업주부",
          "count": 22,
          "ratio": 0.28
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 22,
          "ratio": 0.28
        },
        {
          "name": "경기",
          "count": 28,
          "ratio": 0.35
        },
        {
          "name": "인천",
          "count": 8,
          "ratio": 0.1
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 40,
          "ratio": 0.5
        },
        {
          "name": "높음",
          "count": 24,
          "ratio": 0.3
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "668a24e1-7a8e-4919-96b8-9b8ca7fdb8c0",
        "persona_summary": "32세 서울 직장맘, 산후 탈모 경험자",
        "title": "출산 3개월째, 탈모 줄었어요",
        "content": "호르몬 탈모로 심하게 빠졌는데 2달 쓰니 확실히 덜 빠지는 느낌이에요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.4,
        "trust_percent": 74,
        "sentiment_label": "긍정"
      },
      {
        "review_id": "cedd2806-fe2e-41a2-b3a9-13adfec18031",
        "persona_summary": "29세 경기, 완모 중",
        "title": "향이 좀 강해요",
        "content": "효과는 있는데 향이 강해서 수유 중엔 조심했어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 3.8,
        "trust_percent": 73,
        "sentiment_label": "중립"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "9c4d8c7d-81d8-4e8e-a53d-bb1d7eb19b0d",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "산후 복대 골반 밴드",
    "product_category": "바디케어",
    "subcategory": "복대",
    "search_keyword": "산후 복대 골반교정",
    "target_period": "산후",
    "target_week_range": "41-52",
    "week": [
      41,
      52
    ],
    "fit_reason": "출산 직후 벌어진 골반과 복부를 감싸 회복을 돕는 의료용 밴드",
    "review_count": 59,
    "verified_purchase_ratio": 0.657,
    "average_rating": 4.5,
    "average_sentiment_score": 0.8,
    "sentiment_percent": 80,
    "average_aspect_score": 0.87,
    "average_review_reliability_score": 0.89,
    "average_pregnancy_fit_score": 0.91,
    "average_safety_risk_score": 0.08,
    "safety_risk_percent": 8,
    "average_trust_score": 0.82,
    "trust_percent": 82,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 30,
        "ratio": 0.5
      },
      {
        "name": "short",
        "count": 16,
        "ratio": 0.27
      },
      {
        "name": "detailed",
        "count": 14,
        "ratio": 0.23
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 21,
          "ratio": 0.35
        },
        {
          "name": "1주 사용",
          "count": 18,
          "ratio": 0.3
        },
        {
          "name": "한 달 사용",
          "count": 12,
          "ratio": 0.2
        }
      ],
      "review_focuses": [
        {
          "name": "사용감",
          "count": 22,
          "ratio": 0.38
        },
        {
          "name": "효과",
          "count": 18,
          "ratio": 0.3
        },
        {
          "name": "성분 안전성",
          "count": 13,
          "ratio": 0.22
        }
      ],
      "purchase_contexts": [
        {
          "name": "산후 회복 목적",
          "count": 27,
          "ratio": 0.45
        },
        {
          "name": "지인 추천",
          "count": 18,
          "ratio": 0.3
        },
        {
          "name": "수유 준비",
          "count": 12,
          "ratio": 0.2
        }
      ]
    },
    "warning_tags": [
      "사이즈 선택 주의"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 19,
          "ratio": 0.32
        },
        {
          "name": "전문직/연구직",
          "count": 14,
          "ratio": 0.24
        },
        {
          "name": "전업주부",
          "count": 17,
          "ratio": 0.28
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 17,
          "ratio": 0.28
        },
        {
          "name": "경기",
          "count": 21,
          "ratio": 0.35
        },
        {
          "name": "인천",
          "count": 6,
          "ratio": 0.1
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 30,
          "ratio": 0.5
        },
        {
          "name": "높음",
          "count": 18,
          "ratio": 0.3
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "8c41018c-c4f5-4f50-8457-ab60ed9feabc",
        "persona_summary": "34세 경기 고양, 제왕절개 산모",
        "title": "제왕절개 후 필수품이에요",
        "content": "제왕절개 후 움직일 때 배를 잡아줘서 정말 도움됐어요. 2개 샀어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.7,
        "trust_percent": 81,
        "sentiment_label": "긍정"
      },
      {
        "review_id": "a8e1f378-4d2e-4201-8e6c-5d274b681d80",
        "persona_summary": "31세 서울, 자연분만",
        "title": "자연분만도 좋아요",
        "content": "골반이 빠르게 좁아지는 느낌이에요. 산후조리원에서도 계속 착용했어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.3,
        "trust_percent": 78,
        "sentiment_label": "긍정"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "d0038d4d-c243-4ee0-a4dc-a7eaaaabf0b7",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "유두크림 모유수유 케어",
    "product_category": "바디케어",
    "subcategory": "수유케어",
    "search_keyword": "수유 유두크림",
    "target_period": "산후",
    "target_week_range": "41-52",
    "week": [
      41,
      52
    ],
    "fit_reason": "모유수유 초기 유두 갈라짐과 통증을 완화하는 라놀린 성분 크림",
    "review_count": 77,
    "verified_purchase_ratio": 0.769,
    "average_rating": 4.4,
    "average_sentiment_score": 0.78,
    "sentiment_percent": 78,
    "average_aspect_score": 0.84,
    "average_review_reliability_score": 0.86,
    "average_pregnancy_fit_score": 0.88,
    "average_safety_risk_score": 0.06,
    "safety_risk_percent": 6,
    "average_trust_score": 0.8,
    "trust_percent": 80,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 38,
        "ratio": 0.5
      },
      {
        "name": "short",
        "count": 21,
        "ratio": 0.27
      },
      {
        "name": "detailed",
        "count": 18,
        "ratio": 0.23
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 27,
          "ratio": 0.35
        },
        {
          "name": "1주 사용",
          "count": 23,
          "ratio": 0.3
        },
        {
          "name": "한 달 사용",
          "count": 15,
          "ratio": 0.2
        }
      ],
      "review_focuses": [
        {
          "name": "사용감",
          "count": 29,
          "ratio": 0.38
        },
        {
          "name": "효과",
          "count": 23,
          "ratio": 0.3
        },
        {
          "name": "성분 안전성",
          "count": 17,
          "ratio": 0.22
        }
      ],
      "purchase_contexts": [
        {
          "name": "산후 회복 목적",
          "count": 35,
          "ratio": 0.45
        },
        {
          "name": "지인 추천",
          "count": 23,
          "ratio": 0.3
        },
        {
          "name": "수유 준비",
          "count": 15,
          "ratio": 0.2
        }
      ]
    },
    "warning_tags": [
      "수유 전 닦아내기 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 25,
          "ratio": 0.32
        },
        {
          "name": "전문직/연구직",
          "count": 18,
          "ratio": 0.24
        },
        {
          "name": "전업주부",
          "count": 22,
          "ratio": 0.28
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 22,
          "ratio": 0.28
        },
        {
          "name": "경기",
          "count": 27,
          "ratio": 0.35
        },
        {
          "name": "인천",
          "count": 8,
          "ratio": 0.1
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 38,
          "ratio": 0.5
        },
        {
          "name": "높음",
          "count": 23,
          "ratio": 0.3
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "ed0d9c9a-294a-4a52-ace6-c000895db6db",
        "persona_summary": "30세 인천, 완모 준비 중",
        "title": "완모맘 필수템",
        "content": "수유 초기 트러블 없이 잘 넘어갈 수 있었어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.6,
        "trust_percent": 72,
        "sentiment_label": "긍정"
      },
      {
        "review_id": "955e68b1-b98c-4c27-8561-b7665de5e745",
        "persona_summary": "28세 서울, 초보맘",
        "title": "수유 전에 꼭 닦아야해요",
        "content": "아기 입에 닿지 않도록 주의해야 한다는 점 참고하세요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.1,
        "trust_percent": 79,
        "sentiment_label": "긍정"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "ea0dbb46-66c0-4904-86c2-ef17c07514d4",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "산후 미역국 키트",
    "product_category": "식품",
    "subcategory": "산후식품",
    "search_keyword": "산후 미역국 간편",
    "target_period": "산후",
    "target_week_range": "41-52",
    "week": [
      41,
      52
    ],
    "fit_reason": "요오드·철분이 풍부한 국내산 미역으로 구성된 산후 회복 식품",
    "review_count": 90,
    "verified_purchase_ratio": 0.676,
    "average_rating": 4.3,
    "average_sentiment_score": 0.76,
    "sentiment_percent": 76,
    "average_aspect_score": 0.86,
    "average_review_reliability_score": 0.88,
    "average_pregnancy_fit_score": 0.9,
    "average_safety_risk_score": 0.05,
    "safety_risk_percent": 5,
    "average_trust_score": 0.78,
    "trust_percent": 78,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 45,
        "ratio": 0.5
      },
      {
        "name": "short",
        "count": 24,
        "ratio": 0.27
      },
      {
        "name": "detailed",
        "count": 21,
        "ratio": 0.23
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 31,
          "ratio": 0.35
        },
        {
          "name": "1주 사용",
          "count": 27,
          "ratio": 0.3
        },
        {
          "name": "한 달 사용",
          "count": 18,
          "ratio": 0.2
        }
      ],
      "review_focuses": [
        {
          "name": "사용감",
          "count": 34,
          "ratio": 0.38
        },
        {
          "name": "효과",
          "count": 27,
          "ratio": 0.3
        },
        {
          "name": "성분 안전성",
          "count": 20,
          "ratio": 0.22
        }
      ],
      "purchase_contexts": [
        {
          "name": "산후 회복 목적",
          "count": 40,
          "ratio": 0.45
        },
        {
          "name": "지인 추천",
          "count": 27,
          "ratio": 0.3
        },
        {
          "name": "수유 준비",
          "count": 18,
          "ratio": 0.2
        }
      ]
    },
    "warning_tags": [
      "나트륨 주의"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 29,
          "ratio": 0.32
        },
        {
          "name": "전문직/연구직",
          "count": 22,
          "ratio": 0.24
        },
        {
          "name": "전업주부",
          "count": 25,
          "ratio": 0.28
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 25,
          "ratio": 0.28
        },
        {
          "name": "경기",
          "count": 31,
          "ratio": 0.35
        },
        {
          "name": "인천",
          "count": 9,
          "ratio": 0.1
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 45,
          "ratio": 0.5
        },
        {
          "name": "높음",
          "count": 27,
          "ratio": 0.3
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "c517f5da-81ae-4d7e-b96b-eb072146ac4f",
        "persona_summary": "33세 대전, 산후조리원 퇴소 후",
        "title": "산후조리원 퇴소 후 바로 써요",
        "content": "간편하게 끓여 먹을 수 있어서 혼자 조리할 때도 편해요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.5,
        "trust_percent": 75,
        "sentiment_label": "긍정"
      },
      {
        "review_id": "d67dba6b-4261-4737-be74-481b5dbaf508",
        "persona_summary": "29세 경기 수원",
        "title": "맛은 보통",
        "content": "편리함은 최고인데 직접 끓인 것보다 맛은 좀 달려요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 3.9,
        "trust_percent": 73,
        "sentiment_label": "중립"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "5acf1f5f-f700-4ca3-af43-680678813105",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "수유 쿠키 귀리 간식",
    "product_category": "식품",
    "subcategory": "수유간식",
    "search_keyword": "수유 간식 모유량 증가",
    "target_period": "산후",
    "target_week_range": "41-52",
    "week": [
      41,
      52
    ],
    "fit_reason": "귀리·호로파 성분으로 모유 분비를 돕는 수유 전용 간식",
    "review_count": 77,
    "verified_purchase_ratio": 0.861,
    "average_rating": 4.0,
    "average_sentiment_score": 0.68,
    "sentiment_percent": 68,
    "average_aspect_score": 0.78,
    "average_review_reliability_score": 0.8,
    "average_pregnancy_fit_score": 0.82,
    "average_safety_risk_score": 0.12,
    "safety_risk_percent": 12,
    "average_trust_score": 0.69,
    "trust_percent": 69,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 38,
        "ratio": 0.5
      },
      {
        "name": "short",
        "count": 21,
        "ratio": 0.27
      },
      {
        "name": "detailed",
        "count": 18,
        "ratio": 0.23
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 27,
          "ratio": 0.35
        },
        {
          "name": "1주 사용",
          "count": 23,
          "ratio": 0.3
        },
        {
          "name": "한 달 사용",
          "count": 15,
          "ratio": 0.2
        }
      ],
      "review_focuses": [
        {
          "name": "사용감",
          "count": 29,
          "ratio": 0.38
        },
        {
          "name": "효과",
          "count": 23,
          "ratio": 0.3
        },
        {
          "name": "성분 안전성",
          "count": 17,
          "ratio": 0.22
        }
      ],
      "purchase_contexts": [
        {
          "name": "산후 회복 목적",
          "count": 35,
          "ratio": 0.45
        },
        {
          "name": "지인 추천",
          "count": 23,
          "ratio": 0.3
        },
        {
          "name": "수유 준비",
          "count": 15,
          "ratio": 0.2
        }
      ]
    },
    "warning_tags": [
      "개인마다 효과 차이 큼",
      "글루텐 주의"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 25,
          "ratio": 0.32
        },
        {
          "name": "전문직/연구직",
          "count": 18,
          "ratio": 0.24
        },
        {
          "name": "전업주부",
          "count": 22,
          "ratio": 0.28
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 22,
          "ratio": 0.28
        },
        {
          "name": "경기",
          "count": 27,
          "ratio": 0.35
        },
        {
          "name": "인천",
          "count": 8,
          "ratio": 0.1
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 38,
          "ratio": 0.5
        },
        {
          "name": "높음",
          "count": 23,
          "ratio": 0.3
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "d3810d01-ab97-4d77-aa57-50c660937ef6",
        "persona_summary": "31세 서울 마포, 혼합수유",
        "title": "효과 있는 사람 많아요",
        "content": "먹고 나서 모유량이 좀 늘었어요. 효과는 개인차가 있는 것 같아요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.2,
        "trust_percent": 66,
        "sentiment_label": "긍정"
      },
      {
        "review_id": "d0aedef2-1ddf-4d4f-bb8e-3b93691ddee3",
        "persona_summary": "30세 경기 성남",
        "title": "맛있어서 과식 조심",
        "content": "맛있어서 하루에 많이 먹게 돼요. 칼로리 주의하세요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 3.8,
        "trust_percent": 67,
        "sentiment_label": "중립"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "27bb8da2-934e-4ea9-87ca-ed4b6fbffaf2",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "산후 한방차 세트",
    "product_category": "식품",
    "subcategory": "산후차",
    "search_keyword": "산후 회복 한방차",
    "target_period": "산후",
    "target_week_range": "41-52",
    "week": [
      41,
      52
    ],
    "fit_reason": "쑥·당귀·황기 성분으로 어혈 제거와 기력 회복을 돕는 산후 전용 차",
    "review_count": 87,
    "verified_purchase_ratio": 0.805,
    "average_rating": 4.1,
    "average_sentiment_score": 0.7,
    "sentiment_percent": 70,
    "average_aspect_score": 0.8,
    "average_review_reliability_score": 0.82,
    "average_pregnancy_fit_score": 0.84,
    "average_safety_risk_score": 0.14,
    "safety_risk_percent": 14,
    "average_trust_score": 0.71,
    "trust_percent": 71,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 44,
        "ratio": 0.5
      },
      {
        "name": "short",
        "count": 23,
        "ratio": 0.27
      },
      {
        "name": "detailed",
        "count": 20,
        "ratio": 0.23
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 30,
          "ratio": 0.35
        },
        {
          "name": "1주 사용",
          "count": 26,
          "ratio": 0.3
        },
        {
          "name": "한 달 사용",
          "count": 17,
          "ratio": 0.2
        }
      ],
      "review_focuses": [
        {
          "name": "사용감",
          "count": 33,
          "ratio": 0.38
        },
        {
          "name": "효과",
          "count": 26,
          "ratio": 0.3
        },
        {
          "name": "성분 안전성",
          "count": 19,
          "ratio": 0.22
        }
      ],
      "purchase_contexts": [
        {
          "name": "산후 회복 목적",
          "count": 39,
          "ratio": 0.45
        },
        {
          "name": "지인 추천",
          "count": 26,
          "ratio": 0.3
        },
        {
          "name": "수유 준비",
          "count": 17,
          "ratio": 0.2
        }
      ]
    },
    "warning_tags": [
      "수유 중 성분 확인 필요",
      "알레르기 체크"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 28,
          "ratio": 0.32
        },
        {
          "name": "전문직/연구직",
          "count": 21,
          "ratio": 0.24
        },
        {
          "name": "전업주부",
          "count": 24,
          "ratio": 0.28
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 24,
          "ratio": 0.28
        },
        {
          "name": "경기",
          "count": 30,
          "ratio": 0.35
        },
        {
          "name": "인천",
          "count": 9,
          "ratio": 0.1
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 44,
          "ratio": 0.5
        },
        {
          "name": "높음",
          "count": 26,
          "ratio": 0.3
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "aa864062-476d-4da7-be1d-511468afd44a",
        "persona_summary": "35세 부산, 출산 2주 차",
        "title": "산후 부기 빠지는데 좋아요",
        "content": "부기가 좀 빠진 느낌이에요. 따뜻하게 마시면 회복에 도움 되는 것 같아요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.3,
        "trust_percent": 66,
        "sentiment_label": "긍정"
      },
      {
        "review_id": "0eaaae64-d714-46a0-bf15-4f2eaae96d0b",
        "persona_summary": "28세 광주",
        "title": "향이 강해서 호불호",
        "content": "한약 냄새가 강해서 못 드시는 분도 있을 것 같아요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 3.7,
        "trust_percent": 70,
        "sentiment_label": "중립"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "5eb143bb-6681-4901-8388-f99a94c59036",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "수유부 종합비타민",
    "product_category": "영양제",
    "subcategory": "수유비타민",
    "search_keyword": "수유중 비타민",
    "target_period": "산후",
    "target_week_range": "41-52",
    "week": [
      41,
      52
    ],
    "fit_reason": "수유 중 소모가 큰 비타민D·칼슘·요오드를 보충하는 수유부 전용 영양제",
    "review_count": 95,
    "verified_purchase_ratio": 0.81,
    "average_rating": 4.4,
    "average_sentiment_score": 0.78,
    "sentiment_percent": 78,
    "average_aspect_score": 0.85,
    "average_review_reliability_score": 0.87,
    "average_pregnancy_fit_score": 0.89,
    "average_safety_risk_score": 0.07,
    "safety_risk_percent": 7,
    "average_trust_score": 0.8,
    "trust_percent": 80,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 48,
        "ratio": 0.5
      },
      {
        "name": "short",
        "count": 26,
        "ratio": 0.27
      },
      {
        "name": "detailed",
        "count": 22,
        "ratio": 0.23
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 33,
          "ratio": 0.35
        },
        {
          "name": "1주 사용",
          "count": 28,
          "ratio": 0.3
        },
        {
          "name": "한 달 사용",
          "count": 19,
          "ratio": 0.2
        }
      ],
      "review_focuses": [
        {
          "name": "사용감",
          "count": 36,
          "ratio": 0.38
        },
        {
          "name": "효과",
          "count": 28,
          "ratio": 0.3
        },
        {
          "name": "성분 안전성",
          "count": 21,
          "ratio": 0.22
        }
      ],
      "purchase_contexts": [
        {
          "name": "산후 회복 목적",
          "count": 43,
          "ratio": 0.45
        },
        {
          "name": "지인 추천",
          "count": 28,
          "ratio": 0.3
        },
        {
          "name": "수유 준비",
          "count": 19,
          "ratio": 0.2
        }
      ]
    },
    "warning_tags": [
      "복용량 준수"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 30,
          "ratio": 0.32
        },
        {
          "name": "전문직/연구직",
          "count": 23,
          "ratio": 0.24
        },
        {
          "name": "전업주부",
          "count": 27,
          "ratio": 0.28
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 27,
          "ratio": 0.28
        },
        {
          "name": "경기",
          "count": 33,
          "ratio": 0.35
        },
        {
          "name": "인천",
          "count": 10,
          "ratio": 0.1
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 48,
          "ratio": 0.5
        },
        {
          "name": "높음",
          "count": 28,
          "ratio": 0.3
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "83c7a67c-17a7-448a-bc08-e21cffc81eb0",
        "persona_summary": "32세 서울, 모유수유 중",
        "title": "산후 필수 영양제예요",
        "content": "수유 중에는 영양 소모가 크니까 꼭 챙겨 먹어야 해요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.6,
        "trust_percent": 79,
        "sentiment_label": "긍정"
      },
      {
        "review_id": "94477f60-f8be-44a4-ab46-e69d5f10da46",
        "persona_summary": "30세 경기 용인",
        "title": "알약이 좀 커요",
        "content": "효과는 좋은데 알약이 커서 삼키기 조금 불편해요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.1,
        "trust_percent": 73,
        "sentiment_label": "긍정"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "609a485c-f679-45fd-b518-5c41e2f282e7",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "산후 철분제 고함량",
    "product_category": "영양제",
    "subcategory": "철분제",
    "search_keyword": "출산 후 철분제",
    "target_period": "산후",
    "target_week_range": "41-52",
    "week": [
      41,
      52
    ],
    "fit_reason": "분만 시 출혈로 감소한 철분을 보충하는 고흡수율 산후 철분 보충제",
    "review_count": 68,
    "verified_purchase_ratio": 0.733,
    "average_rating": 4.2,
    "average_sentiment_score": 0.72,
    "sentiment_percent": 72,
    "average_aspect_score": 0.83,
    "average_review_reliability_score": 0.85,
    "average_pregnancy_fit_score": 0.87,
    "average_safety_risk_score": 0.1,
    "safety_risk_percent": 10,
    "average_trust_score": 0.75,
    "trust_percent": 75,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 34,
        "ratio": 0.5
      },
      {
        "name": "short",
        "count": 18,
        "ratio": 0.27
      },
      {
        "name": "detailed",
        "count": 16,
        "ratio": 0.23
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 24,
          "ratio": 0.35
        },
        {
          "name": "1주 사용",
          "count": 20,
          "ratio": 0.3
        },
        {
          "name": "한 달 사용",
          "count": 14,
          "ratio": 0.2
        }
      ],
      "review_focuses": [
        {
          "name": "사용감",
          "count": 26,
          "ratio": 0.38
        },
        {
          "name": "효과",
          "count": 20,
          "ratio": 0.3
        },
        {
          "name": "성분 안전성",
          "count": 15,
          "ratio": 0.22
        }
      ],
      "purchase_contexts": [
        {
          "name": "산후 회복 목적",
          "count": 31,
          "ratio": 0.45
        },
        {
          "name": "지인 추천",
          "count": 20,
          "ratio": 0.3
        },
        {
          "name": "수유 준비",
          "count": 14,
          "ratio": 0.2
        }
      ]
    },
    "warning_tags": [
      "변비 부작용 가능",
      "공복 복용 주의"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 22,
          "ratio": 0.32
        },
        {
          "name": "전문직/연구직",
          "count": 16,
          "ratio": 0.24
        },
        {
          "name": "전업주부",
          "count": 19,
          "ratio": 0.28
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 19,
          "ratio": 0.28
        },
        {
          "name": "경기",
          "count": 24,
          "ratio": 0.35
        },
        {
          "name": "인천",
          "count": 7,
          "ratio": 0.1
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 34,
          "ratio": 0.5
        },
        {
          "name": "높음",
          "count": 20,
          "ratio": 0.3
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "b8e97073-b169-49a4-8d63-67a38a57fbed",
        "persona_summary": "33세 서울 송파, 산후 빈혈",
        "title": "빈혈 회복에 도움돼요",
        "content": "출산 후 빈혈 진단받고 먹기 시작했어요. 2달 만에 수치 정상화됐어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.4,
        "trust_percent": 71,
        "sentiment_label": "긍정"
      },
      {
        "review_id": "24df3bd4-6d2d-4fca-b1ae-bc51c029e0b5",
        "persona_summary": "29세 경기, 수유 중",
        "title": "변비 올 수 있어요",
        "content": "철분제 특성상 변비가 생길 수 있으니 물 많이 드세요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 3.9,
        "trust_percent": 67,
        "sentiment_label": "중립"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "df60440c-7353-4315-ac26-fea930db72a0",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "오메가3 산후·수유용",
    "product_category": "영양제",
    "subcategory": "오메가3",
    "search_keyword": "수유중 오메가3",
    "target_period": "산후",
    "target_week_range": "41-52",
    "week": [
      41,
      52
    ],
    "fit_reason": "DHA 함량을 높인 수유부 전용 오메가3로 아기 뇌 발달과 산모 회복을 동시에 지원",
    "review_count": 28,
    "verified_purchase_ratio": 0.739,
    "average_rating": 4.3,
    "average_sentiment_score": 0.75,
    "sentiment_percent": 75,
    "average_aspect_score": 0.84,
    "average_review_reliability_score": 0.86,
    "average_pregnancy_fit_score": 0.88,
    "average_safety_risk_score": 0.08,
    "safety_risk_percent": 8,
    "average_trust_score": 0.78,
    "trust_percent": 78,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 14,
        "ratio": 0.5
      },
      {
        "name": "short",
        "count": 8,
        "ratio": 0.27
      },
      {
        "name": "detailed",
        "count": 6,
        "ratio": 0.23
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 10,
          "ratio": 0.35
        },
        {
          "name": "1주 사용",
          "count": 8,
          "ratio": 0.3
        },
        {
          "name": "한 달 사용",
          "count": 6,
          "ratio": 0.2
        }
      ],
      "review_focuses": [
        {
          "name": "사용감",
          "count": 11,
          "ratio": 0.38
        },
        {
          "name": "효과",
          "count": 8,
          "ratio": 0.3
        },
        {
          "name": "성분 안전성",
          "count": 6,
          "ratio": 0.22
        }
      ],
      "purchase_contexts": [
        {
          "name": "산후 회복 목적",
          "count": 13,
          "ratio": 0.45
        },
        {
          "name": "지인 추천",
          "count": 8,
          "ratio": 0.3
        },
        {
          "name": "수유 준비",
          "count": 6,
          "ratio": 0.2
        }
      ]
    },
    "warning_tags": [
      "용량 조절 필요"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 9,
          "ratio": 0.32
        },
        {
          "name": "전문직/연구직",
          "count": 7,
          "ratio": 0.24
        },
        {
          "name": "전업주부",
          "count": 8,
          "ratio": 0.28
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 8,
          "ratio": 0.28
        },
        {
          "name": "경기",
          "count": 10,
          "ratio": 0.35
        },
        {
          "name": "인천",
          "count": 3,
          "ratio": 0.1
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 14,
          "ratio": 0.5
        },
        {
          "name": "높음",
          "count": 8,
          "ratio": 0.3
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "8fdde01a-87f9-45ec-b43b-d8c8ed5b351a",
        "persona_summary": "31세 서울 마포, 완모",
        "title": "임신 때부터 계속 먹고있어요",
        "content": "임신 때부터 먹던 거 수유 버전으로 바꿨어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.5,
        "trust_percent": 73,
        "sentiment_label": "긍정"
      },
      {
        "review_id": "352d3d69-5a5f-48c5-9f85-0ffc1d2de8c2",
        "persona_summary": "28세 인천",
        "title": "생선 냄새 거의 없어요",
        "content": "비린 맛 없이 먹기 편해서 꾸준히 먹을 수 있어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.2,
        "trust_percent": 70,
        "sentiment_label": "긍정"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "7f596f43-fc4e-4027-a709-0af61dd68c2f",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "수유쿠션 C자형",
    "product_category": "용품",
    "subcategory": "수유쿠션",
    "search_keyword": "수유쿠션 C자",
    "target_period": "산후",
    "target_week_range": "41-52",
    "week": [
      41,
      52
    ],
    "fit_reason": "목과 허리 부담을 줄이는 C자형 수유 자세 보조 쿠션",
    "review_count": 38,
    "verified_purchase_ratio": 0.749,
    "average_rating": 4.5,
    "average_sentiment_score": 0.82,
    "sentiment_percent": 82,
    "average_aspect_score": 0.88,
    "average_review_reliability_score": 0.9,
    "average_pregnancy_fit_score": 0.92,
    "average_safety_risk_score": 0.05,
    "safety_risk_percent": 5,
    "average_trust_score": 0.84,
    "trust_percent": 84,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 19,
        "ratio": 0.5
      },
      {
        "name": "short",
        "count": 10,
        "ratio": 0.27
      },
      {
        "name": "detailed",
        "count": 9,
        "ratio": 0.23
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 13,
          "ratio": 0.35
        },
        {
          "name": "1주 사용",
          "count": 11,
          "ratio": 0.3
        },
        {
          "name": "한 달 사용",
          "count": 8,
          "ratio": 0.2
        }
      ],
      "review_focuses": [
        {
          "name": "사용감",
          "count": 14,
          "ratio": 0.38
        },
        {
          "name": "효과",
          "count": 11,
          "ratio": 0.3
        },
        {
          "name": "성분 안전성",
          "count": 8,
          "ratio": 0.22
        }
      ],
      "purchase_contexts": [
        {
          "name": "산후 회복 목적",
          "count": 17,
          "ratio": 0.45
        },
        {
          "name": "지인 추천",
          "count": 11,
          "ratio": 0.3
        },
        {
          "name": "수유 준비",
          "count": 8,
          "ratio": 0.2
        }
      ]
    },
    "warning_tags": [
      "세탁 방법 확인"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 12,
          "ratio": 0.32
        },
        {
          "name": "전문직/연구직",
          "count": 9,
          "ratio": 0.24
        },
        {
          "name": "전업주부",
          "count": 11,
          "ratio": 0.28
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 11,
          "ratio": 0.28
        },
        {
          "name": "경기",
          "count": 13,
          "ratio": 0.35
        },
        {
          "name": "인천",
          "count": 4,
          "ratio": 0.1
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 19,
          "ratio": 0.5
        },
        {
          "name": "높음",
          "count": 11,
          "ratio": 0.3
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "ab33b691-61e0-4ad4-bd06-2b9b705fab98",
        "persona_summary": "30세 경기 고양, 신생아 엄마",
        "title": "수유 자세 잡기 너무 편해요",
        "content": "신생아 때부터 지금까지 매일 써요. 없었으면 어쩔 뻔.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.8,
        "trust_percent": 81,
        "sentiment_label": "긍정"
      },
      {
        "review_id": "79aa14d0-a1f1-4532-8e0a-c94c28576eb4",
        "persona_summary": "32세 서울 노원",
        "title": "세탁 자주 해야해요",
        "content": "자주 써서 세탁도 자주 해야 하는데 세탁 방법 꼭 확인하세요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.2,
        "trust_percent": 77,
        "sentiment_label": "긍정"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "17ec0b77-d588-4fdb-a273-36971dedfd72",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "유축기 휴대용 전동",
    "product_category": "용품",
    "subcategory": "유축기",
    "search_keyword": "휴대용 유축기 전동",
    "target_period": "산후",
    "target_week_range": "41-52",
    "week": [
      41,
      52
    ],
    "fit_reason": "소음이 적고 흡입 강도 조절이 가능한 직장 복귀 대비 휴대용 전동 유축기",
    "review_count": 34,
    "verified_purchase_ratio": 0.72,
    "average_rating": 4.2,
    "average_sentiment_score": 0.72,
    "sentiment_percent": 72,
    "average_aspect_score": 0.83,
    "average_review_reliability_score": 0.85,
    "average_pregnancy_fit_score": 0.87,
    "average_safety_risk_score": 0.12,
    "safety_risk_percent": 12,
    "average_trust_score": 0.75,
    "trust_percent": 75,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 17,
        "ratio": 0.5
      },
      {
        "name": "short",
        "count": 9,
        "ratio": 0.27
      },
      {
        "name": "detailed",
        "count": 8,
        "ratio": 0.23
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 12,
          "ratio": 0.35
        },
        {
          "name": "1주 사용",
          "count": 10,
          "ratio": 0.3
        },
        {
          "name": "한 달 사용",
          "count": 7,
          "ratio": 0.2
        }
      ],
      "review_focuses": [
        {
          "name": "사용감",
          "count": 13,
          "ratio": 0.38
        },
        {
          "name": "효과",
          "count": 10,
          "ratio": 0.3
        },
        {
          "name": "성분 안전성",
          "count": 7,
          "ratio": 0.22
        }
      ],
      "purchase_contexts": [
        {
          "name": "산후 회복 목적",
          "count": 15,
          "ratio": 0.45
        },
        {
          "name": "지인 추천",
          "count": 10,
          "ratio": 0.3
        },
        {
          "name": "수유 준비",
          "count": 7,
          "ratio": 0.2
        }
      ]
    },
    "warning_tags": [
      "부품 관리 중요",
      "흡입 강도 조절 필수"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 11,
          "ratio": 0.32
        },
        {
          "name": "전문직/연구직",
          "count": 8,
          "ratio": 0.24
        },
        {
          "name": "전업주부",
          "count": 10,
          "ratio": 0.28
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 10,
          "ratio": 0.28
        },
        {
          "name": "경기",
          "count": 12,
          "ratio": 0.35
        },
        {
          "name": "인천",
          "count": 3,
          "ratio": 0.1
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 17,
          "ratio": 0.5
        },
        {
          "name": "높음",
          "count": 10,
          "ratio": 0.3
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "90bff7eb-abc0-4bd4-a482-bede550b5f05",
        "persona_summary": "33세 서울 강남, 직장 복귀 준비 중",
        "title": "직장 복귀 후 필수템",
        "content": "회사에서 조용히 쓸 수 있어요. 가방에 쏙 들어가는 사이즈라 편해요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.4,
        "trust_percent": 72,
        "sentiment_label": "긍정"
      },
      {
        "review_id": "3a4248c2-ac7a-415e-a1c7-9aac992398f9",
        "persona_summary": "31세 경기 분당, 직장맘",
        "title": "소음 제로는 아니에요",
        "content": "생각보다 소리가 약간 있어요. 조용한 회의실에선 신경 쓰여요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.0,
        "trust_percent": 73,
        "sentiment_label": "긍정"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "b78ecbac-89ca-41c4-ba56-3440a14c4094",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "신생아 속싸개 스와들",
    "product_category": "용품",
    "subcategory": "속싸개",
    "search_keyword": "신생아 스와들 속싸개",
    "target_period": "산후",
    "target_week_range": "41-52",
    "week": [
      41,
      52
    ],
    "fit_reason": "모로 반사를 줄여 신생아 수면을 돕는 편리한 벨크로형 스와들",
    "review_count": 84,
    "verified_purchase_ratio": 0.787,
    "average_rating": 4.4,
    "average_sentiment_score": 0.79,
    "sentiment_percent": 79,
    "average_aspect_score": 0.86,
    "average_review_reliability_score": 0.88,
    "average_pregnancy_fit_score": 0.9,
    "average_safety_risk_score": 0.06,
    "safety_risk_percent": 6,
    "average_trust_score": 0.81,
    "trust_percent": 81,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 42,
        "ratio": 0.5
      },
      {
        "name": "short",
        "count": 23,
        "ratio": 0.27
      },
      {
        "name": "detailed",
        "count": 19,
        "ratio": 0.23
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 29,
          "ratio": 0.35
        },
        {
          "name": "1주 사용",
          "count": 25,
          "ratio": 0.3
        },
        {
          "name": "한 달 사용",
          "count": 17,
          "ratio": 0.2
        }
      ],
      "review_focuses": [
        {
          "name": "사용감",
          "count": 32,
          "ratio": 0.38
        },
        {
          "name": "효과",
          "count": 25,
          "ratio": 0.3
        },
        {
          "name": "성분 안전성",
          "count": 18,
          "ratio": 0.22
        }
      ],
      "purchase_contexts": [
        {
          "name": "산후 회복 목적",
          "count": 38,
          "ratio": 0.45
        },
        {
          "name": "지인 추천",
          "count": 25,
          "ratio": 0.3
        },
        {
          "name": "수유 준비",
          "count": 17,
          "ratio": 0.2
        }
      ]
    },
    "warning_tags": [
      "엉덩이 공간 확인 필수",
      "과도한 착용 주의"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 27,
          "ratio": 0.32
        },
        {
          "name": "전문직/연구직",
          "count": 20,
          "ratio": 0.24
        },
        {
          "name": "전업주부",
          "count": 24,
          "ratio": 0.28
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 24,
          "ratio": 0.28
        },
        {
          "name": "경기",
          "count": 29,
          "ratio": 0.35
        },
        {
          "name": "인천",
          "count": 8,
          "ratio": 0.1
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 42,
          "ratio": 0.5
        },
        {
          "name": "높음",
          "count": 25,
          "ratio": 0.3
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "03bb6dc8-1277-42b2-a7bc-1aa65e22c211",
        "persona_summary": "29세 서울 은평, 신생아 엄마",
        "title": "수면시간 늘었어요",
        "content": "스와들 하고 재우니까 아기가 덜 깨요. 신세계예요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.7,
        "trust_percent": 79,
        "sentiment_label": "긍정"
      },
      {
        "review_id": "958b1d95-5ab5-406f-a3fd-1bca6dc68117",
        "persona_summary": "31세 경기, 출산 1개월 차",
        "title": "사이즈 빨리 작아져요",
        "content": "신생아 사이즈는 금방 작아지니 두 사이즈 사두는 걸 추천해요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.1,
        "trust_percent": 73,
        "sentiment_label": "긍정"
      }
    ],
    "rank_in_period_category": 3
  },
  {
    "product_id": "6c0230b1-a02b-4f7f-950a-488888f6945f",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "수유브라 원더와이어",
    "product_category": "의류",
    "subcategory": "수유브라",
    "search_keyword": "수유브라 편한",
    "target_period": "산후",
    "target_week_range": "41-52",
    "week": [
      41,
      52
    ],
    "fit_reason": "착탈이 간편한 원터치 클립과 넓은 어깨끈으로 수유 편의성과 지지력을 동시에 잡은 수유 브라",
    "review_count": 50,
    "verified_purchase_ratio": 0.63,
    "average_rating": 4.4,
    "average_sentiment_score": 0.8,
    "sentiment_percent": 80,
    "average_aspect_score": 0.86,
    "average_review_reliability_score": 0.88,
    "average_pregnancy_fit_score": 0.9,
    "average_safety_risk_score": 0.06,
    "safety_risk_percent": 6,
    "average_trust_score": 0.82,
    "trust_percent": 82,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 25,
        "ratio": 0.5
      },
      {
        "name": "short",
        "count": 14,
        "ratio": 0.27
      },
      {
        "name": "detailed",
        "count": 12,
        "ratio": 0.23
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 18,
          "ratio": 0.35
        },
        {
          "name": "1주 사용",
          "count": 15,
          "ratio": 0.3
        },
        {
          "name": "한 달 사용",
          "count": 10,
          "ratio": 0.2
        }
      ],
      "review_focuses": [
        {
          "name": "사용감",
          "count": 19,
          "ratio": 0.38
        },
        {
          "name": "효과",
          "count": 15,
          "ratio": 0.3
        },
        {
          "name": "성분 안전성",
          "count": 11,
          "ratio": 0.22
        }
      ],
      "purchase_contexts": [
        {
          "name": "산후 회복 목적",
          "count": 22,
          "ratio": 0.45
        },
        {
          "name": "지인 추천",
          "count": 15,
          "ratio": 0.3
        },
        {
          "name": "수유 준비",
          "count": 10,
          "ratio": 0.2
        }
      ]
    },
    "warning_tags": [
      "사이즈 변화 고려해 여유 있게 구매"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 16,
          "ratio": 0.32
        },
        {
          "name": "전문직/연구직",
          "count": 12,
          "ratio": 0.24
        },
        {
          "name": "전업주부",
          "count": 14,
          "ratio": 0.28
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 14,
          "ratio": 0.28
        },
        {
          "name": "경기",
          "count": 18,
          "ratio": 0.35
        },
        {
          "name": "인천",
          "count": 5,
          "ratio": 0.1
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 25,
          "ratio": 0.5
        },
        {
          "name": "높음",
          "count": 15,
          "ratio": 0.3
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "94e0d63e-820a-44e8-80e8-9ef12c82b0d7",
        "persona_summary": "30세 서울 서초, 완모 중",
        "title": "수유할 때 정말 편해요",
        "content": "원터치로 열리니까 새벽 수유 때도 힘들지 않아요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.6,
        "trust_percent": 82,
        "sentiment_label": "긍정"
      },
      {
        "review_id": "95012d39-b2be-49a8-8bbf-8b44dfebadac",
        "persona_summary": "32세 경기 수원",
        "title": "사이즈 크게 사세요",
        "content": "출산 후 가슴이 커져서 평소보다 한두 사이즈 크게 사는 게 좋아요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.2,
        "trust_percent": 80,
        "sentiment_label": "긍정"
      }
    ],
    "rank_in_period_category": 1
  },
  {
    "product_id": "75a6ea23-ae28-4676-b17a-fa27c28d6eab",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "산후 조리복 홈웨어 세트",
    "product_category": "의류",
    "subcategory": "조리복",
    "search_keyword": "산후조리원 조리복",
    "target_period": "산후",
    "target_week_range": "41-52",
    "week": [
      41,
      52
    ],
    "fit_reason": "수유 개구부와 후기 복부를 배려한 산후조리원·가정 겸용 홈웨어 세트",
    "review_count": 88,
    "verified_purchase_ratio": 0.811,
    "average_rating": 4.3,
    "average_sentiment_score": 0.76,
    "sentiment_percent": 76,
    "average_aspect_score": 0.83,
    "average_review_reliability_score": 0.85,
    "average_pregnancy_fit_score": 0.87,
    "average_safety_risk_score": 0.07,
    "safety_risk_percent": 7,
    "average_trust_score": 0.79,
    "trust_percent": 79,
    "recommendation_label": "추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 44,
        "ratio": 0.5
      },
      {
        "name": "short",
        "count": 24,
        "ratio": 0.27
      },
      {
        "name": "detailed",
        "count": 20,
        "ratio": 0.23
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 31,
          "ratio": 0.35
        },
        {
          "name": "1주 사용",
          "count": 26,
          "ratio": 0.3
        },
        {
          "name": "한 달 사용",
          "count": 18,
          "ratio": 0.2
        }
      ],
      "review_focuses": [
        {
          "name": "사용감",
          "count": 33,
          "ratio": 0.38
        },
        {
          "name": "효과",
          "count": 26,
          "ratio": 0.3
        },
        {
          "name": "성분 안전성",
          "count": 19,
          "ratio": 0.22
        }
      ],
      "purchase_contexts": [
        {
          "name": "산후 회복 목적",
          "count": 40,
          "ratio": 0.45
        },
        {
          "name": "지인 추천",
          "count": 26,
          "ratio": 0.3
        },
        {
          "name": "수유 준비",
          "count": 18,
          "ratio": 0.2
        }
      ]
    },
    "warning_tags": [
      "원단 수축 주의"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 28,
          "ratio": 0.32
        },
        {
          "name": "전문직/연구직",
          "count": 21,
          "ratio": 0.24
        },
        {
          "name": "전업주부",
          "count": 25,
          "ratio": 0.28
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 25,
          "ratio": 0.28
        },
        {
          "name": "경기",
          "count": 31,
          "ratio": 0.35
        },
        {
          "name": "인천",
          "count": 9,
          "ratio": 0.1
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 44,
          "ratio": 0.5
        },
        {
          "name": "높음",
          "count": 26,
          "ratio": 0.3
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "4ec70516-1dce-422b-85b0-dee987877b97",
        "persona_summary": "33세 인천, 산후조리원 입소 중",
        "title": "병원 퇴원부터 지금까지 입어요",
        "content": "수유하기 편하고 보온도 돼서 조리원에서도 가정에서도 써요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.5,
        "trust_percent": 73,
        "sentiment_label": "긍정"
      },
      {
        "review_id": "93508272-9c80-4601-86cb-b92822d06746",
        "persona_summary": "29세 서울 양천",
        "title": "세탁 후 줄어요",
        "content": "처음 세탁하면 약간 줄어드니 조심하세요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.0,
        "trust_percent": 78,
        "sentiment_label": "긍정"
      }
    ],
    "rank_in_period_category": 2
  },
  {
    "product_id": "ac6a2958-f10d-40f3-8c52-4012bfad59a5",
    "schema_version": "wellness_product_dummy_v2_persona",
    "source_type": "dummy_aggregate_from_synthetic_v2",
    "product_name": "산후 압박 레깅스",
    "product_category": "의류",
    "subcategory": "압박레깅스",
    "search_keyword": "산후 부기 레깅스",
    "target_period": "산후",
    "target_week_range": "41-52",
    "week": [
      41,
      52
    ],
    "fit_reason": "하체 부기 완화와 순환 개선을 돕는 의료용 압박 소재 산후 레깅스",
    "review_count": 82,
    "verified_purchase_ratio": 0.797,
    "average_rating": 4.1,
    "average_sentiment_score": 0.7,
    "sentiment_percent": 70,
    "average_aspect_score": 0.79,
    "average_review_reliability_score": 0.81,
    "average_pregnancy_fit_score": 0.83,
    "average_safety_risk_score": 0.13,
    "safety_risk_percent": 13,
    "average_trust_score": 0.72,
    "trust_percent": 72,
    "recommendation_label": "조건부 추천",
    "review_detail_distribution": [
      {
        "name": "normal",
        "count": 41,
        "ratio": 0.5
      },
      {
        "name": "short",
        "count": 22,
        "ratio": 0.27
      },
      {
        "name": "detailed",
        "count": 19,
        "ratio": 0.23
      }
    ],
    "review_context_segments": {
      "usage_phases": [
        {
          "name": "첫 사용",
          "count": 29,
          "ratio": 0.35
        },
        {
          "name": "1주 사용",
          "count": 25,
          "ratio": 0.3
        },
        {
          "name": "한 달 사용",
          "count": 16,
          "ratio": 0.2
        }
      ],
      "review_focuses": [
        {
          "name": "사용감",
          "count": 31,
          "ratio": 0.38
        },
        {
          "name": "효과",
          "count": 25,
          "ratio": 0.3
        },
        {
          "name": "성분 안전성",
          "count": 18,
          "ratio": 0.22
        }
      ],
      "purchase_contexts": [
        {
          "name": "산후 회복 목적",
          "count": 37,
          "ratio": 0.45
        },
        {
          "name": "지인 추천",
          "count": 25,
          "ratio": 0.3
        },
        {
          "name": "수유 준비",
          "count": 16,
          "ratio": 0.2
        }
      ]
    },
    "warning_tags": [
      "압박 강도 개인차",
      "장시간 착용 주의"
    ],
    "persona_segments": {
      "occupations": [
        {
          "name": "사무직",
          "count": 26,
          "ratio": 0.32
        },
        {
          "name": "전문직/연구직",
          "count": 20,
          "ratio": 0.24
        },
        {
          "name": "전업주부",
          "count": 23,
          "ratio": 0.28
        }
      ],
      "regions": [
        {
          "name": "서울",
          "count": 23,
          "ratio": 0.28
        },
        {
          "name": "경기",
          "count": 29,
          "ratio": 0.35
        },
        {
          "name": "인천",
          "count": 8,
          "ratio": 0.1
        }
      ],
      "income_bands": [
        {
          "name": "중간",
          "count": 41,
          "ratio": 0.5
        },
        {
          "name": "높음",
          "count": 25,
          "ratio": 0.3
        }
      ]
    },
    "sample_reviews": [
      {
        "review_id": "fde57cae-9f9d-4d71-980d-d49d520e4f05",
        "persona_summary": "31세 서울 강동, 출산 한 달 차",
        "title": "부기 빠지는 데 도움돼요",
        "content": "종일 서있는 날에 신으면 다리 부기가 확실히 덜해요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 4.3,
        "trust_percent": 70,
        "sentiment_label": "긍정"
      },
      {
        "review_id": "35faf892-75c8-46c2-92d7-3ad6b576c393",
        "persona_summary": "30세 경기, 산후 3주차",
        "title": "압박이 좀 강해요",
        "content": "초반엔 압박이 너무 강해서 조금씩 늘려가며 착용했어요.",
        "review_context": {
          "usage_phase": "한 달 사용",
          "review_focus": "효과",
          "purchase_context_type": "산후 회복 목적",
          "comparison_target": null
        },
        "review_detail_level": "normal",
        "rating": 3.9,
        "trust_percent": 68,
        "sentiment_label": "중립"
      }
    ],
    "rank_in_period_category": 3
  }
] as const;

export type WellnessProductRecommendation = (typeof wellnessProductRecommendations)[number];
