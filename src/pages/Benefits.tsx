import { useMemo, useState } from "react";
import {
  BarChart3,
  CalendarDays,
  ChevronRight,
  Coins,
  ExternalLink,
  Gift,
  MapPin,
  Search,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  gov24LocalBirthServices,
  type LocalBirthService,
} from "@/data/gov24LocalBirthServices";

const stages = [
  "임신 초기 (1-12주)",
  "임신 중기 (13-27주)",
  "임신 후기 (28-40주)",
  "출산 직후",
  "산후 (출산 후 1-6개월)",
  "육아기 (6개월 이후)",
];

const provinceOrder = [
  "서울특별시",
  "부산광역시",
  "대구광역시",
  "인천광역시",
  "광주광역시",
  "대전광역시",
  "울산광역시",
  "세종특별자치시",
  "경기도",
  "충청북도",
  "충청남도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주특별자치도",
  "강원특별자치도",
  "전북특별자치도",
];

type Category = "전체" | "현금지원" | "의료지원" | "휴가제도" | "지역혜택";

const gov24LocalBirthService = {
  title: "지역별 출산 지원 서비스",
  description: "정부24 행복출산의 지역별 출산 지원 서비스 673건을 기준으로 표시합니다.",
  sourceUrl: "https://www.gov.kr/portal/onestopSvc/happyBirthLocalBirth",
  sourceLabel: "정부24 행복출산",
};

const categories: { label: Category; icon: React.ElementType }[] = [
  { label: "전체", icon: Gift },
  { label: "현금지원", icon: Coins },
  { label: "의료지원", icon: Stethoscope },
  { label: "휴가제도", icon: CalendarDays },
  { label: "지역혜택", icon: MapPin },
];

const categoryIcon: Record<Category, React.ElementType> = {
  전체: Gift,
  현금지원: Coins,
  의료지원: Stethoscope,
  휴가제도: CalendarDays,
  지역혜택: MapPin,
};

const uniqueSorted = (values: string[]) => Array.from(new Set(values)).sort((a, b) => a.localeCompare(b, "ko"));

function serviceMatchesQuery(service: LocalBirthService, query: string) {
  if (!query.trim()) {
    return true;
  }

  const normalizedQuery = query.trim().toLowerCase();
  return [
    service.title,
    service.region,
    service.summary,
    service.applicationMethod,
    service.applicationPeriod,
    service.applicationPlace,
    service.contact,
    service.supportType,
  ].some((value) => value.toLowerCase().includes(normalizedQuery));
}

function serviceCategory(service: LocalBirthService): Category {
  const text = `${service.title} ${service.summary} ${service.supportType}`;
  if (/휴가|근로|고용|사업장/.test(text)) {
    return "휴가제도";
  }
  if (/의료|진료|검사|건강|보건|산모|신생아|난임|임신|보험/.test(text)) {
    return "의료지원";
  }
  if (service.supportType.includes("현금")) {
    return "현금지원";
  }
  return "지역혜택";
}

function serviceSortScore(service: LocalBirthService): number {
  let score = 0;
  if (service.supportType.includes("현금")) score += 50;
  if (service.supportType.includes("이용권") || service.supportType.includes("바우처")) score += 35;
  if (service.onlineApplyAvailable) score += 20;
  if (/출산|양육|축하|장려|임신/.test(`${service.title} ${service.summary}`)) score += 10;
  return score;
}

export default function BenefitsPage() {
  const [selectedProvince, setSelectedProvince] = useState("전체");
  const [selectedDistrict, setSelectedDistrict] = useState("전체");
  const [stage, setStage] = useState("임신 초기 (1-12주)");
  const [activeTab, setActiveTab] = useState<Category>("전체");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(30);

  const provinceOptions = useMemo(() => {
    const existing = new Set(gov24LocalBirthServices.map((service) => service.province));
    const ordered = provinceOrder.filter((province) => existing.has(province));
    const rest = uniqueSorted([...existing].filter((province) => !provinceOrder.includes(province)));
    return [...ordered, ...rest];
  }, []);

  const districtOptions = useMemo(() => {
    if (selectedProvince === "전체") {
      return [];
    }
    return uniqueSorted(
      gov24LocalBirthServices
        .filter((service) => service.province === selectedProvince)
        .map((service) => service.district),
    );
  }, [selectedProvince]);

  const filteredLocalBirthServices = useMemo(() => {
    return gov24LocalBirthServices.filter((service) => {
      const provinceMatched = selectedProvince === "전체" || service.province === selectedProvince;
      const districtMatched = selectedDistrict === "전체" || service.district === selectedDistrict;
      return provinceMatched && districtMatched && serviceMatchesQuery(service, query);
    });
  }, [query, selectedDistrict, selectedProvince]);

  const regionLabel =
    selectedProvince === "전체"
      ? "전국"
      : selectedDistrict === "전체"
        ? selectedProvince
        : `${selectedProvince} ${selectedDistrict}`;
  const visibleLocalBirthServices = filteredLocalBirthServices.slice(0, visibleCount);
  const localMajorPolicies = useMemo(() => {
    return filteredLocalBirthServices
      .filter((service) => activeTab === "전체" || serviceCategory(service) === activeTab)
      .slice()
      .sort((a, b) => {
        const scoreDiff = serviceSortScore(b) - serviceSortScore(a);
        if (scoreDiff !== 0) return scoreDiff;
        const regionDiff = a.region.localeCompare(b.region, "ko");
        if (regionDiff !== 0) return regionDiff;
        return a.title.localeCompare(b.title, "ko");
      })
      .slice(0, 6);
  }, [activeTab, filteredLocalBirthServices]);

  const cityCountyCount = useMemo(
    () => uniqueSorted(gov24LocalBirthServices.map((service) => service.region)).length,
    [],
  );
  const onlineApplyCount = useMemo(
    () => gov24LocalBirthServices.filter((service) => service.onlineApplyAvailable).length,
    [],
  );
  const localCashBenefitCount = useMemo(
    () => filteredLocalBirthServices.filter((service) => service.supportType.includes("현금")).length,
    [filteredLocalBirthServices],
  );
  const localVoucherBenefitCount = useMemo(
    () =>
      filteredLocalBirthServices.filter(
        (service) => service.supportType.includes("이용권") || service.supportType.includes("바우처"),
      ).length,
    [filteredLocalBirthServices],
  );

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="border-b border-border bg-card px-8 py-6">
        <h1 className="text-2xl font-bold text-foreground">정부 및 지자체 혜택 안내</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          거주 지역과 임신 단계에 맞는 맞춤형 지원 정책을 한눈에 확인하세요.
        </p>
      </div>

      <div className="mx-auto max-w-6xl space-y-6 p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-muted-foreground">지역별 서비스</p>
              <BarChart3 className="h-4 w-4 text-primary" />
            </div>
            <p className="mt-2 text-2xl font-bold text-foreground">{gov24LocalBirthServices.length}건</p>
            <p className="mt-1 text-xs text-muted-foreground">정부24 행복출산 기준</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-muted-foreground">시도</p>
              <MapPin className="h-4 w-4 text-primary" />
            </div>
            <p className="mt-2 text-2xl font-bold text-foreground">{provinceOptions.length}개</p>
            <p className="mt-1 text-xs text-muted-foreground">시군구 {cityCountyCount}개 단위</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-muted-foreground">온라인 신청</p>
              <ExternalLink className="h-4 w-4 text-primary" />
            </div>
            <p className="mt-2 text-2xl font-bold text-foreground">{onlineApplyCount}건</p>
            <p className="mt-1 text-xs text-muted-foreground">그 외 방문·기타 신청 포함</p>
          </div>
        </div>

        <div className="rounded-xl border border-primary/20 bg-card p-6 shadow-sm">
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                  공식 출처
                </span>
                <span className="text-xs font-medium text-muted-foreground">{gov24LocalBirthService.sourceLabel}</span>
              </div>
              <h2 className="text-lg font-bold text-foreground">{gov24LocalBirthService.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {gov24LocalBirthService.description}
              </p>
            </div>
            <Button asChild className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={gov24LocalBirthService.sourceUrl} target="_blank" rel="noreferrer">
                원문 보기
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_1fr_1.4fr_auto]">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-muted-foreground">시도</label>
              <select
                value={selectedProvince}
                onChange={(event) => {
                  setSelectedProvince(event.target.value);
                  setSelectedDistrict("전체");
                  setVisibleCount(30);
                }}
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="전체">전체</option>
                {provinceOptions.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-muted-foreground">시/군/구</label>
              <select
                value={selectedDistrict}
                disabled={selectedProvince === "전체"}
                onChange={(event) => {
                  setSelectedDistrict(event.target.value);
                  setVisibleCount(30);
                }}
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-60"
              >
                <option value="전체">전체</option>
                {districtOptions.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-muted-foreground">검색어</label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setVisibleCount(30);
                  }}
                  placeholder="서비스명, 지원형태, 문의처 검색"
                  className="w-full rounded-lg border border-border bg-background py-2.5 pl-9 pr-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>
            <div className="flex items-end">
              <Button
                variant="outline"
                className="w-full border-primary/30 text-primary hover:bg-secondary md:w-auto"
                onClick={() => {
                  setSelectedProvince("전체");
                  setSelectedDistrict("전체");
                  setQuery("");
                  setVisibleCount(30);
                }}
              >
                초기화
              </Button>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
            <div>
              <p className="text-sm font-bold text-foreground">
                {regionLabel} {filteredLocalBirthServices.length}건
              </p>
              <p className="mt-1 text-xs text-muted-foreground">서비스명, 지역, 신청기간, 접수기관, 전화문의, 지원형태를 표시합니다.</p>
            </div>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
              {visibleLocalBirthServices.length} / {filteredLocalBirthServices.length}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {visibleLocalBirthServices.map((service) => {
              const applicationBadgeLabel = service.onlineApplyAvailable
                ? "온라인신청"
                : service.applicationMethod || "신청방식 확인";

              return (
                <div key={`${service.serviceId}-${service.region}`} className="flex flex-col rounded-lg border border-border bg-background p-4">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="mb-2 flex flex-wrap gap-1.5">
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                          {service.supportType || "지원"}
                        </span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                            service.onlineApplyAvailable
                              ? "bg-primary/10 text-primary"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {applicationBadgeLabel}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold leading-snug text-foreground">{service.title}</h3>
                      <p className="mt-1 text-xs font-medium text-muted-foreground">{service.region}</p>
                    </div>
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  </div>
                  <p className="mb-3 flex-1 text-xs leading-relaxed text-muted-foreground">{service.summary}</p>
                  <dl className="mb-4 rounded-lg bg-card px-3 py-2.5 text-xs">
                    <div className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-3 border-b border-border/70 py-1.5 first:pt-0">
                      <dt className="text-muted-foreground">신청기간</dt>
                      <dd className="min-w-0 text-left font-medium leading-relaxed text-foreground">{service.applicationPeriod || "확인 필요"}</dd>
                    </div>
                    <div className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-3 border-b border-border/70 py-1.5">
                      <dt className="text-muted-foreground">접수기관</dt>
                      <dd className="min-w-0 text-left font-medium leading-relaxed text-foreground">{service.applicationPlace || "확인 필요"}</dd>
                    </div>
                    <div className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-3 py-1.5 last:pb-0">
                      <dt className="text-muted-foreground">전화문의</dt>
                      <dd className="min-w-0 text-left font-medium leading-relaxed text-foreground">{service.contact || "확인 필요"}</dd>
                    </div>
                  </dl>
                  <Button asChild variant="outline" className="w-full border-primary/30 text-primary hover:bg-secondary">
                    <a href={service.detailUrl} target="_blank" rel="noreferrer">
                      혜택보기
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              );
            })}
          </div>

          {filteredLocalBirthServices.length === 0 && (
            <div className="mt-4 rounded-lg border border-dashed border-border bg-background p-8 text-center">
              <p className="text-sm font-medium text-foreground">조회 결과가 없습니다.</p>
            </div>
          )}

          {visibleCount < filteredLocalBirthServices.length && (
            <div className="mt-5 flex justify-center">
              <Button
                variant="outline"
                className="border-primary/30 text-primary hover:bg-secondary"
                onClick={() => setVisibleCount((count) => count + 30)}
              >
                더 보기
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-foreground">나의 예상 혜택 계산기</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-muted-foreground">기준 지역</label>
              <div className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm font-medium text-foreground">
                {regionLabel}
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-muted-foreground">임신/출산 단계</label>
              <select
                value={stage}
                onChange={(event) => setStage(event.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              >
                {stages.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-muted-foreground">지역 서비스 수</label>
              <div className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm font-medium text-foreground">
                {filteredLocalBirthServices.length}건
              </div>
            </div>
          </div>
          <div className="mt-5 rounded-lg bg-secondary px-5 py-4 text-center">
            <p className="text-xs font-medium text-muted-foreground">선택 지역 기준 확인 필요 혜택</p>
            <p className="mt-1 text-2xl font-bold text-primary">
              현금성 {localCashBenefitCount}건 · 이용권/바우처 {localVoucherBenefitCount}건
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              지역별 금액은 출생순위, 거주기간, 소득 기준에 따라 달라져 각 혜택 상세에서 최종 확인이 필요합니다.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <h2 className="text-lg font-bold text-foreground">선택 지역 주요 지원 정책</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              {regionLabel} 조회 결과에서 현금성, 온라인 신청 가능, 출산·양육 직접 관련도가 높은 항목을 우선 표시합니다.
            </p>
          </div>
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

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {localMajorPolicies.map((service) => {
              const category = serviceCategory(service);
              const Icon = categoryIcon[category];
              return (
                <div key={`${service.serviceId}-${service.region}-major`} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-[11px] font-medium text-primary">{category}</span>
                      <h3 className="text-sm font-bold text-foreground">{service.title}</h3>
                      <p className="mt-0.5 text-[11px] font-medium text-muted-foreground">{service.region}</p>
                    </div>
                  </div>
                  <p className="mb-3 flex-1 text-xs leading-relaxed text-muted-foreground">{service.summary}</p>
                  <div className="mb-4 space-y-1 rounded-lg bg-background px-3 py-2.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">지원형태</span>
                      <span className="font-bold text-primary">{service.supportType || "확인 필요"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">신청방식</span>
                      <span className="font-medium text-foreground">{service.onlineApplyAvailable ? "온라인신청" : service.applicationMethod || "확인 필요"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">신청 기간</span>
                      <span className="font-medium text-foreground">{service.applicationPeriod || "확인 필요"}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full border-primary/30 text-primary hover:bg-secondary">
                    <a href={service.detailUrl} target="_blank" rel="noreferrer">
                      혜택보기
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              );
            })}
          </div>

          {localMajorPolicies.length === 0 && (
            <div className="rounded-xl border border-dashed border-border bg-card p-8 text-center">
              <p className="text-sm font-medium text-foreground">선택한 카테고리에 해당하는 지역 정책이 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
