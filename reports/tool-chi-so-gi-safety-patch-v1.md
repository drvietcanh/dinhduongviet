# Tool chi-so-gi safety patch v1

## 1. Mốc đầu vào

- Status v14 commit: `2c32511 docs: update tool status with salt lookup safety shell v1`.
- Tag created: `local-tools-core-status-v14 -> 2c32511`.
- Branch: `clinical-p0-09-safety-patch-v1`.
- Chưa deploy.
- Route chính: `/cong-cu/chi-so-gi/`.
- File route chính: `src/pages/cong-cu/chi-so-gi.astro`.

## 2. Hiện trạng trước patch

Từ `reports/clinical-high-risk-triage-v1.md`, `reports/tools-core-status-v14.md` và đọc trực tiếp route:

- Status trước patch: `clinical_high_risk`.
- Route type: real route.
- Có search input và filter chip.
- Có bảng GI/GL user-facing.
- Có hardcoded inline JavaScript data table.
- Có render bảng bằng `innerHTML`.
- Có nhãn và màu phân loại `GI thấp`, `GI trung bình`, `GI cao`.
- Có GL theo khẩu phần và gợi ý thay thế theo từng thực phẩm.
- Có wording nguy cơ như `An toàn`, `Tốt`, `phù hợp người tiểu đường`, `Hạn chế`, `Tránh`.
- Không có localStorage.
- Không có chart/canvas.
- Không thấy target đường huyết/HbA1c hoặc hướng dẫn chỉnh thuốc/insulin, nhưng GI/GL + gợi ý thay thế có thể bị hiểu là hướng dẫn chọn món cho người có rối loạn đường huyết.

Nguy cơ chính:

- Bảng hardcode chưa có source-lock hàng dữ liệu.
- Filter thấp/trung bình/cao và màu xanh/vàng/đỏ dễ bị đọc thành phân loại sức khỏe cá nhân.
- Gợi ý thay thế và câu `phù hợp người tiểu đường` có thể bị hiểu là khuyến nghị bệnh nền.
- `innerHTML` không cần thiết trong route có input search.

## 3. File đã sửa

- `src/pages/cong-cu/chi-so-gi.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-chi-so-gi-safety-patch-v1.md`

## 4. Safety patch đã làm

Route `/cong-cu/chi-so-gi/` được chuyển về:

- `educational GI orientation + safety shell only`.

Đã loại bỏ khỏi route user-facing:

- Search/filter table.
- Inline JS data table.
- `innerHTML` rendering.
- Bảng GI/GL theo từng thực phẩm.
- Filter thấp/trung bình/cao.
- Màu phân loại xanh/vàng/đỏ theo mức GI.
- GL/carb output theo từng thực phẩm.
- Gợi ý thay thế theo từng thực phẩm.
- Wording `An toàn`, `Tốt`, `Hạn chế`, `Tránh`, `phù hợp người tiểu đường` trong route.

Route sau patch chỉ còn:

- Giải thích GI là khái niệm tham khảo về thực phẩm chứa carbohydrate.
- Nhấn mạnh GI không đủ để quyết định món phù hợp cho từng người hay từng bệnh nền.
- Safety shell cho nhóm cần hỏi bác sĩ hoặc chuyên gia dinh dưỡng.
- Checklist thông tin nên mang theo khi hỏi chuyên môn.
- Link tới các tool stable liên quan:
  - `/cong-cu/tinh-carb`
  - `/cong-cu/tinh-gl-bua-an`
  - `/cong-cu/khau-phan-viet-clinical`
  - `/cong-cu/muc-tieu-dinh-duong`

## 5. User-facing sau patch

Scope user-facing:

- Educational GI orientation + safety shell only.
- Không phải công cụ chọn món cho người có rối loạn đường huyết.
- Không phải bảng quyết định món nào phù hợp hay không phù hợp với bệnh nền.
- Không thay thế tư vấn của bác sĩ hoặc chuyên gia dinh dưỡng.

## 6. Những thứ không còn

Không còn:

- Target đường huyết/HbA1c.
- Target carb cá nhân.
- Target GI cá nhân.
- Kết luận món ăn an toàn/không an toàn cho tiểu đường hoặc đái tháo đường.
- Khuyến nghị chỉnh thuốc, insulin, sulfonylurea, bữa ăn hoặc lượng carb.
- Nhãn `tốt/xấu/cao/vừa/thấp` như kết luận sức khỏe cá nhân.
- Màu xanh/vàng/đỏ để gợi ý nguy cơ cá nhân.
- Bảng hardcoded GI/GL user-facing.
- Search input riêng của route.

## 7. `/cong-cu/` card

Card `Chỉ số GI thực phẩm Việt` đã được cập nhật mô tả:

- `Tìm hiểu ý nghĩa chỉ số GI ở mức tham khảo và các tình huống cần hỏi bác sĩ hoặc chuyên gia.`

Badge:

- Chưa gắn `Đã kiểm v1`.

Card không gọi route là:

- Công cụ chọn món cho người đái tháo đường.
- Calculator.
- Công cụ xác định món an toàn cho bệnh nền.
- Công cụ đặt target đường huyết, carb hoặc GI cá nhân.

## 8. Browser/mobile QA

Preview route được kiểm bằng `npm run preview` tại `http://localhost:4370`.

Kết quả:

- `/cong-cu/chi-so-gi/`: HTTP `200`.
- `/cong-cu/`: HTTP `200`.
- Redirect: không ghi nhận.
- Meta refresh: không có.
- H1: `Chỉ số GI thực phẩm Việt`.
- Console app: không có error/warning trong Browser check.
- Desktop: không overflow ngang.
- Mobile `390 x 844`: không overflow ngang.
- Route-scoped input: không còn.
- Route-scoped table: không còn.
- Route-scoped script: không còn.
- Do route không còn input riêng, test `<script>alert(1)</script>` không áp dụng cho route. Layout chung có search site-level, nhưng không phải input của route và không sinh output clinical của `chi-so-gi`.

## 9. Wording cấm

Source/browser check cho route không còn các cụm cấm dưới nghĩa kết luận cá nhân hoặc tư vấn điều trị:

- `an toàn cho tiểu đường`
- `an toàn cho đái tháo đường`
- `không an toàn cho tiểu đường`
- `không an toàn cho đái tháo đường`
- `người tiểu đường nên ăn`
- `người tiểu đường không nên ăn`
- `người đái tháo đường nên ăn`
- `người đái tháo đường không nên ăn`
- `ăn thoải mái`
- `ăn không sao`
- `không cần hỏi bác sĩ`
- `đạt mục tiêu đường huyết`
- `không đạt mục tiêu đường huyết`
- `mục tiêu đường huyết cá nhân`
- `mục tiêu HbA1c`
- `mục tiêu carb cá nhân`
- `mục tiêu GI cá nhân`
- `chỉ số này tốt cho bạn`
- `chỉ số này xấu cho bạn`
- `thấp là an toàn`
- `cao là nguy hiểm`
- `bắt buộc tránh`
- `tự chỉnh insulin`
- `tự tăng insulin`
- `tự giảm insulin`
- `tự chỉnh thuốc`
- `tự ngừng thuốc`
- `đổi thuốc`
- `tăng liều`
- `giảm liều`
- `điều trị tiểu đường`
- `điều trị đái tháo đường`
- `chỉ định`
- `kê đơn`

Từ còn lại trong route:

- `đái tháo đường`, `đường huyết`, `insulin`, `sulfonylurea`, `thuốc` chỉ xuất hiện trong safety shell để chỉ nhóm cần hỏi chuyên môn.
- `cao` chỉ xuất hiện trong cụm `người cao tuổi`, không phải nhãn đánh giá GI hay kết luận sức khỏe.
- `mục tiêu` còn trong tên link stable `Mục tiêu dinh dưỡng` và trong cụm `mục tiêu chăm sóc cá nhân`; không phải target đường huyết/carb/GI cá nhân.

## 10. Không sửa ngoài scope

Không sửa:

- Engine của tool stable.
- Dữ liệu dinh dưỡng.
- Dữ liệu GI source-lock.
- Công thức.
- Route stable ngoài scope.
- `dist`.

Không deploy.
Không cập nhật stable/status trong vòng này.

## 11. QA cuối

Kết quả QA cuối:

- `npm run build`: pass.
- `npm run qa`: pass.
- `npm run qa:food-data`: pass.
- `npm run qa:data-consistency`: pass.
- `npm run test:tools`: pass.
- `git diff --check`: pass.
- `git status --short`: chỉ còn các file intended trước commit.

Nếu Git Windows cảnh báo LF/CRLF khi diff/commit, phân loại là cảnh báo môi trường nếu `git diff --check` không fail.

## 12. Worktree

Worktree cần sạch sau commit safety patch.

## 13. Kết luận

`/cong-cu/chi-so-gi/` đã được safety-gate thành `educational GI orientation + safety shell only`.

Đủ điều kiện sang vòng:

- `tool-chi-so-gi-qa-polish-v1`

Chưa đủ điều kiện cập nhật `stable_v1` hoặc status report cho tới khi qua QA polish và final review.

Chưa deploy.
