# Post Data QA 6014 v1

Date: 2026-07-06

Branch: `post-data-qa-6014-v1`

## 1. Mốc đầu vào

- Milestone đầu vào: `data-qa-6014-v1`
- Commit: `27b0a9d fix: resolve food data search issue for olive oil`
- Chưa deploy.
- Worktree đầu vào sạch.

## 2. Kết luận chính

- Backlog data QA mã `6014` đã được xử lý.
- Root cause: `name_en` của record `6014 — Dầu oliu` bị gắn nhầm thành nhãn nhóm thịt, làm query `thịt/thit` kéo sai record này ở route tra cứu.
- Đã sửa hẹp đúng metadata của record `6014` trong dữ liệu nguồn đang nuôi API hiện tại.
- Đã rebuild pipeline.
- Không sửa nutrient values.
- Không sửa route UI.
- Không sửa engine/công thức chung nếu không liên quan.
- Chưa deploy.

## 3. Counts tool status không đổi

- `stable_v1`: 38
- `needs_spec`: 0
- `needs_qa_polish`: 0
- `stub_or_draft`: 0
- `clinical_high_risk`: 0
- `total`: 38

## 4. Kết quả sau fix

Route chính được xác nhận:

- `/cong-cu/tra-cuu-thuc-pham-viet/`

Kết quả search:

- Query `thịt` không còn trả về `6014 — Dầu oliu`.
- Query `thit` không còn trả về `6014 — Dầu oliu`.
- Query `dầu`, `dau`, `dầu oliu`, `dau oliu`, `olive`, `olive oil` vẫn tìm được `6014`.
- Search có dấu/không dấu vẫn hoạt động.
- Query thịt vẫn trả về các thực phẩm thịt hợp lý nếu dữ liệu có.
- XSS/fuzz không render HTML, không dialog, không lỗi console.
- Desktop và mobile `390 x 844` không overflow ngang.

## 5. QA đã pass trong vòng `data-qa-6014-v1`

- `npm run build` pass qua rerun bằng log file sau `EPIPE`
- `npm run qa` pass
- `npm run qa:food-data` pass
- `npm run qa:data-consistency` pass
- `npm run test:tools` pass
- `git diff --check` pass
- `git status --short` sạch sau commit

## 6. Backlog còn lại

- Chưa deploy.
- Có một metadata tiếng Anh đáng ngờ ở record khác khi search `olive`, nhưng đó là issue riêng ngoài scope `6014`.
- Nếu muốn xử lý sau, tạo vòng riêng:
  - `data-qa-olive-metadata-followup-v1`
- Không xử lý issue đó trong checkpoint này.

## 7. Trạng thái trước deploy

- Tools core đã stable local `38/38`.
- Data QA `6014` đã resolved.
- Chưa deploy.
- Bước hợp lý tiếp theo nếu muốn deploy:
  - `pre-deploy-final-local-qa-v1`
- Nếu muốn dọn tiếp nghi vấn metadata khác trước deploy:
  - `data-qa-olive-metadata-followup-v1`

## 8. Những việc không làm trong vòng này

- Không sửa route.
- Không sửa card.
- Không sửa counts.
- Không sửa engine.
- Không sửa dữ liệu gốc ngoài ghi nhận checkpoint.
- Không sửa `dist`.
- Không xử lý metadata olive follow-up.
- Không deploy.

## 9. File sửa

- `reports/post-data-qa-6014-v1.md`

