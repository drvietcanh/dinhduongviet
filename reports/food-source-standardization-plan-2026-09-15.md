# Kế hoạch chuẩn hóa và kiểm chứng nguồn dữ liệu thực phẩm — 2026-09-15

## Phạm vi và kết luận sơ bộ

Đây là lượt kiểm toán nguồn/provenance và lập kế hoạch; **chưa sửa hoặc thay hàng loạt giá trị dinh dưỡng**. Không nguồn nào được xem là đúng tuyệt đối chỉ vì là nguồn nhà nước/quốc tế. Phải xác minh đúng thực phẩm, trạng thái, phần ăn được, đơn vị, định nghĩa chất dinh dưỡng và nguồn của từng giá trị.

Ảnh chụp `public/api/foods-full.json` hiện có 1.000 mục: 401 mục gắn `vdd-food-portal-2026`, 1 mục `vn-fct-2007`, 539 mục `recipe-estimate-v1`, 9 mục gắn mã USDA FDC và 50 mục `label`. Có 472 mục mang metadata rà soát chất lượng/nguồn; con số này không đồng nghĩa với 472 lỗi hay 472 mục đã được xác minh độc lập. `npm run qa:food-data` đạt kiểm tra khóa/trùng/mapping cơ bản, nhưng báo 32 mục cooked-high-energy, 3 mục cơm/gạo, 8 mục cần chuyên gia duyệt, 14 tên nguồn Việt bất thường và 1 mã nguồn trùng. QA cấu trúc không chứng minh số liệu đúng về mặt phân tích.

## Phát hiện đã xác nhận

### 1. Mục “Sữa tươi” đang trộn giá trị từ các bộ dữ liệu nhưng gắn một nguồn duy nhất

| Trường trên 100 g | Cổng Viện, mã 10001 | App hiện tại | USDA SR Legacy, FDC 171265 |
| --- | ---: | ---: | ---: |
| Năng lượng (kcal) | 74 | 61 | 61 |
| Protein (g) | 3,9 | 3,9 | 3,15 |
| Chất béo (g) | 4,4 | 4,4 | 3,25 |
| Carbohydrate (g) | 4,8 | 4,8 | 4,8 |
| Natri (mg) | 352,5 | 352,54 | 43 |

- Cổng Viện hiển thị thực phẩm 10001 là “Sữa bò tươi”, 74 kcal, protein 3,9 g, béo 4,4 g, carbohydrate 4,8 g, natri 352,5 mg. Một bài truyền thông khác của Viện dẫn bảng 2007 và ghi natri 380 mg/100 g.
- Trong code, lớp thay thế VDD đưa protein/béo/carbohydrate/natri của mã 10001 vào, nhưng năng lượng `61 kcal` kế thừa từ bản ghi cũ; sau đó toàn bản ghi mang `sourceId: vdd-food-portal-2026`, `sourceReviewStatus: source_verified`, confidence cao. Như vậy provenance nguồn ở cấp thực phẩm đang che mất việc năng lượng là số từ nguồn khác.
- USDA FDC SR Legacy 171265 là sữa bò nguyên kem kiểu Mỹ, không phải mẫu sữa Việt Nam đồng nhất. Na 43 mg là đối chứng khác quần thể/thực phẩm, **không đủ căn cứ để kết luận số Viện sai hoặc thay trực tiếp**. Thực tế bài Viện dẫn bảng 2007 ghi 380 mg và cổng hiện hành ghi 352,5 mg, gần nhau hơn nhiều; khả năng khác công thức/mẫu và cần tài liệu gốc nếu muốn giải quyết vẫn còn, nhưng giả thuyết sai dấu thập phân chưa được chứng minh. Việc năng lượng 61 kcal trong app khớp USDA không hợp thức hóa việc trộn các macro khác nguồn.
- Hành động: hạ mục này khỏi trạng thái `source_verified`/confidence cao cho tới khi truy lại bảng gốc/method; giữ cả hai quan sát với provenance, không xóa lịch sử; xác nhận liệu bản ghi Viện là sữa tươi cụ thể hay lỗi nhập liệu trước khi quyết định giá trị công khai. Tạm không dùng mục này để tư vấn hạn chế natri lâm sàng.

### 2. Pipeline hiện biến “không có số liệu” thành 0 và làm sai bộ lọc bệnh thận/tăng huyết áp

- `scripts/build-foods-full.py:num()` trả `0` khi giá trị là `None`, nên API compact không còn phân biệt “không có dữ liệu” với giá trị phân tích bằng 0. Trong 1.000 mục nguồn chính (`dist/api-foods.json`), đang thiếu fiber ở 581, sodium ở 205, potassium ở 287, phosphorus ở 675 và calcium ở 486 mục. Đây là thiếu trường trong app, không chứng minh nguồn gốc có giá trị bằng 0.
- Riêng 401 mục gắn cổng Viện: sodium thiếu 164, potassium thiếu 170, phosphorus thiếu 143, fiber thiếu 231. Có 174 mục thiếu ít nhất một trong sodium/potassium. `src/components/FoodLibrary.astro` dùng `Number(item[8] || 0)`/`Number(item[9] || 0)`; do đó giá trị bị khuyết trở thành 0 khi lọc, sắp xếp và dựng profile. Điều kiện CKD hiện là `sodium <= 100 && potassium <= 150`; theo logic này 169 mục Viện có một hoặc cả hai trường thiếu vẫn lọt điều kiện số. Profile tăng huyết áp cũng có thể nhận sodium khuyết như thể bằng 0. Không thể kết luận từng món đó không phù hợp CKD/tăng huyết áp; kết luận chắc chắn là bộ lọc đang đưa ra phân loại dựa trên thông tin không có.
- 284 mục Viện đang có `sourceReviewStatus: source_verified`; trong đó 162 thiếu natri, 170 thiếu kali, 140 thiếu phospho và 207 thiếu chất xơ. `source_verified` hiện không nói rõ là xác minh tên/mã, bốn macro, hay toàn hồ sơ vi chất. Cần thu hẹp nghĩa và phạm vi nhãn này, không được hàm ý rằng tất cả cột đã xác minh.
- Đây là lỗi app đã xác nhận, không phải nghi vấn bất thường trong bảng Viện. Ưu tiên khắc phục trước các lô dữ liệu tiếp theo: API phải giữ `null`/unknown; giao diện hiển thị “chưa có số liệu”; điều kiện profile lâm sàng phải loại mục thiếu trường thiết yếu hoặc ghi “chưa đủ dữ liệu” thay vì khuyến nghị. Thêm regression test đảm bảo thiếu natri/kali không thể được xem là 0 hoặc tự động vào nhóm an toàn. Rà mọi bộ lọc/so sánh/calculator đang tiêu thụ các API compact tương tự.

**Cập nhật 2026-09-15 — đã xử lý P0 trong app:** pipeline compact giữ `null`; sinh tag không còn tự gắn ít natri/ít kali khi thiếu dữ liệu; lọc huyết áp/CKD và giới hạn natri loại mục chưa có số; sắp xếp natri đẩy giá trị thiếu xuống cuối. Đã rà thêm trang món ăn/thực phẩm, cảnh báo sức khỏe, biểu đồ, thẻ điểm và phép cộng dinh dưỡng món ăn để không hiển thị/tính thiếu khoáng chất thành 0. `scripts/check-food-data.mjs` có regression QA theo từng trường fiber/natri/kali và tag liên quan; kết quả hiện tại `nutrientNullabilityErrors: 0` trên 1.000 mục. Build, `astro check`, `qa:food-data`, `qa:recipes`, `qa:data-consistency` và `test:tools` đều đạt. Số trường thiếu vẫn là thiếu dữ liệu, chưa được tự điền bằng nguồn khác; các bất đồng provenance ở mục sữa và các lô nguồn khác vẫn chờ xử lý riêng.

### 3. Cùng một mã nguồn không bảo đảm cùng một định nghĩa hay cùng trạng thái

- Báo cáo đối chiếu trước đã chỉ ra các tên dễ khớp nhầm như “bơ” (trái bơ hay bơ/dầu béo), “đậu dừa/đậu đũa” và các trường hợp sống/khô/chín. Một tên gần giống hoặc cùng nhóm thực phẩm không đủ điều kiện thay dữ liệu.
- Mã số không ổn định giữa các phiên bản nguồn: ở cổng hiện hành mã `4123` là “Men bia, khô”, còn bộ trích xuất Bảng Việt Nam 2007 nội bộ dùng mã `4123` cho “Nấm hương tươi”. Vì vậy cấm cross-match chỉ theo code; khóa mapping tối thiểu phải là `(sourceId, phiên bản/ấn bản, code)` rồi kiểm thêm tên, trạng thái và basis.
- So khớp theo tên Việt chính xác (không dựa code) tìm được 144 tên duy nhất chung giữa snapshot cổng hiện hành 853 dòng và bảng trích xuất 2007 526 dòng. Có 5 cặp cùng tên có chênh lệch khoáng chất ≥100 mg/100 g: dưa chuột hộp (Na 1208 ↔ 154 mg), nước ép cà chua (Na 269 ↔ 10 mg), nghệ tươi (K 587 ↔ 356 mg), sữa chua vớt béo (K 339 ↔ 173 mg), sữa bột tách béo (Ca 1400 ↔ 1246 mg). Đây là **ứng viên bất đồng**, chưa kết luận bên nào sai; cần kiểm trạng thái ráo nước/công thức, đơn vị, phiên bản và cách lấy mẫu. Hai ví dụ natri ở đồ hộp/nước ép có khả năng khác công thức hoặc có/không thêm muối nên không thể coi là cặp tương đương chỉ từ nhãn.
- Bảng 2007 đã có các dòng trích xuất tên lỗi/thiếu và mã trùng; báo cáo cross-reference 2026-09-12 đã ẩn các mapping suy đoán, nhưng điều đó chỉ làm sạch lớp mapping hiển thị, chưa xác nhận chất lượng toàn bộ giá trị nguồn.
- `sourceId` hiện đặt ở cấp food record trong khi code có thể giữ nutrient cũ, lấy thêm từng trường từ VDD, dùng số USDA hoặc ước tính. Một nguồn đơn ở cấp món không mô tả được provenance hỗn hợp này.

## Chuẩn đối chiếu cần áp dụng

1. **FAO/INFOODS làm chuẩn quy trình, không phải nguồn thay số:** mô tả thực phẩm rõ; food matching theo loài/giống, phần ăn được, sống/chín/khô, phương pháp chế biến; chuẩn đơn vị/mẫu số; giữ nguồn, loại dữ liệu (phân tích/tính toán/ước tính), phương pháp và quality indicator ở cấp nutrient. So sánh giữa bảng quốc gia chỉ có ý nghĩa sau khi khớp các thuộc tính này.
2. **Bảng thành phần thực phẩm Việt Nam 2007:** ưu tiên làm nguồn địa phương cho thực phẩm Việt đúng dòng/mã/trạng thái và 100 g phần ăn được; là ấn bản cũ và cũng phải giữ cảnh báo khi thiếu phương pháp, mẫu hoặc có lỗi trích xuất/OCR. Không dùng dòng nguyên liệu khô để thay cơm chín/món chế biến.
3. **Cổng tra cứu hiện hành của Viện:** hữu ích vì độ phù hợp bối cảnh Việt và có mã món, nhưng cần lưu ảnh chụp dữ liệu, ngày truy cập, phiên bản nếu có, tên song ngữ, basis, trường bị thiếu và mọi bất nhất nội bộ. Không tự động nâng `source_verified` chỉ vì trùng mã/cổng chính thức.
4. **USDA FoodData Central:** dùng để đối chiếu/điền thiếu khi mô tả khớp; phân biệt Foundation/SR Legacy/FNDDS với Branded. Dữ liệu Mỹ là close match, không phải đại diện mặc định cho giống, nhãn hàng hay công thức Việt. Branded chỉ dùng đúng sản phẩm/nhãn/khẩu phần.
5. **Nhãn nhà sản xuất:** nguồn ưu tiên cho sản phẩm đóng gói cụ thể, ghi thương hiệu, SKU/phiên bản nhãn, khẩu phần/định lượng, ngày chụp; không đại diện cho toàn nhóm như “sữa tươi” hay “mì gói”.

## Lộ trình chuẩn hóa đề xuất

| Giai đoạn | Ưu tiên | Công việc và đầu ra |
| --- | --- | --- |
| P0 — Khóa sai lệch có nguy cơ | Ngay | Trước audit số mới, sửa lỗi `null → 0` trong API/filter và regression test cho CKD/tăng huyết áp; hạ trạng thái mục sữa/natri đang trộn nguồn; rà nước mắm/natri, sản phẩm đóng gói, thực phẩm theo dõi kali/phospho và carb dùng tính GL. Chỉ mục có sai lệch xác nhận mới sửa; bất đồng chưa giải quyết giữ nguyên hai nguồn, hiện “chưa đủ dữ liệu” và không phân loại lâm sàng. |
| P1 — Xây provenance ở cấp chất dinh dưỡng | Trước khi mở rộng data | Thêm `nutrientSources`/equivalent cho từng field: source ID + record/code, value gốc, đơn vị, basis, food-state/matching grade, analytical/calculated/borrowed/label/estimated, truy xuất URL/file/hash, ngày truy cập, quality status, reviewer. Biểu diễn `null/unknown` tách biệt khỏi `0`. |
| P2 — Chuẩn hóa danh tính thực phẩm | Theo nhóm | Chuẩn taxonomy/species/cut/brand, raw/cooked/dried, edible portion, cooking yield; tách synonym địa phương thành alias, không nhập alias làm bản ghi thực phẩm khác; mapping mỗi slug ↔ mã nguồn với grade exact/close/ingredient-only/no-match và lý do. |
| P3 — Kiểm toán theo lô 100–150 mục | Tuần tự, bắt đầu nhóm nguy cơ cao | 1) thực phẩm cơ bản/milk, grains, oils; 2) nước mắm/gia vị/đồ chế biến; 3) đạm động vật/hải sản; 4) rau quả/đậu/hạt; 5) món chín/đồ uống/nhãn hàng. Mỗi lô chạy phát hiện outlier + so khớp nguồn; chuyên gia duyệt các trường bất đồng trước khi nhập. |
| P4 — Kiểm tra định lượng và tính nội bộ | Mỗi lô | Đối chiếu năng lượng với macro bằng hệ số thích hợp; tính phần ăn được, mẫu số 100 g/100 ml, nồng độ sau hút nước/mất nước; phát hiện Na/K/P, đường/chất xơ, vitamin và macro ngoại lai; kiểm tổng carb so với available carb và nguồn định nghĩa; bắt chênh lệch cùng mã giữa snapshot/app. Không tự ép các công thức năng lượng khác hệ về bằng nhau nếu bảng dùng hệ số riêng—ghi quy ước trước. |
| P5 — Sửa và kiểm thử có kiểm soát | Sau duyệt từng lô | Tách dữ liệu nguồn gốc không chỉnh sửa khỏi canonical app values; chỉ cập nhật field có quyết định duyệt; tạo test regression cho từng ca lỗi (bao gồm sữa 10001), QA về completeness/provenance/mapping và snapshot diff. Giữ audit trail và rollback theo batch. |
| P6 — Công khai mức tin cậy | Trước phát hành | Giao diện ghi “nguồn và ngày”, mô tả trạng thái thực phẩm, phân biệt số phân tích/nhãn/ước tính; không hiển thị huy hiệu “đã xác minh” nếu chỉ khớp tên/mã hoặc đã mượn một phần dữ liệu; thêm đường báo lỗi và ngày rà soát. |

## Điều kiện hoàn thành và không được làm

- Mỗi field có số phải truy được tới nguồn, trạng thái thực phẩm, đơn vị và cơ sở 100 g/100 ml; không còn `source_verified` ở cấp món nếu một số dinh dưỡng trọng yếu chưa xác định nguồn.
- Mục đối chiếu phải có độ khớp mô tả; `close_match` cần review, `ingredient_only` không được ghi thành số món thành phẩm.
- Không lấy trung bình giữa các nguồn để “hòa giải” bất đồng; không tự chọn số thấp/cao hơn khi chưa biết vì sao khác; không diễn giải thiếu dữ liệu thành 0.
- Không thay USDA vào toàn bộ dữ liệu Việt; cũng không mặc định số liệu Viện đúng chỉ do nguồn chính thức. Nguồn được chấm theo từng trường, tính đại diện, phương pháp, độ mới và độ khớp thực phẩm.
- Kiểm toán 1.000 mục cần kết thúc bằng danh sách unresolved có chủ sở hữu và lý do; các số chưa kiểm chứng phải hiện là ước tính/đang rà soát, không tuyên bố thư viện đã chuẩn hóa hoàn toàn.

## Nguồn chuẩn tham khảo

- Viện Dinh dưỡng, [Tra cứu giá trị dinh dưỡng thực phẩm](https://viendinhduong.vn/vi/cong-cu-va-tien-ich/gia-tri-dinh-duong-thuc-pham) — mã 10001 hiển thị 74 kcal và natri 352,5 mg/100 g trong lần rà 2026-09-15.
- Viện Dinh dưỡng, [Chế độ ăn giảm muối và các bệnh mạn tính không lây](https://viendinhduong.vn/vi/article/tin-tuc/che-do-an-giam-muoi-va-cac-benh-man-tinh-khong-lay-67e7c906c862b932c34afe07) — bài viết dẫn bảng 2007, ghi natri sữa bò tươi 380 mg/100 g; đây là bằng chứng bất nhất cần truy nguồn, không phải bằng chứng độc lập xác nhận lỗi.
- [FAO/INFOODS — Standards & Guidelines](https://www.fao.org/infoods/infoods/standards-guidelines/en/) và [Data Quality](https://www.fao.org/infoods/infoods/standards-guidelines/data-quality/en/) — kiểm dữ liệu trước xuất bản, khớp thực phẩm, chuyển đổi đơn vị/mẫu số, chỉ báo chất lượng.
- FAO, [Food Composition Data: production, management and use](https://www.fao.org/4/y4705e/y4705e06.htm) — provenance, mô tả mẫu, phương pháp, trạng thái thực phẩm và giới hạn đối chiếu giữa bảng quốc gia.
- [USDA FoodData Central — whole milk FDC 171265](https://fdc.nal.usda.gov/food-details/171265/nutrients) — SR Legacy, whole milk 3.25% kiểu Mỹ; chỉ dùng làm comparator có khác biệt mẫu, không thay thẳng dữ liệu sữa Việt.
- [Bảng thành phần thực phẩm Việt Nam 2007 (bản lưu tại FAO)](https://www.fao.org/fileadmin/templates/food_composition/documents/pdf/VTN_FCT_2007.pdf) — nguồn lịch sử địa phương cần kiểm lại theo mã/dòng và chất lượng trích xuất.
