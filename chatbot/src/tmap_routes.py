"""
T-map 기반 장소 검색 및 임산부 맞춤 보행 경로 추천 유틸리티.

T-map 보행자 경로 응답은 GeoJSON FeatureCollection 형태이며,
Point feature의 totalDistance/totalTime과 LineString 좌표를 표준 응답으로 변환한다.
"""

from __future__ import annotations

import math
from dataclasses import dataclass
from typing import Any
from urllib.parse import quote

import requests

from config import TMAP_APP_KEY

TMAP_BASE_URL = "https://apis.openapi.sk.com/tmap"
REQUEST_TIMEOUT = 12

ROUTE_OPTIONS = [
    ("30", "계단 제외 우선"),
    ("0", "추천 경로"),
    ("4", "대로 우선"),
    ("10", "최단 거리"),
]

WEEK_PROFILES = [
    (1, 12, {"distance": 0.40, "slope": 0.25, "crosswalk": 0.20, "barrier": 0.15}),
    (13, 27, {"distance": 0.20, "slope": 0.40, "crosswalk": 0.25, "barrier": 0.15}),
    (28, 42, {"distance": 0.15, "slope": 0.55, "crosswalk": 0.20, "barrier": 0.10}),
]


class TMapError(RuntimeError):
    """T-map 요청 또는 응답 변환 실패."""


@dataclass
class Place:
    id: str
    name: str
    address: str
    lat: float
    lng: float

    def to_dict(self) -> dict[str, Any]:
        return {
            "id": self.id,
            "name": self.name,
            "address": self.address,
            "lat": self.lat,
            "lng": self.lng,
        }


def _require_key() -> str:
    if not TMAP_APP_KEY:
        raise TMapError("TMAP_APP_KEY 환경변수가 설정되어 있지 않습니다.")
    return TMAP_APP_KEY


def _headers() -> dict[str, str]:
    return {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "appKey": _require_key(),
    }


def _to_float(value: Any) -> float | None:
    try:
        if value is None or value == "":
            return None
        return float(value)
    except (TypeError, ValueError):
        return None


def _clamp(value: float, lower: float = 0.0, upper: float = 100.0) -> float:
    return max(lower, min(upper, value))


def _normalize_inverse(value: float, best: float, worst: float) -> float:
    if worst == best:
        return 100.0
    return _clamp(((worst - value) / (worst - best)) * 100.0)


def _week_weights(pregnancy_week: int) -> dict[str, float]:
    week = max(1, min(42, pregnancy_week))
    for start, end, weights in WEEK_PROFILES:
        if start <= week <= end:
            return weights
    return WEEK_PROFILES[1][2]


def _compact_path(path: list[list[float]]) -> list[list[float]]:
    compacted: list[list[float]] = []
    for lng, lat in path:
        if not compacted or abs(compacted[-1][0] - lng) > 1e-7 or abs(compacted[-1][1] - lat) > 1e-7:
            compacted.append([round(lng, 7), round(lat, 7)])
    return compacted


def _address_from_poi(poi: dict[str, Any]) -> str:
    new_address = poi.get("newAddressList", {}).get("newAddress", [])
    if isinstance(new_address, dict):
        new_address = [new_address]
    if new_address:
        road = new_address[0].get("fullAddressRoad") or new_address[0].get("fullAddress")
        if road:
            return str(road)

    parts = [
        poi.get("upperAddrName"),
        poi.get("middleAddrName"),
        poi.get("lowerAddrName"),
        poi.get("detailAddrName"),
    ]
    return " ".join(str(part).strip() for part in parts if str(part or "").strip())


def _parse_poi(poi: dict[str, Any]) -> Place | None:
    lng = _to_float(poi.get("frontLon") or poi.get("noorLon") or poi.get("lon"))
    lat = _to_float(poi.get("frontLat") or poi.get("noorLat") or poi.get("lat"))
    name = str(poi.get("name") or poi.get("poiName") or "").strip()
    if lng is None or lat is None or not name:
        return None
    return Place(
        id=str(poi.get("id") or poi.get("pkey") or name),
        name=name,
        address=_address_from_poi(poi),
        lat=lat,
        lng=lng,
    )


def _parse_geocoding_item(item: dict[str, Any], fallback_name: str) -> Place | None:
    lng = _to_float(
        item.get("lon")
        or item.get("newLon")
        or item.get("frontLon")
        or item.get("noorLon")
        or item.get("x")
    )
    lat = _to_float(
        item.get("lat")
        or item.get("newLat")
        or item.get("frontLat")
        or item.get("noorLat")
        or item.get("y")
    )
    if lng is None or lat is None:
        return None
    address = str(item.get("fullAddress") or item.get("fullAddr") or fallback_name).strip()
    return Place(
        id=str(item.get("addressKey") or item.get("roadAddressKey") or address),
        name=address or fallback_name,
        address=address,
        lat=lat,
        lng=lng,
    )


def search_places(query: str, place_type: str = "poi", count: int = 8) -> list[dict[str, Any]]:
    normalized = query.strip()
    if not normalized:
        return []

    places: list[Place] = []
    if place_type != "address":
        params = {
            "version": "1",
            "searchKeyword": normalized,
            "searchType": "all",
            "page": "1",
            "count": str(max(1, min(count, 20))),
            "resCoordType": "WGS84GEO",
            "reqCoordType": "WGS84GEO",
            "multiPoint": "N",
            "searchtypCd": "A",
            "poiGroupYn": "N",
        }
        resp = requests.get(f"{TMAP_BASE_URL}/pois", params=params, headers=_headers(), timeout=REQUEST_TIMEOUT)
        if resp.status_code >= 400:
            raise TMapError(f"T-map POI 검색 실패: HTTP {resp.status_code}")
        raw_pois = resp.json().get("searchPoiInfo", {}).get("pois", {}).get("poi", [])
        if isinstance(raw_pois, dict):
            raw_pois = [raw_pois]
        places.extend(place for poi in raw_pois if (place := _parse_poi(poi)))

    if place_type == "address" or not places:
        params = {
            "version": "1",
            "format": "json",
            "addressFlag": "F00",
            "coordType": "WGS84GEO",
            "fullAddr": normalized,
            "page": "1",
            "count": str(max(1, min(count, 20))),
        }
        resp = requests.get(
            f"{TMAP_BASE_URL}/geo/fullAddrGeo",
            params=params,
            headers=_headers(),
            timeout=REQUEST_TIMEOUT,
        )
        if resp.status_code >= 400:
            raise TMapError(f"T-map 주소 검색 실패: HTTP {resp.status_code}")
        raw_items = resp.json().get("coordinateInfo", {}).get("coordinate", [])
        if isinstance(raw_items, dict):
            raw_items = [raw_items]
        places.extend(item for raw in raw_items if (item := _parse_geocoding_item(raw, normalized)))

    seen: set[tuple[str, float, float]] = set()
    unique: list[dict[str, Any]] = []
    for place in places:
        key = (place.name, round(place.lat, 6), round(place.lng, 6))
        if key not in seen:
            seen.add(key)
            unique.append(place.to_dict())
    return unique[:count]


def _route_payload(origin: dict[str, Any], destination: dict[str, Any], search_option: str) -> dict[str, Any]:
    return {
        "startX": origin["lng"],
        "startY": origin["lat"],
        "endX": destination["lng"],
        "endY": destination["lat"],
        "reqCoordType": "WGS84GEO",
        "resCoordType": "WGS84GEO",
        "startName": quote(str(origin.get("name") or "출발지")),
        "endName": quote(str(destination.get("name") or "도착지")),
        "searchOption": search_option,
        "sort": "index",
    }


def _extract_route_summary(features: list[dict[str, Any]]) -> tuple[int, int]:
    total_distance = 0
    total_time = 0

    for feature in features:
        props = feature.get("properties", {})
        if props.get("totalDistance") is not None:
            total_distance = int(_to_float(props.get("totalDistance")) or 0)
            total_time = int(_to_float(props.get("totalTime")) or 0)
            if total_distance or total_time:
                return total_distance, total_time

    for feature in features:
        if feature.get("geometry", {}).get("type") != "LineString":
            continue
        props = feature.get("properties", {})
        total_distance += int(_to_float(props.get("distance")) or 0)
        total_time += int(_to_float(props.get("time")) or 0)

    return total_distance, total_time


def _parse_tmap_feature_collection(
    data: dict[str, Any],
    *,
    search_option: str,
    label: str,
    pregnancy_week: int,
) -> dict[str, Any]:
    features = data.get("features", [])
    if not isinstance(features, list) or not features:
        raise TMapError("T-map 경로 응답에 features가 없습니다.")

    total_distance, total_time = _extract_route_summary(features)
    path: list[list[float]] = []
    point_descriptions: list[str] = []
    crosswalk_count = 0
    turn_count = 0
    pedestrian_distance = 0
    total_line_distance = 0

    for feature in features:
        geometry = feature.get("geometry", {})
        props = feature.get("properties", {})
        geom_type = geometry.get("type")

        if geom_type == "LineString":
            coords = geometry.get("coordinates", [])
            for coord in coords:
                if isinstance(coord, list) and len(coord) >= 2:
                    lng = _to_float(coord[0])
                    lat = _to_float(coord[1])
                    if lng is not None and lat is not None:
                        path.append([lng, lat])
            distance = int(_to_float(props.get("distance")) or 0)
            total_line_distance += distance
            if str(props.get("roadType")) in {"21", "22", "24"} or "보행자도로" in str(props.get("name", "")):
                pedestrian_distance += distance

        if geom_type == "Point":
            description = str(props.get("description") or "").strip()
            if description:
                point_descriptions.append(description)
            turn_type = props.get("turnType")
            if turn_type == 212 or str(turn_type) == "212" or "횡단보도" in description:
                crosswalk_count += 1
            if turn_type not in (None, 0, 200, 201, "0", "200", "201"):
                turn_count += 1

    compact_path = _compact_path(path)
    if not compact_path:
        raise TMapError("T-map 경로 응답에서 좌표를 찾지 못했습니다.")

    if total_line_distance == 0:
        total_line_distance = max(total_distance, 1)
    pedestrian_ratio = pedestrian_distance / total_line_distance

    distance_score = _normalize_inverse(total_distance, best=300, worst=1800)
    crosswalk_score = _clamp(100 - crosswalk_count * 11)
    stairs_excluded = search_option == "30"
    slope_score = _clamp(88 - turn_count * 1.4 - max(0, total_distance - 900) * 0.015 + (8 if stairs_excluded else 0))
    barrier_score = _clamp(55 + pedestrian_ratio * 24 + (13 if stairs_excluded else 0) - crosswalk_count * 2.5)

    weights = _week_weights(pregnancy_week)
    comfort_score = round(
        weights["distance"] * distance_score
        + weights["slope"] * slope_score
        + weights["crosswalk"] * crosswalk_score
        + weights["barrier"] * barrier_score
    )

    return {
        "routeId": f"route-{search_option}",
        "name": label,
        "provider": "tmap",
        "searchOption": search_option,
        "distance": total_distance,
        "duration": total_time,
        "comfortScore": int(_clamp(comfort_score)),
        "path": compact_path,
        "metrics": {
            "crosswalkCount": crosswalk_count,
            "slopeScore": round(slope_score),
            "barrierFreeScore": round(barrier_score),
            "stairsExcluded": stairs_excluded,
        },
        "instructions": point_descriptions[:12],
        "warnings": ["경사도와 배리어프리 점수는 v1 추정값입니다."],
    }


def _is_duplicate_route(route: dict[str, Any], existing: list[dict[str, Any]]) -> bool:
    route_path = route.get("path") or []
    route_sig = route_path[:: max(1, len(route_path) // 3)][:4]
    for prev in existing:
        if abs(route["distance"] - prev["distance"]) > 20 or abs(route["duration"] - prev["duration"]) > 20:
            continue
        prev_path = prev.get("path") or []
        prev_sig = prev_path[:: max(1, len(prev_path) // 3)][:4]
        if route_sig == prev_sig:
            return True
    return False


def recommend_routes(origin: dict[str, Any], destination: dict[str, Any], pregnancy_week: int) -> dict[str, Any]:
    routes: list[dict[str, Any]] = []
    option_warnings: list[str] = []

    for search_option, label in ROUTE_OPTIONS:
        payload = _route_payload(origin, destination, search_option)
        try:
            resp = requests.post(
                f"{TMAP_BASE_URL}/routes/pedestrian",
                params={"version": "1"},
                json=payload,
                headers=_headers(),
                timeout=REQUEST_TIMEOUT,
            )
            if resp.status_code >= 400:
                option_warnings.append(f"{label} 후보 요청 실패: HTTP {resp.status_code}")
                continue

            route = _parse_tmap_feature_collection(
                resp.json(),
                search_option=search_option,
                label=label,
                pregnancy_week=pregnancy_week,
            )
        except requests.RequestException as exc:
            option_warnings.append(f"{label} 후보 네트워크 오류: {exc.__class__.__name__}")
            continue
        except TMapError as exc:
            option_warnings.append(f"{label} 후보 파싱 실패: {exc}")
            continue

        if not _is_duplicate_route(route, routes):
            routes.append(route)

    if not routes:
        detail = " / ".join(option_warnings) if option_warnings else "응답 후보가 비어 있습니다."
        raise TMapError(f"추천할 수 있는 T-map 보행자 경로가 없습니다. {detail}")

    routes.sort(key=lambda item: (item["comfortScore"], item["searchOption"] == "30"), reverse=True)
    return {
        "bestRouteId": routes[0]["routeId"],
        "routes": routes,
        "warnings": list(
            dict.fromkeys(
                [
                    *(warning for route in routes for warning in route.get("warnings", [])),
                    *option_warnings,
                ]
            )
        ),
    }


def haversine_meters(a: list[float], b: list[float]) -> float:
    lng1, lat1 = a
    lng2, lat2 = b
    radius = 6371000
    phi1 = math.radians(lat1)
    phi2 = math.radians(lat2)
    delta_phi = math.radians(lat2 - lat1)
    delta_lambda = math.radians(lng2 - lng1)
    h = math.sin(delta_phi / 2) ** 2 + math.cos(phi1) * math.cos(phi2) * math.sin(delta_lambda / 2) ** 2
    return 2 * radius * math.atan2(math.sqrt(h), math.sqrt(1 - h))
