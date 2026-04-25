import { Check } from "lucide-react";

const steps = [
  { label: "임신중", status: "current" as const, detail: "현재" },
  { label: "출산 및 휴가", status: "upcoming" as const, detail: "D-45" },
  { label: "육아기", status: "waiting" as const, detail: "대기" },
  { label: "복직준비", status: "waiting" as const, detail: "대기" },
];

export function JourneyProgressCard() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">전체 여정 진행률</h2>
        <span className="rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-primary">
          35% 완료
        </span>
      </div>

      {/* Progress bar */}
      <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div className="h-full w-[35%] rounded-full bg-primary transition-all" />
      </div>

      {/* Steps */}
      <div className="flex items-center justify-between">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-1 items-center">
            <div className="flex flex-col items-center text-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                  step.status === "current"
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                    : step.status === "upcoming"
                    ? "border-2 border-primary bg-card text-primary"
                    : "border-2 border-border bg-card text-muted-foreground"
                }`}
              >
                {step.status === "current" ? <Check className="h-5 w-5" /> : i + 1}
              </div>
              <span className="mt-2 text-xs font-semibold text-foreground">{step.label}</span>
              <span
                className={`mt-0.5 text-[11px] font-medium ${
                  step.status === "current"
                    ? "text-primary"
                    : step.status === "upcoming"
                    ? "text-primary/70"
                    : "text-muted-foreground"
                }`}
              >
                {step.detail}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`mx-2 h-0.5 flex-1 rounded ${
                  step.status === "current" ? "bg-primary/40" : "bg-border"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
