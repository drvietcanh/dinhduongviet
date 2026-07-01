# Tool Final Review: `tra-cuu-thuc-pham-viet`

Date: 2026-07-01

Branch: `tool-tra-cuu-thuc-pham-viet-final-review-v1`

## Mốc đầu vào

- status v18 commit: `d699858 docs: update tool status with nutrition log safety shell v1`
- QA polish commit: `105ecf6 test: add Vietnamese food lookup page QA`
- chưa deploy

## File đã đọc

- `src/pages/cong-cu/tra-cuu-thuc-pham-viet.astro`
- `src/pages/cong-cu/index.astro`
- `src/lib/vietnam-nutrition.ts`
- `public/api/vietnam-foods.json`
- `public/api/vietnam-nutrients.json`
- `reports/tool-tra-cuu-thuc-pham-viet-qa-polish-v1.md`
- `reports/tools-core-status-v18.md`
- `reports/needs-qa-polish-triage-v1.md`
- `package.json`

## File đã sửa

- Không cần sửa thêm code trong vòng final review này.
- Tạo report:
  - `reports/tool-tra-cuu-thuc-pham-viet-final-review-v1.md`

## Route scope sau final review

- `neutral Vietnamese food lookup + data QA shell only`

## Browser/mobile QA

Phương pháp:

- Chạy `npm run build`.
- Chạy `npm run preview` trên local preview port `4370`.
- Kiểm bằng system Chrome qua Playwright với fresh session cho desktop và mobile `390 x 844`.

Kết quả:

- `/cong-cu/`: `200`
- `/cong-cu/tra-cuu-thuc-pham-viet/`: `200`
- Không redirect.
- Không meta refresh.
- Console sạch trong fresh reload/session.
- Không có page error.
- Desktop không overflow ngang.
- Mobile `390 x 844` không overflow ngang.
- Search dùng được trên mobile.
- Bảng/detail không làm overflow toàn trang; vùng detail dùng scroll container riêng.
- Empty state rõ khi không tìm thấy.

## Search QA

Các query đã thử:

- `gạo`
- `thịt`
- `sữa`
- `nước mắm`
- `nuoc mam`
- `zzzzkhongco`
- `<script>alert(1)</script>`
- `<b>gao</b>`

Kết quả:

- Search có dấu hoạt động.
- Search không dấu hoạt động với route hiện tại:
  - `nuoc mam` vẫn trả kết quả cho `Nước mắm`.
- Query không có kết quả trả empty state rõ:
  - `Không tìm thấy thực phẩm "zzzzkhongco"`
- Query HTML/script không tạo dialog, không render HTML, chỉ hiện text trung tính trong empty state.
- Search desktop/mobile đều hoạt động ổn.

Ghi nhận dữ liệu nghi ngờ:

- Query `thịt` trả item đầu tiên `Dầu oliu` do `name_en` của mã `6014` trong JSON nguồn đang chứa chuỗi nhóm thực phẩm:
  - `NHểM 7 – THỊT VÀ SẢN PHẨM CHẾ BIẾN GROUP 7 - MEAT AND MEAT PRODUCTS`
- Đây là vấn đề chất lượng dữ liệu nguồn/search index, không phải bug render/XSS của route.
- Không sửa dữ liệu gốc trong vòng final review này; nên tách thành vòng data QA riêng nếu muốn làm sạch.

## Data/unit QA

- Route hiển thị dữ liệu theo `100g phần ăn được`.
- Năng lượng hiển thị bằng `kcal`.
- Protein/lipid/glucid/fiber hiển thị bằng `g`.
- Natri/kali/canxi/sắt/cholesterol/purin hiển thị bằng `mg`.
- Query gram là quy đổi tham khảo từ dữ liệu `100g`, không phải target cá nhân.
- Không gọi `natri` là `muối`; route giữ đúng khái niệm theo source.
- Missing data hiển thị trung tính bằng `—` hoặc `Chưa có số liệu chi tiết`.
- Giá trị `0` được phân biệt với thiếu dữ liệu:
  - logic detail table dùng `value_num != null`, nên `0.0` vẫn hiển thị là số thật.
- Rounding hợp lý:
  - preview kcal theo gram hiển thị số nguyên
  - core nutrient grid hiển thị số nguyên hoặc `toFixed(1)` khi cần
- JSON nguồn vẫn còn đơn vị `KCal`/`KJ` trong raw data, nhưng route chuẩn hóa user-facing sang `kcal`.

## UI safety

- Còn `search`: có
- Còn `filter`: không có filter nhóm riêng
- Còn bảng/detail: có
- Còn `localStorage`/`export`/`copy`: không
- Còn `innerHTML`: không còn

## Clinical safety

- Không có target bệnh nền.
- Không có kết luận an toàn/phù hợp/tốt-xấu cho bệnh.
- Không có lời khuyên `nên ăn`/`không nên ăn` theo bệnh.
- Không có lời khuyên chỉnh thuốc/insulin/lợi tiểu.
- Không có target natri/kali/phospho/carb/protein cá nhân theo bệnh.
- Không có nhãn đạt/không đạt hoặc kiểm soát tốt-kém.
- Không có màu phân loại sức khỏe cá nhân.
- Không suy đoán dữ liệu thiếu.

## XSS/render

Input/query đã thử:

- `gạo`
- `nước mắm`
- `nuoc mam`
- `zzzzkhongco`
- `<script>alert(1)</script>`
- `<b>gao</b>`

Kết quả:

- Không tạo script/dialog.
- Không render HTML từ input.
- Render hiện dùng DOM-safe APIs:
  - `createElement`
  - `textContent`
  - `append`
  - `replaceChildren`

## Wording cấm

Kết quả grep/source/browser:

- Không thấy user-facing các cụm:
  - `phù hợp cho người...`
  - `an toàn cho...`
  - `thực phẩm tốt/xấu cho...`
  - `nên ăn` / `không nên ăn`
  - `đạt mục tiêu` / `không đạt mục tiêu`
  - `kiểm soát tốt` / `kiểm soát kém`
  - `mục tiêu điều trị cá nhân`
  - `mục tiêu ... cá nhân`
  - `tự chỉnh thuốc` / `tự chỉnh insulin` / `tự chỉnh lợi tiểu`
  - `chỉ định` / `kê đơn`

Từ còn lại nhưng chấp nhận được:

- `kcal`, `KCal`, `KJ`, `protein`, `natri`, `kali`, `phospho`, `canxi`, `sắt`, `kẽm` với vai trò dữ liệu dinh dưỡng hoặc metadata nguồn.
- `bệnh nền` trong safety shell với nghĩa giới hạn phạm vi, không phải tư vấn điều trị.
- `script` chỉ còn ở ngữ cảnh `<script type="module">` của route và query test XSS trong final review, không phải render HTML nguy hiểm.

## `/cong-cu/` card

- Mô tả hiện tại:
  - `Tra cứu thành phần dinh dưỡng thực phẩm Việt ở mức tham khảo, kèm ghi chú về nguồn và giới hạn dữ liệu.`
- Badge `Đã kiểm v1`: chưa gắn

## Có sửa engine/dữ liệu gốc/công thức/route ngoài scope/dist không

- Không sửa engine.
- Không sửa dữ liệu gốc hàng loạt.
- Không sửa công thức.
- Không sửa route ngoài scope trong vòng final review này.
- Không sửa `dist` thủ công.

## QA cuối

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass

## Worktree

- Sạch sau khi commit vòng final review.

## Kết luận

- Đủ điều kiện sang `tools-core-status-v19` nếu giữ nguyên scope hiện tại.
- Stable scope đề xuất:
  - `neutral Vietnamese food lookup + data QA shell only`
- Nên ghi chú riêng một follow-up data QA cho chất lượng `name_en`/search metadata của một số bản ghi nguồn như mã `6014`.
- Chưa stable/status update trong vòng này.
- Chưa deploy.
