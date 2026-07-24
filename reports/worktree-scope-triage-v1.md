# Worktree Scope Triage v1

Date: 2026-07-24

## 1. Mốc đầu vào

- Branch hiện tại: `data-qa-olive-metadata-followup-v1`
- Base context gần nhất đã chốt:
  - `4288312 docs: summarize post pre deploy local QA`
  - `3911c10 docs: audit current worktree scope`
- Stable tracking gần nhất:
  - `stable_v1: 38`
  - `needs_spec: 0`
  - `needs_qa_polish: 0`
  - `stub_or_draft: 0`
  - `clinical_high_risk: 0`
  - `total: 38`
- Chưa deploy

## 2. Kết luận chính

- Worktree hiện tại là một **batch đa scope**, không nên xem như phần nối tiếp trực tiếp của luồng `6013/6014/pre-deploy QA`.
- Batch này nghiêng mạnh về:
  - mở rộng / tái phân loại **content bài viết**
  - chỉnh **shared search / shared layout / shared card UI**
  - cập nhật **search index / article registry / bulk catalog**
  - chạm lại nhiều route `/cong-cu/`
  - thêm một ít script phục vụ phân tích chuyên khoa
- Nếu muốn tiếp tục hoàn thiện an toàn, cần tách batch hiện tại thành các scope nhỏ hơn trước khi QA/deploy.

## 3. Quy mô và phân bố

Tại thời điểm triage:

- Tổng số path thay đổi/chưa track: `259`
- `src`: `249`
- `public`: `3`
- `scripts`: `2`
- root config/package: `3`
- artifact/thư mục ngoài scope rõ ràng: `.agents/`, `xu-ly-van-phong-v2.0/`

Phân cụm đáng chú ý:

- `src/pages/cong-cu/`: `33` file
- `src/pages/kien-thuc-dinh-duong/`: `194` file
- `src/components/`: `7` file
- nhóm data/generated/scripts chính: `7` file

## 4. Các scope thực tế đã lộ ra

### Scope A — Content expansion / specialty mapping

Tín hiệu:

- `src/data/articles.ts` tăng rất lớn
- nhiều file mới trong `src/pages/kien-thuc-dinh-duong/`
- nhiều file bài viết cũ cũng bị sửa lại
- có script:
  - `scripts/analyze_specialties.mjs`
  - `scripts/check_specialties.mjs`

Mẫu quan sát:

- `src/data/articles.ts` đang được bơm thêm hàng loạt entry mới với field `specialty`
- `src/pages/kien-thuc-dinh-duong/benh-celiac-gluten.astro` là một bài mới hoàn chỉnh, không phải placeholder
- `scripts/check_specialties.mjs` đang rà khớp `title` với `specialty`, cho thấy batch này có mục tiêu taxonomy/chuyên khoa khá rõ

Đánh giá:

- Đây là scope lớn nhất
- Có vẻ là một đợt mở rộng kho bài viết + gán chuyên khoa + cập nhật article registry
- Nên được xem là **scope độc lập số 1**

### Scope B — Shared search / discovery / UX refresh

Tín hiệu:

- `src/components/AutoSearch.astro`
- `src/components/ArticleCard.astro`
- `src/components/FoodCard.astro`
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `src/pages/tim-kiem.astro`

Mẫu quan sát:

- `AutoSearch.astro` được đổi mạnh về UI/interaction:
  - backdrop
  - clear button
  - hotkey `Ctrl K`
  - highlight từ khóa
  - thay đổi styling lớn
- `public/api/search-index.json` thay đổi hàng loạt ở đầu file, rất phù hợp với việc batch content mới được đưa vào search

Đánh giá:

- Đây là **scope shared UX/discovery**
- Blast radius rộng
- Nếu giữ chung với batch content thì review sẽ rất khó

### Scope C — Tool route retouch / drift khỏi stable snapshot

Tín hiệu:

- `33` route trong `/src/pages/cong-cu/` đang bị sửa
- gồm cả nhiều tool trước đó đã từng qua stable/final-review

Đánh giá:

- Chưa đủ dữ liệu để kết luận đây là redesign có chủ đích hay side effect từ shared layout/components
- Nhưng đây là scope rủi ro cao vì có thể làm drift khỏi trạng thái `38/38 stable_v1` ở mức runtime

Gợi ý:

- Nếu phần lớn diff ở `/cong-cu/` chỉ là inherit từ shared layout/components thì nên cô lập
- Nếu có logic/copy riêng từng tool bị sửa, cần tách thành scope riêng sau

### Scope D — Build / dependency / app shell

Tín hiệu:

- `package.json`
- `package-lock.json`
- `astro.config.mjs`

Mẫu quan sát:

- Có thêm:
  - `@astrojs/sitemap`
  - `@vite-pwa/astro`
  - `workbox-window`

Đánh giá:

- Đây là scope hạ tầng/app shell tương đối độc lập
- Có thể liên quan PWA/sitemap/distribution, không nên lẫn với content batch nếu muốn review gọn

### Scope E — Generated artifacts

Tín hiệu:

- `public/api/foods-full.json`
- `public/api/foods-slim.json`
- `public/api/search-index.json`

Đánh giá:

- `search-index.json` nhiều khả năng là generated từ batch article/content mới
- `foods-full.json` / `foods-slim.json` cần xác nhận có phải side effect build hay có sửa source data thật
- Không nên quyết định commit artifact trước khi rõ source-of-truth

### Scope F — Unknown local artifacts

Tín hiệu:

- `.agents/`
- `xu-ly-van-phong-v2.0/`

Đánh giá:

- Đây nhiều khả năng không nên đi theo deploy branch
- Cần xác nhận ngay ở vòng sau là:
  - scratch local
  - tool internal
  - hay thật sự là một phần product repo

## 5. Phân loại ưu tiên xử lý

### P0 — Cần làm rõ trước mọi thứ khác

1. `Scope A` — content expansion / specialty mapping
2. `Scope B` — shared search / discovery / UX refresh
3. `Scope D` — build / dependency / app shell

Lý do:

- chúng làm thay đổi bề mặt sản phẩm rất rộng
- rất dễ kéo theo ảnh hưởng chéo
- nếu không tách rõ sẽ không thể trust QA/deploy

### P1 — Cần bóc tách ngay sau đó

4. `Scope C` — tool route retouch / drift
5. `Scope E` — generated artifacts

Lý do:

- có thể chỉ là hệ quả của scope khác
- nhưng vẫn phải xác minh trước khi deploy

### P2 — Dọn cuối nhưng phải dọn

6. `Scope F` — unknown local artifacts

## 6. Đề xuất nhịp xử lý thực tế

### Bước 1

Tạo vòng:

- `worktree-scope-triage-v2-content-vs-ux`

Mục tiêu:

- xác định ranh giới giữa:
  - batch content/specialty
  - batch shared UI/search/discovery
  - batch build/dependency

### Bước 2

Sau khi có ranh giới, tách tiếp thành các nhánh/đợt kiểu:

- `content-specialty-expansion-v1`
- `shared-search-ux-refresh-v1`
- `pwa-sitemap-appshell-v1`

### Bước 3

Rà lại `/cong-cu/`:

- `tools-runtime-regression-audit-v1`

Mục tiêu:

- xác nhận thay đổi ở tool routes chỉ là inherited UI hay đã đổi logic/copy thật

### Bước 4

Chỉ sau khi tách xong mới làm:

- `pre-deploy-final-local-qa-v2`

## 7. Điều không nên làm lúc này

- Không deploy
- Không cố gộp tất cả thay đổi hiện tại vào một commit “hoàn thiện tổng thể”
- Không rerun QA/deploy-ready cho toàn khối khi chưa tách scope
- Không coi `38/38 stable_v1` là chứng nhận cho worktree hiện tại

## 8. Tool/route nào đang có rủi ro review cao

Từ góc nhìn triage, các vùng đáng lo nhất là:

- `src/components/AutoSearch.astro`
- `src/layouts/BaseLayout.astro`
- `src/data/articles.ts`
- `src/data/bulk-catalog.ts`
- `src/pages/cong-cu/index.astro`
- `src/pages/tim-kiem.astro`
- toàn bộ cụm `src/pages/kien-thuc-dinh-duong/*.astro` mới/chỉnh sửa hàng loạt

## 9. Kết luận hành động

Nếu mục tiêu của bạn là “tiếp tục hoàn thiện” mà vẫn an toàn, thì bước đúng tiếp theo là:

- **không sửa bừa thêm**
- **không deploy**
- **mở tiếp vòng tách scope cụ thể của batch content và shared UX**

Tên vòng khuyên dùng ngay sau đây:

- `worktree-scope-triage-v2-content-vs-ux`
