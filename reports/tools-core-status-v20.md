# Tools Core Status v20

Date: 2026-07-02

Branch: `tools-core-status-v20`

Base commit: `3ad3638 test: finalize food filter page review`

Tag created:

- `local-loc-thuc-pham-final-review-v1 -> 3ad3638`

## Scope

- Promote `loc-thuc-pham` to `stable_v1` after QA polish and final review.
- Keep total tool count at `38`.
- Update `/cong-cu/` with a light `Đã kiểm v1` badge for **Lọc thực phẩm**.
- No engine logic changes.
- No formula changes.
- No bulk source-data changes.
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
| 4 | `chi-so-gi` | `stable_v1` | not needed, safety shell only | safety patch, QA polish, final review reports | yes, Browser plugin desktop/mobile 390px | yes, as educational GI orientation + safety shell only | Route `/cong-cu/chi-so-gi/`. Educational GI orientation only with safety shell; no user-facing GI/GL lookup/search/filter/table, no personal GI/GL calculator, no disease-safe/unsafe conclusion, no blood glucose/HbA1c/carb/GI target, no low/medium/high health label or color classification, no medication/insulin/meal adjustment guidance, no new engine, formula, or nutrition data change. |
| 5 | `danh-gia-bua-an` | `stable_v1` | not needed, hub only | spec, hub, QA reports | yes, browser desktop/mobile | yes, as navigation hub only | Route `/cong-cu/danh-gia-bua-an/`. No calculator, meal score, disease target, engine, formula, or nutrition data. |
| 6 | `danh-sach-di-cho` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Useful workflow tool; low clinical risk. |
| 7 | `dia-an-lanh-manh` | `stable_v1` | not needed, safety shell only | safety patch, QA polish, final review reports | yes, Browser plugin desktop/mobile 390px | yes, as educational orientation + safety shell only | Route `/cong-cu/dia-an-lanh-manh/`. General healthy plate orientation only; no disease selector, personal form/calculator, user-facing disease table, disease-personalized SVG plate, disease-specific plate ratio, personal kcal/macro/water/sodium/potassium/phosphorus/protein target, disease-specific avoid/replace advice, safe-for-disease conclusion, new engine, formula, or nutrition data change. |
| 8 | `dinh-duong-thai-ky` | `stable_v1` | not needed, safety shell only | safety patch, QA polish, final review reports | yes, system Chrome desktop/mobile 390px | yes, as educational safety shell only | Route `/cong-cu/dinh-duong-thai-ky/`. No pregnancy calorie/micronutrient calculator, pregnancy weight-gain assessment, personal needs form, BMI calculator, BMR-style formula, stage multiplier, numeric kcal/protein/iron/calcium/folate/DHA/fiber/vitamin D target, personal meal plan, new engine, formula, or nutrition data change. |
| 9 | `doi-don-vi` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Conversion tool; needs edge-case/manual UI QA. |
| 10 | `duong-do-uong` | `needs_spec` | no | audit only | no dedicated pass | limited | Sugar estimates need source labels and safer diabetes wording. |
| 11 | `ke-hoach-bua-an` | `stable_v1` | not needed beyond existing shared tool tests | QA polish and final review reports | yes, in-app Browser desktop/mobile 390px | yes, as safe meal planning orientation + safety shell only | Route `/cong-cu/ke-hoach-bua-an/`. Keeps a reference meal-planning form and disease filter only for safety-note branching; kcal/macro output remains estimate-only, no user-facing BMR/TDEE, no disease-personalized treatment output, no safe/fit-for-disease conclusion, no sodium/potassium/phosphorus/carb/protein disease target, no medication/insulin/diuretic/meal adjustment guidance, and no `innerHTML` rendering from user input. |
| 12 | `khau-phan-don-gian` | `needs_spec` | no | audit only | no dedicated pass | limited | Portion assumptions need source/spec review. |
| 13 | `khau-phan-viet-clinical` | `stable_v1` | yes, `npm run test:meal-assessment` | spec, implement, QA reports | yes, local browser QA | yes, within scope | Stable only as education/meal assessment, not disease diet prescription. |
| 14 | `lap-thuc-don-tuan` | `stable_v1` | not needed beyond shared build/QA coverage | QA polish and final review reports | yes, in-app Browser desktop/mobile 390px | yes, as safe weekly menu orientation + safety shell only | Route `/cong-cu/lap-thuc-don-tuan/`. Keeps a reference weekly menu form and safety-note disease filter only; kcal/macro output remains estimate-only, no user-facing BMR/TDEE, no disease-personalized treatment output, no safe/fit-for-disease conclusion, no sodium/potassium/phosphorus/carb/protein disease target, no medication/insulin/diuretic/meal-adjustment guidance, no `innerHTML` rendering from user input, and final review confirmed a clean console after fresh reload/session with no residual `SyntaxError`. |
| 15 | `loc-thuc-pham` | `stable_v1` | not needed beyond shared build/QA coverage | QA polish and final review reports | yes, in-app Browser desktop/mobile 390px | yes, as neutral food filtering + data QA shell only | Route `/cong-cu/loc-thuc-pham/`. Neutral food filtering only; keeps accent-insensitive search plus neutral filters/result cards, shows data per `100g phần ăn được`, shows energy in `kcal`, macros in `g`, sodium and other micros in `mg` when available, keeps missing data neutral without guessing, does not call sodium `muối` without explicit conversion, keeps labels such as `GI thấp/GI cao`, `Ít natri/Nhiều natri`, and `Ít purin/Nhiều purin` only as neutral data filters, does not render user input with `innerHTML`, does not provide disease-safe/fit conclusions, treatment wording, or personal nutrient targets, and leaves source-data issue `6014` as a separate backlog item rather than a route-scope blocker. |
| 16 | `muc-tieu-can-nang` | `stable_v1` | yes, `npm run test:nutrition-goal` | audit/spec, source-lock, safety patch, QA, final review reports | yes, desktop and 390px-class QA | yes, as safe weight goal orientation only | Uses `nutrition-goal-planner` safety shell; no BMR/TDEE, `7700 kcal/kg`, deficit/surplus, numerical kcal/macro targets, disease macro table, treatment prescription, or promised weight-change speed. |
| 17 | `muc-tieu-dinh-duong` | `stable_v1` | yes, `npm run test:nutrition-goal` | spec, source-lock, engine shell, implement, QA, final review reports | yes, browser/headless 390px-class QA | yes, as safe nutrition goal orientation only | Uses `nutrition-goal-planner` safety shell with `auto`/`caution`/`clinical_no_auto`; no BMR/TDEE, kcal target, macro target, deficit/surplus, or disease macro table. |
| 18 | `nhat-ky` | `stable_v1` | not needed beyond shared build/QA coverage | QA polish and final review reports | yes, Playwright desktop/mobile 390px plus interaction QA | yes, as neutral nutrition log + safety shell only | Route `/cong-cu/nhat-ky/`. Keeps a neutral food diary form, localStorage persistence via `mt-diary-v2`, export/copy, and dashboard totals only as user-entered data aggregation. No user-facing personal target or BMR/TDEE-like output, no reached/missed or good/bad/high/low labels, no safe/fit/control conclusion, no medication/insulin/diuretic/meal-adjustment guidance, no treatment output, no `innerHTML` rendering from user input, and mobile 390px final review patched the real nav/action overflow. |
| 19 | `nhu-cau-dinh-duong-tre-em` | `stable_v1` | not needed, safety shell only | safety patch, QA polish, final review reports | yes, Browser plugin desktop/mobile 390px | yes, as educational safety shell only | Route `/cong-cu/nhu-cau-dinh-duong-tre-em/`. No child nutrition calculator, personal needs form, age-band calculator, `kcal/kg`, macro/micronutrient/fiber numbers, expected weight/height, automatic growth assessment, age meal plan, normal/abnormal conclusion, new engine, formula, or nutrition data change. |
| 20 | `nuoc-muoi-mon-an` | `stable_v1` | not needed, lookup/safety shell only | safety patch, QA polish, final review reports | yes, Browser plugin desktop/mobile 390px | yes, as educational salt lookup + safety shell only | Route `/cong-cu/nuoc-muoi-mon-an/`. Food salt lookup only with approximate dish-level salt ranges and safety shell. No personal low-salt diet prescription, disease safety conclusion, disease target table, personal salt/sodium/potassium/phosphorus/water target, high/medium/low health classification, medication/diuretic/fluid adjustment guidance, new engine, formula, nutrition data, or salt range change. |
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
| 36 | `tra-cuu-thuc-pham-viet` | `stable_v1` | not needed beyond shared build/QA coverage | QA polish and final review reports | yes, browser desktop/mobile 390px | yes, as neutral Vietnamese food lookup + data QA shell only | Route `/cong-cu/tra-cuu-thuc-pham-viet/`. Neutral food lookup only; keeps accent-insensitive search plus results/detail data, shows values per `100g phần ăn được`, normalizes user-facing energy to `kcal`, keeps nutrient units as `g`/`mg`, keeps missing data neutral without guessing, does not call sodium `muối` without explicit conversion, does not render user input with `innerHTML`, does not provide disease-safe/fit conclusions, treatment wording, or personal nutrient targets, and leaves source-data issue `6014` as a separate backlog item rather than a route-scope blocker. |
| 37 | `tuong-tac-thuoc` | `stable_v1` | not needed, safety shell only | safety patch, QA polish, final review reports | yes, Browser plugin desktop/mobile 390px | yes, as safety shell only | Safety shell only for situations that need doctor/pharmacist review; no personal drug interaction lookup, search, database/list, severity/action/mechanism output, safe-combination conclusion, self-stop/dose/timing instruction, new engine, formula, or nutrition data change. |
| 38 | `tuong-tac-thuoc-thuc-pham` | `stable_v1` | not needed, safety shell only | safety patch, QA polish, final review reports | yes, Browser plugin desktop/mobile 390px | yes, as safety shell only | Safety shell only for situations that need doctor/pharmacist review; no personal interaction lookup, drug selector, hardcoded user-facing table, safe-combination conclusion, severity tier, self-stop/dose/timing instruction, new engine, formula, or nutrition data change. |

## Summary Counts

Counts were recalculated directly from all 38 rows in the v19 status table. The v19 row-level counts were:

- `stable_v1`: 22.
- `needs_spec`: 5.
- `needs_qa_polish`: 9.
- `stub_or_draft`: 2.
- `clinical_high_risk`: 0.

In v19, `loc-thuc-pham` was classified as `needs_qa_polish`. This round moves only that row from `needs_qa_polish` to `stable_v1`; all other row-level statuses remain unchanged.

- `stable_v1`: 23 tools.
- `needs_spec`: 5 tools.
- `needs_implementation`: 0 tools in this pass; existing incomplete routes are classified as `stub_or_draft`.
- `needs_qa_polish`: 8 tools.
- `stub_or_draft`: 2 tools.
- `clinical_high_risk`: 0 tools.

Total: `38` tools.

Clinical high risk remaining:

- None.

P0 clinical high risk status:

- All P0 `clinical_high_risk` routes in the current status set remain completed.

## Twenty-Three Stable v1 Tools

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
16. `dia-an-lanh-manh` / **Đĩa ăn lành mạnh** -- stable educational orientation + safety shell only
17. `nuoc-muoi-mon-an` / **Muối trong món ăn** -- stable educational salt lookup + safety shell only
18. `chi-so-gi` / **Chỉ số GI thực phẩm Việt** -- stable educational GI orientation + safety shell only
19. `ke-hoach-bua-an` / **Kế hoạch bữa ăn** -- stable safe meal planning orientation + safety shell only
20. `lap-thuc-don-tuan` / **Lập thực đơn tuần** -- stable safe weekly menu orientation + safety shell only
21. `nhat-ky` / **Nhật ký ăn uống** -- stable neutral nutrition log + safety shell only
22. `tra-cuu-thuc-pham-viet` / **Tra cứu thực phẩm Việt** -- stable neutral Vietnamese food lookup + data QA shell only
23. `loc-thuc-pham` / **Lọc thực phẩm** -- stable neutral food filtering + data QA shell only

## `loc-thuc-pham` Stable Scope

Status: `stable_v1`.

Route:

- `/cong-cu/loc-thuc-pham/`

Stable v1 scope:

- Neutral food filtering + data QA shell only.
- Keeps accent-insensitive Vietnamese food search and neutral nutrient filters.
- Keeps filter chips and range controls only as data filters, not as treatment guidance.
- Keeps data display per `100g phần ăn được`.
- Shows energy in `kcal`.
- Shows macros in `g`.
- Shows sodium, micronutrients, cholesterol, and purine in `mg` when available.
- Keeps missing data neutral and does not guess missing values.
- Keeps numeric zero distinct from missing data.
- Keeps empty state and data-limit notes in neutral wording.
- Reminds users with chronic disease, medicines, pregnancy, childhood, older age, kidney disease, diabetes, hypertension, gout, heart failure, or treatment-oriented nutrition needs to ask a doctor or dietitian.

It is not:

- A disease-food selection tool.
- A good/bad food classification tool for disease backgrounds.
- A safe/fit food conclusion tool for people with disease.
- A personal nutrition target tool.
- A treatment, medication, insulin, or diuretic adjustment tool.

It does not display or enable:

- Disease filters.
- Disease-specific food lists.
- Safe/fit/good/bad conclusions for disease backgrounds.
- Personal sodium, potassium, phosphorus, carbohydrate, or protein targets.
- `nên ăn` / `không nên ăn` treatment-style wording.
- `innerHTML` rendering from user-entered search queries.
- Query-driven script or HTML execution.
- Assumptions for missing data.
- Renaming sodium to salt without an explicit conversion.

Neutral filter wording retained:

- `GI thấp/GI cao`
- `Ít natri/Nhiều natri`
- `Ít purin/Nhiều purin`

These labels remain only as neutral data-filter ranges and not as personal health judgments or disease-treatment advice.

Data and unit notes:

- User-facing data is normalized to `kcal`, `g`, and `mg`.
- Data is displayed per `100g phần ăn được`.
- Missing data is rendered neutrally.
- Numeric zero remains distinct from missing data.
- Sodium is not renamed to salt without explicit conversion.
- Search/filter behavior does not convert missing data into zero-valued hits.

Backlog data QA:

- Source-data/search metadata issue remains noted for code `6014` (`Dầu oliu`).
- Suspicious metadata/name_en can still make query `thịt` pull a noisy result.
- This was not changed in the v20 status round.
- Follow-up should happen in a separate data QA pass rather than in the stable-scope status update.

Source/review trail:

- `reports/needs-qa-polish-triage-v1.md`
- `reports/tool-loc-thuc-pham-qa-polish-v1.md`
- `reports/tool-loc-thuc-pham-final-review-v1.md`

Review milestones:

- QA polish: `fc40e65 test: add food filter page QA`.
- Final review: `3ad3638 test: finalize food filter page review`.

Browser/final QA evidence:

- Route returned `200`.
- No redirect or meta refresh.
- Search and filters worked on desktop and mobile `390 x 844`.
- Desktop and mobile checks showed no horizontal page overflow.
- Detail cards/results stayed within the page width.
- Empty state stayed clear and neutral when no result was found.
- Script/HTML queries did not create dialogs or render HTML.
- Console stayed clean after fresh reload/session review.
- The route stayed within neutral filtering scope and did not show disease-safe wording, treatment advice, or personal nutrient targets.

## QA Final

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:tools`
- `git diff --check`
- `git status --short`

All required QA commands passed in this round after the status/report update.

QA note:

- The first plain `npm run build` hit the known Windows/stdout `EPIPE` issue during long Astro output.
- The build was rerun as `npm run build *> build-v20.log` and passed cleanly.
- `git diff --check` passed for diff content and only emitted the usual Git Windows LF/CRLF warning for `src/pages/cong-cu/index.astro`.

## File Changes

- `src/pages/cong-cu/index.astro`
- `reports/tools-core-status-v20.md`

## Browser Preview

- `/cong-cu/` remains `200`, no redirect, no meta refresh, console clean after fresh reload/session.
- `/cong-cu/loc-thuc-pham/` remains `200`, no redirect, no meta refresh, console clean after fresh reload/session.
- `/cong-cu/` card for **Lọc thực phẩm** now carries badge `Đã kiểm v1`.

## Engine / Data / Dist

- No engine logic changes.
- No source-data bulk edits.
- No formula changes.
- No route logic changes outside the `/cong-cu/` badge/status metadata.
- No `dist` edits.

## Worktree

- Before commit, `git status --short` showed only the intended status-round changes:
  - `M src/pages/cong-cu/index.astro`
  - `?? reports/tools-core-status-v20.md`
- Worktree is expected to be clean after commit.

## Conclusion

- `loc-thuc-pham` is ready to move from `needs_qa_polish` to `stable_v1`.
- Stable scope: `neutral food filtering + data QA shell only`.
- Queue `needs_qa_polish` drops from `9` to `8`.
- P0 `clinical_high_risk` remains fully completed.
- Ready to move to the next tool in the `needs_qa_polish` queue.
- Chưa deploy.
