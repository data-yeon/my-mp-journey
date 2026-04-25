import {
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

const navItems = [
    { title: '대시보드', url: '/', icon: LayoutDashboard },
    { title: 'AI 상담', url: '/chatbot', icon: MessageCircleMore },
    { title: '혜택 안내', url: '/benefits', icon: Gift },
    { title: 'HR 인사이트', url: '/hr-insights', icon: BarChart3 },
    { title: '웰니스 추천', url: '/wellness', icon: Heart },
    { title: '동선 추천', url: '/route', icon: MapPin },
    { title: '여정 관리', url: '/journey', icon: Route },
    { title: '서류함', url: '/documents', icon: FolderOpen },
    { title: '휴가 일정', url: '/leave', icon: CalendarDays },
    { title: '설정', url: '/settings', icon: Settings }
];

export function AppSidebar() {
    return (
        <aside className="flex h-screen w-64 flex-col border-r border-border bg-card">
            <div className="flex items-center gap-2 px-6 py-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                    <span className="text-sm font-bold text-primary-foreground">MP</span>
                </div>
                <span className="text-lg font-bold text-foreground">MP Navigator</span>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-2">
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
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                        <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-foreground">김지은</p>
                        <p className="text-xs text-muted-foreground">인사팀 · 대리</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
