# Theo dõi sức khỏe safety patch v1

## Bối cảnh

Vòng này dựa trên `reports/clinical-high-risk-triage-v1.md` và `reports/tools-core-status-v11.md`.

Sau khi loại 5 tool P0 đã xử lý (`tuong-tac-thuoc-thuc-pham`, `tuong-tac-thuoc`, `nhu-cau-dinh-duong-tre-em`, `dinh-duong-thai-ky`, `theo-doi-duong-huyet`), tool P0 tiếp theo theo đúng thứ tự triage là:

- `theo-doi-suc-khoe` / "Theo dõi sức khỏe"

Chưa chọn các P0 còn lại trong vòng này vì thứ tự triage xếp sau `theo-doi-suc-khoe`:

- `dia-an-lanh-manh`
- `nuoc-muoi-mon-an`
- `chi-so-gi`

## Route chính

- Route: `/cong-cu/theo-doi-suc-khoe/`
- File: `src/pages/cong-cu/theo-doi-suc-khoe.astro`
- Trạng thái trong `tools-core-status-v11`: `clinical_high_risk`

## Trước patch

Route là công cụ theo dõi nhiều chỉ số lâm sàng với form, chart, bảng và mục tiêu cá nhân.

Trước patch có:

- Form nhập cân nặng, huyết áp, đường huyết, vòng eo, HbA1c, LDL, triglyceride.
- Inline JavaScript riêng trong route.
- localStorage cho nhật ký và mục tiêu:
  - `health-track-v1`
  - `health-goals-v1`
- Chart/canvas và bảng lịch sử.
- CSV export.
- Mục tiêu cá nhân và default target cho huyết áp, đường huyết, HbA1c, LDL.
- Goal/reference lines trên chart.

Rủi ro chính: các đường mục tiêu và mục tiêu cá nhân cho huyết áp, đường huyết, HbA1c, LDL có thể bị hiểu như target điều trị hoặc mục tiêu xét nghiệm cá nhân, trong khi chưa có source-lock, safety gate hoặc review lâm sàng riêng.

## Sau patch

Route được chuyển thành `neutral tracking log + safety shell only`.

Route sau patch chỉ:

- Ghi nhật ký trung tính do người dùng nhập.
- Cho phép ghi chú bữa ăn, thuốc, triệu chứng hoặc bối cảnh đo.
- Lưu nhật ký local bằng `health-track-v1`.
- Hiển thị bảng dữ liệu người dùng đã nhập.
- Xuất CSV từ dữ liệu người dùng đã nhập.
- Nhắc các tình huống cần hỏi bác sĩ hoặc chuyên gia.
- Gợi ý danh sách thông tin nên mang theo khi đi khám.

Đã loại bỏ hoặc vô hiệu hóa:

- `health-goals-v1`.
- Mục tiêu cá nhân.
- Default target cho huyết áp, đường huyết, HbA1c, LDL.
- Chart/canvas.
- Goal/reference line.
- Phân loại chỉ số.
- Kết luận đạt/không đạt mục tiêu.
- Khuyến nghị tự chỉnh thuốc, insulin, bữa ăn hoặc kế hoạch chăm sóc.

Route không tạo hoặc gọi engine mới.

## `/cong-cu/`

Đã cập nhật card `Theo dõi sức khỏe` trong `src/pages/cong-cu/index.astro`:

- Mô tả mới: "Ghi nhật ký chỉ số sức khỏe và nhắc các tình huống cần hỏi bác sĩ hoặc chuyên gia."
- Không gắn badge `Đã kiểm v1` trong vòng safety patch này.

## Wording guard

User-facing route không còn hiển thị:

- target/mục tiêu cá nhân cho chỉ số lâm sàng.
- reference line.
- chart diễn giải mục tiêu.
- đạt/không đạt mục tiêu.
- hướng dẫn tự chỉnh thuốc, tăng/giảm liều, tự ngừng thuốc.
- target kcal/macro/nước/natri/kali/phospho cá nhân.
- kết luận "an toàn cho bệnh".

Một số từ như "mục tiêu" vẫn xuất hiện ở `/cong-cu/` do các card tool khác đã stable hoặc ngoài scope của vòng này; không thuộc route `theo-doi-suc-khoe`.

## Ngoài scope

Không sửa:

- dữ liệu dinh dưỡng.
- engine logic.
- công thức.
- route stable đã chốt.
- `dist`.

## Kết luận

`theo-doi-suc-khoe` đã được safety patch về nhật ký trung tính + safety shell. Route cần một vòng browser QA/polish riêng trước khi xét final review hoặc cập nhật status.
