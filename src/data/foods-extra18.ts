import type { Food } from "./nutrition";

const sourceId = "vdd-food-portal-2026";
const sourceNote = "Số liệu theo công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng; chỉ áp dụng cho đúng tên, trạng thái và đơn vị ghi trên từng mục.";

// Batch 18–24: các mục nguồn còn lại được chọn sau khi yêu cầu đủ năng lượng, protein, carbohydrate và chất béo.
const sourceRows = [
  { code: "5002", name: "Cam, tươi", sourceCategory: "Quả chín", nutrients: { energyKcal: 43, proteinG: 0.9, carbG: 9.74, fatG: 0.06 } },
  { code: "5003", name: "Chanh, tươi", sourceCategory: "Quả chín", nutrients: { energyKcal: 29, proteinG: 0.9, carbG: 5.96, fatG: 0.14 } },
  { code: "5006", name: "Chuối tây, tươi", sourceCategory: "Quả chín", nutrients: { energyKcal: 66, proteinG: 0.9, carbG: 15, fatG: 0.3 } },
  { code: "5015", name: "Dứa tây, tươi", sourceCategory: "Quả chín", nutrients: { energyKcal: 40, proteinG: 0.5, carbG: 9.23, fatG: 0.07 } },
  { code: "5016", name: "Đào, tươi", sourceCategory: "Quả chín", nutrients: { energyKcal: 37, proteinG: 0.9, carbG: 7.8, fatG: 0.2 } },
  { code: "5023", name: "Lê, tươi", sourceCategory: "Quả chín", nutrients: { energyKcal: 48, proteinG: 0.7, carbG: 10.8, fatG: 0.2 } },
  { code: "5024", name: "Lựu, tươi", sourceCategory: "Quả chín", nutrients: { energyKcal: 79, proteinG: 0.6, carbG: 18.85, fatG: 0.15 } },
  { code: "5031", name: "Mơ, tươi", sourceCategory: "Quả chín", nutrients: { energyKcal: 50, proteinG: 0.9, carbG: 11.03, fatG: 0.27 } },
  { code: "5034", name: "Na, tươi", sourceCategory: "Quả chín", nutrients: { energyKcal: 69, proteinG: 1.6, carbG: 15.1, fatG: 0.2 } },
  { code: "5037", name: "Nho ngọt, tươi", sourceCategory: "Quả chín", nutrients: { energyKcal: 71, proteinG: 0.4, carbG: 16.99, fatG: 0.11 } },
  { code: "5040", name: "Ổi, quả chín, tươi", sourceCategory: "Quả chín", nutrients: { energyKcal: 61, proteinG: 0.6, carbG: 12.94, fatG: 0.76 } },
  { code: "5051", name: "Táo tây, tươi", sourceCategory: "Quả chín", nutrients: { energyKcal: 50, proteinG: 0.5, carbG: 11.71, fatG: 0.09 } },
  { code: "5052", name: "Vải, tươi", sourceCategory: "Quả chín", nutrients: { energyKcal: 49, proteinG: 0.7, carbG: 10.75, fatG: 0.35 } },
  { code: "5055", name: "Xoài chín, tươi", sourceCategory: "Quả chín", nutrients: { energyKcal: 69, proteinG: 0.6, carbG: 15.9, fatG: 0.3 } },
  { code: "5056", name: "Quả kiwi, tươi", sourceCategory: "Quả chín", nutrients: { energyKcal: 68, proteinG: 1.14, carbG: 14.66, fatG: 0.52 } },
  { code: "4003002", name: "Bí ngô, luộc", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 35, proteinG: 0.34, carbG: 7.75, fatG: 0.34 } },
  { code: "4004002", name: "Cà bát, luộc", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 36, proteinG: 1.52, carbG: 7.22, fatG: 0.13 } },
  { code: "4008", name: "Củ cà rốt, khô", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 330, proteinG: 9.2, carbG: 70, fatG: 1.5 } },
  { code: "4009002", name: "Cà tím, luộc", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 37, proteinG: 1.27, carbG: 7.59, fatG: 0.13 } },
  { code: "13072", name: "Hạt ý dĩ", sourceCategory: "Gia vị, nước chấm", nutrients: { energyKcal: 358, proteinG: 14.2, carbG: 67.2, fatG: 3.6 } },
  { code: "4020002", name: "Củ cải đỏ, luộc", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 63, proteinG: 1.51, carbG: 13.6, fatG: 0.23 } },
  { code: "4029002", name: "Đậu cô ve, luộc", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 85, proteinG: 5.38, carbG: 15.38, fatG: 0.22 } },
  { code: "4030002", name: "Đậu đũa, luộc", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 68, proteinG: 6.12, carbG: 10.51, fatG: 0.2 } },
  { code: "4036002", name: "Giá đậu xanh, luộc", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 58, proteinG: 6.04, carbG: 8.02, fatG: 0.22 } },
  { code: "4042", name: "Hẹ lá, tươi", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 21, proteinG: 2.2, carbG: 2.49, fatG: 0.21 } },
  { code: "4054", name: "Mướp, tươi", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 18, proteinG: 0.9, carbG: 3.36, fatG: 0.14 } },
  { code: "4061", name: "Ớt đỏ to, tươi", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 31, proteinG: 0.99, carbG: 6.04, fatG: 0.3 } },
  { code: "4063", name: "Ớt xanh to, tươi", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 31, proteinG: 1.3, carbG: 6.07, fatG: 0.13 } },
  { code: "4066002", name: "Rau bí, luộc", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 27, proteinG: 2.84, carbG: 3.58, fatG: 0.11 } },
  { code: "4070", name: "Rau đay, tươi", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 31, proteinG: 2.8, carbG: 4.52, fatG: 0.18 } },
  { code: "4073002", name: "Rau dền đỏ, luộc", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 48, proteinG: 3.37, carbG: 7.96, fatG: 0.31 } },
  { code: "4097", name: "Củ su hào, khô", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 311, proteinG: 20, carbG: 54.6, fatG: 1.4 } },
  { code: "4101", name: "Thìa là, tươi", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 47, proteinG: 2.6, carbG: 6.94, fatG: 0.96 } },
  { code: "4123", name: "Men bia, khô", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 367, proteinG: 52.5, carbG: 32, fatG: 3.2 } },
  { code: "4130", name: "Nấm thường, tươi", sourceCategory: "Rau, quả, củ dùng làm rau", nutrients: { energyKcal: 48, proteinG: 4.6, carbG: 5.7, fatG: 0.8 } },
  { code: "7040002", name: "Gan gà, luộc", sourceCategory: "Thịt và sản phẩm chế biến", nutrients: { energyKcal: 155, proteinG: 25.28, carbG: 2.78, fatG: 4.72 } },
  { code: "7041002", name: "Gan lợn, luộc", sourceCategory: "Thịt và sản phẩm chế biến", nutrients: { energyKcal: 150, proteinG: 24.42, carbG: 2.6, fatG: 4.68 } },
  { code: "7043006", name: "Thịt bò, gân, kho/om", sourceCategory: "Thịt và sản phẩm chế biến", nutrients: { energyKcal: 175, proteinG: 21.05, carbG: 7.02, fatG: 7.02 } },
  { code: "7044002", name: "Lưỡi bò, luộc", sourceCategory: "Thịt và sản phẩm chế biến", nutrients: { energyKcal: 234, proteinG: 19.43, carbG: 0.29, fatG: 17.29 } },
  { code: "7045002", name: "Lưỡi lợn, luộc", sourceCategory: "Thịt và sản phẩm chế biến", nutrients: { energyKcal: 254, proteinG: 20.29, carbG: 2, fatG: 18.29 } },
  { code: "7048002", name: "Mề gà, luộc", sourceCategory: "Thịt và sản phẩm chế biến", nutrients: { energyKcal: 127, proteinG: 27.31, carbG: 0.77, fatG: 1.67 } },
  { code: "7049002", name: "Óc bò, luộc", sourceCategory: "Thịt và sản phẩm chế biến", nutrients: { energyKcal: 134, proteinG: 9.78, carbG: 0.54, fatG: 10.33 } },
  { code: "7050002", name: "Óc lợn, luộc", sourceCategory: "Thịt và sản phẩm chế biến", nutrients: { energyKcal: 134, proteinG: 9.78, carbG: 0.43, fatG: 10.33 } },
  { code: "7054002", name: "Tai lợn, luộc", sourceCategory: "Thịt và sản phẩm chế biến", nutrients: { energyKcal: 126, proteinG: 21, carbG: 1.3, fatG: 4.1 } },
  { code: "7055002", name: "Tim bò, luộc", sourceCategory: "Thịt và sản phẩm chế biến", nutrients: { energyKcal: 131, proteinG: 22.06, carbG: 0.88, fatG: 4.41 } },
  { code: "7057002", name: "Tim lợn, luộc", sourceCategory: "Thịt và sản phẩm chế biến", nutrients: { energyKcal: 138, proteinG: 22.21, carbG: 1.76, fatG: 4.71 } },
  { code: "7058002", name: "Tiết bò, luộc", sourceCategory: "Thịt và sản phẩm chế biến", nutrients: { energyKcal: 75, proteinG: 17.82, carbG: 0.4, fatG: 0.2 } },
  { code: "7085002", name: "Thịt lợn nạc thăn, luộc", sourceCategory: "Thịt và sản phẩm chế biến", nutrients: { energyKcal: 100, proteinG: 19.49, carbG: 0.03, fatG: 2.46 } },
  { code: "7108002", name: "Thịt gà, ta, chân, đùi, luộc", sourceCategory: "Thịt và sản phẩm chế biến", nutrients: { energyKcal: 214, proteinG: 20, carbG: 0.2, fatG: 14.3 } },
  { code: "7123002", name: "Tiết ngan, luộc", sourceCategory: "Thịt và sản phẩm chế biến", nutrients: { energyKcal: 50, proteinG: 12.17, carbG: 0.06, fatG: 0.06 } },
  { code: "8055", name: "Bánh phồng tôm, rán", sourceCategory: "Thủy sản và sản phẩm chế biến", nutrients: { energyKcal: 676, proteinG: 1.6, carbG: 34.1, fatG: 59.2 } },
  { code: "3004", name: "Đậu đen, hạt, khô", sourceCategory: "Hạt, quả giàu đạm, béo và sản phẩm chế biến", nutrients: { energyKcal: 341, proteinG: 24.2, carbG: 57.3, fatG: 1.7 } },
  { code: "3009", name: "Đậu trứng cuốc, hạt, khô", sourceCategory: "Hạt, quả giàu đạm, béo và sản phẩm chế biến", nutrients: { energyKcal: 340, proteinG: 25.8, carbG: 54.8, fatG: 2 } },
  { code: "3011", name: "Hạt dẻ to, khô", sourceCategory: "Hạt, quả giàu đạm, béo và sản phẩm chế biến", nutrients: { energyKcal: 652, proteinG: 18, carbG: 12.2, fatG: 59 } },
  { code: "3013", name: "Hạt dẻ, khô", sourceCategory: "Hạt, quả giàu đạm, béo và sản phẩm chế biến", nutrients: { energyKcal: 363, proteinG: 6.82, carbG: 79.76, fatG: 1.81 } },
  { code: "3014", name: "Hạt đen, khô", sourceCategory: "Hạt, quả giàu đạm, béo và sản phẩm chế biến", nutrients: { energyKcal: 486, proteinG: 17.3, carbG: 39, fatG: 29 } },
  { code: "3019", name: "Quả đại hái, tươi", sourceCategory: "Hạt, quả giàu đạm, béo và sản phẩm chế biến", nutrients: { energyKcal: 440, proteinG: 20, carbG: 4.6, fatG: 38 } },
  { code: "3020", name: "Vừng (đen, trắng), hạt, khô", sourceCategory: "Hạt, quả giàu đạm, béo và sản phẩm chế biến", nutrients: { energyKcal: 582, proteinG: 20.1, carbG: 21.1, fatG: 46.4 } },
  { code: "3021", name: "Bột đậu tương, đã loại béo", sourceCategory: "Hạt, quả giàu đạm, béo và sản phẩm chế biến", nutrients: { energyKcal: 331, proteinG: 49, carbG: 31.5, fatG: 1 } },
  { code: "3022", name: "Bột đậu tương, rang chín", sourceCategory: "Hạt, quả giàu đạm, béo và sản phẩm chế biến", nutrients: { energyKcal: 428, proteinG: 41, carbG: 25.4, fatG: 18 } },
  { code: "3024", name: "Bột lạc", sourceCategory: "Hạt, quả giàu đạm, béo và sản phẩm chế biến", nutrients: { energyKcal: 583, proteinG: 27.5, carbG: 17.1, fatG: 45 } },
  { code: "3026", name: "Đậu phụ chúc, sống", sourceCategory: "Hạt, quả giàu đạm, béo và sản phẩm chế biến", nutrients: { energyKcal: 415, proteinG: 50.2, carbG: 6.8, fatG: 20.8 } },
  { code: "3031", name: "Sữa bột đậu nành", sourceCategory: "Hạt, quả giàu đạm, béo và sản phẩm chế biến", nutrients: { energyKcal: 413, proteinG: 31.1, carbG: 50.4, fatG: 9.7 } },
  { code: "3033", name: "Tào phớ", sourceCategory: "Hạt, quả giàu đạm, béo và sản phẩm chế biến", nutrients: { energyKcal: 46, proteinG: 3.8, carbG: 4.7, fatG: 1.2 } },
  { code: "3038", name: "Đậu phụ non Tứ Xuyên", sourceCategory: "Hạt, quả giàu đạm, béo và sản phẩm chế biến", nutrients: { energyKcal: 97, proteinG: 10.9, carbG: 1.1, fatG: 5.4 } },
  { code: "12001", name: "Bánh bích cốt", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 349, proteinG: 12.3, carbG: 72.1, fatG: 1.3 } },
  { code: "12004", name: "Bánh con cá", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 369, proteinG: 7.5, carbG: 79.8, fatG: 2.2 } },
  { code: "12006", name: "Bánh kem xốp", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 506, proteinG: 8.3, carbG: 64.2, fatG: 24 } },
  { code: "12008", name: "Bánh quế", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 436, proteinG: 8.3, carbG: 76.7, fatG: 10.7 } },
  { code: "12009", name: "Bánh sô cô la", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 449, proteinG: 3.9, carbG: 68.8, fatG: 17.6 } },
  { code: "12010", name: "Bánh thỏi sô cô la", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 543, proteinG: 4.9, carbG: 62.5, fatG: 30.4 } },
  { code: "12012", name: "Bột ca cao", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 423, proteinG: 23.3, carbG: 44.2, fatG: 17 } },
  { code: "12015", name: "Kẹo bơ cứng", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 448, proteinG: 2.1, carbG: 71.1, fatG: 17.2 } },
  { code: "12022", name: "Kẹo sô cô la", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 393, proteinG: 1.6, carbG: 86.3, fatG: 4.6 } },
  { code: "12023", name: "Kẹo sữa", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 390, proteinG: 2.9, carbG: 83, fatG: 5.2 } },
  { code: "12027", name: "Mứt lạc", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 433, proteinG: 5.4, carbG: 83.6, fatG: 8.6 } },
  { code: "12044", name: "Bánh chocopie", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 435.3, proteinG: 5.51, carbG: 66.12, fatG: 16.53 } },
  { code: "12053", name: "Bánh sữa", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 427, proteinG: 10.32, carbG: 70.95, fatG: 11.35 } },
  { code: "12066", name: "Bim bim, gạo, mặn", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 458, proteinG: 5, carbG: 47.5, fatG: 27.5 } },
  { code: "12072", name: "Đậu phộng da cá", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 540, proteinG: 13.33, carbG: 46.67, fatG: 33.33 } },
  { code: "12073", name: "Kem ngô", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 199, proteinG: 3.2, carbG: 27.6, fatG: 8.4 } },
  { code: "12077", name: "Kem que Merino Cacao - Sô cô la", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 227, proteinG: 3.8, carbG: 28.2, fatG: 11 } },
  { code: "12078", name: "Kem đậu xanh", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 227, proteinG: 3.8, carbG: 28.2, fatG: 11 } },
  { code: "12084", name: "Bánh bông lan", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 489, proteinG: 5.1, carbG: 50.8, fatG: 29.5 } },
  { code: "12085", name: "Bánh gấu", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 475.7, proteinG: 5.41, carbG: 64.86, fatG: 21.62 } },
  { code: "10006", name: "Sữa bột toàn phần", sourceCategory: "Sữa và sản phẩm chế biến", nutrients: { energyKcal: 494, proteinG: 27, carbG: 38, fatG: 26 } },
  { code: "10007", name: "Sữa bột tách béo", sourceCategory: "Sữa và sản phẩm chế biến", nutrients: { energyKcal: 357, proteinG: 35, carbG: 52, fatG: 1 } },
  { code: "10015", name: "Sữa, bò, tiệt trùng, có đường, toàn phần, trắng", sourceCategory: "Sữa và sản phẩm chế biến", nutrients: { energyKcal: 85, proteinG: 3.9, carbG: 7.34, fatG: 4.4 } },
  { code: "14005", name: "Nước cam tươi", sourceCategory: "Nước giải khát", nutrients: { energyKcal: 23, proteinG: 0.7, carbG: 4.7, fatG: 0.2 } },
  { code: "14007", name: "Nước ép cà chua", sourceCategory: "Nước giải khát", nutrients: { energyKcal: 21, proteinG: 0.8, carbG: 3, fatG: 0.6 } },
  { code: "14009", name: "Nước quít tươi", sourceCategory: "Nước giải khát", nutrients: { energyKcal: 25, proteinG: 0.4, carbG: 5.3, fatG: 0.2 } },
  { code: "12018", name: "Kẹo dừa mềm", sourceCategory: "Đồ ngọt (đường, bánh, mứt, kẹo)", nutrients: { energyKcal: 425, proteinG: 0.6, carbG: 78.1, fatG: 12.2 } },
  { code: "14054", name: "Nước ép đào đóng hộp", sourceCategory: "Nước giải khát", nutrients: { energyKcal: 57, proteinG: 0.27, carbG: 13.92, fatG: 0.02 } },
  { code: "14026", name: "Cà phê sữa hòa tan", sourceCategory: "Nước giải khát", nutrients: { energyKcal: 392, proteinG: 2.36, carbG: 94.9, fatG: 0.36 } },
  { code: "10048", name: "Sữa hộp Milo", sourceCategory: "Sữa và sản phẩm chế biến", nutrients: { energyKcal: 55, proteinG: 0.92, carbG: 11.54, fatG: 0.55 } }
] as const;

function slugify(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function categoryFor(sourceCategory: string, name: string) {
  if (name === "Hạt ý dĩ") return "Tinh bột";
  if (name.startsWith("Nấm ")) return "Nấm";
  if (name.startsWith("Men bia")) return "Gia vị";
  if (name.startsWith("Thìa là")) return "Rau gia vị";
  if (name.startsWith("Bánh phồng tôm")) return "Bánh kẹo";
  if (/^(Bí ngô|Cà bát|Củ cà rốt|Cà tím|Củ cải đỏ|Mướp|Ớt đỏ|Ớt xanh|Củ su hào)/.test(name)) return "Củ quả";
  if (sourceCategory === "Quả chín") return "Trái cây";
  if (sourceCategory === "Rau, quả, củ dùng làm rau") return "Rau";
  if (sourceCategory === "Thịt và sản phẩm chế biến") return "Thịt";
  if (sourceCategory === "Thủy sản và sản phẩm chế biến") return "Hải sản";
  if (sourceCategory === "Hạt, quả giàu đạm, béo và sản phẩm chế biến") {
    return /^(Đậu|Bột đậu|Sữa bột đậu|Tào phớ|Bột lạc)/.test(name) ? "Đậu" : "Hạt";
  }
  if (sourceCategory === "Đồ ngọt (đường, bánh, mứt, kẹo)") return "Bánh kẹo";
  if (sourceCategory === "Sữa và sản phẩm chế biến") return "Trứng sữa";
  if (sourceCategory === "Nước giải khát") return "Đồ uống";
  return "Gia vị";
}

function stateFor(name: string): Food["state"] {
  const normalized = name.toLowerCase();
  if (/(luộc|hấp|nướng|chiên|rán|kho\/om)/.test(normalized)) return "cooked";
  if (name === "Hạt ý dĩ") return "dried";
  if (/khô/.test(normalized)) return "dried";
  if (/(tươi|sống)/.test(normalized)) return "raw";
  return "processed";
}

function aliasesFor(name: string) {
  const aliases: string[] = [];
  if (name.includes("lợn")) aliases.push(name.replaceAll("lợn", "heo"));
  if (name.includes("lạc")) aliases.push(name.replaceAll("lạc", "đậu phộng"));
  if (name.includes("Đậu phộng")) aliases.push(name.replaceAll("Đậu phộng", "Lạc"));
  if (name.includes("Rau dền")) aliases.push(name.replace("Rau dền", "Rau giền"));
  if (name === "Hạt ý dĩ") aliases.push("hạt bo bo", "bo bo", "ý dĩ nhân", "cườm gạo");
  if (name === "Cà ri bột") aliases.push("bột cà ri");
  if (name === "Magi") aliases.push("Maggi");
  if (name === "Nước quít tươi") aliases.push("nước quýt tươi");
  if (name === "Bánh chocopie") aliases.push("ChocoPie", "choco pie");
  if (name.startsWith("Vừng ")) aliases.push("mè");
  return aliases;
}

export const extraFoods18: Food[] = sourceRows.map((row) => {
  const state = stateFor(row.name);
  const category = categoryFor(row.sourceCategory, row.name);
  return {
    id: `vdd-${row.code}`,
    slug: `${slugify(row.name)}-vdd-${row.code}`,
    name: row.name,
    aliases: aliasesFor(row.name),
    category,
    state,
    basis: state === "raw" || state === "cooked" ? "100g phần ăn được" : "100g sản phẩm",
    edibleNote: `${row.name}: dùng số liệu đúng trạng thái ${state === "raw" ? "tươi/sống" : state === "cooked" ? "đã chế biến" : state === "dried" ? "khô" : "chế biến"} ghi trong nguồn; không thay thế cho biến thể khác.`,
    nutrients: row.nutrients,
    sourceId,
    confidence: "high",
    dataQuality: "source_backed",
    sourceConfidence: "high",
    sourceReviewStatus: "source_verified",
    candidateSource: `Viện Dinh dưỡng ${row.code}: ${row.name}.`,
    reviewNote: `Tên nguồn, nhóm ${category} và trạng thái ${state} được giữ riêng để tránh gộp biến thể gần nghĩa.`,
    note: sourceNote
  };
});
