import ssl
import certifi
ssl._create_default_https_context = lambda: ssl.create_default_context(cafile=certifi.where())

import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
import pandas as pd
import time
import random

PREGNANCY_KEYWORDS = {
    "초기": ["엽산", "임산부 비타민", "입덧 완화", "임산부 유산균"],
    "중기": ["철분제", "임산부 베개", "임산부 복대", "임산부 수면용품"],
    "후기": ["출산 준비물", "수유 브라", "임산부 바디로션", "임산부 크림"]
}

def get_driver():
    options = uc.ChromeOptions()
    options.add_argument("--lang=ko-KR")
    options.add_argument("--window-size=1280,900")
    return uc.Chrome(options=options, headless=False, version_main=147)

def get_product_urls(driver, keyword: str, max_items: int = 15):
    search_url = f"https://www.coupang.com/np/search?q={keyword}&channel=user"
    driver.get(search_url)
    time.sleep(random.uniform(3, 5))

    links = driver.find_elements(By.CSS_SELECTOR, "a[href*='/vp/products/']")
    urls = []
    seen = set()
    for link in links:
        href = link.get_attribute("href")
        if href and href not in seen:
            # 쿼리스트링 제거해서 중복 제거
            base_url = href.split("?")[0]
            if base_url not in seen:
                seen.add(base_url)
                urls.append(href)
        if len(urls) >= max_items:
            break
    return urls

def main():
    all_products = []
    driver = get_driver()

    try:
        # 쿠팡 메인 먼저 방문 (자연스러운 접근)
        driver.get("https://www.coupang.com")
        time.sleep(random.uniform(2, 3))

        for period, keywords in PREGNANCY_KEYWORDS.items():
            for kw in keywords:
                print(f"[{period}] '{kw}' 검색 중...")
                urls = get_product_urls(driver, kw, max_items=15)
                for url in urls:
                    all_products.append({"period": period, "keyword": kw, "url": url})
                print(f"  → {len(urls)}개 URL 수집")
                time.sleep(random.uniform(4, 7))
    finally:
        driver.quit()

    df = pd.DataFrame(all_products).drop_duplicates(subset="url")
    df.to_csv("product_urls.csv", index=False, encoding="utf-8-sig")
    print(f"\n수집 완료: {len(df)}개 상품 URL → product_urls.csv")

main()
