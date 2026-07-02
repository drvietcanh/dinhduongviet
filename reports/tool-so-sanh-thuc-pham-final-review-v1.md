# Tool Final Review: `so-sanh-thuc-pham` v1

## 1. Mốc đầu vào

- Status v20 commit: `9fbcf0b docs: update tool status with food filter safety shell v1`
- QA polish commit: `84cee94 test: add food comparison page QA`
- Branch: `tool-so-sanh-thuc-pham-final-review-v1`
- Chưa deploy

## 2. File đã đọc

- `src/pages/cong-cu/so-sanh-thuc-pham.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-so-sanh-thuc-pham-qa-polish-v1.md`
- `reports/tools-core-status-v20.md`
- `reports/needs-qa-polish-triage-v1.md`
- `reports/tool-tra-cuu-thuc-pham-viet-final-review-v1.md`
- `reports/tool-loc-thuc-pham-final-review-v1.md`
- `package.json`

Đối chiếu thêm dữ liệu/helper liên quan:

- `src/pages/api-foods.json.ts`
- `public/api/vietnam-foods.json`

## 3. File đã sửa nếu có

- `reports/tool-so-sanh-thuc-pham-final-review-v1.md`

Không cần sửa thêm route hay index trong vòng final review này.

## 4. Route scope sau final review

- `neutral food comparison + data QA shell only`

## 5. Browser/mobile QA

- Preview port: `4367`
- `/cong-cu/`: `200`
- `/cong-cu/so-sanh-thuc-pham/`: `200`
- Không redirect
- Không meta refresh
- Console: không thấy lỗi runtime mới trong fresh preview/session sau rebuild; các flow search/chọn/xóa/so sánh chạy bình thường
- Desktop overflow ngang: không
- Mobile `390 x 844` overflow ngang: không
- Search/chọn thực phẩm trên mobile: dùng được
- Bảng/card so sánh trên mobile: hiển thị được, không làm overflow toàn trang
- Empty state:
  - rõ khi chưa chọn đủ 2 món
  - rõ khi không có kết quả tìm kiếm
- Screenshot: không chụp trong vòng này

## 6. Search/compare QA

Đã thử query:

- `gạo`
- `thịt`
- `sữa`
- `nước mắm`
- `nuoc mam`
- `khong-co-ket-qua-xyz`
- `<script>alert(1)</script>`
- `<b>gao</b>`

Kết quả:

- Search có dấu/không dấu: pass
- `nước mắm` và `nuoc mam`: đều trả `Nước mắm`
- Query không có kết quả: hiện `Không tìm thấy thực phẩm phù hợp`
- Query script/HTML: không tạo dialog, không render HTML
- Có thể chọn `2` món để so sánh: pass
- Có thể chọn `3-4` món:
  - final review đã chọn được `4` món: `Bột gạo`, `Nước mắm`, `Cà phê sữa đá`, `Ba chỉ heo`
- Có thể xóa món đã chọn: pass
- Sau khi xóa còn `1` món:
  - bảng so sánh ẩn đi
  - empty state trở lại với thông điệp trung tính
- Trạng thái chưa chọn đủ món:
  - `Chọn ít nhất 2 thực phẩm để xem bảng so sánh dữ liệu.`

## 7. Data/unit QA

- Dữ liệu user-facing hiển thị theo `100g phần ăn được`
- Năng lượng: `kcal`
- Protein / glucid / chất béo / chất xơ / đường: `g`
- Natri / kali / canxi / sắt / kẽm / phốt pho / cholesterol: `mg`
- Vitamin A / folate: `µg`
- Không có quy đổi gram/khẩu phần user-facing riêng
- Không gọi natri là muối
- Missing data hiển thị trung tính bằng `—`
- `0` được phân biệt với thiếu dữ liệu (`null` mới ra `—`)
- Rounding:
  - số nguyên giữ nguyên
  - số thập phân làm tròn `1` chữ số
- So sánh không biến missing data thành `0`
- Bảng/card không dùng missing data để kết luận chênh lệch
- Không sửa dữ liệu gốc hàng loạt trong vòng này
- Backlog data QA:
  - mã `6014` `Dầu oliu` vẫn có `name_en` nghi ngờ gây nhiễu search metadata
  - chưa thấy chặn final review của route này
  - không sửa dữ liệu gốc trong vòng final review

## 8. UI safety

- Còn search: có
- Còn chọn thực phẩm: có, `2-4` món
- Còn bảng/card so sánh: có bảng so sánh
- Còn quy đổi gram/khẩu phần user-facing: không
- Còn localStorage/export/copy: không
- Còn `innerHTML`: không

## 9. Clinical safety

- Còn `winner`: không
- Còn `tốt hơn/xấu hơn/nên chọn`: không
- Còn filter bệnh nền: không
- Còn target bệnh nền: không
- Còn kết luận an toàn/phù hợp/tốt-xấu cho bệnh: không
- Còn lời khuyên nên ăn/không nên ăn/chỉnh thuốc: không
- Còn target natri/kali/phospho/carb/protein cá nhân: không

Các cụm còn lại như `cao hơn`, `thấp hơn` chỉ dùng trong note và cell note để mô tả chênh lệch dữ liệu trung tính trong nhóm đang so sánh, không phải kết luận sức khỏe hay khuyến nghị điều trị.

## 10. XSS/render

Đã thử:

- `gạo`
- `thịt`
- `sữa`
- `nước mắm`
- `nuoc mam`
- `khong-co-ket-qua-xyz`
- `<script>alert(1)</script>`
- `<b>gao</b>`

Kết quả:

- Không tạo script/dialog
- Không render HTML từ input
- Không có lỗi runtime mới quan sát được trong fresh session
- Render hiện dùng DOM-safe API:
  - `createElement`
  - `textContent`
  - `appendChild`
  - `replaceChildren`

## 11. Wording cấm

Kết quả grep/source/browser:

- Không còn `winner`
- Không còn `tốt hơn`
- Không còn `xấu hơn`
- Không còn `nên chọn`
- Không còn `lựa chọn tốt hơn`
- Không còn `khuyên chọn`
- Không còn `an toàn cho ...`
- Không còn `phù hợp cho ...`
- Không còn `nên ăn / không nên ăn`
- Không còn wording chỉnh thuốc/insulin/lợi tiểu

Từ còn lại nhưng chấp nhận được:

- `cao hơn`
- `thấp hơn`
- `phù hợp` trong `Không tìm thấy thực phẩm phù hợp`
- các từ bệnh nền/thuốc trong safety shell:
  - `đái tháo đường`
  - `bệnh thận`
  - `tăng huyết áp`
  - `gout`
  - `suy tim`
  - `thuốc`
  - `insulin`
  - `lợi tiểu`

Lý do chấp nhận:

- `cao hơn/thấp hơn` chỉ mô tả số liệu trung tính
- `phù hợp` trong empty state tìm kiếm không mang nghĩa tư vấn sức khỏe
- các từ bệnh nền/thuốc chỉ xuất hiện trong safety shell

## 12. `/cong-cu/` card

- Mô tả hiện tại:
  - `So sánh thành phần dinh dưỡng giữa thực phẩm ở mức dữ liệu tham khảo, không kết luận thực phẩm tốt hay xấu.`
- Badge `Đã kiểm v1`: chưa gắn

## 13. Có sửa engine/dữ liệu gốc/công thức/route ngoài scope/dist không

- Không sửa engine chung
- Không sửa dữ liệu gốc hàng loạt
- Không sửa công thức chung
- Không sửa route ngoài scope
- Không sửa `dist`

## 14. QA cuối

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass

## 15. `git diff --check`

- Pass

## 16. Worktree cuối sạch không

- Chưa, trước commit còn file report mới của vòng này

## 17. Kết luận

- `so-sanh-thuc-pham` đạt final review cho scope:
  - `neutral food comparison + data QA shell only`
- Đủ điều kiện sang `tools-core-status-v21` nếu giữ nguyên scope hẹp ở trên
- Chưa stable/status update trong vòng này
- Chưa deploy
