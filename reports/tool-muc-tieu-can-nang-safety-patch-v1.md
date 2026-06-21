# Tool muc-tieu-can-nang safety patch v1

## Mốc

- Branch: `tool-muc-tieu-can-nang-safety-patch-v1`
- Base status tag: `local-tools-core-status-v4 -> ff631aa`
- Route: `/cong-cu/muc-tieu-can-nang/`
- Mục tiêu: vá an toàn route mục tiêu cân nặng trước khi xét QA/status.

## Logic cũ đã loại bỏ khỏi route

Route `src/pages/cong-cu/muc-tieu-can-nang.astro` không còn dùng calculator cũ để tính:

- BMR.
- TDEE.
- Activity multiplier cố định `1.375`.
- Quy đổi `7700 kcal/kg`.
- Deficit/surplus hằng ngày.
- Mục tiêu năng lượng dạng số.
- Macro target dạng số.
- Bảng macro theo bệnh nền.
- Trường cân nặng mục tiêu, số kg muốn thay đổi hoặc thời gian giảm/tăng cân.

Các phần này được loại khỏi UI và logic client-side của route để tránh hiểu như cam kết tốc độ hoặc đơn mục tiêu cá nhân.

## Logic mới

Route hiện là trang "Mục tiêu cân nặng" dạng định hướng an toàn, không redirect và dùng engine nền:

- Engine: `planNutritionGoal` từ `src/lib/nutrition-goal-planner.ts`.
- Mode: `auto`, `caution`, `clinical_no_auto`.
- Nhãn UI:
  - `auto`: "Tham khảo cơ bản".
  - `caution`: "Cần thận trọng".
  - `clinical_no_auto`: "Cần cá thể hóa".
- BMI được tính bởi engine và hiển thị khi input hợp lệ.
- Reasons được map sang câu tiếng Việt ngắn, không render trực tiếp các cảnh báo kỹ thuật nội bộ của engine.

## Input mới

Form hiện có:

- Tuổi.
- Giới.
- Cân nặng hiện tại.
- Chiều cao.
- Mức hoạt động: thấp, vừa, cao.
- Định hướng: duy trì cân nặng, giảm cân nhẹ, tăng cân nhẹ.
- Ăn chay hoặc chủ yếu thực vật.
- Nhóm cần cá thể hóa:
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

## Output mới

Trang hiển thị:

- Chế độ đánh giá.
- BMI và phân tầng an toàn khi hợp lệ.
- Lý do/cảnh báo theo mode.
- "Khoảng đạm tham khảo" chỉ khi engine cho phép và `shouldShowTargets=true`.
- Note rõ: công cụ không đưa kcal hoặc macro cá nhân dạng số ở v1 vì cần khóa nguồn rõ hơn.
- Note rõ: không dùng để tự chỉnh thuốc, insulin, lợi tiểu hoặc thuốc giảm cân.

Với `clinical_no_auto`:

- Không hiển thị target nổi bật.
- Không hiển thị protein như mục tiêu cá nhân.
- Nhấn mạnh cần cá thể hóa với bác sĩ hoặc chuyên gia dinh dưỡng.

## Protein reference

Protein reference được lấy qua engine `nutrition-goal-planner`, engine này reuse `calculateProteinRequirement`.

Route chỉ hiển thị protein reference khi engine trả kết quả không thuộc `clinical_no_auto` và `shouldShowTargets=true`. Nhãn user-facing là "Khoảng đạm tham khảo", kèm note "Đây là khoảng tham khảo, không phải chỉ định cá nhân."

## Wording guard

Kiểm tra user-facing text của route không có:

- "mục tiêu chuẩn"
- "bắt buộc ăn"
- "giảm X kg/tuần chắc chắn"
- "ăn càng ít càng tốt"
- "macro tối ưu cho mọi người"
- "an toàn cho bệnh"
- "tự chỉnh insulin"
- "ngưng thuốc"
- "bệnh thận nên ăn X g đạm"

Route cũng không hiển thị user-facing:

- BMR.
- TDEE.
- `7700 kcal/kg`.
- `deficit`.
- `surplus`.
- "mục tiêu kcal".
- "mục tiêu macro".
- "macro bệnh nền".

Ghi chú kỹ thuật: `src/lib/nutrition-goal-planner.ts` còn một số chuỗi nội bộ về `deficit`, `surplus`, và "mục tiêu kcal" trong warning/source-lock. Route này không render trực tiếp các warning đó ra UI.

## Cập nhật `/cong-cu/`

Đã cập nhật mô tả card `muc-tieu-can-nang` trong `src/pages/cong-cu/index.astro` thành:

> Định hướng mục tiêu cân nặng tham khảo với cờ cần cá thể hóa.

Không gắn badge `Đã kiểm v1` ở vòng này.

## Browser QA nhanh

Preview: `npm run preview`, route `http://localhost:4322/cong-cu/muc-tieu-can-nang/`.

Phương pháp: headless Chrome qua Chrome DevTools Protocol, viewport mobile `390 x 844`.

Kết quả:

- HTTP route mở được, H1 là "Mục tiêu cân nặng".
- Không có meta refresh.
- Không redirect.
- Không overflow ngang ở 390px.
- Form có đủ input chính và nhóm cần cá thể hóa.
- Submit không lỗi crash.
- Không có wording cấm trong body.
- Không có BMR/TDEE/7700/deficit/surplus/kcal target/macro target/macro bệnh nền trong body.

Case đã thử:

| Case | Kỳ vọng | Kết quả |
| --- | --- | --- |
| Người khỏe, duy trì | Tham khảo cơ bản | Pass |
| Giảm cân nhẹ | Cần thận trọng, không deficit số | Pass |
| Tăng cân nhẹ | Cần thận trọng, không surplus số | Pass |
| BMI < 18.5 | Cần cá thể hóa, ẩn protein target | Pass |
| Dưới 18 tuổi | Cần cá thể hóa | Pass |
| CKD | Cần cá thể hóa | Pass |
| Lọc máu | Cần cá thể hóa | Pass |
| ĐTĐ dùng insulin/SU | Cần cá thể hóa | Pass |
| Ung thư/suy dinh dưỡng | Cần cá thể hóa | Pass |
| Sụt cân nhanh không chủ ý | Cần cá thể hóa | Pass |
| Input sai tuổi | Lỗi thân thiện, không crash | Pass |

## Ngoài scope

Không sửa:

- `src/pages/cong-cu/muc-tieu-dinh-duong.astro`.
- `src/pages/cong-cu/tinh-macro.astro`.
- `src/pages/cong-cu/tinh-nang-luong.astro`.
- Engine `src/lib/nutrition-goal-planner.ts`.
- Dữ liệu dinh dưỡng.
- `dist` thủ công.
- Stash ngoài scope `so-sanh`.

## Kết luận

Safety patch đạt mục tiêu: route `muc-tieu-can-nang` không còn trình bày calculator kcal/macro hoặc bảng bệnh nền, đã chuyển sang safety-gated orientation bằng engine chung.

Chưa nên cập nhật `stable_v1` ở vòng này. Nên có vòng browser QA/polish riêng trước khi xét status.
