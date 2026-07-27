# Shared Search UX Safety Patch v1

Date: 2026-07-27

## 1. Mốc đầu vào

- Branch hiện tại: `data-qa-olive-metadata-followup-v1`
- Report nền:
  - `reports/worktree-scope-triage-v2-content-vs-ux.md`
  - `reports/shared-search-ux-audit-v1.md`
- Chưa deploy

## 2. Mục tiêu vòng này

Vá hẹp cụm shared search/UX đang có blocker rõ ràng, không mở rộng sang:

- content batch
- PWA / sitemap / app-shell
- tool logic riêng
- data catalog hoặc article registry

## 3. File đã sửa

- `src/components/AutoSearch.astro`
- `src/pages/tim-kiem.astro`
- `src/pages/cong-cu/index.astro`

## 4. Thay đổi đã làm

### A. `src/components/AutoSearch.astro`

- bỏ đoạn `highlight()` bị malformed
- thay bằng flow an toàn hơn:
  - `escapeHtml()`
  - `highlightHtml()`
- giữ behavior highlight nhưng không còn string lỗi kiểu ghép diff vào regex
- khi render dropdown:
  - name dùng `highlightHtml(...)`
  - type được escape trước khi đưa vào HTML string

### B. `src/pages/tim-kiem.astro`

- bỏ khối logic bị chèn trùng/lệch vị trí ở nửa sau script
- giữ lại một flow render/search/suggestions duy nhất
- giữ keyboard navigation sạch ở cuối script
- loại bỏ phần duplicated block từng làm script rất khó trust

### C. `src/pages/cong-cu/index.astro`

- dọn CSS mismatch rõ ràng
- bỏ các selector mobile cũ không còn khớp:
  - `.tool-grid`
  - `.tool-card`
  - `.section-label`
- thay bằng nhánh mobile bám đúng cấu trúc hiện tại của:
  - `.cc-card`
- đồng thời dọn các dòng có trailing whitespace trong phần vừa chạm

## 5. Những gì không sửa

- không sửa `src/data/articles.ts`
- không sửa batch content bài viết
- không sửa `public/api/*.json` ngoài hệ quả regenerate từ build
- không sửa PWA / sitemap / dependency config
- không sửa tool logic ngoài cụm search/UX dùng chung
- không deploy

## 6. Kết quả kiểm tra

### `git diff --check` cho 3 file đã chạm

- pass
- chỉ còn warning LF/CRLF của Git trên Windows, không có lỗi whitespace mới trong 3 file này

### `python` / build-style validation

- không có compile step riêng cho Astro component
- validation chính dùng `npm run build`

### `npm run build`

- pass sau khi rerun đầy đủ
- build đi qua:
  - `data:vietnam`
  - `data:all`
  - Astro build
  - sitemap
  - PWA generateSW

### `npm run qa`

- fail, nhưng fail ở scope khác:
  - `Duplicate slug "dinh-duong-benh-tri" in src\\data\\articles.ts`

Đánh giá:

- đây là blocker thuộc content/article registry batch
- không phải regression trực tiếp từ:
  - `AutoSearch.astro`
  - `tim-kiem.astro`
  - `cong-cu/index.astro`

## 7. Kết luận kỹ thuật của vòng này

- Shared search/UX blocker ở `AutoSearch.astro` đã được gỡ
- `tim-kiem.astro` không còn mang khối logic duplicated bị chèn lẫn
- `cong-cu/index.astro` đã bớt drift CSS rõ ràng
- Toàn repo hiện:
  - `build` pass
  - `qa` chưa pass do blocker content batch ở `src/data/articles.ts`

## 8. Trạng thái sau vòng này

- chưa deploy
- chưa thể xem là deploy-ready
- nhưng cụm shared search/UX đã được kéo về trạng thái tốt hơn rõ rệt
- blocker tiếp theo nên xử lý không còn là search/UX trước mắt, mà là:
  - duplicate slug trong `src/data/articles.ts`

## 9. Đề xuất bước tiếp theo

Tên vòng khuyên dùng:

- `content-article-registry-fix-v1`

Mục tiêu:

1. xử lý duplicate slug `dinh-duong-benh-tri`
2. rà thêm các xung đột article registry cùng họ nếu có
3. rerun:
   - `npm run qa`
   - sau đó mới cân nhắc QA rộng hơn

## 10. Kết luận

- vòng `shared-search-ux-safety-patch-v1` đạt mục tiêu chính
- build đã pass
- QA tổng chưa pass vì blocker scope khác
- chưa deploy
