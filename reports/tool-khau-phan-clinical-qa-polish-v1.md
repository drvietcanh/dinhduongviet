# tool-khau-phan-clinical-qa-polish-v1

Date: 2026-06-11

Scope: QA browser + light polish for `/cong-cu/khau-phan-viet-clinical/`, now presented to users as **Đánh giá khẩu phần Việt**.

No deploy in this round.

## Summary

The tool remains an educational Vietnamese meal assessment, not a clinical meal prescription tool.

Conclusion: **ready to mark `stable_v1` after this QA round**, with the caveat that v2 should improve food search synonym ranking and add richer UI regression coverage.

## Files Reviewed

- `src/lib/vietnamese-meal-assessment.ts`
- `src/pages/cong-cu/khau-phan-viet-clinical.astro`
- `scripts/test-vietnamese-meal-assessment.mjs`
- `reports/tool-khau-phan-clinical-implement-v1.md`
- `reports/tool-khau-phan-clinical-spec-v1.md`

## Code Safety Checks

Confirmed:

- Page no longer uses the old page-level 90-item `dishData`.
- Page no longer uses the old 7-profile `diseaseInfo` table.
- Page no longer applies disease targets through `adjustProt`, `adjustEnergy`, or `sodiumMax`.
- Food data comes from `src/data/nutrition.ts`.
- Recipes are converted through `calculateRecipe(recipe)`.
- Engine has 3 modes: `auto`, `caution`, `clinical_no_auto`.
- `clinical_no_auto` does not return or display personal kcal/protein/carb/sodium/fluid targets.
- Output remains `isPersonalTarget: false`.

Forbidden wording was checked in engine/page/browser output. The following are not present in user-facing output:

- `khẩu phần điều trị chuẩn`
- `bắt buộc ăn`
- `an toàn cho tiểu đường/CKD/gout`
- `tự tăng/giảm insulin`
- `tự ngưng thuốc`
- CKD protein prescription wording such as `bệnh thận nên ăn 0.6-0.8 g/kg`
- `uống nhiều nước` for gout without excluding CKD/HF/fluid restriction

## Engine Tests

Updated `scripts/test-vietnamese-meal-assessment.mjs` to add:

- Older adult -> `caution`.
- Source-review/dietitian-review metadata -> warning is passed through.

Existing coverage already includes:

- Healthy adult + food data -> `auto` with intake totals.
- Mild weight loss/gain -> `caution`.
- Diabetes using insulin/sulfonylurea -> `clinical_no_auto`, no medication adjustment wording.
- CKD -> `clinical_no_auto`, no kidney protein/mineral/fluid target.
- Dialysis -> `clinical_no_auto`.
- Heart failure/fluid restriction -> `clinical_no_auto`.
- Pregnancy/lactation -> `clinical_no_auto`.
- Child/teen -> `clinical_no_auto`.
- Cancer/malnutrition/rapid unintentional weight loss -> `clinical_no_auto`.
- Acute/severe gout -> `clinical_no_auto`.
- Stable gout history -> `caution`.
- Multiple clinical flags -> `clinical_no_auto`, multiple reasons, no silent overwrite.
- Missing data -> warning, no crash.
- Forbidden wording absent from serialized engine output.

Result:

- `npm run test:meal-assessment`: pass.

## Browser UI QA

Browser used: Codex in-app Chromium browser against local preview.

Preview URL:

- `http://localhost:4326/cong-cu/khau-phan-viet-clinical/`

Desktop checks:

- Route loads and H1 is `Đánh giá khẩu phần Việt`.
- Default badge is `Ước tính giáo dục`.
- Search/add works for common queries: cơm, bún, phở, bánh mì, thịt, cá, rau.
- Added 6 items and totals updated for kcal/carb/protein/fat.
- Remove button removed an item and totals recalculated.
- Reset button cleared selected items.
- `mild_weight_loss` changed badge to `Tham khảo có lưu ý`.
- Diabetes medication risk changed badge to `Cần cá thể hóa`.
- Multiple clinical flags stayed `Cần cá thể hóa` and showed multiple reasons.
- Clinical result did not show personal target text or disease-specific target numbers.
- Invalid grams 0 and negative values produced warnings and did not crash.
- Text input is rejected by the browser because the field is `type="number"`.
- Page output did not contain forbidden wording.

Mobile checks:

- Viewport: 390 x 844.
- Search/add still worked.
- Clinical badge displayed as `Cần cá thể hóa`.
- No horizontal overflow.
- Main touch targets observed:
  - Search input: 42 px high.
  - Add button: 40 px high.
  - Gram input: 38 px high.
  - Flag label: 38 px high.
  - Remove button: 40 px high.
- Clinical result clearly communicated that the totals are for discussion/care personalization, not a disease treatment prescription.
- No forbidden wording in mobile page output.

## Polish Applied

Changed only page search ranking:

- Prefer Vietnamese diacritic-aware exact/word-start matches before accent-stripped substring matches.
- This prevents common misses such as:
  - `cơm` ranking `cốm` first.
  - `phở` ranking `phô mai` first.

No formula changes.

No nutrition data changes.

No disease target added.

No clinical prescription wording added.

## Current Data Source

The page builds selectable items from:

- `foods` in `src/data/nutrition.ts`.
- `recipes` in `src/data/nutrition.ts`, converted via `calculateRecipe(recipe)`.

Warnings are based on missing optional fields and metadata such as low confidence, recipe estimate, source review needed, or dietitian review needed.

## Remaining Risks For v2

- Search ranking is improved but still simple; synonym-aware search should be added later.
- UI test is manual/browser-driven in this round; a scripted browser regression test could lock the main flows.
- Food/recipe data completeness varies; missing sodium/fiber/sugar warnings remain important.
- The route slug still contains `clinical`; changing URLs would need redirect planning.
- The tool is stable for educational assessment, but disease-specific meal planning should remain out of scope until separate source-lock/spec work exists.

## QA Commands

Final QA command set is run after this report:

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:protein`
- `npm run test:carb`
- `npm run test:gl`
- `npm run test:water`
- `npm run test:meal-assessment`
- `npm run test:tools`
- `git diff --check`
- `git status --short`

