import { Mail, HelpCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HelperServiceCard() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-bold text-foreground">전담 헬퍼 서비스</h2>

      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
          <User className="h-7 w-7 text-primary" />
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">박서연 매니저</p>
          <p className="text-xs text-muted-foreground">모성보호팀 · 전담 상담사</p>
          <p className="mt-1 text-xs text-primary">응답 평균 2시간 이내</p>
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" className="flex-1 border-primary/30 text-primary hover:bg-secondary">
          <HelpCircle className="mr-2 h-4 w-4" />
          FAQ 보기
        </Button>
        <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
          <Mail className="mr-2 h-4 w-4" />
          메일 문의
        </Button>
      </div>
    </div>
  );
}
