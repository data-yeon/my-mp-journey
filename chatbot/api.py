"""
FastAPI 챗봇 백엔드
실행: uvicorn api:app --reload --port 8000
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from src.chatbot import MaternityHRChatbot
from src.tmap_routes import TMapError, recommend_routes, search_places

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
    audience: str = "employee"


class ChatResponse(BaseModel):
    answer: str
    sources: list[str]


class PlaceSearchRequest(BaseModel):
    query: str
    poi: str = ""
    type: str = ""
    count: int = 5


class PlaceResponse(BaseModel):
    id: str
    name: str
    address: str
    lat: float
    lng: float


class PlaceSearchResponse(BaseModel):
    places: list[PlaceResponse]
    warnings: list[str]


class RoutePoint(BaseModel):
    name: str
    lat: float
    lng: float


class RouteRecommendRequest(BaseModel):
    origin: RoutePoint
    destination: RoutePoint
    pregnancyWeek: int = 0


class RouteMetrics(BaseModel):
    crosswalkCount: int
    slopeScore: float
    barrierFreeScore: float
    stairsExcluded: bool


class RouteCandidate(BaseModel):
    routeId: str
    name: str
    provider: str
    searchOption: str
    distance: float
    duration: float
    comfortScore: float
    path: list
    metrics: RouteMetrics
    instructions: list[str]
    warnings: list[str]


class RouteRecommendResponse(BaseModel):
    bestRouteId: str
    routes: list[RouteCandidate]
    warnings: list[str]


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
    if not req.message.strip():
        raise HTTPException(status_code=422, detail="질문을 입력해 주세요.")
    try:
        result = bot.chat_with_sources(req.message, audience=req.audience)
        answer = result.get("answer", "")
        sources = result.get("sources", [])
    except Exception:
        raise HTTPException(
            status_code=500,
            detail="답변을 생성하는 중 문제가 발생했어요. 질문을 조금 더 구체적으로 다시 입력해 주세요. 계속 실패하면 출산휴가, 육아휴직, 배우자 출산휴가처럼 제도명을 함께 적어 주세요.",
        )
    if not answer:
        answer = "답변을 생성하지 못했어요. 질문에 제도명이나 지역명을 조금 더 구체적으로 적어 주세요."
    return ChatResponse(answer=answer, sources=sources)


@app.post("/places/search", response_model=PlaceSearchResponse)
def places_search(req: PlaceSearchRequest):
    if not req.query.strip():
        raise HTTPException(status_code=422, detail="검색어를 입력해 주세요.")
    try:
        result = search_places(req.query, poi_type=req.poi or req.type, count=req.count)
        return PlaceSearchResponse(
            places=[PlaceResponse(**p) for p in result.get("places", [])],
            warnings=result.get("warnings", []),
        )
    except TMapError as e:
        raise HTTPException(status_code=502, detail=str(e))
    except Exception:
        raise HTTPException(status_code=500, detail="장소 검색 중 문제가 발생했습니다.")


@app.post("/routes/recommend", response_model=RouteRecommendResponse)
def routes_recommend(req: RouteRecommendRequest):
    try:
        result = recommend_routes(
            origin=req.origin.model_dump(),
            destination=req.destination.model_dump(),
            pregnancy_week=req.pregnancyWeek,
        )
        return RouteRecommendResponse(**result)
    except TMapError as e:
        raise HTTPException(status_code=502, detail=str(e))
    except Exception:
        raise HTTPException(status_code=500, detail="경로 추천 중 문제가 발생했습니다.")
