# Tool Khau Phan Clinical Spec v1

Date: 2026-06-11

Branch: `tool-khau-phan-clinical-spec-v1`

Base status commit: `2bbcb24 docs: add core tools status report and tool badges`

Tag created:

- `local-tools-core-status-v1 -> 2bbcb24`

## Scope

- Audit current `/cong-cu/khau-phan-viet-clinical/`.
- Define a safer v1 specification before implementation.
- No code changes.
- No formula changes.
- No nutrition data changes.
- No UI changes.
- No manual `dist` edits.

## Files Reviewed

- `src/pages/cong-cu/khau-phan-viet-clinical.astro`
- `src/lib/carb-calculator.ts`
- `src/lib/protein-requirement.ts`
- `src/lib/glycemic-load-calculator.ts`
- `src/lib/water-intake-calculator.ts`
- `src/data/`
- `reports/tool-formula-audit-v1.md`
- `reports/tools-core-status-v1.md`
- `reports/food-quality-notes-v1.md`
- `reports/food-source-decision-v1.md`

## Current Tool State

### Current Inputs

The current page collects:

- Sex: male/female.
- Age: numeric, default 45, UI min 10 and max 120.
- Weight: numeric kg, default 60, UI min 20 and max 300.
- Height: numeric cm, default 160, UI min 100 and max 250.
- Activity multiplier: 1.2, 1.375, 1.55, or 1.725.
- Disease checkboxes:
  - `tieuDuong`: Đái tháo đường.
  - `tangHuyetAp`: Tăng huyết áp.
  - `thanMan`: Bệnh thận mạn.
  - `gout`: Gout.
  - `copd`: COPD / Suy hô hấp.
  - `ungThu`: Ung thư / Suy dinh dưỡng.
  - `ganNhiemMo`: Gan nhiễm mỡ.
- Dish search from internal page-level `dishData`.
- Dish quantity in serving units.

### Current Outputs

The current page shows:

- BMI and Asian-style BMI text label.
- Per-dish added list with kcal, protein, fat, carb.
- Result cards comparing actual intake against targets for:
  - kcal.
  - protein.
  - fat.
  - carb.
  - fiber.
  - sodium.
  - sugar.
- Disease adjustment text under "Chỉnh sửa theo bệnh lý".
- Link into `/cong-cu/ke-hoach-bua-an` with weight, age, sex, activity, and disease query parameters.
- Warnings such as low/high energy, low protein, high sodium, high sugar, low fiber, high purine for gout, and high protein for CKD.

### Current Logic

The current page performs all calculation inside the `.astro` page script.

- BMI: `weight / height_m^2`.
- BMR: Mifflin-St Jeor style equations:
  - male: `10w + 6.25h - 5age + 5`.
  - female: `10w + 6.25h - 5age - 161`.
- TDEE: `round(BMR * activity)`.
- Default targets:
  - kcal = TDEE.
  - protein = `round(weight * 1.0)`.
  - fat = `round(TDEE * 0.25 / 9)`.
  - carb = `round(TDEE * 0.55 / 4)`.
  - fiber = 25 g.
  - sodium = 2300 mg.
  - sugar = 25 g.
- Disease adjustments:
  - Energy target is multiplied by `adjustEnergy`.
  - Protein target is replaced by the midpoint of `adjustProt` times weight.
  - Sodium target is lowered to `sodiumMax` if present.
  - Diabetes flags raise fiber to 30 g and lower sugar to 15 g.
  - Fat target is lowered to 20% of TDEE for fatty liver.
  - Carb is recalculated from remaining kcal after adjusted protein and fat.
- Actual intake:
  - Sum `kcal`, `p`, `f`, `c`, `xo`, `na`, `duong` from selected hardcoded dishes times quantity.
- Warning logic:
  - Compares actual intake percentages to targets.
  - Adds red/yellow/green messages.
  - For gout, flags hardcoded `purin: 1` dishes.
  - For CKD-like protein flag, warns if protein is over 110% of target.

### Current Hardcoding

The current page hardcodes:

- 90 dish records in `dishData`.
- 7 disease records in `diseaseInfo`.
- Nutrient fields per dish: kcal, protein, fat, carb, fiber, sodium, sugar, purine flag.
- Disease text and numeric adjustment fields:
  - `adjustProt`.
  - `adjustEnergy`.
  - `sodiumMax`.
  - flags such as `sugar`, `carbHigh`, `protein`, `sodium`, `purin`.
- All 7 disease records have an `adjustProt` range.

### Current Use of Food Data Pipeline

The current clinical tool does not import or reuse the food data pipeline from `src/data/`, `src/lib/nutrition.ts`, generated API food files, or Vietnam nutrition API files.

This matters because the food-data reports already distinguish canonical food data, low-confidence recipe estimates, source-review status, and items needing dietitian/external source review. The clinical page currently bypasses that metadata.

### Current Use of Stable Core Engines

The current clinical tool does not reuse:

- `src/lib/carb-calculator.ts`
- `src/lib/protein-requirement.ts`
- `src/lib/glycemic-load-calculator.ts`
- `src/lib/water-intake-calculator.ts`

It reimplements targets and comparisons inside the page.

### Current Clinical Risk

The current tool can be interpreted as giving personal disease targets because it:

- Uses the label "Công cụ lâm sàng".
- Says it compares intake with "nhu cầu theo bệnh lý".
- Shows target denominators for kcal, protein, fat, carb, fiber, sodium, and sugar.
- Automatically changes targets for CKD, diabetes, hypertension, gout, COPD, cancer/malnutrition, and fatty liver.
- Provides imperative wording such as "Hạn chế", "Tránh", "Cần ăn thêm", "Nên bổ sung thêm", "Đạm đạt yêu cầu", and "Khẩu phần cân đối".

High-risk examples in the current code:

- CKD: `adjustProt:[0.6,0.8]`, `adjustEnergy:0.9`, `sodiumMax:1500`.
- Cancer/malnutrition: `adjustProt:[1.2,2.0]`, `adjustEnergy:1.3`.
- COPD: `adjustProt:[1.2,1.5]`, `adjustEnergy:1.1`, text says to reduce carb.
- Gout: text says to drink more water and avoid purine foods, but the page only has a binary `purin` flag.
- Diabetes: lowers sugar target and adjusts fiber but does not know medication, insulin, hypoglycemia risk, HbA1c, CKD, pregnancy, or individualized carb plans.

## v1 Product Goal

The v1 goal should be:

- Help users record and understand a Vietnamese meal or day of eating.
- Estimate energy and macronutrients from selected foods when data quality is adequate.
- Surface uncertainty, missing data, and high-level balance signals.
- Provide education, not prescriptions.
- Route high-risk clinical contexts to a "needs individualized review" state.

The v1 goal should not be:

- Prescribe therapeutic diets.
- Generate a disease-specific meal plan.
- Set personal targets for diabetes, CKD, dialysis, gout, heart failure, pregnancy, children, cancer, malnutrition, eating disorders, or acute illness.
- Adjust medication, insulin, diuretics, kidney medication, gout medication, or fluid limits.

## Recommended v1 Scope

### In Scope

- Adults who are relatively healthy.
- General goals:
  - Maintain current weight.
  - Mild weight loss education.
  - Mild weight gain education.
  - General healthy eating.
- Activity level as a rough education input.
- Meal or day entry with selected Vietnamese dishes.
- Estimated totals:
  - kcal.
  - carb.
  - protein.
  - fat.
  - fiber where available.
  - sodium where available.
  - sugar where available.
- Data-quality warnings:
  - missing nutrient values.
  - estimated dish data.
  - source not yet reviewed.
  - dish is a rough household serving estimate.
- General balanced-meal suggestions, e.g. add vegetables, spread carb across meals, watch sugary drinks, check salty processed foods.

### Out of Scope for v1

- Treatment diet plans for diabetes, CKD, dialysis, gout, heart failure, cirrhosis/ascites, pregnancy, children, cancer, malnutrition, eating disorders, or acute illness.
- Insulin-carb ratio or medication adjustment.
- Potassium/phosphorus restriction.
- Fluid prescription.
- Purine quantified prescription.
- Therapeutic sodium limits for a specific patient.
- Pediatric, pregnancy, oncology, or renal nutrition prescriptions.

## Proposed Inputs

### General Inputs

- Age.
- Sex.
- Weight.
- Height.
- General goal:
  - maintain.
  - mild weight loss.
  - mild weight gain.
  - healthy eating.
- Activity level.
- Meal/day mode:
  - one meal.
  - full day.
- Number of meals per day if full-day mode is used.
- Food entry:
  - choose Vietnamese dish from data source.
  - enter grams or household serving.
  - optionally enter custom item with "unknown data" warning.

### Clinical Flag Inputs

These should be explicit red flags, not disease profiles that auto-prescribe targets:

- Diabetes using insulin or sulfonylurea.
- CKD.
- Dialysis.
- Heart failure or fluid restriction.
- Hypertension or medically prescribed low-salt diet.
- Gout, especially recent or active flare.
- Cirrhosis or ascites.
- Pregnancy or breastfeeding.
- Child/adolescent.
- Cancer or malnutrition.
- Food allergy.
- Eating disorder history or rapid unintentional weight loss.
- Acute illness, vomiting, diarrhea, fever, dehydration, edema, dyspnea.

## Proposed Outputs

### For `auto`

Show:

- Estimated intake totals from selected foods.
- Optional estimated energy range if the formula/source is approved.
- Carb/protein/fat totals from selected foods.
- Fiber/sodium/sugar totals only when data exists and is labeled as estimated.
- Data-quality and missing-data warnings.
- General education suggestions.
- No claim that the meal is a "correct prescription".

### For `caution`

Show:

- Intake totals.
- Stronger limitations and "consider review" messages.
- Avoid firm personal target denominators if the target would be unreliable.
- Examples: older adult, vegetarian/vegan, mild weight change goal, high activity, user-entered custom foods.

### For `clinical_no_auto`

Show:

- Intake totals if food data is available.
- No personal kcal/protein/carb/fat/sodium/water target.
- No therapeutic meal plan.
- Clear message: the selected condition needs individualized advice.
- Emergency/urgent escalation text where relevant.

## Proposed Mode Model

Use the same pattern as the stable tools:

- `auto`: adult, relatively healthy, general education goal, no high-risk flags.
- `caution`: older adult, mild weight loss/gain, vegetarian/vegan, high activity, uncertain/custom data, non-acute gout history without flare if doctor approves.
- `clinical_no_auto`: CKD, dialysis, heart failure/fluid restriction, cirrhosis/ascites, pregnancy/breastfeeding, children/adolescents, cancer/malnutrition, diabetes using insulin/sulfonylurea, active gout flare or severe gout, eating disorder or rapid weight loss, acute illness, dehydration, vomiting/diarrhea, dyspnea, rapidly worsening edema.

## Engine Reuse

Recommended engine structure:

- Create `src/lib/clinical-meal-planner.ts` or, safer semantically, `src/lib/vietnamese-meal-assessment.ts`.
- Prefer the second name because v1 should be an assessment/education tool, not a clinical meal prescription engine.

Recommended reuse:

- Use `carb-calculator.ts` for carb totals and missing-carb warnings.
- Use `protein-requirement.ts` only through its safe modes and never override `clinical_no_auto`.
- Use `glycemic-load-calculator.ts` only when GI mapping exists, with match quality exposed.
- Use `water-intake-calculator.ts` only if water is included later, and preserve `clinical_no_auto` for restricted-fluid groups.

Recommended new data boundaries:

- Move dish/serving data out of the page.
- Link each dish record to canonical food data or recipe estimate metadata when possible.
- Store disease/red-flag rules in a dedicated rule table.
- Keep target-setting rules separate from food summing.
- Never let disease flags silently overwrite each other; return conflicts and `clinical_no_auto`.

## Source-Lock Preparation Table

| Component | Source to check | Mode | Include in v1? | Safe wording |
|---|---|---|---|---|
| BMR/TDEE estimate | Mifflin-St Jeor validation and adult energy requirement references | `auto`/`caution` | yes, only after source note | "Ước tính năng lượng tham khảo, có sai số." |
| Macronutrient distribution | DRI/AMDR or national nutrition guidance | `auto`/`caution` | maybe | "Khoảng phân bố tham khảo cho người trưởng thành." |
| Food nutrient totals | Canonical food pipeline, Vietnam food composition data, recipe-estimate metadata | `auto`/`caution` | yes | "Tổng từ món đã chọn; phụ thuộc dữ liệu và khẩu phần." |
| Carb counting | ADA Standards of Care; existing carb spec | `auto`/`caution`; `clinical_no_auto` if insulin/sulfonylurea | yes, education only | "Không tự chỉnh insulin hoặc thuốc." |
| GL/GI | Curated GI table and existing GL spec | `caution` | optional | "GI/GL thay đổi theo cách nấu và phối hợp bữa ăn." |
| Protein target | Existing protein source-lock and engine modes | `auto`/`caution`; `clinical_no_auto` for high-risk states | limited | "Không dùng cho CKD/lọc máu/suy dinh dưỡng nếu chưa cá thể hóa." |
| CKD | KDIGO/KDOQI/renal dietitian review | `clinical_no_auto` | no therapeutic target in v1 | "Bệnh thận cần cá thể hóa đạm, natri, kali, phospho và dịch." |
| Dialysis | Renal guideline and dietitian review | `clinical_no_auto` | no | "Lọc máu cần chỉ định riêng theo lịch lọc và xét nghiệm." |
| Diabetes on insulin/sulfonylurea | ADA Standards of Care and clinician review | `clinical_no_auto` | no therapeutic target | "Không tự chỉnh thuốc/insulin theo kết quả." |
| Gout | Rheumatology guideline and purine food source | `caution` or `clinical_no_auto` | education only | "Không đánh giá gout chỉ bằng tổng đạm." |
| Hypertension | AHA/WHO sodium guidance and local guidance | `caution`; `clinical_no_auto` if medically prescribed low-salt complex disease | limited | "Natri là ước tính; mục tiêu cá nhân cần bác sĩ." |
| Heart failure/fluid restriction | Cardiology/heart failure guidance | `clinical_no_auto` | no | "Natri và dịch cần cá thể hóa." |
| Cirrhosis/ascites | Hepatology/dietitian guidance | `clinical_no_auto` | no | "Cổ trướng/phù cần chỉ định riêng." |
| Pregnancy/breastfeeding | Obstetric nutrition guidance | `clinical_no_auto` | no | "Nhu cầu thay đổi theo thai kỳ và tình trạng mẹ bé." |
| Children/adolescents | Pediatric growth/nutrition guidance | `clinical_no_auto` | no | "Trẻ em cần theo biểu đồ tăng trưởng và bác sĩ." |
| Cancer/malnutrition | ESPEN/ASPEN oncology and malnutrition guidance | `clinical_no_auto` | no | "Suy dinh dưỡng/ung thư cần đánh giá chuyên môn." |
| Eating disorder/rapid weight loss | Clinical safety guidance | `clinical_no_auto` | no | "Sụt cân nhanh hoặc rối loạn ăn uống cần được khám." |

Candidate source families to lock before implementation:

- ADA Standards of Care in Diabetes, current edition: https://professional.diabetes.org/standards-of-care
- KDIGO 2024 CKD guideline and executive summary: https://kdigo.org/guidelines/ckd-evaluation-and-management/
- AHA sodium recommendation page: https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sodium/how-much-sodium-should-i-eat-per-day
- ESPEN practical guidelines: https://www.espen.org/guidelines/espen-practical-guidelines-pdf-versions
- Vietnamese food composition and current project food-source reports.

## Mandatory Safety Warnings

The implemented tool must include these concepts:

- This tool is for nutrition education and meal review only.
- It does not replace a doctor or dietitian.
- Do not change insulin, diabetes medication, diuretics, kidney medication, gout medication, or other prescriptions based on this tool.
- CKD, dialysis, heart failure, fluid restriction, cirrhosis/ascites, pregnancy, children, cancer, malnutrition, eating disorder, rapid weight loss, acute illness, dehydration, vomiting/diarrhea, dyspnea, or worsening edema require individualized care.
- Results depend on the accuracy of portion measurement and food data.
- Missing or estimated food data can materially change totals.

## Forbidden Wording For v1

Avoid:

- "Khẩu phần điều trị chuẩn cho bệnh X".
- "Bắt buộc ăn X g đạm/carb".
- "Đạt chuẩn" without context.
- "An toàn cho tiểu đường/CKD/gout".
- "Tự tăng/giảm insulin".
- "Tự ngưng thuốc".
- "Uống nhiều nước" for gout without checking CKD/heart failure/fluid restriction.
- "Bệnh thận nên ăn 0.6-0.8 g/kg" as a personal target without clinician review.

Prefer:

- "Ước tính".
- "Tham khảo".
- "Cần cá thể hóa".
- "Trao đổi với bác sĩ/dinh dưỡng viên".
- "Tổng từ các món đã nhập".
- "Dữ liệu món ăn có thể khác theo cách nấu và khẩu phần thực tế".

## Implementation Plan After Approval

Recommended sequence:

1. Create `src/lib/vietnamese-meal-assessment.ts`.
2. Define typed inputs, outputs, `auto`/`caution`/`clinical_no_auto` modes.
3. Move disease/red-flag rules into a rule table.
4. Move dish data out of the page, or map page food choices to canonical food/recipe data with source metadata.
5. Reuse stable engines where appropriate:
   - carb totals from `carb-calculator.ts`.
   - protein safe mode from `protein-requirement.ts`.
   - optional GL from `glycemic-load-calculator.ts`.
   - optional water from `water-intake-calculator.ts`.
6. Update the page to render engine output only.
7. Add dedicated tests.
8. Browser QA mobile and desktop.

Recommended naming:

- Prefer "Đánh giá khẩu phần Việt" for the user-facing concept.
- Keep "clinical" as an internal/risk label only if needed.
- If the route stays `/khau-phan-viet-clinical/`, the page should visibly frame itself as educational and not a treatment prescription tool.

## Required Test Cases

1. Healthy adult -> basic intake analysis is shown.
2. Diabetes using insulin/sulfonylurea -> `clinical_no_auto`, no meal prescription, no medication adjustment.
3. CKD -> `clinical_no_auto`, no protein/potassium/phosphorus/fluid prescription.
4. Heart failure or fluid restriction -> `clinical_no_auto`.
5. Gout -> caution or clinical depending on input; not based only on total protein.
6. Pregnancy -> `clinical_no_auto`.
7. Child/adolescent -> `clinical_no_auto`.
8. Cancer/malnutrition or rapid weight loss -> `clinical_no_auto`.
9. Missing dish nutrient data -> warning and partial totals.
10. Estimated recipe data -> warning about uncertainty.
11. Combined disease flags -> no silent target overwrite; return conflict or `clinical_no_auto`.
12. Output text does not contain forbidden wording, including "khẩu phần điều trị chuẩn cho bệnh X".

## Doctor Review Needed Before Implementation

Please approve or revise:

- Whether to rename the tool from "Khẩu Phần Việt Clinical" to a safer "Đánh giá khẩu phần Việt".
- Whether v1 should show any estimated kcal target, or only intake totals and general balance.
- Which adult energy formula/source to use if kcal targets remain.
- Whether mild weight loss/gain belongs in `auto` or `caution`.
- Whether stable `protein-requirement.ts` should be reused for healthy adults only or all non-clinical modes.
- Whether gout history without flare is `caution` or `clinical_no_auto`.
- Whether hypertension without CKD/HF is `caution` with sodium education or `clinical_no_auto`.
- Which food data source should replace current page-level hardcoded dishes.
- Whether to include GI/GL in v1 or defer it.

## QA Results

- `npm run build`: pass.
- `npm run qa`: pass.
- `npm run qa:food-data`: pass; report written to `test-results\food-data-qa.json`.
- `npm run qa:data-consistency`: pass; report written to `test-results\data-consistency.json`.
- `npm run test:tools`: pass.
  - `npm run test:protein`: pass.
  - `npm run test:carb`: pass.
  - `npm run test:gl`: pass.
  - `npm run test:water`: pass.
- `git diff --check`: pass. Git emitted the existing line-ending warning that this new report will be normalized from LF to CRLF when touched.
- `git status --short`: only `reports/tool-khau-phan-clinical-spec-v1.md` was changed before commit.

## Conclusion

Current `khau-phan-viet-clinical` should not be promoted as a clinical v1 tool in its current form. It is valuable as a prototype, but its disease-specific target adjustment is too strong for unsupervised use. The safer v1 path is to rebuild it as a Vietnamese meal assessment tool: healthy-adult education in `auto`, uncertainty and mild-risk cases in `caution`, and high-risk disease states in `clinical_no_auto`.
