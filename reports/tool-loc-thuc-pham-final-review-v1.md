# Tool Final Review: `loc-thuc-pham`

Date: 2026-07-02

Branch: `tool-loc-thuc-pham-final-review-v1`

## 1. Mốc đầu vào

- status v19 commit: `f7f5ce5 docs: update tool status with Vietnamese food lookup safety shell v1`
- QA polish commit: `fc40e65 test: add food filter page QA`
- chưa deploy

## 2. File đã đọc

- `src/pages/cong-cu/loc-thuc-pham.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-loc-thuc-pham-qa-polish-v1.md`
- `reports/tools-core-status-v19.md`
- `reports/needs-qa-polish-triage-v1.md`
- `reports/tool-tra-cuu-thuc-pham-viet-final-review-v1.md`
- `package.json`
- `public/api/vietnam-foods.json` (spot check backlog metadata `6014`)

## 3. File đã sửa nếu có

- Không cần sửa thêm code ở vòng final review.
- Chỉ tạo report này.

## 4. Route scope sau final review

- `neutral food filtering + data QA shell only`

## 5. Browser/mobile QA

- Preview port: `4367`
- `/cong-cu/` status: `200`
- `/cong-cu/loc-thuc-pham/` status: `200`
- redirect/meta refresh: không có
- console fresh reload/session: sạch
- desktop overflow: không có
- mobile `390 x 844` overflow: không có
- search/filter mobile: dùng được
- detail card/grid mobile: không làm overflow toàn trang
- empty state: rõ, có note dữ liệu theo `100g phần ăn được`
- screenshot: không lưu artifact riêng trong vòng này

## 6. Search/filter QA

### Query đã thử

- `gạo`
- `thịt`
- `sữa`
- `nước mắm`
- `nuoc mam`
- `khong-co-ket-qua-xyz`
- `<script>alert(1)</script>`
- `<b>gao</b>`

### Kết quả

- Có dấu/không dấu:
  - `nước mắm` và `nuoc mam` đều trả `Nước mắm`
- Không kết quả:
  - hiện `0 thực phẩm`
  - empty state rõ, không crash
- Script/HTML query:
  - không tạo dialog
  - không render HTML vào result list
  - không có lỗi console mới

### Filter đã thử

- nhóm `Thịt`
- `kcal >= 300`
- `natri <= 120`
- chip `Ít purin`
- chip `GI thấp`

### Ghi nhận filter

- Các filter trên vẫn hoạt động như filter dữ liệu trung tính.
- Không xuất hiện wording `phù hợp/an toàn/nên ăn/không nên ăn`.
- Không có filter bệnh nền.
- Không có reset/clear button riêng; route hiện reset bằng cách bỏ giá trị filter và bỏ tick chip.
- `GI thấp` và `Ít purin` có thể trả các nhóm thực phẩm nhìn không trực giác nếu tag metadata nền đã gán như vậy; trong UI hiện tại chúng vẫn chỉ là data tags, không được diễn giải như khuyến nghị bệnh lý.

## 7. Data/unit QA

- Dữ liệu hiển thị theo `100g phần ăn được`
- Năng lượng: `kcal`
- Đạm / béo / glucid / xơ: `g`
- Natri / vi chất nếu có: `mg`
- Natri vs muối:
  - route dùng `mg natri`
  - không gọi natri là muối nếu chưa có quy đổi
- Missing data:
  - hiển thị trung tính bằng `—` hoặc `Chưa có số liệu chi tiết`
  - không suy đoán
- `0` vs thiếu dữ liệu:
  - phân biệt được
- rounding:
  - hợp lý, không có chuỗi số lẻ dài bất thường
- filter/sort với missing data:
  - không thấy UI biến missing data thành `0`
  - route không có sort user-facing riêng

### Backlog 6014

- `public/api/vietnam-foods.json` vẫn còn metadata nghi ngờ ở mã `6014`:
  - `Dầu oliu`
  - `name_en` chứa chuỗi nhóm thịt
- Vòng này không sửa dữ liệu gốc.
- Spot check query `thịt` trong browser không thấy `Dầu oliu` lọt vào top result render, nên backlog này chưa chặn final review của scope hiện tại.

## 8. UI safety

- Search: còn
- Filter: còn
- Sort user-facing: không có
- Bảng HTML: không có
- Detail card/grid: còn
- localStorage/export/copy: không có
- `innerHTML`: không còn

## 9. Clinical safety

- Filter bệnh nền: không còn
- Target bệnh nền: không còn
- Kết luận `an toàn/phù hợp/tốt-xấu` cho bệnh: không còn
- Lời khuyên `nên ăn/không nên ăn/chỉnh thuốc`: không còn
- Target natri/kali/phospho/carb/protein cá nhân: không còn
- Không có UI nào giống công cụ chọn thực phẩm theo bệnh

## 10. XSS/render

- Input/query đã thử:
  - `gạo`
  - `thịt`
  - `sữa`
  - `nước mắm`
  - `nuoc mam`
  - `khong-co-ket-qua-xyz`
  - `<script>alert(1)</script>`
  - `<b>gao</b>`
- Có tạo script/dialog không:
  - không
- Render bằng gì:
  - `createElement`
  - `textContent`
  - `append`
  - `appendChild`
  - `replaceChildren`

## 11. Wording cấm

### Kết quả grep/source/browser

- Không thấy user-facing:
  - `phù hợp cho người tiểu đường`
  - `an toàn cho bệnh thận`
  - `thực phẩm tốt/xấu cho bệnh`
  - `nên ăn/không nên ăn`
  - `đạt mục tiêu/không đạt mục tiêu`
  - `kiểm soát tốt/kém`
  - `tự chỉnh thuốc/insulin/lợi tiểu`
  - `chỉ định`
  - `kê đơn`

### Từ còn lại nhưng chấp nhận được

- `an toàn`, `phù hợp`, `nên/không nên ăn`
  - chỉ còn trong safety shell, dùng để phủ định cách hiểu sai
- `đái tháo đường`, `bệnh thận`, `tăng huyết áp`, `gout`, `suy tim`, `thuốc`
  - chỉ còn trong safety shell, dùng để nhắc nhóm cần hỏi bác sĩ/chuyên gia
- `GI thấp`, `GI cao`, `Ít natri`, `Nhiều natri`, `Ít purin`, `Nhiều purin`, `Ít kali`, `Nhiều kali`
  - đang là nhãn filter dữ liệu trung tính, không phải nhãn sức khỏe cá nhân
- `script`
  - còn ở mức thẻ `<script>` của route, không phải render từ input người dùng

## 12. /cong-cu/ card

- Mô tả hiện tại:
  - `Lọc thực phẩm theo nhóm và chỉ số dinh dưỡng ở mức dữ liệu tham khảo, không thay thế tư vấn chuyên môn.`
- badge `Đã kiểm v1`: chưa gắn

## 13. Có sửa engine/dữ liệu gốc/công thức/route ngoài scope/dist không

- Không

## 14. QA cuối pass/fail

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass

## 15. git diff --check

- pass
- nếu có cảnh báo LF/CRLF thì chỉ là cảnh báo môi trường Git Windows, không làm fail QA

## 16. Worktree cuối sạch không

- Sẽ sạch sau commit nếu không phát sinh thay đổi ngoài report final review

## 17. Kết luận

- Đủ điều kiện sang `tools-core-status-v20` nếu QA pass
- Stable scope đề xuất:
  - `neutral food filtering + data QA shell only`
- Chưa stable/status update trong vòng này
- Chưa deploy
