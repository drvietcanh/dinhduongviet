# Tool Muc Tieu Dinh Duong QA Polish v1

Date: 2026-06-21

Branch: `tool-muc-tieu-dinh-duong-qa-polish-v1`

Base commit: `79f2130 feat: implement safe nutrition goal page`

Tag created:

- `local-muc-tieu-dinh-duong-implement-v1 -> 79f2130`

## Scope

- QA and light polish for `/cong-cu/muc-tieu-dinh-duong/`.
- No new formulas.
- No BMR/TDEE.
- No `7700 kcal/kg`.
- No deficit/surplus.
- No numeric kcal target.
- No numeric macro target.
- No fiber/sugar/sodium target.
- No disease macro table.
- No nutrition data changes.
- No changes to `muc-tieu-can-nang`, `tinh-macro`, or `tinh-nang-luong`.
- No changes to the `so-sanh` stash.

## Files Changed

- `src/pages/cong-cu/muc-tieu-dinh-duong.astro`
- `reports/tool-muc-tieu-dinh-duong-qa-polish-v1.md`

## Route Status

Route checked:

- `/cong-cu/muc-tieu-dinh-duong/`

Result:

- HTTP route opened in preview.
- Browser URL stayed on `/cong-cu/muc-tieu-dinh-duong/`.
- No redirect observed.
- No meta refresh found.
- H1 is `Mục tiêu dinh dưỡng`.

## Browser QA Method

QA used:

- `npm run build`
- `npm run preview`
- Codex in-app Browser against `http://localhost:4322/cong-cu/muc-tieu-dinh-duong/`
- Headless Chrome system browser for mobile-width measurement without adding project dependencies.

No Playwright dependency was installed.

## Form Coverage

The page includes the required inputs:

- age.
- sex.
- weight.
- height.
- activity level.
- goal.
- vegetarian pattern.
- 11 clinical/no-auto flags.

Console:

- No console errors were captured during UI mode testing.

## Desktop QA

Desktop browser result:

- No horizontal overflow.
- Form and result panel render.
- Safety note is short and readable.
- Protein reference appears only when the engine allows it.
- `clinical_no_auto` suppresses protein reference.

## Mobile QA

Headless Chrome was run with `--window-size=390,844`.

Observed viewport metrics:

- `innerWidth`: `478`
- `clientWidth`: `463`
- `scrollWidth`: `463`
- horizontal overflow: `false`

Control measurements:

- main input/select minimum height: `40px`
- checkbox label minimum height: `36px`
- no label hit-area under `32px`

Result:

- No horizontal overflow found.
- Form controls remain readable and tappable.

Note: Chrome headless on Windows reported an effective viewport wider than the requested `390px`, so a final human mobile-device pass is still useful before marking the tool `stable_v1`.

## UI Mode Cases

All mode cases passed in browser UI:

| Case | Expected | Result |
|---|---|---|
| Healthy adult, maintain | `Tham khảo cơ bản` | pass |
| Healthy adult, healthy eating | `Tham khảo cơ bản` | pass |
| Mild weight loss | `Cần thận trọng` | pass |
| Mild weight gain | `Cần thận trọng` | pass |
| Age `>=65` | `Cần thận trọng` | pass |
| High activity | `Cần thận trọng` | pass |
| Vegetarian pattern | `Cần thận trọng` | pass |
| BMI `>=25` | `Cần thận trọng` | pass |
| BMI `<18.5` | `Cần cá thể hóa` | pass |
| Under 18 | `Cần cá thể hóa` | pass |
| Pregnancy/lactation | `Cần cá thể hóa` | pass |
| CKD | `Cần cá thể hóa` | pass |
| Dialysis | `Cần cá thể hóa` | pass |
| Diabetes using insulin/SU | `Cần cá thể hóa` | pass |
| Cancer/malnutrition | `Cần cá thể hóa` | pass |
| Rapid unintentional weight loss | `Cần cá thể hóa` | pass |
| Invalid age | friendly error | pass |
| Invalid weight | friendly error | pass |
| Invalid height | friendly error | pass |

## Wording Guard

The browser-rendered page and output were checked for forbidden wording.

Forbidden wording not found:

- `mục tiêu chuẩn`
- `bắt buộc ăn`
- `giảm X kg/tuần chắc chắn`
- `ăn càng ít càng tốt`
- `macro tối ưu cho mọi người`
- `an toàn cho bệnh`
- `tự chỉnh insulin`
- `ngưng thuốc`
- `bệnh thận nên ăn X g đạm`
- `BMR`
- `TDEE`
- `7700 kcal/kg`
- `deficit`
- `surplus`
- `mục tiêu kcal`
- `mục tiêu macro`
- `macro bệnh nền`

## Polish Applied

Changed the disabled energy/macro notice from:

- `Công cụ hiện không đưa mục tiêu kcal/macro cá nhân.`

To:

- `Công cụ hiện không đưa kcal hoặc macro cá nhân dạng số.`

Reason:

- The previous wording contained the locked phrase `mục tiêu kcal`.
- The new wording keeps the same safety meaning without target-like phrasing.

## Protein Reference

Protein appears as:

- `Khoảng đạm tham khảo`

It appears for safe/caution adult cases when the engine allows it.

It does not appear for:

- BMI `<18.5`.
- under 18.
- pregnancy/lactation.
- CKD.
- dialysis.
- diabetes using insulin/SU.
- cancer/malnutrition.
- rapid unintentional weight loss.
- invalid input.

## Disabled Numeric Targets

The page does not display:

- BMR.
- TDEE.
- `7700 kcal/kg`.
- deficit.
- surplus.
- numeric kcal target.
- numeric macro target.
- fiber target.
- sugar target.
- sodium target.
- disease macro table.

The page displays only a source-lock notice for energy and macro numeric output.

## `/cong-cu/` Card

`/cong-cu/` check:

- One card links to `/cong-cu/muc-tieu-dinh-duong`.
- Card text says `Đang hoàn thiện`.
- Card does not show `Đã kiểm v1`.
- Card description remains: `Định hướng mục tiêu dinh dưỡng tham khảo với cờ cần cá thể hóa.`
- No horizontal overflow found on the tools index in browser.

## Other Routes And Data

No changes were made to:

- `src/pages/cong-cu/muc-tieu-can-nang.astro`
- `src/pages/cong-cu/tinh-macro.astro`
- `src/pages/cong-cu/tinh-nang-luong.astro`

No nutrition data was changed.

No manual `dist` edits were made.

The `so-sanh` stash was not touched.

## Final QA

Final QA is run after this report:

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:nutrition-goal`
- `npm run test:tools`
- `git diff --check`
- `git status --short`

## Status Recommendation

The route is implementation-QA passed and no longer blocked by obvious browser/UI issues.

Recommendation:

- It is reasonable to prepare a status update marking `muc-tieu-dinh-duong` as QA-polished v1 implementation, but keep the wording as not a calculator and not a stable nutrition target engine.
- Before `stable_v1`, do one final human mobile-device check at an actual 390px-class viewport and confirm the doctor-approved wording remains acceptable.
