import { Upload, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const docs = [
  { name: "임신증명서", status: "approved" as const },
  { name: "단축근무 신청서", status: "review" as const },
  { name: "출산휴가 신청서", status: "pending" as const },
];

const statusConfig = {
  approved: { label: "승인", icon: CheckCircle, className: "bg-success/10 text-success" },
  review: { label: "검토중", icon: Clock, className: "bg-warning/10 text-warning" },
  pending: { label: "미제출", icon: AlertCircle, className: "bg-muted text-muted-foreground" },
};

export function DocumentStatusCard() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">서류 처리 현황</h2>
      </div>

      <ul className="space-y-3">
        {docs.map((doc) => {
          const cfg = statusConfig[doc.status];
          const Icon = cfg.icon;
          return (
            <li key={doc.name} className="flex items-center justify-between rounded-lg bg-background px-4 py-3">
              <span className="text-sm font-medium text-foreground">{doc.name}</span>
              <span className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${cfg.className}`}>
                <Icon className="h-3.5 w-3.5" />
                {cfg.label}
              </span>
            </li>
          );
        })}
      </ul>

      <Button variant="outline" className="mt-4 w-full border-primary/30 text-primary hover:bg-secondary">
        <Upload className="mr-2 h-4 w-4" />
        서류 업로드하기
      </Button>
    </div>
  );
}
