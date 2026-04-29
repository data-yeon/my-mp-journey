import {
    BriefcaseBusiness,
    LayoutDashboard,
    Route,
    FolderOpen,
    CalendarDays,
    Settings,
    User,
    MessageCircleMore,
    Gift,
    BarChart3,
    Heart,
    MapPin
} from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import type { UserRole } from '@/types/role';

const employeeNavItems = [
    { title: '대시보드', url: '/', icon: LayoutDashboard },
    { title: '사우 챗봇', url: '/chatbot', icon: MessageCircleMore },
    { title: '혜택 안내', url: '/benefits', icon: Gift },
    { title: '웰니스 추천', url: '/wellness', icon: Heart },
    { title: '동선 추천', url: '/route', icon: MapPin },
    { title: '여정 관리', url: '/journey', icon: Route },
    { title: '서류함', url: '/documents', icon: FolderOpen },
    { title: '휴가 일정', url: '/leave', icon: CalendarDays },
    { title: '설정', url: '/settings', icon: Settings }
];

const hrNavItems = [
    { title: 'HR 관리자', url: '/hr-insights', icon: BarChart3 },
    { title: '법령·규정 확인', url: '/chatbot', icon: MessageCircleMore },
    { title: '정책 데이터', url: '/benefits', icon: Gift },
    { title: '운영 설정', url: '/settings', icon: Settings }
];

type AppSidebarProps = {
    role: UserRole;
};

export function AppSidebar({ role }: AppSidebarProps) {
    const isHrWorkspace = role === 'hr';
    const navItems = isHrWorkspace ? hrNavItems : employeeNavItems;
    const profile = isHrWorkspace
        ? { name: '박서연', detail: 'HR 관리자 · 인사운영' }
        : { name: '김지은', detail: '임신 24주차 · 서울 강남구' };
    const roleLabel = isHrWorkspace ? 'HR 직원 모드' : '일반 사우 모드';

    return (
        <aside className="flex h-screen w-64 flex-col border-r border-border bg-card">
            <div className="flex items-center gap-2 px-6 py-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-sm">
                    <span className="text-lg font-black leading-none text-primary-foreground">M</span>
                </div>
                <span className="text-lg font-bold text-foreground">맘마중</span>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-2">
                <div className="mb-3 rounded-full bg-secondary px-3 py-1.5 text-center text-xs font-semibold text-primary">
                    {roleLabel}
                </div>
                <ul className="space-y-1">
                    {navItems.map((item) => (
                        <li key={item.title}>
                            <NavLink
                                to={item.url}
                                end={item.url === '/'}
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                activeClassName="bg-secondary text-primary font-semibold"
                            >
                                <item.icon className="h-5 w-5" />
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="border-t border-border px-4 py-4">
                {isHrWorkspace && (
                    <div className="mb-3 rounded-lg border border-primary/15 bg-secondary/70 px-3 py-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                            <BriefcaseBusiness className="h-3.5 w-3.5" />
                            관리자 기능
                        </div>
                        <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                            법령 확인, 취업규칙 점검, 사우 고충 토픽 분석
                        </p>
                    </div>
                )}
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                        <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-foreground">{profile.name}</p>
                        <p className="text-xs text-muted-foreground">{profile.detail}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
