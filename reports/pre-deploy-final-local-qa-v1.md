# Pre Deploy Final Local QA v1

Date: 2026-07-06

## 1. Mốc đầu vào

- Milestone đầu vào: `post-data-qa-olive-metadata-followup-v1`
- Commit: `96e1b08 docs: summarize olive metadata data QA resolution`
- Branch khi bắt đầu: `data-qa-olive-metadata-followup-v1`
- Worktree đầu vào sạch
- Chưa deploy

## 2. Kết luận chính

- `38/38 stable_v1` không đổi.
- QA local cuối toàn project đã pass.
- Browser QA tối thiểu cho các route search thực phẩm đã pass.
- Có phát hiện một lỗi thật trong lúc pre-deploy QA:
  - query không dấu kiểu `dau` / `dau oliu` chưa match đúng `dầu` / `dầu oliu` ở route `/cong-cu/tra-cuu-thuc-pham-viet/`
- Root cause đã được xác nhận và sửa hẹp ngay trong vòng này.
- Sau khi sửa, toàn bộ QA được rerun và pass.
- Chưa deploy.

## 3. Counts hiện tại

- `stable_v1`: 38
- `needs_spec`: 0
- `needs_qa_polish`: 0
- `stub_or_draft`: 0
- `clinical_high_risk`: 0
- `total`: 38

## 4. Lỗi thật phát hiện trong pre-deploy QA

Route bị ảnh hưởng:

- `/cong-cu/tra-cuu-thuc-pham-viet/`

Triệu chứng:

- `dầu`, `dầu oliu`, `olive`, `olive oil`, `dầu ngô`, `dau ngo`, `corn oil` hoạt động
- nhưng `dau` và `dau oliu` trước khi sửa trả `0 kết quả`

Root cause:

- Hàm `removeAccents()` chỉ bỏ dấu tổ hợp Unicode nhưng chưa đổi `đ/Đ` thành `d/D`
- Vì vậy chuỗi kiểu `dầu` sau normalize vẫn thành `đau`, không match được query không dấu `dau`

Phạm vi sửa:

- Chỉ sửa hẹp trong file route:
  - `src/pages/cong-cu/tra-cuu-thuc-pham-viet.astro`
- Không sửa data
- Không sửa nutrient values
- Không sửa UI copy
- Không sửa search logic chung ở route khác

## 5. Kết quả sau sửa

Search hồi quy trên `/cong-cu/tra-cuu-thuc-pham-viet/`:

- `thịt` -> trả thực phẩm thịt hợp lý, không trả `6014`
- `thit` -> trả thực phẩm thịt hợp lý, không trả `6014`
- `dầu` -> hoạt động
- `dau` -> hoạt động
- `dầu oliu` -> trả `6014 — Dầu oliu`
- `dau oliu` -> trả `6014 — Dầu oliu`
- `olive` -> trả các record hợp lý, gồm `4105` và `6014`, không kéo sai `6013`
- `olive oil` -> trả `6014 — Dầu oliu`
- `dầu ngô` -> trả `6013 — Dầu ngô`
- `dau ngo` -> trả `6013 — Dầu ngô`
- `corn oil` -> trả `6013 — Dầu ngô`

Các fix data QA gần nhất vẫn giữ nguyên hiệu lực:

- `6014 — Dầu oliu` không còn bị query `thịt/thit` kéo nhầm
- `6013 — Dầu ngô` không còn bị query `olive` kéo nhầm

## 6. Browser/local QA

Preview port dùng để kiểm:

- `4323`

Desktop smoke:

- `/cong-cu/` pass
- `/cong-cu/tra-cuu-thuc-pham-viet/` pass
- `/cong-cu/loc-thuc-pham/` pass
- `/cong-cu/so-sanh-thuc-pham/` pass
- Không redirect bất thường
- Không meta refresh
- Console sạch
- Không overflow ngang
- Không thấy framework error overlay

Mobile `390 x 844`:

- `/cong-cu/` pass
- `/cong-cu/tra-cuu-thuc-pham-viet/` pass
- `/cong-cu/loc-thuc-pham/` pass
- `/cong-cu/so-sanh-thuc-pham/` pass
- Không overflow ngang
- Console sạch
- Không meta refresh

## 7. XSS / fuzz QA

Đã test:

- `<script>alert(1)</script>`
- `<b>gao</b>`
- `"><img src=x onerror=alert(1)>`
- `=HYPERLINK("http://x","x")`
- `+SUM(1,1)`
- `@cmd`
- `-1+2`

Kết quả:

- Không tạo dialog
- Không render HTML
- Không phá layout
- Không lỗi console

## 8. QA command pass/fail

- `npm run build` pass
- `npm run qa` pass
- `npm run qa:food-data` pass
- `npm run qa:data-consistency` pass
- `npm run test:tools` pass
- `git diff --check` pass
- `git status --short` pass trước commit, chỉ còn đúng file route sửa và file report này

## 9. Những gì không đổi

- Không đổi tool status/counts
- Không sửa data QA `6013/6014`
- Không sửa nutrient values
- Không sửa UI copy nếu không cần
- Không sửa `dist` thủ công
- Không deploy

## 10. Kết luận

- Pre-deploy local QA đã hoàn tất ở mức local.
- Có phát hiện một blocker thật về search không dấu ở route tra cứu và đã sửa hẹp trong cùng vòng QA.
- Sau khi sửa, QA CLI + browser regression đều pass.
- `38/38 stable_v1` vẫn giữ nguyên.
- Chưa deploy.
