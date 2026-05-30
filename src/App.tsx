import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Index from './pages/Index.tsx';
import Chatbot from './pages/Chatbot.tsx';
import Benefits from './pages/Benefits.tsx';
import HRInsights from './pages/HRInsights.tsx';
import Wellness from './pages/Wellness.tsx';
import RouteRecommend from './pages/RouteRecommend.tsx';
import { AppSidebar } from './components/AppSidebar.tsx';
import NotFound from './pages/NotFound.tsx';

const SidebarLayout = ({ children }: { children: ReactNode }) => (
    <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="relative flex min-w-0 flex-1">
            {children}
        </div>
    </div>
);

const queryClient = new QueryClient();

const App = () => {
    const withSidebar = (page: ReactNode) => (
        <SidebarLayout>
            {page}
        </SidebarLayout>
    );

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={withSidebar(<Index />)} />
                        <Route path="/chatbot" element={withSidebar(<Chatbot role="employee" />)} />
                        <Route path="/benefits" element={withSidebar(<Benefits />)} />
                        <Route path="/hr-insights" element={withSidebar(<HRInsights />)} />
                        <Route path="/wellness" element={withSidebar(<Wellness />)} />
                        <Route path="/route" element={withSidebar(<RouteRecommend />)} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    );
};

export default App;
