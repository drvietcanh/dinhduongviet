# Tool tinh-nang-luong QA polish v1

## 1. Mốc đầu vào
- Vòng đầu vào: `tool-tinh-nang-luong-safety-patch-v1`
- Commit đầu vào: `9e72931` — `fix: replace energy redirect stub with safe landing page`
- Chưa deploy

## 2. File đã đọc/sửa
- Đã đọc:
  - `reports/tools-core-status-v34.md`
  - `reports/stub-or-draft-triage-v1.md`
  - `reports/tool-tinh-nang-luong-safety-patch-v1.md`
  - `reports/tool-tinh-macro-safety-patch-v1.md`
  - `src/pages/cong-cu/tinh-nang-luong.astro`
  - `src/pages/cong-cu/index.astro`
  - `package.json`
- Đã sửa:
  - `reports/tool-tinh-nang-luong-qa-polish-v1.md`

## 3. Scope sau polish
- `safe draft landing page + safety shell only`

## 4. Chức năng còn lại
- Landing page nháp tự đứng được
- Không có calculator
- Không có form input
- Không có result/reset
- Có nội dung định hướng trung tính
- Có safety shell rõ

## 5. Đã bỏ redirect/meta refresh như thế nào
- Route `/cong-cu/tinh-nang-luong/` trả `200` trực tiếp
- Không còn `meta refresh`
- Không còn redirect sang `/cong-cu/muc-tieu-can-nang/`
- Browser QA xác nhận không tự chuyển route trong fresh session

## 6. Safety/content QA
- Giữ copy trung tính:
  - giới thiệu năng lượng trong dinh dưỡng ở mức định hướng
  - năng lượng thường được biểu thị bằng `kcal`
  - ghi rõ trang đang hoàn thiện / bản nháp định hướng
  - ghi rõ chưa phải công cụ tính nhu cầu năng lượng cá nhân
  - ghi rõ chưa tính `BMR`, `TDEE`, calo mỗi ngày, khẩu phần cá nhân hoặc mục tiêu cân nặng
- Không biến route thành calculator hoàn chỉnh
- Không có wording kiểu:
  - `nhu cầu calo của bạn là`
  - `calo mục tiêu`
  - `nên ăn bao nhiêu calo`
  - `đạt mục tiêu / không đạt`
  - `tốt / xấu`
  - `đủ / thiếu / thừa`
- Các cụm `giảm cân`, `tăng cân`, `ăn bù` chỉ xuất hiện trong ngữ cảnh phủ định của safety shell, không phải khuyến nghị user-facing

## 7. Clinical safety shell
- Route ghi rõ:
  - nội dung chỉ để tham khảo/định hướng
  - không dùng để tự đặt mục tiêu calo mỗi ngày
  - không dùng để tự xây dựng chế độ giảm cân, tăng cân, ăn bù, thực đơn hoặc điều trị
  - người có bệnh nền, thai kỳ, trẻ em, người cao tuổi, rối loạn ăn uống hoặc đang dùng thuốc nên hỏi bác sĩ/chuyên gia dinh dưỡng nếu cần nhu cầu năng lượng cá nhân
  - không tự chỉnh insulin, thuốc hạ đường huyết, lợi tiểu, thuốc tim mạch hoặc chế độ điều trị dựa trên nội dung này

## 8. DOM/XSS QA
- Không có `innerHTML` route-scoped
- Không có user input trên route
- Query/fuzz test với các payload:
  - `<script>alert(1)</script>`
  - `<b>gao</b>`
  - `"><img src=x onerror=alert(1)>`
  - `=HYPERLINK("http://x","x")`
  - `+SUM(1,1)`
  - `@cmd`
  - `-1+2`
- Kết quả:
  - không tạo dialog
  - không render HTML
  - không phá layout
  - không có lỗi console
- Route không có export/copy nên không phát sinh rủi ro CSV/formula injection ở scope này

## 9. Browser/mobile QA
- Preview port: `4321`
- Kiểm fresh session:
  - `/cong-cu/` trả `200`
  - `/cong-cu/tinh-nang-luong/` trả `200`
  - không redirect
  - không meta refresh
  - không tự chuyển sang `/cong-cu/muc-tieu-can-nang/`
  - console sạch
- Desktop:
  - không overflow ngang
  - landing page nháp hiển thị đúng
  - không có form/calculator/result
- Mobile `390 x 844`:
  - không overflow ngang
  - landing page nháp hiển thị đúng
  - safety shell hiển thị rõ
- Query/fuzz:
  - không render HTML
  - không tạo dialog
  - không lỗi console

## 10. Card /cong-cu/
- Giữ trạng thái `Bản nháp`
- Giữ copy trung tính:
  - `Trang định hướng về năng lượng ở mức tham khảo, chưa dùng để tính nhu cầu năng lượng cá nhân.`
- Không gắn `Đã kiểm v1` trong vòng QA polish

## 11. Những gì không sửa
- Không sửa engine
- Không sửa dữ liệu gốc
- Không sửa công thức chung
- Không sửa `dist`
- Không sửa route ngoài scope
- Không xử lý backlog data QA mã `6014`

## 12. QA cuối
- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:tools`
- `git diff --check`
- `git status --short`

## 13. Kết luận
- Route đạt scope `safe draft landing page + safety shell only`
- Không cần vá thêm source ngoài report trong vòng QA polish này
- Đủ điều kiện sang `tool-tinh-nang-luong-final-review-v1`
