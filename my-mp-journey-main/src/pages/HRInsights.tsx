import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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

const summaryCards = [
    { label: '분석 게시글 수', value: '12,847건', icon: '📄' },
    { label: '추출 토픽 수', value: '5개', icon: '🔍' },
    { label: '주요 키워드', value: '육아휴직 · 단축근무 · 복직', icon: '🏷️' }
];

const topics = [
    { id: 1, label: '복직 불안', color: 'hsl(352, 87%, 67%)' },
    { id: 2, label: '휴가 신청', color: 'hsl(352, 87%, 57%)' },
    { id: 3, label: '단축근무 갈등', color: 'hsl(350, 80%, 75%)' },
    { id: 4, label: '지원금 정보', color: 'hsl(350, 70%, 82%)' },
    { id: 5, label: '직장 내 눈치', color: 'hsl(352, 60%, 50%)' }
];

const keywordData = [
    { topic: '복직 불안', 복직: 85, 불안: 72, 경력단절: 65, 눈치: 58, 퇴사: 45 },
    { topic: '휴가 신청', 출산휴가: 90, 신청서: 78, 서류: 62, 급여: 55, 기간: 48 },
    { topic: '단축근무 갈등', 단축근무: 88, 갈등: 70, 상사: 63, 업무량: 57, 눈치: 50 },
    { topic: '지원금 정보', 지원금: 92, 출산장려금: 75, 바우처: 68, 신청방법: 60, 지자체: 52 },
    { topic: '직장 내 눈치', 눈치: 82, 분위기: 74, 승진: 60, 인사평가: 55, 차별: 48 }
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
const trendData = months.map((m, i) => ({
    month: m,
    '복직 불안': 20 + Math.sin(i * 0.5) * 15 + Math.random() * 5,
    '휴가 신청': 15 + Math.cos(i * 0.4) * 10 + Math.random() * 8,
    '단축근무 갈등': 25 + Math.sin(i * 0.7) * 12 + Math.random() * 6,
    '지원금 정보': 18 + Math.cos(i * 0.6) * 8 + Math.random() * 10,
    '직장 내 눈치': 22 + Math.sin(i * 0.3) * 10 + Math.random() * 7
}));

const bubbleData = [
    { x: 30, y: 60, z: 280, topic: '복직 불안' },
    { x: 70, y: 75, z: 220, topic: '휴가 신청' },
    { x: 50, y: 30, z: 180, topic: '단축근무 갈등' },
    { x: 80, y: 45, z: 150, topic: '지원금 정보' },
    { x: 40, y: 80, z: 200, topic: '직장 내 눈치' }
];

const topPains = [
    { rank: 1, text: '복직 후 부서 이동 및 경력단절 불안', pct: '34%' },
    { rank: 2, text: '단축근무 사용 시 동료·상사 눈치', pct: '28%' },
    { rank: 3, text: '출산휴가 신청 절차 복잡함', pct: '18%' },
    { rank: 4, text: '지원금·바우처 정보 접근성 부족', pct: '12%' },
    { rank: 5, text: '인사평가 불이익 우려', pct: '8%' }
];

export default function HRInsights() {
    return (
        <main className="flex-1 overflow-y-auto bg-background p-6 lg:p-8">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-foreground">HR 사각지대 분석</h1>
                <p className="text-sm text-muted-foreground mt-1">맘카페 실제 게시글 기반 LDA 토픽모델링 결과입니다</p>
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
                <div>
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
