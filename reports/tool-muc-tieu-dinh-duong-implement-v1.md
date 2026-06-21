# Tool Muc Tieu Dinh Duong Implement v1

Date: 2026-06-21

Branch: `tool-muc-tieu-dinh-duong-implement-v1`

Base commit: `87f01f3 feat: add nutrition goal planner safety shell`

Tag created:

- `local-nutrition-goal-planner-shell-v1 -> 87f01f3`

## Scope

- Replace `/cong-cu/muc-tieu-dinh-duong/` redirect stub with a safe nutrition-goal page.
- Use the existing `nutrition-goal-planner` safety shell.
- Do not integrate unapproved energy or macro math.
- Do not touch `muc-tieu-can-nang`, `tinh-macro`, or `tinh-nang-luong`.
- Do not change nutrition data.
- Do not manually edit `dist`.
- Do not touch the existing `so-sanh` stash.

## Files Changed

- `src/pages/cong-cu/muc-tieu-dinh-duong.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-muc-tieu-dinh-duong-implement-v1.md`

## Redirect Status

The route is no longer a redirect stub.

Removed:

- meta refresh to `/cong-cu/ke-hoach-bua-an`.
- fallback redirect text.

Route kept:

- `/cong-cu/muc-tieu-dinh-duong/`

## Engine Use

The page imports and uses:

- `planNutritionGoal` from `src/lib/nutrition-goal-planner.ts`

The engine remains the single source for:

- mode classification.
- BMI calculation.
- clinical red-flag gating.
- caution reason output.
- protein reference eligibility.
- source-lock status for energy and macro.

## UI Inputs

The page includes:

- age.
- sex.
- weight.
- height.
- activity level:
  - low.
  - moderate.
  - high.
- goal:
  - maintain.
  - healthy eating.
  - mild weight loss.
  - mild weight gain.
- vegetarian pattern.
- clinical/no-auto flags:
  - pregnancy/lactation.
  - rapid unintentional weight loss.
  - eating disorder.
  - chronic kidney disease.
  - dialysis.
  - heart failure or fluid restriction.
  - cirrhosis/ascites.
  - diabetes using insulin or sulfonylurea.
  - cancer/malnutrition.
  - acute illness.
  - complex medication or disease context.

## UI Outputs

The page displays:

- mode:
  - `auto` -> `Tham khảo cơ bản`.
  - `caution` -> `Cần thận trọng`.
  - `clinical_no_auto` -> `Cần cá thể hóa`.
- BMI when input is valid.
- BMI safety category label.
- reason labels from the engine.
- safe warning summary.
- protein reference when the engine allows it.
- source-lock notice:
  - `Năng lượng và macro dạng số chưa bật ở v1 vì cần khóa nguồn rõ hơn.`
  - `Công cụ hiện không đưa mục tiêu kcal/macro cá nhân.`

For `clinical_no_auto`:

- no highlighted personal target.
- no protein reference.
- message emphasizes individualized care with a doctor or dietitian.

## Intentionally Not Displayed

The page does not display:

- BMR.
- TDEE.
- `7700 kcal/kg`.
- kcal deficit.
- kcal surplus.
- weekly weight-change number.
- daily kcal target.
- macro percent target.
- macro gram target.
- fiber target.
- sugar target.
- sodium target.
- disease macro table.

## Protein Reuse

Protein reference comes only through `planNutritionGoal`, which reuses:

- `calculateProteinRequirement`

The page labels this section:

- `Khoảng đạm tham khảo`

The page does not present protein as a mandatory personal prescription.

## `/cong-cu/` Update

Updated the `muc-tieu-dinh-duong` card description:

- `Định hướng mục tiêu dinh dưỡng tham khảo với cờ cần cá thể hóa.`

Status remains:

- `Đang hoàn thiện`

The card is not marked `Đã kiểm v1` in this round.

## Wording Guard

The user-facing page avoids the locked forbidden wording:

- `mục tiêu chuẩn`
- `bắt buộc ăn`
- `giảm X kg/tuần chắc chắn`
- `ăn càng ít càng tốt`
- `macro tối ưu cho mọi người`
- `an toàn cho bệnh`
- `tự chỉnh insulin`
- `ngưng thuốc`
- `bệnh thận nên ăn X g đạm`

The page uses:

- `tham khảo`.
- `cần cá thể hóa`.
- `không thay thế tư vấn cá thể`.
- `không dùng công cụ này để chỉnh thuốc`.

## Other Routes

No changes were made to:

- `src/pages/cong-cu/muc-tieu-can-nang.astro`
- `src/pages/cong-cu/tinh-macro.astro`
- `src/pages/cong-cu/tinh-nang-luong.astro`

## Nutrition Data

No nutrition data was changed.

## QA Result

Final QA passed:

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:nutrition-goal`
- `npm run test:tools`
- `git diff --check`
- `git status --short` before commit showed only intended files.

Preview HTTP check passed on `/cong-cu/muc-tieu-dinh-duong/`:

- Route returned `200`.
- No meta refresh was found.
- The rendered HTML includes the form/result shell.
- Required lead wording is present.
- Forbidden wording was not found in the rendered HTML.

Interactive browser QA was attempted, but the Browser MCP navigation tool was not exposed in this session and repo-local Playwright was not installed. The mode logic remains covered by `test:nutrition-goal` and `test:tools`.

Browser QA/polish should still cover:

1. Healthy adult, maintain -> auto.
2. Healthy adult, healthy eating -> auto.
3. Mild weight loss -> caution, no deficit number.
4. Mild weight gain -> caution, no surplus number.
5. BMI `<18.5` -> clinical no-auto.
6. Under 18 -> clinical no-auto.
7. CKD/dialysis -> clinical no-auto.
8. Diabetes using insulin/SU -> clinical no-auto.
9. Cancer/malnutrition/rapid unintentional weight loss -> clinical no-auto.
10. Output contains no forbidden wording.

## Conclusion

`muc-tieu-dinh-duong` now has a safe first UI implementation backed by `nutrition-goal-planner`. It should still be treated as `Đang hoàn thiện` until a browser QA/polish round verifies rendered wording, mobile layout, interaction states, and no accidental target-like output.
