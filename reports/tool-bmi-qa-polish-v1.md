# BMI QA Polish v1

## 1. Mốc đầu vào

- Vòng trước: `tool-bmi-spec-v1`
- Commit đầu vào: `bbac854`
- Branch vòng này: `tool-bmi-qa-polish-v1`
- Chưa deploy

## 2. File đã đọc/sửa

Đã đọc:

- `D:\openclaw\apps\dinh-duong-viet\reports\tool-bmi-spec-v1.md`
- `D:\openclaw\apps\dinh-duong-viet\reports\needs-spec-triage-v1.md`
- `D:\openclaw\apps\dinh-duong-viet\reports\tools-core-status-v28.md`
- `D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\bmi.astro`
- `D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\index.astro`
- `D:\openclaw\apps\dinh-duong-viet\package.json`

Đã sửa:

- `D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\bmi.astro`
- `D:\openclaw\apps\dinh-duong-viet\reports\tool-bmi-qa-polish-v1.md`

## 3. Scope sau polish

`safe BMI orientation + safety shell only`

Route `/cong-cu/bmi/` hiện chỉ còn:

- nhập chiều cao
- nhập cân nặng
- tính BMI
- giải thích BMI là chỉ số sàng lọc/tham khảo
- nêu giới hạn của BMI
- safety shell hỏi bác sĩ/chuyên gia khi cần đánh giá cá nhân

## 4. Chức năng còn lại

- Form nhập `cân nặng (kg)`
- Form nhập `chiều cao (cm)`
- Hỗ trợ số thập phân bằng dấu `,` hoặc `.`
- Nút `Tính BMI tham khảo`
- Khối kết quả trung tính:
  - `BMI tham khảo`
  - `Chỉ số sàng lọc tham khảo`
- Thông báo lỗi trong giao diện, không dùng `alert()`

Không có:

- reset riêng
- localStorage
- export
- copy
- share
- chart
- canvas

## 5. Những phần đã bỏ/không thêm lại

Không còn hoặc không thêm lại:

- vòng eo
- giới tính
- tuổi
- cân nặng lý tưởng
- khoảng cân nặng khỏe mạnh
- bảng phân loại BMI
- nguy cơ bệnh
- lời khuyên giảm cân/tăng cân
- mục tiêu BMI/cân nặng
- BMR/TDEE/calo/khẩu phần
- filter bệnh nền
- route-scoped `innerHTML`

## 6. Logic/input QA

Công thức:

- `BMI = cân nặng (kg) / (chiều cao (m))^2`

Kiểm tra:

- `170 cm + 70 kg` -> `24.2 kg/m²`
- `160 cm + 50 kg` -> `19.5 kg/m²`
- `1,70` ở ô chiều cao -> không tính, hiện nhắc nhập theo `cm`
- rỗng / rỗng -> không crash, không bật dialog
- `0 / 70` -> không crash
- `170 / 0` -> không crash
- `-170 / 70` -> không crash
- `9999 / 9999` -> không crash
- `abc / def` -> không crash

Kết quả:

- route chuyển `cm -> m` đúng trước khi tính
- kết quả làm tròn `1` chữ số thập phân
- không phát sinh phân loại/chẩn đoán sau khi tính
- input lỗi không tính BMI
- thông báo lỗi giữ giọng trung tính

Thông báo lỗi đã thấy:

- `Vui lòng nhập chiều cao và cân nặng bằng số hợp lệ.`
- `Chiều cao và cân nặng cần lớn hơn 0.`
- `Số liệu đang vượt ngoài phạm vi tham khảo của công cụ.`
- `Chiều cao cần nhập theo cm, ví dụ 170 hoặc 170,5.`

## 7. Safety/content QA

Không còn wording user-facing kiểu:

- `bạn bị béo phì`
- `bạn bị suy dinh dưỡng`
- `nguy cơ cao mắc bệnh`
- `cần giảm cân ngay`
- `cần tăng cân ngay`
- `cân nặng lý tưởng của bạn là`
- `nên ăn ít hơn / ăn nhiều hơn`
- `đạt/không đạt mục tiêu`
- `tốt/xấu`
- `an toàn/phù hợp cho bệnh`
- `kiểm soát tốt/kém`
- `chỉnh thuốc/insulin/lợi tiểu`
- `điều trị béo phì / điều trị suy dinh dưỡng`

Wording đang giữ đúng hướng trung tính:

- `BMI tham khảo`
- `chỉ số sàng lọc đơn giản`
- `không thay thế đánh giá lâm sàng`
- `kết quả cần được hiểu cùng tuổi, giới, vòng eo, thành phần cơ thể và bối cảnh sức khỏe`
- `nên hỏi bác sĩ/chuyên gia dinh dưỡng nếu cần đánh giá cá nhân`

## 8. Clinical safety shell

Route hiện nhắc rõ:

- BMI không phản ánh đầy đủ thành phần cơ thể
- BMI có thể kém phù hợp với:
  - thai kỳ
  - trẻ em
  - người cao tuổi
  - vận động viên
  - người có phù hoặc thay đổi cân nặng nhanh
- người có bệnh nền, đang dùng thuốc, rối loạn ăn uống hoặc cần mục tiêu điều trị nên hỏi bác sĩ/chuyên gia dinh dưỡng
- không tự điều chỉnh thuốc, insulin, lợi tiểu hoặc chế độ điều trị chỉ dựa trên BMI

## 9. DOM/XSS QA

Kiểm tra source:

- không có `innerHTML` route-scoped
- render kết quả bằng `textContent`

Payload đã thử:

- `<script>alert(1)</script>`
- `<b>gao</b>`
- `"><img src=x onerror=alert(1)>`
- `=HYPERLINK("http://x","x")`
- `+SUM(1,1)`
- `@cmd`
- `-1+2`

Kết quả:

- không tạo dialog
- không render HTML
- không phản chiếu payload vào DOM
- không phá layout
- không làm hỏng form hoặc khối kết quả
- console không có lỗi mới

## 10. Browser/mobile QA

Preview port:

- `4321`

Kiểm tra route:

- `/cong-cu/` -> `200`
- `/cong-cu/bmi/` -> `200`
- không redirect
- không meta refresh

Console:

- sạch trong fresh reload/session

Desktop:

- không overflow ngang
- flow `70 / 170` tính đúng `24.2 kg/m²`
- flow `50 / 160` tính đúng `19.5 kg/m²`

Mobile:

- viewport `390 x 844`
- không overflow ngang
- tính BMI hợp lệ vẫn hoạt động
- input lỗi hiển thị trung tính, không crash

Ghi chú:

- route không có nút reset riêng trong scope hiện tại; không phát hiện blocker vì form vẫn dùng được ổn định khi nhập lại giá trị mới

## 11. Card /cong-cu/

Card hiện giữ mô tả trung tính:

- `Tính BMI ở mức tham khảo và nhắc các giới hạn của chỉ số này, không thay thế đánh giá lâm sàng.`

Trạng thái:

- chưa gắn badge `Đã kiểm v1`

## 12. Những gì không sửa

- engine
- dữ liệu gốc
- công thức chung ngoài route BMI
- `dist`
- route ngoài scope
- không thêm lại vòng eo, giới tính, Creff, phân loại BMI, nguy cơ bệnh, BMR/TDEE/calo/khẩu phần

## 13. QA cuối

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass
- `git status --short`: sạch sau commit

## 14. Kết luận

`bmi` đã đủ điều kiện sang `tool-bmi-final-review-v1`.

Scope giữ nguyên cho vòng sau:

- `safe BMI orientation + safety shell only`
