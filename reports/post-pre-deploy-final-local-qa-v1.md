# Post Pre Deploy Final Local QA v1

Date: 2026-07-24

## 1. Mốc đầu vào

- Milestone đầu vào: `pre-deploy-final-local-qa-v1`
- Commit QA report: `a7bd977 docs: summarize pre deploy local QA`
- Commit fix phát hiện trong vòng QA: `fbe58c0 fix: normalize Vietnamese food lookup query for dau`
- Branch khi ghi nhận checkpoint: `data-qa-olive-metadata-followup-v1`
- Chưa deploy.

## 2. Kết luận chính

- Pre-deploy local QA đã hoàn tất ở mức local.
- `38/38 stable_v1` không đổi.
- QA CLI toàn project đã pass trong vòng pre-deploy.
- Browser regression tối thiểu cho các route search thực phẩm đã pass.
- Có phát hiện một lỗi thật trong vòng pre-deploy:
  - query không dấu `dau` / `dau oliu` chưa match đúng `dầu` / `dầu oliu`
- Root cause đã được xác nhận rõ:
  - hàm normalize ở route tra cứu chưa đổi `đ/Đ` thành `d/D`
- Đã sửa hẹp đúng route bị ảnh hưởng.
- Sau fix, QA được rerun và pass.
- Chưa deploy.

## 3. Counts tool status không đổi

- `stable_v1`: 38
- `needs_spec`: 0
- `needs_qa_polish`: 0
- `stub_or_draft`: 0
- `clinical_high_risk`: 0
- `total`: 38

## 4. Phạm vi sửa trong vòng pre-deploy QA

- Chỉ sửa hẹp file:
  - `src/pages/cong-cu/tra-cuu-thuc-pham-viet.astro`
- Mục tiêu sửa:
  - để query không dấu kiểu `dau`, `dau oliu` match đúng dữ liệu có `dầu`, `dầu oliu`
- Không sửa:
  - data QA `6013`
  - data QA `6014`
  - nutrient values
  - UI copy
  - tool status/counts
  - search logic chung ở route khác
  - `dist` thủ công
  - deploy

## 5. Trạng thái regression sau fix

Route chính đã xác nhận:

- `/cong-cu/tra-cuu-thuc-pham-viet/`

Search hồi quy đã pass:

- `thịt`
- `thit`
- `dầu`
- `dau`
- `dầu oliu`
- `dau oliu`
- `olive`
- `olive oil`
- `dầu ngô`
- `dau ngo`
- `corn oil`

Kết quả cần giữ vẫn đúng:

- `6014 — Dầu oliu` không còn bị query `thịt/thit` kéo nhầm
- `6014` vẫn tìm được bằng `dầu/dau/dầu oliu/dau oliu/olive/olive oil`
- `6013 — Dầu ngô` không còn bị query `olive` kéo nhầm
- `6013` vẫn tìm được bằng `dầu ngô/dau ngo/corn oil`

## 6. Browser/mobile QA đã pass

Preview port dùng trong vòng QA:

- `4323`

Desktop:

- `/cong-cu/`
- `/cong-cu/tra-cuu-thuc-pham-viet/`
- `/cong-cu/loc-thuc-pham/`
- `/cong-cu/so-sanh-thuc-pham/`

Mobile `390 x 844`:

- `/cong-cu/`
- `/cong-cu/tra-cuu-thuc-pham-viet/`
- `/cong-cu/loc-thuc-pham/`
- `/cong-cu/so-sanh-thuc-pham/`

Xác nhận:

- không redirect bất thường
- không meta refresh
- console sạch
- không overflow ngang
- XSS/fuzz không render HTML, không dialog, không lỗi console

## 7. QA command đã pass trong vòng pre-deploy

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:tools`
- `git diff --check`
- `git status --short` pass trong scope vòng QA tại thời điểm chốt vòng

## 8. Tình trạng trước deploy

- Tools core local: `38/38 stable_v1`
- Data QA `6013/6014/olive` trong scope gần nhất đã resolved
- Pre-deploy local QA đã chạy xong
- Chưa deploy

## 9. Những gì checkpoint này không làm

- Không sửa thêm code ngoài report này
- Không sửa data
- Không sửa tool status/counts
- Không deploy

## 10. Ghi chú worktree

- Checkpoint này chỉ ghi nhận trạng thái sau vòng pre-deploy QA.
- Nếu worktree hiện tại có thay đổi khác ngoài scope checkpoint, các thay đổi đó không thuộc report này và không bị chỉnh sửa trong vòng hiện tại.
