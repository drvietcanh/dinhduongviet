## 1. Mốc đầu vào

- Vòng trước: `stub-or-draft-triage-v1`
- Commit đầu vào: `341b6d5 docs: triage stub or draft tools`
- Chưa deploy

## 2. File đã đọc/sửa

- Đã đọc:
  - `reports/stub-or-draft-triage-v1.md`
  - `reports/post-needs-spec-complete-v1.md`
  - `reports/tools-core-status-v33.md`
  - `src/pages/cong-cu/tinh-macro.astro`
  - `src/pages/cong-cu/index.astro`
  - `package.json`
- Đã sửa:
  - `src/pages/cong-cu/tinh-macro.astro`
  - `src/pages/cong-cu/index.astro`
  - `reports/tool-tinh-macro-safety-patch-v1.md`

## 3. Hiện trạng trước patch

- Route `/cong-cu/tinh-macro/` là redirect stub bằng meta refresh.
- Đích redirect là `/cong-cu/muc-tieu-can-nang/`.
- Đây là mismatch rõ giữa tên tool “tính macro” và route đích “mục tiêu cân nặng”.

## 4. Risk chính

- Navigation mismatch / user-facing mismatch.
- Người dùng vào route `tinh-macro` nhưng bị chuyển sang route không cùng chức năng.
- Không thấy rủi ro XSS trực tiếp ở hiện trạng cũ; rủi ro chính là hiểu sai công cụ.

## 5. Scope sau patch

- `safe draft landing page + safety shell only`

## 6. Chức năng còn lại

- Landing page nháp tự đứng được, trả `200` trực tiếp.
- Không redirect.
- Không meta refresh.
- Không calculator.
- Không form input.
- Không result state.
- Không chart/canvas.
- Không localStorage/export/copy/share/print.

## 7. Những phần đã bỏ/không thêm lại

- Bỏ redirect stub sang `/cong-cu/muc-tieu-can-nang/`.
- Bỏ meta refresh route-scoped.
- Không thêm bất kỳ logic tính macro, gram/ngày, tỉ lệ macro hay mục tiêu cá nhân.
- Không đụng `tinh-nang-luong`.
- Không sửa engine, dữ liệu gốc, công thức chung, dist, backlog 6014.

## 8. Safety/content

- Route hiện dùng copy trung tính:
  - Trang đang được chuẩn hóa.
  - Nội dung chỉ giới thiệu macro ở mức tham khảo.
  - Chưa phải công cụ tính khẩu phần cá nhân.
- Có giải thích ngắn:
  - Macro thường nói đến carbohydrate, protein và chất béo.
  - Tỉ lệ macro thực tế phụ thuộc mục tiêu, bệnh nền, mức vận động, khẩu phần hiện tại và bối cảnh sức khỏe.
  - Route chưa đưa ra tỉ lệ macro, lượng gram mỗi ngày hoặc mục tiêu cá nhân.
- Tránh wording dạng:
  - tỉ lệ macro chuẩn
  - macro lý tưởng
  - nên ăn bao nhiêu protein/carb/fat
  - giảm cân / tăng cân / tăng cơ / đốt mỡ
  - phù hợp cho tiểu đường / bệnh thận / gout

## 9. Clinical safety shell

- Route nói rõ:
  - Nội dung chỉ để tham khảo và định hướng.
  - Không dùng để tự đặt mục tiêu carbohydrate, protein hoặc chất béo.
  - Không dùng để tự xây dựng chế độ giảm cân, tăng cân, tăng cơ hoặc điều trị.
  - Người có tiểu đường, bệnh thận, gout, bệnh tim mạch, thai kỳ, trẻ em, người cao tuổi, rối loạn ăn uống, ung thư hoặc đang dùng thuốc nên hỏi bác sĩ hoặc chuyên gia dinh dưỡng nếu cần khẩu phần cá nhân.
  - Không tự chỉnh insulin, thuốc hạ đường huyết, lợi tiểu hoặc chế độ điều trị dựa trên nội dung này.

## 10. DOM/XSS

- Không còn meta refresh.
- Không có user input route-scoped.
- Không dùng `innerHTML` route-scoped.
- Query/fuzz với các payload sau không render HTML, không tạo dialog, không phá layout, không sinh lỗi console:
  - `<script>alert(1)</script>`
  - `<b>gao</b>`
  - `"><img src=x onerror=alert(1)>`
  - `=HYPERLINK("http://x","x")`
  - `+SUM(1,1)`
  - `@cmd`
  - `-1+2`

## 11. Browser/mobile QA

- Preview port: `4321`
- Kiểm HTTP:
  - `/cong-cu/` trả `200`
  - `/cong-cu/tinh-macro/` trả `200`
  - Không redirect
  - Không meta refresh
- Kiểm browser:
  - Route không tự chuyển sang `/cong-cu/muc-tieu-can-nang/`
  - Desktop không overflow ngang
  - Mobile `390 x 844` không overflow ngang
  - Landing page nháp hiển thị đúng
  - Không có form/calculator/result route-scoped
  - Safety shell hiển thị rõ
  - Console sạch trong fresh session
  - Query/fuzz không render HTML, không tạo dialog

## 12. Card `/cong-cu/`

- Card `Tính macro` giữ trạng thái nháp.
- Không gắn badge `Đã kiểm v1`.
- Mô tả card đã chỉnh về trung tính:
  - `Trang định hướng về macro ở mức tham khảo, chưa dùng để tính khẩu phần cá nhân.`

## 13. Những gì không sửa

- Không sửa engine
- Không sửa dữ liệu gốc
- Không sửa công thức chung
- Không sửa dist thủ công
- Không sửa route ngoài scope
- Không xử lý backlog data QA mã `6014`
- Không xử lý `tinh-nang-luong`
- Không deploy

## 14. QA cuối

- `npm run build` pass
- `npm run qa` pass
- `npm run qa:food-data` pass
- `npm run qa:data-consistency` pass
- `npm run test:tools` pass
- `git diff --check` pass về nội dung; có warning LF/CRLF ở:
  - `src/pages/cong-cu/index.astro`
  - `src/pages/cong-cu/tinh-macro.astro`
- `git status --short` cuối:
  - `M src/pages/cong-cu/index.astro`
  - `M src/pages/cong-cu/tinh-macro.astro`
  - `?? reports/tool-tinh-macro-safety-patch-v1.md`

## 15. Kết luận

- Vòng patch này đạt mục tiêu: thay redirect stub bằng landing page nháp an toàn, tự đứng được, không redirect, không meta refresh.
- Route đã đủ điều kiện để sang vòng `tool-tinh-macro-qa-polish-v1`.
