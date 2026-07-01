# Tool QA Report: `tra-cuu-thuc-pham-viet`

Date: 2026-07-01

Branch: `tool-tra-cuu-thuc-pham-viet-qa-polish-v1`

Input baseline:

- status v18 commit: `d699858 docs: update tool status with nutrition log safety shell v1`
- chưa deploy

## File đã đọc

- `src/pages/cong-cu/tra-cuu-thuc-pham-viet.astro`
- `src/pages/cong-cu/index.astro`
- `src/lib/vietnam-nutrition.ts`
- `public/api/vietnam-foods.json`
- `public/api/vietnam-nutrients.json`
- `reports/tools-core-status-v18.md`
- `reports/tools-core-status-v17.md`
- `reports/needs-qa-polish-triage-v1.md`
- `package.json`

## Hiện trạng trước polish

- Route có `search` input, danh sách kết quả, detail panel, quy đổi gram, tab chỉ số chính/chi tiết đầy đủ.
- Không có `localStorage`, `export`, `copy`, `chart`, `canvas`.
- Dữ liệu lấy từ `/api/vietnam-foods.json` và `/api/vietnam-nutrients.json`.
- Hiển thị dữ liệu trên `100g phần ăn được`; có quy đổi gram tham khảo.
- Không thấy wording user-facing kiểu điều trị bệnh nền ngay trên route chính, nhưng card `/cong-cu/` còn mô tả khá chung.
- Có nhiều điểm render bằng `innerHTML`:
  - empty state search
  - danh sách kết quả
  - tiêu đề thực phẩm
  - core nutrient grid
  - bảng nutrient chi tiết
- Đây là rủi ro XSS/render-safety thực tế vì query người dùng và chuỗi dữ liệu được nội suy vào HTML.

## File đã sửa

- `src/pages/cong-cu/tra-cuu-thuc-pham-viet.astro`
- `src/pages/cong-cu/index.astro`

## Scope sau polish

- `neutral Vietnamese food lookup + data QA shell only`

## Những thứ đã hạ rủi ro

- Bỏ toàn bộ `innerHTML` trong route và chuyển sang `replaceChildren`, `createElement`, `textContent`, `append`.
- Giữ route là tra cứu thành phần dinh dưỡng trung tính, không thêm/khôi phục logic bệnh nền.
- Thêm safety/data shell ở đầu route để nói rõ đây là tra cứu tham khảo theo dữ liệu nguồn, không dùng để rút ra kết luận theo bệnh nền.
- Cập nhật card `/cong-cu/` sang mô tả an toàn hơn:
  - `Tra cứu thành phần dinh dưỡng thực phẩm Việt ở mức tham khảo, kèm ghi chú về nguồn và giới hạn dữ liệu.`

## Data/unit QA

- Đơn vị đang hiển thị đúng ngữ cảnh route:
  - năng lượng: `kcal`
  - protein/lipid/glucid/fiber: `g`
  - canxi/sắt/natri/kali/cholesterol/purin: `mg`
- Source note ghi rõ dữ liệu tính trên `100g phần ăn được`.
- Quy đổi gram là quy đổi tham khảo từ dữ liệu `100g`, không biến thành target cá nhân.
- Missing data hiển thị trung tính bằng `—` hoặc `Chưa có số liệu chi tiết`.
- Không thấy route suy đoán dữ liệu thiếu.
- Search tiếng Việt có dấu và không dấu đều hoạt động:
  - `gạo`
  - `nước mắm`
  - `nuoc mam`
- Empty state rõ khi không tìm thấy.
- Ghi nhận dữ liệu nguồn hiện có đơn vị `KCal`/`KJ` trong JSON gốc, nhưng route chuẩn hóa hiển thị user-facing là `kcal`; không sửa dữ liệu gốc trong vòng này.
- Không làm thay đổi hàng loạt source data trong vòng QA này.

## UI safety

- Còn `search`: có.
- Còn `filter`: không thấy filter nhóm thực phẩm riêng ở route này.
- Còn bảng/detail: có.
- Còn `localStorage`/`export`/`copy`: không.
- Còn `innerHTML`: không còn trong route sau polish.

## Clinical safety

- Không có target bệnh nền.
- Không có kết luận an toàn/phù hợp/tốt-xấu cho bệnh.
- Không có lời khuyên `nên ăn`/`không nên ăn` theo bệnh.
- Không có lời khuyên chỉnh thuốc/insulin/lợi tiểu.
- Không có target natri/kali/phospho/carb/protein cá nhân.

## XSS/render

Input đã thử:

- `gạo`
- `thịt`
- `sữa`
- `nước mắm`
- `nuoc mam`
- `zzzzkhongco`
- `<script>alert(1)</script>`

Kết quả:

- Không tạo script tag/dialog.
- Không render HTML từ input.
- Empty state với query script chỉ hiện text trung tính:
  - `Không tìm thấy thực phẩm "<script>alert(1)</script>"`
- Render hiện dùng DOM-safe APIs:
  - `createElement`
  - `textContent`
  - `append`
  - `replaceChildren`

## Browser/mobile QA

Phương pháp:

- Build static site bằng `npm run build`.
- Serve `dist/` local qua `python -m http.server 4369 --bind 127.0.0.1`.
- QA browser bằng system Chrome qua Playwright với session sạch cho desktop và mobile `390 x 844`.

Preview/check:

- `/cong-cu/`: `200`
- `/cong-cu/tra-cuu-thuc-pham-viet/`: `200`
- Không redirect.
- Không meta refresh.
- Console sạch.
- Không page error.
- Desktop không overflow ngang.
- Mobile `390 x 844` không overflow ngang.
- Bảng/detail không làm overflow toàn trang; vùng detail dùng scroll container riêng.

Evidence chính:

- Desktop search `gạo` trả kết quả, chọn được item đầu tiên `Gạo nếp cái (#1001)`.
- Search `nước mắm` và `nuoc mam` đều trả kết quả.
- Search query script không bật dialog.
- Mobile search vẫn dùng được; detail panel hiện đúng sau chọn item.

## `/cong-cu/` card

- Mô tả hiện tại:
  - `Tra cứu thành phần dinh dưỡng thực phẩm Việt ở mức tham khảo, kèm ghi chú về nguồn và giới hạn dữ liệu.`
- Badge `Đã kiểm v1`: chưa gắn.

## Wording cấm

Kết quả grep/source/browser:

- Không thấy user-facing các cụm:
  - `phù hợp cho người...`
  - `an toàn cho...`
  - `thực phẩm tốt/xấu cho...`
  - `nên ăn` / `không nên ăn`
  - `đạt mục tiêu` / `không đạt mục tiêu`
  - `kiểm soát tốt` / `kiểm soát kém`
  - `mục tiêu ... cá nhân`
  - `tự chỉnh thuốc` / `tự chỉnh insulin` / `tự chỉnh lợi tiểu`
  - `chỉ định` / `kê đơn`
- Từ còn lại nhưng chấp nhận được:
  - `kcal`, `protein`, `natri`, `kali`, `phospho` dưới vai trò dữ liệu dinh dưỡng trung tính
  - cụm `bệnh nền` trong safety shell với nghĩa giới hạn phạm vi, không phải tư vấn điều trị

## Không sửa

- Không sửa engine.
- Không sửa dữ liệu gốc hàng loạt.
- Không sửa công thức.
- Không sửa route ngoài scope, trừ card mô tả `/cong-cu/`.
- Không sửa `dist` thủ công.

## QA cuối

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass, chỉ còn cảnh báo LF/CRLF kiểu Git Windows

## Worktree

- Sau khi sửa trong vòng này: chỉ có thay đổi đúng scope ở route và report/index
- Chưa commit tại thời điểm report này

## Kết luận

- Route đủ điều kiện sang `tool-tra-cuu-thuc-pham-viet-final-review-v1` nếu giữ nguyên scope hiện tại.
- Chưa stable/status update trong vòng này.
- Chưa deploy.
