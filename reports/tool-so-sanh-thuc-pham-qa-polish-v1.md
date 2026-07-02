# Tool QA Polish: `so-sanh-thuc-pham` v1

## 1. Mốc đầu vào

- Status v20 commit: `9fbcf0b docs: update tool status with food filter safety shell v1`
- Branch: `tool-so-sanh-thuc-pham-qa-polish-v1`
- Chưa deploy

## 2. File đã đọc

- `src/pages/cong-cu/so-sanh-thuc-pham.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tools-core-status-v20.md`
- `reports/tools-core-status-v19.md`
- `reports/needs-qa-polish-triage-v1.md`
- `reports/tool-tra-cuu-thuc-pham-viet-final-review-v1.md`
- `reports/tool-loc-thuc-pham-final-review-v1.md`
- `package.json`

Đọc thêm để đối chiếu dữ liệu/luồng liên quan:

- `src/pages/api-foods.json.ts`
- `public/api/vietnam-foods.json`

## 3. Hiện trạng trước polish

- Có search input + autocomplete.
- Cho chọn `2–4` thực phẩm bằng slot.
- Có bảng so sánh dữ liệu.
- Không có localStorage/export/copy.
- Không có chart/canvas.
- Không có filter bệnh nền riêng.
- Không có target bệnh nền riêng.
- Dữ liệu lấy từ `/api-foods.json`.
- Route cũ có lead copy: `Phát hiện ngay thực phẩm nào tốt hơn cho mục tiêu sức khỏe của bạn!`
- Route cũ có nhãn/legend kiểu:
  - `✓ Tốt nhất`
  - `⚠ Cần lưu ý`
  - `giá trị thấp hơn tốt hơn cho...`
- Route cũ render bằng `innerHTML` ở nhiều chỗ:
  - slot
  - add-more button
  - suggestion list
  - table compare
- Search chưa chuẩn hóa accent-insensitive rõ ràng trong code hiện trạng cũ.

## 4. File đã sửa

- `src/pages/cong-cu/so-sanh-thuc-pham.astro`
- `src/pages/cong-cu/index.astro`

## 5. Scope sau polish

- `neutral food comparison + data QA shell only`

## 6. Những thứ đã hạ rủi ro

- Bỏ lead copy mang nghĩa khuyên chọn theo sức khỏe.
- Bỏ nhãn/legend kiểu `Tốt nhất`, `Cần lưu ý`.
- Bỏ logic/hiển thị mang nghĩa `winner`.
- Chuyển wording sang trung tính:
  - `cao hơn trong nhóm so sánh`
  - `thấp hơn trong nhóm so sánh`
  - `khác biệt dữ liệu`
- Thêm safety/data shell nói rõ:
  - dữ liệu chủ yếu theo `100g phần ăn được`
  - quy đổi gram nếu có chỉ là tham khảo
  - không dùng route để tự chỉnh thuốc, insulin, lợi tiểu
  - nhóm bệnh nền/thuốc/thai kỳ/trẻ em/người cao tuổi cần hỏi bác sĩ/chuyên gia
- Bỏ toàn bộ `innerHTML` trong route, chuyển sang render DOM-safe bằng:
  - `createElement`
  - `textContent`
  - `appendChild`
  - `replaceChildren`
- Search đổi sang accent-insensitive bằng normalize dấu.

## 7. Data/unit QA

- Đơn vị hiển thị:
  - năng lượng: `kcal`
  - protein / glucid / chất béo / chất xơ / đường: `g`
  - natri / kali / canxi / sắt / kẽm / phốt pho / cholesterol: `mg`
  - vitamin A / folate: `µg`
- Route user-facing hiện mô tả dữ liệu theo `100g phần ăn được`.
- Không có quy đổi gram/khẩu phần user-facing riêng trong vòng này.
- Missing data:
  - hiển thị trung tính bằng `—`
  - không suy đoán
- `0` vẫn tách khỏi thiếu dữ liệu vì `null` mới render `—`.
- Rounding:
  - số nguyên giữ nguyên
  - số thập phân làm tròn `1` chữ số
- So sánh không biến missing data thành `0`.
- Search tiếng Việt:
  - có dấu: pass
  - không dấu: pass với `nuoc mam`
- Empty state:
  - rõ khi chưa chọn đủ thực phẩm
  - rõ khi autocomplete không có kết quả
- Backlog mã `6014` chưa thấy chặn route này trong QA polish; vẫn giữ là backlog data QA riêng, không sửa dữ liệu gốc trong vòng này.

## 8. UI safety

- Còn search: có
- Còn chọn thực phẩm: có
- Còn bảng/card so sánh: có bảng so sánh
- Còn quy đổi gram/khẩu phần user-facing: không
- Còn localStorage/export/copy: không
- Còn `innerHTML`: không

## 9. Clinical safety

- Còn filter bệnh nền: không
- Còn target bệnh nền: không
- Còn kết luận an toàn/phù hợp/tốt-xấu cho bệnh: không
- Còn lời khuyên nên ăn/không nên ăn/chỉnh thuốc: không
- Còn target natri/kali/phospho/carb/protein cá nhân: không

## 10. XSS/render

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

- Không tạo script tag/dialog
- Không render HTML từ input
- Không có console error mới
- Render hiện dùng DOM-safe API:
  - `createElement`
  - `textContent`
  - `appendChild`
  - `replaceChildren`

## 11. Browser/mobile QA

- Preview port: `4367`
- Route `/cong-cu/`: `200`
- Route `/cong-cu/so-sanh-thuc-pham/`: `200`
- Không redirect
- Không meta refresh
- Console: sạch
- Desktop overflow ngang: không
- Mobile `390 x 844` overflow ngang: không
- Search/chọn thực phẩm trên mobile: dùng được
- Bảng so sánh trên mobile:
  - không overflow toàn trang
  - không vỡ layout
- Empty state rõ:
  - khi chưa chọn đủ 2 thực phẩm
  - khi autocomplete không có kết quả

## 12. `/cong-cu/` card

- Mô tả hiện tại:
  - `So sánh thành phần dinh dưỡng giữa thực phẩm ở mức dữ liệu tham khảo, không kết luận thực phẩm tốt hay xấu.`
- Badge `Đã kiểm v1`: chưa gắn

## 13. Wording cấm

Kết quả grep/source/browser sau polish:

- Không còn `winner`
- Không còn `tốt hơn`
- Không còn `xấu hơn`
- Không còn `nên chọn`
- Không còn `lựa chọn tốt hơn`
- Không còn `an toàn cho ...`
- Không còn `phù hợp cho ...`
- Không còn `nên ăn / không nên ăn`
- Không còn wording chỉnh thuốc/insulin/lợi tiểu

Từ còn lại nhưng chấp nhận được:

- `cao hơn`
- `thấp hơn`

Lý do chấp nhận:

- Chỉ dùng để mô tả chênh lệch dữ liệu trong chính bảng đang so sánh
- Có note user-facing nói rõ đây không phải kết luận sức khỏe hay khuyến nghị điều trị

Các từ bệnh nền còn lại:

- `đái tháo đường`
- `bệnh thận`
- `tăng huyết áp`
- `gout`
- `suy tim`
- `thuốc`
- `insulin`
- `lợi tiểu`

Lý do chấp nhận:

- Chỉ còn trong safety shell để chỉ nhóm cần hỏi bác sĩ/chuyên gia

## 14. Không sửa

- Không sửa engine chung
- Không sửa dữ liệu gốc hàng loạt
- Không sửa công thức chung
- Không sửa route ngoài scope
- Không sửa `dist`

## 15. QA cuối

- `npm run build` pass
- `npm run qa` pass
- `npm run qa:food-data` pass
- `npm run qa:data-consistency` pass
- `npm run test:tools` pass

## 16. `git diff --check`

- Pass về nội dung diff
- Chỉ còn cảnh báo LF/CRLF kiểu Git Windows cho:
  - `src/pages/cong-cu/index.astro`
  - `src/pages/cong-cu/so-sanh-thuc-pham.astro`

## 17. Worktree cuối sạch không

- Chưa trước commit, vì còn đúng các file sửa trong scope:
  - `src/pages/cong-cu/index.astro`
  - `src/pages/cong-cu/so-sanh-thuc-pham.astro`
  - `reports/tool-so-sanh-thuc-pham-qa-polish-v1.md`

## 18. Kết luận

- `so-sanh-thuc-pham` đã được hạ về hướng trung tính hơn rõ rệt
- Nếu QA cuối pass, đủ điều kiện sang `tool-so-sanh-thuc-pham-final-review-v1`
- Chưa stable/status update trong vòng này
- Chưa deploy
