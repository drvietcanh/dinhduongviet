# Báo cáo kiểm duyệt y khoa tự động — 2026-09-12

## Kết quả quét

Quét 430 file trong `src/pages/` bằng `medical-fact-checker`:

- Critical: **0**
- High: **0**
- Medium: **0**
- Review: **409**
- Bài nguy cơ cao thiếu cảnh báo: **0**
- Bài nguy cơ cao thiếu tín hiệu nguồn: **0**

Các mục `REVIEW` chủ yếu là số liệu, đơn vị khẩu phần hoặc cụm “không thay thế/không tự ý” trong ngữ cảnh phủ định và cảnh báo. Đây là danh sách để chuyên gia đọc nhanh, không phải lỗi tự động kết luận.

## Bổ sung trong lượt này

- Thêm cảnh báo rõ ràng cho trang đánh giá khẩu phần, trang chi tiết món ăn và trang tìm kiếm.
- Thêm tín hiệu nguồn cho các hub so sánh, đánh giá bữa ăn và công cụ GL.
- Mở rộng scanner để nhận diện cụm `Nguồn dữ liệu`, tránh báo nhầm các trang đã có nguồn hiển thị.

Không có tuyên bố chữa bệnh, bỏ thuốc hoặc ngưỡng điều trị mới được thêm vào.
