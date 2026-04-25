import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const products = [
  { name: "메디앙스 임산부 엽산 프리미엄", category: "영양제", trust: 92, rating: 4.8, sentiment: 88, reviews: 3420, week: [1, 40] },
  { name: "마더케이 임산부 바디필로우", category: "수면용품", trust: 88, rating: 4.7, sentiment: 85, reviews: 2180, week: [13, 40] },
  { name: "닥터브로너스 무향 바디워시", category: "바디케어", trust: 85, rating: 4.6, sentiment: 82, reviews: 1850, week: [1, 40] },
];

const warningProduct = {
  name: "○○ 임산부 크림 (별점↑ 감성↓)",
  category: "스킨케어",
  trust: 58,
  rating: 4.5,
  sentiment: 35,
  reviews: 980,
  warning: "부정어 다수 감지: '향이 너무 강함', '피부 트러블', '성분 의심'",
};

const sentimentData = [
  { name: "긍정", value: 72, color: "hsl(352, 87%, 67%)" },
  { name: "부정", value: 28, color: "hsl(350, 70%, 82%)" },
];

function getStageLabel(week: number) {
  if (week <= 12) return { label: "초기", color: "bg-secondary text-secondary-foreground" };
  if (week <= 27) return { label: "중기", color: "bg-primary/70 text-primary-foreground" };
  return { label: "후기", color: "bg-primary text-primary-foreground" };
}

export default function Wellness() {
  const [week, setWeek] = useState([24]);
  const stage = getStageLabel(week[0]);

  const filtered = products.filter((p) => week[0] >= p.week[0] && week[0] <= p.week[1]);

  return (
    <main className="flex-1 overflow-y-auto bg-background p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">임신 주수별 맞춤 제품 추천</h1>
        <p className="text-sm text-muted-foreground mt-1">쿠팡 리뷰 감성분석 기반 신뢰점수로 검증된 제품만 추천드려요</p>
      </div>

      {/* Week Slider */}
      <Card className="mb-6">
        <CardContent className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground">임신 주수</span>
              <Badge className={stage.color}>{stage.label} {week[0]}주</Badge>
            </div>
            <Badge variant="outline" className="text-xs">🧮 신뢰점수 = 별점 60% + 감성분석 40%</Badge>
          </div>
          <Slider value={week} onValueChange={setWeek} min={1} max={40} step={1} className="w-full" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1주 (초기)</span>
            <span>12주</span>
            <span>27주</span>
            <span>40주 (후기)</span>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Product Cards */}
        <div className="xl:col-span-2 space-y-6">
          <h2 className="text-base font-semibold text-foreground">✅ 추천 제품</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <Card key={p.name}>
                <CardContent className="p-5 space-y-3">
                  <Badge variant="secondary" className="text-xs">{p.category}</Badge>
                  <p className="text-sm font-semibold text-foreground leading-tight">{p.name}</p>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">신뢰점수</span>
                      <span className="font-bold text-primary">{p.trust}%</span>
                    </div>
                    <Progress value={p.trust} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-md bg-secondary p-2 text-center">
                      <p className="text-muted-foreground">별점</p>
                      <p className="font-bold text-foreground">⭐ {p.rating}</p>
                    </div>
                    <div className="rounded-md bg-secondary p-2 text-center">
                      <p className="text-muted-foreground">감성점수</p>
                      <p className="font-bold text-foreground">{p.sentiment}%</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">리뷰 {p.reviews.toLocaleString()}개</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Warning */}
          <h2 className="text-base font-semibold text-foreground">⚠️ 주의 제품</h2>
          <Card className="border-2 border-warning/50">
            <CardContent className="p-5 flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{warningProduct.category}</Badge>
                  <Badge className="bg-warning text-warning-foreground text-xs">주의</Badge>
                </div>
                <p className="text-sm font-semibold text-foreground">{warningProduct.name}</p>
                <p className="text-xs text-muted-foreground">{warningProduct.warning}</p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="rounded-md bg-secondary p-2 text-center">
                    <p className="text-muted-foreground">별점</p>
                    <p className="font-bold">⭐ {warningProduct.rating}</p>
                  </div>
                  <div className="rounded-md bg-secondary p-2 text-center">
                    <p className="text-muted-foreground">감성점수</p>
                    <p className="font-bold text-destructive">{warningProduct.sentiment}%</p>
                  </div>
                  <div className="rounded-md bg-secondary p-2 text-center">
                    <p className="text-muted-foreground">신뢰점수</p>
                    <p className="font-bold text-destructive">{warningProduct.trust}%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Donut Chart */}
        <div>
          <Card className="sticky top-6">
            <CardHeader><CardTitle className="text-base">감성분석 긍/부정 비율</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={sentimentData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" paddingAngle={4}>
                    {sentimentData.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 text-sm mt-2">
                {sentimentData.map((d) => (
                  <div key={d.name} className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: d.color }} />
                    <span className="text-muted-foreground">{d.name}</span>
                    <span className="font-bold text-foreground">{d.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
