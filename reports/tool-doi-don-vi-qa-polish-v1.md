# Tool `doi-don-vi` QA Polish v1

Date: 2026-07-03

## 1. Mốc đầu vào

- Status baseline: `tools-core-status-v24`
- Baseline commit: `1ddc385 docs: update tool status with ingredient dish finder safety shell v1`
- Route: `/cong-cu/doi-don-vi/`
- Chưa deploy

## 2. File đã đọc

- `src/pages/cong-cu/doi-don-vi.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tools-core-status-v24.md`
- `reports/tools-core-status-v23.md`
- `reports/needs-qa-polish-triage-v1.md`
- `package.json`

## 3. Hiện trạng trước polish

- Có input số lượng cho nhiều bộ quy đổi: khối lượng, năng lượng, thể tích, chiều dài, nhiệt độ.
- Có select đơn vị nguồn/đích.
- Không có search/free-text search.
- Không có localStorage, export, copy, share.
- Không có chart/canvas.
- Không thấy `innerHTML` trong route.
- Chưa có safety shell đủ chặt cho ngữ cảnh dinh dưỡng.
- Lead copy và card `/cong-cu/` còn quá ngắn, chưa nhấn rõ đây là quy đổi tham khảo.
- Chưa xử lý rõ các edge case nhập liệu như dấu phẩy thập phân Việt Nam, số âm, giá trị quá lớn, `Infinity`, `NaN`, dữ liệu rỗng/sai định dạng.
- Copy phần thể tích chưa nhắc đủ rõ rằng không thể mặc định `1 ml = 1 g` cho mọi thực phẩm.

## 4. File đã sửa

- `src/pages/cong-cu/doi-don-vi.astro`
- `src/pages/cong-cu/index.astro`

## 5. Scope sau polish

- `neutral unit conversion helper + data QA shell only`

## 6. Chức năng còn lại sau polish

- Còn input số lượng.
- Còn select đơn vị nguồn/đích.
- Không có search.
- Không có localStorage/export/copy/share.
- Không có chart/canvas.
- Không có quy đổi bệnh nền hay target cá nhân.
- Không có badge `Đã kiểm v1` trên card `/cong-cu/` trong vòng này.

## 7. Logic quy đổi và giới hạn

- Giữ các bộ quy đổi:
  - khối lượng: `mg`, `g`, `kg`, `oz`, `lb`
  - năng lượng: `cal`, `kcal`, `kJ`
  - thể tích: `ml`, `l`, `cup`, `tbsp`, `tsp`, `floz`
  - chiều dài: `cm`, `m`, `in`, `ft`
  - nhiệt độ: `°C`, `°F`, `K`
- Input chuyển sang `type="text"` với `inputmode="decimal"` để hỗ trợ `1,5` và `1.5`.
- Có parse số kiểu Việt Nam cơ bản bằng cách chuẩn hóa `,` sang `.` trước khi tính.
- Giá trị quá lớn (`abs > 1e9`) bị chặn bằng thông báo trung tính.
- Bộ quy đổi không phải nhiệt độ chặn số âm bằng thông báo trung tính.
- Quy đổi thể tích được ghi rõ là giả định chuẩn theo dụng cụ, không áp dụng như nhau cho mọi thực phẩm.
- Không mặc định `1 ml = 1 g` cho mọi thực phẩm.

## 8. Safety/content đã hạ rủi ro

- Lead copy đổi sang hướng `quy đổi đơn vị ... ở mức tham khảo`.
- Thêm safety shell nêu rõ:
  - không dùng để kết luận khẩu phần phù hợp
  - không dùng để kết luận lượng ăn an toàn
  - không dùng làm mục tiêu điều trị cá nhân
  - cần kiểm tra nhãn/cân thực tế khi cần độ chính xác cao
  - người có bệnh nền, đang dùng thuốc, thai kỳ, trẻ em hoặc cần chế độ ăn điều trị nên hỏi bác sĩ/chuyên gia dinh dưỡng
- Không có user-facing:
  - `đạt/không đạt mục tiêu`
  - `thiếu/thừa`
  - `tốt/xấu`
  - `phù hợp/an toàn cho tiểu đường, tăng huyết áp, bệnh thận, gout, suy tim`
  - hướng dẫn chỉnh thuốc/insulin/lợi tiểu

## 9. DOM/XSS

- Không còn `innerHTML` route-scoped.
- Render kết quả bằng `textContent`.
- Input/payload đã thử:
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
  - không có lỗi console mới
- Vì route không có export/copy/CSV, không phát sinh bề mặt formula injection ở đầu ra.

## 10. Data/logic QA

- Năng lượng hiển thị bằng `kcal` và `kJ`.
- Quy đổi thể tích giữ đơn vị `ml`, `l`, `cup`, `tbsp`, `tsp`, `floz`.
- Route không tính macro hay vi chất từ thực phẩm cụ thể.
- Không dùng dữ liệu bệnh nền.
- Không tự bịa giá trị thiếu.
- Với input không hợp lệ, route trả về `—` cùng hint trung tính.
- Ghi chú trung tính đã thêm cho trường hợp quy đổi thể tích và giới hạn quy đổi dụng cụ.

Ghi nhận riêng về input rỗng:

- Trong in-app browser harness, thao tác xóa trắng literal field bằng select-all/backspace bị giữ lại giá trị mặc định `100`, nên không phản ánh đúng một ô trống thực sự.
- Tuy vậy, code path đã chặn chuỗi rỗng trong `parseLocalizedNumber`, và browser QA với input blank-like (`" "`) cùng các input sai định dạng khác đều trả về `—` và hint trung tính, không crash app.

## 11. Browser/mobile QA

- Preview port: `4322` (`4321` bận nên Astro tự chuyển port)
- `/cong-cu/`: `200`
- `/cong-cu/doi-don-vi/`: `200`
- Không redirect
- Không meta refresh
- Console sạch trong session QA hiện tại
- Desktop không overflow ngang
- Mobile `390 x 844` không overflow ngang

Các flow đã kiểm:

- `100 g -> kg`: pass (`0.100 kg`)
- `100 g -> mg`: pass (`100000.0 mg`)
- `1,5 cup -> ml`: pass (`360.0 ml`)
- `1.5 cup -> ml`: pass (`360.0 ml`)
- `abc`: pass, trả `—`
- `Infinity`: pass, trả `—`
- số rất lớn: pass, trả `—`
- số âm ở bộ không cho âm: pass, trả `—`

## 12. Card `/cong-cu/`

- Mô tả hiện tại:
  - `Quy đổi đơn vị thực phẩm ở mức tham khảo, có ghi chú giới hạn khi quy đổi theo dụng cụ hoặc thể tích.`
- Badge `Đã kiểm v1`: chưa gắn trong vòng QA polish

## 13. grep/source check

Từ/ngữ cảnh còn lại nhưng chấp nhận được:

- `khẩu phần phù hợp`, `an toàn`, `bệnh nền`, `thuốc`:
  - chỉ còn trong safety shell theo hướng phủ định/ràng buộc an toàn, không phải tư vấn cá nhân
- `cup`, `tbsp`, `tsp`, `1 ml = 1 g`:
  - còn trong phần ghi chú quy đổi thể tích, ngữ cảnh dữ liệu trung tính
- `NaN`, `Infinity`:
  - chỉ nằm trong logic parse/validation nội bộ, không user-facing

Không thấy:

- `innerHTML`
- `localStorage`
- `export`
- `copy`
- `share`
- wording điều trị hoặc khuyên ăn/chỉnh thuốc trong user-facing của route này

## 14. Những gì không sửa

- Không sửa engine chung
- Không sửa dữ liệu gốc hàng loạt
- Không sửa công thức chung ngoài validation/UI của route này
- Không sửa `dist` thủ công
- Không sửa route ngoài scope, trừ mô tả card `/cong-cu/`

## 15. QA command cuối

- `npm run build`
  - lần đầu lỗi `EPIPE` do output pipe dài
  - rerun bằng log file: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass

## 16. `git diff --check`

- Pass về nội dung diff.
- Có warning LF/CRLF trên Windows:
  - `src/pages/cong-cu/doi-don-vi.astro`
  - `src/pages/cong-cu/index.astro`

## 17. Worktree cuối

- Tại thời điểm report này: còn file sửa chưa commit cho:
  - `src/pages/cong-cu/doi-don-vi.astro`
  - `src/pages/cong-cu/index.astro`
  - report này

## 18. Kết luận

- QA polish pass.
- Route đủ điều kiện sang `tool-doi-don-vi-final-review-v1`.
- Scope đề xuất giữ nguyên:
  - `neutral unit conversion helper + data QA shell only`
- Chưa cập nhật stable/status trong vòng này.
- Chưa deploy.
