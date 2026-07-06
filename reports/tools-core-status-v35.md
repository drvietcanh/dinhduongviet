# Tools Core Status v35

Date: 2026-07-06

Branch: `tools-core-status-v35`

Base commit: `110dc1c test: finalize energy draft landing page review`

Tag created:

- `local-tinh-nang-luong-final-review-v1 -> 110dc1c`

## Scope

- Promote `tinh-nang-luong` from `stub_or_draft` to `stable_v1`.
- Stable scope: `safe draft landing page + safety shell only`.
- Keep total tool count at `38`.
- Confirm `/cong-cu/` card for **Tính năng lượng** keeps neutral copy and visible status `Bản nháp`.
- Confirm `stub_or_draft` drops to `0`.
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

- Safety patch: `9e72931 fix: replace energy redirect stub with safe landing page`
- QA polish: `c0e0d7c test: add energy draft landing page QA`
- Final review: `110dc1c test: finalize energy draft landing page review`
- Route: `/cong-cu/tinh-nang-luong/`
- Chưa deploy.

## Status Update

Tool promoted:

- `tinh-nang-luong` / **Tính năng lượng**

Previous status:

- `stub_or_draft`

New status:

- `stable_v1`

Stable v1 scope:

- `safe draft landing page + safety shell only`

## Summary Counts

Counts before v35, from `tools-core-status-v34`:

- `stable_v1`: 37
- `needs_spec`: 0
- `needs_qa_polish`: 0
- `stub_or_draft`: 1
- `clinical_high_risk`: 0
- total: 38

Counts after v35:

- `stable_v1`: 38
- `needs_spec`: 0
- `needs_qa_polish`: 0
- `stub_or_draft`: 0
- `clinical_high_risk`: 0
- total: 38

## All Tool Status Counts Are Closed

- Tất cả `38/38` tool đã được đưa về `stable_v1` ở mức safety/status hiện tại.
- `needs_spec = 0`
- `needs_qa_polish = 0`
- `stub_or_draft = 0`
- `clinical_high_risk = 0`

Backlog còn lại không thuộc tool status:

- data QA mã `6014` chưa xử lý
- chưa deploy

## Thirty-Eight Stable v1 Tools

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
38. `tinh-nang-luong` / **Tính năng lượng** -- stable safe draft landing page + safety shell only

## Energy Draft Safety Summary

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
- Nội dung chỉ giới thiệu năng lượng trong dinh dưỡng ở mức định hướng.
- Ghi rõ chưa phải công cụ tính nhu cầu năng lượng cá nhân.
- Không tính `BMR`, `TDEE`, `calo/ngày`, khẩu phần cá nhân hoặc mục tiêu cân nặng.
- Không có wording `calo mục tiêu`, `nhu cầu calo của bạn`, `BMR của bạn`, `TDEE của bạn`.
- Không có giảm cân, tăng cân, ăn bù, đốt bù ngoài ngữ cảnh phủ định của safety shell.
- Không kết luận tốt/xấu, đủ/thiếu/thừa, đạt/không đạt.
- Không target bệnh nền.
- Không kết luận phù hợp/an toàn cho bệnh.
- Không hướng dẫn chỉnh insulin, thuốc hạ đường huyết, lợi tiểu, thuốc tim mạch hoặc chế độ điều trị.
- Query/fuzz không tạo dialog, không render HTML, không phá layout, không lỗi console.
- Desktop và mobile `390 x 844` không overflow ngang.
- Build có thể gặp `EPIPE` khi chạy qua pipe trên Windows; final review đã rerun bằng log file và pass thật.

## Card `/cong-cu/`

- Copy card giữ trung tính:
  - `Trang định hướng về năng lượng ở mức tham khảo, chưa dùng để tính nhu cầu năng lượng cá nhân.`
- Card vẫn giữ trạng thái `Bản nháp`.
- Không gắn `Đã kiểm v1`.
- Lý do giữ `Bản nháp`: tránh gây hiểu nhầm đây là calculator năng lượng hoàn chỉnh.
- Final review vẫn pass dù card không gắn `Đã kiểm v1`.

## File Changes In This Status Round

- `reports/tools-core-status-v35.md`

## Backlogs Kept Unchanged

- Backlog data QA `6014` remains unchanged:
  - `Dầu oliu`
  - metadata / `name_en` suspected to pollute query `thịt`
- Chưa deploy.

## What Was Not Done In This Round

- No deploy.
- No backlog data QA `6014` changes.
- No engine changes.
- No source-data changes.
- No common formula changes.
- No `dist` edits.
- No attempt to turn `tinh-nang-luong` into a calculator.
- No card status change from `Bản nháp` to `Đã kiểm v1`.

## QA Final

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass
- `git status --short`: pass after commit is expected; before commit only `reports/tools-core-status-v35.md` was added

## Worktree

- Worktree expected clean after commit if QA passes.

## Conclusion

- `tinh-nang-luong` is ready to be tracked as `stable_v1` with scope `safe draft landing page + safety shell only`.
- `stable_v1` rises from `37` to `38`.
- `stub_or_draft` drops from `1` to `0`.
- `needs_spec` remains `0`.
- `needs_qa_polish` remains `0`.
- `clinical_high_risk` remains `0`.
- Tất cả `38/38` tool hiện đã được đưa về `stable_v1` ở mức safety/status hiện tại.
- Backlog remaining outside stable tracking is data QA `6014` plus deploy work.
- Chưa deploy.
