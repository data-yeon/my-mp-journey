import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Chatbot from "./pages/Chatbot.tsx";
import Benefits from "./pages/Benefits.tsx";
import HRInsights from "./pages/HRInsights.tsx";
import Wellness from "./pages/Wellness.tsx";
import RouteRecommend from "./pages/RouteRecommend.tsx";
import { AppSidebar } from "./components/AppSidebar.tsx";
import NotFound from "./pages/NotFound.tsx";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen w-full">
    <AppSidebar />
    {children}
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chatbot" element={<SidebarLayout><Chatbot /></SidebarLayout>} />
          <Route path="/benefits" element={<SidebarLayout><Benefits /></SidebarLayout>} />
          <Route path="/hr-insights" element={<SidebarLayout><HRInsights /></SidebarLayout>} />
          <Route path="/wellness" element={<SidebarLayout><Wellness /></SidebarLayout>} />
          <Route path="/route" element={<SidebarLayout><RouteRecommend /></SidebarLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
