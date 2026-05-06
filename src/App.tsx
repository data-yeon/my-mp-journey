import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, type ReactNode } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Switch } from '@/components/ui/switch';
import Index from './pages/Index.tsx';
import Chatbot from './pages/Chatbot.tsx';
import Benefits from './pages/Benefits.tsx';
import HRInsights from './pages/HRInsights.tsx';
import Wellness from './pages/Wellness.tsx';
import RouteRecommend from './pages/RouteRecommend.tsx';
import { AppSidebar } from './components/AppSidebar.tsx';
import NotFound from './pages/NotFound.tsx';
import type { UserRole } from './types/role.ts';

type RoleSwitcherProps = {
    role: UserRole;
    onRoleChange: (role: UserRole) => void;
};

const RoleSwitcher = ({ role, onRoleChange }: RoleSwitcherProps) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleChange = (checked: boolean) => {
        const nextRole: UserRole = checked ? 'hr' : 'employee';
        onRoleChange(nextRole);

        if (nextRole === 'hr' && !['/hr-insights', '/benefits', '/chatbot', '/settings'].includes(pathname)) {
            navigate('/hr-insights');
        }

        if (nextRole === 'employee' && pathname === '/hr-insights') {
            navigate('/chatbot');
        }
    };

    return (
        <div className="fixed right-5 top-4 z-50 flex items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-2 shadow-sm backdrop-blur">
            <span className={`text-xs font-semibold ${role === 'employee' ? 'text-primary' : 'text-muted-foreground'}`}>
                구성원
            </span>
            <Switch checked={role === 'hr'} onCheckedChange={handleChange} aria-label="구성원과 HR 직원 모드 전환" />
            <span className={`text-xs font-semibold ${role === 'hr' ? 'text-primary' : 'text-muted-foreground'}`}>
                HR
            </span>
        </div>
    );
};

type SidebarLayoutProps = {
    children: ReactNode;
    role: UserRole;
    onRoleChange: (role: UserRole) => void;
};

const SidebarLayout = ({ children, role, onRoleChange }: SidebarLayoutProps) => (
    <div className="flex min-h-screen w-full">
        <AppSidebar role={role} />
        <div className="relative flex min-w-0 flex-1">
            <RoleSwitcher role={role} onRoleChange={onRoleChange} />
            {children}
        </div>
    </div>
);

const queryClient = new QueryClient();

const App = () => {
    const [role, setRole] = useState<UserRole>('employee');

    const withSidebar = (page: ReactNode) => (
        <SidebarLayout role={role} onRoleChange={setRole}>
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
                        <Route path="/chatbot" element={withSidebar(<Chatbot role={role} />)} />
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
