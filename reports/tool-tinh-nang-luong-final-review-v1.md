# Tool tinh-nang-luong final review v1

## 1. Final review pass/fail
- Pass

## 2. Scope stable đề xuất
- `safe draft landing page + safety shell only`

## 3. Route
- `/cong-cu/tinh-nang-luong/`

## 4. QA polish commit
- `c0e0d7c` — `test: add energy draft landing page QA`

## 5. Chức năng còn lại
- Landing page nháp tự đứng được
- Không có calculator
- Không có form input
- Không có result state
- Không có reset
- Có nội dung định hướng trung tính
- Có safety shell rõ

## 6. Đã bỏ redirect/meta refresh và không tự chuyển route
- Route trả `200` trực tiếp
- Không còn redirect
- Không còn `meta refresh`
- Không tự chuyển sang `/cong-cu/muc-tieu-can-nang/`
- Browser QA fresh xác nhận route giữ nguyên URL khi tải lại và khi thêm query fuzz

## 7. Safety/content final QA
- Giữ copy trung tính:
  - giới thiệu năng lượng trong dinh dưỡng ở mức định hướng
  - năng lượng thường được biểu thị bằng `kcal`
  - ghi rõ trang đang hoàn thiện / bản nháp định hướng
  - ghi rõ chưa phải công cụ tính nhu cầu năng lượng cá nhân
  - ghi rõ chưa tính `BMR`, `TDEE`, calo/ngày, khẩu phần cá nhân hoặc mục tiêu cân nặng
- Không có wording user-facing kiểu:
  - `nhu cầu calo của bạn là`
  - `calo mục tiêu`
  - `nên ăn bao nhiêu calo`
  - `ăn ít hơn`
  - `ăn nhiều hơn`
  - `đốt bù`
  - `đạt mục tiêu / không đạt`
  - `tốt / xấu`
  - `đủ / thiếu / thừa`
- Các cụm `giảm cân`, `tăng cân`, `ăn bù` chỉ còn trong ngữ cảnh phủ định của safety shell, không phải khuyến nghị cá nhân

## 8. Clinical safety shell
- Route nói rõ:
  - nội dung chỉ để tham khảo/định hướng
  - không dùng để tự đặt mục tiêu calo mỗi ngày
  - không dùng để tự xây dựng chế độ giảm cân, tăng cân, ăn bù, thực đơn hoặc điều trị
  - người có tiểu đường, bệnh thận, bệnh tim mạch, gout, suy tim, ung thư, thai kỳ, trẻ em, người cao tuổi, rối loạn ăn uống hoặc đang dùng thuốc nên hỏi bác sĩ/chuyên gia dinh dưỡng nếu cần nhu cầu năng lượng cá nhân
  - không tự chỉnh insulin, thuốc hạ đường huyết, lợi tiểu, thuốc tim mạch hoặc chế độ điều trị dựa trên nội dung này

## 9. DOM/XSS final QA
- Không có `innerHTML` route-scoped
- Route không có user input
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

## 10. Browser/mobile QA
- Preview port: `4321`
- Fresh browser QA:
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

## 11. Card `/cong-cu/`
- Copy giữ trung tính:
  - `Trang định hướng về năng lượng ở mức tham khảo, chưa dùng để tính nhu cầu năng lượng cá nhân.`
- Card vẫn giữ trạng thái `Bản nháp`
- Không gắn `Đã kiểm v1`
- Lý do:
  - cấu trúc card hiện chỉ thể hiện một trạng thái rõ ràng cho tool draft
  - giữ `Bản nháp` giúp tránh gây hiểu nhầm đây là calculator năng lượng hoàn chỉnh
- Final review vẫn pass dù card không gắn `Đã kiểm v1`

## 12. Những gì không sửa
- Không sửa engine
- Không sửa dữ liệu gốc
- Không sửa công thức chung
- Không sửa `dist`
- Không sửa route ngoài scope
- Không xử lý backlog data QA mã `6014`
- Không biến route thành calculator

## 13. QA command pass/fail
- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass
- `git status --short`: sạch sau commit

## 14. Ghi chú LF/CRLF hoặc timeout/EPIPE nếu có
- File report mới có cảnh báo Windows `LF -> CRLF` khi stage; không phải blocker
- Không gặp blocker browser mới trong final review
- Không cần fallback Playwright ngoài in-app browser; dùng lại tab đang mở để tránh lỗi attach tab mới

## 15. Kết luận
- Route đạt scope `safe draft landing page + safety shell only`
- Không phát hiện blocker mới trong final review
- Đủ điều kiện sang `tools-core-status-v35`
