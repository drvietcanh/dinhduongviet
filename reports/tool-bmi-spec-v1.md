# BMI Spec v1

## 1. Mốc đầu vào

- Vòng trước: `needs-spec-triage-v1`
- Commit đầu vào: `ac401cb`
- Branch vòng này: `tool-bmi-spec-v1`
- Chưa deploy

## 2. File đã đọc/sửa

Đã đọc:

- `D:\openclaw\apps\dinh-duong-viet\reports\needs-spec-triage-v1.md`
- `D:\openclaw\apps\dinh-duong-viet\reports\post-needs-qa-polish-complete-v1.md`
- `D:\openclaw\apps\dinh-duong-viet\reports\tools-core-status-v28.md`
- `D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\index.astro`
- `D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\bmi.astro`
- `D:\openclaw\apps\dinh-duong-viet\package.json`

Đã sửa:

- `D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\bmi.astro`
- `D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\index.astro`
- `D:\openclaw\apps\dinh-duong-viet\reports\tool-bmi-spec-v1.md`

## 3. Hiện trạng trước spec

Route `/cong-cu/bmi/` đã tồn tại và trước khi hạ scope có các thành phần sau:

- Form nhập `cân nặng`, `chiều cao`, `vòng eo`, `giới tính`
- Tính BMI
- Phân loại kiểu `Gầy`, `Bình thường`, `Thừa cân`, `Béo phì độ I`, `Béo phì độ II`
- Bảng ngưỡng BMI và cột `Nguy cơ bệnh`
- Kết quả `cân nặng lý tưởng (Creff)` và `khoảng cân nặng khoẻ mạnh`
- Đánh giá vòng eo với câu kiểu `béo bụng, tăng nguy cơ chuyển hoá`
- Gợi ý giảm cân/tăng cân và tham chiếu tới tiểu đường, tăng huyết áp, mỡ máu
- Không thấy `localStorage`, `export`, `copy`, `share`, `chart`, `canvas`
- Không thấy `innerHTML` route-scoped, nhưng có nhiều copy user-facing mang màu clinical rõ
- Validation dùng `alert()`

## 4. Rủi ro user-facing

Rủi ro chính trước spec:

- Dễ bị hiểu thành công cụ chẩn đoán hoặc đánh giá nguy cơ bệnh cá nhân
- Có wording mạnh như `béo phì`, `nguy cơ cao`, `cần giảm cân`, `cân nặng lý tưởng`
- Mở rộng sang phạm vi ngoài BMI: vòng eo, nguy cơ chuyển hoá, định hướng giảm cân
- Có bảng ngưỡng và phân loại nhưng chưa source-lock rõ trong vòng này
- Có thể bị hiểu như công cụ đặt mục tiêu điều trị hoặc tư vấn ăn uống

## 5. Scope đề xuất

`safe BMI orientation + safety shell only`

Scope an toàn của route trong vòng này:

- Nhập chiều cao và cân nặng
- Tính BMI theo công thức chuẩn
- Giải thích BMI là chỉ số sàng lọc đơn giản ở mức tham khảo
- Nêu giới hạn của BMI
- Nhắc khi nào nên hỏi bác sĩ hoặc chuyên gia dinh dưỡng

Không nằm trong scope:

- Chẩn đoán béo phì hoặc suy dinh dưỡng
- Đánh giá nguy cơ bệnh cá nhân
- Mục tiêu cân nặng
- BMR, TDEE, calo, khẩu phần
- Điều trị giảm cân hoặc tăng cân
- Chỉnh thuốc, insulin hoặc lợi tiểu

## 6. Quyết định giữ/bỏ

Giữ:

- Form nhập chiều cao
- Form nhập cân nặng
- Công thức tính BMI
- Kết quả BMI làm tròn 1 chữ số thập phân
- Safety shell và giải thích giới hạn

Bỏ trong vòng spec này:

- Input `vòng eo`
- Input `giới tính`
- `cân nặng lý tưởng (Creff)`
- `khoảng cân nặng khoẻ mạnh`
- Bảng phân loại BMI và cột `nguy cơ bệnh`
- Copy gợi ý giảm cân/tăng cân
- `alert()` validation

Không có:

- `localStorage`
- `export`
- `copy`
- `share`
- `chart`
- `canvas`

Ghi chú source/spec:

- Vòng này không hardcode phân loại/ngưỡng BMI theo WHO/Asian/Vietnam trong user-facing output.
- Nếu muốn hiển thị `vùng tham khảo BMI` hoặc phân loại ở vòng sau, cần source-lock riêng trước bằng tài liệu rõ nguồn.

## 7. Wording cần dùng/tránh

Nên dùng:

- `BMI tham khảo`
- `chỉ số sàng lọc đơn giản`
- `không thay thế đánh giá lâm sàng`
- `kết quả cần được hiểu cùng tuổi, giới, vòng eo, thành phần cơ thể và bối cảnh sức khỏe`
- `nên hỏi bác sĩ/chuyên gia dinh dưỡng nếu cần đánh giá cá nhân`

Tránh:

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
- `điều trị béo phì / điều trị suy dinh dưỡng`
- `chỉnh thuốc/insulin/lợi tiểu`

## 8. Logic/input spec

- Công thức: `BMI = cân nặng (kg) / (chiều cao (m))^2`
- Chiều cao nhập theo `cm`
- Cân nặng nhập theo `kg`
- Hỗ trợ dấu phẩy hoặc dấu chấm thập phân trong input, ví dụ `65,5` và `65.5`
- Kết quả BMI làm tròn `1` chữ số thập phân
- Không crash với input:
  - rỗng
  - `0`
  - số âm
  - `NaN`
  - `Infinity`
  - số quá lớn
- Validation trả về thông báo trung tính trong giao diện, không dùng `alert()`
- Không lưu dữ liệu local trong vòng này

## 9. DOM/XSS spec

Yêu cầu:

- Không dùng `innerHTML` với dữ liệu người dùng nhập
- Render bằng API an toàn như `textContent`
- Không render query/input thành HTML thô

Payload cần kiểm ở vòng QA polish:

- `<script>alert(1)</script>`
- `<b>gao</b>`
- `"><img src=x onerror=alert(1)>`
- `=HYPERLINK("http://x","x")`
- `+SUM(1,1)`
- `@cmd`
- `-1+2`

Kỳ vọng:

- Không tạo dialog
- Không render HTML
- Không phá layout
- Không gây lỗi console

## 10. Clinical safety shell

Safety shell cần giữ rõ:

- BMI chỉ là chỉ số tham khảo, không phải chẩn đoán
- BMI có giới hạn ở vận động viên, người cao tuổi, thai kỳ, trẻ em và các bối cảnh thành phần cơ thể đặc biệt
- Người có bệnh nền, thay đổi cân nặng nhanh, thai kỳ, trẻ em, rối loạn ăn uống hoặc cần mục tiêu điều trị nên hỏi bác sĩ/chuyên gia dinh dưỡng
- Không dùng công cụ để tự điều chỉnh thuốc, insulin, lợi tiểu hoặc chế độ điều trị

## 11. /cong-cu/ card

Đã hạ card theo hướng trung tính:

- Tên: `Tính BMI tham khảo`
- Mô tả: `Tính BMI ở mức tham khảo và nhắc các giới hạn của chỉ số này, không thay thế đánh giá lâm sàng.`
- Chưa gắn badge `Đã kiểm v1`

## 12. Những gì không làm trong vòng này

- Không đưa BMI lên stable
- Không cập nhật `tools-core-status`
- Không làm QA polish/final review
- Không sửa engine, dữ liệu gốc, công thức chung hoặc `dist`
- Không mở rộng sang mục tiêu cân nặng, BMR/TDEE, khẩu phần hoặc bệnh nền
- Không source-lock bộ ngưỡng BMI đầy đủ trong vòng này

## 13. QA cuối

- `npm run build`: pass (lần chạy song song đầu timeout do thời gian dài, rerun riêng pass)
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass
- `git status --short`: sạch sau commit

## 14. Kết luận

Đủ điều kiện sang `tool-bmi-qa-polish-v1` với scope đã hạ:

- `safe BMI orientation + safety shell only`

Ghi chú:

- Nếu muốn re-add phân loại hoặc ngưỡng user-facing ở vòng sau, cần source-lock WHO/Asia-Pacific/Vietnam hoặc nguồn nội bộ rõ ràng trước.
- Nếu tiếp tục giữ route ở bản tối thiểu hiện tại, có thể vào QA polish ngay mà không cần source-lock bổ sung.
