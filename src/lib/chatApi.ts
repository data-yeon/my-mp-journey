const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000';
const DEFAULT_CHAT_TIMEOUT_MS = Number(import.meta.env.VITE_CHAT_TIMEOUT_MS) || 60000;

export type ChatAudience = 'employee' | 'hr';

export type ChatAnswer = {
    answer: string;
    sources: string[];
};

type ChatApiResponse = {
    answer?: unknown;
    sources?: unknown;
    detail?: unknown;
};

const normalizeSources = (sources: unknown): string[] => {
    if (!Array.isArray(sources)) return [];

    return sources
        .map((source) => String(source).trim())
        .filter(Boolean)
        .filter((source, index, list) => list.indexOf(source) === index);
};

const parseChatResponse = async (response: Response): Promise<ChatApiResponse> => {
    const contentType = response.headers.get('content-type') ?? '';
    if (!contentType.includes('application/json')) return {};

    try {
        return (await response.json()) as ChatApiResponse;
    } catch {
        return {};
    }
};

const getApiErrorMessage = (data: ChatApiResponse) => {
    if (typeof data.detail === 'string' && data.detail.trim()) {
        return data.detail;
    }

    return '챗봇 서버에서 답변을 처리하지 못했어요. 질문을 조금 더 구체적으로 다시 입력해 주세요.';
};

export const requestChatAnswer = async (
    message: string,
    audience: ChatAudience,
    timeoutMs = DEFAULT_CHAT_TIMEOUT_MS
): Promise<ChatAnswer> => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), timeoutMs);

    try {
        const response = await fetch(`${API_URL}/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message, audience }),
            signal: controller.signal
        });

        const data = await parseChatResponse(response);
        if (!response.ok) {
            throw new Error(getApiErrorMessage(data));
        }

        const answer = typeof data.answer === 'string' ? data.answer.trim() : '';
        return {
            answer: answer || '답변을 생성하지 못했어요. 질문에 제도명이나 지역명을 조금 더 구체적으로 적어 주세요.',
            sources: normalizeSources(data.sources)
        };
    } finally {
        window.clearTimeout(timeout);
    }
};
