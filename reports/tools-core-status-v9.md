# Tools Core Status v9

Date: 2026-06-25

Branch: `tools-core-status-v9`

Base commit: `edc0ae1 test: finalize child nutrition needs page review`

Tag created:

- `local-nhu-cau-dinh-duong-tre-em-final-review-v1 -> edc0ae1`

## Scope

- Promote `nhu-cau-dinh-duong-tre-em` to `stable_v1` after safety patch, QA polish, and final review.
- Keep total tool count at `38`.
- Update `/cong-cu/` with a light `Đã kiểm v1` badge for **Nhu cầu dinh dưỡng trẻ em**.
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
| 8 | `dinh-duong-thai-ky` | `clinical_high_risk` | no | audit only | no dedicated pass | no | Pregnancy advice should be source-locked before promotion. |
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
| 26 | `theo-doi-duong-huyet` | `clinical_high_risk` | no | audit only | no dedicated pass | no | Glucose thresholds and actions need diabetes source/spec. |
| 27 | `theo-doi-suc-khoe` | `clinical_high_risk` | no | audit only | no dedicated pass | no | Multiple health metrics; needs source and escalation wording. |
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

Counts were recalculated directly from all 38 rows in the v8 status table. The v8 row-level counts were:

- `stable_v1`: 11.
- `needs_spec`: 5.
- `needs_qa_polish`: 13.
- `stub_or_draft`: 2.
- `clinical_high_risk`: 7.

In v8, `nhu-cau-dinh-duong-tre-em` was classified as `clinical_high_risk`. This round moves only that row from `clinical_high_risk` to `stable_v1`; all other row-level statuses remain unchanged.

- `stable_v1`: 12 tools.
- `needs_spec`: 5 tools.
- `needs_implementation`: 0 tools in this pass; existing incomplete routes are classified as `stub_or_draft`.
- `needs_qa_polish`: 13 tools.
- `stub_or_draft`: 2 tools.
- `clinical_high_risk`: 6 tools.

Total: `38` tools.

## Twelve Stable v1 Tools

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

Updated the **Nhu cầu dinh dưỡng trẻ em** card:

- Route remains `/cong-cu/nhu-cau-dinh-duong-tre-em`.
- Badge: `Đã kiểm v1`.
- Description remains: `Nhắc các tình huống cần cá thể hóa khi đánh giá nhu cầu dinh dưỡng của trẻ.`
- The card remains in **Muối, nước, bệnh mạn**.

The card does not describe the route as:

- a calculator.
- a personal child portion calculator.
- a growth assessment tool.
- a normal/abnormal conclusion tool.
- a malnutrition or obesity treatment tool.
- a meal prescription tool.

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

- `/cong-cu/` has a **Nhu cầu dinh dưỡng trẻ em** card with the `Đã kiểm v1` badge and safe description.
- `/cong-cu/nhu-cau-dinh-duong-tre-em/` remains a real route that returns `200`, with no redirect or meta refresh.
- Route output remains scoped to educational safety shell only.
- Rendered route output does not show a form, age bands calculator, `kcal/kg`, macro/micronutrient/fiber number, automatic growth assessment, age-specific meal plan, personal child output, or forbidden wording.

## Recommended Next Tools

| Priority | Tool | Why next | Main risk | Recommended path |
|---:|---|---|---|---|
| 1 | `dinh-duong-thai-ky` | Next P0 from the existing clinical triage order after medication tools and child nutrition. | Pregnancy weight gain, kcal, protein, and micronutrient targets. | Safety patch or source-lock before any promotion. |
| 2 | `theo-doi-duong-huyet` | Diabetes-facing tracker remains high risk. | Thresholds/actions can be read as clinical advice. | Neutral logging/safety patch. |
| 3 | `theo-doi-suc-khoe` | Multi-metric clinical tracker remains high risk. | BP/glucose/A1c/LDL target lines can be read as treatment targets. | Neutral logging/safety patch. |
| 4 | `dia-an-lanh-manh` | Disease-specific plate route remains high risk. | Disease table includes kidney/gout/hypertension/diabetes-style advice. | Safety hub/orientation patch before status. |
| 5 | `nuoc-muoi-mon-an` | Salt/sodium route remains high risk. | Disease-specific sodium targets for hypertension, heart failure, and kidney disease. | Remove disease-specific targets or gate as clinical no-auto. |

## Conclusion

The project now has **12 stable v1 tools**. `nhu-cau-dinh-duong-tre-em` is stable only as an educational safety shell for recognizing when pediatric nutrition needs individualized review. It should not be treated as a child nutrition calculator, growth assessment tool, meal plan generator, treatment tool, new engine, formula change, or nutrition data change.
