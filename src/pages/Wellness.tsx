import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  SlidersHorizontal,
  Star,
} from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import {
  wellnessProductRecommendations,
  type WellnessProductRecommendation,
} from "@/data/wellnessProductRecommendations";

type Product = WellnessProductRecommendation;
type Segment = { readonly name: string; readonly count: number; readonly ratio: number };

const categories = ["전체", ...Array.from(new Set(wellnessProductRecommendations.map((item) => item.product_category)))];

function average(values: number[]) {
  if (values.length === 0) return 0;
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function getStageLabel(week: number) {
  if (week <= 12) {
    return {
      label: "초기",
      description: "입덧, 냄새 민감도, 기초 영양 관리 중심",
      className: "bg-sky-100 text-sky-800 hover:bg-sky-100",
    };
  }
  if (week <= 27) {
    return {
      label: "중기",
      description: "붓기, 보습, 철분·칼슘 보충, 수면 자세 관리 중심",
      className: "bg-primary/15 text-primary hover:bg-primary/15",
    };
  }
  return {
    label: "후기",
    description: "출산 준비, 수유·수면 보조, 압박감 완화 중심",
    className: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
  };
}

function getLabelClass(label: string) {
  if (label === "추천") return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100";
  if (label === "비추천") return "bg-amber-100 text-amber-900 hover:bg-amber-100";
  return "bg-primary/15 text-primary hover:bg-primary/15";
}

function getPrimaryReview(product: Product) {
  return (
    product.sample_reviews.find((review) => review.review_detail_level === "normal")
    ?? product.sample_reviews[0]
  );
}

function collectSegments(products: Product[], getSegments: (product: Product) => readonly Segment[] | undefined) {
  const totals = new Map<string, number>();

  products.forEach((product) => {
    getSegments(product)?.forEach((segment) => {
      totals.set(segment.name, (totals.get(segment.name) ?? 0) + segment.count);
    });
  });

  return Array.from(totals.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 4);
}

function ProductCard({ product }: { product: Product }) {
  const review = getPrimaryReview(product);

  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-xs">{product.product_category}</Badge>
              <Badge className={`text-xs ${getLabelClass(product.recommendation_label)}`}>
                {product.recommendation_label}
              </Badge>
            </div>
            <p className="text-sm font-bold leading-snug text-foreground">{product.product_name}</p>
          </div>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <ShieldCheck className="h-4 w-4 text-primary" />
          </div>
        </div>

        <p className="min-h-10 text-xs leading-relaxed text-muted-foreground">{product.fit_reason}</p>

        <div>
          <div className="mb-1 flex justify-between text-xs">
            <span className="text-muted-foreground">신뢰점수</span>
            <span className="font-bold text-primary">{product.trust_percent}%</span>
          </div>
          <Progress value={product.trust_percent} className="h-2" />
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="rounded-md bg-secondary p-2 text-center">
            <Star className="mx-auto mb-1 h-3.5 w-3.5 text-primary" />
            <p className="font-bold text-foreground">{product.average_rating.toFixed(1)}</p>
            <p className="text-[11px] text-muted-foreground">별점</p>
          </div>
          <div className="rounded-md bg-secondary p-2 text-center">
            <CheckCircle2 className="mx-auto mb-1 h-3.5 w-3.5 text-emerald-600" />
            <p className="font-bold text-foreground">{product.sentiment_percent}%</p>
            <p className="text-[11px] text-muted-foreground">감성</p>
          </div>
          <div className="rounded-md bg-secondary p-2 text-center">
            <AlertTriangle className="mx-auto mb-1 h-3.5 w-3.5 text-amber-600" />
            <p className="font-bold text-foreground">{product.safety_risk_percent}%</p>
            <p className="text-[11px] text-muted-foreground">주의</p>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-background p-3">
          <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-foreground">
            <MessageCircle className="h-3.5 w-3.5 text-primary" />
            대표 후기
          </div>
          <p className="text-xs font-medium text-foreground">{review?.title ?? "후기 요약"}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {review?.content ?? "제품 리뷰를 기준으로 추천 점수를 계산했습니다."}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between text-[11px] text-muted-foreground">
          <span>리뷰 {product.review_count.toLocaleString()}개</span>
          <span>구매인증 {Math.round(product.verified_purchase_ratio * 100)}%</span>
        </div>
      </CardContent>
    </Card>
  );
}

function WarningCard({ product }: { product: Product }) {
  return (
    <Card className="border-amber-200 bg-amber-50/40">
      <CardContent className="p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <Badge className="bg-amber-100 text-amber-900 hover:bg-amber-100">주의 확인</Badge>
              <Badge variant="secondary">{product.product_category}</Badge>
            </div>
            <p className="text-sm font-bold text-foreground">{product.product_name}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{product.fit_reason}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {product.warning_tags.slice(0, 5).map((tag) => (
                <span key={tag} className="rounded-full bg-background px-2 py-1 text-[11px] font-medium text-amber-900">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="grid w-full grid-cols-3 gap-2 text-xs md:w-72">
            <div className="rounded-md bg-background p-2 text-center">
              <p className="text-muted-foreground">신뢰점수</p>
              <p className="font-bold text-foreground">{product.trust_percent}%</p>
            </div>
            <div className="rounded-md bg-background p-2 text-center">
              <p className="text-muted-foreground">안전 리스크</p>
              <p className="font-bold text-amber-700">{product.safety_risk_percent}%</p>
            </div>
            <div className="rounded-md bg-background p-2 text-center">
              <p className="text-muted-foreground">감성점수</p>
              <p className="font-bold text-foreground">{product.sentiment_percent}%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Wellness() {
  const [week, setWeek] = useState([24]);
  const [category, setCategory] = useState("전체");
  const currentWeek = week[0];
  const stage = getStageLabel(currentWeek);

  const activeProducts = useMemo(() => {
    return wellnessProductRecommendations.filter((product) => {
      const inWeek = currentWeek >= product.week[0] && currentWeek <= product.week[1];
      const inCategory = category === "전체" || product.product_category === category;
      return inWeek && inCategory;
    });
  }, [category, currentWeek]);

  const recommendedProducts = useMemo(() => {
    return [...activeProducts]
      .filter((product) => product.recommendation_label !== "비추천")
      .sort((a, b) => (
        b.trust_percent - a.trust_percent
        || a.safety_risk_percent - b.safety_risk_percent
        || b.review_count - a.review_count
      ))
      .slice(0, 6);
  }, [activeProducts]);

  const warningProducts = useMemo(() => {
    const warnings = activeProducts.filter((product) => (
      product.recommendation_label === "비추천"
      || product.safety_risk_percent >= 30
      || product.warning_tags.length >= 4
    ));

    return [...warnings]
      .sort((a, b) => (
        b.safety_risk_percent - a.safety_risk_percent
        || a.trust_percent - b.trust_percent
      ))
      .slice(0, 3);
  }, [activeProducts]);

  const avgTrust = average(activeProducts.map((product) => product.trust_percent));
  const avgSentiment = average(activeProducts.map((product) => product.sentiment_percent));
  const avgRisk = average(activeProducts.map((product) => product.safety_risk_percent));
  const purchaseContexts = collectSegments(
    activeProducts,
    (product) => product.review_context_segments.purchase_contexts,
  );
  const reviewFocuses = collectSegments(
    activeProducts,
    (product) => product.review_context_segments.review_focuses,
  );
  const sentimentData = [
    { name: "긍정", value: avgSentiment, color: "hsl(152, 62%, 42%)" },
    { name: "주의", value: Math.max(0, 100 - avgSentiment), color: "hsl(42, 88%, 67%)" },
  ];

  return (
    <main className="flex-1 overflow-y-auto bg-background p-6 lg:p-8">
      <div className="mb-6 pr-28">
        <h1 className="text-2xl font-bold text-foreground">임신 주수별 웰니스 추천</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          합성 리뷰 1,500건을 집계한 신뢰점수, 감성점수, 안전성 리스크로 제품을 선별합니다.
        </p>
      </div>

      <Card className="mb-6">
        <CardContent className="space-y-5 p-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-sm font-semibold text-foreground">임신 주수</span>
                <Badge className={stage.className}>{stage.label} {currentWeek}주</Badge>
              </div>
              <p className="text-xs text-muted-foreground">{stage.description}</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-muted-foreground">
              <SlidersHorizontal className="h-3.5 w-3.5 text-primary" />
              신뢰점수 = 별점 + 감성 + 주수 적합성 - 안전성 리스크
            </div>
          </div>

          <Slider value={week} onValueChange={setWeek} min={1} max={40} step={1} className="w-full" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1주</span>
            <span>12주</span>
            <span>27주</span>
            <span>40주</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  category === item
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          { label: "대상 제품", value: `${activeProducts.length}개` },
          { label: "추천 가능", value: `${recommendedProducts.length}개` },
          { label: "평균 신뢰점수", value: `${avgTrust}%` },
          { label: "평균 안전 리스크", value: `${avgRisk}%` },
        ].map((item) => (
          <Card key={item.label}>
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="mt-1 text-2xl font-bold text-foreground">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-base font-semibold text-foreground">추천 제품</h2>
              <span className="text-xs text-muted-foreground">신뢰점수 높은 순</span>
            </div>

            {recommendedProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {recommendedProducts.map((product) => (
                  <ProductCard key={product.product_id} product={product} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-6 text-sm text-muted-foreground">
                  현재 조건에 맞는 추천 제품이 없습니다. 카테고리나 주수를 바꿔보세요.
                </CardContent>
              </Card>
            )}
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-base font-semibold text-foreground">주의해서 볼 제품</h2>
              <span className="text-xs text-muted-foreground">안전 리스크와 부정 신호 기준</span>
            </div>

            <div className="space-y-3">
              {warningProducts.length > 0 ? (
                warningProducts.map((product) => (
                  <WarningCard key={product.product_id} product={product} />
                ))
              ) : (
                <Card>
                  <CardContent className="p-6 text-sm text-muted-foreground">
                    현재 조건에서는 뚜렷한 주의 제품이 없습니다.
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>

        <div>
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="text-base">리뷰 신호 요약</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <ResponsiveContainer width="100%" height={210}>
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={52}
                    outerRadius={78}
                    dataKey="value"
                    paddingAngle={4}
                  >
                    {sentimentData.map((item) => (
                      <Cell key={item.name} fill={item.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {sentimentData.map((item) => (
                  <div key={item.name} className="rounded-lg bg-secondary p-3 text-center">
                    <div className="mx-auto mb-1 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <p className="text-muted-foreground">{item.name}</p>
                    <p className="text-lg font-bold text-foreground">{item.value}%</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold text-foreground">주요 구매 맥락</p>
                <div className="space-y-2">
                  {purchaseContexts.map((item) => (
                    <div key={item.name} className="flex items-center justify-between rounded-lg bg-background px-3 py-2 text-xs">
                      <span className="text-muted-foreground">{item.name}</span>
                      <span className="font-semibold text-foreground">{item.count}건</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold text-foreground">리뷰가 많이 보는 포인트</p>
                <div className="flex flex-wrap gap-1.5">
                  {reviewFocuses.map((item) => (
                    <span key={item.name} className="rounded-full bg-primary/10 px-2 py-1 text-[11px] font-medium text-primary">
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
