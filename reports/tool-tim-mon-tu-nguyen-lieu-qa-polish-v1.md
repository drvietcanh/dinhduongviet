# Tool QA Polish v1: tim-mon-tu-nguyen-lieu

## 1. Mốc đầu vào

- Status v23 commit: `dc7242a`
- Branch: `tool-tim-mon-tu-nguyen-lieu-qa-polish-v1`
- Route: `/cong-cu/tim-mon-tu-nguyen-lieu/`
- Chưa deploy

## 2. File đã đọc

- `src/pages/cong-cu/tim-mon-tu-nguyen-lieu.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tools-core-status-v23.md`
- `reports/tools-core-status-v22.md`
- `reports/needs-qa-polish-triage-v1.md`
- `package.json`

## 3. Hiện trạng trước polish

- Không có free-text input nguyên liệu; người dùng chọn nguyên liệu bằng checklist chip theo nhóm.
- Không có search text hoặc filter không dấu/có dấu; chỉ có tab nhóm nguyên liệu.
- Có thể chọn nhiều nguyên liệu cùng lúc.
- Có gợi ý món ăn và dẫn link sang `/mon-an/[slug]`.
- Không có filter bệnh nền, ăn kiêng, giảm cân, tiểu đường, tăng huyết áp, bệnh thận, gout.
- Không có localStorage.
- Không có export/copy/share.
- Không có chart/canvas.
- Có `innerHTML` ở render danh sách nguyên liệu, empty state và render kết quả món.
- Copy đầu trang và kết quả dùng wording dễ bị hiểu theo hướng khuyên chọn:
  - `xem gợi ý món ăn Việt Nam phù hợp`
  - `Tìm thấy X món phù hợp`
  - `Bạn đã có hầu hết nguyên liệu!`
- Chưa có safety shell rõ về dị ứng, hạn dùng, vệ sinh thực phẩm và chế biến chín.
- Không có dữ liệu dinh dưỡng, không tính khẩu phần/năng lượng.
- Không có hướng dẫn nấu ăn chi tiết ngay trên route; chỉ gợi ý ý tưởng món và link sang trang món ăn.

## 4. File đã sửa

- `src/pages/cong-cu/tim-mon-tu-nguyen-lieu.astro`
- `src/pages/cong-cu/index.astro`

## 5. Scope sau polish

- `neutral ingredient-to-dish idea lookup + safety shell only`

## 6. Những thứ đã hạ rủi ro

- Đổi lead copy sang hướng:
  - `gợi ý ý tưởng món ăn ở mức tham khảo`
  - `dựa trên độ khớp nguyên liệu`
- Thêm safety shell nêu rõ:
  - công cụ không dùng để kết luận theo bệnh nền hoặc tư vấn điều trị
  - kiểm tra dị ứng, hạn dùng, vệ sinh thực phẩm, chế biến chín
  - người có bệnh nền, đang dùng thuốc, thai kỳ, trẻ em hoặc cần chế độ ăn điều trị nên hỏi bác sĩ/chuyên gia dinh dưỡng
- Đổi wording kết quả:
  - `Tìm thấy X gợi ý món`
  - `Khớp với nguyên liệu đã chọn`
  - `Mức khớp nguyên liệu cao trong tập nguyên liệu của món này`
- Bỏ toàn bộ `innerHTML` route-scoped, thay bằng render DOM-safe.
- Bổ sung nhánh `fetch(...).catch(...)` để không văng console/error state khi dữ liệu nguyên liệu không tải được.
- Cập nhật card `/cong-cu/` sang mô tả trung tính hơn.

## 7. Chức năng còn lại sau polish

- Input/checklist nguyên liệu: còn
- Chọn nhiều nguyên liệu: còn
- Tab nhóm nguyên liệu: còn
- Gợi ý món ăn: còn
- Link sang chi tiết món: còn
- localStorage: không có
- export/copy/share: không có
- chart/canvas: không có
- free-text input: không có
- search text có dấu/không dấu: không có

## 8. Safety / content

- Route chỉ còn là công cụ gợi ý ý tưởng món ăn từ nguyên liệu đã chọn ở mức tham khảo.
- Không còn wording khuyên:
  - `món phù hợp`
  - `món tốt nhất`
  - `phù hợp nhất`
  - `lành mạnh nhất`
  - `nên nấu`
  - `nên ăn`
  - `không nên ăn`
- Không kết luận món phù hợp/an toàn cho tiểu đường, tăng huyết áp, bệnh thận, gout, suy tim, thai kỳ, trẻ em.
- Không thay thế tư vấn bác sĩ/chuyên gia dinh dưỡng.
- Không có hướng dẫn chỉnh thuốc/insulin/lợi tiểu/bữa ăn.

## 9. Clinical safety

- Filter bệnh nền: không có
- Target bệnh nền: không có
- Kết luận món an toàn/phù hợp cho bệnh: không có
- Hướng dẫn điều trị/chỉnh thuốc: không có
- Wording bệnh nền chỉ còn trong safety shell.

## 10. DOM / XSS

- `innerHTML`: không còn trong route này
- Render dùng:
  - `createElement`
  - `textContent`
  - `appendChild`
  - `replaceChildren`
- Route không có free-text input.
- Query payload đã kiểm:
  - `<script>alert(1)</script>`
  - `<b>gao</b>`
- Kết quả:
  - không tạo dialog
  - không render HTML
  - không sinh `script`, `img`, `b` trong vùng kết quả
  - không phá layout
  - không có lỗi console
- Copy/export CSV/formula injection: không áp dụng vì route không có copy/export.

## 11. Data / logic QA

- Route không hiển thị dinh dưỡng, không tính khẩu phần, không tính kcal/macro.
- Kết quả chỉ là gợi ý món dựa trên nguyên liệu khớp.
- Điểm/score còn lại chỉ được diễn đạt là:
  - số nguyên liệu khớp
  - mức khớp nguyên liệu
- Không dùng score này như điểm sức khỏe hoặc xếp hạng tốt/xấu.
- Empty state đầu vào rõ:
  - `Chọn ít nhất 1 nguyên liệu để xem gợi ý ý tưởng món ăn.`
- Trạng thái `không tìm thấy` được giữ ở code path và wording trung tính, dù current UI checklist chỉ cung cấp nguyên liệu có map nên khó đi tới state này bằng thao tác bình thường.
- Search có dấu/không dấu: không áp dụng vì route không có search text.
- Backlog data QA mã `6014`: không thấy ảnh hưởng trực tiếp route này trong vòng QA polish.

## 12. Browser / mobile QA

- Preview port: `4322`
  - `4321` đã bận nên Astro tự chuyển sang `4322`
- `/cong-cu/`: pass, HTTP 200
- `/cong-cu/tim-mon-tu-nguyen-lieu/`: pass, HTTP 200
- Redirect: không
- Meta refresh: không
- Console: sạch, không có lỗi mới
- Desktop overflow ngang: không
- Mobile `390 x 844` overflow ngang: không
- Mobile tab chips: wrap đúng
- Mobile chọn nguyên liệu: pass sau click `force` trên chip label
- Kết quả gợi ý trên mobile: hiển thị đúng, không overflow toàn trang
- Empty state đầu vào: rõ
- Card `/cong-cu/`: mô tả đúng, chưa gắn `Đã kiểm v1`

## 13. Kịch bản browser đã thử

- Desktop:
  - vào route
  - kiểm empty state + safety shell
  - chọn `Gạo tẻ`, `Trứng gà`, `Nước mắm`, `Cà chua`
  - route trả `20` gợi ý món
- Mobile `390 x 844`:
  - reload route
  - chọn `Gạo tẻ`, `Cà chua`
  - route trả `12` gợi ý món
  - không overflow ngang
- Query payload:
  - `?q=<script>alert(1)</script>`
  - `?q=<b>gao</b>`
  - route bỏ qua query, không render HTML, không tạo dialog

## 14. /cong-cu/ card

- Mô tả hiện tại:
  - `Gợi ý ý tưởng món ăn từ nguyên liệu bạn nhập ở mức tham khảo, không thay thế tư vấn chuyên môn.`
- Badge `Đã kiểm v1`: chưa gắn trong vòng QA polish

## 15. Không sửa

- Không sửa engine chung
- Không sửa dữ liệu gốc hàng loạt
- Không sửa công thức chung
- Không sửa `dist` thủ công
- Không sửa route ngoài scope
- Không xử lý backlog data QA mã `6014`

## 16. QA cuối

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass

## 17. git diff --check

- Pass về nội dung
- Có cảnh báo LF/CRLF kiểu Git Windows ở:
  - `src/pages/cong-cu/index.astro`
  - `src/pages/cong-cu/tim-mon-tu-nguyen-lieu.astro`

## 18. Worktree cuối

- Chưa sạch trước khi commit QA polish

## 19. Kết luận

- Route đã được hạ về `neutral ingredient-to-dish idea lookup + safety shell only`
- Nếu bộ QA cuối cùng pass, đủ điều kiện sang `tool-tim-mon-tu-nguyen-lieu-final-review-v1`
- Chưa cập nhật stable/status trong vòng này
- Chưa deploy
