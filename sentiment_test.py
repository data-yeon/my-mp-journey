import json
import pandas as pd
import matplotlib.pyplot as plt
import warnings
warnings.filterwarnings('ignore')

plt.rcParams['font.family'] = 'AppleGothic'
plt.rcParams['axes.unicode_minus'] = False

# 실제 더미 데이터 로드
with open('data/wellness_review.json', encoding='utf-8') as f:
    reviews = json.load(f)

df = pd.DataFrame(reviews)
print(f"총 리뷰: {len(df)}개")
print(f"카테고리: {df['product_category'].unique()}")

# trust_score는 이미 더미 데이터에 포함되어 있음 (rating×0.6 + sentiment×0.4)
# sentiment_score도 이미 계산됨

print("\n" + "=" * 60)
print("웰니스 파트 - 감성 분석 결과 (300개 리뷰)")
print("=" * 60)

# 카테고리별 집계
cat_summary = df.groupby('product_category').agg(
    리뷰수=('review_id', 'count'),
    평균별점=('rating', 'mean'),
    평균감성점수=('sentiment_score', 'mean'),
    평균신뢰점수=('trust_score', 'mean'),
    긍정비율=('sentiment_label', lambda x: (x == '긍정').sum() / len(x))
).round(3).reset_index()
print(cat_summary.to_string(index=False))

# 임신 시기별 집계
period_summary = df.groupby('period').agg(
    리뷰수=('review_id', 'count'),
    평균신뢰점수=('trust_score', 'mean'),
    긍정비율=('sentiment_label', lambda x: (x == '긍정').sum() / len(x))
).round(3).reset_index()
print("\n임신 시기별:")
print(period_summary.to_string(index=False))

# 시각화 (2×2)
fig, axes = plt.subplots(2, 2, figsize=(14, 10))
fig.suptitle('웰니스 파트 - 감성 분석 기반 신뢰점수 (300개 리뷰)', fontsize=14, fontweight='bold')

colors = ['#378ADD', '#639922', '#BA7517', '#E24B4A', '#9B59B6', '#1ABC9C']

# 1. 카테고리별 별점 vs 신뢰점수 비교
cats = cat_summary['product_category'].tolist()
x = range(len(cats))
width = 0.35
axes[0][0].bar([i - width/2 for i in x], cat_summary['평균별점'] / 5, width, label='별점(정규화)', color='#B5D4F4', alpha=0.9)
axes[0][0].bar([i + width/2 for i in x], cat_summary['평균신뢰점수'], width, label='신뢰점수', color='#378ADD', alpha=0.9)
axes[0][0].set_xticks(list(x))
axes[0][0].set_xticklabels(cats, fontsize=8, rotation=20, ha='right')
axes[0][0].set_ylim(0, 1)
axes[0][0].set_title('카테고리별 별점 vs 신뢰점수')
axes[0][0].set_ylabel('점수 (0~1)')
axes[0][0].legend(fontsize=9)

# 2. 카테고리별 긍정 비율
axes[0][1].bar(cats, cat_summary['긍정비율'], color=colors[:len(cats)], alpha=0.85)
axes[0][1].axhline(y=0.7, color='red', linestyle='--', alpha=0.5, label='기준선(0.7)')
axes[0][1].set_xticks(range(len(cats)))
axes[0][1].set_xticklabels(cats, fontsize=8, rotation=20, ha='right')
axes[0][1].set_ylim(0, 1)
axes[0][1].set_title('카테고리별 긍정 비율')
axes[0][1].set_ylabel('긍정 비율')
axes[0][1].legend(fontsize=9)

# 3. 신뢰점수 히스토그램
axes[1][0].hist(df['trust_score'], bins=20, color='#378ADD', alpha=0.8, edgecolor='white')
axes[1][0].axvline(x=df['trust_score'].mean(), color='red', linestyle='--', label=f'평균 {df["trust_score"].mean():.2f}')
axes[1][0].set_title('신뢰점수 분포 (전체)')
axes[1][0].set_xlabel('신뢰점수')
axes[1][0].set_ylabel('리뷰 수')
axes[1][0].legend(fontsize=9)

# 4. 임신 시기별 신뢰점수
period_order = ['초기', '중기', '후기']
period_data = period_summary.set_index('period').reindex(period_order).reset_index()
axes[1][1].bar(period_data['period'], period_data['평균신뢰점수'], color=['#378ADD', '#639922', '#BA7517'], alpha=0.85)
for i, (p, v) in enumerate(zip(period_data['period'], period_data['평균신뢰점수'])):
    axes[1][1].text(i, v + 0.01, f'{v:.3f}', ha='center', fontsize=11, fontweight='bold')
axes[1][1].set_ylim(0, 1)
axes[1][1].set_title('임신 시기별 평균 신뢰점수')
axes[1][1].set_ylabel('신뢰점수')

plt.tight_layout()
plt.savefig('sentiment_result.png', dpi=150, bbox_inches='tight')
plt.show()
print("\n그래프가 sentiment_result.png 로 저장됐어요!")
