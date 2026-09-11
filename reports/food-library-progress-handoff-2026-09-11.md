# Tiến trình bổ sung thư viện thực phẩm — 2026-09-11

## Mục tiêu

- Bổ sung và chuẩn hóa dữ liệu thực phẩm quen thuộc ở Việt Nam.
- Ưu tiên nguồn chắc, đặc biệt công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng.
- Tránh tạo slug/tên trùng; nếu thực phẩm đã có trong thư viện thì cập nhật qua `vddSourceReplacements`.
- Không tự điền số khi nguồn không khớp rõ hoặc món biến thiên nhiều theo công thức/nhãn hàng.

## Đã làm trong phiên này

- Chạy `npm run qa:food-data` trước khi sửa: không có duplicate slug/display name, không thiếu core nutrients.
- Cập nhật thêm 6 thực phẩm đã có trong app bằng nguồn Viện Dinh dưỡng:
  - `rau-dan` ← mã `4073` Rau giền đỏ, tươi.
  - `trung-cut` ← mã `9007` Trứng chim cút.
  - `dau-phap` ← mã `3017` Lạc hạt, khô.
  - `hat-bi` ← mã `3028` Hạt bí đỏ, rang.
  - `hat-huong-duong` ← mã `3041011` Hạt hướng dương rang.
  - `dau-ha-lan` ← mã `4031` Đậu Hà Lan, quả, tươi.
- Cập nhật nhật ký nguồn tại `reports/vdd-food-nutrition-crosscheck-2026-09-10.md`.

## Batch ngay trước phiên này

Đã cập nhật 18 mục nguồn Viện trong `src/data/food-vdd-source-replacements.ts`:

- `banh-pho-chin`, `rau-muong`, `tao`, `bo-trai`, `sua-dac`, `hat-tieu`, `moc-nhi`.
- `dau-que`, `sup-lo`, `sup-lo-trang`, `bap-cai-thao`, `mang-tay`, `man-chua`, `chom-chom`, `mang-cut`, `dau-tay`, `nho`, `nuoc-dua`.

## Tệp chính liên quan

- `src/data/food-vdd-source-replacements.ts`: lớp cập nhật nguồn Viện cho thực phẩm đã có.
- `src/data/foods-extra9.ts`: các thực phẩm mới thêm riêng từ nguồn Viện.
- `src/data/nutrition.ts`: hợp nhất foods, extraFoods, bulkFoods và áp replacement.
- `reports/vdd-food-nutrition-crosscheck-2026-09-10.md`: nhật ký đối chiếu nguồn.
- `test-results/food-data-qa.json`: kết quả QA dữ liệu thực phẩm.

## Cách tiếp tục

1. Chạy `npm run qa:food-data` để kiểm duplicate và vùng cần rà lại.
2. Tải dữ liệu từ endpoint Viện:
   `https://viendinhduong.vn/api/fe/foodNatunal/getPageFoodData?page=1&pageSize=3000&energy=0`
3. Với thực phẩm đã có slug: thêm vào `vddSourceReplacements`, ghi rõ `sourceName`, `sourceCode`, `sourceNote`, `sourceConfidence`, `hasCompleteCoreMacros`.
4. Với thực phẩm chưa có slug và có định nghĩa rõ: thêm vào `foods-extra9.ts`, tránh tên/slug trùng.
5. Chạy `npm run build`, `npm run qa`, `npm run qa:food-data`.
6. Chỉ commit khi cả build và QA pass.

## Ưu tiên tiếp theo

- Nhóm rau/củ/quả còn có nguồn Viện khớp rõ nhưng chưa phủ.
- Nhóm trứng/sữa/hạt/đậu đơn thành phần.
- Nhóm cá/hải sản tươi phổ biến, nhưng chỉ khi tên nguồn khớp rõ với slug.
- Không ưu tiên món chế biến như xúc xích, lạp xưởng, bánh kẹo, đồ uống pha chế nếu chưa có nhãn/công thức cụ thể.

## Cảnh báo dữ liệu

- Nhiều món chế biến trong app vẫn là `recipe-estimate-v1`; không nên chuyển thành `source_verified` nếu chỉ có nguồn gần đúng.
- Một số mã nguồn Viện có tên cũ/khác chính tả phổ biến, ví dụ `rau giền`; cần ghi chú khi map sang tên app `rau dền`.
- Với nhóm sữa/đồ uống đóng gói, ưu tiên nhãn sản phẩm khi tư vấn cá thể vì công thức thương mại thay đổi.

## Tiếp tục trong phiên sau bàn giao

- Thêm 9 thực phẩm nguồn Viện vào `src/data/foods-extra10.ts`: củ ấu, củ sắn dây, khoai nước, hạt dưa hấu rang, hải sâm, hến, lươn, trai nước ngọt và tu hài.
- Chuẩn hóa nguồn Viện cho trứng vịt lộn, lòng trắng/lòng đỏ trứng gà và bề bề trong `food-vdd-source-replacements.ts`.
- Thay proxy cua bể/cá lóc bằng hến/lươn trong các công thức liên quan; bản thân các món vẫn là ước tính theo công thức.
- Không nhập các mục nguồn thiếu macro cốt lõi (ví dụ củ dong, khoai riềng, rạm, rươi) để tránh suy diễn số liệu.

### Kết quả kiểm tra phiên tiếp tục

- `npm run build`: pass; tạo trang tĩnh cho cả 9 slug mới.
- `npm run qa:food-data`: 800 thực phẩm, 0 slug trùng, 0 tên hiển thị trùng, 0 mục thiếu macro cốt lõi.
- `npm run qa:data-consistency`: pass cho `foods-slim`, `foods-full`, search index và dữ liệu Việt Nam xuất ra.
- `npm run qa`: fail ở bộ kiểm tra liên kết nội bộ toàn site. Log báo các route như `/thuc-pham`, `/mon-an`, `/kien-thuc-dinh-duong` không tồn tại dù `dist/<route>/index.html` đã có sau build; đây là lỗi kiểm tra hạ tầng cần xử lý ở một phạm vi riêng, không phát sinh từ batch thực phẩm này.

## Mở rộng theo lộ trình >900

- Thiết lập chỉ mục alias có kiểm duyệt tại `src/data/food-search-alias-index.ts`; alias chỉ dùng cho tên vùng miền/cùng thực phẩm, kèm ghi chú phân biệt loài hoặc phần ăn.
- Batch rau/củ/quả theo giống và trạng thái thêm 15 mục, đưa mốc dự kiến từ 800 lên 815 sau build.
- Lộ trình sáu batch tiếp theo, mỗi batch 15 mục, đặt mục tiêu 905 thực phẩm. Xem `reports/food-library-expansion-roadmap-2026-09-11.md` để tiếp tục đúng thứ tự và tiêu chí kiểm duyệt.

## Batch 12 — đậu, hạt và hiệu chỉnh phân loại (2026-09-11)

- Thêm 15 mục nguồn Viện Dinh dưỡng: đậu đũa hạt khô, đậu tương hạt khô, đậu tây trắng hạt khô, hạt dẻ tươi, hạt mít tươi, hạt điều khô chiên dầu, đậu phụ luộc/nướng, hạt sen tươi luộc, bột đậu xanh, đậu ngự luộc và hạt óc chó/macca/dẻ cười/hạnh nhân rang.
- Chuẩn hóa các mục đã có để không nhân bản cùng một thực phẩm: `dau-co-ve-hat` → Đậu cô ve hạt khô; `dau-ha-lan` → Đậu Hà Lan hạt khô; `hat-bi-rang` → Hạt bí đỏ rang; `me-vung` → Vừng rang. Tất cả đều dùng đúng trạng thái nguồn.
- Sửa quy tắc nguồn bị lệch slug của hạt bí và hạt hướng dương; gộp hai quy tắc `me-vung` thành một quy tắc nguồn. Không dùng alias “hạt dưa” cho hạt hướng dương vì đó là hạt dưa hấu.
- `dua` được đổi tên thành Cùi dừa già tươi và chuyển từ nhóm Trái cây sang Hạt theo phạm vi dữ liệu nguồn; vẫn tìm được bằng dừa/cơm dừa/cùi dừa. `dau-phu` được đối chiếu đầy đủ theo mục đậu phụ sống.
- Bổ sung alias gạo lật cho gạo lứt tẻ sống. Sau kiểm tra: 830 thực phẩm, 0 slug trùng, 0 tên hiển thị trùng, 0 alias cần cảnh báo, 0 mục thiếu macro lõi.

## Batch 13 — trái cây theo giống và trạng thái (2026-09-11)

- Thêm 15 mục nguồn Viện Dinh dưỡng: dưa bở, dưa hồng, hồng đỏ, mận tím, mít dai, muỗm/quéo, táo mèo/sơn tra, quả trứng gà/lê ki ma, bơ vỏ tím, trám xanh/đen, quả cọ, mơ khô, nhãn khô và vải khô.
- Không gộp dưa bở với dưa gang/dưa lưới, hồng đỏ với hồng giòn, trám xanh với trám đen, hoặc dạng khô với quả tươi. `bo-trai` được chuẩn hóa thành Bơ vỏ xanh tươi vì đó là đúng mục nguồn đang áp dụng.
- Alias đã kiểm duyệt gồm muỗm ↔ quéo, táo mèo ↔ sơn tra, quả trứng gà ↔ lê ki ma/lekima/mít tu na và nhãn khô ↔ long nhãn. Không thêm `trứng gà` đơn lẻ cho quả trứng gà.

## Batch 14 — hải sản theo loài và trạng thái (2026-09-11)

- Thêm 15 mục: ốc đá/vặn, ruốc cá quả, ruốc tôm, trùng trục, sò huyết luộc, ốc móng tay luộc, ốc hương luộc, ốc len hấp, sò dương luộc, sò điệp luộc/nướng, sò lông hấp và cá chim tươi không phân loài.
- Mỗi trạng thái luộc/hấp/nướng có `basis` và cảnh báo không áp dụng cho món thêm bơ, mỡ hành, phô mai hoặc sốt. Cá chim không phân loài được giữ riêng, không ghi đè cá chim trắng/đen.
- `cua-be-hai-phong` được đổi tên hiển thị thành Cua bể tươi và đối chiếu mã 8033; alias Cua bể Hải Phòng được giữ để tìm kiếm nhưng không xem là xuất xứ đã được nguồn xác nhận.
- Kiểm tra sau Batch 14: 860 thực phẩm, 0 slug trùng, 0 tên hiển thị trùng, 0 alias cần cảnh báo, 0 mục thiếu macro lõi; `qa:data-consistency` đạt.

## Batch 15 — đạm động vật, phủ tạng và trứng (2026-09-11)

- Thêm 15 mục có đủ bốn macro từ cổng Viện Dinh dưỡng: thịt gà tây, thịt trâu, bầu dục bò, gan vịt, lưỡi bò, lòng già lợn, tim bò, tiết bò/lợn tươi, lòng gà cả bộ, lòng đỏ/lòng trắng trứng vịt, trứng cá muối, trứng gà công nghiệp và bột trứng.
- Tên vùng miền được thêm có kiểm soát: bầu dục ↔ cật; lợn ↔ heo; tiết ↔ huyết. Lòng già được tách khỏi lòng non, lòng gà cả bộ được tách khỏi mề/tim/gan riêng lẻ, còn phần trứng vịt không gộp với phần trứng gà.
- Rà soát catalog hiện có phát hiện `cat-heo` chính là bầu dục lợn. Không tạo bản ghi trùng: mục cũ được chuẩn hóa thành **Bầu dục lợn tươi**, gắn mã VDD `7030` và cập nhật toàn bộ macro/vi chất; mục mới thay thế là **Bột trứng** mã `9011`.
- `long-heo` được đổi tên hiển thị thành **Lòng non heo**. Alias sai `pork tripe` bị loại vì tripe là dạ dày, không phải ruột non; nội dung phần ăn cũng nêu rõ không phải lòng già hoặc dạ dày.
- Kiểm tra sau Batch 15: 875 thực phẩm ở `foods-slim`, `foods-full` và search index; 0 slug/tên hiển thị trùng, 0 thiếu macro lõi, 0 cảnh báo alias; `qa:data-consistency` đạt. Lộ trình được mở rộng tiếp đến mốc 1.000 thực phẩm đã kiểm duyệt.

## Batch 16 — ngũ cốc, củ và bột theo trạng thái (2026-09-11)

- Thêm 15 mục có đủ macro lõi từ Viện Dinh dưỡng: kê hạt sống; ngô tẻ/nếp nướng; bỏng ngô; xôi nếp cẩm; củ sắn nướng; củ súng bóc vỏ khô; khoai lang luộc/nướng; khoai sọ luộc; khoai tây khô/lát chiên; sắn củ khô; bột khoai lang và bột sắn.
- Tách rõ nguyên liệu tươi, luộc, nướng, khô, bột và sản phẩm chiên. Không thêm alias “bắp rang bơ”, “bột năng” hay tên topping cho mục nguồn không xác định công thức/nhãn.
- Kiểm tra sau Batch 16: 890 thực phẩm ở cả ba API; 0 slug/tên hiển thị trùng, 0 thiếu macro lõi, 0 cảnh báo alias; `qa:data-consistency` đạt.

## Batch 17–24 — hoàn thành mốc 1.000 thực phẩm (2026-09-11)

- Batch 17 thêm 15 thực phẩm nền bếp có mô tả nguồn rõ: dưa chuột/dứa hộp, cá hộp, bột cà ri, gừng/nghệ/ớt bột, Magi, mắm tép chua, tương ngô/nếp, mù tạt và bột chiên xù. Không gộp đồ hộp với nguyên liệu tươi hoặc gia vị với món nấu.
- Batches 18–24 bổ sung 95 mục có bốn macro lõi từ Viện Dinh dưỡng, phủ trái cây, rau/nấm theo trạng thái, phủ tạng luộc, đậu/hạt, sữa/bánh kẹo và đồ uống có định danh. Các mục được phân nhóm theo nhóm nguồn; trạng thái tươi/sống, khô, luộc/hấp/nướng/chiên và chế biến được tách thành bản ghi riêng.
- Đợt rà soát cuối phát hiện một tên trùng là `Nước ép dưa hấu`; mục đó đã được thay bằng `Kẹo dừa mềm` mã `12018`, nên không làm trùng mục cũ. Alias địa phương được bổ sung kiểm soát cho lợn ↔ heo, lạc ↔ đậu phộng; không thêm tên gần nghĩa cho thực phẩm khác.
- Kết quả chốt: `foods-slim`, `foods-full` và search index đều có **1.000** thực phẩm; 0 duplicate slug/display name, 0 thiếu macro lõi, 0 alias warning. `npm run build`, `qa:food-data` và `qa:data-consistency` đều đạt.

## Rà soát sau mốc 1.000 — chuẩn hóa phân nhóm và tên tìm kiếm (2026-09-11)

- Loại `Cải soong, tươi` khỏi batch nguồn vì trùng nghĩa với `Xà lách xoong` tươi đã có; thay bằng `Hạt ý dĩ` (mã Viện Dinh dưỡng 13072) để vẫn giữ đúng 1.000 thực phẩm.
- Chuyển các trường hợp phân nhóm theo bản chất thực phẩm: nấm thường → Nấm, thìa là → Rau gia vị, củ/quả dùng làm rau → Củ quả, men bia khô → Gia vị, bánh phồng tôm rán → Bánh kẹo; tách đậu khỏi hạt khi tên là đậu/bột đậu/tào phớ.
- Chuẩn hóa tên hiển thị `Rau dền đỏ, luộc`, vẫn giữ `rau giền đỏ` làm alias theo cách ghi của nguồn; bổ sung alias tìm kiếm `hạt ý dĩ`/`bo bo`, `Magi`/`Maggi`, `nước quít`/`nước quýt`, `cà ri bột`/`bột cà ri`, `vừng`/`mè` và `ChocoPie`.

## Rà soát sâu chống trùng và sửa alias (2026-09-11)

- Lớp dữ liệu xuất bản đã loại 12 slug trùng cùng thực phẩm, chuyển công thức tham chiếu sang mục chuẩn và thay đúng 12 vị trí bằng thực phẩm có đủ macro từ cổng Viện Dinh dưỡng để giữ mốc 1.000.
- Các cặp được hợp nhất gồm ba chỉ, cam tươi, sữa đặc có đường, bò xay/băm, mộc nhĩ/nấm mèo, nấm rơm, ngò gai/mùi tàu, ngò om/rau ngổ, giá đỗ, súp lơ xanh và thịt nguội.
- Gỡ ba alias sai có thể dẫn tìm kiếm tới thực phẩm khác: `bột ngọt` khỏi hạt nêm, `paté gan` khỏi Paté sông và `ca bong` khỏi cà tím dẹp.
- Sau hợp nhất, API vẫn có 1.000 thực phẩm, 0 slug trùng và 0 tên hiển thị trùng. Các từ khóa còn trả nhiều kết quả chỉ được giữ khi có trạng thái, đơn vị, giống hoặc sản phẩm khác nhau; chúng được theo dõi trong báo cáo audit riêng.
