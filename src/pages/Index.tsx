import { DashboardHeader } from "@/components/DashboardHeader";
import { JourneyProgressCard } from "@/components/JourneyProgressCard";
import { WeeklyChecklist } from "@/components/WeeklyChecklist";
import { DocumentStatusCard } from "@/components/DocumentStatusCard";
import { HelperServiceCard } from "@/components/HelperServiceCard";
import { BottomInfoCards } from "@/components/BottomInfoCards";

const Index = () => {
  return (
    <div className="flex flex-1 flex-col">
      <DashboardHeader />
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* Journey Progress */}
          <JourneyProgressCard />

          {/* Middle row: Checklist + Documents */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <WeeklyChecklist />
            <DocumentStatusCard />
          </div>

          {/* Helper */}
          <HelperServiceCard />

          {/* Bottom info cards */}
          <BottomInfoCards />
        </div>
      </main>
    </div>
  );
};

export default Index;
