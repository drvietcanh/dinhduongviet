# Tool Final Review v1: tim-mon-tu-nguyen-lieu

## 1. Mốc đầu vào

- Status v23 commit: `dc7242a`
- QA polish commit: `e1a3b05`
- Branch: `tool-tim-mon-tu-nguyen-lieu-final-review-v1`
- Route: `/cong-cu/tim-mon-tu-nguyen-lieu/`
- Chưa deploy

## 2. File đã đọc

- `src/pages/cong-cu/tim-mon-tu-nguyen-lieu.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-tim-mon-tu-nguyen-lieu-qa-polish-v1.md`
- `reports/tools-core-status-v23.md`

## 3. File đã sửa

- `src/pages/cong-cu/index.astro`
- `reports/tool-tim-mon-tu-nguyen-lieu-final-review-v1.md`

## 4. Scope stable đề xuất

- `neutral ingredient-to-dish idea lookup + safety shell only`

## 5. Chức năng còn lại sau final review

- Checklist chọn nhiều nguyên liệu: còn
- Tab nhóm nguyên liệu: còn
- Gợi ý món ăn: còn
- Link sang `/mon-an/[slug]`: còn
- Free-text input/search text: không có
- localStorage: không có
- export/copy/share: không có
- chart/canvas: không có

## 6. Source audit final

- Checklist chọn nhiều nguyên liệu còn hoạt động.
- Tab nhóm nguyên liệu còn hoạt động.
- Gợi ý món và link chi tiết món còn hoạt động.
- Route không có free-text input hoặc search text user-facing.
- Route không có localStorage, export, copy, share, chart, hoặc canvas.
- `innerHTML` route-scoped: không còn.
- Render dùng DOM-safe APIs:
  - `createElement`
  - `textContent`
  - `appendChild`
  - `replaceChildren`
- Dữ liệu nguyên liệu người dùng chọn không được render bằng HTML thô.

## 7. Safety / content

- Tool chỉ còn là công cụ gợi ý ý tưởng món ăn từ nguyên liệu đã chọn ở mức tham khảo.
- Không gọi là thực đơn cá nhân.
- Không gọi là tư vấn dinh dưỡng điều trị.
- Không dùng wording:
  - `nên nấu`
  - `nên ăn`
  - `không nên ăn`
  - `món tốt nhất`
  - `phù hợp nhất`
  - `lành mạnh nhất`
- Không kết luận món phù hợp/an toàn/tốt cho:
  - tiểu đường
  - tăng huyết áp
  - bệnh thận
  - gout
  - suy tim
  - thai kỳ
  - trẻ em
- Không có filter bệnh nền.
- Không có target bệnh nền.
- Không đánh giá món tốt/xấu/lành mạnh hơn.
- Không có hướng dẫn chỉnh thuốc/insulin/lợi tiểu/bữa ăn.
- `Mức khớp` nếu còn chỉ là mức khớp nguyên liệu, không phải điểm sức khỏe.
- Safety shell giữ đúng hướng:
  - dữ liệu chỉ tham khảo
  - kiểm tra dị ứng, hạn dùng, vệ sinh thực phẩm, nấu chín
  - người có bệnh nền, thai kỳ, trẻ em, đang dùng thuốc hoặc cần chế độ ăn điều trị nên hỏi bác sĩ/chuyên gia dinh dưỡng

## 8. Data / logic QA

- Route không tính khẩu phần.
- Route không tính dinh dưỡng.
- Route không tự bịa năng lượng, macro, hoặc vi chất cho món.
- Không có đơn vị dinh dưỡng user-facing vì route chỉ gợi ý món.
- Không xếp hạng món theo sức khỏe.
- Nếu có số lượng kết quả, chỉ mô tả số gợi ý tìm được.
- Nếu có `mức khớp nguyên liệu`, route không gọi đó là điểm tốt/xấu hay điểm sức khỏe.

## 9. DOM / XSS / fuzz test

Payload đã kiểm bằng query hoặc trạng thái route:

- `<script>alert(1)</script>`
- `<b>gao</b>`
- `"><img src=x onerror=alert(1)>`
- `=HYPERLINK("http://x","x")`
- `+SUM(1,1)`
- `@cmd`
- `-1+2`

Kết quả:

- Không tạo dialog.
- Không render HTML.
- Không phá layout.
- Không lỗi console.
- Không làm hỏng tab, checklist, hoặc vùng kết quả.

## 10. Browser / mobile QA

- Preview port: `4322`
  - `4321` bận, Astro tự chuyển sang `4322`
- `/cong-cu/`: HTTP `200`
- `/cong-cu/tim-mon-tu-nguyen-lieu/`: HTTP `200`
- Redirect: không
- Meta refresh: không
- Console: sạch trong fresh reload/session, không có lỗi mới
- Desktop overflow ngang: không
- Mobile `390 x 844` overflow ngang: không
- Desktop chọn `Gạo tẻ`, `Trứng gà`, `Nước mắm`, `Cà chua`: có gợi ý món, không lỗi
- Mobile chọn `Gạo tẻ`, `Cà chua`: có gợi ý món, không lỗi
- Empty state rõ khi chưa chọn nguyên liệu
- Link `/mon-an/[slug]` được tạo đúng theo slug món đã map

## 11. Card /cong-cu/

- Mô tả hiện tại:
  - `Gợi ý ý tưởng món ăn từ nguyên liệu bạn nhập ở mức tham khảo, không thay thế tư vấn chuyên môn.`
- Badge `Đã kiểm v1`: đã gắn trong final review sau khi route pass

## 12. Không sửa

- Không sửa engine chung
- Không sửa dữ liệu gốc hàng loạt
- Không sửa công thức chung
- Không sửa `dist` thủ công
- Không sửa route ngoài scope

## 13. QA command cuối

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:tools`
- `git diff --check`
- `git status --short`

Kết quả cuối được chốt sau khi rerun ở vòng final review này.

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass về nội dung; có cảnh báo LF/CRLF kiểu Git Windows ở `src/pages/cong-cu/index.astro`
- `git status --short`: chỉ còn 2 file thuộc scope final review trước khi commit

## 14. Ghi chú LF / CRLF

- Nếu có cảnh báo LF/CRLF kiểu Git Windows ở `git diff --check`, ghi nhận riêng ở phần QA cuối; không có thay đổi nội dung ngoài scope vì lý do này.

## 15. Kết luận

- Final review: pass.
- Scope stable đề xuất:
  - `neutral ingredient-to-dish idea lookup + safety shell only`
- Đủ điều kiện sang `tools-core-status-v24` nếu QA cuối pass.
- Chưa cập nhật stable/status trong vòng này.
- Chưa deploy.
