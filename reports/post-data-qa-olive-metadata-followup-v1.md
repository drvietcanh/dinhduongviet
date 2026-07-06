# Post Data QA Olive Metadata Follow-up v1

Date: 2026-07-06

## 1. Mốc đầu vào

- Milestone đầu vào: `data-qa-olive-metadata-followup-v1`
- Commit: `0a50202 fix: resolve olive metadata search issue`
- Chưa deploy.
- Worktree đầu vào sạch.

## 2. Kết luận chính

- Follow-up metadata tiếng Anh liên quan query `olive` đã được xử lý.
- Root cause: record `6013 — Dầu ngô` có `name_en` sai, bị gắn thành `Olive oil, salad or cooking`, làm query `olive` kéo nhầm record này ở route tra cứu.
- Đã sửa hẹp đúng metadata của record `6013` trong dữ liệu nguồn liên quan.
- Đã đồng bộ chunk nguồn của chính record `6013`.
- Đã rebuild pipeline để cập nhật artifact đang nuôi route tra cứu.
- Không sửa nutrient values.
- Không sửa route UI.
- Không sửa search logic chung.
- Chưa deploy.

## 3. Counts tool status không đổi

- `stable_v1`: 38
- `needs_spec`: 0
- `needs_qa_polish`: 0
- `stub_or_draft`: 0
- `clinical_high_risk`: 0
- `total`: 38

## 4. Scope sửa

- Chỉ sửa metadata sai của record `6013`.
- Giá trị đã sửa:
  - `name_en`: từ `Olive oil, salad or cooking`
  - thành `Corn oil, salad or cooking`
- Đồng bộ file chunk nguồn tương ứng của `6013`.
- Rebuild artifact dữ liệu để route tra cứu dùng dữ liệu đã sửa.
- Không đụng lại record `6014` vì issue `thịt/thit` đã được resolved ở vòng trước.

## 5. Kết quả sau fix

Route chính được xác nhận:

- `/cong-cu/tra-cuu-thuc-pham-viet/`

Kết quả search:

- Query `olive` không còn trả sai `6013 — Dầu ngô`.
- Query `olive` chỉ còn các match hợp lý:
  - `4105 — Trám đen chín — Chinese olive`
  - `6014 — Dầu oliu — Olive oil`
- Query `olive oil` chỉ còn trả `6014 — Dầu oliu`.
- Query `dầu`, `dau`, `dầu oliu`, `dau oliu`, `olive`, `olive oil` vẫn tìm được `6014`.
- Query `thịt/thit` vẫn không trả `6014 — Dầu oliu`.
- Search có dấu/không dấu vẫn hoạt động.
- Missing data vẫn hiển thị như cũ.
- `0` vẫn phân biệt với missing data.
- Không hỏng đơn vị/kcal/g/mg.

## 6. QA đã pass trong vòng `data-qa-olive-metadata-followup-v1`

- `npm run build` pass qua rerun bằng log file sau `EPIPE`
- `npm run qa` pass
- `npm run qa:food-data` pass
- `npm run qa:data-consistency` pass
- `npm run test:tools` pass
- `git diff --check` pass
- `git status --short` sạch sau commit

## 7. Browser/mobile QA

- `/cong-cu/` trả `200`
- `/cong-cu/tra-cuu-thuc-pham-viet/` trả `200`
- `/cong-cu/loc-thuc-pham/` trả `200`
- `/cong-cu/so-sanh-thuc-pham/` trả `200`
- Không redirect
- Không meta refresh
- Console sạch trong fresh reload/session
- Desktop không overflow ngang
- Mobile `390 x 844` không overflow ngang
- XSS/fuzz không render HTML, không dialog, không lỗi console

## 8. Trạng thái sau follow-up

- Tools core vẫn stable local `38/38`.
- Counts/status không đổi.
- Backlog data QA `6014` đã resolved từ vòng trước.
- Follow-up metadata `olive` đã resolved ở vòng này.
- Chưa deploy.

## 9. Backlog còn lại

- Chưa deploy.

Nếu muốn đi tiếp, vòng hợp lý tiếp theo là:

- `pre-deploy-final-local-qa-v1`

## 10. Những việc không làm trong vòng này

- Không sửa route.
- Không sửa card.
- Không sửa counts.
- Không sửa nutrient values.
- Không sửa engine/search logic chung.
- Không sửa `dist`.
- Không deploy.

## 11. File sửa trong checkpoint này

- `reports/post-data-qa-olive-metadata-followup-v1.md`
