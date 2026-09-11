# Lộ trình mở rộng kho thực phẩm đến 1.000 mục

## Mục tiêu và nguyên tắc

- Mốc hiện tại trước batch này: 800 thực phẩm.
- Mốc đích: 1.000 thực phẩm đã kiểm duyệt. Mốc này chỉ tính thực phẩm/nguyên liệu có định danh; không bù số lượng bằng tên gọi khác của cùng thực phẩm hoặc món công thức ước tính.
- Chỉ thêm thực phẩm/nguyên liệu có tên, phần ăn, trạng thái và đủ bốn macro từ nguồn chính. Món ăn nhiều thành phần tiếp tục quản lý ở `Recipe`, không đẩy vào kho thực phẩm đơn lẻ chỉ để tăng số lượng.
- Mỗi batch có 15 mục mới, sử dụng một nhóm nguồn và phạm vi trạng thái đồng nhất. Bản ghi trùng slug, trùng tên hoặc đồng nghĩa cùng thực phẩm sẽ được gộp alias thay vì tăng số lượng.

## Hệ chỉ mục khoa học và tìm kiếm

Mỗi mục phải có bốn lớp xác định:

| Lớp | Quy tắc |
| --- | --- |
| Tên chuẩn | Tên tiếng Việt dễ hiểu, có mô tả giống/phần ăn/trạng thái khi cần. |
| `category` | Nhóm hiển thị ổn định: tinh bột, rau xanh, củ quả, trái cây, đậu, hạt, cá, hải sản, thịt, trứng sữa… |
| `state` + `basis` | Tách nghiêm ngặt tươi, luộc, khô, rang, chế biến và quy đổi 100g/100ml. |
| Alias kiểm duyệt | Chỉ thêm tên địa phương, cách viết hoặc tên đồng nghĩa cùng thực phẩm; ghi chú phạm vi sinh học để không gộp nhầm loài/phần ăn. |

`src/data/food-search-alias-index.ts` là nguồn chỉ mục alias có kiểm duyệt. Ví dụ, bề bề được tìm bằng “tôm tít” và “tôm tích”, đồng thời cấm alias “tôm huyết”; củ sắn được tìm bằng “khoai mì” nhưng không gộp với củ đậu.

## Tiến độ theo batch

| Batch | Phạm vi | Số mục mới | Mốc tích lũy | Trạng thái |
| --- | --- | ---: | ---: | --- |
| 11 | Rau/củ/quả phân biệt giống và trạng thái | 15 | 815 | Hoàn thành — QA dữ liệu đạt |
| 12 | Đậu, hạt, dừa và chế phẩm đơn thành phần | 15 | 830 | Hoàn thành — QA dữ liệu đạt |
| 13 | Trái cây Việt theo giống/phần ăn rõ ràng | 15 | 845 | Hoàn thành — QA dữ liệu đạt |
| 14 | Cá và hải sản tươi theo loài/phần ăn rõ ràng | 15 | 860 | Hoàn thành — QA dữ liệu đạt |
| 15 | Thịt, phủ tạng, trứng và sữa có mô tả rõ | 15 | 875 | Hoàn thành — QA dữ liệu đạt |
| 16 | Ngũ cốc, bột và củ: tươi/luộc/khô/rang | 15 | 890 | Hoàn thành — QA dữ liệu đạt |
| 17 | Thực phẩm nền bếp và đóng gói chỉ khi có định danh nguồn/nhãn | 15 | 905 | Hoàn thành — QA dữ liệu đạt |
| 18 | Rau, củ và nấm còn thiếu theo giống/trạng thái rõ | 15 | 920 | Hoàn thành — QA dữ liệu đạt |
| 19 | Trái cây Việt, dạng tươi/khô và phần ăn có định danh | 15 | 935 | Hoàn thành — QA dữ liệu đạt |
| 20 | Cá, nhuyễn thể và giáp xác còn thiếu theo loài/trạng thái | 15 | 950 | Hoàn thành — QA dữ liệu đạt |
| 21 | Thịt, phủ tạng và trứng theo loài/phần ăn hoặc phương pháp nấu rõ | 15 | 965 | Hoàn thành — QA dữ liệu đạt |
| 22 | Đậu, hạt, dầu/mỡ và chế phẩm đơn thành phần | 15 | 980 | Hoàn thành — QA dữ liệu đạt |
| 23 | Khoai, ngũ cốc, đồ hộp và gia vị có định danh chính xác | 15 | 995 | Hoàn thành — QA dữ liệu đạt |
| 24 | Danh sách chờ đã đối chiếu; rà soát trùng cuối kỳ | 5 | 1.000 | Hoàn thành — QA dữ liệu đạt |

Nếu một batch không đủ 15 mục đạt chuẩn, không bù bằng món chế biến ước tính. Mục thay thế phải đến từ danh sách chờ của batch cùng nguyên tắc nguồn.

## Danh sách chờ theo nhóm

1. **Batch 12 — đậu/hạt:** cùi dừa non/già, đậu trứng cuốc, hạt dẻ tươi/khô, hạt mít, quả cọ, bột đậu tương, bột đậu xanh, bột lạc, đậu phụ chúc, tào phớ, đậu ngự luộc, các hạt rang đã ghi rõ trạng thái.
2. **Batch 13 — trái cây:** dưa bở, dưa hồng, hồng đỏ, mận tím, muỗm/quéo, bơ vỏ tím, quả trứng gà (canistel), táo mèo, trám xanh/đen. Ưu tiên tách giống hay phần ăn có mô tả nguồn, không thêm hai tên cho cùng một quả.
3. **Batch 14 — cá/hải sản:** ốc đá, ốc vặn, sò dương, trùng trục, thịt cua, cua bể, ruốc cá quả, ruốc tôm và các loài có tên nguồn trùng khớp. Loại generic không phân loài chỉ được thêm nếu thư viện chưa có biến thể dễ gây nhầm lẫn.
4. **Batch 15 — đạm động vật:** thịt trâu, thịt gà tây, bầu dục, tim bò, gan vịt, lưỡi bò, lòng lợn, tiết, lòng đỏ/lòng trắng trứng vịt, trứng gà công nghiệp. Tách tươi/luộc khi nguồn có cả hai.
5. **Batch 16 — tinh bột:** kê, bỏng ngô, bột mì, bột gạo nếp, xôi nếp cẩm, ngô nướng, bột khoai lang, bột khoai tây, sắn khô và các trạng thái chín/khô đủ macro.
6. **Batch 17 — nền bếp có định danh:** dưa chuột hộp, cá hộp, nước ép nguyên chất, mắm tép chua, xì dầu, tương ngô/tương nếp. Với hàng thương mại, phải có nhãn cụ thể; không xem một nhãn là đại diện cả nhóm.
7. **Batch 18–20 — phủ nhóm nguồn:** ưu tiên mục VDD còn thiếu đủ macro ở rau/củ/nấm, quả và thủy sản; tên mơ hồ về loài hoặc trạng thái phải để danh sách chờ.
8. **Batch 21–23 — phủ phần ăn và thực phẩm nền:** chỉ tách phần thịt/trứng, dầu–hạt, đồ hộp hoặc gia vị khi nguồn phân biệt trực tiếp; kiểm tra nguồn/mã trước khi thêm.
9. **Batch 24 — chốt 1.000:** chỉ chọn năm mục còn thiếu sau khi chạy dò trùng tên, alias, phân loại và kiểm thử toàn bộ chỉ mục; có thể thay đổi phạm vi để loại mọi mục gần nghĩa.

## Điều kiện hoàn thành mỗi batch

1. So khớp tên/slug/alias với toàn bộ `src/data` trước khi thêm.
2. Đối chiếu tối thiểu năng lượng, protein, carbohydrate và chất béo theo 100g/100ml từ nguồn chính.
3. Gắn `source_verified` chỉ khi tên, trạng thái và phần ăn khớp trực tiếp; các mục gần đúng chỉ cập nhật vi chất hoặc giữ ở trạng thái review.
4. Cập nhật chỉ mục alias và nhật ký đối chiếu khi có tên vùng miền mới.
5. Chạy `npm run build`, `npm run qa:food-data`, `npm run qa:data-consistency`; ghi rõ nếu `npm run qa` toàn site còn lỗi hạ tầng ngoài phạm vi batch.
