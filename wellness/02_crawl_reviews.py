import ssl
import certifi
ssl._create_default_https_context = lambda: ssl.create_default_context(cafile=certifi.where())

import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pandas as pd
import time
import random

def get_driver():
    options = uc.ChromeOptions()
    options.add_argument("--lang=ko-KR")
    options.add_argument("--window-size=1280,900")
    return uc.Chrome(options=options, headless=False, version_main=147)

def crawl_reviews(driver, product_url: str, max_pages: int = 3):
    results = []
    driver.get(product_url)
    time.sleep(random.uniform(3, 5))

    # 상품명
    try:
        title_el = driver.find_element(By.CSS_SELECTOR, ".prod-buy-header__title")
        product_name = title_el.text.strip()
    except:
        product_name = "unknown"

    # 리뷰 섹션으로 스크롤
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight * 0.6);")
    time.sleep(random.uniform(2, 3))

    for page_num in range(1, max_pages + 1):
        print(f"  [{page_num}/{max_pages}] 리뷰 수집 중...")

        # 리뷰 본문: twc-bg-white, 옵션: twc-line-clamp-[1], 제목: twc-font-bold
        review_bodies = driver.find_elements(By.CSS_SELECTOR, ".twc-bg-white")
        option_els = driver.find_elements(By.CSS_SELECTOR, ".twc-line-clamp-\\[1\\]")
        title_els = driver.find_elements(By.CSS_SELECTOR, ".twc-mb-\\[8px\\].twc-font-bold")

        if not review_bodies:
            print("  리뷰 없음 또는 셀렉터 불일치")
            break

        for i, body_el in enumerate(review_bodies):
            body = body_el.text.strip()
            if not body or len(body) < 10:
                continue

            option = option_els[i].text.strip() if i < len(option_els) else ""
            title = title_els[i].text.strip() if i < len(title_els) else ""

            results.append({
                "product_name": product_name,
                "product_url": product_url,
                "page": page_num,
                "rating": None,   # 별점은 별도 파싱 필요
                "title": title,
                "review": body,
                "option": option
            })

        # 다음 페이지
        try:
            next_btn = driver.find_element(By.CSS_SELECTOR, ".sdp-review__article__page__next:not(.disabled)")
            next_btn.click()
            time.sleep(random.uniform(2, 4))
        except:
            break

    return results

def main():
    url_df = pd.read_csv("product_urls.csv")
    all_reviews = []
    driver = get_driver()

    try:
        driver.get("https://www.coupang.com")
        time.sleep(2)

        for idx, row in url_df.head(10).iterrows():
            print(f"\n[{idx+1}/{len(url_df)}] {row['keyword']} - 크롤링 시작")
            try:
                reviews = crawl_reviews(driver, row["url"], max_pages=3)
                for r in reviews:
                    r["period"] = row["period"]
                    r["keyword"] = row["keyword"]
                all_reviews.extend(reviews)
                print(f"  → {len(reviews)}개 리뷰 수집 (누적: {len(all_reviews)}개)")
            except Exception as e:
                print(f"  오류: {e}")

            # 10개마다 중간 저장
            if (idx + 1) % 10 == 0:
                pd.DataFrame(all_reviews).to_csv("reviews_raw.csv", index=False, encoding="utf-8-sig")
                print(f"  [중간저장] {len(all_reviews)}개 저장됨")

            time.sleep(random.uniform(5, 10))
    finally:
        driver.quit()

    df = pd.DataFrame(all_reviews)
    df.to_csv("reviews_raw.csv", index=False, encoding="utf-8-sig")
    print(f"\n전체 수집 완료: {len(df)}개 리뷰 → reviews_raw.csv")

main()
