import asyncio
from playwright.async_api import async_playwright
import random

async def main():
    async with async_playwright() as p:
        # headless=False + 실제 브라우저처럼 보이게
        browser = await p.chromium.launch(
            headless=False,
            args=["--no-sandbox", "--disable-blink-features=AutomationControlled", "--window-size=1280,900"]
        )
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
            locale="ko-KR",
            viewport={"width": 1280, "height": 900},
            extra_http_headers={
                "Accept-Language": "ko-KR,ko;q=0.9",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            }
        )
        page = await context.new_page()
        await page.add_init_script("""
            Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
            Object.defineProperty(navigator, 'plugins', { get: () => [1,2,3] });
        """)

        print("쿠팡 접속 중...")
        await page.goto("https://www.coupang.com", wait_until="networkidle")
        await asyncio.sleep(random.uniform(2, 3))

        print("검색 중...")
        await page.goto("https://www.coupang.com/np/search?q=임산부+비타민&channel=user", wait_until="networkidle")
        await asyncio.sleep(random.uniform(3, 5))

        title = await page.title()
        print(f"페이지 타이틀: {title}")

        # 상품 링크 확인
        links = await page.query_selector_all("a[href*='/vp/products/']")
        print(f"상품 링크 수: {len(links)}")
        for link in links[:5]:
            href = await link.get_attribute("href")
            print(f"  {href[:80]}")

        html = await page.content()
        with open("page_snapshot.html", "w", encoding="utf-8") as f:
            f.write(html)
        print("page_snapshot.html 저장됨")

        await asyncio.sleep(3)
        await browser.close()

asyncio.run(main())
