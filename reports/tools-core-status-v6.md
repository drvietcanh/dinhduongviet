# Tools Core Status v6

Date: 2026-06-23

Branch: `tools-core-status-v6`

Base commit: `e2fe5e1 test: finalize nutrition comparison hub review`

Tag created:

- `local-so-sanh-hub-final-review-v1 -> e2fe5e1`

## Scope

- Promote `so-sanh` to `stable_v1` after stash review, QA polish, and final review.
- Keep total tool count at `38`.
- Update `/cong-cu/` with a light `Đã kiểm v1` badge for **So sánh dinh dưỡng**.
- No engine logic changes.
- No formula changes.
- No nutrition data changes.
- No manual `dist` edits.
- No route logic changes to `muc-tieu-dinh-duong`, `muc-tieu-can-nang`, `tinh-macro`, `tinh-nang-luong`, `so-sanh-bua-an`, or `so-sanh-thuc-pham`.

## Stable v1 Criteria

A tool is marked `stable_v1` only when it has:

- A spec, source-lock, or clear audit trail.
- A separated engine, centralized calculation path, or deliberately no calculation when the tool is a hub.
- Dedicated engine tests when the tool calculates.
- Safer user-facing wording for clinical or high-risk cases.
- Browser/local UI QA for the main flows.
- Build/QA and tool tests passing in the latest validation round.
- No arbitrary nutrition data changes.

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
| 5 | `danh-gia-bua-an` | `stable_v1` | not needed, hub only | spec, hub, QA reports | yes, browser desktop/mobile | yes, as navigation hub only | Route `/cong-cu/danh-gia-bua-an/`. User-facing name: **Đánh giá bữa ăn**. No calculator, meal score, disease target, engine, formula, or nutrition data. |
| 6 | `danh-sach-di-cho` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Useful workflow tool; low clinical risk. |
| 7 | `dia-an-lanh-manh` | `clinical_high_risk` | no | audit only | no dedicated pass | no | Disease-specific plate advice needs clinical source and wording review. |
| 8 | `dinh-duong-thai-ky` | `clinical_high_risk` | no | audit only | no dedicated pass | no | Pregnancy advice should be source-locked before promotion. |
| 9 | `doi-don-vi` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Conversion tool; needs edge-case/manual UI QA. |
| 10 | `duong-do-uong` | `needs_spec` | no | audit only | no dedicated pass | limited | Sugar estimates need source labels and safer diabetes wording. |
| 11 | `ke-hoach-bua-an` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Heuristic meal planning; needs source notes and UI QA. |
| 12 | `khau-phan-don-gian` | `needs_spec` | no | audit only | no dedicated pass | limited | Portion assumptions need source/spec review. |
| 13 | `khau-phan-viet-clinical` | `stable_v1` | yes, `npm run test:meal-assessment` | spec, implement, QA reports | yes, local browser QA | yes, within scope | User-facing name: **Đánh giá khẩu phần Việt**. Stable only as education/meal assessment, not disease diet prescription. |
| 14 | `lap-thuc-don-tuan` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Meal planner appears usable but needs testable rules and UI QA. |
| 15 | `loc-thuc-pham` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Data filtering tool; needs QA around tags/ranges. |
| 16 | `muc-tieu-can-nang` | `stable_v1` | yes, `npm run test:nutrition-goal` | audit/spec, source-lock, safety patch, QA, final review reports | yes, desktop and 390px-class headless Chrome QA | yes, as safe weight goal orientation only | Uses `nutrition-goal-planner` safety shell; no BMR/TDEE, `7700 kcal/kg`, deficit/surplus, numerical kcal/macro targets, disease macro table, treatment prescription, or promised weight-change speed. |
| 17 | `muc-tieu-dinh-duong` | `stable_v1` | yes, `npm run test:nutrition-goal` | spec, source-lock, engine shell, implement, QA, final review reports | yes, browser/headless 390px-class QA | yes, as safe nutrition goal orientation only | Route `/cong-cu/muc-tieu-dinh-duong/`. Uses `nutrition-goal-planner` safety shell with `auto`/`caution`/`clinical_no_auto`; no BMR/TDEE, kcal target, macro target, deficit/surplus, or disease macro table. |
| 18 | `nhat-ky` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Daily total workflow; needs tests around totals and targets. |
| 19 | `nhu-cau-dinh-duong-tre-em` | `clinical_high_risk` | no | audit only | no dedicated pass | no | Pediatric needs require age-specific source/spec review. |
| 20 | `nuoc-muoi-mon-an` | `clinical_high_risk` | no | audit only | no dedicated pass | no | Sodium/salt advice touches hypertension, CKD, heart failure. |
| 21 | `nuoc-uong` | `stable_v1` | yes, `npm run test:water` | `tool-water-spec-v1`, QA report | yes, local preview | yes | Safety gate, `auto`/`caution`/`clinical_no_auto`, no personal target for restricted-fluid groups. |
| 22 | `so-sanh` | `stable_v1` | not needed, hub only | stash review, QA polish, final review reports | yes, Browser plugin desktop/mobile 390px | yes, as navigation hub only | Route `/cong-cu/so-sanh/`. User-facing name: **So sánh dinh dưỡng**. Hub only for choosing a comparison tool; no calculator, new calculation form, comparison result, score, health conclusion, treatment advice, engine, formula, or nutrition data change. |
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
| 37 | `tuong-tac-thuoc` | `clinical_high_risk` | no | audit only | no dedicated pass | no | Medication-facing content needs source, severity, update date. |
| 38 | `tuong-tac-thuoc-thuc-pham` | `clinical_high_risk` | no | audit only | no dedicated pass | no | Medication-food interaction advice needs source and action taxonomy. |

## Summary Counts

Counts were recalculated directly from all 38 rows in the v5 status table. The v5 row-level counts were:

- `stable_v1`: 8.
- `needs_spec`: 5.
- `needs_qa_polish`: 13.
- `stub_or_draft`: 3.
- `clinical_high_risk`: 9.

In v5, `so-sanh` was classified as `stub_or_draft`. This round moves only that row from `stub_or_draft` to `stable_v1`; all other row-level statuses remain unchanged.

- `stable_v1`: 9 tools.
- `needs_spec`: 5 tools.
- `needs_implementation`: 0 tools in this pass; existing incomplete routes are classified as `stub_or_draft`.
- `needs_qa_polish`: 13 tools.
- `stub_or_draft`: 2 tools.
- `clinical_high_risk`: 9 tools.

Total: `38` tools.

Tools that should not be promoted as complete yet:

- All remaining `stub_or_draft` tools.
- All remaining `clinical_high_risk` tools.
- `needs_spec` tools where the primary output could be interpreted as a nutrition prescription.

## Nine Stable v1 Tools

1. `tinh-nhu-cau-dam`
2. `tinh-carb`
3. `tinh-gl-bua-an`
4. `nuoc-uong`
5. `khau-phan-viet-clinical` / **Đánh giá khẩu phần Việt**
6. `danh-gia-bua-an` / **Đánh giá bữa ăn** -- stable navigation hub only
7. `muc-tieu-dinh-duong` / **Mục tiêu dinh dưỡng** -- stable safe nutrition goal orientation only
8. `muc-tieu-can-nang` / **Mục tiêu cân nặng** -- stable safe weight goal orientation only
9. `so-sanh` / **So sánh dinh dưỡng** -- stable navigation hub only

## `so-sanh` Stable Scope

Status: `stable_v1`.

Route:

- `/cong-cu/so-sanh/`

Stable v1 scope:

- Navigation hub only.
- Helps users choose a suitable comparison tool.
- Links to:
  - `/cong-cu/so-sanh-thuc-pham`
  - `/cong-cu/so-sanh-bua-an`
- Child route badges remain `Đang hoàn thiện` unless those routes pass their own stable review.
- User-facing wording says this is a hub for comparison tools, not a completed calculator.

It is not:

- A calculator.
- A kcal or macro calculator.
- A new comparison engine.
- A meal score or health score tool.
- A treatment advice tool.
- A health conclusion tool.

It does not display or enable:

- A new calculation form on the hub.
- A comparison result on the hub.
- Health scoring.
- Disease-specific targets.
- Treatment recommendations.
- New engine logic.
- New formulas.
- Nutrition data changes.

Source/review trail:

- `reports/tool-so-sanh-hub-stash-review-v1.md`
- `reports/tool-so-sanh-hub-qa-polish-v1.md`
- `reports/tool-so-sanh-hub-final-review-v1.md`

Browser/final QA evidence:

- Route returned `200`.
- No redirect or meta refresh.
- H1 is `So sánh dinh dưỡng`.
- Main content has no form/input/select/textarea.
- Desktop/default viewport had no horizontal overflow.
- Mobile `390 x 844` Browser check had no horizontal overflow.
- Hub card click to `/cong-cu/so-sanh-bua-an` navigated correctly.
- Links to `/cong-cu/so-sanh-thuc-pham` and `/cong-cu/so-sanh-bua-an` both loaded in preview.
- Forbidden hub wording was not found in rendered hub output.

## `muc-tieu-dinh-duong` Stable Scope

Status: `stable_v1`.

Route:

- `/cong-cu/muc-tieu-dinh-duong/`

Stable v1 scope:

- Safe nutrition goal orientation.
- Safety-gated mode:
  - `auto`
  - `caution`
  - `clinical_no_auto`
- Red flags move high-risk users to `clinical_no_auto`.
- BMI is used as a screening/safety signal, not a diagnosis.
- Protein reference appears only when the engine allows it and is labeled `Khoảng đạm tham khảo`.
- User-facing wording says results are reference orientation and depend on user input.

It is not:

- A kcal calculator.
- A macro calculator.
- A BMR/TDEE calculator.
- A weight-loss prescription tool.
- A disease-specific nutrition target tool.
- A replacement for individualized physician or dietitian advice.

It does not display or enable:

- BMR.
- TDEE.
- `7700 kcal/kg`.
- deficit.
- surplus.
- kcal target as a number.
- macro target as a number.
- fiber target.
- sugar target.
- sodium target.
- disease-specific macro table.
- treatment prescription.

Engine:

- `src/lib/nutrition-goal-planner.ts`

Test:

- `npm run test:nutrition-goal`

Source/spec trail:

- `reports/tool-muc-tieu-dinh-duong-spec-v1.md`
- `reports/nutrition-goal-source-lock-v1.md`
- `reports/nutrition-goal-planner-shell-v1.md`
- `reports/tool-muc-tieu-dinh-duong-implement-v1.md`
- `reports/tool-muc-tieu-dinh-duong-qa-polish-v1.md`
- `reports/tool-muc-tieu-dinh-duong-final-review-v1.md`

Browser/final QA evidence:

- Route returned `200`.
- No redirect or meta refresh.
- H1 is `Mục tiêu dinh dưỡng`.
- Form includes age, sex, weight, height, activity level, goal, vegetarian pattern, and clinical red flags.
- 390px-class headless Chrome check had no horizontal overflow.
- Final UI cases passed:
  - healthy maintain -> `Tham khảo cơ bản`.
  - mild weight loss -> `Cần thận trọng`, no deficit number.
  - BMI `<18.5` -> `Cần cá thể hóa`, no highlighted target.
  - CKD -> `Cần cá thể hóa`.
  - invalid input -> friendly error.
- Forbidden wording was not found in rendered route output.

Technical note:

- Strings such as `deficit`, `surplus`, and `mục tiêu kcal` still exist inside `src/lib/nutrition-goal-planner.ts` as internal engine warnings/status text. The current page maps engine reasons into safer Vietnamese UI wording and does not render those strings user-facing.

## `muc-tieu-can-nang` Stable Scope

Status: `stable_v1`.

Route:

- `/cong-cu/muc-tieu-can-nang/`

Stable v1 scope:

- Safe weight goal orientation.
- Safety-gated mode:
  - `auto`
  - `caution`
  - `clinical_no_auto`
- Red flags move high-risk users to `clinical_no_auto`.
- BMI is used only as a screening/safety signal.
- Protein reference appears only when the shared engine allows it and is labeled `Khoảng đạm tham khảo` with a note that it is not a personal prescription.
- User-facing wording states that information is reference orientation, depends on user input, and does not replace individualized advice.

It is not:

- A weight-loss or weight-gain calculator.
- A kcal or macro calculator.
- A BMR/TDEE calculator.
- A disease-specific target tool.
- A treatment prescription tool.
- A promise of weight-loss or weight-gain speed.

It does not display or enable:

- BMR.
- TDEE.
- `7700 kcal/kg`.
- deficit.
- surplus.
- kcal target as a number.
- macro target as a number.
- disease-specific macro table.
- treatment prescription.
- target weight, change duration, or promised kg/week output.

Engine:

- `src/lib/nutrition-goal-planner.ts`

Test:

- `npm run test:nutrition-goal`

Source/spec trail:

- `reports/tool-muc-tieu-can-nang-audit-spec-v1.md`
- `reports/nutrition-goal-source-lock-v1.md`
- `reports/nutrition-goal-planner-shell-v1.md`
- `reports/tool-muc-tieu-can-nang-safety-patch-v1.md`
- `reports/tool-muc-tieu-can-nang-qa-polish-v1.md`
- `reports/tool-muc-tieu-can-nang-final-review-v1.md`

Browser/final QA evidence:

- Route returned `200` with no redirect or meta refresh.
- H1 is `Mục tiêu cân nặng`.
- Desktop and mobile `390 x 844` checks had no horizontal overflow.
- Input, checkbox, button, safety note, and result layout passed the final UX review.
- Final UI cases passed:
  - healthy maintain -> `Tham khảo cơ bản`.
  - mild weight loss -> `Cần thận trọng`, no deficit number or promised speed.
  - mild weight gain -> `Cần thận trọng`, no surplus number.
  - BMI `<18.5` -> `Cần cá thể hóa`, no highlighted target.
  - CKD or dialysis -> `Cần cá thể hóa`, no protein target.
  - invalid age/weight/height -> friendly error, no crash.
- Forbidden wording and disabled numerical target output were not found in rendered route output.

## `/cong-cu/` UI Update

Updated the **So sánh dinh dưỡng** card:

- Route remains `/cong-cu/so-sanh`.
- Badge: `Đã kiểm v1`.
- Description remains: `Hub chọn công cụ phù hợp để so sánh thực phẩm hoặc bữa ăn.`
- The card remains in **Tra cứu và so sánh thực phẩm**.

The card does not describe the route as:

- a calculator.
- a kcal/macro calculator.
- a scoring tool.
- a prescription tool.
- a health conclusion tool.
- a treatment tool.

The child route cards were not promoted:

- `/cong-cu/so-sanh-thuc-pham` remains without a `Đã kiểm v1` badge.
- `/cong-cu/so-sanh-bua-an` remains without a `Đã kiểm v1` badge.

## No Out-of-Scope Changes

No changes were made to:

- `src/pages/cong-cu/muc-tieu-dinh-duong.astro`
- `src/pages/cong-cu/muc-tieu-can-nang.astro`
- `src/pages/cong-cu/tinh-macro.astro`
- `src/pages/cong-cu/tinh-nang-luong.astro`
- `src/pages/cong-cu/so-sanh-bua-an.astro`
- `src/pages/cong-cu/so-sanh-thuc-pham.astro`
- engine logic.
- formulas.
- nutrition data.
- `dist`.
- the out-of-scope stash.

## QA Results

Final QA is run after this report:

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:tools`
- `git diff --check`
- `git status --short`

Quick checks in this round:

- `/cong-cu/` has a **So sánh dinh dưỡng** card with the `Đã kiểm v1` badge and hub description.
- `/cong-cu/so-sanh/` remains a real route that returns `200`, with no redirect or meta refresh.
- Hub output remains scoped to navigation only.
- Rendered hub output does not show a new calculation form, comparison result, score, health conclusion, treatment recommendation, or forbidden wording.
- `/cong-cu/so-sanh-thuc-pham` and `/cong-cu/so-sanh-bua-an` were not promoted by this status update.

## Recommended Next Tools

| Priority | Tool | Why next | Main risk | Recommended path |
|---:|---|---|---|---|
| 1 | `tra-cuu-thuc-pham-viet` | Core data lookup supports many workflows. | Missing values, units, and source-status confusion. | Dedicated QA polish. |
| 2 | `so-sanh-bua-an` | Linked from stable meal and comparison hubs. | Comparison totals and assumptions need QA. | QA/spec light pass, then polish. |
| 3 | `tinh-macro` | Currently draft/redirect and should not become an independent macro calculator. | Duplicate macro formulas and target-like output. | Spec/source-lock first; later reuse shared engine. |
| 4 | `tinh-nang-luong` | Currently draft/redirect and overlaps energy target planning. | Separate BMR/TDEE implementation without source-lock. | Spec/source-lock first; later reuse shared engine. |
| 5 | `bmi` | Widely used screening surface but still lacks a dedicated source-lock/final QA trail. | Cutoff and risk wording may be overinterpreted. | Source-lock Asian BMI/waist cutoffs, then QA polish. |

## Conclusion

The project now has **9 stable v1 tools**. `so-sanh` is stable only as a navigation hub for choosing a comparison tool. It should not be treated as a calculator, kcal/macro tool, scoring tool, health conclusion tool, treatment advice tool, new engine, formula change, or nutrition data change.
