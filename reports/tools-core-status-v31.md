# Tools Core Status v31

Date: 2026-07-06

Branch: `tools-core-status-v31`

Base commit: `74f2f8a test: finalize beverage sugar page review`

Tag created:

- `local-duong-do-uong-final-review-v1 -> 74f2f8a`

## Scope

- Promote `duong-do-uong` from `needs_spec` to `stable_v1`.
- Stable scope: `neutral beverage sugar label helper + safety shell only`.
- Keep total tool count at `38`.
- Confirm `/cong-cu/` card for **Đường đồ uống** carries `Đã kiểm v1`.
- No deploy.
- No engine changes.
- No source-data changes.
- No common formula changes.
- No manual `dist` edits.
- No route logic changes in this status round.

## Input Milestones

- Spec: `62a64bf docs: specify safe beverage sugar tool scope`
- QA polish: `04cb077 test: add beverage sugar page QA`
- Final review: `74f2f8a test: finalize beverage sugar page review`
- Route: `/cong-cu/duong-do-uong/`
- Card `/cong-cu/`: badge `Đã kiểm v1` đã gắn.
- Chưa deploy.

## Status Update

Tool promoted:

- `duong-do-uong` / **Đường đồ uống**

Previous status:

- `needs_spec`

New status:

- `stable_v1`

Stable v1 scope:

- `neutral beverage sugar label helper + safety shell only`

## Summary Counts

Counts before v31, from `tools-core-status-v30`:

- `stable_v1`: 33
- `needs_spec`: 3
- `needs_qa_polish`: 0
- `stub_or_draft`: 2
- `clinical_high_risk`: 0
- total: 38

Counts after v31:

- `stable_v1`: 34
- `needs_spec`: 2
- `needs_qa_polish`: 0
- `stub_or_draft`: 2
- `clinical_high_risk`: 0
- total: 38

P0 clinical high risk status:

- `clinical_high_risk`: 0
- P0 clinical high risk remains completed.

## Remaining `needs_spec` Tools

After promoting `duong-do-uong`, the remaining `needs_spec` queue is:

1. `khau-phan-don-gian`
2. `tinh-calo-tieu-thu`

## Thirty-Four Stable v1 Tools

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
20. `lap-thuc-don-tuan` / **Lập thực đơn tuần** -- stable safe weekly meal planning orientation + safety shell only
21. `nhat-ky` / **Nhật ký ăn uống** -- stable neutral tracking log + safety shell only
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
32. `bmi` / **BMI** -- stable safe BMI orientation + safety shell only
33. `ti-le-mo-co-the` / **Tỷ lệ mỡ cơ thể tham khảo** -- stable safe body-fat estimate orientation + safety shell only
34. `duong-do-uong` / **Đường đồ uống** -- stable neutral beverage sugar label helper + safety shell only

## Beverage Sugar Safety Summary

- Route chỉ tra cứu lượng đường tham khảo trong một số đồ uống.
- Có search/tra cứu theo tên đồ uống.
- Có danh sách gram đường theo khẩu phần tham khảo.
- Có help/empty state trung tính.
- Có safety shell rõ.
- Search có dấu/không dấu hoạt động với `sua/sữa`, `tra/trà`, `nuoc/nước`, `coca`.
- Không còn `WHO 25g/ngày`.
- Không còn `% nhu cầu ngày`.
- Không còn quy đổi muỗng cà phê.
- Không còn nhãn màu `high/medium/low`.
- Không có wording `nên uống/không nên uống/tốt/xấu/vượt ngưỡng/quá nhiều đường`.
- Không filter bệnh nền.
- Không target cá nhân.
- Không kết luận phù hợp/an toàn cho tiểu đường hoặc bệnh nền.
- Không hướng dẫn chỉnh insulin, thuốc hạ đường huyết, lợi tiểu hoặc chế độ điều trị.
- Không có `localStorage/export/copy/share/chart/canvas`.
- Không còn `innerHTML` route-scoped.
- XSS/fuzz không tạo dialog, không render HTML, không phá layout, không lỗi console.
- Card giữ mô tả trung tính:
  - `Tra cứu lượng đường tham khảo trong một số đồ uống, không dùng để kết luận đồ uống tốt hay xấu.`

## File Changes In This Status Round

- `reports/tools-core-status-v31.md`

## Browser Preview and QA Reference

- Route verified in prior final review:
  - `/cong-cu/`
  - `/cong-cu/duong-do-uong/`
- `/cong-cu/` card for **Đường đồ uống** carries badge `Đã kiểm v1`.
- `/cong-cu/duong-do-uong/` remained HTTP `200`, no redirect, no meta refresh, no console errors in fresh browser QA from the final review round.

## Backlogs Kept Unchanged

- `stub_or_draft`: 2
- Backlog data QA `6014` remains unchanged:
  - `Dầu oliu`
  - metadata / `name_en` suspected to pollute query `thịt`
- No backlog handling in this status round.

## What Was Not Done In This Round

- No deploy.
- No work on remaining `needs_spec` tools.
- No work on `stub_or_draft`.
- No backlog data QA `6014` changes.
- No engine changes.
- No source-data changes.
- No common formula changes.
- No `dist` edits.

## QA Final

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass
- `git status --short`: pass after commit is expected; before commit only `reports/tools-core-status-v31.md` was modified

## Worktree

- Worktree expected clean after commit if QA passes.

## Conclusion

- `duong-do-uong` is ready to be tracked as `stable_v1` with scope `neutral beverage sugar label helper + safety shell only`.
- Remaining `needs_spec` queue drops from `3` to `2`.
- Chưa deploy.
