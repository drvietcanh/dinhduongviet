# Rà soát mapping Bảng thành phần thực phẩm Việt Nam — 2026-09-12

## Kết quả

- Giữ lại **85 mapping canonical** trong `public/api/vn-crossref.json`; mọi mapping hiện đều trỏ tới mã có trong `public/api/vietnam-foods.json`.
- Loại các mapping cũ bị lệch mã/tên hoặc chỉ là suy đoán (ví dụ bánh mì → bột gạo nếp, khoai tây → củ súng khô, trứng gà → quả trứng gà, bia → bánh bích cốt).
- Không tự động thay đổi các mục chỉ có mapping tham chiếu; riêng cặp tên đồng nghĩa Củ sắn/Khoai mì được hiệu chỉnh trực tiếp khi đã xác nhận đủ dữ liệu lõi từ cùng mã nguồn.
- Các cặp đồng nghĩa hoặc khác trạng thái được giữ có chủ đích: `cá lóc ↔ cá quả`, `chà bông ↔ ruốc thịt lợn`, `cơm ↔ gạo`, `lạp xưởng ↔ lạp xường`.
- Mapping cho món/sản phẩm không có dòng tương ứng chắc chắn trong bảng nguồn (mì gói, bún tươi, rau thơm, cà phê, trà sữa, tương đen…) được bỏ khỏi lớp đối chiếu thay vì gán nhầm mã.

## Kiểm tra tự động

`npm run qa:food-data` hiện báo:

- `foodsSlim/foodsFull/searchFoods`: 1.000/1.000/1.000
- `duplicateSlugs`, `duplicateDisplayNames`, `rawCookedAmbiguity`, `missingCoreNutrients`: 0
- `vnCrossrefMappings`: 85
- `vnCrossrefInvalid`: 0 (mã nguồn tồn tại, slug canonical, tên nguồn không rỗng)
- `vnCrossrefSuspicious`: 0

Các mapping mới vẫn là tham chiếu 100 g theo bảng nguồn; không dùng thay cho nhãn sản phẩm hoặc chỉ định cá thể hóa của chuyên gia dinh dưỡng.

## Rà soát hiển thị và công cụ

- Trang chi tiết thực phẩm hiển thị cảnh báo ngay dưới phần “Đọc nhanh” cho mục cần đối chiếu hoặc cần thẩm định chuyên gia; phần nguồn vẫn giữ giải thích đầy đủ và liên kết báo lỗi.
- Các công cụ tính có công thức/logic được trình bày trong thẻ phương pháp. Công cụ tra cứu, ghi nhật ký hoặc gợi ý không có công thức định lượng riêng nay hiển thị rõ phạm vi kết quả để tránh hiểu nhầm là thiếu công thức.
- Sửa thứ tự gợi ý ở “Tìm món từ nguyên liệu”: khi cùng số nguyên liệu khớp, món có tỷ lệ khớp cao hơn được ưu tiên (trước đó phép sắp xếp tăng dần làm kết quả kém phù hợp đứng trước).
- Sửa hai khóa vi chất trong công cụ so sánh bữa ăn (`vitaminCMg`, `saturatedFatG`) và các màn hình tổng hợp để Vitamin C, chất béo bão hòa không bị hiển thị thành 0 khi dữ liệu có sẵn.
- Đổi nhãn biểu đồ đường thành “đường tổng” và ghi chú rõ giới hạn khi đối chiếu với mốc đường tự do, tránh gọi mọi giá trị đường là “nhu cầu” hàng ngày.
- Chạy lại kiểm tra alias sau chuẩn hóa Unicode: không còn alias chia sẻ giữa các slug khác nhau (`aliasCollisions: 0`); các tên địa phương như “bề bề/tôm tít”, “lợn/heo”, “lạc/đậu phộng” và “gạo lứt/gạo lật” vẫn tìm đúng trạng thái thực phẩm.
- Đối chiếu lại mã 2004 cho cả “Củ sắn” và “Khoai mì”: cập nhật về 152 kcal, glucid 36,4 g và sắt 0,07 mg/100 g; bỏ trạng thái `reviewed_keep_current` khi đã đủ bốn chất đa lượng lõi từ nguồn.
- Rà soát bảng nguồn phụ: 14 dòng trích xuất có tên trống/dạng số và 1 mã nguồn lặp. Trang tra cứu chuẩn hóa 32 tên OCR chắc chắn ở lớp hiển thị, khôi phục 8 dòng bị lệch cột có tên đọc rõ, còn 6 dòng chưa đủ căn cứ vẫn ẩn khỏi danh sách; API gốc giữ nguyên để không mất provenance.

## Hạng mục còn chờ chuyên gia

QA vẫn gắn cờ 7 mục có sai số công thức hoặc khác trạng thái chế biến cần thẩm định riêng: thịt heo quay, lạp xưởng nướng, thịt hun khói, xúc xích gà, xúc xích heo, cơm gạo lứt đỏ và cơm gạo lứt đen. Các mục này không được tự động thay số liệu bằng mapping gần nghĩa.
