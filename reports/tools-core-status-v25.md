# Tools Core Status v25

Date: 2026-07-03

Branch: `tools-core-status-v25`

Base commit: `6c69838 test: finalize unit converter page review`

Tag created:

- `local-doi-don-vi-final-review-v1 -> 6c69838`

## Scope

- Promote `doi-don-vi` from `needs_qa_polish` to `stable_v1`.
- Stable scope: `neutral unit conversion helper + data QA shell only`.
- Keep total tool count at `38`.
- Confirm `/cong-cu/` card for **Đổi đơn vị** carries `Đã kiểm v1`.
- No deploy.
- No engine logic changes.
- No formula changes.
- No bulk source-data changes.
- No manual `dist` edits.
- No route logic changes outside status/report metadata already landed in final review.

## Input Milestones

- QA polish: `b18c0cb test: add unit converter page QA`.
- Final review: `6c69838 test: finalize unit converter page review`.
- Route: `/cong-cu/doi-don-vi/`.
- Card `/cong-cu/`: badge `Đã kiểm v1` đã gắn.
- Chưa deploy.

## Status Update

Tool promoted:

- `doi-don-vi` / **Đổi đơn vị**

Previous status:

- `needs_qa_polish`

New status:

- `stable_v1`

Stable v1 scope:

- `neutral unit conversion helper + data QA shell only`

## Summary Counts

Counts before v25, from `tools-core-status-v24`:

- `stable_v1`: 27
- `needs_spec`: 5
- `needs_qa_polish`: 4
- `stub_or_draft`: 2
- `clinical_high_risk`: 0
- total: 38

Counts after v25:

- `stable_v1`: 28
- `needs_spec`: 5
- `needs_qa_polish`: 3
- `stub_or_draft`: 2
- `clinical_high_risk`: 0
- total: 38

P0 clinical high risk status:

- `clinical_high_risk`: 0
- P0 clinical high risk remains completed.

## Remaining `needs_qa_polish` Queue

The remaining `needs_qa_polish` tools after promoting `doi-don-vi` are:

1. `bang-xep-hang`
2. `checklist-an-uong`
3. `danh-sach-di-cho`

## Twenty-Eight Stable v1 Tools

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
24. `so-sanh-thuc-pham` / **So sánh thực phẩm** -- stable neutral food comparison + data QA shell only
25. `so-sanh-bua-an` / **So sánh bữa ăn** -- stable neutral meal comparison + data QA shell only
26. `them-thuc-pham-dong-goi` / **Thêm thực phẩm đóng gói** -- stable neutral packaged food entry + data QA shell only
27. `tim-mon-tu-nguyen-lieu` / **Tìm món từ nguyên liệu** -- stable neutral ingredient-to-dish idea lookup + safety shell only
28. `doi-don-vi` / **Đổi đơn vị** -- stable neutral unit conversion helper + data QA shell only

## `doi-don-vi` Stable Scope

Status: `stable_v1`.

Route:

- `/cong-cu/doi-don-vi/`

Stable v1 scope:

- Neutral unit conversion helper + data QA shell only.
- Keeps input/select controls for unit conversion.
- Keeps conversion tabs for weight, energy, volume, length, and temperature.
- Keeps `/cong-cu/` card badge `Đã kiểm v1`.
- Keeps card description:
  - `Quy đổi đơn vị thực phẩm ở mức tham khảo, có ghi chú giới hạn khi quy đổi theo dụng cụ hoặc thể tích.`

It is:

- A reference unit conversion helper.
- A neutral tool for converting common cooking/nutrition units.
- A route with explicit limitation notes for tool/volume assumptions.

It is not:

- A personal portion prescription tool.
- A personal nutrition-needs calculator.
- A disease-target calculator.
- A treatment diet tool.
- A tool for deciding safe or suitable intake.
- A medication, insulin, diuretic, or treatment-meal adjustment tool.

It does not display or enable:

- Absolute-accuracy claims.
- `nên ăn lượng này`.
- `khẩu phần phù hợp` as a positive conclusion.
- safe/suitable-for-disease conclusions.
- disease targets.
- reached/missed target wording.
- good/bad, enough/deficient/excessive conclusions.
- route-scoped search.
- localStorage, export, copy, share, chart, or canvas.
- route-scoped `innerHTML`.

## Safety Summary

- Tool only converts food/cooking units at reference level.
- Does not call results absolutely exact.
- Does not conclude a portion is suitable or safe.
- Does not target disease groups.
- Does not use reached/missed target, deficient/excessive, good/bad labels.
- Does not conclude suitable/safe for diabetes, hypertension, kidney disease, gout, or heart failure.
- Does not guide medication, insulin, diuretic, or meal-treatment adjustment.
- Shows limitation notes for utensil and volume conversions.
- Does not assume `1 ml = 1 g` for all foods.
- Input blank-like, text, negative numbers, `Infinity`, and very large numbers do not crash the app.
- `1,5` and `1.5` both worked in the reviewed `cup -> ml` flow.
- XSS/fuzz payloads did not create dialogs, render HTML, or break layout.

## Source / Review Trail

- `reports/needs-qa-polish-triage-v1.md`
- `reports/tool-doi-don-vi-qa-polish-v1.md`
- `reports/tool-doi-don-vi-final-review-v1.md`

## Browser / Final Review Evidence

From final review:

- `/cong-cu/` returned `200`.
- `/cong-cu/doi-don-vi/` returned `200`.
- No redirect.
- No meta refresh.
- Console clean.
- Desktop showed no horizontal overflow.
- Mobile `390 x 844` showed no horizontal overflow.
- Input/select conversion controls worked.
- `100 g -> kg`: pass.
- `100 g -> mg`: pass.
- `100 kcal -> kJ`: pass.
- `1,5 cup -> ml`: pass.
- `1.5 cup -> ml`: pass.
- Invalid and fuzz inputs showed neutral state and did not crash.
- Card `/cong-cu/` displayed badge `Đã kiểm v1` after rebuild.

## File Changes

- `reports/tools-core-status-v25.md`

## QA Final

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass
- `git status --short`: clean after commit

## Engine / Data / Dist

- No engine changes.
- No source-data bulk edits.
- No formula changes.
- No manual `dist` edits.

## Conclusion

- `doi-don-vi` is ready to move from `needs_qa_polish` to `stable_v1`.
- Stable scope is `neutral unit conversion helper + data QA shell only`.
- Queue `needs_qa_polish` drops from `4` to `3`.
- P0 `clinical_high_risk` remains cleared.
- Ready to move to the next tool in the `needs_qa_polish` queue.
- Chưa deploy.
