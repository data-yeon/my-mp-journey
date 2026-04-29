import { useState, useRef, useEffect } from 'react';
import { Send, Plus, MapPin, Phone, FileText, ExternalLink, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gov24LocalBirthServices } from '@/data/gov24LocalBirthServices';
import type { UserRole } from '@/types/role';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000';

interface Message {
    id: number;
    role: 'user' | 'bot';
    content: string;
    sources?: string[];
}

const getInitialMessage = (role: UserRole): Message => ({
    id: 1,
    role: 'bot',
    content: role === 'hr'
        ? '안녕하세요! 맘마중 HR 법령·규정 확인 도우미입니다.\n모성보호 관련 법령 기준과 취업규칙 차이를 빠르게 확인해 드릴게요.'
        : '안녕하세요! 맘마중 사우 상담 챗봇입니다.\n내 휴가, 급여, 회사 규정, 지역별 출산 지원 혜택을 편하게 물어보세요.',
});

const employeeSuggestedQuestions = [
    '나 얼마나 쉬어야함',
    '배우자 출산휴가 며칠이야?',
    '서울시 종로구 지원금은 얼마나 받을 수 있나요?',
    '육아휴직 급여는 얼마나 받아?'
];

const hrSuggestedQuestions = [
    '배우자 출산휴가 규정 점검해줘',
    '육아기 근로시간 단축 취업규칙과 법 차이 알려줘',
    '난임치료휴가 유급일수 점검해줘',
    '우리 회사 육아휴직 규정 어떻게 돼?'
];

const employeeRecentChats = [
    { id: 1, title: '출산휴가 신청 안내', date: '오늘' },
    { id: 2, title: '육아휴직 급여 계산', date: '어제' },
    { id: 3, title: '태아 검진 휴가 문의', date: '4월 7일' },
    { id: 4, title: '단축근무 시간 변경', date: '4월 3일' }
];

const hrRecentChecks = [
    { id: 1, title: '배우자 출산휴가 규정 점검', date: '오늘' },
    { id: 2, title: '육아기 단축근무 법령 비교', date: '어제' },
    { id: 3, title: '난임치료휴가 유급 기준 확인', date: '4월 8일' },
    { id: 4, title: '복직 조항 리스크 검토', date: '4월 3일' }
];

const userRegion = {
    province: '서울특별시',
    district: '강남구',
};

const benefits = gov24LocalBirthServices
    .filter((service) => (
        service.province === userRegion.province
        && (service.district === userRegion.district || service.district === '전체')
    ))
    .sort((a, b) => {
        const score = (service: typeof gov24LocalBirthServices[number]) => {
            let value = 0;
            if (service.supportType.includes('현금')) value += 3;
            if (service.onlineApplyAvailable) value += 2;
            if (/출산|임신|산모|신생아|양육/.test(`${service.title} ${service.summary}`)) value += 1;
            return value;
        };
        return score(b) - score(a);
    })
    .slice(0, 3)
    .map((service) => ({
        title: service.title,
        detail: `${service.supportType || '지원형태 확인'} · ${service.applicationMethod || '신청방법 확인'}`,
    }));

const employeeRelatedDocs = ['내 휴가 신청 가이드', '육아휴직 급여 안내서', '지역 출산지원금 안내'];
const hrRelatedDocs = ['취업규칙 조항 색인', '모성보호 법령 기준표', '운영 리스크 체크리스트'];

const employeeContacts = [
    { title: '모성보호 상담센터', value: '1588-0000' },
    { title: '근로복지공단', value: '1588-0075' },
    { title: '건강보험공단 임산부', value: '1577-1000' }
];

const hrContacts = [
    { title: '인사운영 담당', value: '내부 HR 채널' },
    { title: '노무 검토 요청', value: '노무 검토 접수함' },
    { title: '취업규칙 문서관리', value: '규정 관리함' }
];

type ChatbotPageProps = {
    role: UserRole;
};

export default function ChatbotPage({ role }: ChatbotPageProps) {
    const isHrMode = role === 'hr';
    const profile = isHrMode
        ? { name: '박서연', detail: 'HR 관리자 · 인사운영' }
        : { name: '김지은', detail: '임신 24주차 · 서울 강남구' };
    const suggestedQuestions = isHrMode ? hrSuggestedQuestions : employeeSuggestedQuestions;
    const recentChats = isHrMode ? hrRecentChecks : employeeRecentChats;
    const relatedDocs = isHrMode ? hrRelatedDocs : employeeRelatedDocs;
    const contacts = isHrMode ? hrContacts : employeeContacts;
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([getInitialMessage(role)]);
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setInput('');
        setMessages([getInitialMessage(role)]);
    }, [role]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = async (text: string) => {
        if (!text.trim() || loading) return;
        const userMsg: Message = { id: Date.now(), role: 'user', content: text };
        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setLoading(true);

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 20000);

        try {
            const res = await fetch(`${API_URL}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text, audience: role }),
                signal: controller.signal,
            });
            const data = await res.json();
            setMessages((prev) => [...prev, {
                id: Date.now() + 1,
                role: 'bot',
                content: data.answer,
                sources: data.sources,
            }]);
        } catch (err) {
            const isTimeout = err instanceof DOMException && err.name === 'AbortError';
            setMessages((prev) => [...prev, {
                id: Date.now() + 1,
                role: 'bot',
                content: isTimeout
                    ? '답변 생성이 오래 걸리고 있어요. 출산휴가, 육아휴직, 지역별 출산 지원 혜택처럼 구체적으로 다시 물어봐 주세요.'
                    : '일시적인 오류가 발생했어요. 잠시 후 다시 시도해주세요.',
            }]);
        } finally {
            clearTimeout(timeout);
            setLoading(false);
        }
    };

    return (
        <div className="flex h-full min-h-0 flex-1">
            {/* Left Panel */}
            <div className="hidden w-72 flex-col border-r border-border bg-card lg:flex">
                {/* Profile */}
                <div className="border-b border-border p-5">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
                            <User className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-foreground">{profile.name}</p>
                            <p className="text-xs text-muted-foreground">{profile.detail}</p>
                        </div>
                    </div>
                </div>

                {/* Recent chats */}
                <div className="flex-1 overflow-y-auto p-4">
                    <p className="mb-3 text-xs font-semibold text-muted-foreground">
                        {isHrMode ? '최근 점검' : '최근 대화'}
                    </p>
                    <ul className="space-y-1">
                        {recentChats.map((chat) => (
                            <li
                                key={chat.id}
                                className={`cursor-pointer rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-accent ${chat.id === 1 ? 'bg-secondary font-semibold text-primary' : 'text-foreground'}`}
                            >
                                <p className="truncate">{chat.title}</p>
                                <p className="mt-0.5 text-[11px] text-muted-foreground">{chat.date}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* New chat button */}
                <div className="border-t border-border p-4">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        <Plus className="mr-2 h-4 w-4" />
                        {isHrMode ? '새 점검 시작하기' : '새 대화 시작하기'}
                    </Button>
                </div>
            </div>

            {/* Center - Chat */}
            <div className="flex flex-1 flex-col">
                {/* Chat header */}
                <div className="flex items-center gap-3 border-b border-border px-6 py-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                        <Bot className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-foreground">
                            {isHrMode ? '맘마중 HR 법령·규정 확인' : '맘마중 사우 상담'}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            {isHrMode ? '법령 기준 · 취업규칙 비교 · 실무 적용 확인' : '휴가 · 급여 · 지역 혜택 안내'}
                        </p>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="mx-auto max-w-2xl space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                                        msg.role === 'user'
                                            ? 'bg-primary text-primary-foreground rounded-br-md'
                                            : 'bg-card border border-border text-foreground rounded-bl-md'
                                    }`}
                                >
                                    <p className="whitespace-pre-line">{msg.content}</p>
                                    {msg.sources && msg.sources.length > 0 && (
                                        <div className="mt-2 flex flex-wrap gap-1">
                                            {msg.sources.map((s) => (
                                                <span key={s} className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] text-primary font-medium">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start">
                                <div className="rounded-2xl rounded-bl-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                                    답변 생성 중...
                                </div>
                            </div>
                        )}
                        <div ref={bottomRef} />
                    </div>
                </div>

                {/* Suggested questions */}
                <div className="flex flex-wrap gap-2 border-t border-border px-6 pt-3">
                    {suggestedQuestions.map((q) => (
                        <button
                            key={q}
                            onClick={() => sendMessage(q)}
                            disabled={loading}
                            className="rounded-full border border-primary/30 bg-secondary px-3.5 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
                        >
                            {q}
                        </button>
                    ))}
                </div>

                {/* Input */}
                <div className="p-4">
                    <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-primary/30">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                            placeholder="궁금한 점을 입력해 주세요..."
                            className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                        />
                        <Button
                            size="icon"
                            onClick={() => sendMessage(input)}
                            disabled={loading}
                            className="h-8 w-8 shrink-0 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                        >
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <div className="hidden w-72 flex-col border-l border-border bg-card xl:flex">
                <div className="flex-1 overflow-y-auto p-5 space-y-5">
                    {isHrMode ? (
                        <div>
                            <div className="mb-3 flex items-center gap-2">
                                <Bot className="h-4 w-4 text-primary" />
                                <p className="text-sm font-bold text-foreground">HR 점검 범위</p>
                            </div>
                            <div className="space-y-2">
                                {[
                                    { title: '법령 vs 취업규칙', detail: '법정 최저 기준과 사내 조항의 차이를 분리해서 확인' },
                                    { title: '빠른 법령 확인', detail: '휴가 일수, 급여, 신청 요건을 조항 기준으로 빠르게 확인' },
                                    { title: '운영 리스크', detail: '불리한 조항, 구버전 기준, 신청 흐름 공백을 함께 확인' }
                                ].map((item) => (
                                    <div key={item.title} className="rounded-lg bg-background p-3">
                                        <p className="text-xs font-semibold text-foreground">{item.title}</p>
                                        <p className="mt-0.5 text-[11px] text-muted-foreground">{item.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="mb-3 flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <p className="text-sm font-bold text-foreground">서울 강남구 혜택 요약</p>
                            </div>
                            <div className="space-y-2">
                                {benefits.map((b) => (
                                    <div key={b.title} className="rounded-lg bg-background p-3">
                                        <p className="text-xs font-semibold text-foreground">{b.title}</p>
                                        <p className="mt-0.5 text-[11px] text-muted-foreground">{b.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Related docs */}
                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <FileText className="h-4 w-4 text-primary" />
                            <p className="text-sm font-bold text-foreground">관련 문서</p>
                        </div>
                        <ul className="space-y-1.5">
                            {relatedDocs.map((doc) => (
                                <li key={doc}>
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-primary hover:bg-accent"
                                    >
                                        <ExternalLink className="h-3 w-3" />
                                        {doc}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Emergency contacts */}
                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <Phone className="h-4 w-4 text-primary" />
                            <p className="text-sm font-bold text-foreground">
                                {isHrMode ? '운영 연락처' : '긴급 연락처'}
                            </p>
                        </div>
                        <div className="space-y-2">
                            {contacts.map((contact) => (
                                <div key={contact.title} className="rounded-lg bg-background p-3">
                                    <p className="text-xs font-semibold text-foreground">{contact.title}</p>
                                    <p className="mt-0.5 text-[11px] text-primary font-medium">{contact.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
