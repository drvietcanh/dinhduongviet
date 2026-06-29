# Tools Core Status v12

Date: 2026-06-29

Branch: `tools-core-status-v12`

Base commit: `5cf8ac6 test: finalize health tracking page review`

Tag created:

- `local-theo-doi-suc-khoe-final-review-v1 -> 5cf8ac6`

## Scope

- Promote `theo-doi-suc-khoe` to `stable_v1` after safety patch, QA polish, and final review.
- Keep total tool count at `38`.
- Update `/cong-cu/` with a light `Đã kiểm v1` badge for **Theo dõi sức khỏe**.
- No engine logic changes.
- No formula changes.
- No nutrition data changes.
- No manual `dist` edits.
- No route logic changes outside the `/cong-cu/` listing badge/status metadata.

## Status Legend

- `stable_v1`: ready to treat as a v1 baseline within the stated scope.
- `needs_spec`: usable or partly usable, but needs source/spec review before promotion.
- `needs_implementation`: intended tool exists but needs real implementation work.
- `needs_qa_polish`: usable tool that mainly needs UI/manual QA, wording, source notes, or edge-case polish.
- `stub_or_draft`: draft route or placeholder; should not be promoted as complete.
- `clinical_high_risk`: clinical/disease/medication-facing tool that needs spec and review before promotion.

## 38 Tool Status Table

| # | Slug | Status | Engine test | Spec/source-lock | Browser UI QA | Promote as complete? | Notes |
|---:|---|---|---|---|---|---|---|
| 1 | `bang-xep-hang` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Data-driven ranking; needs source/UX polish before v1 badge. |
| 2 | `bmi` | `needs_spec` | no | audit only | no dedicated pass | limited | Formula is simple, but Asian cutoffs/waist messaging need source lock. |
| 3 | `checklist-an-uong` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Low-risk habit checklist; needs wording/mobile QA. |
| 4 | `chi-so-gi` | `clinical_high_risk` | no | audit only | no dedicated pass | no | GI/GL table affects diabetes interpretation; needs curated source/spec. |
| 5 | `danh-gia-bua-an` | `stable_v1` | not needed, hub only | spec, hub, QA reports | yes, browser desktop/mobile | yes, as navigation hub only | Route `/cong-cu/danh-gia-bua-an/`. No calculator, meal score, disease target, engine, formula, or nutrition data. |
| 6 | `danh-sach-di-cho` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Useful workflow tool; low clinical risk. |
| 7 | `dia-an-lanh-manh` | `clinical_high_risk` | no | audit only | no dedicated pass | no | Disease-specific plate advice needs clinical source and wording review. |
| 8 | `dinh-duong-thai-ky` | `stable_v1` | not needed, safety shell only | safety patch, QA polish, final review reports | yes, system Chrome desktop/mobile 390px | yes, as educational safety shell only | Route `/cong-cu/dinh-duong-thai-ky/`. No pregnancy calorie/micronutrient calculator, pregnancy weight-gain assessment, personal needs form, BMI calculator, BMR-style formula, stage multiplier, numeric kcal/protein/iron/calcium/folate/DHA/fiber/vitamin D target, personal meal plan, new engine, formula, or nutrition data change. |
| 9 | `doi-don-vi` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Conversion tool; needs edge-case/manual UI QA. |
| 10 | `duong-do-uong` | `needs_spec` | no | audit only | no dedicated pass | limited | Sugar estimates need source labels and safer diabetes wording. |
| 11 | `ke-hoach-bua-an` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Heuristic meal planning; needs source notes and UI QA. |
| 12 | `khau-phan-don-gian` | `needs_spec` | no | audit only | no dedicated pass | limited | Portion assumptions need source/spec review. |
| 13 | `khau-phan-viet-clinical` | `stable_v1` | yes, `npm run test:meal-assessment` | spec, implement, QA reports | yes, local browser QA | yes, within scope | Stable only as education/meal assessment, not disease diet prescription. |
| 14 | `lap-thuc-don-tuan` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Meal planner appears usable but needs testable rules and UI QA. |
| 15 | `loc-thuc-pham` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Data filtering tool; needs QA around tags/ranges. |
| 16 | `muc-tieu-can-nang` | `stable_v1` | yes, `npm run test:nutrition-goal` | audit/spec, source-lock, safety patch, QA, final review reports | yes, desktop and 390px-class QA | yes, as safe weight goal orientation only | Uses `nutrition-goal-planner` safety shell; no BMR/TDEE, `7700 kcal/kg`, deficit/surplus, numerical kcal/macro targets, disease macro table, treatment prescription, or promised weight-change speed. |
| 17 | `muc-tieu-dinh-duong` | `stable_v1` | yes, `npm run test:nutrition-goal` | spec, source-lock, engine shell, implement, QA, final review reports | yes, browser/headless 390px-class QA | yes, as safe nutrition goal orientation only | Uses `nutrition-goal-planner` safety shell with `auto`/`caution`/`clinical_no_auto`; no BMR/TDEE, kcal target, macro target, deficit/surplus, or disease macro table. |
| 18 | `nhat-ky` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Daily total workflow; needs tests around totals and targets. |
| 19 | `nhu-cau-dinh-duong-tre-em` | `stable_v1` | not needed, safety shell only | safety patch, QA polish, final review reports | yes, Browser plugin desktop/mobile 390px | yes, as educational safety shell only | Route `/cong-cu/nhu-cau-dinh-duong-tre-em/`. No child nutrition calculator, personal needs form, age-band calculator, `kcal/kg`, macro/micronutrient/fiber numbers, expected weight/height, automatic growth assessment, age meal plan, normal/abnormal conclusion, new engine, formula, or nutrition data change. |
| 20 | `nuoc-muoi-mon-an` | `clinical_high_risk` | no | audit only | no dedicated pass | no | Sodium/salt advice touches hypertension, CKD, heart failure. |
| 21 | `nuoc-uong` | `stable_v1` | yes, `npm run test:water` | `tool-water-spec-v1`, QA report | yes, local preview | yes | Safety gate, `auto`/`caution`/`clinical_no_auto`, no personal target for restricted-fluid groups. |
| 22 | `so-sanh` | `stable_v1` | not needed, hub only | stash review, QA polish, final review reports | yes, Browser plugin desktop/mobile 390px | yes, as navigation hub only | Hub only for choosing a comparison tool; no calculator, new calculation form, comparison result, score, health conclusion, treatment advice, engine, formula, or nutrition data change. |
| 23 | `so-sanh-bua-an` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Meal comparison should get total/edge-case tests. |
| 24 | `so-sanh-thuc-pham` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Data comparison; needs UI QA and missing-data handling review. |
| 25 | `them-thuc-pham-dong-goi` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | User-entered label conversion needs validation tests. |
| 26 | `theo-doi-duong-huyet` | `stable_v1` | not needed, neutral log only | safety patch, QA polish, final review reports | yes, Browser plugin mobile 390px | yes, as neutral tracking log + safety shell only | Route `/cong-cu/theo-doi-duong-huyet/`. Logs user-entered glucose diary data only with meal/medicine/symptom notes; localStorage key `ddv_glucose_log_v1` stores local diary entries only. No glucose/HbA1c targets, reference line, good/high/low labels, hypo/hyper counts, target conclusion, medication/insulin/meal adjustment guidance, new engine, formula, or nutrition data change. |
| 27 | `theo-doi-suc-khoe` | `stable_v1` | not needed, neutral log only | safety patch, QA polish, final review reports | yes, Browser plugin mobile 390px | yes, as neutral tracking log + safety shell only | Route `/cong-cu/theo-doi-suc-khoe/`. Logs user-entered health metrics only with meal/medicine/symptom notes; localStorage key `health-track-v1` stores local diary entries only, and CSV/export only contains raw entered data and notes. No chart/canvas, goal/reference lines, BP/glucose/HbA1c/LDL targets, `health-goals-v1`, good/high/low/abnormal/risk labels, reached/missed target conclusion, medication/insulin/statin/blood-pressure medicine/meal adjustment guidance, new engine, formula, or nutrition data change. |
| 28 | `ti-le-mo-co-the` | `needs_spec` | no | audit only | no dedicated pass | limited | US Navy/WHR cutoffs need source lock and limitation wording. |
| 29 | `tim-mon-tu-nguyen-lieu` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Search/suggestion workflow; low clinical risk. |
| 30 | `tinh-calo-tieu-thu` | `needs_spec` | no | audit only | no dedicated pass | limited | MET assumptions need source and edge-case testing. |
| 31 | `tinh-carb` | `stable_v1` | yes, `npm run test:carb` | `tool-carb-spec-v1`, QA report | yes, Chrome/local QA report | yes | Data-driven carb engine, safe diabetes wording, dedicated tests. |
| 32 | `tinh-gl-bua-an` | `stable_v1` | yes, `npm run test:gl` | `tool-gl-spec-v1`, QA report | yes, local QA report | yes | GL engine uses carb base plus curated GI mapping and safety wording. |
| 33 | `tinh-macro` | `stub_or_draft` | no | no | no | no | Placeholder route. |
| 34 | `tinh-nang-luong` | `stub_or_draft` | no | no | no | no | Placeholder route. |
| 35 | `tinh-nhu-cau-dam` | `stable_v1` | yes, `npm run test:protein` | `tool-protein-source-lock-v1`, spec, QA report | yes, local QA report | yes | Rule table with clinical no-auto handling for high-risk protein groups. |
| 36 | `tra-cuu-thuc-pham-viet` | `needs_qa_polish` | no | food data reports | no dedicated pass | limited | Core data lookup; needs dedicated QA around missing values and units. |
| 37 | `tuong-tac-thuoc` | `stable_v1` | not needed, safety shell only | safety patch, QA polish, final review reports | yes, Browser plugin desktop/mobile 390px | yes, as safety shell only | Safety shell only for situations that need doctor/pharmacist review; no personal drug interaction lookup, search, database/list, severity/action/mechanism output, safe-combination conclusion, self-stop/dose/timing instruction, new engine, formula, or nutrition data change. |
| 38 | `tuong-tac-thuoc-thuc-pham` | `stable_v1` | not needed, safety shell only | safety patch, QA polish, final review reports | yes, Browser plugin desktop/mobile 390px | yes, as safety shell only | Safety shell only for situations that need doctor/pharmacist review; no personal interaction lookup, drug selector, hardcoded user-facing table, safe-combination conclusion, severity tier, self-stop/dose/timing instruction, new engine, formula, or nutrition data change. |

## Summary Counts

Counts were recalculated directly from all 38 rows in the v11 status table. The v11 row-level counts were:

- `stable_v1`: 14.
- `needs_spec`: 5.
- `needs_qa_polish`: 13.
- `stub_or_draft`: 2.
- `clinical_high_risk`: 4.

In v11, `theo-doi-suc-khoe` was classified as `clinical_high_risk`. This round moves only that row from `clinical_high_risk` to `stable_v1`; all other row-level statuses remain unchanged.

- `stable_v1`: 15 tools.
- `needs_spec`: 5 tools.
- `needs_implementation`: 0 tools in this pass; existing incomplete routes are classified as `stub_or_draft`.
- `needs_qa_polish`: 13 tools.
- `stub_or_draft`: 2 tools.
- `clinical_high_risk`: 3 tools.

Total: `38` tools.

## Fifteen Stable v1 Tools

1. `tinh-nhu-cau-dam`
2. `tinh-carb`
3. `tinh-gl-bua-an`
4. `nuoc-uong`
5. `khau-phan-viet-clinical` / **Đánh giá khẩu phần Việt**
6. `danh-gia-bua-an` / **Đánh giá bữa ăn** -- stable navigation hub only
7. `muc-tieu-dinh-duong` / **Mục tiêu dinh dưỡng** -- stable safe nutrition goal orientation only
8. `muc-tieu-can-nang` / **Mục tiêu cân nặng** -- stable safe weight goal orientation only
9. `so-sanh` / **So sánh dinh dưỡng** -- stable navigation hub only
10. `tuong-tac-thuoc-thuc-pham` / **Tương tác thuốc - thực phẩm** -- stable safety shell only
11. `tuong-tac-thuoc` / **Tương tác thuốc** -- stable safety shell only
12. `nhu-cau-dinh-duong-tre-em` / **Nhu cầu dinh dưỡng trẻ em** -- stable educational safety shell only
13. `dinh-duong-thai-ky` / **Dinh dưỡng thai kỳ** -- stable educational safety shell only
14. `theo-doi-duong-huyet` / **Theo dõi đường huyết** -- stable neutral tracking log + safety shell only
15. `theo-doi-suc-khoe` / **Theo dõi sức khỏe** -- stable neutral tracking log + safety shell only

## `theo-doi-duong-huyet` Stable Scope

Status: `stable_v1`.

Route:

- `/cong-cu/theo-doi-duong-huyet/`

Stable v1 scope:

- Neutral tracking log + safety shell only.
- Records glucose diary entries entered by the user.
- Allows notes about meals, medicine, and symptoms.
- Uses localStorage only for local diary persistence via key `ddv_glucose_log_v1`.
- Reminds users to ask a doctor or clinician when individualized interpretation is needed.
- Keeps the route available as a diary/preparation page, not a diabetes-control assessment tool.

It is not:

- A glucose-control assessment tool.
- A personal glucose target tool.
- An HbA1c target tool.
- A tool for deciding whether a user is meeting or missing a target.
- A medication, insulin, meal, or treatment adjustment tool.
- A diabetes treatment tool.

It does not display or enable:

- Glucose targets.
- HbA1c targets.
- Reference lines.
- Good, high, low, or very-high labels.
- Hypo or hyper counts.
- Conclusions that the user has reached or missed a target.
- Advice to self-adjust medicine, insulin, meals, or treatment.
- A new engine.
- New formulas.
- Nutrition data changes.

localStorage:

- Key: `ddv_glucose_log_v1`.
- Stores only local diary entries entered by the user.
- Stored data is limited to measurement context, entered value, note, and timestamp.
- Does not store app-generated diagnosis, target, prescription, medication dose, or clinical output.

Source/review trail:

- `reports/clinical-high-risk-triage-v1.md`
- `reports/tool-theo-doi-duong-huyet-safety-patch-v1.md`
- `reports/tool-theo-doi-duong-huyet-qa-polish-v1.md`
- `reports/tool-theo-doi-duong-huyet-final-review-v1.md`

Browser/final QA evidence:

- Route returned `200`.
- No redirect or meta refresh.
- H1 is `Theo dõi đường huyết`.
- In-app Browser mobile `390 x 844` check had no horizontal overflow.
- Final groups reviewed:
  - fasting glucose entry.
  - post-meal entry.
  - bedtime entry.
  - very low or very high entered number.
  - multiple same-day entries with meal, medicine, and symptom notes.
  - user wanting good/bad interpretation or self-adjustment guidance.
- All reviewed groups remain diary-only and point back to clinician review when interpretation is needed.
- Forbidden target, label, hypo/hyper count, and self-adjustment wording was not found in app-generated route output.

## `theo-doi-suc-khoe` Stable Scope

Status: `stable_v1`.

Route:

- `/cong-cu/theo-doi-suc-khoe/`

Stable v1 scope:

- Neutral tracking log + safety shell only.
- Records health metrics entered by the user.
- Allows notes about meals, medicines, and symptoms.
- Uses localStorage only for local diary persistence via key `health-track-v1`.
- CSV/export, if used, contains only raw entered data and notes.
- Reminds users to ask a doctor or clinician when symptoms, unusual values, chronic conditions, medicines, or individualized targets are involved.
- Keeps the route available as a diary/preparation page, not a disease-control assessment or medication-adjustment tool.

It is not:

- A disease-control assessment tool.
- A personal blood pressure, glucose, HbA1c, or LDL target tool.
- A risk classification tool.
- A tool for deciding whether a user is meeting or missing a target.
- A medication, insulin, statin, blood-pressure medicine, meal, or treatment adjustment tool.
- A hypertension, diabetes, or lipid-disorder treatment tool.

It does not display or enable:

- Chart/canvas.
- Goal lines or reference lines.
- Blood pressure, glucose, HbA1c, or LDL targets.
- `health-goals-v1`.
- Personal goals.
- Good, high, low, abnormal, or risk labels.
- Conclusions that the user has reached or missed a target.
- Advice to self-adjust medicine, insulin, statins, blood-pressure medicine, meals, or treatment.
- A new engine.
- New formulas.
- Nutrition data changes.

localStorage:

- Key: `health-track-v1`.
- Stores only local diary entries entered by the user.
- Stored data is limited to measurement date, entered metrics, note, and local record metadata.
- Does not store app-generated diagnosis, target, prescription, medication dose, or clinical output.

CSV/export:

- Exports only raw diary values and the user's note.
- Does not export app-generated target, goal, label, reached/missed status, diagnosis, prescription, medication adjustment, or clinical output.

Source/review trail:

- `reports/clinical-high-risk-triage-v1.md`
- `reports/tool-theo-doi-suc-khoe-safety-patch-v1.md`
- `reports/tool-theo-doi-suc-khoe-qa-polish-v1.md`
- `reports/tool-theo-doi-suc-khoe-final-review-v1.md`

Browser/final QA evidence:

- Route returned `200`.
- No redirect or meta refresh.
- H1 is `Theo dõi sức khỏe`.
- In-app Browser mobile `390 x 844` check had no horizontal overflow.
- Final groups reviewed:
  - blood pressure entry.
  - glucose entry.
  - HbA1c entry.
  - LDL/triglyceride or lipid entry.
  - multiple entries with meal, medicine, and symptom notes.
  - very low or very high entered values with a user wanting good/bad interpretation, target interpretation, or self-adjustment guidance.
- All reviewed groups remain diary-only and point back to clinician review when interpretation is needed.
- localStorage persisted two entered rows after reload and returned to an empty state after deleting rows.
- Browser download capture for CSV timed out, but source review confirmed export contains raw diary data and notes only.
- Forbidden target, label, risk classification, reached/missed target, and self-adjustment wording was not found in app-generated route output.
- The string `target` can appear in shared layout JSON-LD as `SearchAction.target.urlTemplate`; this is metadata, not a user-facing clinical target.

## `dinh-duong-thai-ky` Stable Scope

Status: `stable_v1`.

Route:

- `/cong-cu/dinh-duong-thai-ky/`

Stable v1 scope:

- Educational safety shell only.
- Reminds users about situations that need individualized nutrition review during pregnancy or lactation.
- Helps prepare information for an obstetrician or dietitian.
- Keeps the route available as a safe orientation page, not a personal pregnancy nutrition calculator.
- User-facing wording says the page does not replace advice from an obstetrician or dietitian.

It is not:

- A personal pregnancy calorie or micronutrient calculator.
- A pregnancy weight-gain assessment tool.
- A pregnancy BMI calculator.
- A meal plan generator for pregnancy.
- A tool for deciding whether pregnancy weight gain is adequate, inadequate, or excessive.
- A treatment or prescription tool.

It does not display or enable:

- A personal needs form.
- A BMI calculator.
- A BMR-style formula.
- A stage multiplier.
- Energy, protein, iron, calcium, folate, DHA, fiber, or vitamin D targets as numbers.
- Personal conclusions that weight gain is adequate, inadequate, or excessive.
- Pregnancy meal plans or food lists as personal instructions.
- Advice to self-supplement micronutrients or medicines.
- A new engine.
- New formulas.
- Nutrition data changes.

Source/review trail:

- `reports/clinical-high-risk-triage-v1.md`
- `reports/tool-dinh-duong-thai-ky-safety-patch-v1.md`
- `reports/tool-dinh-duong-thai-ky-qa-polish-v1.md`
- `reports/tool-dinh-duong-thai-ky-final-review-v1.md`

Browser/final QA evidence:

- Route returned `200`.
- No redirect or meta refresh.
- H1 is `Dinh dưỡng thai kỳ`.
- Desktop `1280 x 900` had no horizontal overflow.
- Mobile `390 x 844` system Chrome/Playwright check had no horizontal overflow.
- No form, input, BMI calculator, BMR-style formula, stage multiplier, numerical kcal/protein/micronutrient target, pregnancy weight-gain assessment, or personal meal plan was present.
- Final groups reviewed:
  - thai kỳ 3 tháng đầu.
  - thai kỳ 3 tháng giữa hoặc cuối.
  - nhẹ cân, thừa cân, hoặc béo phì trước thai kỳ.
  - đái tháo đường thai kỳ hoặc rối loạn đường huyết.
  - tăng huyết áp, tiền sản giật, hoặc nguy cơ tiền sản giật.
  - người dùng muốn tính calo hoặc vi chất cụ thể.
- All reviewed groups point users toward an obstetrician or dietitian.
- Forbidden pregnancy target, self-supplementation, and weight-gain conclusion wording was not found in rendered route output.
- Intermittent favicon/static auxiliary 404 was classified as a non-route resource issue and does not affect the tool scope.

## `nhu-cau-dinh-duong-tre-em` Stable Scope

Status: `stable_v1`.

Route:

- `/cong-cu/nhu-cau-dinh-duong-tre-em/`

Stable v1 scope:

- Educational safety shell only.
- Reminds caregivers about situations that need individualized pediatric nutrition review.
- Helps prepare information for a doctor or pediatric dietitian.
- Keeps the route available as a safe orientation page, not a personal pediatric nutrition calculator.
- User-facing wording says the page does not replace doctor or pediatric dietitian advice.

It is not:

- A child nutrition needs calculator.
- A pediatric growth assessment tool.
- A personal child portion calculator.
- A meal plan generator by age.
- A tool for deciding whether a child is normal or abnormal.
- A treatment or prescription tool.

It does not display or enable:

- A personal needs form.
- An age bands calculator.
- `kcal/kg`.
- Energy, protein, fat, carb, micronutrient, or fiber targets as numbers.
- Expected weight or height.
- Automatic growth assessment.
- Age-specific meal examples as personal instructions.
- Conclusions that a child is normal, underweight, overweight, or developing normally.
- A new engine.
- New formulas.
- Nutrition data changes.

Source/review trail:

- `reports/clinical-high-risk-triage-v1.md`
- `reports/tool-nhu-cau-dinh-duong-tre-em-safety-patch-v1.md`
- `reports/tool-nhu-cau-dinh-duong-tre-em-qa-polish-v1.md`
- `reports/tool-nhu-cau-dinh-duong-tre-em-final-review-v1.md`

Browser/final QA evidence:

- Route returned `200`.
- No redirect or meta refresh.
- H1 is `Nhu cầu dinh dưỡng trẻ em`.
- Desktop/default viewport had no horizontal overflow.
- Mobile `390 x 844` Browser check had no horizontal overflow.
- No form, age-band calculator, `kcal/kg`, macro/micronutrient/fiber number, growth assessment, or age meal plan was present.
- Final groups reviewed:
  - trẻ dưới 2 tuổi.
  - trẻ sinh non hoặc nhẹ cân.
  - chậm tăng cân hoặc sụt cân.
  - thừa cân hoặc béo phì.
  - bệnh mạn tính, đái tháo đường, hoặc rối loạn chuyển hóa.
  - phụ huynh muốn tính khẩu phần cụ thể.
- All reviewed groups point users toward a doctor or pediatric dietitian.
- Forbidden pediatric target/growth wording was not found in rendered route output.

## `/cong-cu/` UI Update

Updated the **Theo dõi sức khỏe** card:

- Route remains `/cong-cu/theo-doi-suc-khoe`.
- Badge: `Đã kiểm v1`.
- Description remains: `Ghi nhật ký chỉ số sức khỏe và nhắc các tình huống cần hỏi bác sĩ hoặc chuyên gia.`
- The card remains in **Chỉ số cơ thể**.

The card does not describe the route as:

- a calculator.
- a disease-control assessment tool.
- a blood pressure/glucose/HbA1c/LDL target tool.
- a risk classification tool.
- a medication-adjustment tool.
- a hypertension, diabetes, or lipid-disorder treatment tool.

## No Out-of-Scope Changes

No changes were made to:

- engine logic.
- formulas.
- nutrition data.
- stable route logic.
- `dist`.

No deploy was performed.

## QA Results

Final QA:

- `npm run build`: pass.
- `npm run qa`: pass.
- `npm run qa:food-data`: pass.
- `npm run qa:data-consistency`: pass.
- `npm run test:tools`: pass.
- `git diff --check`: pass.
- `git status --short`: clean except the intended report/index changes before commit.

Quick checks in this round:

- `/cong-cu/` has a **Theo dõi sức khỏe** card with the `Đã kiểm v1` badge and safe description.
- `/cong-cu/theo-doi-suc-khoe/` remains a real route that returns `200`, with no redirect or meta refresh.
- Route output remains scoped to neutral tracking log + safety shell only.
- Route keeps localStorage only as a local diary store through `health-track-v1`.
- CSV/export, if used, contains only raw entered data and notes.
- Rendered route output does not show chart/canvas, goal/reference lines, BP/glucose/HbA1c/LDL targets, `health-goals-v1`, good/high/low/abnormal/risk labels, reached/missed target conclusions, medication/insulin/statin/blood-pressure medicine/meal adjustment instructions, or forbidden wording.

## Recommended Next Tools

| Priority | Tool | Why next | Main risk | Recommended path |
|---:|---|---|---|---|
| 1 | `dia-an-lanh-manh` | Next P0 from the existing clinical triage order after health tracking. | Disease table includes kidney/gout/hypertension/diabetes-style advice. | Safety hub/orientation patch before status. |
| 2 | `nuoc-muoi-mon-an` | Salt/sodium route remains high risk. | Disease-specific sodium targets for hypertension, heart failure, and kidney disease. | Remove disease-specific targets or gate as clinical no-auto. |
| 3 | `chi-so-gi` | GI/GL route remains high risk for diabetes interpretation. | GI/GL outputs may be treated as diabetes treatment guidance. | Source-lock and safety wording before promotion. |

## Conclusion

The project now has **15 stable v1 tools**. `theo-doi-suc-khoe` is stable only as a neutral tracking log and safety shell for recording user-entered health metric diary data and preparing for clinician review. It should not be treated as a disease-control assessment tool, personal BP/glucose/HbA1c/LDL target tool, risk classification tool, medication-adjustment tool, treatment tool, new engine, formula change, or nutrition data change.
