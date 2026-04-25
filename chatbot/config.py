import os
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
OPENAI_MODEL = "gpt-4o-mini"
EMBEDDING_MODEL = "text-embedding-3-small"

CHROMA_PERSIST_DIR = "./chroma_db"
COLLECTION_NAME = "maternity_law"

CHUNK_SIZE = 800
CHUNK_OVERLAP = 100
TOP_K = 5

# law.go.kr 모성보호 관련 법령 OC (Open API 없이 직접 텍스트 URL)
LAW_URLS = {
    "근로기준법": "https://www.law.go.kr/법령/근로기준법",
    "남녀고용평등법": "https://www.law.go.kr/법령/남녀고용평등과일·가정양립지원에관한법률",
    "고용보험법": "https://www.law.go.kr/법령/고용보험법",
}

# law.go.kr Open API (텍스트 직접 수집용)
LAW_API_BASE = "https://www.law.go.kr/DRF/lawService.do"
LAW_OC = "your_oc_here"  # law.go.kr 회원가입 후 발급받는 OC 코드 (없어도 동작)
