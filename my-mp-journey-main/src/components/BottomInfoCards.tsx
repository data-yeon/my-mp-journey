import { Clock, Stethoscope } from "lucide-react";

export function BottomInfoCards() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {/* 근로시간 단축 */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-base font-bold text-foreground">근로시간 단축 안내</h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          임신 12주 이내 또는 36주 이후 근로자는 1일 2시간의 근로시간 단축을
          신청할 수 있습니다. 현재 적용 중인 단축 근무 시간: <span className="font-semibold text-foreground">09:00 - 16:00</span>
        </p>
      </div>

      {/* 태아 검진 휴가 */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
            <Stethoscope className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-base font-bold text-foreground">태아 검진 휴가 안내</h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          임신 28주까지 매 2개월마다, 이후 36주까지 매월, 36주 이후 매 2주마다
          태아 검진 휴가를 사용할 수 있습니다. 남은 횟수: <span className="font-semibold text-foreground">3회</span>
        </p>
      </div>
    </div>
  );
}
