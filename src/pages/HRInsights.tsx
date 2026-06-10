import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, LineChart, Line, Legend,
    ScatterChart, Scatter, ZAxis
} from 'recharts';
import { requestChatAnswer } from '@/lib/chatApi';

// ── 맘카페 크롤링 시뮬레이션 메타 ──────────────────────────────────────────
const CRAWL_META = {
    postCount: 1500,
    period: '2025.01 ~ 2025.06',
    sources: ['네이버 카페 (맘스홀릭베이비)', '다음 카페 (아이사랑)', '육아맘 커뮤니티'],
    method: 'LDA 토픽 모델링 + TF-IDF 키워드 추출',
};

// ── 커뮤니티 × 취업규칙 갭 분석 데이터 ────────────────────────────────────
type GapLevel = 'violation' | 'missing' | 'unclear' | 'ok';

interface GapRow {
    rank: number;
    issue: string;
    frequency: number;
    pct: string;
    sample: string;
    law: { article: string; content: string };
    rule: { article: string; content: string };
    gap: GapLevel;
    action: string;
}

const gapData: GapRow[] = [
    {
        rank: 1,
        issue: '배우자 출산휴가 일수 혼란',
        frequency: 342,
        pct: '22.8%',
        sample: '"남편 출산휴가가 10일인 줄 알았는데 20일로 바뀌었다는데, HR이 아직 10일이라고 해요"',
        law: { article: '남녀고용평등법 제18조의2', content: '20일 유급 (2024.02 개정)' },
        rule: { article: '취업규칙 제36조', content: '10일 유급' },
        gap: 'violation',
        action: '취업규칙 제36조 즉시 개정 필요 (10일 → 20일). 미개정 시 노동청 시정 명령 대상.',
    },
    {
        rank: 2,
        issue: '난임치료휴가 유급일수 기준 불명확',
        frequency: 215,
        pct: '14.3%',
        sample: '"난임휴가 3일이 유급이라고 들었는데 회사에서는 1일만 유급이라고 해요"',
        law: { article: '남녀고용평등법 제18조의3', content: '연 6일, 최초 3일 유급 (2023.08 개정)' },
        rule: { article: '취업규칙 제86조', content: '연 6일, 최초 1일 유급' },
        gap: 'violation',
        action: '취업규칙 제86조 즉시 개정 필요 (유급 1일 → 3일). 소급 적용 여부도 법무 검토 권장.',
    },
    {
        rank: 3,
        issue: '임신 중 근로시간 단축 거절',
        frequency: 189,
        pct: '12.6%',
        sample: '"임신 9주인데 단축근무 신청하니 인력 부족 이유로 거절당했어요. 불법 아닌가요?"',
        law: { article: '근로기준법 제74조', content: '임신 12주 이내·36주 이후 하루 2시간 단축 의무' },
        rule: { article: '취업규칙 제89조의2', content: '가족돌봄 단축만 명시, 임신기 전용 단축 조항 없음' },
        gap: 'missing',
        action: '임신기 근로시간 단축 전용 조항 신설. 현재 거절 사례는 근로기준법 위반 해당 가능.',
    },
    {
        rank: 4,
        issue: '복직 후 부서 이동·직급 불이익',
        frequency: 167,
        pct: '11.1%',
        sample: '"1년 육아휴직 후 복직했더니 한직 발령에 승진 누락됐어요. 이게 정상인가요?"',
        law: { article: '남녀고용평등법 제19조의4', content: '육아휴직 후 동일 업무·동등 수준 임금 복귀 원칙' },
        rule: { article: '취업규칙 제87조', content: '육아휴직 허용 규정만 존재, 복직 처우 보호 조항 없음' },
        gap: 'missing',
        action: '복직 후 처우 보호 조항 신설. 복직 6개월간 업무·평가 모니터링 프로세스 도입 권장.',
    },
    {
        rank: 5,
        issue: '태아검진 시간 유급 여부 혼선',
        frequency: 143,
        pct: '9.5%',
        sample: '"검진 받고 왔더니 반차 처리하라는데, 원래 별도로 주는 거 아닌가요?"',
        law: { article: '근로기준법 제74조의2', content: '임산부 정기건강진단 시간 임금 삭감 금지 의무' },
        rule: { article: '취업규칙 제84조', content: '"청구 시 허용한다"만 기재, 유급 여부·횟수 기준 없음' },
        gap: 'unclear',
        action: '제84조에 유급 허용 및 임신 주수별 허용 횟수 명시 권장. 현장 연차 대체 관행 즉시 시정.',
    },
];

const GAP_CONFIG: Record<GapLevel, { label: string; color: string; bg: string }> = {
    violation: { label: '⚠️ 법 위반 리스크',  color: '#dc2626', bg: '#fef2f2' },
    missing:   { label: '🔶 조항 미비',       color: '#d97706', bg: '#fffbeb' },
    unclear:   { label: '⚡ 기준 불명확',      color: '#ca8a04', bg: '#fefce8' },
    ok:        { label: '✅ 적합',            color: '#16a34a', bg: '#f0fdf4' },
};

// ── 토픽 모델링 결과 ────────────────────────────────────────────────────────
const topics = [
    { id: 1, label: '복직_불이익',    color: 'hsl(352,87%,67%)' },
    { id: 2, label: '단축근무_거절',  color: 'hsl(352,87%,57%)' },
    { id: 3, label: '직장내_눈치',    color: 'hsl(350,80%,75%)' },
    { id: 4, label: '법령_정보_부족', color: 'hsl(350,70%,82%)' },
    { id: 5, label: '임신_은폐',      color: 'hsl(352,60%,50%)' },
];

const keywordData = [
    { topic: '복직_불이익',    복직: 85, 불안: 72, 경력단절: 65, 눈치: 58, 퇴사: 45 },
    { topic: '단축근무_거절',  단축근무: 88, 거절: 70, 상사: 63, 업무량: 57, 눈치: 50 },
    { topic: '직장내_눈치',    눈치: 82, 분위기: 74, 승진: 60, 인사평가: 55, 차별: 48 },
    { topic: '법령_정보_부족', 법령: 92, 정보: 75, 부족: 68, 접근성: 60, 교육: 52 },
    { topic: '임신_은폐',      임신: 90, 은폐: 78, 스트레스: 62, 건강: 55, 지원: 48 },
];

const barData = topics.map((t, i) => ({
    topic: t.label,
    word1: keywordData[i][Object.keys(keywordData[i])[1] as keyof (typeof keywordData)[0]] as number,
    word2: keywordData[i][Object.keys(keywordData[i])[2] as keyof (typeof keywordData)[0]] as number,
    word3: keywordData[i][Object.keys(keywordData[i])[3] as keyof (typeof keywordData)[0]] as number,
    word4: keywordData[i][Object.keys(keywordData[i])[4] as keyof (typeof keywordData)[0]] as number,
    word5: keywordData[i][Object.keys(keywordData[i])[5] as keyof (typeof keywordData)[0]] as number,
    fill: t.color,
}));

const months = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
const trendData = months.map((month, i) => ({
    month,
    [topics[0].label]: Math.round(28 + Math.sin(i * 0.55) * 8 + i * 0.8),
    [topics[1].label]: Math.round(24 + Math.cos(i * 0.45) * 7 + i * 0.6),
    [topics[2].label]: Math.round(30 + Math.sin(i * 0.35) * 6 + i * 0.5),
    [topics[3].label]: Math.round(18 + Math.cos(i * 0.5)  * 5 + i * 0.7),
    [topics[4].label]: Math.round(14 + Math.sin(i * 0.65) * 5 + i * 0.4),
}));

const bubbleData = [
    { x: 30, y: 60, z: 280, topic: '복직_불이익' },
    { x: 70, y: 75, z: 220, topic: '단축근무_거절' },
    { x: 50, y: 30, z: 180, topic: '직장내_눈치' },
    { x: 80, y: 45, z: 150, topic: '법령_정보_부족' },
    { x: 40, y: 80, z: 200, topic: '임신_은폐' },
];

const hrPrompts = [
    '배우자 출산휴가 규정 점검해줘',
    '육아기 근로시간 단축 취업규칙과 법 차이 알려줘',
    '난임치료휴가 유급일수 점검해줘',
];

// ── 메인 컴포넌트 ─────────────────────────────────────────────────────────────
export default function HRInsights() {
    const [hrQuestion, setHrQuestion] = useState('배우자 출산휴가 규정 점검해줘');
    const [hrAnswer, setHrAnswer] = useState('');
    const [hrSources, setHrSources] = useState<string[]>([]);
    const [hrLoading, setHrLoading] = useState(false);
    const [expanded, setExpanded] = useState<number | null>(null);

    const askHrAssistant = async (question = hrQuestion) => {
        const text = question.trim();
        if (!text || hrLoading) return;
        setHrQuestion(text);
        setHrLoading(true);
        try {
            const data = await requestChatAnswer(text, 'hr');
            setHrAnswer(data.answer);
            setHrSources(data.sources);
        } catch (err) {
            const isTimeout =
                (err instanceof DOMException && err.name === 'AbortError') ||
                (err instanceof Error && err.name === 'AbortError');
            setHrAnswer(
                isTimeout
                    ? '답변 생성이 오래 걸리고 있어요. 잠시 후 다시 시도해 주세요.'
                    : err instanceof Error && err.message
                      ? err.message
                      : 'HR 점검 도우미 연결에 실패했습니다.',
            );
            setHrSources([]);
        } finally {
            setHrLoading(false);
        }
    };

    const violationCount = gapData.filter(r => r.gap === 'violation').length;
    const missingCount   = gapData.filter(r => r.gap === 'missing').length;
    const unclearCount   = gapData.filter(r => r.gap === 'unclear').length;

    return (
        <main className="flex-1 overflow-y-auto bg-background p-6 lg:p-8">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-foreground">HR 관리자 워크스페이스</h1>
                <p className="text-sm text-muted-foreground mt-1">
                    구성원 커뮤니티 고충 흐름과 취업규칙 점검 포인트를 함께 확인합니다
                </p>
            </div>

            {/* 크롤링 요약 카드 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Card>
                    <CardContent className="flex items-center gap-3 p-4">
                        <span className="text-2xl">📄</span>
                        <div>
                            <p className="text-[11px] text-muted-foreground">분석 게시글</p>
                            <p className="text-lg font-bold">{CRAWL_META.postCount.toLocaleString()}건</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex items-center gap-3 p-4">
                        <span className="text-2xl">🔍</span>
                        <div>
                            <p className="text-[11px] text-muted-foreground">추출 토픽</p>
                            <p className="text-lg font-bold">{topics.length}개</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
                    <CardContent className="flex items-center gap-3 p-4">
                        <span className="text-2xl">⚠️</span>
                        <div>
                            <p className="text-[11px] text-red-600">법 위반 리스크</p>
                            <p className="text-lg font-bold text-red-600">{violationCount}건</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
                    <CardContent className="flex items-center gap-3 p-4">
                        <span className="text-2xl">🔶</span>
                        <div>
                            <p className="text-[11px] text-amber-600">조항 미비·불명확</p>
                            <p className="text-lg font-bold text-amber-600">{missingCount + unclearCount}건</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* ── 핵심: 커뮤니티 이슈 × 취업규칙 갭 분석 ── */}
            <Card className="mb-6 border-primary/20">
                <CardHeader>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <CardTitle className="text-lg">맘카페 이슈 × 취업규칙 갭 분석</CardTitle>
                            <p className="mt-0.5 text-sm text-muted-foreground">
                                커뮤니티 게시글({CRAWL_META.postCount.toLocaleString()}건) 기반 주요 불만 이슈와 맘마중컴퍼니 취업규칙을 법정 기준과 대조
                            </p>
                        </div>
                        <div className="flex gap-1.5 flex-wrap">
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-medium">분석 기간: {CRAWL_META.period}</span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-medium">{CRAWL_META.method}</span>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="divide-y divide-border">
                        {gapData.map((row) => {
                            const cfg = GAP_CONFIG[row.gap];
                            const isOpen = expanded === row.rank;
                            return (
                                <div key={row.rank} className="px-5 py-4">
                                    {/* 헤더 행 */}
                                    <div
                                        className="flex items-start gap-3 cursor-pointer select-none"
                                        onClick={() => setExpanded(isOpen ? null : row.rank)}
                                    >
                                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                                            {row.rank}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <span className="font-semibold text-sm text-foreground">{row.issue}</span>
                                                <span
                                                    className="rounded-full px-2 py-0.5 text-[11px] font-semibold"
                                                    style={{ backgroundColor: cfg.bg, color: cfg.color }}
                                                >
                                                    {cfg.label}
                                                </span>
                                                <span className="text-[11px] text-muted-foreground">언급 {row.frequency}건 ({row.pct})</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground italic truncate">{row.sample}</p>
                                        </div>
                                        <span className="text-muted-foreground text-sm mt-0.5">{isOpen ? '▲' : '▼'}</span>
                                    </div>

                                    {/* 펼쳐지는 상세 비교 */}
                                    {isOpen && (
                                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 pl-9">
                                            {/* 법정 기준 */}
                                            <div className="rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/20 p-3">
                                                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-1">법정 기준</p>
                                                <p className="text-xs font-medium text-foreground mb-0.5">{row.law.article}</p>
                                                <p className="text-xs text-muted-foreground">{row.law.content}</p>
                                            </div>
                                            {/* 취업규칙 현황 */}
                                            <div
                                                className="rounded-lg border p-3"
                                                style={{ borderColor: cfg.color + '60', backgroundColor: cfg.bg }}
                                            >
                                                <p className="text-[10px] font-bold uppercase tracking-wide mb-1" style={{ color: cfg.color }}>
                                                    취업규칙 현황
                                                </p>
                                                <p className="text-xs font-medium text-foreground mb-0.5">{row.rule.article}</p>
                                                <p className="text-xs text-muted-foreground">{row.rule.content}</p>
                                            </div>
                                            {/* HR 권고 조치 */}
                                            <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 p-3">
                                                <p className="text-[10px] font-bold text-green-600 uppercase tracking-wide mb-1">HR 권고 조치</p>
                                                <p className="text-xs text-foreground leading-relaxed">{row.action}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <div className="px-5 py-3 border-t border-border bg-secondary/30 rounded-b-lg">
                        <p className="text-[11px] text-muted-foreground">
                            * 취업규칙 분석 출처: 맘마중컴퍼니 취업규칙 (2024년 기준) · 법정 기준 출처: 근로기준법·남녀고용평등법 최신 개정안
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* HR 규정 점검 도우미 */}
            <Card className="mb-6 border-primary/20">
                <CardHeader>
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <CardTitle className="text-lg">HR 규정 점검 도우미</CardTitle>
                            <p className="mt-1 text-sm text-muted-foreground">
                                법정 기준과 취업규칙 차이를 관리자 관점으로 비교하고, 운영 조치까지 확인합니다.
                            </p>
                        </div>
                        <Badge variant="secondary" className="w-fit">HR 관리자 모드</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-5 xl:grid-cols-[minmax(320px,0.85fr)_1.15fr]">
                        <div className="space-y-3">
                            <div className="flex flex-wrap gap-2">
                                {hrPrompts.map((prompt) => (
                                    <button
                                        key={prompt}
                                        onClick={() => askHrAssistant(prompt)}
                                        disabled={hrLoading}
                                        className="rounded-full border border-primary/25 bg-secondary px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
                                    >
                                        {prompt}
                                    </button>
                                ))}
                            </div>
                            <textarea
                                value={hrQuestion}
                                onChange={(e) => setHrQuestion(e.target.value)}
                                className="min-h-28 w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                                placeholder="점검할 HR 규정 질문을 입력하세요"
                            />
                            <Button
                                onClick={() => askHrAssistant()}
                                disabled={hrLoading}
                                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                            >
                                {hrLoading ? '점검 중...' : '규정 점검하기'}
                            </Button>
                        </div>
                        <div className="min-h-56 rounded-lg border border-border bg-background p-4">
                            {hrAnswer ? (
                                <>
                                    <p className="whitespace-pre-line text-sm leading-relaxed text-foreground">{hrAnswer}</p>
                                    {hrSources.length > 0 && (
                                        <div className="mt-4 flex flex-wrap gap-1">
                                            {hrSources.map((source) => (
                                                <span
                                                    key={source}
                                                    className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary"
                                                >
                                                    {source}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="flex h-full min-h-48 items-center justify-center text-center">
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">점검할 규정을 입력하세요</p>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            위 갭 분석 이슈를 클릭하거나 직접 질문을 입력하세요
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* 차트 영역 */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">토픽별 키워드 분포</CardTitle>
                            <p className="text-xs text-muted-foreground">맘카페 게시글 TF-IDF 분석 결과</p>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={barData} layout="vertical" margin={{ left: 80 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                    <XAxis type="number" tick={{ fontSize: 12 }} />
                                    <YAxis dataKey="topic" type="category" tick={{ fontSize: 12 }} width={90} />
                                    <Tooltip />
                                    <Bar dataKey="word1" stackId="a" fill="hsl(352,87%,67%)" name="키워드1" />
                                    <Bar dataKey="word2" stackId="a" fill="hsl(352,87%,57%)" name="키워드2" />
                                    <Bar dataKey="word3" stackId="a" fill="hsl(350,80%,75%)" name="키워드3" />
                                    <Bar dataKey="word4" stackId="a" fill="hsl(350,70%,82%)" name="키워드4" />
                                    <Bar dataKey="word5" stackId="a" fill="hsl(352,60%,50%)" name="키워드5" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">월별 토픽 트렌드 (2025)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={280}>
                                <LineChart data={trendData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                    <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                                    <YAxis tick={{ fontSize: 11 }} />
                                    <Tooltip />
                                    <Legend />
                                    {topics.map((t) => (
                                        <Line key={t.label} type="monotone" dataKey={t.label}
                                            stroke={t.color} strokeWidth={2} dot={false} />
                                    ))}
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">토픽 분포 (pyLDAvis 스타일)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                    <XAxis type="number" dataKey="x" name="PC1" tick={{ fontSize: 11 }} />
                                    <YAxis type="number" dataKey="y" name="PC2" tick={{ fontSize: 11 }} />
                                    <ZAxis type="number" dataKey="z" range={[200, 800]} />
                                    <Tooltip
                                        cursor={{ strokeDasharray: '3 3' }}
                                        content={({ payload }) => {
                                            if (!payload?.length) return null;
                                            const d = payload[0].payload;
                                            return (
                                                <div className="rounded-lg border bg-card p-2 text-xs shadow">
                                                    <p className="font-semibold">{d.topic}</p>
                                                    <p className="text-muted-foreground">비중: {d.z}</p>
                                                </div>
                                            );
                                        }}
                                    />
                                    <Scatter data={bubbleData} fill="hsl(352,87%,67%)" fillOpacity={0.6} />
                                </ScatterChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card className="sticky top-6">
                        <CardHeader>
                            <CardTitle className="text-base">💡 챗봇에 반영된 인사이트</CardTitle>
                            <p className="text-xs text-muted-foreground">커뮤니티 주요 고충 TOP 5</p>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {gapData.map((row) => {
                                const cfg = GAP_CONFIG[row.gap];
                                return (
                                    <div key={row.rank} className="flex items-start gap-3">
                                        <Badge variant="secondary" className="shrink-0 mt-0.5">{row.rank}</Badge>
                                        <div className="flex-1">
                                            <p className="text-sm text-foreground">{row.issue}</p>
                                            <div className="flex items-center gap-2 mt-0.5">
                                                <p className="text-xs text-muted-foreground">언급 비율 {row.pct}</p>
                                                <span
                                                    className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
                                                    style={{ backgroundColor: cfg.bg, color: cfg.color }}
                                                >
                                                    {cfg.label.split(' ').slice(1).join(' ')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
