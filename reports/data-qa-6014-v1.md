# Data QA 6014 v1

Date: 2026-07-06

## 1. Mốc đầu vào

- Checkpoint đầu vào: `post-tools-core-stable-v1`
- Commit: `f9cbdf7 docs: summarize tools core stable completion`
- Chưa deploy.
- Worktree đầu vào sạch.

## 2. Vấn đề backlog

- `Mã 6014 — Dầu oliu — metadata/name_en nghi ngờ gây nhiễu search query “thịt”.`

## 3. File đã đọc

- `reports/post-tools-core-stable-v1.md`
- `reports/tools-core-status-v35.md`
- `reports/tools-core-status-v19.md`
- `reports/tool-tra-cuu-thuc-pham-viet-final-review-v1.md`
- `reports/tool-loc-thuc-pham-final-review-v1.md`
- `package.json`
- `src/pages/cong-cu/tra-cuu-thuc-pham-viet.astro`
- `src/pages/cong-cu/loc-thuc-pham.astro`
- `src/pages/cong-cu/so-sanh-thuc-pham.astro`
- `scripts/export_vietnam_json.py`
- `scripts/build-data-all.mjs`
- `scripts/build-search-index.py`
- `scripts/build-foods-slim.mjs`
- `scripts/build-foods-full.py`
- `data/nutrition/foods_index_final.csv`
- `data/nutrition/nutrition_core.csv`
- `data/nutrition/nutrition_final_with_core.sqlite`
- `public/api/vietnam-foods.json`

## 4. Record 6014 trước khi sửa

- `code`: `6014`
- `name_vi`: `Dầu oliu`
- `name_en` trước sửa:
  - `NHểM 7 – THỊT VÀ SẢN PHẨM CHẾ BIẾN GROUP 7 - MEAT AND MEAT PRODUCTS`
- Nguồn có field sai được xác nhận ở:
  - `data/nutrition/foods_index_final.csv`
  - `data/nutrition/nutrition_core.csv`
  - bảng `nutrition_core` trong `data/nutrition/nutrition_final_with_core.sqlite`
  - generated file `public/api/vietnam-foods.json`

## 5. Cách tái hiện lỗi

1. Mở `/cong-cu/tra-cuu-thuc-pham-viet/`
2. Gõ `thịt` hoặc `thit`
3. Route tra cứu dùng logic search theo:
   - `code`
   - `name_vi`
   - `name_en`
4. Vì `name_en` của `6014` chứa cụm `THỊT ... MEAT AND MEAT PRODUCTS`, query `thịt/thit` có thể kéo nhầm `Dầu oliu`.

## 6. Root cause

- Root cause được xác nhận là **metadata `name_en` sai ở đúng record `6014`**.
- Đây không phải bug XSS hay meta refresh.
- Đây cũng không phải bug search engine quá rộng theo nghĩa chung; route tra cứu đang match `name_en` đúng như thiết kế, nhưng dữ liệu nguồn của record `6014` bị gắn nhầm nhãn nhóm thịt.
- Chuỗi ảnh hưởng:
  - `nutrition_core.csv` / `foods_index_final.csv`
  - `nutrition_final_with_core.sqlite`
  - `public/api/vietnam-foods.json`
  - `/cong-cu/tra-cuu-thuc-pham-viet/`

## 7. File đã sửa

- `data/nutrition/foods_index_final.csv`
- `data/nutrition/nutrition_core.csv`
- `data/nutrition/nutrition_final_with_core.sqlite`
- `public/api/vietnam-foods.json` (regenerated qua pipeline build)
- `reports/data-qa-6014-v1.md`

## 8. Phạm vi sửa

- Chỉ sửa field metadata sai của record `6014`.
- Giá trị mới:
  - `name_en: Olive oil`
- Không đổi:
  - `code 6014`
  - `name_vi: Dầu oliu`
  - nutrient values
- Không sửa logic search chung vì root cause đã xác nhận nằm ở dữ liệu record `6014`.

## 9. Những gì không sửa

- `nutrient values`
- route UI
- engine/công thức chung nếu không liên quan
- `dist`
- deploy

## 10. Kết quả sau sửa

### Route chính liên quan: `/cong-cu/tra-cuu-thuc-pham-viet/`

- Query `thịt` / `thit` không còn trả về `6014 — Dầu oliu`
- Query `dầu` / `dau` vẫn tìm được `6014`
- Query `dầu oliu` / `dau oliu` vẫn tìm được `6014`
- Query `olive` / `olive oil` vẫn tìm được `6014`
- Query `thịt bò` / `thit bo` vẫn trả về các thực phẩm thịt hợp lý
- Search có dấu / không dấu vẫn hoạt động

### Route smoke-test liên quan

- `/cong-cu/loc-thuc-pham/` trả `200`, không lỗi console, không render HTML thô
- Route này dùng dataset khác (`foods-full.json` / `dist/api-foods.json`), không dùng trực tiếp record `6014` từ `vietnam-foods.json`
- Vì vậy backlog `6014` không còn tái hiện tại route này theo cùng cơ chế

### Ghi chú scope

- Spot check cho thấy query `olive` / `olive oil` còn có thể chạm record khác ngoài `6014` do metadata cũ của record khác.
- Không xử lý trong vòng này vì ngoài phạm vi backlog `6014`.

## 11. XSS/fuzz QA

Đã test:

- `<script>alert(1)</script>`
- `<b>thịt</b>`

Kết quả:

- Không tạo dialog
- Không render HTML
- Không phá layout
- Không có lỗi console mới

## 12. Browser/mobile QA

- Preview port: `4321`
- `/cong-cu/` trả `200`
- `/cong-cu/tra-cuu-thuc-pham-viet/` trả `200`
- `/cong-cu/loc-thuc-pham/` trả `200`
- Không redirect
- Không meta refresh
- Console sạch trong fresh reload/session
- Desktop không overflow ngang
- Mobile `390 x 844` không overflow ngang

Kết quả browser check:

- `/cong-cu/tra-cuu-thuc-pham-viet/`
  - `thịt` -> không có `6014`
  - `thit` -> không có `6014`
  - `dầu`, `dau`, `dầu oliu`, `dau oliu`, `olive`, `olive oil` -> có `6014`
- `/cong-cu/loc-thuc-pham/`
  - smoke test pass
  - không lỗi runtime / XSS
  - không dùng cùng record search path của `6014`

## 13. QA command pass/fail

- `npm run build`:
  - pass sau khi rerun bằng log file
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass

## 14. Ghi chú LF/CRLF hoặc EPIPE

- `git diff --check`: chờ xác nhận cuối sau khi chốt report
- Build đầu tiên gặp `EPIPE` trên Windows do output pipe dài
- Đã rerun `npm run build` với redirect log file và pass thật

## 15. Kết luận

- `data QA 6014 resolved`

