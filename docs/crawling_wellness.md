# 쿠팡 리뷰 크롤링 가이드 (Claude Code용)

## 환경 세팅

```bash
pip install playwright pandas asyncio
playwright install chromium
```

---

## 1단계: 검색어로 상품 URL 수집

```python
# 파일명: 01_get_product_urls.py
import asyncio
from playwright.async_api import async_playwright
import pandas as pd
import random

PREGNANCY_KEYWORDS = {
    "초기": ["엽산", "임산부 비타민", "입덧 완화", "임산부 유산균"],
    "중기": ["철분제", "임산부 베개", "임산부 복대", "임산부 수면용품"],
    "후기": ["출산 준비물", "수유 브라", "임산부 바디로션", "임산부 크림"]
}

async def get_product_urls(keyword: str, max_items: int = 20):
    search_url = f"https://www.coupang.com/np/search?q={keyword}&channel=user"
    urls = []

    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=["--no-sandbox", "--disable-blink-features=AutomationControlled"]
        )
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36",
            locale="ko-KR"
        )
        page = await context.new_page()
        await page.add_init_script("Object.defineProperty(navigator, 'webdriver', { get: () => undefined });")

        await page.goto(search_url, wait_until="networkidle")
        await asyncio.sleep(random.uniform(2, 4))

        items = await page.query_selector_all("li.search-product a.search-product-wrap")
        for item in items[:max_items]:
            href = await item.get_attribute("href")
            if href:
                urls.append("https://www.coupang.com" + href)

        await browser.close()
    return urls


async def main():
    all_products = []

    for period, keywords in PREGNANCY_KEYWORDS.items():
        for kw in keywords:
            print(f"[{period}] '{kw}' 검색 중...")
            urls = await get_product_urls(kw, max_items=15)
            for url in urls:
                all_products.append({"period": period, "keyword": kw, "url": url})
            await asyncio.sleep(random.uniform(3, 6))

    df = pd.DataFrame(all_products).drop_duplicates(subset="url")
    df.to_csv("product_urls.csv", index=False, encoding="utf-8-sig")
    print(f"수집 완료: {len(df)}개 상품 URL")

asyncio.run(main())
```

---

## 2단계: 상품별 리뷰 수집

```python
# 파일명: 02_crawl_reviews.py
import asyncio
from playwright.async_api import async_playwright
import pandas as pd
import random
import time

async def crawl_reviews(product_url: str, max_pages: int = 5):
    results = []

    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=["--no-sandbox", "--disable-blink-features=AutomationControlled"]
        )
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36",
            locale="ko-KR"
        )
        page = await context.new_page()
        await page.add_init_script("Object.defineProperty(navigator, 'webdriver', { get: () => undefined });")

        await page.goto(product_url, wait_until="networkidle")
        await asyncio.sleep(random.uniform(2, 4))

        # 상품명 수집
        title_el = await page.query_selector(".prod-buy-header__title")
        product_name = await title_el.inner_text() if title_el else "unknown"

        for page_num in range(1, max_pages + 1):
            print(f"  [{page_num}/{max_pages}] 리뷰 수집 중...")

            await page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.6)")
            await asyncio.sleep(random.uniform(1, 2))

            review_cards = await page.query_selector_all(".sdp-review__article__list")

            for card in review_cards:
                try:
                    rating_el = await card.query_selector(".sdp-review__article__list__info__product-info__star-orange")
                    rating = await rating_el.get_attribute("data-rating") if rating_el else None

                    body_el = await card.query_selector(".sdp-review__article__list__review__content")
                    body = await body_el.inner_text() if body_el else ""

                    date_el = await card.query_selector(".sdp-review__article__list__info__product-info__reg-date")
                    date = await date_el.inner_text() if date_el else ""

                    option_el = await card.query_selector(".sdp-review__article__list__info__product-info__option")
                    option = await option_el.inner_text() if option_el else ""

                    results.append({
                        "product_name": product_name.strip(),
                        "product_url": product_url,
                        "page": page_num,
                        "rating": float(rating) if rating else None,
                        "review": body.strip(),
                        "date": date.strip(),
                        "option": option.strip()
                    })

                except Exception as e:
                    print(f"  파싱 오류: {e}")
                    continue

            # 다음 페이지
            next_btn = await page.query_selector(".sdp-review__article__page__next:not(.disabled)")
            if next_btn:
                await next_btn.click()
                await asyncio.sleep(random.uniform(2, 4))
            else:
                break

        await browser.close()
    return results


async def main():
    url_df = pd.read_csv("product_urls.csv")
    all_reviews = []

    for idx, row in url_df.iterrows():
        print(f"\n[{idx+1}/{len(url_df)}] {row['keyword']} - 크롤링 시작")
        try:
            reviews = await crawl_reviews(row["url"], max_pages=3)
            for r in reviews:
                r["period"] = row["period"]
                r["keyword"] = row["keyword"]
            all_reviews.extend(reviews)
        except Exception as e:
            print(f"  오류 발생: {e}")

        time.sleep(random.uniform(5, 10))  # 상품 간 딜레이

    df = pd.DataFrame(all_reviews)
    df.to_csv("reviews_raw.csv", index=False, encoding="utf-8-sig")
    print(f"\n전체 수집 완료: {len(df)}개 리뷰")

asyncio.run(main())
```

---

## 3단계: 신뢰점수 계산 (별점 60% + 감성 40%)

```python
# 파일명: 03_trust_score.py
import pandas as pd
from transformers import pipeline

# 감성분석 모델 (한국어)
sentiment = pipeline(
    "sentiment-analysis",
    model="snunlp/KR-FinBert-SC",  # 또는 "monologg/koelectra-base-finetuned-sentiment"
)

def get_sentiment_score(text: str) -> float:
    """긍정이면 1.0, 부정이면 0.0 반환"""
    try:
        result = sentiment(text[:512])[0]
        return 1.0 if result["label"] == "positive" else 0.0
    except:
        return 0.5  # 분석 실패 시 중립 처리

def calc_trust_score(rating: float, sentiment_score: float) -> float:
    """신뢰점수 = 별점(60%) + 감성(40%)"""
    normalized_rating = rating / 5.0  # 5점 만점 → 0~1 정규화
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

    # 상품별 집계
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
```

---

## 실행 순서

```bash
python 01_get_product_urls.py   # 상품 URL 수집
python 02_crawl_reviews.py      # 리뷰 크롤링
python 03_trust_score.py        # 신뢰점수 계산
```

---

## 주의사항

| 항목          | 내용                                                                     |
| ------------- | ------------------------------------------------------------------------ |
| 셀렉터 변경   | 쿠팡은 CSS 클래스명이 자주 바뀜 → 막히면 `read_page` 툴로 현재 구조 확인 |
| IP 차단       | 동일 IP로 과도한 요청 시 차단 → 딜레이 꼭 유지                           |
| headless 오류 | 막힐 경우 `headless=False`로 바꿔서 브라우저 직접 확인                   |
| 감성모델      | GPU 없으면 느림 → 배치 처리 or Colab 활용 권장                           |
