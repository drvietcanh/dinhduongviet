# Tool Khau Phan Clinical Implement v1

Date: 2026-06-11

Branch: `tool-khau-phan-clinical-implement-v1`

Base spec commit: `3a916e5 docs: add clinical Vietnamese meal tool specification`

Tag created:

- `local-khau-phan-clinical-spec-v1 -> 3a916e5`

## Scope

- Rebuild `/cong-cu/khau-phan-viet-clinical/` as a safer Vietnamese meal assessment tool.
- User-facing concept changed to `Đánh giá khẩu phần Việt`.
- V1 estimates and educates; it does not prescribe disease-specific therapeutic diets.
- No nutrition data changes.
- No manual `dist` edits.

## Engine

New engine:

- `src/lib/vietnamese-meal-assessment.ts`

The engine provides:

- Modes: `auto`, `caution`, `clinical_no_auto`.
- Inputs: age, sex, weight, height, activity, general goal, meal/day mode, selected items, and clinical flags.
- Outputs:
  - intake totals: kcal, carb, protein, fat.
  - optional fiber, sodium, sugar when data exists.
  - missing-data warnings.
  - estimated-data/source-review warnings.
  - mode messages.
  - general education suggestions.
  - safety messages.

The engine sets `isPersonalTarget: false` for all modes in v1. It can expose a non-clinical protein reference for safe modes, but the page does not present it as a target.

## Page Changes

Updated:

- `src/pages/cong-cu/khau-phan-viet-clinical.astro`

User-facing changes:

- Heading changed from `Khẩu Phần Việt Clinical` to `Đánh giá khẩu phần Việt`.
- Eyebrow changed to `Công cụ giáo dục dinh dưỡng`.
- Lead copy now says the tool estimates and educates.
- Old disease profile UI became `Cờ cần cá thể hóa`.
- Results show intake totals from selected items rather than therapeutic targets.
- Mode badge shows:
  - `Ước tính giáo dục`
  - `Tham khảo có lưu ý`
  - `Cần cá thể hóa`

## Removed Clinical Prescribing Pattern

Removed from the page:

- The page-level 90-item `dishData` nutrition table.
- The 7-item `diseaseInfo` profile table.
- Direct disease adjustments:
  - `adjustProt`.
  - `adjustEnergy`.
  - `sodiumMax`.
- Page-level target denominators such as disease-adjusted kcal/protein/carb/sodium goals.
- Wording that framed results as disease-specific requirements.

Remaining hardcode:

- UI option labels and clinical flag labels.
- Client-side rendering/filtering logic.
- No independent hardcoded nutrition values for the old 90 clinical dishes.

## Data Source

The page now builds choices from:

- `foods` in `src/data/nutrition.ts`.
- `recipes` in `src/data/nutrition.ts`.
- `calculateRecipe(recipe)` from `src/lib/nutrition.ts`.
- Food review metadata already attached by `food-quality-reviews.ts`.

For foods, nutrient values come from `food.nutrients`.

For recipes, nutrient values are calculated from recipe ingredients and converted to per-100g values based on `servingWeightG`.

If fiber, sodium, or sugar is missing, the engine warns and does not invent a value.

## Core Engine Reuse

The meal assessment engine reuses:

- `carb-calculator.ts` through `calculateCarbMeal`.
- `protein-requirement.ts` through `calculateProteinRequirement` for safe-mode educational protein reference only.

Not included in v1 main flow:

- GL calculation. The safer choice is to keep GL in the dedicated `/cong-cu/tinh-gl-bua-an/` tool.
- Water calculation. Water remains in `/cong-cu/nuoc-uong/`, which already has a fluid safety gate.

## Mode Rules

### `auto`

Used for:

- Adult, relatively healthy profile.
- No clinical red flags.
- General education goal.

Shows:

- Intake totals.
- Data warnings.
- General education suggestions.

### `caution`

Used for:

- Age >= 65 or frail elderly.
- Mild weight loss/gain.
- High activity.
- Vegetarian pattern.
- Gout history without acute/severe flare.
- Hypertension without CKD/HF/strict medical low-salt flag.
- Food allergy.

Shows:

- Intake totals.
- Caution wording.
- General suggestions only.

### `clinical_no_auto`

Used for:

- Diabetes using insulin or sulfonylurea.
- CKD.
- Dialysis.
- Heart failure or fluid restriction.
- Medically prescribed strict low-salt plan.
- Cirrhosis/ascites/edema.
- Pregnancy or breastfeeding.
- Child/adolescent.
- Cancer or malnutrition.
- Eating disorder.
- Rapid unintentional weight loss.
- Acute illness, vomiting, diarrhea, fever, dehydration, dyspnea, or rapidly worsening edema.
- Acute/severe gout.

Shows:

- Intake totals if available.
- No personal therapeutic target.
- Clear individualized-care messages.

## Tests

New test:

- `scripts/test-vietnamese-meal-assessment.mjs`

Package scripts updated:

- `test:meal-assessment`
- `test:tools` now includes protein, carb, GL, water, and meal assessment.

Test coverage includes:

- Healthy adult with data -> `auto`, totals.
- Mild weight loss/gain -> `caution`.
- Diabetes on insulin/sulfonylurea -> `clinical_no_auto`.
- CKD -> `clinical_no_auto`.
- Dialysis -> `clinical_no_auto`.
- Heart failure/fluid restriction -> `clinical_no_auto`.
- Pregnancy/lactation -> `clinical_no_auto`.
- Child/adolescent -> `clinical_no_auto`.
- Cancer/malnutrition/rapid weight loss -> `clinical_no_auto`.
- Gout acute/severe -> `clinical_no_auto`.
- Gout history -> `caution`.
- Multiple diseases -> `clinical_no_auto` with multiple reasons, no silent target overwrite.
- Missing food data -> warning, no crash.
- Forbidden wording does not appear in engine output.

## Wording Safety

The implementation avoids these user-facing patterns in page/engine output:

- `khẩu phần điều trị chuẩn cho bệnh X`
- `bắt buộc ăn X g`
- `an toàn cho tiểu đường/CKD/gout`
- `tự tăng/giảm insulin`
- `tự ngưng thuốc`
- CKD protein prescription wording such as `bệnh thận nên ăn 0.6-0.8 g/kg`
- gout advice to drink more water without excluding CKD/HF/fluid restriction

Safety notes explicitly say:

- The tool is for education and estimation.
- It does not replace individualized medical/dietitian care.
- Users should not change medication based on the result.

## Browser/UI QA

Preview:

- `http://localhost:4325/cong-cu/khau-phan-viet-clinical/`
- HTTP status: 200.

Build confirms the route and client bundle compile.

Browser QA limitation:

- Browser MCP was not exposed by tool discovery in this run.
- The available `node_repl` runtime did not include Playwright (`Module not found: playwright`).
- Therefore scripted browser interaction/screenshot QA could not be completed in this round.

Recommended follow-up:

- Run a short browser polish pass on desktop and mobile before marking this tool v1.

## QA Results

- `npm run build`: pass.
- `npm run qa`: pass.
- `npm run qa:food-data`: pass.
- `npm run qa:data-consistency`: pass.
- `npm run test:tools`: pass.
  - `npm run test:protein`: pass.
  - `npm run test:carb`: pass.
  - `npm run test:gl`: pass.
  - `npm run test:water`: pass.
  - `npm run test:meal-assessment`: pass.

- `git diff --check`: pass. Git emitted line-ending normalization warnings for touched files.
- `git status --short`: changed files before commit were `package.json`, `src/pages/cong-cu/khau-phan-viet-clinical.astro`, `src/lib/vietnamese-meal-assessment.ts`, `scripts/test-vietnamese-meal-assessment.mjs`, and this report.

## v2 Follow-Ups

- Browser QA and mobile polish.
- Decide whether the route should be renamed away from `khau-phan-viet-clinical`.
- Add project-owned browser tests for high-risk mode rendering.
- Add optional link-out to GL and water tools without mixing their clinical safety gates into this page.
- Improve food selection UX if the full food/recipe list feels too large.
- Add better source badges for recipe estimates and items requiring dietitian review.
- Consider an explicit export/share summary for dietitian review.

## Conclusion

The old clinical prescribing pattern has been replaced by a safer meal assessment pattern. The page now estimates intake from the existing food/recipe pipeline, routes high-risk contexts to `clinical_no_auto`, and avoids disease-specific therapeutic targets in v1.
