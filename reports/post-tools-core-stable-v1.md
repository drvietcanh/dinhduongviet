# Post Tools Core Stable v1

Date: 2026-07-06

Branch: `post-tools-core-stable-v1`

## 1. Mốc đầu vào

- Status baseline: `tools-core-status-v35`
- Commit: `47c5469 docs: update tool status with energy draft safety shell v1`
- Chưa deploy.
- Worktree đầu vào sạch.

## 2. Kết luận chính

- `38/38` tool đã được đưa về `stable_v1` ở mức safety/status hiện tại.
- `needs_spec = 0`.
- `needs_qa_polish = 0`.
- `stub_or_draft = 0`.
- `clinical_high_risk = 0`.
- Backlog ngoài tool status còn lại:
  - data QA mã `6014`
  - chưa deploy

## 3. Counts hiện tại

- `stable_v1`: 38
- `needs_spec`: 0
- `needs_qa_polish`: 0
- `stub_or_draft`: 0
- `clinical_high_risk`: 0
- `total`: 38

## 4. Tóm tắt các mốc lớn đã hoàn tất

- `P0 clinical_high_risk` complete
- `needs_qa_polish` complete
- `needs_spec` complete
- `stub_or_draft` complete
- `tools core stable local` complete

## 5. Hai tool `stub_or_draft` cuối đã xử lý

### `tinh-macro`

- safety patch: `9bc96d1 fix: replace macro redirect stub with safe landing page`
- QA polish: `5f6f57c test: add macro draft landing page QA`
- final review: `cb58adc test: finalize macro draft landing page review`
- status: `3acf25c docs: update tool status with macro draft safety shell v1`
- stable scope: `safe draft landing page + safety shell only`
- route: `/cong-cu/tinh-macro/`
- card vẫn giữ trạng thái `Bản nháp`, không gắn `Đã kiểm v1` để tránh hiểu nhầm là calculator hoàn chỉnh

### `tinh-nang-luong`

- safety patch: `9e72931 fix: replace energy redirect stub with safe landing page`
- QA polish: `c0e0d7c test: add energy draft landing page QA`
- final review: `110dc1c test: finalize energy draft landing page review`
- status: `47c5469 docs: update tool status with energy draft safety shell v1`
- stable scope: `safe draft landing page + safety shell only`
- route: `/cong-cu/tinh-nang-luong/`
- card vẫn giữ trạng thái `Bản nháp`, không gắn `Đã kiểm v1` để tránh hiểu nhầm là calculator hoàn chỉnh

## 6. Nguyên tắc an toàn đã khóa toàn bộ 38 tool

- Không biến tool thành tư vấn điều trị cá nhân.
- Không kết luận `tốt/xấu`, `nên/không nên`, `đạt/không đạt` nếu không có scope/source-lock rất rõ.
- Không kết luận `phù hợp/an toàn` cho bệnh.
- Không target bệnh nền nếu không có scope riêng.
- Không hướng dẫn chỉnh thuốc, insulin, thuốc hạ đường huyết, lợi tiểu, thuốc tim mạch hoặc chế độ điều trị.
- Không dùng các tool để tự đặt mục tiêu giảm cân, tăng cân, ăn bù, khẩu phần cá nhân hoặc điều trị.
- Các calculator còn lại phải giữ wording `ước tính/tham khảo`.
- Các landing page nháp phải ghi rõ `đang hoàn thiện/bản nháp` và không giả làm calculator hoàn chỉnh.
- Không dùng `innerHTML` với dữ liệu người dùng nhập.
- XSS/fuzz đã được kiểm theo từng vòng.
- Mobile `390 x 844` đã được kiểm theo từng vòng.
- Git LF/CRLF Windows chỉ ghi nhận nếu `git diff --check` pass.

## 7. Trạng thái data/source còn cần nhớ

- Backlog data QA mã `6014` chưa xử lý:
  - Mã `6014` — `Dầu oliu` — `metadata/name_en` nghi ngờ gây nhiễu search query `thịt`.
- Không xử lý trong checkpoint này.
- Nếu xử lý sau, tạo vòng riêng:
  - `data-qa-6014-v1`
- Không sửa dữ liệu gốc lẫn search behavior trong checkpoint này.

## 8. Trạng thái deploy

- Chưa deploy.
- Không deploy trong checkpoint này.
- Nếu muốn deploy sau, cần tạo vòng riêng:
  - `pre-deploy-final-local-qa-v1`
- Sau đó mới deploy nếu người dùng xác nhận rõ.

## 9. Đề xuất bước tiếp theo sau checkpoint

Ưu tiên 1:

- `data-qa-6014-v1` nếu muốn dọn backlog dữ liệu trước deploy.

Ưu tiên 2:

- `pre-deploy-final-local-qa-v1` nếu muốn chuẩn bị deploy, nhưng vẫn chưa deploy cho đến khi có yêu cầu rõ.

## 10. Những việc không làm trong vòng này

- Không sửa route.
- Không sửa card.
- Không sửa counts.
- Không sửa engine.
- Không sửa dữ liệu gốc.
- Không sửa `dist`.
- Không xử lý `6014`.
- Không deploy.

## 11. File sửa

- `reports/post-tools-core-stable-v1.md`

## 12. QA cuối

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: to confirm after report update
- `git status --short`: to confirm after report update

## 13. Worktree cuối

- Worktree sẽ được xác nhận sạch sau khi commit report nếu toàn bộ QA pass.

## 14. Kết luận

- Mốc `tools core stable local complete` đã được khóa lại bằng checkpoint này.
- Project hiện có `38/38` tool ở trạng thái `stable_v1` theo safety/status hiện tại.
- Backlog còn lại ngoài tool status chỉ còn data QA `6014` và bước deploy.
- Chưa deploy.
