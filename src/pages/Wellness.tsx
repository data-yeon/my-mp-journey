import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  User,
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

const categories = ["전체", ...Array.from(new Set(wellnessProductRecommendations.map((p) => p.product_category)))];

// 임신 시기별 카테고리 타임라인
const CATEGORY_TIMELINE = [
  {
    label: "초기 (1~12주)",
    color: "bg-sky-100 text-sky-800",
    bar: "bg-sky-300",
    range: [1, 12],
    categories: ["영양제", "바디케어"],
    tip: "엽산·오메가3 섭취 시작, 민감성 성분 주의",
  },
  {
    label: "중기 (13~27주)",
    color: "bg-primary/15 text-primary",
    bar: "bg-primary/50",
    range: [13, 27],
    categories: ["바디케어", "식품", "의류"],
    tip: "붓기·보습 케어, 철분 보충, 임부복 필요",
  },
  {
    label: "후기 (28~40주)",
    color: "bg-emerald-100 text-emerald-800",
    bar: "bg-emerald-400",
    range: [28, 40],
    categories: ["용품", "의류", "식품"],
    tip: "출산 준비, 수유 용품, 복부 압박 완화",
  },
];

function average(values: number[]) {
  if (values.length === 0) return 0;
  return Math.round(values.reduce((sum, v) => sum + v, 0) / values.length);
}

function getStageLabel(week: number) {
  if (week <= 12) return { label: "초기", description: "입덧, 냄새 민감도, 기초 영양 관리 중심", className: "bg-sky-100 text-sky-800 hover:bg-sky-100" };
  if (week <= 27) return { label: "중기", description: "붓기, 보습, 철분·칼슘 보충, 수면 자세 관리 중심", className: "bg-primary/15 text-primary hover:bg-primary/15" };
  return { label: "후기", description: "출산 준비, 수유·수면 보조, 압박감 완화 중심", className: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100" };
}

function getLabelClass(label: string) {
  if (label === "추천") return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100";
  if (label === "비추천") return "bg-amber-100 text-amber-900 hover:bg-amber-100";
  return "bg-primary/15 text-primary hover:bg-primary/15";
}

function collectSegments(products: Product[], getSegments: (p: Product) => readonly Segment[] | undefined) {
  const totals = new Map<string, number>();
  products.forEach((p) => getSegments(p)?.forEach((s) => totals.set(s.name, (totals.get(s.name) ?? 0) + s.count)));
  return Array.from(totals.entries()).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count).slice(0, 4);
}

// ── 신뢰점수 구성 분해 ────────────────────────────────────────────────────────
function TrustBreakdown({ product }: { product: Product }) {
  const ratingPct = Math.round((product.average_rating / 5) * 100);
  const fitPct = Math.round(product.average_pregnancy_fit_score * 100);
  const safePct = Math.round((1 - product.average_safety_risk_score) * 100);
  const items = [
    { label: "별점", value: ratingPct, color: "bg-amber-400" },
    { label: "감성", value: product.sentiment_percent, color: "bg-emerald-400" },
    { label: "적합성", value: fitPct, color: "bg-primary/70" },
    { label: "안전", value: safePct, color: "bg-sky-400" },
  ];
  return (
    <div className="space-y-1.5">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2 text-[11px]">
          <span className="w-10 shrink-0 text-muted-foreground">{item.label}</span>
          <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
            <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }} />
          </div>
          <span className="w-7 text-right font-semibold text-foreground">{item.value}%</span>
        </div>
      ))}
    </div>
  );
}

// ── 구매자 페르소나 미니 뷰 ───────────────────────────────────────────────────
function PersonaMini({ product }: { product: Product }) {
  const occs = [...(product.persona_segments.occupations ?? [])].sort((a, b) => b.count - a.count).slice(0, 3);
  const regs = [...(product.persona_segments.regions ?? [])].sort((a, b) => b.count - a.count).slice(0, 3);
  return (
    <div className="space-y-3">
      <div>
        <p className="text-[11px] font-semibold text-muted-foreground mb-1.5">주요 구매 직군</p>
        <div className="space-y-1">
          {occs.map((o) => (
            <div key={o.name} className="flex items-center gap-2 text-[11px]">
              <span className="w-16 shrink-0 text-foreground">{o.name}</span>
              <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                <div className="h-full rounded-full bg-primary/50" style={{ width: `${Math.round(o.ratio * 100)}%` }} />
              </div>
              <span className="w-8 text-right text-muted-foreground">{Math.round(o.ratio * 100)}%</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[11px] font-semibold text-muted-foreground mb-1.5">주요 구매 지역</p>
        <div className="flex flex-wrap gap-1">
          {regs.map((r) => (
            <span key={r.name} className="rounded-full bg-secondary px-2 py-0.5 text-[11px] text-foreground">
              {r.name} {Math.round(r.ratio * 100)}%
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── 제품 카드 ─────────────────────────────────────────────────────────────────
function ProductCard({ product }: { product: Product }) {
  const [expanded, setExpanded] = useState(false);
  const primaryReview = product.sample_reviews.find((r) => r.review_detail_level === "normal") ?? product.sample_reviews[0];
  const extraReviews = product.sample_reviews.filter((r) => r !== primaryReview).slice(0, 2);

  return (
    <Card className="h-fit">
      <CardContent className="flex flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-xs">{product.product_category}</Badge>
              <Badge className={`text-xs ${getLabelClass(product.recommendation_label)}`}>{product.recommendation_label}</Badge>
              <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground">카테고리 {product.rank_in_period_category}위</span>
            </div>
            <p className="text-sm font-bold leading-snug text-foreground">{product.product_name}</p>
          </div>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <ShieldCheck className="h-4 w-4 text-primary" />
          </div>
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">{product.fit_reason}</p>

        {/* 신뢰점수 전체 */}
        <div>
          <div className="mb-1 flex justify-between text-xs">
            <span className="text-muted-foreground">신뢰점수</span>
            <span className="font-bold text-primary">{product.trust_percent}%</span>
          </div>
          <Progress value={product.trust_percent} className="h-2 mb-3" />
          <TrustBreakdown product={product} />
        </div>

        {/* 숫자 요약 */}
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

        {/* 대표 후기 */}
        <div className="rounded-lg border border-border bg-background p-3">
          <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-foreground">
            <MessageCircle className="h-3.5 w-3.5 text-primary" />
            대표 후기
          </div>
          <p className="text-xs font-medium text-foreground">{primaryReview?.title ?? "후기 요약"}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{primaryReview?.content ?? "제품 리뷰를 기준으로 추천 점수를 계산했습니다."}</p>
          {primaryReview?.persona_summary && (
            <p className="mt-1.5 text-[10px] text-muted-foreground/70 italic">{primaryReview.persona_summary}</p>
          )}
        </div>

        {/* 펼치기 버튼 */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex w-full items-center justify-center gap-1 rounded-lg border border-dashed border-border py-1.5 text-xs text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
        >
          {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          {expanded ? "접기" : `추가 후기 ${extraReviews.length}건 · 구매자 정보 보기`}
        </button>

        {/* 확장 영역: 추가 후기 + 페르소나 */}
        {expanded && (
          <div className="space-y-4 border-t border-border pt-4">
            {extraReviews.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-semibold text-foreground">추가 후기</p>
                {extraReviews.map((r) => (
                  <div key={r.review_id} className="rounded-lg bg-secondary/50 p-3">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xs font-medium text-foreground">{r.title}</p>
                      <span className="text-[11px] text-muted-foreground">★ {r.rating.toFixed(1)}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">{r.content}</p>
                    {r.persona_summary && (
                      <p className="mt-1.5 flex items-center gap-1 text-[10px] text-muted-foreground/70 italic">
                        <User className="h-3 w-3" />{r.persona_summary}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
            <div>
              <p className="text-xs font-semibold text-foreground mb-2">구매자 프로필</p>
              <PersonaMini product={product} />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between text-[11px] text-muted-foreground">
          <span>리뷰 {product.review_count.toLocaleString()}개</span>
          <span>구매인증 {Math.round(product.verified_purchase_ratio * 100)}%</span>
        </div>
      </CardContent>
    </Card>
  );
}

// ── 주의 제품 카드 ────────────────────────────────────────────────────────────
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
              {product.warning_tags.map((tag) => (
                <span key={tag} className="rounded-full bg-background px-2 py-1 text-[11px] font-medium text-amber-900">{tag}</span>
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

// ── 메인 컴포넌트 ─────────────────────────────────────────────────────────────
export default function Wellness() {
  const [week, setWeek] = useState([24]);
  const [category, setCategory] = useState("전체");
  const currentWeek = week[0];
  const stage = getStageLabel(currentWeek);

  const activeProducts = useMemo(() => wellnessProductRecommendations.filter((p) => {
    const inWeek = currentWeek >= p.week[0] && currentWeek <= p.week[1];
    const inCategory = category === "전체" || p.product_category === category;
    return inWeek && inCategory;
  }), [category, currentWeek]);

  const recommendedProducts = useMemo(() =>
    [...activeProducts]
      .filter((p) => p.recommendation_label !== "비추천")
      .sort((a, b) => b.trust_percent - a.trust_percent || a.safety_risk_percent - b.safety_risk_percent)
      .slice(0, 6),
    [activeProducts]);

  const warningProducts = useMemo(() =>
    [...activeProducts]
      .filter((p) => p.recommendation_label === "비추천" || p.safety_risk_percent >= 30 || p.warning_tags.length >= 4)
      .sort((a, b) => b.safety_risk_percent - a.safety_risk_percent)
      .slice(0, 3),
    [activeProducts]);

  const avgTrust = average(activeProducts.map((p) => p.trust_percent));
  const avgSentiment = average(activeProducts.map((p) => p.sentiment_percent));
  const purchaseContexts = collectSegments(activeProducts, (p) => p.review_context_segments.purchase_contexts);
  const reviewFocuses = collectSegments(activeProducts, (p) => p.review_context_segments.review_focuses);
  const sentimentData = [
    { name: "긍정", value: avgSentiment, color: "hsl(152, 62%, 42%)" },
    { name: "주의", value: Math.max(0, 100 - avgSentiment), color: "hsl(42, 88%, 67%)" },
  ];

  const currentTimeline = CATEGORY_TIMELINE.find((t) => currentWeek >= t.range[0] && currentWeek <= t.range[1]);

  return (
    <main className="flex-1 overflow-y-auto bg-background p-6 lg:p-8">
      <div className="mb-6 pr-28">
        <h1 className="text-2xl font-bold text-foreground">임신 주수별 제품 추천</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          합성 리뷰 1,500건을 집계한 신뢰점수·감성점수·안전성 리스크로 제품을 선별합니다.
        </p>
      </div>

      {/* 임신 시기 타임라인 배너 */}
      <Card className="mb-5 overflow-hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-3 divide-x divide-border">
            {CATEGORY_TIMELINE.map((t) => {
              const isActive = currentWeek >= t.range[0] && currentWeek <= t.range[1];
              return (
                <div
                  key={t.label}
                  className={`p-4 transition-colors ${isActive ? "bg-primary/5" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${t.color} ${isActive ? "ring-2 ring-primary/30" : ""}`}>
                      {t.label}
                    </span>
                    {isActive && <span className="text-[10px] text-primary font-semibold">◀ 현재</span>}
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {t.categories.map((c) => (
                      <span key={c} className="rounded-full bg-secondary px-2 py-0.5 text-[11px] text-foreground">{c}</span>
                    ))}
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{t.tip}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* 주수 슬라이더 + 카테고리 필터 */}
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
              신뢰점수 = 별점 + 감성 + 적합성 − 안전 리스크
            </div>
          </div>

          <Slider value={week} onValueChange={setWeek} min={1} max={40} step={1} className="w-full" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1주</span><span>12주</span><span>27주</span><span>40주</span>
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

      {/* 요약 카드 */}
      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { label: "대상 제품", value: `${activeProducts.length}개` },
          { label: "추천 가능", value: `${recommendedProducts.length}개` },
          { label: "평균 신뢰점수", value: `${avgTrust}%` },
          { label: "주의 제품", value: `${warningProducts.length}개` },
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
          {/* 추천 제품 */}
          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-base font-semibold text-foreground">추천 제품</h2>
              <span className="text-xs text-muted-foreground">신뢰점수 높은 순 · 카드를 클릭하면 상세 정보가 펼쳐집니다</span>
            </div>
            {recommendedProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {recommendedProducts.map((p) => <ProductCard key={p.product_id} product={p} />)}
              </div>
            ) : (
              <Card>
                <CardContent className="p-6 text-sm text-muted-foreground">
                  현재 조건에 맞는 추천 제품이 없습니다. 카테고리나 주수를 바꿔보세요.
                </CardContent>
              </Card>
            )}
          </div>

          {/* 주의 제품 */}
          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-base font-semibold text-foreground">주의해서 볼 제품</h2>
              <span className="text-xs text-muted-foreground">안전 리스크와 부정 신호 기준</span>
            </div>
            <div className="space-y-3">
              {warningProducts.length > 0 ? (
                warningProducts.map((p) => <WarningCard key={p.product_id} product={p} />)
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

        {/* 사이드 패널 */}
        <div>
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="text-base">리뷰 신호 요약</CardTitle>
              {currentTimeline && (
                <p className="text-xs text-muted-foreground">{currentTimeline.label} 기준</p>
              )}
            </CardHeader>
            <CardContent className="space-y-5">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={sentimentData} cx="50%" cy="50%" innerRadius={50} outerRadius={76} dataKey="value" paddingAngle={4}>
                    {sentimentData.map((item) => <Cell key={item.name} fill={item.color} />)}
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
