# Worktree User-Facing Blockers v1

Date: 2026-07-27

## 1. Mốc đầu vào

- Branch hiện tại: `data-qa-olive-metadata-followup-v1`
- Các report nền đã đọc:
  - `reports/worktree-reconcile-v1.md`
  - `reports/worktree-scope-triage-v1.md`
  - `reports/worktree-scope-triage-v2-content-vs-ux.md`
  - `reports/shared-search-ux-audit-v1.md`
  - `reports/shared-search-data-scope-note-v1.md`
- Chưa deploy

## 2. Kết luận chính

- Worktree hiện tại **vẫn chưa nên deploy**.
- Tuy nhiên, sau vòng rà này, chưa thấy thêm một blocker build mới:
  - `npm run build` đã pass trên snapshot worktree hiện tại
- Rủi ro lớn nhất lúc này nằm ở:
  1. shared search / discovery đang là cụm có blast radius rộng nhất
  2. nhiều route `/cong-cu/` đã drift khỏi snapshot stable trước đây
  3. batch content + taxonomy + generated search data đang bị trộn vào cùng một worktree

## 3. Kiểm tra nhanh vừa thực hiện

- `npm run build`:
  - pass
  - log: `current-worktree-build.log`

Điều này cho thấy:

- repo hiện không ở trạng thái vỡ compile toàn cục
- nhưng build pass **không đủ** để coi worktree là sẵn sàng QA/deploy

## 4. Các blocker/risk user-facing hiện nên ưu tiên

### P1 — Shared search / discovery batch đang chi phối quá nhiều bề mặt

File nóng:

- `src/components/AutoSearch.astro`
- `src/pages/tim-kiem.astro`
- `src/pages/cong-cu/index.astro`
- `public/api/search-index.json`

Lý do:

- thay đổi search UX, highlight, ranking, suggestions, keyboard flow, recent search
- ảnh hưởng không chỉ `/tim-kiem/` mà còn các vùng dùng search shared
- nếu có regression, blast radius sẽ rộng hơn một route riêng lẻ

Tình trạng hiện tại:

- đã được vá một số blocker trước đó
- build hiện pass
- nhưng cụm này vẫn cần được xem là **scope riêng**, không nên lẫn vào batch content/article

### P1 — Tool-route drift khỏi snapshot stable lịch sử

Vùng bị ảnh hưởng:

- nhiều route trong `src/pages/cong-cu/`

Ví dụ diff lớn:

- `tinh-macro`
- `tinh-nang-luong`
- `bmi`
- `lap-thuc-don-tuan`
- `theo-doi-suc-khoe`
- `tuong-tac-thuoc-thuc-pham`

Lý do:

- các route này trước đó đã có vòng stable/final-review riêng
- worktree hiện tại có thay đổi tiếp trên cùng bề mặt
- cần xác nhận route-level diff chỉ là inherit UI hay đã đổi logic/copy/runtime thật

### P1 — Content expansion + specialty mapping đang kéo theo search/discovery

File/vùng chính:

- `src/data/articles.ts`
- `src/pages/kien-thuc-dinh-duong/*.astro`
- `scripts/analyze_specialties.mjs`
- `scripts/check_specialties.mjs`

Lý do:

- batch content mới đang đi cùng taxonomy `specialty`
- các thay đổi này nhiều khả năng nuôi thẳng `search-index.json`
- nếu tiếp tục sửa search mà không tách content batch, review sẽ mờ nguyên nhân

## 5. Những gì vừa được làm rõ thêm

### A. Không nên coi `search-index.json` thiếu `6013/6014` là bug mới

Đã xác nhận:

- route `/cong-cu/tra-cuu-thuc-pham-viet/` dùng `public/api/vietnam-foods.json`
- app-level search/filter/compare dùng pipeline khác:
  - `dist/api-foods.json`
  - `foods-slim.json`
  - `foods-full.json`
  - `search-index.json`

Kết luận:

- đây là khác biệt scope dữ liệu
- không phải blocker mới trong vòng này

### B. Build pass không giải quyết được rủi ro batch lẫn scope

Mặc dù build pass:

- worktree vẫn chứa một cụm rất lớn thay đổi về:
  - content
  - shared search
  - tool routes
  - app shell/dependency
  - generated artifacts

Nên:

- không nên nhảy thẳng sang deploy hoặc “final QA toàn batch” lần nữa

## 6. Thứ tự nên làm tiếp theo

### Ưu tiên 1

`shared-search-ux-regression-audit-v2`

Mục tiêu:

- khóa riêng runtime/user-facing behavior của:
  - `AutoSearch`
  - `/tim-kiem/`
  - `/cong-cu/`
- xác nhận:
  - ranking
  - highlight
  - keyboard navigation
  - suggestions
  - empty state
  - XSS/fuzz

### Ưu tiên 2

`tools-runtime-regression-audit-v1`

Mục tiêu:

- rà các route `/cong-cu/` có diff lớn trong worktree hiện tại
- tách route nào chỉ đổi presentation khỏi route nào đã drift logic/copy

### Ưu tiên 3

`content-specialty-expansion-audit-v1`

Mục tiêu:

- định lượng batch article mới/chỉnh sửa
- xác nhận taxonomy `specialty`
- khóa scope content riêng trước khi nghĩ tới deploy

## 7. Những gì không làm trong vòng này

- Không sửa code
- Không sửa data
- Không sửa counts/status `38/38 stable_v1`
- Không sửa dist thủ công
- Không deploy

## 8. Kết luận hành động

- Hiện chưa có bằng chứng về một blocker compile mới.
- Nhưng worktree vẫn là batch đa scope với rủi ro user-facing thật ở shared search và tool-route drift.
- Bước tiếp theo an toàn nhất là audit runtime shared search trước, rồi mới rà cụm `/cong-cu/`.
