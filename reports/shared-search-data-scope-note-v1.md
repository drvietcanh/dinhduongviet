# Shared Search Data Scope Note v1

Date: 2026-07-27

## 1. Mốc đầu vào

- Branch hiện tại: `data-qa-olive-metadata-followup-v1`
- Worktree hiện tại không sạch, có nhiều thay đổi ngoài scope note này
- Chưa deploy

## 2. Mục tiêu note

- Khóa lại một kết luận kỹ thuật để tránh điều tra lặp:
  - việc `6013` / `6014` không xuất hiện trong một số artifact search tổng hợp hiện tại **không tự động là bug**
  - cần phân biệt rõ các pipeline dữ liệu đang phục vụ các route khác nhau

## 3. Hai hệ dữ liệu đang song song tồn tại

### A. Hệ dữ liệu tra cứu thực phẩm Việt Nam

Artifact chính:

- `public/api/vietnam-foods.json`
- `public/api/vietnam-nutrients.json`

Route dùng trực tiếp:

- `/cong-cu/tra-cuu-thuc-pham-viet/`

Đặc điểm:

- Dùng bảng 526 thực phẩm Việt Nam
- Có record:
  - `6013 — Dầu ngô — Corn oil, salad or cooking`
  - `6014 — Dầu oliu — Olive oil`
  - `4105 — Trám đen chín — Chinese olive`

### B. Hệ dữ liệu search/filter/compare của app

Artifact chính:

- `dist/api-foods.json`
- `public/api/foods-slim.json`
- `public/api/foods-full.json`
- `public/api/search-index.json`

Route/feature liên quan:

- `/tim-kiem/`
- `/cong-cu/loc-thuc-pham/`
- `/cong-cu/so-sanh-thuc-pham/`
- các feature dùng `AutoSearch`

Đặc điểm:

- `foods-slim.json` và `foods-full.json` được build từ `dist/api-foods.json`
- `search-index.json` được build từ:
  - article
  - recipe
  - tool
  - `foods-slim.json`
- Đây là tập dữ liệu app-level từ `src/data/nutrition.ts`, không phải mirror 1:1 của `vietnam-foods.json`

## 4. Kết quả xác nhận trong vòng điều tra này

- `public/api/vietnam-foods.json` có `6013` và `6014`
- Query trên route tra cứu Việt Nam vẫn đúng sau các vòng data QA gần nhất:
  - `thịt/thit` không kéo sai `6014`
  - `olive` không kéo sai `6013`
  - `dầu/dau/dầu oliu/dau oliu/olive/olive oil/dầu ngô/dau ngo/corn oil` hoạt động đúng trong scope route này

- `public/api/search-index.json` hiện không chứa `6013` hoặc `6014`
- `public/api/foods-slim.json`, `public/api/foods-full.json`, `dist/api-foods.json` hiện cũng không chứa `6013` hoặc `6014`

Kết luận kỹ thuật:

- Đây là khác biệt phạm vi dữ liệu giữa hai pipeline
- Chưa có bằng chứng trong note này cho thấy đây là regression cần hotfix
- Không nên tự suy từ việc thiếu `6013/6014` trong `search-index.json` sang kết luận route tra cứu đang lỗi

## 5. Những gì note này không làm

- Không sửa data
- Không sửa route
- Không sửa search logic
- Không sửa pipeline build
- Không đổi counts/status `38/38 stable_v1`
- Không deploy

## 6. Khi nào mới nên mở bug/fix tiếp

Chỉ nên mở vòng sửa mới nếu xác nhận được một trong các điều sau:

- một route user-facing thực sự đang cần dùng `6013/6014` từ app-level search nhưng không tìm được
- `src/data/nutrition.ts` lẽ ra phải chứa nhóm dầu này theo scope hiện tại nhưng bị rơi ngoài ý muốn
- pipeline build đang loại sai dữ liệu so với source-of-truth đã chốt

## 7. Gợi ý vòng tiếp theo nếu cần

Tên vòng phù hợp:

- `shared-search-data-scope-audit-v1`

Phạm vi vòng đó:

- chỉ audit phạm vi dữ liệu giữa:
  - `src/data/nutrition.ts`
  - `dist/api-foods.json`
  - `foods-slim/full`
  - `search-index`
  - `vietnam-foods.json`
- không sửa UI nếu chưa có bug user-facing thật

## 8. Kết luận

- Các fix data QA `6013/6014` trước đó vẫn hợp lệ.
- Nghi ngờ mới về `search-index` trong vòng điều tra này được chốt là **khác scope dữ liệu, chưa đủ cơ sở coi là bug**.
- Repo vẫn chưa deploy.
