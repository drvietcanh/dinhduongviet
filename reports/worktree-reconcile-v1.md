# Worktree Reconcile v1

Date: 2026-07-24

## 1. Mốc đầu vào

- Branch hiện tại: `data-qa-olive-metadata-followup-v1`
- Commit gần nhất đã chốt trong luồng stable/data QA:
  - `4288312 docs: summarize post pre deploy local QA`
  - `a7bd977 docs: summarize pre deploy local QA`
  - `fbe58c0 fix: normalize Vietnamese food lookup query for dau`
- Trạng thái stable tools vẫn là:
  - `stable_v1: 38`
  - `needs_spec: 0`
  - `needs_qa_polish: 0`
  - `stub_or_draft: 0`
  - `clinical_high_risk: 0`
  - `total: 38`
- Chưa deploy

## 2. Kết luận chính

- Repo hiện **không ở trạng thái sẵn sàng deploy** vì worktree đang mở rất lớn và vượt xa scope của các vòng QA/stable đã chốt.
- Đây không còn là một nhánh chỉ chứa thay đổi data QA `6013/6014` hay pre-deploy local QA nữa.
- Có ít nhất một khối thay đổi lớn đang diễn ra đồng thời trên:
  - `src/pages/`
  - `src/components/`
  - `src/data/`
  - `public/api/`
  - cấu hình/package
  - nhiều file nội dung mới chưa track
- Trước khi nghĩ đến deploy, cần tách và làm rõ các thay đổi này theo scope thực sự.

## 3. Quy mô worktree hiện tại

Thống kê tại thời điểm audit:

- Tổng số path đang thay đổi hoặc chưa track: `259`
- `src`: `249`
- `public`: `3`
- `scripts`: `2`
- root config/package:
  - `astro.config.mjs`
  - `package.json`
  - `package-lock.json`
- thư mục/artefact khác:
  - `.agents/`
  - `xu-ly-van-phong-v2.0/`

`git diff --stat` cho thấy:

- khoảng `168 files changed`
- hơn `16k` insertions
- hơn `8k` deletions

Điều này đủ lớn để xem như một nhánh công việc mới hoặc một nhánh hợp nhất nhiều scope, không còn là worktree “phụ” của vòng QA trước.

## 4. Nhóm thay đổi quan sát được

### A. Core config / dependency / build surface

- `astro.config.mjs`
- `package.json`
- `package-lock.json`

Rủi ro:

- có thể làm thay đổi hành vi build/runtime
- có thể kéo thêm dependency hoặc thay đổi pipeline

### B. Generated / API search data

- `public/api/foods-full.json`
- `public/api/foods-slim.json`
- `public/api/search-index.json`

Rủi ro:

- có thể là generated artifact từ thay đổi source/data khác
- nếu commit mà không khóa source đi kèm thì rất khó review

### C. Shared components / layouts / shared UX

Ví dụ:

- `src/components/ArticleCard.astro`
- `src/components/AutoSearch.astro`
- `src/components/DRIWidget.astro`
- `src/components/DietMealPlan.astro`
- `src/components/FoodCard.astro`
- `src/components/VNHealthScore.astro`
- `src/layouts/ArticleLayout.astro`
- `src/layouts/BaseLayout.astro`

Rủi ro:

- blast radius rộng
- đụng shared UI toàn site

### D. Tools / routes trong `/cong-cu/`

Rất nhiều route tool đã bị sửa lại cùng lúc, gồm cả route đã từng ổn định:

- `bmi`
- `bang-xep-hang`
- `checklist-an-uong`
- `danh-gia-bua-an`
- `danh-sach-di-cho`
- `duong-do-uong`
- `loc-thuc-pham`
- `so-sanh-thuc-pham`
- `tinh-macro`
- `tinh-nang-luong`
- `tra-cuu-thuc-pham-viet`
- và nhiều route khác

Rủi ro:

- có thể làm mất hiệu lực các vòng stable/final-review trước đó
- không thể giả định `38/38 stable_v1` vẫn đúng ở mức runtime nếu chưa re-audit theo batch này

### E. Knowledge/content corpus thay đổi hàng loạt

Có cả:

- rất nhiều file bài viết `.astro` bị sửa
- rất nhiều file bài viết mới chưa track
- `src/data/articles.ts`
- `src/data/bulk-catalog.ts`

Nhìn bề ngoài đây giống một batch content expansion / taxonomy / search / listing update lớn.

Rủi ro:

- khó xác định quality level nếu chưa tách batch
- có thể kéo theo thay đổi internal linking, article index, card listing, search, stats

### F. Script / tooling mới

- `scripts/analyze_specialties.mjs`
- `scripts/check_specialties.mjs`

Rủi ro:

- có thể là tooling cho batch content mới
- cần hiểu vai trò trước khi quyết định commit cùng product code hay tách riêng

### G. Unknown work artifacts

- `.agents/`
- `xu-ly-van-phong-v2.0/`

Rủi ro:

- có thể là local helper / scratch / generated / unrelated workspace material
- chưa nên đi cùng deploy nếu chưa xác nhận mục đích

## 5. Đánh giá mức độ sẵn sàng deploy

Kết luận hiện tại:

- **Không nên deploy từ trạng thái worktree hiện tại**

Lý do:

1. Worktree không còn sạch và không còn bám một scope duy nhất
2. Có shared changes trên config/layout/component/data/content cùng lúc
3. Có route tool stable bị sửa lại ngoài luồng QA/stable cũ
4. Có generated API files đổi cùng source/code
5. Có nhiều file mới chưa track chưa được phân loại

## 6. Điều gì vẫn còn đúng

Những mốc đã chốt trước đó **vẫn đúng ở mức lịch sử commit**:

- `38/38 stable_v1` đã từng được đưa về trạng thái ổn định local theo batch cũ
- data QA `6014` đã resolved
- data QA follow-up `6013/olive` đã resolved
- pre-deploy local QA đã từng pass trên snapshot trước đó

Nhưng:

- không nên dùng các mốc này để suy ra rằng **worktree hiện tại** cũng pass/deploy-safe

## 7. Đề xuất hướng xử lý tiếp theo

### Ưu tiên 1: Tách scope đang mở

Tạo vòng:

- `worktree-scope-triage-v1`

Mục tiêu:

- xác định batch thay đổi lớn này thực chất là gì
- chia thành các cụm:
  - content/articles
  - shared UI/layout
  - tools routes
  - data/generated artifacts
  - scripts/tooling
  - unrelated local artifacts

### Ưu tiên 2: Chốt chính sách với generated files

Đặc biệt cho:

- `public/api/*.json`

Cần xác định:

- file nào là source-of-truth
- file nào chỉ là generated artifact
- có cần commit generated cùng source hay có thể regenerate về sau

### Ưu tiên 3: Xử lý artifact ngoài scope

Kiểm riêng:

- `.agents/`
- `xu-ly-van-phong-v2.0/`

Vì đây có thể là thư mục không nên đi cùng product branch/deploy branch.

### Ưu tiên 4: Chỉ sau khi chia scope xong mới QA lại

Sau khi triage và cô lập được batch hiện tại:

- chạy một vòng `pre-deploy-final-local-qa-v2`
- chỉ khi đó mới có ý nghĩa để nói tới deploy

## 8. Hành động cụ thể mình khuyên làm ngay

Theo thứ tự:

1. Không deploy
2. Không chạy thêm vòng “deploy-ready” trên worktree lẫn lộn hiện tại
3. Chốt report reconcile này
4. Mở vòng kế tiếp:
   - `worktree-scope-triage-v1`

## 9. Những gì chưa làm trong vòng này

- Chưa phân tích diff nội dung từng file
- Chưa xác định chủ sở hữu hay mục đích business của từng cụm thay đổi
- Chưa tách branch mới
- Chưa cleanup file ngoài scope
- Chưa rerun full QA trên batch thay đổi lớn hiện tại
- Chưa deploy
