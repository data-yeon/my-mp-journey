import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Legend, Tooltip,
} from "recharts";

const radarData = [
  { axis: "경사도", A: 85, B: 60, C: 30 },
  { axis: "횡단보도", A: 90, B: 70, C: 45 },
  { axis: "이동거리", A: 75, B: 80, C: 50 },
  { axis: "엘리베이터", A: 95, B: 55, C: 40 },
  { axis: "배리어프리", A: 92, B: 65, C: 35 },
];

const routes = [
  {
    name: "경로 A — 엘리베이터 우선",
    score: 88,
    badge: "추천",
    badgeClass: "bg-success text-success-foreground",
    color: "hsl(152, 60%, 45%)",
    detail: { slope: 85, crosswalk: 90, distance: 75, elevator: 95, barrier: 92 },
  },
  {
    name: "경로 B — 최단 거리",
    score: 65,
    badge: "보통",
    badgeClass: "bg-warning text-warning-foreground",
    color: "hsl(38, 92%, 50%)",
    detail: { slope: 60, crosswalk: 70, distance: 80, elevator: 55, barrier: 65 },
  },
  {
    name: "경로 C — 일반 도보",
    score: 38,
    badge: "위험",
    badgeClass: "bg-destructive text-destructive-foreground",
    color: "hsl(0, 84%, 60%)",
    detail: { slope: 30, crosswalk: 45, distance: 50, elevator: 40, barrier: 35 },
  },
];

const formula = [
  { factor: "경사도", weight: "40%" },
  { factor: "횡단보도 수", weight: "25%" },
  { factor: "이동거리", weight: "20%" },
  { factor: "기타 (엘리베이터·배리어프리 등)", weight: "15%" },
];

export default function RouteRecommend() {
  return (
    <main className="flex-1 overflow-y-auto bg-background p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">임산부 맞춤 동선 추천</h1>
        <p className="text-sm text-muted-foreground mt-1">경사도·횡단보도·배리어프리 데이터 기반 이동 스트레스 지수를 계산했어요</p>
      </div>

      {/* Search */}
      <Card className="mb-6">
        <CardContent className="p-4 flex gap-3">
          <Input placeholder="산부인과 이름 또는 주소를 입력하세요" className="flex-1" />
          <Button><Search className="h-4 w-4 mr-2" />검색</Button>
        </CardContent>
      </Card>

      {/* Map placeholder + Radar */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader><CardTitle className="text-base">🗺️ 경로 지도</CardTitle></CardHeader>
          <CardContent>
            <div className="relative w-full h-[300px] rounded-lg bg-secondary/50 flex items-center justify-center overflow-hidden">
              {/* Dummy map */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,hsl(var(--border))_25%,transparent_25%,transparent_75%,hsl(var(--border))_75%)] bg-[length:20px_20px]" />
              <div className="z-10 text-center space-y-2">
                <p className="text-sm font-medium text-muted-foreground">강남세브란스 산부인과 주변 경로</p>
                <div className="flex gap-3 justify-center">
                  {routes.map((r) => (
                    <Badge key={r.name} style={{ backgroundColor: r.color, color: "#fff" }} className="text-xs">
                      {r.name.split("—")[0].trim()}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">📊 경로 비교 레이더 차트</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="axis" tick={{ fontSize: 11 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
                <Tooltip />
                <Legend />
                <Radar name="경로 A" dataKey="A" stroke={routes[0].color} fill={routes[0].color} fillOpacity={0.15} strokeWidth={2} />
                <Radar name="경로 B" dataKey="B" stroke={routes[1].color} fill={routes[1].color} fillOpacity={0.15} strokeWidth={2} />
                <Radar name="경로 C" dataKey="C" stroke={routes[2].color} fill={routes[2].color} fillOpacity={0.15} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Route Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {routes.map((r) => (
          <Card key={r.name} className="border-l-4" style={{ borderLeftColor: r.color }}>
            <CardContent className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
                <Badge className={r.badgeClass}>{r.badge}</Badge>
              </div>
              <div className="text-center py-2">
                <span className="text-3xl font-bold text-foreground">{r.score}</span>
                <span className="text-sm text-muted-foreground"> / 100점</span>
              </div>
              <div className="space-y-1.5 text-xs">
                {Object.entries(r.detail).map(([k, v]) => {
                  const labels: Record<string, string> = { slope: "경사도", crosswalk: "횡단보도", distance: "이동거리", elevator: "엘리베이터", barrier: "배리어프리" };
                  return (
                    <div key={k} className="flex justify-between">
                      <span className="text-muted-foreground">{labels[k]}</span>
                      <span className="font-medium text-foreground">{v}점</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Formula */}
      <Card>
        <CardHeader><CardTitle className="text-base">🧮 이동 스트레스 지수 계산 공식</CardTitle></CardHeader>
        <CardContent>
          <div className="rounded-lg bg-secondary/50 p-4">
            <p className="text-sm text-foreground font-medium mb-3">
              스트레스 지수 = Σ (항목별 점수 × 가중치)
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {formula.map((f) => (
                <div key={f.factor} className="rounded-lg bg-card p-3 text-center border">
                  <p className="text-xs text-muted-foreground">{f.factor}</p>
                  <p className="text-lg font-bold text-primary">{f.weight}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
