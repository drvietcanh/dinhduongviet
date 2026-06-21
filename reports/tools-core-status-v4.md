# Tools Core Status v4

Date: 2026-06-21

Branch: `tools-core-status-v4`

Base commit: `f6ece4e test: finalize nutrition goal page review`

Tag created:

- `local-muc-tieu-dinh-duong-final-review-v1 -> f6ece4e`

## Scope

- Promote `muc-tieu-dinh-duong` to `stable_v1` after implementation, QA polish, and final review.
- Keep total tool count at `38`.
- Update `/cong-cu/` with a light `Đã kiểm v1` badge for **Mục tiêu dinh dưỡng**.
- No engine logic changes.
- No formula changes.
- No nutrition data changes.
- No manual `dist` edits.
- No changes to `muc-tieu-can-nang`, `tinh-macro`, or `tinh-nang-luong`.

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
| 16 | `muc-tieu-can-nang` | `needs_spec` | no | audit only | no dedicated pass | limited | BMR/TDEE/deficit advice needs source and safety guardrails. |
| 17 | `muc-tieu-dinh-duong` | `stable_v1` | yes, `npm run test:nutrition-goal` | spec, source-lock, engine shell, implement, QA, final review reports | yes, browser/headless 390px-class QA | yes, as safe nutrition goal orientation only | Route `/cong-cu/muc-tieu-dinh-duong/`. Uses `nutrition-goal-planner` safety shell with `auto`/`caution`/`clinical_no_auto`; no BMR/TDEE, kcal target, macro target, deficit/surplus, or disease macro table. |
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

Counts were recalculated from `tools-core-status-v3` by moving only `muc-tieu-dinh-duong` from `stub_or_draft` to `stable_v1`.

- `stable_v1`: 7 tools.
- `needs_spec`: 7 tools.
- `needs_implementation`: 0 tools in this pass; existing incomplete routes are classified as `stub_or_draft`.
- `needs_qa_polish`: 14 tools.
- `stub_or_draft`: 3 tools.
- `clinical_high_risk`: 7 tools.

Total: `38` tools.

Tools that should not be promoted as complete yet:

- All remaining `stub_or_draft` tools.
- All remaining `clinical_high_risk` tools.
- `needs_spec` tools where the primary output could be interpreted as a nutrition prescription.

## Seven Stable v1 Tools

1. `tinh-nhu-cau-dam`
2. `tinh-carb`
3. `tinh-gl-bua-an`
4. `nuoc-uong`
5. `khau-phan-viet-clinical` / **Đánh giá khẩu phần Việt**
6. `danh-gia-bua-an` / **Đánh giá bữa ăn** -- stable navigation hub only
7. `muc-tieu-dinh-duong` / **Mục tiêu dinh dưỡng** -- stable safe nutrition goal orientation only

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

## `/cong-cu/` UI Update

Updated the **Mục tiêu dinh dưỡng** card:

- Route remains `/cong-cu/muc-tieu-dinh-duong`.
- Badge: `Đã kiểm v1`.
- Description remains: `Định hướng mục tiêu dinh dưỡng tham khảo với cờ cần cá thể hóa.`
- The card is moved out of the draft group and into **Năng lượng và khẩu phần**.

The card does not describe the route as:

- a kcal/macro calculator.
- a weight-loss tool.
- a prescription tool.
- a standard target tool.
- a treatment target tool.

## No Out-of-Scope Changes

No changes were made to:

- `src/pages/cong-cu/muc-tieu-can-nang.astro`
- `src/pages/cong-cu/tinh-macro.astro`
- `src/pages/cong-cu/tinh-nang-luong.astro`
- engine logic.
- formulas.
- nutrition data.
- `dist`.
- the out-of-scope `so-sanh` stash.

## QA Results

Final QA is run after this report:

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:nutrition-goal`
- `npm run test:tools`
- `git diff --check`
- `git status --short`

Quick checks in this round:

- `/cong-cu/` has a **Mục tiêu dinh dưỡng** card.
- `/cong-cu/muc-tieu-dinh-duong/` remains a real route, not a redirect stub.
- User-facing route output remains scoped to orientation, mode, BMI screening, warnings, and safe protein reference.

## Recommended Next Tools

| Priority | Tool | Why next | Main risk | Recommended path |
|---:|---|---|---|---|
| 1 | `muc-tieu-can-nang` | It still contains stronger BMR/TDEE, deficit/surplus, and disease macro outputs than the new safe goal engine. | Conflicting unsafe target advice. | Refactor or demote after source-lock; route should reuse `nutrition-goal-planner` or be softened. |
| 2 | `tinh-macro` | Currently draft/redirect and should not become an independent macro calculator. | Duplicate macro formulas and target-like output. | Spec/source-lock first; later reuse shared engine. |
| 3 | `tinh-nang-luong` | Currently draft/redirect and overlaps energy target planning. | Separate BMR/TDEE implementation without source-lock. | Spec/source-lock first; later reuse shared engine. |
| 4 | `tra-cuu-thuc-pham-viet` | Core data lookup supports many workflows. | Missing values, units, and source-status confusion. | Dedicated QA polish. |
| 5 | `so-sanh-bua-an` | Linked from stable meal hub. | Comparison totals and assumptions need QA. | QA/spec light pass, then polish. |

## Conclusion

The project now has **7 stable v1 tools**. `muc-tieu-dinh-duong` is stable only as a safe nutrition goal orientation tool. It should not be treated as a kcal/macro calculator, BMR/TDEE calculator, weight-loss prescription tool, or disease-specific nutrition target tool.
