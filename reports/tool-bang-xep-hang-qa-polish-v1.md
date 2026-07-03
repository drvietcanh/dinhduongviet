# tool-bang-xep-hang-qa-polish-v1

## 1. Mốc đầu vào

- Status đầu vào: `tools-core-status-v25` commit `bdc7371`.
- Route: `/cong-cu/bang-xep-hang/`.
- Chưa deploy.

## 2. File đã đọc

- `src/pages/cong-cu/bang-xep-hang.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tools-core-status-v25.md`
- `reports/tools-core-status-v24.md`
- `reports/needs-qa-polish-triage-v1.md`
- `package.json`

## 3. Hiện trạng trước polish

- Có các tab/chỉ số để tạo danh sách xếp hạng thực phẩm.
- Không có search/free-text input route-scoped.
- Không có filter bệnh nền, localStorage, export/copy/share, chart/canvas.
- Render danh sách bằng `innerHTML`, gồm tên thực phẩm, nhóm và giá trị dinh dưỡng.
- Wording có hướng "Top", "giàu nhất", "ít nhất", dễ bị hiểu như bảng thực phẩm tốt hơn/xấu hơn.
- Có màu nổi bật cho thứ hạng đầu, dễ bị đọc như nhãn ưu tiên.
- Có đơn vị kcal/g/mg nhưng shell dữ liệu và safety wording chưa đủ rõ.

## 4. File đã sửa

- `src/pages/cong-cu/bang-xep-hang.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-bang-xep-hang-qa-polish-v1.md`

## 5. Scope sau polish

`neutral nutrient ranking/table + data QA shell only`

Route hiện chỉ sắp xếp dữ liệu dinh dưỡng theo từng chỉ số ở mức tham khảo, không kết luận thực phẩm tốt hay xấu và không thay thế tư vấn chuyên môn.

## 6. Những thứ đã hạ rủi ro

- Đổi wording từ "Top/giàu nhất/ít nhất" sang "sắp xếp dữ liệu", "tăng dần/giảm dần".
- Bỏ màu/nhãn top đầu như tín hiệu tốt-xấu.
- Thêm safety/data shell: dữ liệu tham khảo, theo 100g phần ăn được khi có dữ liệu, khác biệt theo giống/cách chế biến/nhãn/nguồn.
- Thêm nhắc người có bệnh nền, đang dùng thuốc, thai kỳ, trẻ em hoặc cần chế độ ăn điều trị hỏi bác sĩ/chuyên gia dinh dưỡng.
- Bỏ `innerHTML` route-scoped cho output; render bằng `createElement`, `textContent`, `append`, `appendChild`, `replaceChildren`.
- Vá lỗi runtime thật sau QA: config client ban đầu bị render literal `${JSON.stringify(config)}`; đã chuyển sang `script define:vars`.
- Thêm CSS bảo vệ mobile cho text, tab và item grid.

## 7. Data/unit QA

- Dữ liệu hiển thị theo 100g phần ăn được khi dữ liệu có sẵn.
- Năng lượng hiển thị `kcal`.
- Đạm, chất xơ, đường, béo bão hòa hiển thị `g`.
- Sắt, canxi, vitamin C hiển thị `mg`.
- Missing data được loại khỏi phép sắp xếp thay vì suy đoán là 0.
- Giá trị 0 được giữ là số liệu thật nếu có trong dữ liệu nguồn.
- Không gọi natri là muối nếu chưa có quy đổi rõ.
- Rounding dùng số nguyên hoặc 1 chữ số thập phân.

## 8. UI safety

- Search route-scoped: không có.
- Filter nhóm/bệnh nền: không có.
- Sort/chọn chỉ số: còn, nhưng chỉ là sắp xếp dữ liệu trung tính.
- Bảng HTML: không có; output là danh sách/card dữ liệu.
- localStorage/export/copy/share/chart/canvas: không có.
- `innerHTML`: không còn trong route output.

## 9. Clinical safety

- Filter bệnh nền: không còn/không có.
- Target bệnh nền hoặc target cá nhân: không có.
- Kết luận thực phẩm phù hợp/an toàn/tốt-xấu cho bệnh: không có.
- Lời khuyên nên ăn/không nên ăn/chỉnh thuốc/insulin/lợi tiểu: không có; cụm "nên ăn hoặc không nên ăn" chỉ xuất hiện trong câu phủ định safety shell.
- Không có đạt/không đạt mục tiêu cá nhân.

## 10. DOM/XSS

- Payload query đã thử: `<script>alert(1)</script>`, `<b>gao</b>`, `"><img src=x onerror=alert(1)>`, `=HYPERLINK("http://x","x")`, `+SUM(1,1)`, `@cmd`, `-1+2`.
- Không tạo dialog.
- Không render HTML từ query.
- Không tạo node `img onerror`.
- Route không dùng query cho output và danh sách vẫn render 15 dòng.
- Render route bằng DOM API an toàn: `createElement`, `textContent`, `append`, `appendChild`, `replaceChildren`.

## 11. Browser/mobile QA

- Preview port: `4324` (`4321-4323` đang bận).
- `/cong-cu/`: 200, không meta refresh, không overflow ngang ở viewport in-app desktop, card đúng mô tả và chưa gắn badge.
- `/cong-cu/bang-xep-hang/`: 200, không meta refresh, render 15 dòng cho tab mặc định sau rebuild.
- Tab đã thử: Đạm, Năng lượng, Chất xơ, Vitamin C, Đường, Béo bão hòa; mỗi tab render dữ liệu và không có `undefined/null/NaN`.
- Console in-app browser còn trả lại một lỗi cũ theo timestamp `2026-07-03T10:31:43.082Z` từ trước khi vá config. Fresh tab URL mới render đúng, không còn literal `${JSON.stringify(config)}` và không có lỗi runtime mới quan sát được sau rebuild.
- Mobile 390 x 844: đã kiểm bằng Chrome headless screenshot smoke test; phát hiện và vá CSS wrap/grid route-scoped. In-app browser API hiện không expose viewport resize, nên phần mobile được ghi là visual smoke + CSS patch, không phải CDP metric độc lập.

## 12. /cong-cu/ card

- Mô tả hiện tại: "Sắp xếp dữ liệu dinh dưỡng thực phẩm ở mức tham khảo, không kết luận thực phẩm tốt hay xấu."
- Badge `Đã kiểm v1`: chưa gắn trong vòng QA polish.

## 13. Wording cấm

- Source grep không còn `innerHTML`, `console.log`, localStorage/export/copy/share/chart/canvas trong route.
- Các từ còn lại và chấp nhận được:
  - "tốt/xấu" chỉ trong câu phủ định: không kết luận thực phẩm tốt hay xấu.
  - "nên ăn/không nên ăn" chỉ trong câu phủ định safety shell.
  - "thiếu" chỉ trong ngữ cảnh missing data.
  - `kcal`, `protein`, `fiber` nằm trong key/config hoặc đơn vị dữ liệu.
  - "muối/natri" chỉ trong ghi chú dữ liệu hoặc các card khác ngoài scope.

## 14. Không sửa ngoài scope

- Không sửa engine.
- Không sửa dữ liệu gốc hàng loạt.
- Không sửa công thức chung.
- Không sửa dist thủ công.
- Không cập nhật stable/status.
- Không xử lý backlog data QA mã 6014 trong vòng này.

## 15. QA cuối

- `npm run build`: pass.
- `npm run qa`: pass.
- `npm run qa:food-data`: pass.
- `npm run qa:data-consistency`: pass.
- `npm run test:tools`: pass.
- `git diff --check`: pass, chỉ có cảnh báo LF sẽ được Git Windows chuyển CRLF khi chạm file.

## 16. Worktree cuối

- Trước commit còn các file intended changes: route, index card, report.
- Sau commit cần kiểm `git status --short` sạch.

## 17. Kết luận

- QA polish pass.
- Đủ điều kiện sang `tool-bang-xep-hang-final-review-v1` nếu commit sạch.
- Stable scope đề xuất: `neutral nutrient ranking/table + data QA shell only`.
- Chưa stable/status update.
- Chưa deploy.
