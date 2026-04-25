import json
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import warnings
warnings.filterwarnings('ignore')

plt.rcParams['font.family'] = 'AppleGothic'
plt.rcParams['axes.unicode_minus'] = False

# 실제 더미 데이터 로드
with open('data/mobility_route.json', encoding='utf-8') as f:
    routes = json.load(f)

# summary 필드를 flatten
rows = []
for r in routes:
    s = r['summary']
    rows.append({
        'route_id': r['route_id'],
        'hospital_name': r['hospital_name'],
        'hospital_district': r['hospital_district'],
        'route_name': r['route_name'],
        'distance_m': s['distance'],
        'duration_min': s['duration'] // 60,
        'elevator_count': s.get('elevator_count', 0),
        'slope_section_count': s.get('slope_section_count', 0),
        'crosswalk_count': s.get('crosswalk_count', 0),
        'barrier_free_ratio': s.get('barrier_free_ratio', 0),
        'stress_index': r['stress_index'],
        'travel_mode': r['travel_mode'],
    })

df = pd.DataFrame(rows)
df['추천여부'] = df['stress_index'].apply(
    lambda x: '✔ 추천' if x < 0.35 else ('△ 보통' if x < 0.55 else '✘ 비추천')
)

print("=" * 65)
print("모빌리티 파트 - 이동 스트레스 지수 결과 (28개 경로)")
print("=" * 65)
print(df[['hospital_name', 'route_name', 'distance_m', 'duration_min',
          'stress_index', '추천여부']].to_string(index=False))

# 병원별 최적 경로
print("\n병원별 최적 경로 (스트레스 지수 최소):")
best = df.loc[df.groupby('hospital_name')['stress_index'].idxmin()]
print(best[['hospital_name', 'route_name', 'stress_index', '추천여부']].to_string(index=False))

# 시각화
fig, axes = plt.subplots(2, 2, figsize=(15, 11))
fig.suptitle('모빌리티 파트 - 임산부 이동 스트레스 지수 분석 (28개 경로)', fontsize=14, fontweight='bold')

# 1. 경로별 스트레스 지수 막대 그래프 (병원별로 색 구분)
hospitals = df['hospital_name'].unique()
hosp_colors = ['#378ADD', '#639922', '#BA7517', '#E24B4A', '#9B59B6', '#1ABC9C', '#F39C12']
color_map = {h: hosp_colors[i % len(hosp_colors)] for i, h in enumerate(hospitals)}

bar_colors = [color_map[h] for h in df['hospital_name']]
bars = axes[0][0].bar(range(len(df)), df['stress_index'], color=bar_colors, alpha=0.85)
axes[0][0].axhline(y=0.35, color='#639922', linestyle='--', alpha=0.7, label='추천 기준(0.35)')
axes[0][0].axhline(y=0.55, color='#E24B4A', linestyle='--', alpha=0.7, label='위험 기준(0.55)')
axes[0][0].set_xticks(range(len(df)))
axes[0][0].set_xticklabels([f"{r['hospital_name'][:3]}\n{r['route_name']}" for _, r in df.iterrows()],
                            fontsize=7, rotation=45, ha='right')
axes[0][0].set_title('경로별 스트레스 지수')
axes[0][0].set_ylabel('스트레스 지수 (0~1)')
axes[0][0].legend(fontsize=9)

# 2. 병원별 최소 스트레스 지수 비교
axes[0][1].bar(best['hospital_name'], best['stress_index'],
               color=[color_map[h] for h in best['hospital_name']], alpha=0.85)
for i, (_, row) in enumerate(best.iterrows()):
    axes[0][1].text(i, row['stress_index'] + 0.01, f'{row["stress_index"]:.3f}',
                    ha='center', fontsize=9, fontweight='bold')
axes[0][1].set_xticks(range(len(best)))
axes[0][1].set_xticklabels(best['hospital_name'], fontsize=8, rotation=30, ha='right')
axes[0][1].set_ylim(0, 0.9)
axes[0][1].set_title('병원별 최적 경로 스트레스 지수')
axes[0][1].set_ylabel('스트레스 지수')

# 3. 스트레스 지수 분포 히스토그램
axes[1][0].hist(df['stress_index'], bins=10, color='#378ADD', alpha=0.8, edgecolor='white')
axes[1][0].axvline(x=df['stress_index'].mean(), color='red', linestyle='--',
                   label=f'평균 {df["stress_index"].mean():.3f}')
axes[1][0].set_title('스트레스 지수 분포 (전체 경로)')
axes[1][0].set_xlabel('스트레스 지수')
axes[1][0].set_ylabel('경로 수')
axes[1][0].legend(fontsize=9)

# 4. 레이더 차트: 최고 vs 최악 경로 비교
best_route = df.loc[df['stress_index'].idxmin()]
worst_route = df.loc[df['stress_index'].idxmax()]

categories = ['거리', '소요시간', '경사구간', '횡단보도', '엘리베이터\n부재']
N = len(categories)
angles = [n / float(N) * 2 * np.pi for n in range(N)]
angles += angles[:1]

def radar_values(row):
    return [
        row['distance_m'] / df['distance_m'].max(),
        row['duration_min'] / df['duration_min'].max(),
        row['slope_section_count'] / max(df['slope_section_count'].max(), 1),
        row['crosswalk_count'] / max(df['crosswalk_count'].max(), 1),
        1 - row['elevator_count'] / max(df['elevator_count'].max(), 1),
    ]

ax_radar = plt.subplot(2, 2, 4, polar=True)
ax_radar.set_theta_offset(np.pi / 2)
ax_radar.set_theta_direction(-1)

for route, color, label in [
    (best_route, '#639922', f'{best_route["hospital_name"][:4]} {best_route["route_name"]} (최적)'),
    (worst_route, '#E24B4A', f'{worst_route["hospital_name"][:4]} {worst_route["route_name"]} (최악)')
]:
    vals = radar_values(route)
    vals += vals[:1]
    ax_radar.plot(angles, vals, color=color, linewidth=2, label=label)
    ax_radar.fill(angles, vals, color=color, alpha=0.15)

ax_radar.set_xticks(angles[:-1])
ax_radar.set_xticklabels(categories, fontsize=9)
ax_radar.set_ylim(0, 1)
ax_radar.set_title('최적 vs 최악 경로 비교', pad=15)
ax_radar.legend(loc='upper right', bbox_to_anchor=(1.4, 1.15), fontsize=8)

plt.tight_layout()
plt.savefig('mobility_result.png', dpi=150, bbox_inches='tight')
plt.show()
print("\n그래프가 mobility_result.png 로 저장됐어요!")
