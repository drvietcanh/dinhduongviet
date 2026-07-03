# Tools Core Status v26

Date: 2026-07-03

Branch: `tools-core-status-v26`

Base commit: `33cc609 test: finalize nutrient ranking page review`

Tag created:

- `local-bang-xep-hang-final-review-v1 -> 33cc609`

## Scope

- Promote `bang-xep-hang` from `needs_qa_polish` to `stable_v1`.
- Stable scope: `neutral nutrient ranking/table + data QA shell only`.
- Keep total tool count at `38`.
- Confirm `/cong-cu/` card for **Bảng xếp hạng thực phẩm** carries `Đã kiểm v1`.
- No deploy.
- No engine logic changes.
- No formula changes.
- No bulk source-data changes.
- No manual `dist` edits.
- No route logic changes outside final-review card badge already landed.

## Input Milestones

- QA polish: `cfe0e35 test: add nutrient ranking page QA`.
- Final review: `33cc609 test: finalize nutrient ranking page review`.
- Route: `/cong-cu/bang-xep-hang/`.
- Card `/cong-cu/`: badge `Đã kiểm v1` đã gắn.
- Chưa deploy.

## Status Update

Tool promoted:

- `bang-xep-hang` / **Bảng xếp hạng**

Previous status:

- `needs_qa_polish`

New status:

- `stable_v1`

Stable v1 scope:

- `neutral nutrient ranking/table + data QA shell only`

## Summary Counts

Counts before v26, from `tools-core-status-v25`:

- `stable_v1`: 28
- `needs_spec`: 5
- `needs_qa_polish`: 3
- `stub_or_draft`: 2
- `clinical_high_risk`: 0
- total: 38

Counts after v26:

- `stable_v1`: 29
- `needs_spec`: 5
- `needs_qa_polish`: 2
- `stub_or_draft`: 2
- `clinical_high_risk`: 0
- total: 38

P0 clinical high risk status:

- `clinical_high_risk`: 0
- P0 clinical high risk remains completed.

## Remaining `needs_qa_polish` Queue

The remaining `needs_qa_polish` tools after promoting `bang-xep-hang` are:

1. `checklist-an-uong`
2. `danh-sach-di-cho`

## Twenty-Nine Stable v1 Tools

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
29. `bang-xep-hang` / **Bảng xếp hạng** -- stable neutral nutrient ranking/table + data QA shell only

## `bang-xep-hang` Stable Scope

Status: `stable_v1`.

Route:

- `/cong-cu/bang-xep-hang/`

Stable v1 scope:

- Neutral nutrient ranking/table + data QA shell only.
- Keeps tab controls for selecting nutrient metrics.
- Keeps sorted data lists, typically 15 rows per tab.
- Keeps `/cong-cu/` card badge `Đã kiểm v1`.
- Keeps card description:
  - `Sắp xếp dữ liệu dinh dưỡng thực phẩm ở mức tham khảo, không kết luận thực phẩm tốt hay xấu.`

It is:

- A reference nutrient data sorting table.
- A neutral way to inspect which foods have higher/lower numeric values for a selected nutrient metric.
- A route with explicit data limitations and safety shell.

It is not:

- A good/bad food ranking.
- A recommendation to choose, eat, or avoid specific foods.
- A disease-specific food selection tool.
- A treatment diet tool.
- A disease-target calculator.
- A medication, insulin, diuretic, or treatment-meal adjustment tool.

It does not display or enable:

- `tốt nhất`, `xấu nhất`, or `lành mạnh nhất` conclusions.
- `nên chọn`, positive `nên ăn`, or positive `không nên ăn` advice.
- safe/suitable-for-disease conclusions.
- disease filters.
- disease targets.
- reached/missed target wording.
- route-scoped search.
- localStorage, export, copy, share, chart, or canvas.
- route-scoped `innerHTML`.

## Safety Summary

- Tool only sorts nutrient data at reference level.
- It is not a good/bad food ranking.
- It does not conclude foods are best, worst, or healthiest.
- It does not provide advice to choose/eat/avoid foods.
- It does not filter or target disease groups.
- It does not conclude suitable/safe for diabetes, hypertension, kidney disease, gout, heart failure, pregnancy, or children.
- It does not guide medication, insulin, diuretic, or treatment-meal adjustment.
- Any higher/lower ordering is numeric data order only, not a health conclusion.
- Data are shown per 100g edible portion when data are available.
- Units are clear for displayed metrics: `kcal`, `g`, `mg`; no `µg` metric is currently displayed on this route.
- 0 remains a real value when present.
- Missing data are not coerced to 0 and do not affect sort order.
- Route-scoped `innerHTML` was removed.
- Runtime config bug `${JSON.stringify(config)}` was fixed.
- XSS/fuzz payloads did not create dialogs, render HTML, or break layout.

## Source / Review Trail

- `reports/needs-qa-polish-triage-v1.md`
- `reports/tool-bang-xep-hang-qa-polish-v1.md`
- `reports/tool-bang-xep-hang-final-review-v1.md`

## Browser / Final Review Evidence

From final review:

- `/cong-cu/` returned `200`.
- `/cong-cu/bang-xep-hang/` returned `200`.
- No redirect.
- No meta refresh.
- Console clean in fresh browser session.
- Desktop showed no horizontal overflow.
- Mobile `390 x 844` showed no horizontal overflow.
- Tab switching worked.
- Default tab rendered 15 rows.
- `Vitamin C: giảm dần` rendered 15 rows with `mg` values.
- `Năng lượng: tăng dần` rendered 15 rows with `kcal` values.
- Query/fuzz payloads did not create dialogs, render HTML, or break results.
- Card `/cong-cu/` displayed badge `Đã kiểm v1` after rebuild.

## File Changes

- `reports/tools-core-status-v26.md`

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
- No route changes in this status round.

## Conclusion

- `bang-xep-hang` is ready to move from `needs_qa_polish` to `stable_v1`.
- Stable scope is `neutral nutrient ranking/table + data QA shell only`.
- Queue `needs_qa_polish` drops from `3` to `2`.
- P0 `clinical_high_risk` remains cleared.
- Ready to move to the next tool in the `needs_qa_polish` queue.
- Chưa deploy.
