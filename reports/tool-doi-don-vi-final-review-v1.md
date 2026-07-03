# Tool `doi-don-vi` Final Review v1

Date: 2026-07-03

## 1. Final review

- Result: pass
- Route: `/cong-cu/doi-don-vi/`
- QA polish commit: `b18c0cb test: add unit converter page QA`
- Stable scope đề xuất: `neutral unit conversion helper + data QA shell only`
- Chưa deploy

## 2. File đã đọc

- `src/pages/cong-cu/doi-don-vi.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-doi-don-vi-qa-polish-v1.md`
- `reports/tools-core-status-v24.md`

## 3. File đã sửa

- `src/pages/cong-cu/index.astro`

Thay đổi duy nhất trong vòng final review:

- Gắn badge `Đã kiểm v1` cho card `/cong-cu/doi-don-vi` sau khi final review pass.
- Giữ nguyên mô tả an toàn của card.

## 4. Chức năng còn lại

- Còn input/select quy đổi.
- Còn các tab quy đổi:
  - khối lượng
  - năng lượng
  - thể tích
  - chiều dài
  - nhiệt độ
- Không có route-scoped search/free-text search.
- Không có localStorage.
- Không có export/copy/share.
- Không có chart/canvas.
- Không có filter bệnh nền, target bệnh nền hoặc target cá nhân.

Ghi chú: browser check có thấy `input[type="search"]` ở page tổng thể, nhưng đây là global/site search từ layout, không phải chức năng route-scoped của tool `doi-don-vi`.

## 5. DOM/render

- Không còn `innerHTML` route-scoped.
- Output kết quả được render bằng `textContent`.
- Không render dữ liệu người dùng nhập bằng HTML thô.
- Không có export/copy nên không phát sinh bề mặt CSV/formula injection ở route này.

## 6. Logic/data QA

- Quy đổi khối lượng-khối lượng hoạt động:
  - `100 g -> kg`: `0.100 kg`
  - `100 g -> mg`: `100000.0 mg`
- Quy đổi năng lượng hoạt động:
  - `100 kcal -> kJ`: `418.4 kJ`
- Quy đổi thể tích-thể tích hoạt động:
  - `1,5 cup -> ml`: `360.0 ml`
  - `1.5 cup -> ml`: `360.0 ml`
- Dấu phẩy thập phân kiểu Việt Nam được hỗ trợ trong phạm vi đã kiểm.
- Không mặc định `1 ml = 1 g` cho mọi thực phẩm.
- Ghi chú thể tích/dụng cụ nói rõ là quy đổi tham khảo theo giả định chuẩn và không áp dụng như nhau cho mọi thực phẩm.
- Không tính khẩu phần cá nhân.
- Không tính nhu cầu dinh dưỡng cá nhân.
- Không tự bịa dữ liệu thiếu.
- Input sai định dạng hoặc không dùng được hiển thị trạng thái trung tính `—`, không crash.
- `0` được xử lý như giá trị số hợp lệ trong logic; missing/error state dùng `—`.

Validation đã kiểm:

- input blank-like: `—`, hint nhập số hợp lệ
- input chữ: `—`, hint nhập số hợp lệ
- số âm ở bộ không cho âm: `—`, hint nhập số không âm
- `Infinity`: `—`, hint nhập số hợp lệ
- số rất lớn: `—`, hint giá trị quá lớn

## 7. Safety/content

Route thể hiện đúng:

- Chỉ là công cụ quy đổi đơn vị tham khảo.
- Không gọi kết quả là chính xác tuyệt đối.
- Không kết luận lượng ăn phù hợp/an toàn.
- Không dùng wording `nên ăn lượng này`.
- Không có `đạt/không đạt mục tiêu`, `thiếu/thừa`, `tốt/xấu`.
- Không kết luận phù hợp/an toàn cho tiểu đường, tăng huyết áp, bệnh thận, gout, suy tim.
- Không hướng dẫn chỉnh thuốc, insulin, lợi tiểu hoặc bữa ăn.
- Có ghi chú giới hạn:
  - phụ thuộc loại thực phẩm
  - phụ thuộc cách cắt/nấu
  - phụ thuộc độ đầy dụng cụ
  - khi cần chính xác nên cân thực tế hoặc kiểm tra nhãn sản phẩm
  - người có bệnh nền/thuốc/thai kỳ/trẻ em/chế độ ăn điều trị nên hỏi bác sĩ hoặc chuyên gia dinh dưỡng

## 8. XSS/fuzz test

Payload đã thử:

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
- Không gây lỗi console.
- Không làm hỏng form/select/result.

## 9. Browser/mobile QA

- Preview port: `4323`
  - `4321` và `4322` đang bận, Astro tự chuyển sang `4323`
- `/cong-cu/`: `200`
- `/cong-cu/doi-don-vi/`: `200`
- Không redirect.
- Không meta refresh.
- Console sạch, không lỗi mới.
- Desktop không overflow ngang.
- Mobile viewport `390 x 844` không overflow ngang.
- DOM snapshot có nội dung route, không blank.
- Không thấy framework error overlay.
- Input/select quy đổi hoạt động trên desktop và mobile.

## 10. Card `/cong-cu/`

- Mô tả hiện tại:
  - `Quy đổi đơn vị thực phẩm ở mức tham khảo, có ghi chú giới hạn khi quy đổi theo dụng cụ hoặc thể tích.`
- Badge `Đã kiểm v1`: đã gắn trong vòng final review.
- Không đổi copy sang hướng chính xác tuyệt đối hoặc khuyên khẩu phần.

## 11. grep/source check

Từ/ngữ cảnh còn lại nhưng chấp nhận được:

- `khẩu phần phù hợp`, `lượng ăn an toàn`, `mục tiêu điều trị`, `bệnh nền`, `thuốc`:
  - chỉ còn trong safety shell theo hướng phủ định/nhắc hỏi chuyên môn, không phải tư vấn cá nhân.
- `kcal`, `kJ`, `cup`, `muỗng`, `1 ml = 1 g`:
  - còn trong phần đơn vị/quy đổi trung tính.
- `NaN`, `Infinity`:
  - chỉ nằm trong logic validation nội bộ.

Không thấy trong route:

- `innerHTML`
- `localStorage`
- `export`
- `copy`
- `share`
- `chart`
- `canvas`
- wording điều trị, khuyên ăn, hoặc chỉnh thuốc/insulin/lợi tiểu

## 12. Những gì không sửa

- Không sửa engine chung.
- Không sửa dữ liệu gốc hàng loạt.
- Không sửa công thức chung ngoài những thay đổi đã có từ QA polish.
- Không sửa `dist` thủ công.
- Không sửa route ngoài scope.
- Không cập nhật `tools-core-status` trong vòng này.

## 13. QA command

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass

Ghi chú:

- Vòng final review này `npm run build` pass ngay khi ghi log ra file.
- Không gặp EPIPE ở lần build final review.

## 14. `git diff --check`

- Chạy sau khi tạo report và trước commit.
- Kết quả được ghi ở commit/final response.
- Dự kiến có thể có warning LF/CRLF Git Windows như các vòng trước nếu Git chạm file.

## 15. Kết luận

- Final review pass.
- Đủ điều kiện sang `tools-core-status-v25`.
- Stable scope đề xuất: `neutral unit conversion helper + data QA shell only`.
- Chưa deploy.
