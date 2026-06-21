# Tool Muc Tieu Can Nang Audit Spec v1

Date: 2026-06-21

Branch: `tool-muc-tieu-can-nang-audit-spec-v1`

Base commit: `da7176c docs: add nutrition goal tool specification`

Tag created:

- `local-muc-tieu-dinh-duong-spec-v1 -> da7176c`

## Scope

- Audit `/cong-cu/muc-tieu-can-nang/` before implementing `muc-tieu-dinh-duong`.
- Define safety boundaries, source-lock needs, and shared engine direction.
- No code changes.
- No formula changes.
- No nutrition data changes.
- No manual `dist` edits.
- Do not touch the existing `so-sanh` stash.

## Files Reviewed

- `src/pages/cong-cu/muc-tieu-can-nang.astro`
- `src/pages/cong-cu/muc-tieu-dinh-duong.astro`
- `src/pages/cong-cu/tinh-macro.astro`
- `src/pages/cong-cu/tinh-nang-luong.astro`
- `reports/tool-muc-tieu-dinh-duong-spec-v1.md`
- `reports/tools-core-status-v3.md`
- `reports/tool-formula-audit-v1.md`
- `src/lib/protein-requirement.ts`
- `src/lib/water-intake-calculator.ts`
- `src/lib/vietnamese-meal-assessment.ts`
- `src/lib/carb-calculator.ts`
- `src/lib/nutrition.ts`

## Source Files Found In Repo

Related local files found:

- `reports/tool-protein-source-lock-v1.md`: source-lock for protein ranges and clinical exclusions.
- `reports/tool-protein-spec-v1.md`: protein tool spec.
- `reports/tool-water-spec-v1.md`: water/fluid safety source-lock.
- `reports/tool-khau-phan-clinical-spec-v1.md`: meal assessment safety spec, including BMR/TDEE as a source-lock candidate only.
- `reports/tool-muc-tieu-dinh-duong-spec-v1.md`: nutrition goal spec that marks energy/macro ranges as `needs_source_lock`.
- `reports/tool-formula-audit-v1.md`: earlier formula audit; marks `muc-tieu-can-nang` as usable but needing sources.
- `src/pages/kien-thuc-dinh-duong/hieu-dung-ve-calo.astro`: educational article that mentions Mifflin-St Jeor, TDEE factors, `7700 calo/kg`, and `300-500 calo/ngày`; this is not a formal source-lock.
- `src/data/articles.ts`: contains an article listing titled `DRI cho người Việt — Nhu cầu dinh dưỡng khuyến nghị`, but no locked energy/macro source table was found.

No repo file was found that fully source-locks Vietnamese RNI 2016 energy or macro ranges for this tool. Do not cite Vietnamese RNI 2016 as locked until a source document/report is created.

## Current Logic

Route:

- `/cong-cu/muc-tieu-can-nang/`

Current inputs:

- Sex:
  - `male`
  - `female`
- Age:
  - numeric.
  - UI min `10`, max `120`, default `40`.
- Current weight:
  - kg.
  - UI min `20`, max `300`, default `70`.
- Target weight:
  - kg.
  - UI min `15`, max `300`, default `60`.
- Height:
  - cm.
  - UI min `100`, max `250`, default `160`.
- Target duration:
  - `1` to `6` months.
  - default `3`.

Current outputs:

- BMR.
- TDEE.
- Total weight change.
- Weekly weight change.
- Daily kcal target.
- Detail text showing kcal deficit/surplus versus TDEE.
- Macro percent bar.
- Protein/fat/carb grams.
- Disease macro reference table.
- Sidebar principles about `7700 kcal`, weekly loss rate, `500 kcal/ngày`, minimum kcal, and exercise.

Current BMR formula:

```js
male:   10 * weightKg + 6.25 * heightCm - 5 * age + 5
female: 10 * weightKg + 6.25 * heightCm - 5 * age - 161
```

This is Mifflin-St Jeor style, but there is no local source-lock for use in this specific tool.

Current activity factor:

```js
TDEE = Math.round(BMR * 1.375)
```

It is a fixed light-activity multiplier. The user cannot choose activity level.

Current weight-energy conversion:

```js
totalKcal = Math.abs(currentWeight - targetWeight) * 7700
```

So yes, the route uses `7700 kcal/kg`.

Current deficit/surplus logic:

```js
days = months * 30
dailyDeficit = Math.round(totalKcal / days)

if currentWeight > targetWeight:
  dailyKcal = TDEE - dailyDeficit
else:
  dailyKcal = TDEE + dailyDeficit
```

Then daily kcal is clamped:

- male minimum: `1500 kcal/day`.
- female minimum: `1200 kcal/day`.
- male maximum: `3500 kcal/day`.
- female maximum: `3000 kcal/day`.

Current weekly change:

```js
perWeek = Math.abs(diffKg) / months * 0.25
```

This is equivalent to dividing the monthly change by about 4 weeks, but it is not source-labeled.

Current macro hardcoding:

- Default:
  - protein `25%`.
  - fat `25%`.
  - carb `50%`.
- Weight loss:
  - protein `30%`.
  - fat `25%`.
  - carb `45%`.
- Weight gain:
  - protein `20%`.
  - fat `25%`.
  - carb `55%`.

Macro grams:

```js
proteinG = dailyKcal * proteinPercent / 100 / 4
fatG = dailyKcal * fatPercent / 100 / 9
carbG = dailyKcal * carbPercent / 100 / 4
```

Current disease macro table:

| Row | Protein | Fat | Carb | Note |
|---|---:|---:|---:|---|
| Không có | 15-20% | 20-30% | 50-60% | Cân đối |
| Đái tháo đường | 20-25% | 25-30% | 40-50% | GI thấp, tăng xơ |
| Tăng huyết áp | 15-20% | 20-25% | 55-65% | Hạn chế muối |
| Bệnh thận mạn | 10-15% | 25-30% | 55-65% | Giảm đạm, K, P |
| Gout | 15-20% | 25-30% | 50-60% | Tránh purin |
| Mỡ máu | 15-20% | 20-25% | 55-60% | Giảm béo bão hòa |
| Giảm cân | 25-30% | 20-25% | 40-50% | Đạm cao giữ cơ |

Current stable engine reuse:

- Does not use `protein-requirement.ts`.
- Does not use `carb-calculator.ts`.
- Does not use `vietnamese-meal-assessment.ts`.
- Does not use `water-intake-calculator.ts`.
- All calculation is inline in the Astro page script.

## Current Risk

Main risks:

- The tool can make a target date and target weight feel like a firm kcal prescription.
- It calculates deficit/surplus directly from desired weight change and time, rather than screening whether the target is appropriate.
- It displays `Giảm/tăng mỗi tuần` and sidebar text `Giảm 0.5-1kg/tuần là an toàn`, which is too broad without age, BMI, disease, pregnancy, medication, eating disorder, or unintentional weight-loss screening.
- It presents `Calo mỗi ngày để đạt mục tiêu` as a single number, not an estimated range with uncertainty.
- The fixed activity factor `1.375` can under/overestimate TDEE and is invisible to the user.
- The `7700 kcal/kg` conversion is a simplification and can be misleading when shown as a precise plan.
- Macro percentages are hardcoded and not source-labeled.
- Disease macro rows imply broad disease-specific targets without safety gates.
- CKD is especially high risk because the table says `Giảm đạm, K, P` without eGFR/stage, dialysis status, nutrition status, or clinician review.
- Diabetes is high risk if the user is on insulin/sulfonylurea because macro/carb targets can be confused with medication planning.
- Heart failure/fluid restriction, cirrhosis/ascites, cancer/malnutrition, pregnancy/lactation, children/adolescents, eating disorders, and acute illness are not screened.
- Low BMI or rapid unintentional weight loss are not screened, so the tool could reinforce unsafe weight goals.

Wording that can be read as prescription:

- `app tính lượng calo cần giảm/tăng mỗi ngày`.
- `Kèm bảng tỷ lệ đạm-béo-carb khuyến nghị cho từng bệnh nền`.
- `Calo mỗi ngày để đạt mục tiêu`.
- `Giảm/tăng mỗi tuần`.
- `Giảm 0.5-1kg/tuần là an toàn`.
- `Giảm 500 kcal/ngày ≈ 2kg/tháng`.
- `Không nên < 1.200 kcal/ngày (nữ) hoặc < 1.500 (nam)`.
- Disease table notes:
  - `Hạn chế muối`.
  - `Giảm đạm, K, P`.
  - `Tránh purin`.
  - `Đạm cao giữ cơ`.

## Overlap With Related Tools

`muc-tieu-dinh-duong`:

- Intended future foundation for broad nutrition goals.
- Would overlap heavily with `muc-tieu-can-nang` if both calculate kcal and macros separately.

`tinh-macro`:

- Currently redirects to `muc-tieu-can-nang`.
- If revived, it should reuse a shared engine rather than copying the macro logic.

`tinh-nang-luong`:

- Currently redirects to `muc-tieu-can-nang`.
- If revived, it should reuse a shared energy calculation path rather than creating another BMR/TDEE implementation.

`ke-hoach-bua-an` and `nhat-ky`:

- Repo search shows additional BMR/TDEE and macro logic exists in other pages.
- This audit focuses on `muc-tieu-can-nang`, but a later consolidation should prevent each route from maintaining its own target math.

## Product Direction

Recommended decision:

- `muc-tieu-can-nang` should not be the place to prescribe disease-specific macro targets.
- It should not be the source of truth for macro planning once `muc-tieu-dinh-duong` exists.
- If kept, it should become an educational weight-goal planning view with safety gating and conservative wording.
- `muc-tieu-dinh-duong` should become the broader goal-setting product surface.
- `tinh-macro` and `tinh-nang-luong` should become thin views or hubs over a shared engine, not separate calculators.

Product v1 should prioritize:

- Screening unsafe contexts.
- Explaining that energy math is approximate.
- Avoiding a single rigid kcal target.
- Avoiding disease macro tables.
- Routing high-risk users to individualized care.

## Proposed Safety Modes

### `auto`

Allowed only for:

- Adult.
- Relatively healthy.
- Goal is maintain weight or healthy eating.
- No red flags.
- BMI not underweight.
- No rapid unintentional weight loss.

May show:

- Estimated maintenance energy range after source-lock.
- General education about weight maintenance.
- Protein range only if safely reused from `protein-requirement.ts`.

### `caution`

Use for:

- Mild weight loss.
- Mild weight gain.
- Older adult.
- High activity.
- Overweight/obesity without complex disease.

May show:

- Estimated range, not a single target.
- Strong uncertainty notes.
- No guaranteed kg/week.
- No disease macro rows.
- No "safe for everyone" language.

### `clinical_no_auto`

Use for:

- Under 18 years old.
- Pregnancy or breastfeeding.
- BMI `< 18.5` or suspected underweight.
- Rapid unintentional weight loss.
- Eating disorder or history of eating disorder.
- CKD.
- Dialysis.
- Heart failure or fluid restriction.
- Cirrhosis or ascites.
- Diabetes using insulin or sulfonylurea.
- Cancer or malnutrition.
- Acute illness.
- Multiple complex diseases or medications.

Should show:

- No personal kcal/macro target.
- No target weight plan.
- No disease macro table.
- Clear message that goals need individual assessment.

## Source-Lock Table

| Component | Current formula | Source to lock | Use in v1? | Mode | Safe wording |
|---|---|---|---|---|---|
| BMR formula | Mifflin-St Jeor style: `10w + 6.25h - 5age +/- constant` | Mifflin-St Jeor validation or approved adult energy source; consider Vietnamese RNI 2016/EER if source document is obtained | Maybe, only after source-lock | `auto`/`caution` | "Ước tính năng lượng nghỉ, có sai số." |
| Activity factor | Fixed `1.375` | Source for activity factors; avoid hidden default | Not as fixed hidden factor | `auto`/`caution` | "Mức hoạt động là phân nhóm thô; nhu cầu thực tế thay đổi theo ngày." |
| TDEE | `round(BMR * 1.375)` | Same as BMR/activity; source-lock combined calculation | Maybe as range | `auto`/`caution` | "Ước tính năng lượng duy trì, không phải mục tiêu cứng." |
| `7700 kcal/kg` | `abs(diffKg) * 7700` | Source for body-weight energy equivalent and limitations | Avoid as direct promise; maybe education only | `caution` | "Quy đổi đơn giản, cơ thể thích nghi nên kết quả thực tế khác." |
| Deficit giảm cân | `dailyKcal = TDEE - totalKcal/days` | Weight management guideline; safe deficit ranges; clinical exclusions | Maybe only mild/caution after review | `caution` | "Không hứa tốc độ giảm cân; tránh giảm ăn quá mức." |
| Surplus tăng cân | `dailyKcal = TDEE + totalKcal/days` | Sports/weight gain guidance; malnutrition exclusions | Maybe only mild/caution after review | `caution` | "Tăng cân nhẹ cần theo dõi tiêu hóa, tập luyện và sức khỏe." |
| Macro protein/fat/carb | hardcoded `30/25/45`, `20/25/55`, `25/25/50` | Vietnamese RNI 2016, DRI/AMDR, or other approved macro range source | Not until source-lock | `auto`/`caution` | "Khoảng phân bố tham khảo, không tối ưu cho mọi người." |
| Disease macro table | hardcoded rows for diabetes, CKD, hypertension, gout, dyslipidemia | Disease-specific guidelines plus clinician review | No for v1 self-service | `clinical_no_auto` or separate clinician-reviewed tool | "Bệnh lý cần cá thể hóa; không dùng bảng chung." |
| BMI cutoff | none in current logic | Asian BMI cutoffs and underweight risk source | Yes for screening, after source-lock | all modes | "BMI chỉ là chỉ dấu sàng lọc, không chẩn đoán." |
| Clinical exclusions | none in current logic | Existing protein/water/meal specs, clinician review | Yes | `clinical_no_auto` | "Nhóm này không dùng công thức tự phục vụ." |
| Protein target | macro percent converted to grams | Reuse `protein-requirement.ts` instead of percent-only logic | Yes where safe | `auto`/`caution`; block if engine blocks | "Khoảng protein tham khảo từ engine đạm; không phải chỉ định điều trị." |
| Energy/macro via Vietnamese RNI 2016 | not used | Need source document/report; no locked file found in repo | Wait for source-lock | `auto`/`caution` | "Theo nguồn đã khóa; nếu chưa khóa thì không hiển thị như mục tiêu." |

## Preliminary v1 Decisions

Recommended defaults before implementation:

- Do not display `giảm X kg/tuần` as a commitment.
- Do not use deficit/surplus as a hard prescription.
- If kcal is shown, show an estimated range with uncertainty and source label.
- Do not show disease macro rows.
- Do not set goals for BMI `< 18.5`.
- Do not set goals for rapid unintentional weight loss.
- Do not set goals for pregnancy/lactation, children/adolescents, CKD, dialysis, heart failure/fluid restriction, cirrhosis/ascites, insulin/SU diabetes, cancer/malnutrition, eating disorder, or acute illness.
- Do not include advice to adjust insulin, diabetes medications, diuretics, kidney medications, gout medications, corticosteroids, or weight-loss medications.
- Do not present minimum kcal floors as universally safe.
- Do not call any macro split "chuẩn" or "tối ưu".

## Proposed Shared Engine

If implementing after source-lock, create:

- `src/lib/nutrition-goal-planner.ts`

Use it from:

- `muc-tieu-dinh-duong`.
- `muc-tieu-can-nang`.
- `tinh-macro`.
- `tinh-nang-luong`.

Engine requirements:

- Typed input/output.
- Mode:
  - `auto`.
  - `caution`.
  - `clinical_no_auto`.
- BMI calculation and underweight screening.
- Clinical red-flag screening before any target math.
- Source labels for BMR/TDEE, kcal adjustment, macro range, and protein range.
- Source status for every numeric target:
  - `source_locked`.
  - `needs_source_lock`.
  - `clinician_review_required`.
- No disease macro table in self-service output.
- No hardcoded clinical targets.
- Reuse `protein-requirement.ts` for protein where safe.
- Do not use `carb-calculator.ts` to set macro targets; keep it for food/intake totals.
- Do not use `vietnamese-meal-assessment.ts` to set goals; keep it for intake assessment.
- Do not use `water-intake-calculator.ts` unless fluid goals are explicitly in scope, and preserve its `clinical_no_auto`.

## Required Test Cases For Implementation

1. Healthy adult, maintain weight -> `auto`.
2. Healthy adult, healthy eating -> `auto`.
3. Mild weight loss -> `caution`, no promised speed.
4. Mild weight gain -> `caution`.
5. Under 18 years old -> `clinical_no_auto`.
6. BMI `< 18.5` -> `clinical_no_auto`.
7. Rapid unintentional weight loss -> `clinical_no_auto`.
8. Eating disorder or eating disorder history -> `clinical_no_auto`.
9. Pregnancy/breastfeeding -> `clinical_no_auto`.
10. CKD -> `clinical_no_auto`.
11. Dialysis -> `clinical_no_auto`.
12. Heart failure/fluid restriction -> `clinical_no_auto`.
13. Cirrhosis/ascites -> `clinical_no_auto`.
14. Diabetes using insulin/sulfonylurea -> `clinical_no_auto`.
15. Cancer/malnutrition -> `clinical_no_auto`.
16. Acute illness -> `clinical_no_auto`.
17. Multiple red flags -> `clinical_no_auto`, no silent target overwrite.
18. Invalid age/weight/height -> friendly error, no NaN.
19. Extreme target weight or duration -> warning/block depending on source-lock.
20. Protein range uses `protein-requirement.ts` and respects its mode.
21. Output does not contain forbidden wording.
22. No disease macro table in self-service output.

Forbidden wording test should block:

- `mục tiêu chuẩn`.
- `bắt buộc ăn`.
- `giảm X kg/tuần` as a promise.
- `ăn càng ít càng tốt`.
- `macro tối ưu cho mọi người`.
- `an toàn cho bệnh X`.
- `tự tăng/giảm insulin`.
- `tự ngưng thuốc`.

## Doctor/Dietitian Review Needed Before Engine Work

- Choose the energy source:
  - Mifflin-St Jeor with sourced activity factors.
  - Vietnamese RNI 2016/EER if source document is obtained.
  - or defer numeric energy targets in v1.
- Decide whether `muc-tieu-can-nang` should show any kcal number, or only a range and education.
- Decide whether mild weight loss/gain should have numeric deficit/surplus.
- Define maximum allowed "mild" weight change, if any.
- Approve BMI `<18.5` as `clinical_no_auto`, or choose an Asian-specific underweight threshold/source.
- Decide whether older adults are always `caution`, and frail older adults `clinical_no_auto`.
- Decide whether macro ranges should use Vietnamese RNI 2016, DRI/AMDR, or be deferred.
- Decide whether `muc-tieu-can-nang` should be demoted to a hub/view over `muc-tieu-dinh-duong`.
- Decide how to handle existing hardcoded disease macro table during implementation: remove, replace with warning-only, or move to clinician-reviewed docs.

## Implementation Recommendation After Approval

Recommended sequence:

1. Source-lock energy, activity, BMI, and macro ranges.
2. Build `src/lib/nutrition-goal-planner.ts`.
3. Add tests for mode gating before changing UI.
4. Refactor `muc-tieu-can-nang` to call the shared engine or convert it to a safer view.
5. Implement `muc-tieu-dinh-duong` on the same engine.
6. Decide whether `tinh-macro` and `tinh-nang-luong` remain redirects or become thin engine-backed pages.

## QA Results

Final QA is run after this report:

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:tools`
- `git diff --check`
- `git status --short`

## Conclusion

`muc-tieu-can-nang` currently performs real inline target math: BMR, TDEE, target-weight deficit/surplus, kcal/day, macro grams, and a disease macro table. The largest risk is that the page presents simplified weight and macro math as if it were a personal plan, without red-flag screening or source labels.

Before implementing `muc-tieu-dinh-duong`, the project should create one shared `nutrition-goal-planner.ts` engine and route all weight, energy, and macro target surfaces through it. That prevents four routes from drifting into four different versions of "nutrition goals."
