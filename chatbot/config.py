"""환경 변수 및 공통 설정."""

import os
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY", "")
OPENAI_MODEL: str = "gpt-4o-mini"
TMAP_APP_KEY: str = os.getenv("TMAP_APP_KEY", "")

CHROMA_PATH: str = os.path.join(os.path.dirname(__file__), "chroma_db")
COLLECTION_NAME: str = "maternity_law_openai"

LAW_OC: str = os.getenv("LAW_OC", "your_oc_here")
LAW_API_URL: str = "https://www.law.go.kr/DRF/lawService.do"
