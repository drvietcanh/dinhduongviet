# Rà soát 7 mapping vi chất tạm bỏ qua — 2026-09-17

## Kết luận

Chưa nhập thêm số liệu cho 7 thực phẩm. Các mapping hiện tại không đủ chắc chắn để dùng làm giá trị vi chất công khai; việc giữ ngoài lớp tra cứu là đúng và an toàn hơn nội suy.

| Thực phẩm | Vấn đề | Quyết định |
|---|---|---|
| Bơ | Bản ghi Việt Nam có dấu hiệu trộn giữa quả bơ và bơ sữa ở một số vi chất | Giữ số liệu lõi hiện có; chưa nhập overlay vi chất |
| Cá mòi | Tên gần với cá mối trong một mapping cũ; khác loài | Không dùng dữ liệu cá mối |
| Tương ớt | Natri giữa các nhãn hàng thay đổi lớn, nguồn tổng hợp chưa đại diện | Không gán một giá trị natri chung |
| Lá lốt | Phốt pho nguồn Việt Nam cao bất thường so với nhóm rau lá | Chờ xác minh mẫu và phương pháp phân tích |
| Lựu | Tên nguồn “Lùu” có khả năng lỗi chính tả/mapping | Không dùng bản ghi nhập nhằng |
| Gân bò | Mapping nhầm sang gan bò, khác bộ phận | Không dùng dữ liệu gan bò |
| Mứt dừa | Mapping nhầm sang mứt dứa, khác nguyên liệu | Không dùng dữ liệu mứt dứa |

## Nguồn cần dùng khi xác minh tiếp

- [USDA FoodData Central](https://fdc.nal.usda.gov/) — chỉ dùng bản ghi đúng thực phẩm, đúng trạng thái sống/chín/chế biến và có đơn vị trên 100 g.
- [FoodData Central API documentation](https://fdc.nal.usda.gov/api-spec/fdc_api.html) — lưu lại mã bản ghi, ngày truy xuất và phương pháp dữ liệu.
- Bảng thành phần thực phẩm Việt Nam hoặc phiếu kiểm nghiệm trong nước — ưu tiên khi thực phẩm/nhãn hàng có khác biệt lớn theo công thức.

## Điều kiện để mở mapping

1. Tên thực phẩm và bộ phận phải khớp hoàn toàn; không suy diễn từ tên gần giống.
2. Trạng thái phải khớp: tươi/sống, chín, khô, ngâm đường hoặc sản phẩm thương mại.
3. Có đủ mã nguồn, đơn vị, ngày truy xuất và ghi chú biến thiên theo giống/nhãn hàng.
4. Chỉ cập nhật sau khi `check-food-data.mjs` không còn `intentionallySkippedVnMicronutrientCandidates` cho mục đó.

Việc giữ 7 mục ở trạng thái bỏ qua có chủ đích giúp tránh tạo độ chính xác giả trong các công cụ tính kali, phốt pho, natri và vi chất.
