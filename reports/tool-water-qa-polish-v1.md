# Tool Water QA Polish v1

Date: 2026-06-09

Branch: `tool-water-qa-polish-v1`

Base implement commit: `1ddb7f1 feat: implement safer water intake calculator`

## Scope

- QA and light polish for `/cong-cu/nuoc-uong/`.
- No formula/range changes.
- No nutrition data changes.
- No deployment.

## Engine Review

Reviewed:

- `src/lib/water-intake-calculator.ts`
- `src/pages/cong-cu/nuoc-uong.astro`
- `scripts/test-water-intake.mjs`
- `reports/tool-water-implement-v1.md`
- `reports/tool-water-spec-v1.md`

Findings:

- The page delegates calculation to `calculateWaterIntake`.
- No remaining page-level formula pattern such as `base * activity * weather + breastfeedingExtra`.
- The engine keeps the three required modes: `auto`, `caution`, `clinical_no_auto`.
- `clinical_no_auto` returns no personal liter target and `isPersonalTarget: false`.
- Total water and estimated drinking water are displayed separately.
- The food-water assumption is worded as an estimate, not an absolute value.
- Forbidden wording was not found in user-facing source text: "uống càng nhiều càng tốt", "bắt buộc uống", "đạt chuẩn tuyệt đối".

## Engine Test Cases

`npm run test:water` passed after adding coverage for:

- Healthy 60 kg -> `auto`, 1.8-2.1 L total water/day.
- Healthy 70 kg -> `auto`, 2.1-2.45 L total water/day.
- Invalid weights: empty/0/negative/NaN/Infinity/too high -> friendly errors.
- High activity/hot/heavy sweating -> `caution`.
- Heart failure -> `clinical_no_auto`.
- CKD -> `clinical_no_auto`.
- Dialysis -> `clinical_no_auto`.
- Cirrhosis/ascites, edema, fluid restriction -> `clinical_no_auto`.
- Hyponatremia -> `clinical_no_auto`.
- Diuretics alone -> `caution`.
- Diuretics with heart failure/CKD/edema/hyponatremia -> `clinical_no_auto`.
- Child -> `clinical_no_auto`.
- Acute severe illness -> `clinical_no_auto`.
- Output text does not contain forbidden hard-advice wording.

## Browser/UI QA

Preview URL used:

- `http://localhost:4324/cong-cu/nuoc-uong/`

Browser checks completed:

- Page loads with title `Tính nhu cầu nước uống - Dinh Dưỡng Việt`.
- Initial healthy 60 kg result renders with total water and drinking-water cards.
- Desktop layout had no horizontal overflow at 1280px viewport.
- Warning/source cards include the acute safety warning for dehydration, vomiting, severe diarrhea, altered consciousness, dyspnea, or rapidly worsening edema.
- User-facing body text did not contain forbidden wording.
- Browser plugin clipboard limitations prevented reliable scripted form entry via `fill`; logic coverage is therefore anchored by engine tests, with UI render/text/layout checked from the local preview DOM.

## Polish Applied

- Increased red-flag checkbox label touch target:
  - Desktop label min-height from 36px to 42px.
  - Mobile label min-height to 44px.
  - Mobile checkbox size to 20px.
- Changed result subline from `total water` to `Tổng nước`.
- Changed food-water note to `Tổng nước (total water)` for clearer Vietnamese wording while retaining the source term.

## Formula/Data Changes

- Formula changed: no.
- Nutrition data changed: no.
- Dist edited manually: no.

## Remaining Risks For v2

- UI form interaction could be covered later by a project-owned Playwright/Cypress setup instead of relying on the browser plugin.
- Source-lock for water remains intentionally conservative; stronger condition-specific fluid guidance should wait for clinical review.

## Conclusion

The water intake calculator is ready to close as v1 after full repository QA remains green.
