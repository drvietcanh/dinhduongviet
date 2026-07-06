## 1. Final review

- `PASS`

## 2. Scope stable đề xuất

- `safe draft landing page + safety shell only`

## 3. Route

- `/cong-cu/tinh-macro/`

## 4. QA polish commit

- `5f6f57c test: add macro draft landing page QA`

## 5. Chức năng còn lại

- Landing page nháp
- Không calculator
- Không form input
- Không result state
- Không reset
- Không chart/canvas
- Không localStorage / export / copy / share / print

## 6. Đã bỏ redirect/meta refresh và không tự chuyển route

- Route trả `200` trực tiếp.
- Không redirect.
- Không `meta refresh`.
- Không tự chuyển sang `/cong-cu/muc-tieu-can-nang/`.
- Route hiện tự đứng bằng nội dung draft landing page + safety shell.

## 7. Safety/content final QA

- Nội dung giữ trung tính:
  - Giới thiệu macro ở mức định hướng
  - Nói macro thường gồm carbohydrate, protein và chất béo
  - Ghi rõ trang đang hoàn thiện / bản nháp định hướng
  - Ghi rõ chưa phải công cụ tính khẩu phần cá nhân
  - Ghi rõ chưa đưa ra tỉ lệ macro, gram/ngày hoặc mục tiêu cá nhân
  - Nhắc macro thực tế phụ thuộc khẩu phần, mục tiêu, mức vận động, bệnh nền và bối cảnh sức khỏe
- Không có wording user-facing bị cấm như:
  - `nên ăn bao nhiêu protein/carb/fat`
  - `tỉ lệ macro chuẩn`
  - `tỉ lệ macro lý tưởng`
  - `macro phù hợp cho bạn`
  - `giảm cân`, `tăng cân`, `tăng cơ`, `đốt mỡ`, `ăn bù`
  - `đạt mục tiêu`, `không đạt`, `tốt/xấu`
  - `đủ/thiếu/thừa`
  - `phù hợp/an toàn cho người bệnh`
  - `chỉnh insulin/thuốc/lợi tiểu`

## 8. Clinical safety shell

- Route nói rõ:
  - Nội dung chỉ để tham khảo/định hướng.
  - Không dùng để tự đặt mục tiêu carbohydrate/protein/fat.
  - Không dùng để tự xây dựng chế độ giảm cân, tăng cân, tăng cơ hoặc điều trị.
  - Người có tiểu đường, bệnh thận, gout, bệnh tim mạch, thai kỳ, trẻ em, người cao tuổi, rối loạn ăn uống, ung thư hoặc đang dùng thuốc nên hỏi bác sĩ/chuyên gia dinh dưỡng nếu cần khẩu phần cá nhân.
  - Không tự chỉnh insulin, thuốc hạ đường huyết, lợi tiểu hoặc chế độ điều trị dựa trên nội dung này.

## 9. DOM/XSS final QA

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

## 10. Browser/mobile QA

- Preview port: `4321`
- `/cong-cu/` trả `200`
- `/cong-cu/tinh-macro/` trả `200`
- Không redirect
- Không meta refresh
- Không tự chuyển sang `/cong-cu/muc-tieu-can-nang/`
- Console sạch trong fresh reload/session
- Desktop không overflow ngang
- Mobile viewport `390 x 844` không overflow ngang
- Landing page nháp hiển thị đúng
- Không có form/calculator/result
- Safety shell hiển thị rõ
- Query/fuzz không render HTML, không tạo dialog

## 11. Card `/cong-cu/`

- Copy card giữ trung tính:
  - `Trang định hướng về macro ở mức tham khảo, chưa dùng để tính khẩu phần cá nhân.`
- Card vẫn giữ trạng thái `Bản nháp`.
- Không gắn `Đã kiểm v1`.
- Lý do: cấu trúc card hiện chỉ có một trạng thái hiển thị rõ; giữ `Bản nháp` giúp tránh hiểu nhầm đây là calculator macro hoàn chỉnh dù final review route đã pass.

## 12. Những gì không sửa

- Không sửa engine
- Không sửa dữ liệu gốc
- Không sửa công thức chung
- Không sửa dist thủ công
- Không sửa route ngoài scope
- Không xử lý `tinh-nang-luong`
- Không xử lý backlog data QA mã `6014`
- Không deploy

## 13. QA command

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass
- `git status --short` trước commit:
  - `?? reports/tool-tinh-macro-final-review-v1.md`

## 14. Ghi chú LF/CRLF hoặc timeout/EPIPE

- Không gặp `EPIPE`.
- Không cần rerun vì timeout ở vòng này; `npm run build` pass trong một lần chạy với timeout đủ dài.
- Nếu Git cảnh báo LF/CRLF ở commit/report thì chỉ là warning dòng kết thúc, không phải blocker nội dung.

## 15. Kết luận

- Route `tinh-macro` đủ điều kiện sang `tools-core-status-v34` với scope:
  - `safe draft landing page + safety shell only`
- Đây vẫn là route draft/orientation, không nên được trình bày như calculator hoàn chỉnh khi lên status round sau.
