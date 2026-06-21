# Tool muc-tieu-can-nang QA polish v1

## Mốc

- Branch: `tool-muc-tieu-can-nang-qa-polish-v1`
- Base commit: `86f8bde fix: make weight goal page safety gated`
- Tag created: `local-muc-tieu-can-nang-safety-patch-v1 -> 86f8bde`
- Route: `/cong-cu/muc-tieu-can-nang/`
- Chưa deploy.

## Scope

Vòng này QA browser/manual + polish nhẹ cho route mục tiêu cân nặng.

Không thêm công thức mới. Không bật BMR/TDEE, `7700 kcal/kg`, deficit/surplus, kcal target, macro target, fiber/sugar/sodium target, hoặc bảng macro bệnh nền.

## Route/redirect

- HTTP route trả `200`.
- Không redirect.
- Không có meta refresh.
- H1 là `Mục tiêu cân nặng`.

## Browser/manual QA method

Đã thử Browser plugin của Codex với in-app browser trước, nhưng local preview bị chặn ở trang lỗi nội bộ khi truy cập `localhost`. Vì vậy QA route được thực hiện bằng `manual/headless_browser_qa`:

- `npm run build`
- `npm run preview`
- Headless Chrome qua Chrome DevTools Protocol.
- Desktop viewport: `1366 x 900`.
- Mobile viewport: `390 x 844`.
- Không cài thêm Playwright hoặc dependency mới.

## Desktop/mobile result

Desktop:

- Route mở đúng `/cong-cu/muc-tieu-can-nang/`.
- Không overflow ngang.
- Form và result panel không vỡ layout.
- Không có input cũ cho cân nặng mục tiêu, thời gian giảm/tăng cân, hoặc số kg muốn giảm/tăng.

Mobile `390 x 844`:

- Không overflow ngang.
- Form chuyển một cột dễ đọc.
- Checkbox không quá sát nhau.
- Nút submit rõ, wording sau polish là `Xem định hướng`.
- Khu kết quả đổi nhãn thành `Định hướng` để tránh hiểu nhầm với kết quả điều trị.

## Input/UI checked

Form có đủ:

- Tuổi.
- Giới.
- Cân nặng hiện tại.
- Chiều cao.
- Mức hoạt động.
- Định hướng duy trì / giảm cân nhẹ / tăng cân nhẹ.
- Ăn chay.
- 11 cờ cần cá thể hóa:
  - Thai kỳ/cho con bú.
  - Sụt cân nhanh không chủ ý.
  - Rối loạn ăn uống.
  - Bệnh thận mạn.
  - Lọc máu.
  - Suy tim/hạn chế dịch.
  - Xơ gan/cổ trướng.
  - Đái tháo đường dùng insulin hoặc sulfonylurea.
  - Ung thư/suy dinh dưỡng.
  - Bệnh cấp.
  - Thuốc/bệnh phức tạp.

Form không còn:

- Cân nặng mục tiêu dạng số.
- Thời gian giảm/tăng cân.
- Số kg muốn giảm/tăng.

## Test case mode

| Case | Kỳ vọng | Kết quả |
| --- | --- | --- |
| Người khỏe, duy trì | `auto` / Tham khảo cơ bản | Pass |
| Giảm cân nhẹ | `caution` / Cần thận trọng | Pass |
| Tăng cân nhẹ | `caution` / Cần thận trọng | Pass |
| Người >=65 tuổi | `caution` / Cần thận trọng | Pass |
| Activity high | `caution` / Cần thận trọng | Pass |
| Ăn chay | `caution` / Cần thận trọng | Pass |
| BMI >=25 | `caution` / Cần thận trọng | Pass |
| BMI <18.5 | `clinical_no_auto` / Cần cá thể hóa | Pass |
| Dưới 18 tuổi | `clinical_no_auto` / Cần cá thể hóa | Pass |
| Thai kỳ/cho bú | `clinical_no_auto` / Cần cá thể hóa | Pass |
| CKD | `clinical_no_auto` / Cần cá thể hóa | Pass |
| Lọc máu | `clinical_no_auto` / Cần cá thể hóa | Pass |
| ĐTĐ dùng insulin/SU | `clinical_no_auto` / Cần cá thể hóa | Pass |
| Ung thư/suy dinh dưỡng | `clinical_no_auto` / Cần cá thể hóa | Pass |
| Sụt cân nhanh không chủ ý | `clinical_no_auto` / Cần cá thể hóa | Pass |
| Tuổi không hợp lệ | Lỗi thân thiện, không crash | Pass |
| Cân nặng không hợp lệ | Lỗi thân thiện, không crash | Pass |
| Chiều cao không hợp lệ | Lỗi thân thiện, không crash | Pass |

## Wording guard

Không thấy trên user-facing text/output:

- `mục tiêu chuẩn`
- `bắt buộc ăn`
- `giảm X kg/tuần chắc chắn`
- `ăn càng ít càng tốt`
- `macro tối ưu cho mọi người`
- `an toàn cho bệnh`
- `tự chỉnh insulin`
- `ngưng thuốc`
- `bệnh thận nên ăn X g đạm`

Không thấy trên user-facing text/output:

- BMR.
- TDEE.
- `7700 kcal/kg`.
- `deficit`.
- `surplus`.
- `mục tiêu kcal`.
- `mục tiêu macro`.
- `macro bệnh nền`.

Ghi chú kỹ thuật: `src/lib/nutrition-goal-planner.ts` vẫn có một số chuỗi nội bộ/source-lock về `deficit`, `surplus`, và `mục tiêu kcal`, nhưng route này không render trực tiếp các warning đó.

## Polish đã làm

Polish nhẹ ở `src/pages/cong-cu/muc-tieu-can-nang.astro`:

- Lead đổi từ `Kết quả chỉ mang tính tham khảo` sang `Thông tin hiển thị chỉ mang tính tham khảo`.
- CTA đổi từ `Cập nhật kết quả` sang `Xem định hướng`.
- Kicker panel đổi từ `Kết quả` sang `Định hướng`.
- Caution note đổi từ `Kết quả chỉ nên xem...` sang `Thông tin chỉ nên xem...`.
- Warning auto đổi từ `Kết quả là tham khảo...` sang `Thông tin là tham khảo...`.
- Lý do `dialysis` bỏ cụm `trung tâm điều trị`, thay bằng `đơn vị đang theo dõi`.

Mục tiêu polish: tránh nhầm phần định hướng với kết quả điều trị.

## `/cong-cu/` card

Card `Mục tiêu cân nặng` trên `/cong-cu/`:

- Dẫn đến `/cong-cu/muc-tieu-can-nang`.
- Mô tả an toàn: `Định hướng mục tiêu cân nặng tham khảo với cờ cần cá thể hóa.`
- Không có badge `Đã kiểm v1` trong vòng này.

Không sửa `/cong-cu/` trong vòng này vì card đã đúng từ safety patch.

## Protein reference

Protein reference có hiển thị trong `auto`/`caution` khi engine cho phép, với nhãn `Khoảng đạm tham khảo`.

Với `clinical_no_auto`, protein block bị ẩn, không trình bày như mục tiêu cá nhân.

## Ngoài scope

Không sửa:

- Engine `src/lib/nutrition-goal-planner.ts`.
- Dữ liệu dinh dưỡng.
- `src/pages/cong-cu/muc-tieu-dinh-duong.astro`.
- `src/pages/cong-cu/tinh-macro.astro`.
- `src/pages/cong-cu/tinh-nang-luong.astro`.
- `dist` thủ công.
- Stash `so-sanh`.

## Kết luận

Route `/cong-cu/muc-tieu-can-nang/` đã qua QA/polish v1 theo phạm vi safety-gated weight-goal orientation. Đủ điều kiện đi tiếp vòng final review trước khi cập nhật status; chưa nên lên `stable_v1` trực tiếp từ vòng này.
