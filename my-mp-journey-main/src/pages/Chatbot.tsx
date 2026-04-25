import { useState, useRef, useEffect } from 'react';
import { Send, Plus, MapPin, Phone, FileText, ExternalLink, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const API_URL = 'http://localhost:8000';

interface Message {
    id: number;
    role: 'user' | 'bot';
    content: string;
    sources?: string[];
}

const INITIAL_MESSAGE: Message = {
    id: 1,
    role: 'bot',
    content: '안녕하세요! 맘마중 HR 챗봇입니다.\n모성보호 관련 법령 질문을 편하게 물어보세요.',
};

const suggestedQuestions = ['출산전후휴가 기간이 얼마나 되나요?', '육아휴직 신청 조건이 뭔가요?', '임신 중 야근을 강요받고 있어요'];

const recentChats = [
    { id: 1, title: '출산휴가 신청 안내', date: '오늘' },
    { id: 2, title: '육아휴직 급여 계산', date: '어제' },
    { id: 3, title: '태아 검진 휴가 문의', date: '4월 7일' },
    { id: 4, title: '단축근무 시간 변경', date: '4월 3일' }
];

const benefits = [
    { title: '강남구 출산 축하금', detail: '첫째 50만원, 둘째 100만원' },
    { title: '서울시 임산부 교통비', detail: '월 7만원 지원' },
    { title: '국민행복카드 바우처', detail: '100만원 (쌍둥이 140만원)' }
];

const relatedDocs = ['출산휴가 신청 가이드', '육아휴직 급여 안내서', '모성보호 제도 총정리'];

export default function ChatbotPage() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

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
                body: JSON.stringify({ message: text }),
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
                    ? '모성보호 관련 법령 질문만 답변드릴 수 있어요. 출산휴가, 육아휴직, 임산부 보호 등에 대해 물어봐 주세요.'
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
                            <p className="text-sm font-bold text-foreground">김지은</p>
                            <p className="text-xs text-muted-foreground">임신 24주차 · 서울 강남구</p>
                        </div>
                    </div>
                </div>

                {/* Recent chats */}
                <div className="flex-1 overflow-y-auto p-4">
                    <p className="mb-3 text-xs font-semibold text-muted-foreground">최근 대화</p>
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
                        <Plus className="mr-2 h-4 w-4" />새 대화 시작하기
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
                        <p className="text-sm font-bold text-foreground">MP 어시스턴트</p>
                        <p className="text-xs text-muted-foreground">모성보호 전문 상담 챗봇</p>
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
                    {/* Benefits */}
                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <p className="text-sm font-bold text-foreground">내 지역 혜택 요약</p>
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
                            <p className="text-sm font-bold text-foreground">긴급 연락처</p>
                        </div>
                        <div className="space-y-2">
                            <div className="rounded-lg bg-background p-3">
                                <p className="text-xs font-semibold text-foreground">모성보호 상담센터</p>
                                <p className="mt-0.5 text-[11px] text-primary font-medium">1588-0000</p>
                            </div>
                            <div className="rounded-lg bg-background p-3">
                                <p className="text-xs font-semibold text-foreground">근로복지공단</p>
                                <p className="mt-0.5 text-[11px] text-primary font-medium">1588-0075</p>
                            </div>
                            <div className="rounded-lg bg-background p-3">
                                <p className="text-xs font-semibold text-foreground">건강보험공단 임산부</p>
                                <p className="mt-0.5 text-[11px] text-primary font-medium">1577-1000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
