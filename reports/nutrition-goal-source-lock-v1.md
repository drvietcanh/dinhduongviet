# Nutrition Goal Source Lock v1

Date: 2026-06-21

Branch: `nutrition-goal-source-lock-v1`

Base commit: `9e3b5e9 docs: add weight goal tool audit specification`

Tag created:

- `local-muc-tieu-can-nang-audit-spec-v1 -> 9e3b5e9`

## Scope

- Create a source-lock decision record for the future shared `nutrition-goal-planner` engine.
- Future consumers:
  - `/cong-cu/muc-tieu-can-nang/`
  - `/cong-cu/muc-tieu-dinh-duong/`
  - `/cong-cu/tinh-macro/`
  - `/cong-cu/tinh-nang-luong/`
- This round is report/source-lock only.
- No code changes.
- No UI changes.
- No formula changes.
- No nutrition data changes.
- No manual `dist` edits.
- Do not touch the existing `so-sanh` stash.

## Files Reviewed

- `reports/tool-muc-tieu-dinh-duong-spec-v1.md`
- `reports/tool-muc-tieu-can-nang-audit-spec-v1.md`
- `reports/tool-protein-source-lock-v1.md`
- `reports/tool-protein-spec-v1.md`
- `reports/tools-core-status-v3.md`
- `reports/tool-water-spec-v1.md`
- `reports/tool-khau-phan-clinical-spec-v1.md`
- `reports/tool-formula-audit-v1.md`
- `reports/tool-carb-spec-v1.md`
- `reports/tool-gl-spec-v1.md`
- `src/pages/cong-cu/muc-tieu-can-nang.astro`
- `src/pages/cong-cu/muc-tieu-dinh-duong.astro`
- `src/pages/cong-cu/tinh-macro.astro`
- `src/pages/cong-cu/tinh-nang-luong.astro`
- `src/pages/kien-thuc-dinh-duong/nhu-cau-dinh-duong-khuyen-nghi.astro`
- `src/pages/kien-thuc-dinh-duong/hieu-dung-ve-calo.astro`
- `src/lib/protein-requirement.ts`

## Local Source Search

Commands requested:

- `dir /s /b *Nhu*cau*dinh*duong*`
- `dir /s /b *RDA*`
- `dir /s /b *khuyen*nghi*`

Files found:

- `src/pages/kien-thuc-dinh-duong/nhu-cau-dinh-duong-khuyen-nghi.astro`
- `src/pages/cong-cu/nhu-cau-dinh-duong-tre-em.astro`
- `public/og/nhu-cau-dinh-duong-khuyen-nghi.svg`
- `dist/og/nhu-cau-dinh-duong-khuyen-nghi.svg`
- `dist/_astro/nhu-cau-dinh-duong-tre-em.DA44fL2J.css`

No file matching `*RDA*` was found.

The article `src/pages/kien-thuc-dinh-duong/nhu-cau-dinh-duong-khuyen-nghi.astro` contains tables and a source note naming **"Nhu cầu dinh dưỡng khuyến nghị cho người Việt Nam" - Viện Dinh Dưỡng Quốc Gia (cập nhật 2016)**. However, no source PDF, data table with provenance metadata, or prior source-lock report for this specific energy/macro engine was found in the repo.

Decision:

- Mark Vietnamese RNI 2016 as `source_file_not_found_in_repo` for this engine.
- The article can be a lead for future source-lock work, but should not be treated as a locked engine source yet.
- Do not invent numbers from a named source unless the source document or a reviewed source-lock report is added.

## Source-Lock Objective

This source-lock exists to prevent four overlapping routes from calculating nutrition goals in four different ways.

The future engine should:

- Lock every numeric output to an approved source label.
- Avoid creating new formulas when source-lock is missing.
- Avoid disease prescriptions.
- Reuse stable engines where already reviewed.
- Route high-risk contexts to `clinical_no_auto`.
- Make it impossible for `muc-tieu-can-nang`, `muc-tieu-dinh-duong`, `tinh-macro`, and `tinh-nang-luong` to drift apart.

## Approved v1 Scope

V1 may support:

- Relatively healthy adults.
- Weight maintenance.
- Healthy eating.
- Mild weight loss as `caution`.
- Mild weight gain as `caution`.

V1 must not auto-generate personal kcal or macro targets for:

- Under 18 years old.
- Pregnancy or breastfeeding.
- Low BMI or suspected underweight.
- Rapid unintentional weight loss.
- Eating disorder or eating disorder history.
- CKD.
- Dialysis.
- Heart failure or fluid restriction.
- Cirrhosis or ascites.
- Diabetes using insulin or sulfonylurea.
- Cancer or malnutrition.
- Acute illness.
- Multiple complex diseases or medications.

Any major red flag should return `clinical_no_auto`, with no prominent personal kcal/macro target.

## Source-Lock Table

| Component | Locked source | v1 decision | Mode | Safe wording | Notes |
|---|---|---|---|---|---|
| BMR formula | `needs_source_lock`; current route uses Mifflin-St Jeor style but no source-lock report exists | Do not present as precise; may include only after source is locked | `auto`/`caution` only | "Ước tính năng lượng nghỉ, có sai số." | Candidate source: Mifflin-St Jeor validation or approved adult energy requirement source. |
| Activity factor | `needs_source_lock`; current `1.375` fixed multiplier is not acceptable | Do not use one hidden fixed factor for everyone | `auto`/`caution` only | "Mức hoạt động là phân nhóm thô; nhu cầu thực tế thay đổi theo ngày." | If unlocked, use descriptive activity only or defer TDEE. |
| TDEE | `needs_source_lock`; depends on BMR + activity source | If shown, show as range with uncertainty, not a single exact target | `auto`/`caution` only | "Ước tính năng lượng duy trì, không phải mục tiêu cứng." | Do not reuse `muc-tieu-can-nang` inline formula as source of truth. |
| `7700 kcal/kg` | `needs_source_lock`; current page/article mention it without locked limitations | Do not use to promise `giảm X kg/tuần`; preferably omit from v1 target math | `caution` if ever used | "Quy đổi đơn giản; cân nặng thay đổi không tuyến tính." | Risk: water, glycogen, metabolic adaptation, adherence, body composition. |
| Weight-loss deficit | `needs_source_lock` | Do not set hard deficit; mild weight loss remains `caution` | `caution` | "Không hứa tốc độ giảm cân; tránh giảm ăn quá mức." | Do not recommend very low intake. |
| Weight-gain surplus | `needs_source_lock` | Do not set hard surplus; mild weight gain remains `caution` | `caution` | "Tăng cân nhẹ cần theo dõi tiêu hóa, vận động và sức khỏe." | Exclude malnutrition/cancer/rapid weight loss from auto mode. |
| Protein range | `reports/tool-protein-source-lock-v1.md` and `src/lib/protein-requirement.ts` | Reuse stable protein engine where profile is safe | `auto`/`caution`; respect `clinical_no_auto` | "Khoảng protein tham khảo; không phải chỉ định điều trị." | If protein engine returns `clinical_no_auto`, nutrition-goal engine must also not show personal target. |
| Fat range | `needs_source_lock`; internal RNI article exists but source document is not locked | Defer hard fat range unless source-lock approved | `auto`/`caution` only | "Khoảng chất béo tham khảo, không tối ưu cho mọi người." | Do not reuse disease macro table. |
| Carb range | `needs_source_lock`; carb-counting engine is stable for intake totals, not macro target setting | Defer hard carb range unless source-lock approved | `auto`/`caution` only | "Khoảng carb tham khảo; không dùng để chỉnh thuốc." | `tinh-carb` should not become macro prescription source. |
| Fiber | `needs_source_lock`; meal assessment can sum fiber but does not lock personal fiber targets for this engine | Defer or education-only until source-lock | `auto`/`caution` | "Xơ là mục tiêu tham khảo; cần cá thể hóa nếu bệnh tiêu hóa/bệnh nền." | Internal article lists values but not enough for engine source-lock. |
| Added sugar | `needs_source_lock`; current internal article says `Đường tinh`, not a locked added/free sugar definition | Defer or education-only until definition/source is locked | `auto`/`caution` | "Giới hạn đường thêm/đường tự do là khuyến nghị dân số, không phải đơn cá nhân." | Must define added sugar vs free sugar vs total sugar. |
| Sodium | `needs_source_lock`; `tool-khau-phan-clinical-spec-v1` lists AHA sodium source as candidate for meal assessment | Education-only unless source-lock approved | `auto`/`caution`; `clinical_no_auto` if HF/CKD/fluid restriction or prescribed diet | "Natri cá nhân cần bác sĩ nếu có bệnh hoặc y lệnh ăn nhạt." | Do not set disease sodium targets in this engine. |
| BMI cutoff | `needs_source_lock` for final source label; provisional safety rule BMI `<18.5` -> `clinical_no_auto` | Use for screening after source label is locked; do not diagnose | all modes | "BMI chỉ là chỉ dấu sàng lọc, không chẩn đoán." | High BMI alone should not trigger aggressive deficit. |
| Clinical exclusions | Existing project safety specs: `tool-protein-source-lock-v1`, `tool-water-spec-v1`, `tool-khau-phan-clinical-spec-v1`, `tool-carb-spec-v1`, `tool-gl-spec-v1` | Yes, apply before numeric target output | `clinical_no_auto` | "Nhóm này cần cá thể hóa; không tự đặt mục tiêu kcal/macro." | Exclusions are sufficiently established for v1 gate behavior, even where exact target formulas are deferred. |

## Decisions To Carry Into v1

### BMR/TDEE

- Mifflin-St Jeor or any alternative energy formula still needs source-lock before implementation.
- V1 must not present TDEE as a precise truth.
- If included after source-lock, show an estimated range and source label.
- If source-lock remains incomplete, the engine may return mode, warnings, and protein reference without an active energy target.

### Activity Factor

- Do not use a hidden fixed `1.375` activity factor for everyone.
- If activity factors are not source-locked, use descriptive activity categories for context only.
- If activity factors are source-locked later, label them as rough estimates.

### `7700 kcal/kg`

- Do not use it to promise or imply guaranteed weight change speed.
- Prefer omitting it from v1 target math.
- If retained as educational context, it must be `caution` only and explain limitations:
  - weight change is not linear.
  - water and glycogen can dominate short-term scale movement.
  - metabolic adaptation changes expenditure.
  - adherence and intake measurement error are large.
  - fat mass and lean mass do not change identically.

### Deficit / Surplus

- Do not output a hard daily deficit or surplus.
- Mild weight loss and mild weight gain should be `caution`.
- Do not recommend eating as low as possible.
- Do not promise a rate of change.
- Do not treat target date + target weight as a prescription.

### Protein

- Reuse `src/lib/protein-requirement.ts`.
- Do not create a separate protein formula in `nutrition-goal-planner`.
- Do not set protein targets for CKD, dialysis, cancer/malnutrition, pregnancy/lactation, children, acute illness, or complex clinical profiles.
- If `calculateProteinRequirement()` returns `clinical_no_auto`, the goal engine must suppress personal kcal/macro/protein targets and return `clinical_no_auto`.

### Macro

- Do not use the current hardcoded disease macro table in v1.
- Do not use disease macro rows for diabetes, CKD, hypertension, gout, dyslipidemia, or weight loss.
- If macro ranges for healthy adults are desired, lock a source first.
- Until macro source-lock is approved, v1 should show:
  - protein reference when safe.
  - optional energy estimate only if energy source-lock is approved.
  - no hard protein/fat/carb split.

### BMI

- BMI `<18.5` or suspected underweight should be `clinical_no_auto`.
- High BMI alone should not automatically produce a large deficit.
- BMI is a screening signal, not a diagnosis or treatment target.
- Asian BMI cutoffs for overweight/obesity need a separate source-lock before being used for risk labeling.

### Clinical Exclusions

- Any major red flag should override all other modes and return `clinical_no_auto`.
- In `clinical_no_auto`, the engine must not show a prominent personal kcal/macro target.
- The user-facing response should explain that goals need individual assessment.

## Proposed Engine Contract

Future file:

- `src/lib/nutrition-goal-planner.ts`

Suggested types:

```ts
type NutritionGoalMode = "auto" | "caution" | "clinical_no_auto";

type NutritionGoal = "maintain" | "healthy_eating" | "mild_weight_loss" | "mild_weight_gain";

type NutritionGoalSourceStatus = "source_locked" | "needs_source_lock" | "clinician_review_required";

interface NutritionGoalRedFlags {
  under18?: boolean;
  pregnancyLactation?: boolean;
  lowBMI?: boolean;
  rapidUnintentionalWeightLoss?: boolean;
  eatingDisorder?: boolean;
  CKD?: boolean;
  dialysis?: boolean;
  heartFailureOrFluidRestriction?: boolean;
  cirrhosisAscites?: boolean;
  diabetesInsulinOrSulfonylurea?: boolean;
  cancerMalnutrition?: boolean;
  acuteIllness?: boolean;
  complexMedication?: boolean;
}

interface NutritionGoalInput {
  age: number;
  sex: "male" | "female";
  weightKg: number;
  heightCm: number;
  activityLevel?: "low" | "light" | "moderate" | "high";
  goal: NutritionGoal;
  redFlags?: NutritionGoalRedFlags;
}

interface NutritionGoalRange {
  min: number;
  max: number;
  unit: string;
  sourceLabel: string;
  sourceStatus: NutritionGoalSourceStatus;
}

interface NutritionGoalResult {
  ok: boolean;
  mode: NutritionGoalMode;
  energyEstimateRange?: NutritionGoalRange;
  proteinReference?: NutritionGoalRange;
  macroRange?: {
    proteinPercent?: [number, number];
    fatPercent?: [number, number];
    carbPercent?: [number, number];
    sourceLabel: string;
    sourceStatus: NutritionGoalSourceStatus;
  };
  warnings: string[];
  sourceLabels: string[];
  isPersonalPrescription: false;
  shouldShowTargets: boolean;
  error?: string;
}
```

Contract rules:

- `isPersonalPrescription` is always `false`.
- `shouldShowTargets` is `false` when mode is `clinical_no_auto`.
- Clinical red flags are evaluated before energy or macro math.
- Source status is attached to every numeric output.
- Protein references come from `protein-requirement.ts`.
- Macro ranges are omitted until source-lock is approved.
- Disease-specific macro targets are not part of v1.

## Mode Rules

### `auto`

Use only when:

- Adult.
- Relatively healthy.
- Goal is `maintain` or `healthy_eating`.
- No major red flags.
- BMI is not low.
- Inputs are valid.

May show:

- Energy estimate range only if energy source-lock is approved.
- Protein reference from the stable protein engine.
- No disease-specific target.

### `caution`

Use for:

- Mild weight loss.
- Mild weight gain.
- Older adult.
- High activity.
- Overweight/obesity without complex disease.
- Vegetarian/vegan, if included later.

May show:

- Stronger uncertainty language.
- Protein reference if the protein engine allows it.
- Energy range only if source-lock is approved.
- No guaranteed rate.
- No hard deficit/surplus.

### `clinical_no_auto`

Use for:

- Under 18 years old.
- Pregnancy or breastfeeding.
- BMI `<18.5` or suspected underweight.
- Rapid unintentional weight loss.
- Eating disorder or eating disorder history.
- CKD.
- Dialysis.
- Heart failure or fluid restriction.
- Cirrhosis or ascites.
- Diabetes using insulin or sulfonylurea.
- Cancer or malnutrition.
- Acute illness.
- Multiple complex diseases or medications.

Should show:

- No personal kcal target.
- No personal macro target.
- No disease macro table.
- A message that goals need individualized care.

## Locked Wording

Do not use:

- `mục tiêu chuẩn`
- `bắt buộc ăn`
- `giảm X kg/tuần chắc chắn`
- `ăn càng ít càng tốt`
- `macro tối ưu cho mọi người`
- `an toàn cho bệnh X`
- `tự chỉnh insulin/thuốc`
- `ngưng thuốc`
- `bệnh thận nên ăn X g đạm` as a personal target

Preferred wording:

- `ước tính`
- `tham khảo`
- `có sai số`
- `cần cá thể hóa`
- `không thay thế tư vấn bác sĩ/dinh dưỡng viên`
- `không dùng để chỉnh thuốc`

## What Is Source-Locked Now

Locked or reusable enough for v1 engine gating:

- Protein range logic for allowed profiles, via:
  - `reports/tool-protein-source-lock-v1.md`
  - `src/lib/protein-requirement.ts`
- Protein `clinical_no_auto` handling for CKD, dialysis, pregnancy/lactation, cancer/malnutrition, and related high-risk profiles.
- Fluid-related clinical exclusions from `tool-water-spec-v1`, useful for red flags:
  - heart failure or fluid restriction.
  - CKD.
  - dialysis.
  - cirrhosis/ascites.
  - edema/fluid restriction contexts.
- Carb/GL medication safety exclusions from `tool-carb-spec-v1` and `tool-gl-spec-v1`:
  - insulin.
  - sulfonylurea.
  - no medication adjustment.
- Meal assessment mode model from `tool-khau-phan-clinical-spec-v1`:
  - `auto`.
  - `caution`.
  - `clinical_no_auto`.

Locked decisions for v1:

- Disease macro table is out of scope for self-service v1.
- `clinical_no_auto` suppresses personal kcal/macro targets.
- `muc-tieu-can-nang`, `muc-tieu-dinh-duong`, `tinh-macro`, and `tinh-nang-luong` should use one shared engine.

## Remaining `needs_source_lock`

Still needs source-lock before numeric target implementation:

- BMR formula.
- Activity factor.
- TDEE.
- `7700 kcal/kg` and whether it is included at all.
- Weight-loss deficit.
- Weight-gain surplus.
- Fat range.
- Carb range.
- Fiber goal.
- Added/free sugar definition and limit.
- Sodium target for general education.
- BMI source label and any Asian-specific cutoffs.
- Whether Vietnamese RNI 2016 should be used for adult energy/macro in the engine.

## Implementation Readiness

The project has enough source-lock to implement:

- The engine shell.
- Input validation.
- Red-flag detection.
- Mode resolution.
- Suppression of targets in `clinical_no_auto`.
- Protein reuse through `protein-requirement.ts`.
- Wording guards.
- Tests for mode behavior.

The project does not yet have enough source-lock to implement:

- A source-labeled BMR/TDEE engine.
- A hidden activity multiplier.
- A hard kcal deficit/surplus target.
- A guaranteed weekly weight-change output.
- A macro split for all users.
- Fiber, added sugar, or sodium personal targets.
- Disease-specific macro targets.

Recommended next implementation approach:

1. Build `nutrition-goal-planner.ts` with modes, red flags, validation, source labels, and protein reuse.
2. Leave energy and macro ranges absent or clearly marked inactive until source-lock is complete.
3. Add tests for every red flag before changing UI.
4. Refactor UI only after engine behavior is stable.

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

`nutrition-goal-planner` should start as a safety-gated shared engine, not as a new calculator with fresh calorie or macro formulas. Protein and clinical exclusion behavior can be reused from existing stable/spec-reviewed work. Energy, activity, macro, fiber, added sugar, sodium, and weight-change math still need source-lock before they become active numeric targets.

The disease macro table from `muc-tieu-can-nang` is not approved for v1 and should not be carried into the shared engine.
