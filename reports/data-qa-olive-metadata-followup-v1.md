# Data QA Olive Metadata Follow-up v1

Date: 2026-07-06

## 1. Mốc đầu vào

- Milestone đầu vào: `post-data-qa-6014-v1`
- Commit: `c7d6564 docs: summarize data QA 6014 resolution`
- Chưa deploy.
- Worktree đầu vào sạch.

## 2. Vấn đề follow-up

- `Một metadata tiếng Anh đáng ngờ ở record khác khi search olive, ngoài scope 6014.`

## 3. File đã đọc

- `reports/post-data-qa-6014-v1.md`
- `reports/data-qa-6014-v1.md`
- `reports/post-tools-core-stable-v1.md`
- `reports/tools-core-status-v35.md`
- `package.json`
- `data/nutrition/foods_index_final.csv`
- `data/nutrition/nutrition_core.csv`
- `data/nutrition/nutrition_final_with_core.sqlite`
- `data/nutrition/nutrition_chunks_final_v4/276_6012_dau_me.md`
- `data/nutrition/nutrition_chunks_final_v4/277_6013_dau_ngo.md`
- `data/nutrition/nutrition_chunks_final_v4/278_6014_dau_oliu.md`
- `public/api/vietnam-foods.json`
- `src/pages/cong-cu/tra-cuu-thuc-pham-viet.astro`
- `src/pages/cong-cu/loc-thuc-pham.astro`
- `src/pages/cong-cu/so-sanh-thuc-pham.astro`
- `scripts/export_vietnam_json.py`
- `scripts/build-data-all.mjs`

## 4. Các record xuất hiện khi search `olive`

Trước khi sửa, query `olive` trong route tra cứu trả:

- `4105 — Trám đen chín — Chinese olive`
- `6013 — Dầu ngô — Olive oil, salad or cooking`
- `6014 — Dầu oliu — Olive oil`

Đánh giá:

- `4105` là match hợp lý vì `name_en = Chinese olive`
- `6014` là match hợp lý vì `name_en = Olive oil`
- `6013` là match đáng ngờ vì `name_vi = Dầu ngô` nhưng `name_en` lại là `Olive oil, salad or cooking`

## 5. Record đáng ngờ trước khi sửa

- `code`: `6013`
- `name_vi`: `Dầu ngô`
- `name_en` trước sửa:
  - `Olive oil, salad or cooking`

Vị trí đã xác nhận:

- `data/nutrition/foods_index_final.csv`
- `data/nutrition/nutrition_core.csv`
- bảng `nutrition_core` trong `data/nutrition/nutrition_final_with_core.sqlite`
- `public/api/vietnam-foods.json`
- `data/nutrition/nutrition_chunks_final_v4/277_6013_dau_ngo.md`

## 6. Cách tái hiện lỗi

1. Mở `/cong-cu/tra-cuu-thuc-pham-viet/`
2. Gõ `olive` hoặc `olive oil`
3. Route tra cứu match theo:
   - `code`
   - `name_vi`
   - `name_en`
4. Vì record `6013` có `name_en` sai là `Olive oil, salad or cooking`, query `olive` kéo nhầm `Dầu ngô`

## 7. Root cause

- Root cause được xác nhận là **metadata `name_en` sai ở đúng record `6013 — Dầu ngô`**
- Đây là lỗi dữ liệu nguồn, không phải bug search logic chung
- Chunk nguồn `277_6013_dau_ngo.md` cũng bị lệch tiêu đề tiếng Anh sang `Dầu oliu / Olive oil, salad or cooking`
- Chuỗi ảnh hưởng:
  - `nutrition_chunks_final_v4/277_6013_dau_ngo.md`
  - `foods_index_final.csv`
  - `nutrition_core.csv`
  - `nutrition_final_with_core.sqlite`
  - `public/api/vietnam-foods.json`
  - `/cong-cu/tra-cuu-thuc-pham-viet/`

## 8. File đã sửa

- `data/nutrition/foods_index_final.csv`
- `data/nutrition/nutrition_core.csv`
- `data/nutrition/nutrition_chunks_final_v4/277_6013_dau_ngo.md`
- `data/nutrition/nutrition_final_with_core.sqlite`
- `public/api/vietnam-foods.json` (regenerated qua pipeline build)
- `reports/data-qa-olive-metadata-followup-v1.md`

## 9. Phạm vi sửa

- Chỉ sửa đúng metadata sai của record `6013`
- Giá trị mới:
  - `name_en: Corn oil, salad or cooking`
- Đồng bộ lại chunk nguồn của chính record `6013`
- Không đụng lại `6014` vì không liên quan trực tiếp đến follow-up này

## 10. Những gì không sửa

- nutrient values
- route UI
- counts/status
- engine/công thức chung nếu không liên quan
- `dist`
- deploy

## 11. Kết quả sau sửa

- Query `olive` không còn trả `6013 — Dầu ngô`
- Query `olive` còn các record hợp lý:
  - `4105 — Trám đen chín — Chinese olive`
  - `6014 — Dầu oliu — Olive oil`
- Query `olive oil` chỉ còn trả `6014 — Dầu oliu`
- `6014 — Dầu oliu` vẫn tìm được bằng:
  - `dầu`
  - `dau`
  - `dầu oliu`
  - `dau oliu`
  - `olive`
  - `olive oil`
- Query `thịt/thit` vẫn không trả `6014 — Dầu oliu`

## 12. Test hồi quy search

### Route chính: `/cong-cu/tra-cuu-thuc-pham-viet/`

Đã test:

- `olive`
- `olive oil`
- `dầu`
- `dau`
- `dầu oliu`
- `dau oliu`
- `thịt`
- `thit`
- `gạo`
- `gao`
- `sữa`
- `sua`
- `<script>alert(1)</script>`
- `<b>olive</b>`
- `"><img src=x onerror=alert(1)>`
- `=HYPERLINK("http://x","x")`
- `+SUM(1,1)`
- `@cmd`
- `-1+2`

Kết quả:

- Query `olive` chỉ còn trả record hợp lý
- `6013` không còn xuất hiện sai
- `6014` vẫn tìm được đúng
- Query `thịt/thit` vẫn không trả `6014`
- Query tiếng Việt có dấu/không dấu vẫn hoạt động
- Missing data hiển thị như cũ
- `0` vẫn phân biệt với missing data
- Không hỏng đơn vị/kcal/g/mg

### Route smoke test liên quan

- `/cong-cu/loc-thuc-pham/`
  - trả `200`
  - query `olive` -> `0 thực phẩm`
  - không lỗi console
  - route này dùng dữ liệu search khác nên chỉ smoke-test
- `/cong-cu/so-sanh-thuc-pham/`
  - trả `200`
  - query `olive` không có gợi ý
  - không lỗi console
  - route này dùng tập dữ liệu khác nên chỉ smoke-test

## 13. XSS/fuzz QA

Đã test:

- `<script>alert(1)</script>`
- `<b>olive</b>`
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

## 14. Browser/mobile QA

- Preview port: `4322`
- `/cong-cu/` trả `200`
- `/cong-cu/tra-cuu-thuc-pham-viet/` trả `200`
- `/cong-cu/loc-thuc-pham/` trả `200`
- `/cong-cu/so-sanh-thuc-pham/` trả `200`
- Không redirect
- Không meta refresh
- Console sạch trong fresh reload/session
- Desktop không overflow ngang
- Mobile `390 x 844` không overflow ngang

## 15. QA command pass/fail

- `npm run build`: pass qua rerun bằng log file
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass
- `git status --short`: pass trước commit, chỉ còn đúng các file trong scope sửa

## 16. Ghi chú LF/CRLF hoặc EPIPE

- Build được rerun bằng log file để tránh `EPIPE` trên Windows
- `git diff --check` pass; chỉ còn warning LF/CRLF ở working copy của một số file CSV/MD khi Git chạm lại file trên Windows

## 17. Kết luận

- `data QA olive metadata follow-up resolved`
