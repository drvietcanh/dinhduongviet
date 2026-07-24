# Worktree Scope Triage v2 — Content vs UX

Date: 2026-07-24

## 1. Mốc đầu vào

- Branch hiện tại: `data-qa-olive-metadata-followup-v1`
- Report nền:
  - `reports/worktree-reconcile-v1.md`
  - `reports/worktree-scope-triage-v1.md`
- Stable snapshot gần nhất theo lịch sử:
  - `stable_v1: 38`
  - `needs_spec: 0`
  - `needs_qa_polish: 0`
  - `stub_or_draft: 0`
  - `clinical_high_risk: 0`
  - `total: 38`
- Chưa deploy

## 2. Kết luận chính

- Batch đang mở không còn là một scope duy nhất.
- Sau khi bóc thêm lớp diff, có thể tách tương đối rõ thành 4 cụm chính:
  1. content expansion + specialty mapping
  2. shared search / discovery / visual refresh
  3. build / app-shell / dependency
  4. tool-route drift, trong đó có cả thay đổi lớn riêng cho một số route
- Shared search hiện có dấu hiệu **diff lỗi hoặc code hỏng ngay trong worktree**, nên không nên coi batch này là chỉ “polish UI”.
- Vì vậy, bước tiếp theo hợp lý không phải deploy, mà là tách batch thành các vòng nhỏ có chủ đích.

## 3. Cụm A — Content expansion + specialty mapping

### Dấu hiệu chính

- `src/data/articles.ts` tăng rất lớn
- nhiều file mới trong `src/pages/kien-thuc-dinh-duong/`
- nhiều file bài cũ cũng bị sửa lại
- có script mới:
  - `scripts/analyze_specialties.mjs`
  - `scripts/check_specialties.mjs`

### Quan sát cụ thể

- `src/data/articles.ts` đang được bơm thêm hàng loạt article metadata mới với field `specialty`
- script `scripts/analyze_specialties.mjs` chỉ thống kê số lượng bài theo `specialty`
- script `scripts/check_specialties.mjs` rà title/specialty mismatch bằng rule rất hẹp
- đây là tín hiệu rõ rằng batch content không chỉ thêm bài, mà còn đang tái tổ chức taxonomy chuyên khoa

### Đánh giá

- Đây là scope lớn nhất trong worktree hiện tại
- Khả năng cao có mục tiêu business/content rõ ràng:
  - mở rộng kho bài
  - gán chuyên khoa
  - đưa thêm nội dung vào listing/search
- Scope này có thể tách riêng khỏi tool routes nếu muốn review an toàn hơn

## 4. Cụm B — Shared search / discovery / visual refresh

### Dấu hiệu chính

- `src/components/AutoSearch.astro`
- `src/components/ArticleCard.astro`
- `src/components/FoodCard.astro`
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `src/pages/tim-kiem.astro`
- `public/api/search-index.json`
- `src/pages/cong-cu/index.astro`

### Quan sát cụ thể

- `AutoSearch.astro` được đổi mạnh về UX:
  - thêm backdrop
  - thêm clear button
  - thêm hotkey `Ctrl K`
  - thêm keyword highlight
  - đổi mạnh phần visual styling
- `src/pages/tim-kiem.astro` cũng được mở rộng theo hướng search UX:
  - keyboard navigation
  - lazy-load search index
  - suggestions
  - fuzzy fallback
  - recent searches
  - category chips
- `src/pages/cong-cu/index.astro` đang có visual refresh kiểu glassmorphism
- `public/api/search-index.json` thay đổi phù hợp với việc search surface đang được làm lại cùng batch article mới

### Cờ đỏ kỹ thuật

- `src/components/AutoSearch.astro` hiện có dấu hiệu diff hỏng ngay trong function `highlight()`
- snippet quan sát được:
  - `var safeQ = q.replace(/[.*+?^${}()|[\]\\]/g, '\\var input = el.querySelector('.ac-input'); ...`
- điều này trông như một đoạn code bị ghép sai khi merge hoặc edit dang dở

### Đánh giá

- Scope này không còn là “thay CSS nhẹ”
- Đây là shared search/discovery rewrite có blast radius lớn
- Hiện chưa nên QA/deploy chung với batch content vì:
  - logic search đã đổi
  - render path đã đổi
  - ít nhất một file shared đang có dấu hiệu broken

## 5. Cụm C — Build / app-shell / dependency

### Dấu hiệu chính

- `package.json`
- `package-lock.json`
- `astro.config.mjs`

### Quan sát cụ thể

- `package.json` thêm:
  - `@astrojs/sitemap`
  - `@vite-pwa/astro`
  - `workbox-window`
- `astro.config.mjs` thêm:
  - `sitemap()`
  - `AstroPWA(...)`
  - manifest app
  - workbox config

### Đánh giá

- Đây là scope hạ tầng/app-shell độc lập
- Có thể liên quan:
  - sitemap
  - PWA
  - caching
  - installability
- Scope này có rủi ro deploy riêng, không nên bị chìm בתוך batch content/search

## 6. Cụm D — Tool-route drift

### Dấu hiệu chính

- `src/pages/cong-cu/` có `33` file bị sửa
- Một số route có diff lớn riêng, không chỉ là inherit từ shared layout

### Quan sát cụ thể

Từ `git diff --numstat -- src/pages/cong-cu`:

- `src/pages/cong-cu/tinh-nang-luong.astro`: `234` thêm / `180` xóa
- `src/pages/cong-cu/tinh-macro.astro`: `215` thêm / `177` xóa
- `src/pages/cong-cu/bmi.astro`: `57` thêm / `35` xóa
- `src/pages/cong-cu/lap-thuc-don-tuan.astro`: `52` thêm / `49` xóa
- `src/pages/cong-cu/theo-doi-suc-khoe.astro`: `47` thêm / `11` xóa
- `src/pages/cong-cu/tuong-tac-thuoc-thuc-pham.astro`: `45` thêm / `28` xóa

### Đánh giá

- Không thể giả định mọi diff ở `/cong-cu/` chỉ do shared component/layout kéo theo
- Ít nhất `tinh-macro` và `tinh-nang-luong` đang có lượng thay đổi đủ lớn để xem như route-level edits riêng
- Vì hai route này trước đó vừa được chốt theo nhịp safety/draft, cần cẩn thận để không vô tình phá semantics đã khóa

## 7. Cụm E — Data/generated đi kèm

### Dấu hiệu chính

- `public/api/search-index.json`
- `public/api/foods-full.json`
- `public/api/foods-slim.json`
- `src/data/bulk-catalog.ts`

### Quan sát cụ thể

- `src/data/bulk-catalog.ts` đổi target:
  - `FOOD_TARGET` từ `218` lên `309`
  - `RECIPE_TARGET` từ `149` lên `211`
- đây là tín hiệu rõ rằng batch không chỉ sửa UI, mà còn mở rộng catalog/source data cho listing/search

### Đánh giá

- `search-index.json` nhiều khả năng là generated từ batch content/search mới
- `foods-full.json` và `foods-slim.json` có thể là generated artifact từ catalog/source thay đổi
- cần xác định rõ source-of-truth trước khi nghĩ tới commit/deploy chung

## 8. Ranh giới content vs UX sau v2

Sau vòng này có thể xem ranh giới như sau:

### Nhóm content-first

- `src/pages/kien-thuc-dinh-duong/*.astro`
- `src/data/articles.ts`
- `scripts/analyze_specialties.mjs`
- `scripts/check_specialties.mjs`
- phần taxonomy/specialty mapping

### Nhóm UX/search-first

- `src/components/AutoSearch.astro`
- `src/pages/tim-kiem.astro`
- `src/components/ArticleCard.astro`
- `src/components/FoodCard.astro`
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `src/pages/cong-cu/index.astro`
- `public/api/search-index.json`

### Nhóm app-shell/build-first

- `astro.config.mjs`
- `package.json`
- `package-lock.json`

### Nhóm cần audit riêng sau đó

- `src/pages/cong-cu/*.astro`
- `src/data/bulk-catalog.ts`
- `public/api/foods-full.json`
- `public/api/foods-slim.json`

## 9. Điều quan trọng nhất vừa lộ ra

Shared search hiện có khả năng chưa ở trạng thái code lành:

- `AutoSearch.astro` có dấu hiệu malformed diff trong `highlight()`
- `tim-kiem.astro` có lượng bổ sung logic lớn
- vì vậy không nên gọi batch này là “content update” đơn thuần

Nói ngắn gọn:

- content batch và search/UX batch đang bị trộn vào nhau
- search/UX batch có dấu hiệu cần kỹ thuật gỡ riêng trước

## 10. Đề xuất thứ tự xử lý tiếp theo

### Ưu tiên 1

`shared-search-ux-audit-v1`

Mục tiêu:

- xác nhận `AutoSearch.astro` có thật sự broken hay chỉ là diff artifact
- bóc riêng các thay đổi logic search:
  - highlight
  - fuzzy fallback
  - recent searches
  - lazy load
  - keyboard navigation
- xác định có regression/XSS/runtime risk hay không

### Ưu tiên 2

`content-specialty-expansion-audit-v1`

Mục tiêu:

- định lượng số article mới/thay đổi
- xác nhận taxonomy `specialty`
- đánh giá scope content có thể review độc lập khỏi shared UX hay không

### Ưu tiên 3

`tools-runtime-regression-audit-v1`

Mục tiêu:

- xác định các route `/cong-cu/` nào chỉ bị ảnh hưởng bởi shared shell
- route nào có drift copy/logic thật

### Ưu tiên 4

`app-shell-pwa-sitemap-audit-v1`

Mục tiêu:

- review riêng PWA/sitemap/dependency
- tránh để config deploy bị trộn với content/search QA

## 11. Không nên làm lúc này

- Không deploy
- Không mở thêm một vòng “final local QA” cho cả khối
- Không commit gộp cả content + UX + PWA + tools như một batch duy nhất
- Không xem `38/38 stable_v1` là bảo chứng runtime cho worktree hiện tại

## 12. Kết luận hành động

Với mục tiêu “tiếp tục hoàn thiện” mà vẫn giữ hướng an toàn, bước hợp lý ngay sau report này là:

- tách **shared search/UX audit** ra trước
- vì đây là nơi vừa có blast radius rộng vừa có dấu hiệu code đang hỏng

Tên vòng khuyên dùng tiếp theo:

- `shared-search-ux-audit-v1`
