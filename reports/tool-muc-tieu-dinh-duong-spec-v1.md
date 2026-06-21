# Tool Muc Tieu Dinh Duong Spec v1

Date: 2026-06-21

Branch: `tool-muc-tieu-dinh-duong-spec-v1`

Base commit: `b44b3fe chore: document preflight cleanup before nutrition goal spec`

Tag created:

- `local-preflight-clean-before-muc-tieu-dinh-duong -> b44b3fe`

## Scope

- Audit `/cong-cu/muc-tieu-dinh-duong/` before implementation.
- Define a safer v1 product scope, source-lock needs, mode model, engine direction, and test plan.
- No code changes.
- No formula changes.
- No nutrition data changes.
- No manual `dist` edits.
- Do not touch the existing `so-sanh` stash.

## Files Reviewed

- `src/pages/cong-cu/muc-tieu-dinh-duong.astro`
- `src/pages/cong-cu/tinh-macro.astro`
- `src/pages/cong-cu/tinh-nang-luong.astro`
- `src/pages/cong-cu/muc-tieu-can-nang.astro`
- `src/lib/protein-requirement.ts`
- `src/lib/carb-calculator.ts`
- `src/lib/vietnamese-meal-assessment.ts`
- `src/lib/water-intake-calculator.ts`
- `src/lib/nutrition.ts`
- `src/data/nutrition.ts`
- `reports/tools-core-status-v3.md`
- `reports/tool-protein-source-lock-v1.md`
- `reports/tool-protein-spec-v1.md`
- `reports/tool-khau-phan-clinical-spec-v1.md`
- `reports/tool-khau-phan-clinical-qa-polish-v1.md`

## Current State

`muc-tieu-dinh-duong` is currently a redirect stub, not a real nutrition-goal planner.

Current route behavior:

- Imports `BaseLayout`.
- Page title: `Đang chuyển hướng...`.
- Meta refresh:
  - `/cong-cu/muc-tieu-dinh-duong/` -> `/cong-cu/ke-hoach-bua-an`
- Fallback link text:
  - `Tool này đã được cập nhật. Chuyển tiếp →`

Current inputs:

- None.

Current outputs:

- No nutrition goal output.
- No energy target.
- No macro target.
- No protein range.
- No disease warning.
- Only redirect/fallback text.

Current logic:

- No BMR/TDEE calculation.
- No kcal deficit/surplus.
- No macro calculation.
- No protein, fat, carb, fiber, sodium, or sugar target.
- No disease profile.
- No data pipeline use.
- No engine use.

Current hardcoding:

- Redirect target `/cong-cu/ke-hoach-bua-an`.
- Fallback text only.

## Related Routes And Overlap

### `tinh-macro`

Current state:

- Redirect stub to `/cong-cu/muc-tieu-can-nang`.
- No inputs, outputs, or calculation in the route itself.

Overlap risk:

- The name implies macro target setting.
- It should not grow its own separate macro formula if `muc-tieu-dinh-duong` becomes the target-setting engine.

### `tinh-nang-luong`

Current state:

- Redirect stub to `/cong-cu/muc-tieu-can-nang`.
- No inputs, outputs, or calculation in the route itself.

Overlap risk:

- The name implies energy requirement calculation.
- It may later become a narrow energy estimator or redirect into the energy section of `muc-tieu-dinh-duong`.

### `muc-tieu-can-nang`

Current state:

- Real calculator with inline page logic.
- Inputs:
  - sex.
  - age.
  - current weight.
  - target weight.
  - height.
  - target duration in months.
- Outputs:
  - BMR.
  - TDEE.
  - total weight change.
  - weekly weight change.
  - daily kcal target.
  - macro grams.
  - hardcoded disease macro reference table.

Current formulas/hardcoding:

- BMR uses Mifflin-St Jeor style equations:
  - male: `10 * weight + 6.25 * height - 5 * age + 5`.
  - female: `10 * weight + 6.25 * height - 5 * age - 161`.
- TDEE uses a fixed light-activity multiplier: `1.375`.
- Weight energy conversion uses `7700 kcal/kg`.
- Deficit/surplus is calculated from target weight and duration.
- Daily kcal is clamped:
  - female minimum `1200 kcal/day`.
  - male minimum `1500 kcal/day`.
  - female maximum `3000 kcal/day`.
  - male maximum `3500 kcal/day`.
- Macro defaults:
  - weight loss: `30% protein / 25% fat / 45% carb`.
  - weight gain: `20% protein / 25% fat / 55% carb`.
  - other default: `25% protein / 25% fat / 50% carb`.
- Disease macro table is hardcoded:
  - no disease: `15-20%` protein, `20-30%` fat, `50-60%` carb.
  - diabetes: `20-25%` protein, `25-30%` fat, `40-50%` carb.
  - hypertension: `15-20%` protein, `20-25%` fat, `55-65%` carb.
  - CKD: `10-15%` protein, `25-30%` fat, `55-65%` carb.
  - gout: `15-20%` protein, `25-30%` fat, `50-60%` carb.
  - dyslipidemia: `15-20%` protein, `20-25%` fat, `55-60%` carb.
  - weight loss: `25-30%` protein, `20-25%` fat, `40-50%` carb.

High-risk wording found in `muc-tieu-can-nang`:

- `app tính lượng calo cần giảm/tăng mỗi ngày`.
- `Kèm bảng tỷ lệ đạm-béo-carb khuyến nghị cho từng bệnh nền`.
- `Calo mỗi ngày để đạt mục tiêu`.
- `Giảm 0.5-1kg/tuần là an toàn`.
- disease rows that imply macro targets for diabetes, CKD, gout, hypertension, and dyslipidemia.

This route is not in scope to change in this round, but its behavior should be treated as a warning sign for the `muc-tieu-dinh-duong` design.

## Stable Engine Reuse Audit

Current `muc-tieu-dinh-duong` uses none of the stable engines.

Available stable engines:

- `src/lib/protein-requirement.ts`
  - Has `auto` / `caution` / `clinical_no_auto`.
  - Can provide protein ranges only when the profile is safe.
  - Already blocks personal targets for CKD, dialysis, pregnancy/lactation, cancer/malnutrition, and other high-risk profiles.
- `src/lib/carb-calculator.ts`
  - Calculates carb totals from foods.
  - Has safety wording against insulin/sulfonylurea self-adjustment.
  - Better suited for intake analysis than for setting a personal macro target.
- `src/lib/vietnamese-meal-assessment.ts`
  - Assesses intake totals.
  - Uses `auto` / `caution` / `clinical_no_auto`.
  - Reuses carb and protein engines.
  - Keeps `isPersonalTarget: false`.
  - Should remain an intake assessment tool, not a target-prescription engine.
- `src/lib/water-intake-calculator.ts`
  - Has `auto` / `caution` / `clinical_no_auto`.
  - Blocks personal targets for restricted-fluid and high-risk groups.
  - Can be linked/reused only if fluid scope is included later.

No existing stable engine calculates broad nutrition goals, energy targets, or macro ranges safely.

## Forbidden Wording Audit

In `muc-tieu-dinh-duong` itself:

- No forbidden wording, because it is only a redirect stub.

In related target-setting surface `muc-tieu-can-nang`:

- It does not literally contain all forbidden phrases, but several concepts are risky:
  - "Calo mỗi ngày để đạt mục tiêu" can read like a firm prescription.
  - "Giảm 0.5-1kg/tuần là an toàn" is too broad without screening.
  - Disease macro rows can imply "an toàn cho bệnh X" even if not worded exactly that way.
  - CKD, diabetes, gout, hypertension, and dyslipidemia macro ranges are shown without a source-locked safety gate.

Forbidden wording for the future v1:

- `mục tiêu chuẩn`.
- `bắt buộc ăn`.
- `giảm X kg/tuần` as a promise or blanket safe rate.
- `ăn càng ít càng tốt`.
- `macro tối ưu cho mọi người`.
- `an toàn cho bệnh X`.
- medication or insulin adjustment wording.

Preferred wording:

- `ước tính`.
- `tham khảo`.
- `khoảng`.
- `cần cá thể hóa`.
- `không thay thế tư vấn bác sĩ/dinh dưỡng viên`.
- `không tự chỉnh thuốc/insulin`.

## v1 Product Decision

Recommended direction: **Thiết lập mục tiêu dinh dưỡng tham khảo**.

The tool should be:

- A nutrition-goal planning tool for education.
- A conservative baseline for relatively healthy adults.
- A source-labeled place to estimate broad energy and macro ranges only when source-lock is adequate.
- A coordinator for related stable tools:
  - protein range from `protein-requirement.ts` where safe.
  - intake comparison through **Đánh giá khẩu phần Việt**.
  - carb counting through `tinh-carb`.
  - water estimate through `nuoc-uong`.
- A shared future engine for `tinh-macro` if macro target display is approved.

The tool should not be:

- A therapeutic diet prescription.
- A rapid weight-loss tool.
- A medication, insulin, or sulfonylurea adjustment tool.
- A CKD/dialysis/cancer/malnutrition protein target setter.
- A pregnancy, lactation, pediatric, or adolescent macro planner.
- A substitute for a doctor or dietitian.
- A disease-specific meal plan generator.

## v1 Scope

In scope:

- Adults who are relatively healthy.
- Goals:
  - maintain weight.
  - healthy eating.
  - mild weight loss, if allowed, in `caution`.
  - mild weight gain, if allowed, in `caution`.
- Outputs:
  - estimated energy range only after formula/source is locked.
  - protein range from the stable protein engine when the profile is safe.
  - macro range only after source-lock.
  - clear limitations and source labels.
  - links to related stable tools for detailed intake assessment.

Out of scope:

- Disease meal plans.
- Therapeutic targets for CKD, dialysis, diabetes medication use, heart failure, cirrhosis, pregnancy, lactation, children, cancer, malnutrition, eating disorders, acute illness, or rapid unintentional weight loss.
- Potassium/phosphorus/fluid restriction.
- Insulin-carb ratio.
- Drug, diuretic, kidney medication, gout medication, or weight-loss medication adjustment.
- Guaranteed weight-loss speed.

## Proposed Inputs

Core inputs:

- Age.
- Sex.
- Weight.
- Height.
- Activity level.
- General goal:
  - `maintain`.
  - `healthy_eating`.
  - `mild_weight_loss`.
  - `mild_weight_gain`.

Red flags / needs individualization:

- Under 18 years old.
- Pregnancy or breastfeeding.
- CKD.
- Dialysis.
- Heart failure or fluid restriction.
- Cirrhosis or ascites.
- Diabetes using insulin or sulfonylurea.
- Cancer or malnutrition.
- Eating disorder.
- Rapid unintentional weight loss.
- Very low BMI.
- Acute illness, vomiting, diarrhea, or fever.
- Weight-loss medication.
- Diuretics.
- Corticosteroids.
- Medication affecting weight/appetite.

Optional caution flags:

- Age 65 or older.
- High activity.
- Vegetarian/vegan.
- Overweight/obesity without complex disease.
- Recent intentional mild weight change goal.

## Proposed Output Modes

### `auto`

Use for:

- Adult.
- Relatively healthy.
- Maintain weight or healthy eating goal.
- No red flags.
- Valid weight, height, and age inputs.

May show:

- Estimated energy range if source-locked.
- Protein range from `protein-requirement.ts` safe profile.
- Macro distribution range only if source-locked.
- Source labels.
- Wording: `ước tính`, `tham khảo`, `không phải đơn điều trị`.

### `caution`

Use for:

- Mild weight loss.
- Mild weight gain.
- Older adult.
- High activity.
- Vegetarian/vegan.
- BMI overweight/obesity without complex disease.

May show:

- Estimated ranges with stronger uncertainty language.
- Protein range only if stable engine returns non-clinical mode.
- No promise about kg/week.
- No "safe for everyone" language.
- Suggestions to review with a professional if symptoms, medications, or disease history exist.

### `clinical_no_auto`

Use for:

- Under 18 years old.
- Pregnancy or breastfeeding.
- CKD.
- Dialysis.
- Heart failure or fluid restriction.
- Cirrhosis or ascites.
- Diabetes using insulin or sulfonylurea.
- Cancer or malnutrition.
- Eating disorder.
- Rapid unintentional weight loss.
- Very low BMI.
- Acute illness.
- Multiple diseases or medications that make targets non-simple.

Should show:

- A clear "needs individualized care" message.
- Links to appropriate education or stable intake tools if useful.
- No prominent personal kcal, macro, sodium, protein, or fluid target.
- No disease-specific target table.

## Source-Lock Table

| Component | Source to check | Include in v1? | Mode | Wording |
|---|---|---|---|---|
| BMR/TDEE or energy requirement | `needs_source_lock`; candidate: Mifflin-St Jeor validation, DRI/EER, Vietnamese RNI 2016 if source exists in repo/docs | maybe, only after locked | `auto`/`caution` | "Ước tính năng lượng tham khảo, có sai số." |
| Activity factor | `needs_source_lock`; avoid silent fixed multiplier | maybe | `auto`/`caution` | "Mức hoạt động chỉ là phân nhóm thô." |
| Protein range | Existing `tool-protein-source-lock-v1`, `tool-protein-spec-v1`, `src/lib/protein-requirement.ts` | yes, via stable engine only | `auto`/`caution`; `clinical_no_auto` if engine blocks | "Khoảng protein tham khảo; không phải chỉ định điều trị." |
| Fat range | `needs_source_lock`; candidate DRI/AMDR or Vietnamese RNI 2016 | maybe | `auto`/`caution` | "Khoảng phân bố chất béo tham khảo cho người trưởng thành." |
| Carb range | `needs_source_lock`; candidate DRI/AMDR or Vietnamese RNI 2016 | maybe | `auto`/`caution` | "Khoảng carb tham khảo; không tự chỉnh thuốc đường huyết." |
| Fiber | `needs_source_lock`; candidate Vietnamese RNI 2016, DRI, WHO/FAO if approved | maybe | `auto`/`caution` | "Mục tiêu xơ tham khảo; tùy dung nạp và bệnh nền." |
| Added sugar | `needs_source_lock`; candidate WHO free sugar guidance; define added vs total sugar carefully | maybe | `auto`/`caution` | "Giới hạn đường thêm/đường tự do là khuyến nghị dân số, không phải đơn cá nhân." |
| Sodium | `needs_source_lock`; candidate WHO/AHA/local guidance; avoid disease sodium target | maybe, education only | `auto`/`caution`; `clinical_no_auto` for HF/CKD/low-salt prescription | "Natri cá nhân cần bác sĩ nếu có bệnh hoặc y lệnh ăn nhạt." |
| Mild weight loss deficit | `needs_source_lock`; do not use as promise | maybe, caution only | `caution` | "Không hứa tốc độ giảm cân; tránh giảm ăn quá mức." |
| Mild weight gain surplus | `needs_source_lock`; avoid large surplus | maybe, caution only | `caution` | "Tăng cân nhẹ cần theo dõi tiêu hóa, vận động và chất lượng bữa ăn." |
| Clinical exclusions | Existing protein/water/meal-assessment specs plus clinician review | yes | `clinical_no_auto` | "Nhóm này cần cá thể hóa; không tự đặt mục tiêu kcal/macro." |

Priority source families:

- Vietnamese **Nhu cầu dinh dưỡng khuyến nghị cho người Việt Nam 2016**, if present or obtainable in project source docs.
- Existing project source-lock reports.
- DRI/AMDR references only after explicit source-lock.
- Current clinical guideline families for exclusion logic, not for self-service disease targets.

Do not invent sources. If a formula is not locked, mark it `needs_source_lock` and do not present it as a firm v1 target.

## Relationship With Other Tools

- `muc-tieu-dinh-duong` should be the foundation for broad reference goals.
- `tinh-macro` should not create a separate macro engine. It can later reuse `nutrition-goal-planner.ts` or redirect to the macro section of this tool.
- `tinh-nang-luong` should not duplicate BMR/TDEE. It can later become a narrow energy estimator or reuse the same engine.
- `muc-tieu-can-nang` should be audited before promotion because it currently combines BMR/TDEE, weight-change deficit/surplus, and disease macro rows with limited safety gating.
- **Đánh giá khẩu phần Việt** should remain an intake assessment tool. It can compare actual intake contextually later, but should not become a disease target prescription tool.
- `tinh-nhu-cau-dam` remains the source for protein ranges where safe.
- `nuoc-uong` remains the source for fluid targets where safe.

## Proposed Future Engine

If implemented later, create:

- `src/lib/nutrition-goal-planner.ts`

Engine requirements:

- Typed input/output.
- Mode:
  - `auto`.
  - `caution`.
  - `clinical_no_auto`.
- Source labels for every numeric output.
- Explicit source status:
  - `source_locked`.
  - `needs_source_lock`.
  - `clinician_review_required`.
- No disease prescription.
- No hardcoded clinical targets.
- No silent target overwrite when multiple flags are present.
- Reusable by `tinh-macro` and possibly `tinh-nang-luong`.
- Compatible with stable protein/water safety gates.

Suggested output shape:

```ts
type NutritionGoalMode = "auto" | "caution" | "clinical_no_auto";

interface NutritionGoalResult {
  ok: boolean;
  mode: NutritionGoalMode;
  isPersonalTarget: boolean;
  energy?: {
    minKcal?: number;
    maxKcal?: number;
    sourceLabel: string;
    sourceStatus: "source_locked" | "needs_source_lock";
  };
  protein?: {
    minGPerDay?: number;
    maxGPerDay?: number;
    sourceLabel: string;
    sourceStatus: "source_locked" | "clinician_review_required";
  };
  macroRanges?: {
    carbPercent?: [number, number];
    fatPercent?: [number, number];
    proteinPercent?: [number, number];
    sourceLabel: string;
    sourceStatus: "source_locked" | "needs_source_lock";
  };
  warnings: string[];
  safetyMessages: string[];
  sourceNotes: string[];
  error?: string;
}
```

## Required Test Cases For Implementation

1. Healthy adult, maintain weight -> `auto`.
2. Healthy adult, healthy eating -> `auto`.
3. Mild weight loss -> `caution`; no promise about weight-loss speed.
4. Mild weight gain -> `caution`.
5. Under 18 years old -> `clinical_no_auto`.
6. Pregnancy/breastfeeding -> `clinical_no_auto`.
7. CKD -> `clinical_no_auto`.
8. Dialysis -> `clinical_no_auto`.
9. Heart failure/fluid restriction -> `clinical_no_auto`.
10. Cirrhosis/ascites -> `clinical_no_auto`.
11. Diabetes using insulin/sulfonylurea -> `clinical_no_auto`.
12. Cancer/malnutrition -> `clinical_no_auto`.
13. Rapid unintentional weight loss -> `clinical_no_auto`.
14. Eating disorder -> `clinical_no_auto`.
15. Very low BMI -> `clinical_no_auto`.
16. Acute illness, vomiting, diarrhea, or fever -> `clinical_no_auto`.
17. High activity -> `caution`.
18. Vegetarian/vegan -> `caution`.
19. Older adult -> `caution`.
20. Invalid weight/height/age -> friendly error, no NaN, no target.
21. Multiple red flags -> `clinical_no_auto`, no silent overwrite.
22. Protein output reuses `protein-requirement.ts` and respects its `clinical_no_auto`.
23. Output does not contain forbidden wording.
24. No kcal/macro target is shown when source status is `needs_source_lock`, unless UI clearly labels it as not active.

## Doctor/Dietitian Review Needed Before Implementation

- Which energy source to use for healthy adults:
  - Vietnamese RNI 2016/EER if available.
  - Mifflin-St Jeor plus activity factor.
  - or no energy target in v1 until source-lock is stronger.
- Whether v1 should display a kcal range at all, or only classify mode and route users to stable intake tools.
- Whether mild weight loss/gain should show a numeric adjustment or remain non-numeric education in v1.
- Which macro range source to lock:
  - Vietnamese RNI 2016.
  - DRI/AMDR.
  - other approved source.
- Whether to include fiber, added sugar, and sodium in v1 or defer.
- Whether older adults are always `caution`, and whether frailty/sarcopenia should immediately become `clinical_no_auto`.
- What BMI threshold should count as "too low" for `clinical_no_auto`.
- Whether `muc-tieu-can-nang` should be refactored or demoted before `muc-tieu-dinh-duong` implementation to avoid contradictory targets.
- Whether `tinh-macro` and `tinh-nang-luong` should remain redirects, become hubs, or become thin views over the new engine.

## Implementation Recommendation After Approval

Recommended order:

1. Source-lock energy and macro ranges, or explicitly defer them.
2. Build `src/lib/nutrition-goal-planner.ts`.
3. Implement conservative `auto` / `caution` / `clinical_no_auto` mode detection first.
4. Reuse `protein-requirement.ts` for protein ranges.
5. Add tests before UI polish.
6. Replace `/cong-cu/muc-tieu-dinh-duong/` redirect with a safe planning page only after engine tests pass.
7. Audit `muc-tieu-can-nang` next, because it currently presents stronger weight and disease macro targets than this spec would allow.

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

`muc-tieu-dinh-duong` is currently only a redirect stub and has no real logic. The product risk comes from its broad name and from nearby routes, especially `muc-tieu-can-nang`, which already contains BMR/TDEE, kcal deficit/surplus, macro percentages, and disease macro rows.

The safest v1 path is to make `muc-tieu-dinh-duong` a conservative reference-goal planner for relatively healthy adults only, with `auto`, `caution`, and `clinical_no_auto` modes. Numeric targets should appear only where sources are locked and the user is outside high-risk groups.
