import {
    LayoutDashboard,
    User,
    MessageCircleMore,
    Gift,
    BarChart3,
    Heart,
    MapPin
} from 'lucide-react';
import { NavLink } from '@/components/NavLink';

const employeeNavItems = [
    { title: '대시보드', url: '/', icon: LayoutDashboard },
    { title: '질문 챗봇', url: '/chatbot', icon: MessageCircleMore },
    { title: '혜택 안내', url: '/benefits', icon: Gift },
    { title: '제품 추천', url: '/wellness', icon: Heart },
    { title: '동선 추천', url: '/route', icon: MapPin },
];

const hrNavItems = [
    { title: '인사이트', url: '/hr-insights', icon: BarChart3 },
];

export function AppSidebar() {
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
                    일반 구성원 모드
                </div>
                <ul className="space-y-1">
                    {employeeNavItems.map((item) => (
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

                <div className="mt-6 mb-3 rounded-full bg-secondary px-3 py-1.5 text-center text-xs font-semibold text-primary">
                    HR 관리자 모드
                </div>
                <ul className="space-y-1">
                    {hrNavItems.map((item) => (
                        <li key={item.title}>
                            <NavLink
                                to={item.url}
                                end={false}
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
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                        <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-foreground">김지은</p>
                        <p className="text-xs text-muted-foreground">임신 24주차 · 서울 강남구</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
