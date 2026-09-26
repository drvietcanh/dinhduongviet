# UI Optimization — Phase 1 Closure

Ngày: 2026-09-26

## Mục tiêu giai đoạn

Ưu tiên tra cứu nhanh trên mobile, giữ giao diện y tế rõ ràng, accessible và không mở rộng kiến trúc ngoài phạm vi cần thiết.

## 13 bước đã hoàn tất

1. Audit toàn bộ UI và xác định hướng mobile task-first.
2. Loại bỏ search trùng trên homepage mobile.
3. Đưa active filter chips lên gần search của thư viện thực phẩm.
4. Thêm CTA vào công cụ so sánh thực phẩm.
5. Quyết định không triển khai compare bar khi route đích chưa hỗ trợ deep-link.
6. Bổ sung loading/error/retry state cho thư viện thực phẩm.
7. Bỏ auto-scroll gây gián đoạn ở calculator carb.
8. Bỏ auto-scroll tương tự ở calculator GL và bổ sung live region.
9. Audit mobile calculator còn lại, xác nhận auto-scroll đơn bước là phù hợp.
10. Thêm label và touch target 44px cho form carb/GL.
11. Bổ sung status/live cho empty state calculator.
12. Regression test các route trọng tâm desktop/mobile.
13. Kiểm tra ma trận responsive 360/390/768/1024/1440px và chốt giai đoạn.

## Bằng chứng cuối

- `npx astro check`: 658 files, 0 errors, 0 warnings, 0 hints.
- Regression: 8/8 lượt route trọng tâm HTTP 200, không lỗi console/page error, không overflow.
- Responsive matrix: 20/20 lượt HTTP 200, không lỗi console/page error, không overflow, đúng một H1.
- Working tree sạch sau commit.

## Quyết định không mở rộng

- Chưa thêm checkbox/compare bar vào card thực phẩm vì công cụ so sánh chưa nhận deep-link và chưa có contract state chung.
- Không thay đổi công thức, dữ liệu dinh dưỡng, route hoặc nội dung y khoa.
- Không redesign toàn bộ visual system; chỉ sửa các điểm có bằng chứng UX/accessibility.

## Trạng thái

Giai đoạn 1 hoàn tất và đủ điều kiện đóng. Các yêu cầu tiếp theo nên được mở thành giai đoạn riêng, bắt đầu bằng contract deep-link cho compare nếu sản phẩm thực sự cần luồng chọn nhiều món.
