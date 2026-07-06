# Tools Core Status v34

Date: 2026-07-06

Branch: `tools-core-status-v34`

Base commit: `cb58adc test: finalize macro draft landing page review`

Tag created:

- `local-tinh-macro-final-review-v1 -> cb58adc`

## Scope

- Promote `tinh-macro` from `stub_or_draft` to `stable_v1`.
- Stable scope: `safe draft landing page + safety shell only`.
- Keep total tool count at `38`.
- Confirm `/cong-cu/` card for **Tính macro** keeps neutral copy and visible status `Bản nháp`.
- Confirm `stub_or_draft` drops to `1`.
- Keep `needs_spec` at `0`.
- Keep `needs_qa_polish` at `0`.
- Keep `clinical_high_risk` at `0`.
- No deploy.
- No engine changes.
- No source-data changes.
- No common formula changes.
- No manual `dist` edits.
- No route logic changes in this status round.

## Input Milestones

- Safety patch: `9bc96d1 fix: replace macro redirect stub with safe landing page`
- QA polish: `5f6f57c test: add macro draft landing page QA`
- Final review: `cb58adc test: finalize macro draft landing page review`
- Route: `/cong-cu/tinh-macro/`
- Chưa deploy.

## Status Update

Tool promoted:

- `tinh-macro` / **Tính macro**

Previous status:

- `stub_or_draft`

New status:

- `stable_v1`

Stable v1 scope:

- `safe draft landing page + safety shell only`

## Summary Counts

Counts before v34, from `tools-core-status-v33`:

- `stable_v1`: 36
- `needs_spec`: 0
- `needs_qa_polish`: 0
- `stub_or_draft`: 2
- `clinical_high_risk`: 0
- total: 38

Counts after v34:

- `stable_v1`: 37
- `needs_spec`: 0
- `needs_qa_polish`: 0
- `stub_or_draft`: 1
- `clinical_high_risk`: 0
- total: 38

P0 clinical high risk status:

- `clinical_high_risk`: 0
- P0 clinical high risk remains completed.

## Remaining `stub_or_draft` Tools

After promoting `tinh-macro`, the remaining `stub_or_draft` queue is:

- `tinh-nang-luong`

## Thirty-Seven Stable v1 Tools

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
35. `khau-phan-don-gian` / **Khẩu phần đơn giản** -- stable neutral simple portion orientation + safety shell only
36. `tinh-calo-tieu-thu` / **Tính calo tiêu thụ** -- stable neutral activity energy estimate orientation + safety shell only
37. `tinh-macro` / **Tính macro** -- stable safe draft landing page + safety shell only

## Macro Draft Safety Summary

- Route hiện là landing page nháp an toàn.
- Route trả `200` trực tiếp.
- Không còn redirect.
- Không còn `meta refresh`.
- Không tự chuyển sang `/cong-cu/muc-tieu-can-nang/`.
- Không có calculator.
- Không có form input.
- Không có result state.
- Không có reset.
- Không có chart/canvas.
- Không có `localStorage/export/copy/share/print`.
- Không còn `innerHTML` route-scoped.
- Có trạng thái nháp/đang hoàn thiện trong nội dung route.
- Có safety shell rõ.
- Nội dung chỉ giới thiệu macro ở mức định hướng.
- Ghi rõ chưa phải công cụ tính khẩu phần cá nhân.
- Không đưa ra tỉ lệ macro, `gram/ngày` hoặc mục tiêu cá nhân.
- Không có wording `tỉ lệ macro chuẩn/lý tưởng/phù hợp cho bạn`.
- Không có giảm cân, tăng cân, tăng cơ, đốt mỡ, ăn bù.
- Không kết luận tốt/xấu, đủ/thiếu/thừa, đạt/không đạt.
- Không target bệnh nền.
- Không kết luận phù hợp/an toàn cho bệnh.
- Không hướng dẫn chỉnh insulin, thuốc hạ đường huyết, lợi tiểu hoặc chế độ điều trị.
- Query/fuzz không tạo dialog, không render HTML, không phá layout, không lỗi console.
- Desktop và mobile `390 x 844` không overflow ngang.

## Card `/cong-cu/`

- Copy card giữ trung tính:
  - `Trang định hướng về macro ở mức tham khảo, chưa dùng để tính khẩu phần cá nhân.`
- Card vẫn giữ trạng thái `Bản nháp`.
- Không gắn `Đã kiểm v1`.
- Lý do giữ `Bản nháp`: tránh gây hiểu nhầm đây là calculator macro hoàn chỉnh.
- Final review vẫn pass dù card không gắn `Đã kiểm v1`.

## File Changes In This Status Round

- `reports/tools-core-status-v34.md`

## Browser Preview and QA Reference

- Route verified in prior final review and rechecked in this status round:
  - `/cong-cu/`
  - `/cong-cu/tinh-macro/`
- `/cong-cu/` card for **Tính macro** keeps neutral copy and visible status `Bản nháp`.
- `/cong-cu/tinh-macro/` remained HTTP `200`, no redirect, no meta refresh, no auto-jump, no console errors, and no horizontal overflow on desktop or mobile `390 x 844`.

## Backlogs Kept Unchanged

- `stub_or_draft`: 1
- Backlog data QA `6014` remains unchanged:
  - `Dầu oliu`
  - metadata / `name_en` suspected to pollute query `thịt`
- No backlog handling in this status round.

## What Was Not Done In This Round

- No deploy.
- No work on `tinh-nang-luong`.
- No backlog data QA `6014` changes.
- No engine changes.
- No source-data changes.
- No common formula changes.
- No `dist` edits.
- No attempt to turn `tinh-macro` into a calculator.

## QA Final

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass
- `git status --short`: pass after commit is expected; before commit only `reports/tools-core-status-v34.md` was added

## Worktree

- Worktree expected clean after commit if QA passes.

## Conclusion

- `tinh-macro` is ready to be tracked as `stable_v1` with scope `safe draft landing page + safety shell only`.
- `stable_v1` rises from `36` to `37`.
- `stub_or_draft` drops from `2` to `1`.
- `needs_spec` remains `0`.
- `needs_qa_polish` remains `0`.
- `clinical_high_risk` remains `0`.
- Backlog remaining outside stable tracking is `stub_or_draft: 1` plus data QA `6014`.
- Chưa deploy.
