import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    Legend,
    ScatterChart,
    Scatter,
    ZAxis
} from 'recharts';
import { requestChatAnswer } from '@/lib/chatApi';

const topics = [
    { id: 1, label: '복직_불이익', color: 'hsl(352, 87%, 67%)' },
    { id: 2, label: '단축근무_거절', color: 'hsl(352, 87%, 57%)' },
    { id: 3, label: '직장내_눈치', color: 'hsl(350, 80%, 75%)' },
    { id: 4, label: '법령_정보_부족', color: 'hsl(350, 70%, 82%)' },
    { id: 5, label: '임신_은폐', color: 'hsl(352, 60%, 50%)' }
];

const HR_COMMUNITY_POST_COUNT = 1500;

const summaryCards = [
    { label: '분석 게시글 수', value: `${HR_COMMUNITY_POST_COUNT.toLocaleString()}건`, icon: '📄' },
    { label: '추출 토픽 수', value: `${topics.length}개`, icon: '🔍' },
    { label: '주요 키워드', value: '육아휴직 · 단축근무 · 복직', icon: '🏷️' }
];

const keywordData = [
    { topic: '복직_불이익', 복직: 85, 불안: 72, 경력단절: 65, 눈치: 58, 퇴사: 45 },
    { topic: '단축근무_거절', 단축근무: 88, 거절: 70, 상사: 63, 업무량: 57, 눈치: 50 },
    { topic: '직장내_눈치', 눈치: 82, 분위기: 74, 승진: 60, 인사평가: 55, 차별: 48 },
    { topic: '법령_정보_부족', 법령: 92, 정보: 75, 부족: 68, 접근성: 60, 교육: 52 },
    { topic: '임신_은폐', 임신: 90, 은폐: 78, 스트레스: 62, 건강: 55, 지원: 48 }
];

const barData = topics.map((t, i) => ({
    topic: t.label,
    word1: keywordData[i][Object.keys(keywordData[i])[1] as keyof (typeof keywordData)[0]] as number,
    word2: keywordData[i][Object.keys(keywordData[i])[2] as keyof (typeof keywordData)[0]] as number,
    word3: keywordData[i][Object.keys(keywordData[i])[3] as keyof (typeof keywordData)[0]] as number,
    word4: keywordData[i][Object.keys(keywordData[i])[4] as keyof (typeof keywordData)[0]] as number,
    word5: keywordData[i][Object.keys(keywordData[i])[5] as keyof (typeof keywordData)[0]] as number,
    fill: t.color
}));

const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
const trendData = months.map((month, i) => ({
    month,
    [topics[0].label]: Math.round(28 + Math.sin(i * 0.55) * 8 + i * 0.8),
    [topics[1].label]: Math.round(24 + Math.cos(i * 0.45) * 7 + i * 0.6),
    [topics[2].label]: Math.round(30 + Math.sin(i * 0.35) * 6 + i * 0.5),
    [topics[3].label]: Math.round(18 + Math.cos(i * 0.5) * 5 + i * 0.7),
    [topics[4].label]: Math.round(14 + Math.sin(i * 0.65) * 5 + i * 0.4)
}));

const bubbleData = [
    { x: 30, y: 60, z: 280, topic: '복직_불이익' },
    { x: 70, y: 75, z: 220, topic: '단축근무_거절' },
    { x: 50, y: 30, z: 180, topic: '직장내_눈치' },
    { x: 80, y: 45, z: 150, topic: '법령_정보_부족' },
    { x: 40, y: 80, z: 200, topic: '임신_은폐' }
];

const topPains = [
    { rank: 1, text: '복직 후 부서 이동 및 경력단절 불안', pct: '34%' },
    { rank: 2, text: '단축근무 사용 시 동료·상사 눈치', pct: '28%' },
    { rank: 3, text: '출산휴가 신청 절차 복잡함', pct: '18%' },
    { rank: 4, text: '지원금·바우처 정보 접근성 부족', pct: '12%' },
    { rank: 5, text: '인사평가 불이익 우려', pct: '8%' }
];

const hrPrompts = [
    '배우자 출산휴가 규정 점검해줘',
    '육아기 근로시간 단축 취업규칙과 법 차이 알려줘',
    '난임치료휴가 유급일수 점검해줘'
];

export default function HRInsights() {
    const [hrQuestion, setHrQuestion] = useState('배우자 출산휴가 규정 점검해줘');
    const [hrAnswer, setHrAnswer] = useState('');
    const [hrSources, setHrSources] = useState<string[]>([]);
    const [hrLoading, setHrLoading] = useState(false);

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
                    ? '답변 생성이 오래 걸리고 있어요. 잠시 후 다시 시도하거나, 점검할 제도명을 더 구체적으로 입력해 주세요.'
                    : err instanceof Error && err.message
                      ? err.message
                      : 'HR 점검 도우미 연결에 실패했습니다. 잠시 후 다시 시도해 주세요.'
            );
            setHrSources([]);
        } finally {
            setHrLoading(false);
        }
    };

    return (
        <main className="flex-1 overflow-y-auto bg-background p-6 lg:p-8">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-foreground">HR 관리자 워크스페이스</h1>
                <p className="text-sm text-muted-foreground mt-1">
                    구성원 고충 흐름과 취업규칙 점검 포인트를 함께 확인합니다
                </p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {summaryCards.map((c) => (
                    <Card key={c.label}>
                        <CardContent className="flex items-center gap-4 p-5">
                            <span className="text-3xl">{c.icon}</span>
                            <div>
                                <p className="text-xs text-muted-foreground">{c.label}</p>
                                <p className="text-lg font-bold text-foreground">{c.value}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className="mb-6 border-primary/20 bg-card">
                <CardHeader>
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <CardTitle className="text-lg">HR 규정 점검 도우미</CardTitle>
                            <p className="mt-1 text-sm text-muted-foreground">
                                법정 기준과 취업규칙 차이를 관리자 관점으로 비교하고, 운영 조치까지 확인합니다.
                            </p>
                        </div>
                        <Badge variant="secondary" className="w-fit">
                            HR 관리자 모드
                        </Badge>
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
                                onChange={(event) => setHrQuestion(event.target.value)}
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
                                    <p className="whitespace-pre-line text-sm leading-relaxed text-foreground">
                                        {hrAnswer}
                                    </p>
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
                                        <p className="text-sm font-semibold text-foreground">
                                            점검할 규정을 입력하세요
                                        </p>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            법정 의무, 사내 규정, 차이/점검, 실무 팁이 분리되어 표시됩니다.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Left 2/3 */}
                <div className="xl:col-span-2 space-y-6">
                    {/* Bar Chart */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">토픽별 키워드 분포</CardTitle>
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

                    {/* Line Chart */}
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
                                        <Line
                                            key={t.label}
                                            type="monotone"
                                            dataKey={t.label}
                                            stroke={t.color}
                                            strokeWidth={2}
                                            dot={false}
                                        />
                                    ))}
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    {/* Bubble Chart */}
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

                {/* Right 1/3 */}
                <div className="space-y-6">
                    <Card className="sticky top-6">
                        <CardHeader>
                            <CardTitle className="text-base">💡 챗봇에 반영된 인사이트</CardTitle>
                            <p className="text-xs text-muted-foreground">주요 고충 TOP 5</p>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {topPains.map((p) => (
                                <div key={p.rank} className="flex items-start gap-3">
                                    <Badge variant="secondary" className="shrink-0 mt-0.5">
                                        {p.rank}
                                    </Badge>
                                    <div className="flex-1">
                                        <p className="text-sm text-foreground">{p.text}</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">언급 비율 {p.pct}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
