# Tools Core Status v3

Date: 2026-06-11

Branch: `tools-core-status-v3`

Base commit: `3936dd8 test: add meal evaluation hub QA`

Tag created:

- `local-danh-gia-bua-an-hub-v1 -> 3936dd8`

## Scope

- Promote `danh-gia-bua-an` to `stable_v1` after hub implementation and browser QA.
- Keep total tool count at `38`.
- Update `/cong-cu/` with a light `Đã kiểm v1` badge for **Đánh giá bữa ăn**.
- No formula changes.
- No engine changes.
- No nutrition data changes.
- No manual `dist` edits.

## Stable v1 Criteria

A tool is marked `stable_v1` only when it has the following:

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
| 16 | `muc-tieu-can-nang` | `needs_spec` | no | audit only | no dedicated pass | limited | BMR/TDEE/deficit advice needs source and safety guardrails. |
| 17 | `muc-tieu-dinh-duong` | `stub_or_draft` | no | no | no | no | Placeholder route. |
| 18 | `nhat-ky` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Daily total workflow; needs tests around totals and targets. |
| 19 | `nhu-cau-dinh-duong-tre-em` | `clinical_high_risk` | no | audit only | no dedicated pass | no | Pediatric needs require age-specific source/spec review. |
| 20 | `nuoc-muoi-mon-an` | `clinical_high_risk` | no | audit only | no dedicated pass | no | Sodium/salt advice touches hypertension, CKD, heart failure. |
| 21 | `nuoc-uong` | `stable_v1` | yes, `npm run test:water` | `tool-water-spec-v1`, QA report | yes, local preview | yes | Safety gate, `auto`/`caution`/`clinical_no_auto`, no personal target for restricted-fluid groups. |
| 22 | `so-sanh` | `stub_or_draft` | no | no | no | no | Placeholder route. |
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

- `stable_v1`: 6 tools.
- `needs_spec`: 7 tools.
- `needs_implementation`: 0 tools in this pass; existing incomplete routes are classified as `stub_or_draft`.
- `needs_qa_polish`: 14 tools.
- `stub_or_draft`: 4 tools.
- `clinical_high_risk`: 7 tools.

Total: `38` tools.

Tools that should not be promoted as complete yet:

- All remaining `stub_or_draft` tools.
- All remaining `clinical_high_risk` tools.
- `needs_spec` tools where the primary output could be interpreted as a nutrition prescription.

## Six Stable v1 Tools

### `tinh-nhu-cau-dam`

- Status: `stable_v1`.
- Dedicated engine: `src/lib/protein-requirement.ts`.
- Test: `npm run test:protein`.
- Source/spec trail: `tool-protein-source-lock-v1`, `tool-protein-spec-v1`, implementation and QA reports.
- Clinical safety: high-risk protein groups can return `clinical_no_auto` instead of a personal target.

### `tinh-carb`

- Status: `stable_v1`.
- Dedicated engine: `src/lib/carb-calculator.ts`.
- Test: `npm run test:carb`.
- Source/spec trail: `tool-carb-spec-v1`, implementation and QA reports.
- Clinical safety: avoids insulin/medication adjustment wording and frames results as carb counting support.

### `tinh-gl-bua-an`

- Status: `stable_v1`.
- Dedicated engine: `src/lib/glycemic-load-calculator.ts`, reusing the carb engine.
- Test: `npm run test:gl`.
- Source/spec trail: `tool-gl-spec-v1`, implementation and QA reports.
- Clinical safety: exposes GI match quality and keeps GL as an estimate, not a treatment instruction.

### `nuoc-uong`

- Status: `stable_v1`.
- Dedicated engine: `src/lib/water-intake-calculator.ts`.
- Test: `npm run test:water`.
- Source/spec trail: `tool-water-spec-v1`, implementation and QA reports.
- Clinical safety: separates total water from estimated drinking water and blocks personal targets for heart failure, CKD, dialysis, cirrhosis/ascites, edema, hyponatremia, fluid restriction, children, and acute severe illness.

### `khau-phan-viet-clinical` / **Đánh giá khẩu phần Việt**

- Status: `stable_v1`.
- Route: `/cong-cu/khau-phan-viet-clinical/`.
- User-facing name: **Đánh giá khẩu phần Việt**.
- Dedicated engine: `src/lib/vietnamese-meal-assessment.ts`.
- Test: `npm run test:meal-assessment`.
- Source/spec trail: `tool-khau-phan-clinical-spec-v1`, implementation report, QA/polish report.
- Stable v1 scope:
  - Educational Vietnamese meal assessment.
  - Intake totals from selected foods/recipes.
  - Missing-data and estimated-data warnings.
  - No therapeutic disease meal prescription.
  - No personal disease targets for kcal/protein/carb/sodium/fluid.
  - High-risk flags return `clinical_no_auto`.
- Data source: `src/data/nutrition.ts`; recipes via `calculateRecipe(recipe)`.

### `danh-gia-bua-an` / **Đánh giá bữa ăn**

- Status: `stable_v1`.
- Route: `/cong-cu/danh-gia-bua-an/`.
- User-facing name: **Đánh giá bữa ăn**.
- Stable v1 scope: navigation hub only.
- It is not:
  - A calculator.
  - A meal score.
  - A clinical meal assessment engine.
  - A disease-targeting tool.
- It adds no:
  - Formula.
  - Engine.
  - Score.
  - Disease target.
  - Nutrition data.
- Hub cards:
  - `khau-phan-viet-clinical` / **Đánh giá khẩu phần Việt**: `Đã kiểm v1`.
  - `tinh-carb`: `Đã kiểm v1`.
  - `tinh-gl-bua-an`: `Đã kiểm v1`.
  - `tinh-nhu-cau-dam`: `Đã kiểm v1`.
  - `nuoc-uong`: `Đã kiểm v1`.
  - `so-sanh-bua-an`: `Đang hoàn thiện`.
  - `tra-cuu-thuc-pham-viet`: `Đang hoàn thiện`.
- Browser QA:
  - Route returned `200`.
  - No redirect or meta refresh.
  - Seven cards rendered.
  - All seven card links clicked to the expected route.
  - Desktop had no horizontal overflow.
  - Mobile viewport `390 x 844` had no horizontal overflow.
  - No forbidden scoring/clinical wording in rendered text.

## Recommended Next Tools

| Priority | Tool | Why next | Main risk | Recommended path |
|---:|---|---|---|---|
| 1 | `muc-tieu-dinh-duong` | Broad target-setting stub that users may treat as a personal prescription. | Unsafe macro/calorie targets if implemented loosely. | Spec first; define healthy vs clinical no-auto boundaries. |
| 2 | `so-sanh` | Stub and likely should be a hub for comparison tools. | Duplicate route with unclear promise. | Decide hub vs redirect; then implement lightly. |
| 3 | `tinh-macro` | High user demand and currently draft. | Macro targets can be mistaken for treatment targets. | Source-lock/spec first, then engine with clinical gate. |
| 4 | `tinh-nang-luong` | Stub but important for calorie planning. | Overlap with `muc-tieu-can-nang` and TDEE tools. | Spec first; consolidate naming and formulas. |
| 5 | `tra-cuu-thuc-pham-viet` | Core data lookup is used by many workflows. | Missing values, units, and source-status labels can confuse users. | QA polish first; likely low formula risk. |
| 6 | `so-sanh-bua-an` | Linked from the stable meal hub as related. | Comparison totals and recipe assumptions need QA. | QA/spec light pass, then polish. |
| 7 | `theo-doi-duong-huyet` | High clinical value. | Diabetes thresholds/actions vary by medication and patient. | Source-lock first, with no medication adjustment advice. |
| 8 | `nuoc-muoi-mon-an` | Sodium guidance is useful and clinically sensitive. | Hypertension, CKD, HF sodium advice needs personalization. | Source/spec first, then data and wording QA. |
| 9 | `dinh-duong-thai-ky` | Important audience and frequent need. | Pregnancy advice requires trimester and risk-specific sources. | Source-lock/spec first. |
| 10 | `chi-so-gi` | GI lookup supports carb/GL tools. | Diabetes interpretation can become overly deterministic. | Curate GI source table and wording. |

## `/cong-cu/` UI Update

Updated the **Đánh giá bữa ăn** card:

- Route remains `/cong-cu/danh-gia-bua-an`.
- Badge: `Đã kiểm v1`.
- Description: `Hub chọn công cụ phù hợp để đánh giá bữa ăn: khẩu phần, carb, GL, đạm, nước và so sánh món.`
- The card is no longer shown in the draft group.

The UI does not describe this route as:

- A calculator.
- A meal scoring tool.
- A disease-targeting tool.

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

The project now has **6 stable v1 tools**. `danh-gia-bua-an` is stable only as a navigation hub that routes users to the appropriate checked tool. It should not be treated as a calculator, meal score, or clinical nutrition engine.

The next best move is to continue cleaning overlapping draft routes, especially `muc-tieu-dinh-duong`, `so-sanh`, `tinh-macro`, and `tinh-nang-luong`, while keeping clinical high-risk tools on a source-lock/spec-first path.
