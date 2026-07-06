## 1. Mốc đầu vào

- Vòng trước: `tool-tinh-macro-safety-patch-v1`
- Commit đầu vào: `9bc96d1 fix: replace macro redirect stub with safe landing page`
- Chưa deploy

## 2. File đã đọc/sửa

- Đã đọc:
  - `reports/stub-or-draft-triage-v1.md`
  - `reports/tool-tinh-macro-safety-patch-v1.md`
  - `reports/post-needs-spec-complete-v1.md`
  - `reports/tools-core-status-v33.md`
  - `src/pages/cong-cu/tinh-macro.astro`
  - `src/pages/cong-cu/index.astro`
  - `package.json`
- Đã sửa:
  - `reports/tool-tinh-macro-qa-polish-v1.md`

## 3. Scope sau polish

- `safe draft landing page + safety shell only`

## 4. Chức năng còn lại

- Landing page nháp, tự đứng được
- Không redirect
- Không meta refresh
- Không calculator
- Không form input
- Không result state
- Không reset
- Không chart/canvas
- Không localStorage / export / copy / share / print

## 5. Đã bỏ redirect/meta refresh như thế nào

- Route `/cong-cu/tinh-macro/` hiện trả `200` trực tiếp.
- Không còn `meta refresh`.
- Không còn tự chuyển sang `/cong-cu/muc-tieu-can-nang/`.
- Thay cho redirect stub là một landing page nháp có nội dung định hướng và safety shell.

## 6. Safety/content QA

- Nội dung route giữ hướng trung tính:
  - Giới thiệu macro ở mức định hướng
  - Nêu macro thường gồm carbohydrate, protein và chất béo
  - Ghi rõ trang đang hoàn thiện / bản nháp định hướng
  - Ghi rõ chưa phải công cụ tính khẩu phần cá nhân
  - Ghi rõ chưa đưa ra tỉ lệ macro, gram/ngày hoặc mục tiêu cá nhân
  - Nhắc macro thực tế phụ thuộc khẩu phần, mục tiêu, mức vận động, bệnh nền và bối cảnh sức khỏe
- Không thấy wording user-facing bị cấm như:
  - `nên ăn bao nhiêu protein/carb/fat`
  - `tỉ lệ macro chuẩn`
  - `tỉ lệ macro lý tưởng`
  - `macro phù hợp cho bạn`
  - `đạt mục tiêu`, `không đạt`, `tốt/xấu`
  - `đủ/thiếu/thừa`
  - `phù hợp cho tiểu đường/bệnh thận/gout/suy tim`
  - `an toàn cho người bệnh`
  - `chỉnh insulin/thuốc/lợi tiểu`

## 7. Clinical safety shell

- Route giữ safety shell rõ:
  - Nội dung chỉ để tham khảo/định hướng.
  - Không dùng để tự đặt mục tiêu carbohydrate/protein/fat.
  - Không dùng để tự xây dựng chế độ giảm cân, tăng cân, tăng cơ hoặc điều trị.
  - Người có tiểu đường, bệnh thận, gout, bệnh tim mạch, thai kỳ, trẻ em, người cao tuổi, rối loạn ăn uống, ung thư hoặc đang dùng thuốc nên hỏi bác sĩ/chuyên gia dinh dưỡng nếu cần khẩu phần cá nhân.
  - Không tự chỉnh insulin, thuốc hạ đường huyết, lợi tiểu hoặc chế độ điều trị dựa trên nội dung này.

## 8. DOM/XSS QA

- Không dùng `innerHTML` route-scoped.
- Route không có user input.
- Query/fuzz với các payload sau không render HTML, không tạo dialog, không phá layout, không sinh lỗi console:
  - `<script>alert(1)</script>`
  - `<b>gao</b>`
  - `"><img src=x onerror=alert(1)>`
  - `=HYPERLINK("http://x","x")`
  - `+SUM(1,1)`
  - `@cmd`
  - `-1+2`
- Route không có export/copy nên không có nguy cơ CSV/formula injection ở scope hiện tại.

## 9. Browser/mobile QA

- Preview port: `4321`
- HTTP check:
  - `/cong-cu/` trả `200`
  - `/cong-cu/tinh-macro/` trả `200`
  - Không redirect
  - Không meta refresh
  - Không tự chuyển sang `/cong-cu/muc-tieu-can-nang/`
- Browser check:
  - Console sạch trong fresh session
  - Desktop không overflow ngang
  - Mobile viewport `390 x 844` không overflow ngang
  - Landing page nháp hiển thị đúng
  - Không có form/calculator/result route-scoped
  - Safety shell hiển thị rõ
  - Query/fuzz không render HTML, không tạo dialog

## 10. Card `/cong-cu/`

- Card `Tính macro` giữ trạng thái `Bản nháp`.
- Không gắn badge `Đã kiểm v1`.
- Copy card vẫn trung tính:
  - `Trang định hướng về macro ở mức tham khảo, chưa dùng để tính khẩu phần cá nhân.`
- Không thấy copy bị kéo sang hướng calculator hoàn chỉnh, giảm cân, tăng cân, tăng cơ, macro lý tưởng hay bệnh nền.

## 11. Những gì không sửa

- Không sửa engine
- Không sửa dữ liệu gốc
- Không sửa công thức chung
- Không sửa dist thủ công
- Không sửa route ngoài scope
- Không xử lý `tinh-nang-luong`
- Không xử lý backlog data QA mã `6014`
- Không deploy

## 12. QA cuối

- `npm run build`: pass
  - Có 1 lần timeout ở lớp gọi tool, đã rerun đơn lẻ với timeout dài hơn và pass thật
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass
- `git status --short` trước commit:
  - `?? reports/tool-tinh-macro-qa-polish-v1.md`

## 13. Kết luận

- Route `tinh-macro` giữ đúng scope `safe draft landing page + safety shell only`.
- Không phát hiện blocker mới ở source, browser, mobile hay DOM/XSS.
- Đủ điều kiện sang `tool-tinh-macro-final-review-v1`.
