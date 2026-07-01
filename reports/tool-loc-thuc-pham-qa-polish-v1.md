# tool-loc-thuc-pham-qa-polish-v1

## 1. Mốc đầu vào

- status v19 commit: `f7f5ce5`
- Chưa deploy

## 2. File đã đọc

- `src/pages/cong-cu/loc-thuc-pham.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tools-core-status-v19.md`
- `reports/tools-core-status-v18.md`
- `reports/needs-qa-polish-triage-v1.md`
- `reports/tool-tra-cuu-thuc-pham-viet-qa-polish-v1.md`
- `reports/tool-tra-cuu-thuc-pham-viet-final-review-v1.md`
- `src/lib/nutrition.ts`
- `src/lib/vietnam-nutrition.ts`
- `package.json`
- `public/api/vietnam-foods.json` (spot check metadata liên quan search)

## 3. Hiện trạng trước polish

- Có search input, filter nhóm thực phẩm, filter trạng thái, filter khoảng số liệu dinh dưỡng, tag filter nhanh.
- Có lưới kết quả/detail card.
- Không có localStorage, export, copy, chart, canvas.
- Không có filter bệnh nền riêng, nhưng wording trước patch dễ bị hiểu là công cụ chọn thực phẩm theo bệnh:
  - lead copy nhắc "phù hợp với chế độ ăn của bạn"
  - card `/cong-cu/` mô tả `Lọc theo năng lượng, đạm, natri, kali, tag bệnh.`
  - quick filter label là `Bộ lọc nhanh (theo chỉ định)`
  - tag có nhãn `Đường huyết thấp` / `Đường huyết cao`
- Render kết quả dùng `innerHTML` cho cả empty state và list card.
- Search trước patch chỉ case-insensitive, chưa accent-insensitive rõ ràng ở route này.

## 4. File đã sửa

- `src/pages/cong-cu/loc-thuc-pham.astro`
- `src/pages/cong-cu/index.astro`

## 5. Scope sau polish

- `neutral food filtering + data QA shell only`

## 6. Những thứ đã hạ rủi ro

- Đổi lead copy sang hướng lọc dữ liệu tham khảo, không thay thế tư vấn chuyên môn.
- Thêm safety/data shell nêu rõ:
  - dữ liệu chủ yếu theo `100g phần ăn được`
  - không dùng route để kết luận thực phẩm `an toàn`, `phù hợp`, hay `nên/không nên ăn` cho bệnh nền
  - nhóm có bệnh nền/thuốc/thai kỳ/trẻ em/người cao tuổi cần hỏi bác sĩ hoặc chuyên gia dinh dưỡng
- Đổi nhãn `Bộ lọc nhanh (theo chỉ định)` thành `Bộ lọc nhanh theo dữ liệu`.
- Đổi `Đường huyết thấp` / `Đường huyết cao` thành `GI thấp` / `GI cao` để bớt đọc thành kết luận bệnh.
- Bỏ `innerHTML`; render bằng `createElement`, `textContent`, `appendChild`, `append`, `replaceChildren`.
- Bổ sung normalize accent-insensitive cho search:
  - hỗ trợ `nước mắm` và `nuoc mam`
  - normalize `đ` -> `d`

## 7. Data/unit QA

- User-facing hiển thị:
  - năng lượng: `kcal`
  - đạm / béo / glucid / xơ: `g`
  - natri: `mg`
- Route hiển thị rõ dữ liệu tham khảo theo `100g phần ăn được`.
- Missing data hiển thị trung tính bằng `—` hoặc empty state `Chưa có số liệu chi tiết`; không suy đoán số còn thiếu.
- `0` vẫn hiển thị là số thật ở card detail, khác với dữ liệu thiếu.
- Route không gọi natri là muối; dùng label `mg natri`.
- Rounding quan sát trong UI là hợp lý, không có chuỗi số lẻ quá dài.
- Search tiếng Việt có dấu/không dấu hoạt động:
  - `nước mắm` và `nuoc mam` đều trả đúng `Nước mắm`
- Empty state rõ:
  - `0 thực phẩm`
  - nhắc nới lỏng bộ lọc hoặc đổi từ khóa
  - kèm note dữ liệu theo `100g phần ăn được`
- Ghi nhận backlog data QA:
  - metadata nguồn/search còn điểm nghi ngờ ở mã `6014` (`Dầu oliu`) từ vòng trước
  - vòng này không sửa dữ liệu gốc
  - query `thịt` vẫn cho tập kết quả rộng kiểu thịt chế biến / thực phẩm liên quan nhóm thịt, nhưng chưa thấy `Dầu oliu` xuất hiện trong danh sách kết quả render khi spot check browser

## 8. UI safety

- Search: còn
- Filter: còn
- Sort: không có control sort user-facing riêng; route đang sort nội bộ theo tên
- Bảng/table: không có table HTML; hiển thị bằng grid card
- Detail card: còn
- localStorage/export/copy: không có
- `innerHTML`: không còn

## 9. Clinical safety

- Filter bệnh nền: không có
- Target bệnh nền: không có
- Không còn kết luận `an toàn/phù hợp/tốt-xấu` cho bệnh nền
- Không có lời khuyên `nên ăn/không nên ăn`
- Không có hướng dẫn chỉnh thuốc / insulin / lợi tiểu
- Không có target natri / kali / phospho / carb / protein cá nhân
- Các tag `ít natri`, `nhiều kali`, `ít purin`, `GI thấp`, `GI cao` hiện được đặt trong ngữ cảnh lọc dữ liệu trung tính, không gắn kết luận điều trị

## 10. XSS/render

- Query đã thử:
  - `gạo`
  - `thịt`
  - `sữa`
  - `nước mắm`
  - `nuoc mam`
  - `zzz-khong-co-ket-qua`
  - `<script>alert(1)</script>`
  - `<b>gao</b>`
- Kết quả:
  - không tạo script tag
  - không bật dialog
  - không render HTML từ query
  - không có lỗi console mới
- Render hiện dùng DOM-safe primitives:
  - `createElement`
  - `textContent`
  - `appendChild`
  - `append`
  - `replaceChildren`

## 11. Browser/mobile QA

- Preview dùng `astro preview` port `4367`
- `GET /cong-cu/` -> `200`
- `GET /cong-cu/loc-thuc-pham/` -> `200`
- Không redirect
- Không meta refresh
- Console browser sạch
- Desktop:
  - không overflow ngang
  - route hiển thị grid card bình thường
- Mobile `390 x 844`:
  - không overflow ngang
  - search/filter dùng được
  - card kết quả không làm vỡ toàn trang
  - query `nuoc mam` vẫn ra `1 thực phẩm`

## 12. /cong-cu/ card

- Mô tả hiện tại:
  - `Lọc thực phẩm theo nhóm và chỉ số dinh dưỡng ở mức dữ liệu tham khảo, không thay thế tư vấn chuyên môn.`
- Badge `Đã kiểm v1`: chưa gắn

## 13. Wording cấm

- Không thấy user-facing các cụm:
  - `phù hợp cho người tiểu đường`
  - `an toàn cho bệnh thận`
  - `thực phẩm tốt/xấu cho bệnh`
  - `nên ăn/không nên ăn`
  - `đạt mục tiêu/không đạt mục tiêu`
  - `tự chỉnh thuốc/insulin/lợi tiểu`
- Từ còn lại nhưng chấp nhận được:
  - `an toàn`, `phù hợp`, `nên/không nên ăn`, `đái tháo đường`, `bệnh thận`, `tăng huyết áp`, `gout`, `suy tim`
    - chỉ nằm trong safety shell để phủ định việc dùng tool như tư vấn bệnh
  - `GI thấp`, `GI cao`, `ít natri`, `nhiều natri`, `ít purin`, `nhiều purin`
    - là nhãn filter dữ liệu trung tính, không phải kết luận sức khỏe cá nhân

## 14. Không sửa

- Không sửa engine
- Không sửa dữ liệu gốc hàng loạt
- Không sửa công thức chung
- Không sửa route ngoài scope
- Không sửa `dist`

## 15. QA cuối

- `npm run build`: pass
  - lần đầu timeout do output dài; rerun pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
  - có một lần đầu báo `ENOENT` với `dist/api-foods.json`; rerun ngay sau đó pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass về mặt lỗi diff; chỉ còn cảnh báo LF/CRLF kiểu môi trường Git Windows

## 16. Worktree

- Sau khi sửa route và tạo report: có thay đổi đúng scope
- Sẽ sạch lại sau commit nếu không phát sinh lỗi mới

## 17. Kết luận

- Route đạt scope `neutral food filtering + data QA shell only`
- Đủ điều kiện sang `tool-loc-thuc-pham-final-review-v1` nếu QA pass ở trạng thái cuối
- Chưa stable/status update trong vòng này
- Chưa deploy
