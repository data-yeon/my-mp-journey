"""
CLI 진입점. 대화형 루프 실행.

사용법:
    python main.py              # 대화 모드
    python main.py --rebuild    # ChromaDB 재빌드 후 대화 모드
"""

import sys
from src.chatbot import MaternityHRChatbot


def main():
    force_rebuild = "--rebuild" in sys.argv
    bot = MaternityHRChatbot(force_rebuild=force_rebuild)

    print("종료하려면 'exit' 또는 'quit'를 입력하세요.\n")
    while True:
        try:
            question = input("질문: ").strip()
        except (EOFError, KeyboardInterrupt):
            print("\n챗봇을 종료합니다.")
            break

        if not question:
            continue
        if question.lower() in ("exit", "quit", "종료"):
            print("챗봇을 종료합니다.")
            break

        result = bot.chat_with_sources(question)
        print(f"\n[답변]\n{result['answer']}")
        if result["sources"]:
            print(f"\n[참조 법령] {', '.join(result['sources'])}")
        print("-" * 60 + "\n")


if __name__ == "__main__":
    main()
