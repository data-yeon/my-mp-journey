import { Check, Clock, Circle, ExternalLink } from "lucide-react";

const items = [
  { text: "단축근무 시작 시간 변경 신청", status: "done" as const },
  { text: "태아 검진 휴가 신청서 제출", status: "done" as const },
  { text: "출산 예정일 기준 휴가 일정 확인", status: "progress" as const },
  { text: "육아휴직 사전 안내 자료 읽기", status: "progress" as const },
  { text: "복직 준비 체크리스트 확인", status: "waiting" as const },
];

export function WeeklyChecklist() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">이번 주 체크리스트</h2>
        <a href="#" className="flex items-center gap-1 text-xs font-medium text-primary hover:underline">
          임신 24주차 가이드 <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.text} className="flex items-center gap-3">
            {item.status === "done" ? (
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-success">
                <Check className="h-3 w-3 text-success-foreground" />
              </div>
            ) : item.status === "progress" ? (
              <Clock className="h-5 w-5 text-warning" />
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground/50" />
            )}
            <span
              className={`text-sm ${
                item.status === "done"
                  ? "text-muted-foreground line-through"
                  : "text-foreground"
              }`}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
