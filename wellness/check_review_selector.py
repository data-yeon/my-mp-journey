import ssl
import certifi
ssl._create_default_https_context = lambda: ssl.create_default_context(cafile=certifi.where())

import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pandas as pd
import time

def main():
    options = uc.ChromeOptions()
    options.add_argument("--lang=ko-KR")
    options.add_argument("--window-size=1280,900")
    driver = uc.Chrome(options=options, headless=False, version_main=147)

    try:
        df = pd.read_csv("product_urls.csv")
        url = df.iloc[0]["url"]
        print(f"접속: {url[:60]}")

        driver.get(url)
        time.sleep(4)

        # 리뷰 섹션으로 단계적 스크롤
        for pct in [0.3, 0.5, 0.7, 0.9]:
            driver.execute_script(f"window.scrollTo(0, document.body.scrollHeight * {pct});")
            time.sleep(2)

        # 리뷰 탭 클릭 시도
        try:
            review_tab = driver.find_element(By.CSS_SELECTOR, "[class*='review'][role='tab'], a[href*='review']")
            review_tab.click()
            time.sleep(3)
            print("리뷰 탭 클릭 성공")
        except:
            print("리뷰 탭 없음")

        # HTML 저장
        html = driver.page_source
        with open("product_page2.html", "w", encoding="utf-8") as f:
            f.write(html)

        # sdp-review 관련 클래스 전부 출력
        els = driver.find_elements(By.CSS_SELECTOR, "[class*='sdp-review']")
        print(f"\nsdp-review 클래스 요소: {len(els)}개")
        for el in els[:10]:
            cls = el.get_attribute("class")
            txt = el.text[:80].replace('\n', ' ')
            print(f"  [{cls[:60]}] {txt}")

        # 별점 요소 탐색
        stars = driver.find_elements(By.CSS_SELECTOR, "[data-rating]")
        print(f"\ndata-rating 요소: {len(stars)}개")
        for s in stars[:5]:
            print(f"  rating={s.get_attribute('data-rating')} / {s.text[:50]}")

    finally:
        time.sleep(2)
        driver.quit()

main()
