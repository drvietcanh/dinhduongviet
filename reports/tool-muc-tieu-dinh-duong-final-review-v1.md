# Tool muc-tieu-dinh-duong final review v1

Date: 2026-06-21
Branch: `tool-muc-tieu-dinh-duong-final-review-v1`
Base QA commit: `bbc6555 test: add nutrition goal page QA`
Route: `/cong-cu/muc-tieu-dinh-duong/`

## Scope

Final review for the safe nutrition goal orientation page before updating overall tool status.

This round only reviewed and lightly polished wording/mobile UX. It did not add formulas, did not enable kcal or macro numeric targets, and did not change nutrition data.

## Changes made

- Updated the lead sentence to state that results depend on user input.
- Added a visible submit button: `Cập nhật kết quả`.
- Added a protein note: `Đây là khoảng tham khảo, không phải chỉ định cá nhân.`

No engine logic changed.

## Route and redirect

- HTTP check: `http://[::1]:4322/cong-cu/muc-tieu-dinh-duong/` returned `200`.
- No meta refresh was found.
- The route is not a redirect stub.
- H1 is `Mục tiêu dinh dưỡng`.

## Mobile test method

Method: headless Chrome through local Chrome DevTools Protocol at a 390px-class window (`--window-size=390,844`), using the preview server. The preview bound to IPv6 loopback, so checks used `http://[::1]:4322/cong-cu/muc-tieu-dinh-duong/`.

In-app Browser was attempted first, but could not navigate to the local preview because the browser surface stayed on its localhost error page. No new dependency was installed.

## Mobile result

- Rendered viewport reported `innerWidth: 478`, `clientWidth: 463`, `scrollWidth: 463`.
- Horizontal overflow: pass.
- Main inputs/selects: 40px high.
- Submit button: 42px high and full width.
- Checkbox label rows: 36px high.
- Labels remained readable.
- Result panel did not break layout.
- Safety note remained compact.
- Mode badge text was understandable.

Browser console note:

- Chrome reported a shared-layout warning about deprecated `apple-mobile-web-app-capable`; this is not specific to this route and did not block the page.

## Wording review

User-facing text states:

- This is a nutrition goal orientation/reference tool.
- It does not replace individualized advice from a physician or nutrition professional.
- Results depend on user input.
- High-risk groups need individualized assessment.
- `Khoảng đạm tham khảo` is a reference range, not a personal instruction.
- Numeric energy and macro outputs remain disabled in v1 pending stronger source-lock.

Forbidden user-facing wording was not found:

- `mục tiêu chuẩn`
- `bắt buộc ăn`
- `giảm X kg/tuần chắc chắn`
- `ăn càng ít càng tốt`
- `macro tối ưu cho mọi người`
- `an toàn cho bệnh`
- `tự chỉnh insulin`
- `ngưng thuốc`
- `bệnh thận nên ăn X g đạm`

The route output also did not show:

- `BMR`
- `TDEE`
- `7700 kcal/kg`
- `deficit`
- `surplus`
- `mục tiêu kcal`
- `mục tiêu macro`
- `macro bệnh nền`

Technical strings such as `deficit`, `surplus`, and `mục tiêu kcal` still exist inside `src/lib/nutrition-goal-planner.ts`, but the current page maps engine reasons into safer Vietnamese UI wording and does not render those technical strings.

## Final 5 UI cases

1. Healthy adult, maintain: displayed `Tham khảo cơ bản`, BMI shown, protein reference shown as a reference range.
2. Mild weight loss: displayed `Cần thận trọng`; no deficit number and no promised rate of weight loss.
3. BMI below 18.5: displayed `Cần cá thể hóa`; no highlighted target or protein target.
4. Chronic kidney disease: displayed `Cần cá thể hóa`; no highlighted target or protein target.
5. Invalid age: showed friendly error `Vui lòng nhập tuổi từ 1 đến 120.`, no crash.

All tested cases had no forbidden wording and no blocked numeric kcal/macro content in rendered output.

## Route index card

`/cong-cu/` card for `muc-tieu-dinh-duong`:

- Title: `Mục tiêu dinh dưỡng`
- Route: `/cong-cu/muc-tieu-dinh-duong`
- Description: `Định hướng mục tiêu dinh dưỡng tham khảo với cờ cần cá thể hóa.`
- Badge remains `Đang hoàn thiện`, not `Đã kiểm v1`.

## What was not changed

- No changes to `src/lib/nutrition-goal-planner.ts`.
- No changes to `muc-tieu-can-nang`, `tinh-macro`, or `tinh-nang-luong`.
- No nutrition data changes.
- No `dist` edits.
- No changes to the out-of-scope `so-sanh` stash.

## Conclusion

The page is ready for `tools-core-status-v4` review.

Recommended status: `stable_v1` with scope `safe nutrition goal orientation`.

This should not be described as a kcal calculator, macro calculator, BMR/TDEE calculator, weight-loss prescription tool, or disease-specific nutrition target tool.
