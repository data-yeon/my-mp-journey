import { Bell, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between border-b border-border bg-card px-8 py-5">
      <div>
        <h1 className="text-2xl font-bold text-foreground">나의 여정 대시보드</h1>
        <p className="mt-1 text-sm text-muted-foreground">안녕하세요, 김지은님! 오늘도 건강한 하루 보내세요 💕</p>
      </div>
      <div className="flex items-center gap-3">
        <button className="relative rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
        </button>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <MessageCircle className="mr-2 h-4 w-4" />
          문의하기
        </Button>
      </div>
    </header>
  );
}
