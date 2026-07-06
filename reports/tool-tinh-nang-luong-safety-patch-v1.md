## 1. Mốc đầu vào

- Vòng trước: `tools-core-status-v34`
- Commit đầu vào: `3acf25c docs: update tool status with macro draft safety shell v1`
- Chưa deploy

## 2. File đã đọc/sửa

- Đã đọc:
  - `reports/tools-core-status-v34.md`
  - `reports/stub-or-draft-triage-v1.md`
  - `reports/tool-tinh-macro-safety-patch-v1.md`
  - `reports/tool-tinh-macro-final-review-v1.md`
  - `src/pages/cong-cu/tinh-nang-luong.astro`
  - `src/pages/cong-cu/index.astro`
  - `package.json`
- Đã sửa:
  - `src/pages/cong-cu/tinh-nang-luong.astro`
  - `src/pages/cong-cu/index.astro`
  - `reports/tool-tinh-nang-luong-safety-patch-v1.md`

## 3. Hiện trạng trước patch

- Route `/cong-cu/tinh-nang-luong/` là redirect stub bằng `meta refresh`.
- Đích redirect là `/cong-cu/muc-tieu-can-nang/`.
- Đây là mismatch rõ giữa tên tool “tính năng lượng” và route đích “mục tiêu cân nặng”.

## 4. Risk chính

- Navigation mismatch / user-facing mismatch.
- Người dùng vào route `tinh-nang-luong` nhưng bị chuyển sang route không cùng chức năng.
- Không thấy rủi ro XSS trực tiếp ở hiện trạng cũ; rủi ro chính là hiểu sai công cụ.

## 5. Scope sau patch

- `safe draft landing page + safety shell only`

## 6. Chức năng còn lại

- Landing page nháp tự đứng được, trả `200` trực tiếp.
- Không redirect.
- Không `meta refresh`.
- Không calculator.
- Không form input.
- Không result state.
- Không reset.
- Không chart/canvas.
- Không `localStorage/export/copy/share/print`.

## 7. Những phần đã bỏ/không thêm lại

- Bỏ redirect stub sang `/cong-cu/muc-tieu-can-nang/`.
- Bỏ `meta refresh` route-scoped.
- Không thêm bất kỳ logic tính `BMR`, `TDEE`, `calo/ngày`, khẩu phần cá nhân hay mục tiêu cân nặng.
- Không thêm form, calculator, result hay reset.
- Không sửa engine, dữ liệu gốc, công thức chung, dist, backlog `6014`.

## 8. Safety/content

- Route hiện dùng copy trung tính:
  - Trang đang được chuẩn hóa.
  - Nội dung chỉ giới thiệu khái niệm năng lượng trong dinh dưỡng ở mức tham khảo.
  - Chưa phải công cụ tính nhu cầu năng lượng cá nhân.
- Có giải thích ngắn:
  - Năng lượng trong dinh dưỡng thường được biểu thị bằng `kcal`.
  - Nhu cầu năng lượng thực tế phụ thuộc tuổi, giới, cân nặng, chiều cao, mức vận động, bệnh lý, mục tiêu chăm sóc và bối cảnh sức khỏe.
  - Route chưa tính `BMR`, `TDEE`, `calo/ngày`, khẩu phần cá nhân hoặc mục tiêu cân nặng.
- Tránh wording dạng:
  - `nhu cầu calo của bạn là`
  - `calo mục tiêu`
  - `BMR của bạn`
  - `TDEE của bạn`
  - `nên ăn bao nhiêu calo`
  - `giảm cân`, `tăng cân`, `ăn bù`, `đốt bù`
  - `đạt mục tiêu`, `không đạt`, `tốt/xấu`
  - `đủ/thiếu/thừa`
  - `phù hợp/an toàn cho người bệnh`
  - `chỉnh insulin/thuốc/lợi tiểu`

## 9. Clinical safety shell

- Route nói rõ:
  - Nội dung chỉ để tham khảo và định hướng.
  - Không dùng để tự đặt mục tiêu calo mỗi ngày.
  - Không dùng để tự xây dựng chế độ giảm cân, tăng cân, ăn bù, thực đơn hoặc điều trị.
  - Người có tiểu đường, bệnh thận, bệnh tim mạch, gout, suy tim, ung thư, thai kỳ, trẻ em, người cao tuổi, rối loạn ăn uống hoặc đang dùng thuốc nên hỏi bác sĩ hoặc chuyên gia dinh dưỡng nếu cần nhu cầu năng lượng cá nhân.
  - Không tự chỉnh insulin, thuốc hạ đường huyết, lợi tiểu, thuốc tim mạch hoặc chế độ điều trị dựa trên nội dung này.

## 10. DOM/XSS

- Không có `innerHTML` route-scoped.
- Không có user input route-scoped.
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
  - `/cong-cu/tinh-nang-luong/` trả `200`
  - Không redirect
  - Không `meta refresh`
- Kiểm browser:
  - Route không tự chuyển sang `/cong-cu/muc-tieu-can-nang/`
  - Desktop không overflow ngang
  - Mobile `390 x 844` không overflow ngang
  - Landing page nháp hiển thị đúng
  - Không có form/calculator/result/reset route-scoped
  - Safety shell hiển thị rõ
  - Console sạch trong fresh session
  - Query/fuzz không render HTML, không tạo dialog

## 12. Card `/cong-cu/`

- Card `Tính năng lượng` giữ trạng thái nháp.
- Không gắn badge `Đã kiểm v1`.
- Mô tả card đã chỉnh về trung tính:
  - `Trang định hướng về năng lượng ở mức tham khảo, chưa dùng để tính nhu cầu năng lượng cá nhân.`

## 13. Những gì không sửa

- Không sửa engine
- Không sửa dữ liệu gốc
- Không sửa công thức chung
- Không sửa dist thủ công
- Không sửa route ngoài scope
- Không xử lý backlog data QA mã `6014`
- Không deploy

## 14. QA cuối

- `npm run build` pass
- `npm run qa` pass
- `npm run qa:food-data` pass
- `npm run qa:data-consistency` pass
- `npm run test:tools` pass
- `git diff --check` pass
- `git status --short` cuối:
  - `M src/pages/cong-cu/index.astro`
  - `M src/pages/cong-cu/tinh-nang-luong.astro`
  - `?? reports/tool-tinh-nang-luong-safety-patch-v1.md`

## 15. Kết luận

- Vòng patch này đạt mục tiêu: thay redirect stub bằng landing page nháp an toàn, tự đứng được, không redirect, không `meta refresh`.
- Route đã đủ điều kiện để sang vòng `tool-tinh-nang-luong-qa-polish-v1`.
