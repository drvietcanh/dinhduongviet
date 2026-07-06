# Post Needs Spec Complete v1

Date: 2026-07-06

Branch: `post-needs-spec-complete-v1`

## 1. Mốc đầu vào

- Status baseline: `tools-core-status-v33`
- Commit: `33e0971 docs: update tool status with activity energy safety shell v1`
- Chưa deploy.
- Worktree đầu vào sạch.

## 2. Kết luận chính

- Nhóm `needs_spec` đã hoàn tất.
- `needs_spec = 0`.
- `needs_qa_polish = 0`.
- `clinical_high_risk = 0`.
- `stable_v1` hiện là `36/38`.
- Backlog còn lại chỉ còn `stub_or_draft: 2` và data QA mã `6014`.

## 3. Counts hiện tại

- `stable_v1`: 36
- `needs_spec`: 0
- `needs_qa_polish`: 0
- `stub_or_draft`: 2
- `clinical_high_risk`: 0
- `total`: 38

## 4. Các tool đã xử lý trong chuỗi `needs_spec`

1. `bmi`
2. `ti-le-mo-co-the`
3. `duong-do-uong`
4. `khau-phan-don-gian`
5. `tinh-calo-tieu-thu`

## 5. Scope ổn định của từng tool `needs_spec` đã hoàn tất

- `bmi`: `safe BMI orientation + safety shell only`
- `ti-le-mo-co-the`: `safe body-fat estimate orientation + safety shell only`
- `duong-do-uong`: `neutral beverage sugar label helper + safety shell only`
- `khau-phan-don-gian`: `neutral simple portion orientation + safety shell only`
- `tinh-calo-tieu-thu`: `neutral activity energy estimate orientation + safety shell only`

## 6. Các mốc commit chính

### `bmi`

- spec: `bbac854`
- QA polish: `6d6108d`
- final review: `473ebe3`
- status: `b0a409b`

### `ti-le-mo-co-the`

- spec: `08774d5`
- QA polish: `cf66d1f`
- final review: `59b5e2a`
- status: `2bcbf19`

### `duong-do-uong`

- spec: `62a64bf`
- QA polish: `04cb077`
- final review: `74f2f8a`
- status: `9a4db4b`

### `khau-phan-don-gian`

- spec: `0ec58b4`
- QA polish: `1fb33cc`
- final review: `ba81505`
- status: `8d14a0b`

### `tinh-calo-tieu-thu`

- spec: `b553878`
- QA polish: `04d74bb`
- final review: `4c33574`
- status: `33e0971`

## 7. Nguyên tắc an toàn đã khóa sau nhóm `needs_spec`

- Không biến công cụ thành tư vấn điều trị cá nhân.
- Không kết luận `tốt/xấu`, `nên/không nên`, `đạt/không đạt`.
- Không target bệnh nền.
- Không kết luận `phù hợp/an toàn` cho bệnh.
- Không hướng dẫn chỉnh thuốc / insulin / lợi tiểu / thuốc tim mạch.
- Không dùng các tool này để tự đặt mục tiêu giảm cân, tăng cân, ăn bù, khẩu phần cá nhân hoặc điều trị.
- Không dùng chỉ số BMI, tỉ lệ mỡ, đường đồ uống, khẩu phần, calo tiêu hao để chẩn đoán hoặc phân tầng nguy cơ cá nhân.
- Route phải có safety shell rõ.
- Dữ liệu / đơn vị phải trung tính, có ngữ cảnh, không biến missing data thành `0`.
- Tránh `innerHTML` với dữ liệu người dùng nhập.
- XSS/fuzz đã được kiểm theo từng vòng.
- Mobile `390 x 844` đã được kiểm theo từng vòng.

## 8. Các điểm cần nhớ về dữ liệu / source-lock

- Body fat calculator đã hạ về orientation-only vì công thức user-facing chưa source-lock đủ chắc.
- Đường đồ uống đã bỏ `WHO 25g/ngày`, `% nhu cầu ngày` và quy đổi muỗng cà phê.
- Khẩu phần đơn giản đã hạ orientation-only, bỏ `kcal` và quy đổi muối user-facing.
- Tính calo tiêu thụ vẫn là calculator tham khảo; `MET/source-lock` nên làm rõ hơn nếu muốn nâng độ tin cậy dữ liệu, nhưng không là blocker vì route chỉ ở mức ước tính tham khảo.
- Backlog data QA mã `6014` vẫn chưa xử lý:
  - Mã `6014` -- `Dầu oliu` -- `metadata/name_en` nghi ngờ gây nhiễu search query `thịt`.

## 9. Backlog còn lại

- `stub_or_draft`: 2
- data QA mã `6014`
- Chưa deploy

## 10. Đề xuất bước tiếp theo

- Không deploy ngay.
- Nên tạo vòng triage riêng cho `stub_or_draft`:
  - `stub-or-draft-triage-v1`
- Vòng triage đó chỉ đọc, xác định chính xác 2 tool `stub_or_draft`, đánh giá rủi ro, đề xuất thứ tự xử lý và scope an toàn.
- Sau triage mới chọn từng tool.

## 11. Những việc không làm trong vòng này

- Không sửa route.
- Không sửa counts.
- Không sửa engine.
- Không sửa dữ liệu gốc.
- Không sửa `dist`.
- Không xử lý `6014`.
- Không deploy.

## 12. File sửa

- `reports/post-needs-spec-complete-v1.md`

## 13. QA cuối

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: to confirm after report update
- `git status --short`: to confirm after report update

## 14. Worktree cuối

- Worktree sẽ được xác nhận sạch sau khi commit report nếu toàn bộ QA pass.

## 15. Kết luận

- Queue `needs_spec` đã đóng hoàn toàn.
- Project hiện có `36` tool `stable_v1` trên tổng `38` tool.
- `needs_qa_polish` vẫn bằng `0`.
- `clinical_high_risk` vẫn bằng `0`.
- Backlog còn lại để xử lý sau chỉ còn `stub_or_draft: 2` và data QA `6014`.
- Chưa deploy.
