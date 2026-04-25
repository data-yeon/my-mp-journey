import pandas as pd
from transformers import pipeline

# 감성분석 모델 (한국어)
sentiment = pipeline(
    "sentiment-analysis",
    model="snunlp/KR-FinBert-SC",
)

def get_sentiment_score(text: str) -> float:
    try:
        result = sentiment(text[:512])[0]
        return 1.0 if result["label"] == "positive" else 0.0
    except:
        return 0.5

def calc_trust_score(rating: float, sentiment_score: float) -> float:
    normalized_rating = rating / 5.0
    return round(normalized_rating * 0.6 + sentiment_score * 0.4, 4)


def main():
    df = pd.read_csv("reviews_raw.csv")
    df = df.dropna(subset=["review", "rating"])

    print("감성분석 시작...")
    df["sentiment_score"] = df["review"].apply(get_sentiment_score)
    df["sentiment_label"] = df["sentiment_score"].apply(lambda x: "긍정" if x >= 0.5 else "부정")
    df["trust_score"] = df.apply(
        lambda row: calc_trust_score(row["rating"], row["sentiment_score"]), axis=1
    )

    product_summary = df.groupby("product_name").agg(
        avg_rating=("rating", "mean"),
        avg_sentiment=("sentiment_score", "mean"),
        avg_trust_score=("trust_score", "mean"),
        review_count=("review", "count"),
        pos_ratio=("sentiment_label", lambda x: (x == "긍정").mean())
    ).reset_index()

    product_summary["avg_trust_score_pct"] = (product_summary["avg_trust_score"] * 100).round(1)

    df.to_csv("reviews_scored.csv", index=False, encoding="utf-8-sig")
    product_summary.to_csv("product_summary.csv", index=False, encoding="utf-8-sig")
    print("완료! reviews_scored.csv / product_summary.csv 저장됨")

main()
