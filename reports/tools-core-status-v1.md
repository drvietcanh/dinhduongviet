# Tools Core Status v1

Date: 2026-06-11

Branch: `tools-core-status-v1`

Base commit: `1d23196 test: add water intake calculator QA`

Tags created:

- `local-water-tool-v1 -> 1d23196`
- `local-core-tools-v1 -> 1d23196`

## Scope

- Lock the first four core tools as v1.
- Reclassify the 38 tools under `src/pages/cong-cu/`.
- Add light status badges on `/cong-cu/` for tools already checked as v1.
- No formula changes.
- No nutrition data changes.
- No manual `dist` edits.

## Stable v1 Criteria

A tool is marked `stable_v1` only when it has the following:

- A spec, source-lock, or clear audit trail.
- A separated engine or centralized calculation path.
- Dedicated engine tests.
- Safer user-facing wording for clinical or high-risk cases.
- Build/QA and tool tests passing in the latest validation round.
- No arbitrary nutrition data changes.

## Status Legend

- `stable_v1`: ready to treat as a v1 baseline.
- `needs_spec`: usable or partly usable, but needs source/spec review before being promoted.
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
| 5 | `danh-gia-bua-an` | `stub_or_draft` | no | no | no | no | Placeholder route. |
| 6 | `danh-sach-di-cho` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Useful workflow tool; low clinical risk. |
| 7 | `dia-an-lanh-manh` | `clinical_high_risk` | no | audit only | no dedicated pass | no | Disease-specific plate advice needs clinical source and wording review. |
| 8 | `dinh-duong-thai-ky` | `clinical_high_risk` | no | audit only | no dedicated pass | no | Pregnancy advice should be source-locked before promotion. |
| 9 | `doi-don-vi` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Conversion tool; needs edge-case/manual UI QA. |
| 10 | `duong-do-uong` | `needs_spec` | no | audit only | no dedicated pass | limited | Sugar estimates need source labels and safer diabetes wording. |
| 11 | `ke-hoach-bua-an` | `needs_qa_polish` | no | audit only | no dedicated pass | limited | Heuristic meal planning; needs source notes and UI QA. |
| 12 | `khau-phan-don-gian` | `needs_spec` | no | audit only | no dedicated pass | limited | Portion assumptions need source/spec review. |
| 13 | `khau-phan-viet-clinical` | `clinical_high_risk` | no | audit only | no dedicated pass | no | Large clinical tool with disease adjustments; should get spec first. |
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

- `stable_v1`: 4 tools.
- `needs_spec`: 7 tools.
- `needs_implementation`: 0 tools in this pass; existing incomplete routes are classified as `stub_or_draft`.
- `needs_qa_polish`: 14 tools.
- `stub_or_draft`: 5 tools.
- `clinical_high_risk`: 8 tools.

Tools that should not be promoted as complete yet:

- All `stub_or_draft` tools.
- All `clinical_high_risk` tools.
- `needs_spec` tools where the primary output could be interpreted as a nutrition prescription.

## Four Stable v1 Tools

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

## Recommended Next Tools

| Priority | Tool | Why next | Main risk | Recommended path |
|---:|---|---|---|---|
| 1 | `khau-phan-viet-clinical` | Largest clinical surface and likely next strategic tool. | Disease adjustments can look like treatment advice. | Spec first, source-lock, then implementation. |
| 2 | `danh-gia-bua-an` | Currently a stub and overlaps with meal assessment workflows. | Could duplicate GL/carb/meal comparison in unclear ways. | Spec first; decide whether to merge with meal comparison. |
| 3 | `muc-tieu-dinh-duong` | Stub with likely broad target-setting scope. | Could create unsafe macro/calorie prescriptions. | Spec first; define boundaries before implementation. |
| 4 | `so-sanh` | Stub; index suggests it should redirect conceptually to specific comparison tools. | Confusing duplicate route. | Either implement a clear hub or deprecate/redirect. |
| 5 | `tinh-macro` | Stub and likely user-facing demand is high. | Macro targets need source, goals, contraindication wording. | Spec first, then engine. |
| 6 | `tinh-nang-luong` | Stub but overlaps with BMR/TDEE tools. | Confusion with `muc-tieu-can-nang` and calorie burn. | Spec first; decide consolidation. |
| 7 | `theo-doi-duong-huyet` | High clinical value and high risk. | Thresholds/actions vary by patient and medication. | Source-lock first, then safety gate. |
| 8 | `nuoc-muoi-mon-an` | Sodium guidance is important for hypertension/CKD/HF. | Hardcoded sodium estimates and disease wording. | Spec/source first, then data review. |
| 9 | `dinh-duong-thai-ky` | Important clinical audience. | Pregnancy recommendations require trimester-specific sources. | Source-lock/spec first. |
| 10 | `tuong-tac-thuoc-thuc-pham` | Medication safety content needs rigor. | Outdated or incomplete interaction advice can be harmful. | Source and severity taxonomy first. |

## `/cong-cu/` UI Update

Applied a light badge only to the four stable tools:

- `Đã kiểm v1` for `tinh-nhu-cau-dam`.
- `Đã kiểm v1` for `tinh-carb`.
- `Đã kiểm v1` for `tinh-gl-bua-an`.
- `Đã kiểm v1` for `nuoc-uong`.

The existing draft section remains separated for:

- `danh-gia-bua-an`
- `muc-tieu-dinh-duong`
- `so-sanh`
- `tinh-macro`
- `tinh-nang-luong`

No additional warning badges were added to every unfinished tool, to keep the page readable and avoid making the product feel broken. The report remains the source of truth for internal prioritization.

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
- `git diff --check`: pass. Git emitted the existing line-ending warning that `src/pages/cong-cu/index.astro` will be normalized from LF to CRLF when touched.
- `git status --short`: only this report and `src/pages/cong-cu/index.astro` were changed before commit.

## Conclusion

The project now has a clear v1 baseline for four core tools. The next recommended move is `khau-phan-viet-clinical` with a spec-first workflow because it has the largest clinical scope and the highest chance of unsafe interpretation if adjusted directly.
