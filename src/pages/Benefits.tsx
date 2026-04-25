import { useState } from "react";
import { Search, ChevronRight, Coins, Stethoscope, CalendarDays, MapPin, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const regions = [
  "서울특별시 강남구", "서울특별시 서초구", "서울특별시 송파구", "서울특별시 마포구",
  "경기도 성남시", "경기도 수원시", "부산광역시 해운대구",
];

const stages = [
  "임신 초기 (1-12주)", "임신 중기 (13-27주)", "임신 후기 (28-40주)",
  "출산 직후", "산후 (출산 후 1-6개월)", "육아기 (6개월 이후)",
];

type Category = "전체" | "현금지원" | "의료지원" | "휴가제도" | "지역혜택";

const categories: { label: Category; icon: React.ElementType }[] = [
  { label: "전체", icon: Gift },
  { label: "현금지원", icon: Coins },
  { label: "의료지원", icon: Stethoscope },
  { label: "휴가제도", icon: CalendarDays },
  { label: "지역혜택", icon: MapPin },
];

const policies = [
  {
    category: "현금지원" as Category,
    title: "첫만남 이용권",
    description: "출생아 1인당 바우처 지급. 출산 후 1년 이내 신청 가능하며 육아용품, 의료비 등에 사용할 수 있습니다.",
    amount: "2,000,000원",
    target: "출산 가정 전체",
    period: "출생 후 1년 이내 신청",
  },
  {
    category: "의료지원" as Category,
    title: "임산부 출산 진료비 바우처",
    description: "임신·출산 관련 진료비를 국민행복카드를 통해 지원합니다. 다태아의 경우 140만원까지 지원됩니다.",
    amount: "1,000,000원",
    target: "임산부 전체",
    period: "임신 확인 후 ~ 출산 후 2년",
  },
  {
    category: "휴가제도" as Category,
    title: "임신기 근로시간 단축",
    description: "임신 12주 이내 또는 36주 이후 1일 2시간 근로시간 단축 가능. 단축된 시간에 대해 통상임금 100%를 보전받습니다.",
    amount: "통상임금 100%",
    target: "임신 근로자",
    period: "임신 12주 이내 / 36주 이후",
  },
  {
    category: "지역혜택" as Category,
    title: "서울시 임산부 교통비 지원",
    description: "서울시 거주 임산부에게 교통비를 지원합니다. 대중교통 이용 시 월정액으로 지급됩니다.",
    amount: "700,000원",
    target: "서울시 거주 임산부",
    period: "임신 확인 후 신청",
  },
  {
    category: "현금지원" as Category,
    title: "강남구 출산 축하금",
    description: "강남구 거주 출산 가정에 축하금을 지급합니다. 첫째 50만원, 둘째 이상 100만원이 지급됩니다.",
    amount: "500,000원~",
    target: "강남구 거주 출산 가정",
    period: "출생 후 60일 이내 신청",
  },
  {
    category: "의료지원" as Category,
    title: "난임 시술비 지원",
    description: "체외수정 및 인공수정 시술비를 지원합니다. 소득 기준에 따라 지원 횟수와 금액이 달라집니다.",
    amount: "최대 1,100,000원/회",
    target: "난임 부부",
    period: "연중 신청 가능",
  },
];

const categoryIcon: Record<Category, React.ElementType> = {
  "전체": Gift,
  "현금지원": Coins,
  "의료지원": Stethoscope,
  "휴가제도": CalendarDays,
  "지역혜택": MapPin,
};

export default function BenefitsPage() {
  const [region, setRegion] = useState("서울특별시 강남구");
  const [stage, setStage] = useState("임신 초기 (1-12주)");
  const [activeTab, setActiveTab] = useState<Category>("전체");

  const filtered = activeTab === "전체" ? policies : policies.filter((p) => p.category === activeTab);

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="border-b border-border bg-card px-8 py-6">
        <h1 className="text-2xl font-bold text-foreground">정부 및 지자체 혜택 안내</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          거주 지역과 임신 단계에 맞는 맞춤형 지원 정책을 한눈에 확인하세요.
        </p>
      </div>

      <div className="mx-auto max-w-5xl space-y-6 p-8">
        {/* Calculator Card */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-foreground">🧮 나의 예상 혜택 계산기</h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label className="mb-1.5 block text-xs font-semibold text-muted-foreground">거주 지역</label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              >
                {regions.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="mb-1.5 block text-xs font-semibold text-muted-foreground">임신/출산 단계</label>
              <select
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              >
                {stages.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 sm:px-6">
              <Search className="mr-2 h-4 w-4" />
              혜택 조회하기
            </Button>
          </div>

          {/* Result */}
          <div className="mt-5 rounded-lg bg-secondary px-5 py-4 text-center">
            <p className="text-xs font-medium text-muted-foreground">예상 총 지원 금액</p>
            <p className="mt-1 text-2xl font-bold text-primary">약 2,450,000원 + α</p>
            <p className="mt-1 text-[11px] text-muted-foreground">* 실제 금액은 소득 기준 및 신청 시기에 따라 달라질 수 있습니다.</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-foreground">맞춤형 지원 정책</h2>
          <div className="mb-5 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveTab(cat.label)}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                    activeTab === cat.label
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-card text-muted-foreground hover:bg-accent"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {filtered.map((policy) => {
              const Icon = categoryIcon[policy.category];
              return (
                <div key={policy.title} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-[11px] font-medium text-primary">{policy.category}</span>
                      <h3 className="text-sm font-bold text-foreground">{policy.title}</h3>
                    </div>
                  </div>
                  <p className="mb-3 flex-1 text-xs leading-relaxed text-muted-foreground">{policy.description}</p>
                  <div className="mb-4 space-y-1 rounded-lg bg-background px-3 py-2.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">지원 금액</span>
                      <span className="font-bold text-primary">{policy.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">대상</span>
                      <span className="font-medium text-foreground">{policy.target}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">신청 기간</span>
                      <span className="font-medium text-foreground">{policy.period}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-secondary">
                    상세보기
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
