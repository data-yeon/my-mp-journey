import json
import pandas as pd
from konlpy.tag import Okt
from gensim import corpora, models
import matplotlib.pyplot as plt
import warnings
warnings.filterwarnings('ignore')

plt.rcParams['font.family'] = 'AppleGothic'
plt.rcParams['axes.unicode_minus'] = False

# 실제 더미 데이터 로드
with open('data/hr_community.json', encoding='utf-8') as f:
    posts = json.load(f)

df = pd.DataFrame(posts)
print(f"총 게시글: {len(df)}개")
print(f"토픽 분포:\n{df['lda_topic_label'].value_counts()}\n")

# 형태소 분석
okt = Okt()
stopwords = set(['이', '가', '을', '를', '은', '는', '에', '의', '으로', '에서', '도', '만', '수', '것',
                 '그', '저', '제', '좀', '더', '너무', '정말', '진짜', '어요', '해요', '있어', '없어',
                 '같아요', '같아', '했어요', '하고', '하는', '되는', '되어', '있는'])

def preprocess(text):
    tokens = okt.nouns(str(text))
    return [t for t in tokens if t not in stopwords and len(t) > 1]

print("형태소 분석 중... (시간이 걸릴 수 있어요)")
tokenized = [preprocess(doc) for doc in df['content']]
tokenized = [t for t in tokenized if t]  # 빈 리스트 제거

# LDA 모델 학습
dictionary = corpora.Dictionary(tokenized)
dictionary.filter_extremes(no_below=3, no_above=0.7)
corpus = [dictionary.doc2bow(tokens) for tokens in tokenized]
lda_model = models.LdaModel(corpus, num_topics=5, id2word=dictionary, passes=30, random_state=42)

# 토픽별 상위 단어 출력
print("=" * 60)
print("LDA 토픽 모델링 결과 (전체 200개 게시글)")
print("=" * 60)
topic_names = ["복직·소외 문제", "법령·지원금 정보", "단축근무·불이익", "임신 중 차별", "모성보호 권리"]
topics = lda_model.print_topics(num_words=7)
for i, (idx, topic) in enumerate(topics):
    label = topic_names[i] if i < len(topic_names) else f"토픽{i+1}"
    print(f"\n토픽 {i+1} [{label}]")
    print(f"  {topic}")

# 실제 토픽 레이블 분포 vs LDA 결과 비교
print("\n실제 레이블 분포:")
for label, cnt in df['lda_topic_label'].value_counts().items():
    print(f"  {label}: {cnt}개")

# 시각화
fig, axes = plt.subplots(2, 3, figsize=(16, 10))
fig.suptitle('HR 파트 - LDA 토픽 모델링 결과 (200개 게시글)', fontsize=14, fontweight='bold')

colors = ['#378ADD', '#639922', '#BA7517', '#E24B4A', '#9B59B6']

for i, (idx, topic) in enumerate(topics):
    ax = axes[i // 3][i % 3]
    parts = topic.split(' + ')
    words = [p.split('"')[1] for p in parts]
    weights = [float(p.split('*')[0]) for p in parts]
    label = topic_names[i] if i < len(topic_names) else f"토픽{i+1}"
    ax.barh(words[::-1], weights[::-1], color=colors[i], alpha=0.8)
    ax.set_title(f'토픽 {i+1}\n{label}', fontsize=10)
    ax.set_xlabel('가중치')

# 마지막 칸: 실제 레이블 분포 파이차트
ax_pie = axes[1][2]
label_counts = df['lda_topic_label'].value_counts()
ax_pie.pie(label_counts.values, labels=label_counts.index, autopct='%1.0f%%',
           colors=colors[:len(label_counts)], startangle=90)
ax_pie.set_title('실제 토픽 분포', fontsize=10)

plt.tight_layout()
plt.savefig('lda_result.png', dpi=150, bbox_inches='tight')
plt.show()
print("\n그래프가 lda_result.png 로 저장됐어요!")
