# Tools Core Status v28

Date: 2026-07-05

Branch: `tools-core-status-v28`

Base commit: `c1f1f45 test: finalize grocery list page review`

Tag created:

- `local-danh-sach-di-cho-final-review-v1 -> c1f1f45`

## Scope

- Promote `danh-sach-di-cho` from `needs_qa_polish` to `stable_v1`.
- Stable scope: `neutral grocery list helper + safety shell only`.
- Mark the `needs_qa_polish` queue as completed.
- Keep total tool count at `38`.
- Confirm `/cong-cu/` card for **Danh sách đi chợ** carries `Đã kiểm v1`.
- No deploy.
- No engine logic changes.
- No formula changes.
- No bulk source-data changes.
- No manual `dist` edits.
- No route logic changes in this status round.

## Input Milestones

- QA polish: `e845c78 test: add grocery list page QA`.
- Final review: `c1f1f45 test: finalize grocery list page review`.
- Route: `/cong-cu/danh-sach-di-cho/`.
- Card `/cong-cu/`: badge `Đã kiểm v1` đã gắn.
- Chưa deploy.

## Status Update

Tool promoted:

- `danh-sach-di-cho` / **Danh sách đi chợ**

Previous status:

- `needs_qa_polish`

New status:

- `stable_v1`

Stable v1 scope:

- `neutral grocery list helper + safety shell only`

## Summary Counts

Counts before v28, from `tools-core-status-v27`:

- `stable_v1`: 30
- `needs_spec`: 5
- `needs_qa_polish`: 1
- `stub_or_draft`: 2
- `clinical_high_risk`: 0
- total: 38

Counts after v28:

- `stable_v1`: 31
- `needs_spec`: 5
- `needs_qa_polish`: 0
- `stub_or_draft`: 2
- `clinical_high_risk`: 0
- total: 38

P0 clinical high risk status:

- `clinical_high_risk`: 0
- P0 clinical high risk remains completed.

## `needs_qa_polish` Queue

- `needs_qa_polish` is now completed.
- No tools remain in `needs_qa_polish`.

## Remaining Status Groups

- `needs_spec`: 5
- `stub_or_draft`: 2
- `clinical_high_risk`: 0

## Thirty-One Stable v1 Tools

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
30. `checklist-an-uong` / **Checklist ăn uống** -- stable neutral eating checklist + safety shell only
31. `danh-sach-di-cho` / **Danh sách đi chợ** -- stable neutral grocery list helper + safety shell only

## `danh-sach-di-cho` Stable Scope

Status: `stable_v1`.

Route:

- `/cong-cu/danh-sach-di-cho/`

Stable v1 scope:

- Neutral grocery list helper + safety shell only.
- Keeps form/search for dishes.
- Keeps recipe selection with checkboxes.
- Keeps grouped grocery list generation.
- Keeps bought/not-bought checkboxes.
- Keeps reset via `Xoa het`.
- Keeps `/cong-cu/` card badge `Đã kiểm v1`.
- Keeps card description:
  - `Tạo danh sách đi chợ tham khảo để nhắc việc mua thực phẩm, không dùng để kết luận khẩu phần đủ chất hay phù hợp cho bệnh.`

It is:

- A grocery-list reminder helper at reference level.
- A way to group ingredients for shopping preparation.
- A neutral reminder workflow with safety shell wording.

It is not:

- A personalized menu-prescription tool.
- A sufficient/insufficient/excess portion calculator.
- A treatment nutrition advisor.
- A disease-specific grocery recommender.
- A disease-target calculator.
- A medication, insulin, diuretic, or treatment-meal adjustment tool.

It does not display or enable:

- `nen mua` / `khong nen mua` treatment-style recommendations.
- `du chat`, `can doi`, or `dat muc tieu` conclusions.
- disease filters.
- disease targets.
- `kcal/protein/carb/natri/nuoc` targets.
- localStorage, export, copy, print, share, free-text, chart, or canvas.
- route-scoped `innerHTML`.

## Safety Summary

- Tool only serves as a grocery-list reminder helper at reference level.
- It is not a personalized menu tool.
- It does not calculate portions as enough, deficient, or excessive.
- It is not treatment nutrition advice.
- It does not conclude the grocery list is sufficient, balanced, or on target.
- It does not provide `nen mua` / `khong nen mua` treatment-style recommendations.
- It does not include disease filters or disease targets.
- It does not target `kcal/protein/carb/natri/nuoc`.
- It does not conclude suitable/safe for diabetes, hypertension, kidney disease, gout, heart failure, pregnancy, or children.
- It does not guide medication, insulin, diuretic, or treatment-meal adjustment.
- Food groups are only used to organize the grocery list.
- Summary output is limited to ingredient/item counts at reference level.
- There is no localStorage, export, copy, print, share, free-text, chart, or canvas.
- Route-scoped `innerHTML` was removed.
- XSS/fuzz payloads did not create dialogs, render HTML, or break layout.
- Final review confirmed search for `gao`, `thịt`, and `nuoc mam` worked as expected.
- Final review confirmed list creation, tick/untick, and `Xoa het` all worked.

## Source / Review Trail

- `reports/needs-qa-polish-triage-v1.md`
- `reports/tool-danh-sach-di-cho-qa-polish-v1.md`
- `reports/tool-danh-sach-di-cho-final-review-v1.md`

## Browser / Final Review Evidence

From final review:

- `/cong-cu/` returned `200`.
- `/cong-cu/danh-sach-di-cho/` returned `200`.
- No redirect.
- No meta refresh.
- Console clean in fresh browser session.
- Desktop showed no horizontal overflow.
- Mobile `390 x 844` showed no horizontal overflow.
- Search `gao`, `thịt`, and `nuoc mam` behaved correctly.
- Creating a sample grocery list worked.
- Tick/untick on list items worked.
- `Xoa het` returned the route to a neutral empty state.
- Query/fuzz payloads did not create dialogs, render HTML, or break form/search/list interactions.
- Card `/cong-cu/` displayed badge `Đã kiểm v1` after rebuild.

## File Changes

- `reports/tools-core-status-v28.md`

## QA Final

- `npm run build`: first parallel run timed out on Windows; rerun pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass
- `git status --short`: `?? reports/tools-core-status-v28.md` before staging/commit

## Engine / Data / Dist

- No engine changes.
- No source-data bulk edits.
- No formula changes.
- No manual `dist` edits.
- No route changes in this status round.

## Conclusion

- `danh-sach-di-cho` is ready to move from `needs_qa_polish` to `stable_v1`.
- Stable scope is `neutral grocery list helper + safety shell only`.
- `needs_qa_polish` is now completed.
- Remaining groups are `needs_spec: 5`, `stub_or_draft: 2`, `clinical_high_risk: 0`.
- P0 `clinical_high_risk` remains cleared.
- Ready to move beyond the completed `needs_qa_polish` queue.
- Chưa deploy.
