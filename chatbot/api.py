"""
FastAPI 챗봇 백엔드
실행: uvicorn api:app --reload --port 8000
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from src.chatbot import MaternityHRChatbot

app = FastAPI(title="맘마중 HR 챗봇 API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

bot = MaternityHRChatbot()


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    answer: str
    sources: list[str]


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
    result = bot.chat_with_sources(req.message)
    answer = result.get("answer", "")
    docs = result.get("docs", [])
    sources = list({
        f"{d.metadata.get('법령명', '')} {d.metadata.get('조문번호', '')}"
        for d in docs
        if d.metadata.get('법령명')
    })
    return ChatResponse(answer=answer, sources=sources)
