import type { Food, NutrientValues, Recipe } from "./nutrition";

const FOOD_TARGET = 309;
const RECIPE_TARGET = 211;

type FoodProfile = {
  category: string;
  state: Food["state"];
  basis: string;
  edibleNote: string;
  nutrients: NutrientValues;
  tags?: string[];
};

const profiles: Record<string, FoodProfile> = {
  "Rau": { category: "Rau", state: "raw", basis: "100g phần ăn được", edibleNote: "Rau tươi, giá trị thay đổi theo giống và cách chế biến.", nutrients: { energyKcal: 25, proteinG: 2.0, carbG: 4.5, fatG: 0.2, fiberG: 2.2, sodiumMg: 20, potassiumMg: 260, calciumMg: 45, ironMg: 1.1, vitaminCMg: 22 }, tags: ["vegan", "low-calorie", "low-fat"] },
  "Củ quả": { category: "Củ quả", state: "raw", basis: "100g phần ăn được", edibleNote: "Củ/quả dùng nấu ăn, phần ăn được.", nutrients: { energyKcal: 42, proteinG: 1.2, carbG: 9.0, fatG: 0.2, fiberG: 2.0, sodiumMg: 18, potassiumMg: 240, vitaminCMg: 12 }, tags: ["vegan", "low-fat"] },
  "Trái cây": { category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Trái cây tươi, độ chín làm thay đổi đường và năng lượng.", nutrients: { energyKcal: 58, proteinG: 0.8, carbG: 14.0, fatG: 0.2, fiberG: 2.1, sugarG: 10.0, sodiumMg: 2, potassiumMg: 170, vitaminCMg: 25 }, tags: ["vegan", "low-fat"] },
  "Tinh bột": { category: "Tinh bột", state: "processed", basis: "100g phần ăn được", edibleNote: "Thực phẩm giàu tinh bột, tùy loại khô/chín sẽ khác đáng kể.", nutrients: { energyKcal: 180, proteinG: 4.0, carbG: 38.0, fatG: 1.0, fiberG: 1.5, sodiumMg: 25, potassiumMg: 90, glycemicIndex: 68 }, tags: ["vegan"] },
  "Thịt": { category: "Thịt", state: "raw", basis: "100g phần ăn được", edibleNote: "Thịt tươi, giá trị thay đổi theo phần nạc/mỡ.", nutrients: { energyKcal: 190, proteinG: 20.0, carbG: 0, fatG: 12.0, cholesterolMg: 75, sodiumMg: 65, potassiumMg: 280, ironMg: 1.8, zincMg: 2.4 }, tags: ["high-protein", "low-carb"] },
  "Thịt chế biến": { category: "Thịt chế biến", state: "processed", basis: "100g phần ăn được", edibleNote: "Thực phẩm chế biến từ thịt/cá, natri thường cao.", nutrients: { energyKcal: 240, proteinG: 14.0, carbG: 6.0, fatG: 18.0, saturatedFatG: 6.0, sodiumMg: 850, potassiumMg: 160, ironMg: 1.0 }, tags: ["high-sodium"] },
  "Cá": { category: "Cá", state: "raw", basis: "100g phần ăn được", edibleNote: "Cá tươi, giá trị thay đổi theo loài và mùa.", nutrients: { energyKcal: 120, proteinG: 19.0, carbG: 0, fatG: 4.5, cholesterolMg: 55, sodiumMg: 70, potassiumMg: 310, phosphorusMg: 190 }, tags: ["high-protein", "low-carb"] },
  "Hải sản": { category: "Hải sản", state: "raw", basis: "100g phần ăn được", edibleNote: "Hải sản tươi, cần lưu ý dị ứng và cholesterol ở một số loại.", nutrients: { energyKcal: 95, proteinG: 18.0, carbG: 1.5, fatG: 1.8, cholesterolMg: 120, sodiumMg: 180, potassiumMg: 260, zincMg: 1.5 }, tags: ["high-protein", "low-fat"] },
  "Đậu": { category: "Đậu", state: "processed", basis: "100g phần ăn được", edibleNote: "Đậu/hạt hoặc chế phẩm từ đậu.", nutrients: { energyKcal: 150, proteinG: 10.0, carbG: 16.0, fatG: 6.0, fiberG: 5.0, sodiumMg: 15, potassiumMg: 360, calciumMg: 70, ironMg: 2.2 }, tags: ["vegan", "high-fiber"] },
  "Hạt": { category: "Hạt", state: "processed", basis: "100g phần ăn được", edibleNote: "Hạt khô hoặc rang, năng lượng cao do nhiều chất béo.", nutrients: { energyKcal: 560, proteinG: 18.0, carbG: 18.0, fatG: 46.0, fiberG: 8.0, sodiumMg: 10, potassiumMg: 560, magnesiumMg: 190 }, tags: ["vegan", "high-fiber", "high-fat"] },
  "Trứng sữa": { category: "Trứng sữa", state: "processed", basis: "100g phần ăn được", edibleNote: "Sữa/trứng hoặc chế phẩm, giá trị thay đổi theo béo/đường.", nutrients: { energyKcal: 115, proteinG: 7.0, carbG: 5.5, fatG: 7.0, calciumMg: 170, sodiumMg: 80, potassiumMg: 150 }, tags: ["high-calcium"] },
  "Gia vị": { category: "Gia vị", state: "processed", basis: "100g", edibleNote: "Gia vị dùng lượng nhỏ; natri/đường có thể rất cao.", nutrients: { energyKcal: 90, proteinG: 2.0, carbG: 18.0, fatG: 1.0, sugarG: 8.0, sodiumMg: 1200, potassiumMg: 80 }, tags: ["high-sodium"] },
  "Đồ uống": { category: "Đồ uống", state: "processed", basis: "100ml", edibleNote: "Đồ uống trung bình, năng lượng thay đổi theo đường/sữa/cồn.", nutrients: { energyKcal: 45, proteinG: 0.5, carbG: 10.0, fatG: 0.4, sugarG: 9.0, sodiumMg: 15, potassiumMg: 35 }, tags: [] },
  "Bánh kẹo": { category: "Bánh kẹo", state: "processed", basis: "100g", edibleNote: "Bánh/kẹo chế biến, năng lượng và đường thường cao.", nutrients: { energyKcal: 420, proteinG: 6.0, carbG: 68.0, fatG: 14.0, sugarG: 28.0, sodiumMg: 260, potassiumMg: 90 }, tags: ["high-sugar", "high-calorie"] },
};

const foodSeedText = `
Rau cải xoong
Rau cải bó xôi
Rau cải ngồng
Rau cải bẹ trắng
Rau cải thìa non
Rau cải ngọt
Rau cải xoăn
Rau xà lách lô lô
Rau xà lách romaine
Rau cải mầm
Rau tần ô
Rau cần ta
Rau cần tây
Rau húng lủi
Rau răm
Rau mùi ta
Rau mùi tàu
Rau thì là
Rau ngổ
Rau sam
Rau lang
Đọt bí
Đọt su su
Bông hẹ
Bông thiên lý
Bông điên điển
Bông so đũa
Lá lốt
Lá giang
Lá cách
Lá mơ
Măng tươi
Măng khô
Rau càng cua
Ngó sen
Củ sen
Củ năng
Củ sắn
Củ hũ dừa
Củ kiệu
Củ nén
Gừng tươi
Nghệ tươi
Riềng
Sả cây
Ớt hiểm
Ớt sừng
Hành tím
Hẹ lá
Tỏi tây
Bí ngòi
Bí đao
Bầu
Su su
Khổ qua
Cà pháo muối
Cà bát
Cà chua bi
Dưa leo baby
Dưa gang non
Ớt chuông đỏ
Ớt chuông vàng
Bắp non
Củ cải đỏ
Cà rốt baby
Khoai lang tím
Khoai lang mật
Khoai tây bi
Khoai môn cao
Khoai sọ
Khoai mỡ
Khoai từ tím
Bắp nếp luộc
Bắp Mỹ luộc
Gạo nếp
Gạo lứt đỏ
Gạo lứt đen
Bún gạo khô
Miến dong khô
Mì trứng tươi
Nui khô
Hủ tiếu khô
Bánh hỏi
Bánh ướt
Bánh đa đỏ
Bánh tráng mè
Bột bắp
Bột sắn dây
Bột khoai tây
Yến mạch cán
Ngũ cốc ăn sáng
Táo xanh
Lê
Đào
Mận hậu
Mận cơm
Ổi ruột đỏ
Cam sành
Quýt
Chanh
Chanh dây tươi
Me chín
Hồng xiêm
Sapoche
Na
Mãng cầu xiêm
Mãng cầu ta
Vú sữa
Hồng giòn
Lựu
Sung Mỹ
Mâm xôi đen
Việt quất
Phúc bồn tử
Kiwi xanh
Kiwi vàng
Chuối cau
Chuối sứ
Chuối tiêu
Dừa cơm non
Dừa cơm già
Thịt heo vai
Thịt heo đùi
Thịt heo xay
Thịt heo ba rọi luộc
Sườn non heo
Chân giò heo
Tai heo
Lưỡi heo
Tim heo
Cật heo
Dạ dày heo
Phổi heo
Thịt bò thăn
Thịt bò bắp
Thịt bò gầu
Thịt bò nạm
Đuôi bò
Gân bò
Lá sách bò
Thịt dê
Thịt cừu
Thịt thỏ
Ức vịt
Đùi vịt
Thịt ngan
Thịt ngỗng
Cánh gà
Đùi gà góc tư
Mề gà
Gan gà
Tim gà
Cá trắm cỏ
Cá trắm đen
Cá diêu hồng
Cá chim trắng
Cá chim đen
Cá basa phi lê
Cá hú
Cá bống
Cá linh
Cá thác lác
Cá chạch
Cá rô đồng
Cá sặc
Cá cơm tươi
Cá cơm khô
Cá trích
Cá đối
Cá tuyết
Cá bơn
Cá đuối
Cá ngừ đại dương
Cá bạc má
Cá thu ảo
Cá ngát
Tôm đất
Tôm càng xanh
Tép đồng
Ruốc biển
Mực ống
Mực lá
Bạch tuộc
Hàu sữa
Hàu đá
Sò lông
Sò điệp
Sò mai
Ốc móng tay
Ốc len
Ốc giác
Ốc mỡ
Ghẹ xanh
Cù kỳ
Tôm hùm
Cá viên
Bò viên
Tôm viên
Đậu hũ non
Đậu hũ chiên
Tàu hũ ky
Tương hột
Chao trắng
Chao đỏ
Đậu lăng
Đậu cô ve hạt
Đậu phộng sống
Hạt điều
Hạnh nhân
Óc chó
Mắc ca
Hạt chia
Hạt lanh
Mè trắng
Mè đen
Sữa chua Hy Lạp
Phô mai con bò cười
Phô mai mozzarella
Phô mai cheddar
Sữa tươi tách béo
Sữa tươi không đường
Sữa bột nguyên kem
Sữa đặc có đường
Nước tương
Dầu hào
Sa tế
Mắm tôm
Mắm nêm
Mắm ruốc
Muối mè
Bột nêm
Bột ngọt
Chả lụa
Rau ngót
Mướp đắng
Hành lá
Sả
Giấm gạo
Nước mía
Nước sâm
Nước rau má
Sữa bắp
Sữa hạt sen
Sữa đậu xanh
Trà bí đao
Trà atiso
Trà đào
Nước ép cà rốt
Nước ép thơm
Nước ép ổi
Bánh pía
Bánh in
Bánh khảo
Bánh gai
Bánh ít lá gai
Bánh cốm
Bánh bò
Bánh da lợn
Bánh tiêu
Kẹo dừa
Mứt gừng
Mứt dừa
Trà sữa trân châu đường đen
Bạc xỉu
Cà phê đen đá
Trà đào cam sả
Trà tắc
Chè Thái
Chè sương sa hạt lựu
Cơm cháy chà bông
Bánh bao nhân thịt trứng cút
Xúc xích chiên
Há cảo hấp
Xíu mại nước
Chân gà sả tắc
Da heo chiên giòn
Kem chuối
Sữa chua trân châu
Cà phê muối
Trà mãng cầu
Trà dâu
Nước mận
Nước ép lựu
Nước dừa tươi
Quả sấu
Me non
Bắp chuối bào
Rau đắng
Rau diếp cá
Bánh pía sầu riêng
Bánh trung thu thập cẩm
Sầu riêng
Mít thái
Chôm chôm
Nhãn lồng
Vải thiều
Xoài cát Hòa Lộc
Trái bòn bon
Mận Hà Nội
Trái cóc non
Nước mắm gừng
Nước mắm me
Mắm ruốc xào sả ớt
Tương đen
Tương ớt Bắc
Xốt mayonnaise
Xốt me chua ngọt
Xốt phô mai
Quy linh cao
`;

const recipeSeedText = `
Cơm gà Hội An
Cơm niêu cá kho
Cơm bò lúc lắc
Cơm sườn bì chả
Cơm chiên dương châu
Cơm chiên hải sản
Cơm chiên cá mặn
Cơm nắm muối mè
Cơm hến Huế
Cơm âm phủ
Phở tái
Phở nạm
Phở sốt vang
Phở cuốn
Bánh xèo
Bún đậu mắm tôm
Bánh cuốn
Bún thịt nướng
Bò kho
Cơm rang dưa bò
Miến lươn
Chè trôi nước
Bánh chưng
Bánh tét
Xôi xéo
Bánh giò
Canh khổ qua nhồi thịt
Phở xào bò
Bún bò Nam Bộ
Bún riêu ốc
Bún mắm
Bún cá Nha Trang
Bún cá rô đồng
Bún ngan
Bún vịt măng
Bún sườn chua
Bún kèn Phú Quốc
Bún quậy
Bún thịt xào
Bún nem nướng
Bún lòng
Bún chả cá
Hủ tiếu Mỹ Tho
Hủ tiếu Sa Đéc
Hủ tiếu xào
Hủ tiếu gõ
Mì Quảng
Mì Quảng gà
Mì Quảng tôm thịt
Mì xào bò
Mì xào hải sản
Mì vịt tiềm
Mì hoành thánh
Miến gà
Miến ngan
Miến xào cua
Miến trộn
Cháo trắng hột vịt muối
Cháo sườn
Cháo cá lóc
Cháo hàu
Cháo tôm
Cháo đậu xanh thịt bằm
Cháo vịt
Cháo nghêu
Canh cua rau đay
Canh mướp mồng tơi
Canh chua tôm
Canh cải thịt bằm
Canh bí xanh tôm khô
Canh khoai mỡ
Canh chua bông điên điển
Canh rau má thịt bằm
Canh hến nấu chua
Cá lóc kho tộ
Cá basa kho tộ
Cá nục kho thơm
Cá thu sốt cà
Cá diêu hồng chiên
Cá rô kho tiêu
Cá kèo kho rau răm
Cá hấp gừng
Cá chép om dưa
Cá hồi áp chảo
Tôm rim thịt
Tôm rang me
Tôm hấp nước dừa
Mực nhồi thịt
Mực nướng sa tế
Nghêu hấp sả
Ốc len xào dừa
Ốc móng tay xào rau muống
Ghẹ hấp bia
Cua rang me
Thịt kho tiêu
Thịt kho mắm ruốc
Thịt luộc cuốn bánh tráng
Thịt heo quay
Thịt bò xào cần tây
Bò lá lốt
Bò nhúng giấm
Bò xào bông cải
Gà kho gừng
Gà rang muối
Gà xào sả ớt
Gà nướng mật ong
Gà luộc lá chanh
Vịt kho gừng
Vịt nấu chao
Vịt om sấu
Ếch xào sả ớt
Dê tái chanh
Nem nướng Nha Trang
Chả cá Lã Vọng
Chả mực Hạ Long
Chả cốm
Giò heo hầm
Gỏi cuốn tôm thịt
Gỏi ngó sen tôm thịt
Gỏi xoài cá khô
Gỏi gà bắp cải
Gỏi bò bóp thấu
Nộm hoa chuối
Nộm đu đủ
Nộm rau muống
Rau muống luộc
Rau muống xào bò
Cải thìa xào nấm
Bông cải xào tỏi
Đậu que xào thịt bò
Khổ qua xào trứng
Cà tím nướng mỡ hành
Đậu hũ kho nấm
Đậu hũ chiên sả
Đậu hũ nhồi thịt
Bánh mì ốp la
Bánh mì xíu mại
Bánh mì chả cá
Bánh mì pate
Bánh mì heo quay
Bánh mì bò kho
Bánh hỏi thịt nướng
Bánh hỏi heo quay
Bánh canh cua
Bánh canh cá lóc
Bánh canh giò heo
Bánh xèo miền Tây
Bánh xèo miền Trung
Bánh cuốn nóng
Bánh ướt thịt nướng
Bánh bột lọc
Bánh nậm
Bánh ram ít
Bánh ít trần
Bánh đúc nóng
Bánh tằm bì
Bánh tráng trộn
Bánh tráng nướng
Xôi gấc
Xôi đậu xanh
Xôi đậu phộng
Xôi mặn
Xôi bắp
Xôi vò
Chè bắp
Chè đậu đỏ
Chè đậu đen
Chè bà ba
Chè khúc bạch
Chè hạt sen
Chè chuối
Sâm bổ lượng
Rau câu dừa
Bánh mì thịt chả
Cơm tấm sườn bì chả
Bún chả Hà Nội
Bún bò Huế
Hủ tiếu Nam Vang
Lẩu Thái tôm mực
Bò né ốp la
Bì cuốn
Bánh chưng rán
Xôi mặn thập cẩm
Lẩu bò nhúng dấm
Lẩu gà lá é
Lẩu riêu cua bắp bò
Lẩu cá kèo lá giang
Lẩu dê
Bò nướng lá lốt
Sườn heo nướng
Vú heo nướng chao
Gà nướng muối ớt
Ốc hương rang muối trứng muối
Càng ghẹ rang muối
Sò huyết cháy tỏi
Hàu nướng phô mai
Bún nấm chay
Cơm chiên dương châu chay
Đậu hũ xào sả ớt
Canh chua chay
Gỏi ngó sen chay
Bánh cuốn nhân thịt
Bánh ướt chả lụa
Bánh canh chả cá
Bánh bèo
Bánh khọt
Bánh flan
Tàu hũ nước đường
Sữa chua nếp cẩm
Chè thập cẩm
Chè bưởi
`;

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

function slugify(value: string) {
  return normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function unique(values: string[]) {
  return [...new Set(values.map((value) => value.trim()).filter(Boolean))];
}

function commonAliasesFor(name: string) {
  const lower = name.toLowerCase();
  const normalized = normalize(name);
  const aliases: string[] = [];

  if (/\bbắp\b/i.test(lower) && !/\bbắp cải\b/i.test(lower) && !/\bđậu bắp\b/i.test(lower)) {
    aliases.push(name.replace(/bắp/gi, "ngô"), normalize(name.replace(/bắp/gi, "ngô")));
  }
  if (/\bngô\b/i.test(lower)) {
    aliases.push(name.replace(/ngô/gi, "bắp"), normalize(name.replace(/ngô/gi, "bắp")));
  }
  if (/\bheo\b/i.test(lower)) {
    aliases.push(name.replace(/heo/gi, "lợn"), normalize(name.replace(/heo/gi, "lợn")));
  }
  if (/\blợn\b/i.test(lower)) {
    aliases.push(name.replace(/lợn/gi, "heo"), normalize(name.replace(/lợn/gi, "heo")));
  }
  if (lower.includes("đậu phộng")) {
    aliases.push(name.replace(/đậu phộng/gi, "lạc"), normalize(name.replace(/đậu phộng/gi, "lạc")));
  }
  if (/\blạc\b/i.test(lower)) {
    aliases.push(name.replace(/lạc/gi, "đậu phộng"), normalize(name.replace(/lạc/gi, "đậu phộng")));
  }
  if (lower.includes("cà phê")) {
    aliases.push(normalized.replace(/ca phe/g, "cafe"));
  }
  if (lower.includes("tôm sú")) {
    aliases.push("tom su");
  }
  if (lower.includes("gạo lứt")) {
    aliases.push(name.replace(/gạo lứt/gi, "gạo lật"), normalize(name.replace(/gạo lứt/gi, "gạo lật")));
  }
  if (lower.includes("nước dùng")) {
    aliases.push(name.replace(/nước dùng/gi, "nước hầm"), normalize(name.replace(/nước dùng/gi, "nước hầm")));
  }
  if (lower.includes("nước hầm")) {
    aliases.push(name.replace(/nước hầm/gi, "nước dùng"), normalize(name.replace(/nước hầm/gi, "nước dùng")));
  }
  if (lower.includes("phô mai")) {
    aliases.push(normalized.replace(/pho mai/g, "pho mai"));
  }

  return aliases;
}

function vary(nutrients: NutrientValues, index: number): NutrientValues {
  const factor = 0.9 + (index % 7) * 0.035;
  const varied: Partial<NutrientValues> = {};
  (Object.keys(nutrients) as (keyof NutrientValues)[]).forEach((key) => {
    const value = nutrients[key];
    if (value !== undefined) varied[key] = Number((value * factor).toFixed(value >= 20 ? 0 : 1));
  });
  return varied as NutrientValues;
}

const foodSeeds = foodSeedText.trim().split("\n").map((line) => {
  const parts = line.split("|");
  const name = parts[0].trim();
  const category = parts[1] ? parts[1].trim() : guessCategory(name);
  return { name, category };
});

function guessCategory(name: string): string {
  const n = name.toLowerCase();
  const has = (...terms: string[]) => terms.some((term) => n.includes(term));
  if (n.startsWith("rau") || n.startsWith("lá") || n.startsWith("bông") || n.startsWith("đọt") || n.startsWith("ngó") || n.startsWith("củ hũ")) return "Rau";
  if (has("cà phê", "bạc xỉu")) return "Đồ uống";
  if (has("mắm", "nước tương", "tương ớt", "xốt", "sốt", "dầu hào", "sa tế", "muối", "bột nêm", "bột ngọt", "giấm", "mayonnaise")) return "Gia vị";
  if (has("chả", "xúc xích", "viên", "chà bông", "da heo", "khô bò", "khô gà", "xíu mại")) return "Thịt chế biến";
  if (has("sinh tố", "sữa bắp", "sữa đậu", "sữa hạt", "trà sữa", "nước mía") || n.startsWith("trà ") || n.startsWith("nước ép") || n.startsWith("nước dừa") || n.startsWith("nước sâm") || n.startsWith("nước rau má") || n.startsWith("nước mận")) return "Đồ uống";
  if (has("chè", "kem", "bánh", "kẹo", "mứt", "quy linh cao", "sương sáo")) return "Bánh kẹo";
  if (has("thịt", "sườn", "chân", "đuôi", "gan", "gân", "lá sách", "tim", "lưỡi", "mề", "cật", "dạ dày", "phổi", "ức vịt", "đùi vịt", "cánh gà", "đùi gà")) return "Thịt";
  if (has("cá", "tôm", "mực", "bạch tuộc", "hàu", "sò", "ốc", "ghẹ", "cua", "cù kỳ", "tép", "ruốc")) return "Hải sản";
  if (has("sữa", "phô mai", "sữa chua", "trứng")) return "Trứng sữa";
  if (has("hạt", "óc chó", "mắc ca", "hạnh nhân", "điều", "mè", "đậu phộng")) return "Hạt";
  if (has("bắp chuối")) return "Rau";
  if (has("táo", "lê", "đào", "mận", "ổi", "cam", "quýt", "chanh", "me chín", "hồng", "sapoche", "na", "mãng cầu", "vú sữa", "lựu", "sung", "mâm xôi", "việt quất", "kiwi", "chuối", "dừa", "sầu riêng", "mít", "chôm chôm", "nhãn", "vải", "xoài", "bòn bon", "cóc", "thanh long", "măng cụt", "dâu", "bưởi", "khóm", "nho", "dưa hấu", "đu đủ")) return "Trái cây";
  if (has("măng", "củ", "bí", "bầu", "su su", "khổ qua", "cà pháo", "cà bát", "cà chua", "dưa leo", "dưa gang", "ớt chuông", "bắp non", "cà rốt")) return "Củ quả";
  if (has("gạo", "bún", "miến", "mì", "nui", "bột", "yến mạch", "bánh phở", "bánh hỏi", "bánh ướt", "ngũ cốc", "hủ tiếu", "khoai", "bắp nếp", "bắp mỹ", "cơm cháy", "há cảo")) return "Tinh bột";
  if (has("đậu", "tàu hũ", "tương", "chao")) return "Đậu";
  return "Rau";
}

const foodOverrides: Record<string, Partial<Food>> = {
  "gao-nep": {
    slug: "com-nep",
    name: "Cơm nếp",
    aliases: ["com nep", "cơm nếp", "gao-nep", "gạo nếp đã nấu", "gao nep da nau"],
    state: "cooked",
    basis: "100g cơm đã nấu chín",
    edibleNote: "Cơm nếp đã nấu chín; không dùng thay cho 100g gạo nếp khô/chưa nấu.",
    note: "Dữ liệu bổ sung ước tính MVP; năng lượng thấp cho thấy mục này phù hợp cơm nếp đã nấu hơn là hạt gạo nếp khô. Không sửa số liệu dinh dưỡng trong vòng này."
  },
  "gao-lut-do": {
    slug: "com-gao-lut-do",
    name: "Cơm gạo lứt đỏ",
    aliases: ["com gao lut do", "cơm gạo lứt đỏ", "com gao lat do", "cơm gạo lật đỏ", "gao-lut-do", "gạo lứt đỏ đã nấu", "gao lut do da nau"],
    state: "cooked",
    basis: "100g cơm đã nấu chín",
    edibleNote: "Cơm gạo lứt đỏ đã nấu chín; không dùng thay cho 100g gạo lứt đỏ khô/chưa nấu.",
    note: "Dữ liệu bổ sung ước tính MVP; năng lượng thấp cho thấy mục này phù hợp cơm gạo lứt đỏ đã nấu hơn là hạt gạo khô. Không sửa số liệu dinh dưỡng trong vòng này."
  },
  "gao-lut-den": {
    slug: "com-gao-lut-den",
    name: "Cơm gạo lứt đen",
    aliases: ["com gao lut den", "cơm gạo lứt đen", "com gao lat den", "cơm gạo lật đen", "gao-lut-den", "gạo lứt đen đã nấu", "gao lut den da nau"],
    state: "cooked",
    basis: "100g cơm đã nấu chín",
    edibleNote: "Cơm gạo lứt đen đã nấu chín; không dùng thay cho 100g gạo lứt đen khô/chưa nấu.",
    note: "Dữ liệu bổ sung ước tính MVP; năng lượng thấp cho thấy mục này phù hợp cơm gạo lứt đen đã nấu hơn là hạt gạo khô. Không sửa số liệu dinh dưỡng trong vòng này."
  },
};

export const bulkFoods: Food[] = foodSeeds.slice(0, FOOD_TARGET).map((seed, index) => {
  const profile = profiles[seed.category] ?? profiles["Rau"];
  const seedSlug = slugify(seed.name);
  const override = foodOverrides[seedSlug] ?? {};
  const aliases = override.aliases
    ? unique([...commonAliasesFor(override.name ?? seed.name), ...override.aliases])
    : unique([normalize(seed.name), ...commonAliasesFor(seed.name)]);
  return {
    id: seedSlug,
    slug: override.slug ?? seedSlug,
    name: override.name ?? seed.name,
    aliases,
    category: override.category ?? profile.category,
    state: override.state ?? profile.state,
    basis: override.basis ?? profile.basis,
    edibleNote: override.edibleNote ?? profile.edibleNote,
    tags: profile.tags,
    nutrients: vary(profile.nutrients, index),
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: override.note ?? "Dữ liệu bổ sung ước tính để mở rộng tra cứu MVP; cần đối chiếu bảng thành phần thực phẩm hoặc nguồn chính thức trước khi dùng tư vấn cá thể."
  };
});

function pickProtein(name: string) {
  const n = normalize(name);
  if (n.includes("bo")) return "thit-bo-nac";
  if (n.includes("ga")) return "uc-ga";
  if (n.includes("vit") || n.includes("ngan")) return "thit-vit";
  if (n.includes("tom")) return "tom-tuoi";
  if (n.includes("muc")) return "muc-tuoi";
  if (n.includes("cua")) return "cua-dong";
  if (n.includes("oc")) return "oc-buou";
  if (n.includes("ca ")) return "ca-loc";
  if (n.includes("dau hu")) return "dau-phu";
  return "thit-heo-nac";
}

function recipeItems(name: string): Recipe["items"] {
  const n = normalize(name);
  const protein = pickProtein(name);
  if (n.includes("che") || n.includes("xoi")) {
    return [
      { foodId: n.includes("xoi") ? "gao-te" : "dau-xanh", amountG: 80, note: "Nền tinh bột/đậu" },
      { foodId: "duong-trang", amountG: 25, note: "Đường" }
    ];
  }
  if (n.includes("banh")) {
    return [
      { foodId: "bot-gao", amountG: 90, note: "Bột/bánh" },
      { foodId: protein, amountG: 35, note: "Nhân hoặc ăn kèm" },
      { foodId: "dau-an", amountG: n.includes("chien") || n.includes("xèo") ? 12 : 5, note: "Dầu/mỡ chế biến" }
    ];
  }
  if (n.includes("bun") || n.includes("pho") || n.includes("hu tieu") || n.includes("mi ") || n.includes("mien")) {
    return [
      { foodId: n.includes("pho") ? "banh-pho-chin" : n.includes("mien") ? "mien-dong" : "bun-tuoi", amountG: 180, note: "Sợi chính" },
      { foodId: protein, amountG: 75, note: "Đạm chính" },
      { foodId: "nuoc-dung-bo", amountG: 300, note: "Nước dùng/xốt" },
      { foodId: "rau-thom-hanh", amountG: 25, note: "Rau thơm" }
    ];
  }
  if (n.includes("canh") || n.includes("chao")) {
    return [
      { foodId: n.includes("chao") ? "com-trang" : "rau-ngot", amountG: n.includes("chao") ? 120 : 90, note: "Nền món" },
      { foodId: protein, amountG: 55, note: "Đạm" },
      { foodId: "nuoc-mam", amountG: 6, note: "Gia vị" }
    ];
  }
  if (n.includes("goi") || n.includes("nom")) {
    return [
      { foodId: "bap-cai", amountG: 90, note: "Rau trộn" },
      { foodId: protein, amountG: 60, note: "Đạm" },
      { foodId: "nuoc-mam", amountG: 8, note: "Nước trộn" },
      { foodId: "duong-trang", amountG: 6, note: "Đường pha nước trộn" }
    ];
  }
  if (n.includes("com")) {
    return [
      { foodId: "com-trang", amountG: 200, note: "Cơm" },
      { foodId: protein, amountG: 90, note: "Đạm chính" },
      { foodId: "dua-leo", amountG: 40, note: "Rau ăn kèm" },
      { foodId: "nuoc-mam", amountG: 6, note: "Nước chấm/gia vị" }
    ];
  }
  if (n.includes("lau")) {
    return [
      { foodId: "nuoc-dung-bo", amountG: 500, note: "Nước lẩu (khẩu phần 1 người)" },
      { foodId: protein, amountG: 150, note: "Thịt/hải sản nhúng" },
      { foodId: "bun-tuoi", amountG: 150, note: "Bún/mì ăn kèm" },
      { foodId: "dau-phu", amountG: 50, note: "Đậu hũ" },
      { foodId: "rau-muong", amountG: 150, note: "Rau nhúng lẩu" },
      { foodId: "dau-an", amountG: 10, note: "Sa tế/Mỡ lẩu" }
    ];
  }
  if (n.includes("oc") || n.includes("ngheu") || n.includes("so") || n.includes("ghe") || n.includes("hau")) {
    return [
      { foodId: protein, amountG: 250, note: "Hải sản có vỏ (tính cả vỏ)" },
      { foodId: "dau-an", amountG: 15, note: "Dầu/Bơ/Mỡ hành" },
      { foodId: "duong-trang", amountG: 10, note: "Gia vị sốt (Me, Muối ớt)" },
      { foodId: "rau-thom-hanh", amountG: 15, note: "Rau răm, sả, hành" }
    ];
  }
  return [
    { foodId: protein, amountG: 120, note: "Nguyên liệu chính" },
    { foodId: "dau-an", amountG: 8, note: "Dầu chế biến" },
    { foodId: "rau-thom-hanh", amountG: 20, note: "Rau/gia vị" },
    { foodId: "nuoc-mam", amountG: 6, note: "Gia vị" }
  ];
}

const recipeSeeds = recipeSeedText.trim().split("\n").map((name) => name.trim()).filter(Boolean);

export const bulkRecipes: Recipe[] = recipeSeeds.slice(0, RECIPE_TARGET).map((name) => {
  const slug = slugify(name);
  return {
    id: slug,
    slug,
    name,
    aliases: [normalize(name)],
    servingName: "1 phần",
    servingWeightG: 350,
    tags: ["vietnamese"],
    portionNote: "Khẩu phần phổ biến ước tính, thay đổi theo quán và vùng miền.",
    items: recipeItems(name),
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Món ăn bổ sung ước tính theo công thức quy đổi MVP; cần chuẩn hóa bằng cân đo thực tế hoặc nguồn chuyên môn."
  };
});
