import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from "recharts";
import routeData from "@/data/mobility_route_real.json";

// Leaflet 기본 마커 아이콘 경로 수정 (Vite 번들러 이슈)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:       "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// ── 타입 ─────────────────────────────────────────────────────────────────────
interface RouteRecord {
  route_id: string;
  hospital_name: string;
  hospital_district: string;
  route_name: string;
  origin: { name: string; lat: number; lng: number };
  destination: { name: string; lat: number; lng: number };
  summary: {
    distance: number;
    duration: number;
    crosswalk_count: number;
    slope_section_count: number;
    elevator_count: number;
    barrier_free_ratio: number;
  };
  stress_index: number;
  accessibility_grade: string;
  path: number[][];
  data_source: string;
}

// ── 상수 ─────────────────────────────────────────────────────────────────────
const ROUTE_COLORS: Record<string, string> = {
  A: "#22c55e", B: "#f59e0b", C: "#f97316", D: "#ef4444", E: "#8b5cf6",
};
const GRADE_COLORS: Record<string, string> = {
  A: "#22c55e", B: "#f59e0b", C: "#f97316", D: "#ef4444",
};
const GRADE_LABELS: Record<string, string> = {
  A: "매우 편함", B: "보통", C: "주의", D: "어려움",
};

const HOSPITALS = [...new Map(
  (routeData as unknown as RouteRecord[]).map((r) => [r.hospital_name, {
    name: r.hospital_name,
    district: r.hospital_district,
    lat: r.destination.lat,
    lng: r.destination.lng,
  }])
).values()];

// ── 지도 뷰 이동 헬퍼 ────────────────────────────────────────────────────────
function FlyTo({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => { map.flyTo([lat, lng], 15, { duration: 1 }); }, [lat, lng, map]);
  return null;
}

// ── 스트레스 지수 → 레이더 데이터 변환 ───────────────────────────────────────
function toRadarData(routes: RouteRecord[]) {
  const dims = [
    { key: "slope_section_count",  label: "경사도",    inverted: true,  max: 8   },
    { key: "crosswalk_count",      label: "횡단보도",   inverted: true,  max: 10  },
    { key: "distance",             label: "이동거리",   inverted: true,  max: 1500},
    { key: "elevator_count",       label: "엘리베이터", inverted: false, max: 2   },
    { key: "barrier_free_ratio",   label: "배리어프리", inverted: false, max: 1   },
  ];

  return dims.map(({ key, label, inverted, max }) => {
    const entry: Record<string, string | number> = { axis: label };
    routes.forEach((r) => {
      const raw = r.summary[key as keyof typeof r.summary] as number;
      const norm = inverted
        ? Math.round(Math.max(0, (max - raw) / max) * 100)
        : Math.round(Math.min(1, raw / max) * 100);
      entry[r.route_name.split("—")[0].trim()] = norm;
    });
    return entry;
  });
}

// ── 메인 컴포넌트 ─────────────────────────────────────────────────────────────
export default function RouteRecommend() {
  const [selectedHospital, setSelectedHospital] = useState(HOSPITALS[0]);
  const [search, setSearch] = useState("");

  const hospitalRoutes = useMemo(
    () => (routeData as unknown as RouteRecord[]).filter((r) => r.hospital_name === selectedHospital.name),
    [selectedHospital]
  );

  const bestRoute = useMemo(
    () => [...hospitalRoutes].sort((a, b) => b.stress_index - a.stress_index)[0],
    [hospitalRoutes]
  );

  const radarData = useMemo(() => toRadarData(hospitalRoutes), [hospitalRoutes]);

  const filtered = useMemo(
    () => HOSPITALS.filter((h) =>
      h.name.includes(search) || h.district.includes(search)
    ),
    [search]
  );

  return (
    <main className="flex-1 overflow-y-auto bg-background p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">임산부 맞춤 동선 추천</h1>
        <p className="text-sm text-muted-foreground mt-1">
          T-map 보행자 경로 API 기반 이동 스트레스 지수 · 경사도 40% · 횡단보도 25% · 이동거리 20% · 배리어프리 15%
        </p>
      </div>

      {/* 병원 검색 */}
      <Card className="mb-4">
        <CardContent className="p-4">
          <div className="flex gap-2 mb-3">
            <input
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              placeholder="산부인과 이름 또는 구 이름 검색"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filtered.map((h) => (
              <Button
                key={h.name}
                size="sm"
                variant={selectedHospital.name === h.name ? "default" : "outline"}
                onClick={() => { setSelectedHospital(h); setSearch(""); }}
                className="text-xs"
              >
                {h.name} <span className="ml-1 opacity-60">{h.district}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 지도 + 레이더 */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center justify-between">
              <span>🗺️ 경로 지도 — {selectedHospital.name}</span>
              <Badge style={{ backgroundColor: GRADE_COLORS[bestRoute?.accessibility_grade ?? "B"], color: "#fff" }}>
                추천: {bestRoute?.route_name.split("—")[0].trim()}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 overflow-hidden rounded-b-lg">
            <div style={{ height: 320 }}>
              <MapContainer
                center={[selectedHospital.lat, selectedHospital.lng]}
                zoom={15}
                style={{ height: "100%", width: "100%" }}
                zoomControl={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <FlyTo lat={selectedHospital.lat} lng={selectedHospital.lng} />

                {/* 목적지 마커 */}
                <Marker position={[selectedHospital.lat, selectedHospital.lng]}>
                  <Popup>{selectedHospital.name}</Popup>
                </Marker>

                {/* 경로 폴리라인 */}
                {hospitalRoutes.map((route) => {
                  const suffix = route.route_name.split("—")[0].replace("경로 ", "").trim();
                  const color = ROUTE_COLORS[suffix] ?? "#94a3b8";
                  const positions = route.path.map((c) => [c[1], c[0]] as [number, number]);
                  return (
                    <Polyline
                      key={route.route_id}
                      positions={positions}
                      color={color}
                      weight={suffix === bestRoute?.route_name.split("—")[0].replace("경로 ", "").trim() ? 5 : 3}
                      opacity={suffix === bestRoute?.route_name.split("—")[0].replace("경로 ", "").trim() ? 1 : 0.55}
                    >
                      <Popup>
                        {route.route_name}<br />
                        스트레스 지수: {(route.stress_index * 100).toFixed(0)}점<br />
                        거리: {route.summary.distance}m · 횡단보도: {route.summary.crosswalk_count}개
                      </Popup>
                    </Polyline>
                  );
                })}
              </MapContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">📊 경로별 편의성 비교</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="65%">
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="axis" tick={{ fontSize: 11 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 9 }} />
                <Tooltip />
                <Legend iconSize={10} wrapperStyle={{ fontSize: 11 }} />
                {hospitalRoutes.map((r) => {
                  const suffix = r.route_name.split("—")[0].replace("경로 ", "").trim();
                  const name = r.route_name.split("—")[0].trim();
                  return (
                    <Radar
                      key={r.route_id}
                      name={name}
                      dataKey={name}
                      stroke={ROUTE_COLORS[suffix] ?? "#94a3b8"}
                      fill={ROUTE_COLORS[suffix] ?? "#94a3b8"}
                      fillOpacity={0.12}
                      strokeWidth={2}
                    />
                  );
                })}
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* 경로 카드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mb-6">
        {hospitalRoutes.map((route) => {
          const suffix = route.route_name.split("—")[0].replace("경로 ", "").trim();
          const color = ROUTE_COLORS[suffix] ?? "#94a3b8";
          const grade = route.accessibility_grade;
          const isBest = route.route_id === bestRoute?.route_id;
          return (
            <Card key={route.route_id} className="border-t-4" style={{ borderTopColor: color }}>
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-foreground">{route.route_name.split("—")[0].trim()}</span>
                  {isBest && <Badge className="text-[10px] bg-primary text-primary-foreground">추천</Badge>}
                </div>
                <p className="text-[11px] text-muted-foreground leading-tight">
                  {route.route_name.split("—")[1]?.trim()}
                </p>
                <div className="text-center py-1">
                  <span className="text-2xl font-bold" style={{ color }}>
                    {(route.stress_index * 100).toFixed(0)}
                  </span>
                  <span className="text-xs text-muted-foreground"> / 100점</span>
                </div>
                <div
                  className="text-center text-xs font-medium rounded-full py-0.5"
                  style={{ backgroundColor: GRADE_COLORS[grade] + "22", color: GRADE_COLORS[grade] }}
                >
                  {grade}등급 · {GRADE_LABELS[grade]}
                </div>
                <div className="space-y-1 text-[11px] pt-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">이동거리</span>
                    <span>{route.summary.distance}m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">횡단보도</span>
                    <span>{route.summary.crosswalk_count}개</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">배리어프리</span>
                    <span>{Math.round(route.summary.barrier_free_ratio * 100)}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 공식 카드 */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">🧮 이동 스트레스 지수 공식</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-secondary/40 p-4 mb-3">
            <p className="text-sm font-mono text-foreground">
              스트레스 지수 = <span className="text-primary font-bold">0.40</span>×경사도 +{" "}
              <span className="text-primary font-bold">0.25</span>×횡단보도 +{" "}
              <span className="text-primary font-bold">0.20</span>×이동거리 +{" "}
              <span className="text-primary font-bold">0.15</span>×배리어프리
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            {[
              { label: "경사도", weight: "40%", desc: "공공데이터포털 보행환경DB" },
              { label: "횡단보도 수", weight: "25%", desc: "T-map 보행자 경로 API" },
              { label: "이동거리", weight: "20%", desc: "T-map 보행자 경로 API" },
              { label: "배리어프리", weight: "15%", desc: "글로벌 배리어프리 DB" },
            ].map((f) => (
              <div key={f.label} className="rounded-lg bg-card border p-3">
                <p className="text-xs text-muted-foreground">{f.label}</p>
                <p className="text-xl font-bold text-primary">{f.weight}</p>
                <p className="text-[10px] text-muted-foreground mt-1 leading-tight">{f.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
