import ssl
import certifi
ssl._create_default_https_context = ssl.create_default_context
ssl._create_default_https_context = lambda: ssl.create_default_context(cafile=certifi.where())

import undetected_chromedriver as uc
import time
import random

def main():
    options = uc.ChromeOptions()
    options.add_argument("--lang=ko-KR")
    options.add_argument("--window-size=1280,900")

    print("브라우저 시작 중...")
    driver = uc.Chrome(options=options, headless=False, version_main=147)

    try:
        print("쿠팡 접속 중...")
        driver.get("https://www.coupang.com")
        time.sleep(random.uniform(2, 3))

        print("검색 페이지 이동...")
        driver.get("https://www.coupang.com/np/search?q=임산부+비타민&channel=user")
        time.sleep(random.uniform(3, 5))

        print(f"페이지 타이틀: {driver.title}")

        # 상품 링크 확인
        from selenium.webdriver.common.by import By
        links = driver.find_elements(By.CSS_SELECTOR, "a[href*='/vp/products/']")
        print(f"상품 링크 수: {len(links)}")
        for link in links[:5]:
            print(f"  {link.get_attribute('href')[:80]}")

    finally:
        time.sleep(2)
        driver.quit()

main()
