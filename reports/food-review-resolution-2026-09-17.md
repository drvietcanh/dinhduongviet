# Kết quả rà soát dữ liệu thực phẩm — 2026-09-17

## Đã xử lý dứt điểm

- 27 cảnh báo thực phẩm chế biến có năng lượng cao đã được phân loại theo trạng thái nguồn. Các mục có nguồn trực tiếp được đánh dấu `source_verified`; các mục công thức ước tính được đánh dấu `reviewed_keep_current` và có cơ sở 100 g, ghi chú thành phẩm và phạm vi áp dụng. QA không còn mục chờ quyết định.
- 14 dòng Bảng thành phần thực phẩm Việt Nam có tên chỉ là số đã bị loại khỏi API tra cứu công khai. Dữ liệu SQLite gốc không bị xóa để bảo toàn khả năng truy nguyên.
- Bản ghi trùng mã `1013` đã được loại khỏi API tra cứu; bản ghi có tên hợp lệ “Bánh phở” được giữ.

## Chênh lệch năng lượng và macro

- Rượu trắng, rượu nếp và bia: năng lượng đến chủ yếu từ ethanol; không thể kiểm tra bằng công thức 4/4/9 chỉ dùng đạm–carb–béo. Giữ số liệu theo nhãn/nguồn và ghi chú rõ.
- Cá, nghêu, tim/gan và một số củ/hạt: một số nguồn VDD cung cấp macro hoặc năng lượng không đồng nhất. Không tự cân bằng ngược bằng công thức vì có thể thay đổi số liệu gốc; giữ các trường đã có nguồn, ghi rõ `reviewNote` và không nâng mức tin cậy quá mức.
- Không có thực phẩm nào còn thiếu bốn chất lõi, không có giá trị âm hoặc lỗi nullability.

## Kết quả QA

- 1.000 thực phẩm, 433 món ăn.
- Trùng slug/tên/alias: 0.
- `foodId` món ăn hỏng: 0.
- Tên nguồn dạng số: 0 trong API công khai.
- Mã nguồn trùng: 0 trong API công khai.
- Cảnh báo cơ sở 100 g chưa quyết định: 0.
