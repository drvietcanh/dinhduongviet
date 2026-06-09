import type { Food, NutrientValues, Recipe } from "./nutrition";

const FOOD_TARGET = 218;
const RECIPE_TARGET = 149;

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
Rau cải xoong|Rau
Rau cải bó xôi|Rau
Rau cải ngồng|Rau
Rau cải bẹ trắng|Rau
Rau cải thìa non|Rau
Rau cải ngọt|Rau
Rau cải xoăn|Rau
Rau xà lách lô lô|Rau
Rau xà lách romaine|Rau
Rau cải mầm|Rau
Rau tần ô|Rau
Rau cần ta|Rau
Rau cần tây|Rau
Rau húng lủi|Rau
Rau răm|Rau
Rau mùi ta|Rau
Rau mùi tàu|Rau
Rau thì là|Rau
Rau ngổ|Rau
Rau sam|Rau
Rau lang|Rau
Đọt bí|Rau
Đọt su su|Rau
Bông hẹ|Rau
Bông thiên lý|Rau
Bông điên điển|Rau
Bông so đũa|Rau
Lá lốt|Rau
Lá giang|Rau
Lá cách|Rau
Lá mơ|Rau
Măng tươi|Củ quả
Măng khô|Củ quả
Rau càng cua|Rau
Ngó sen|Củ quả
Củ sen|Củ quả
Củ năng|Củ quả
Củ sắn|Củ quả
Củ hũ dừa|Củ quả
Củ kiệu|Củ quả
Củ nén|Gia vị
Gừng tươi|Gia vị
Nghệ tươi|Gia vị
Riềng|Gia vị
Sả cây|Gia vị
Ớt hiểm|Gia vị
Ớt sừng|Gia vị
Hành tím|Gia vị
Hẹ lá|Rau
Tỏi tây|Rau
Bí ngòi|Củ quả
Bí đao|Củ quả
Bầu|Củ quả
Su su|Củ quả
Khổ qua|Củ quả
Cà pháo muối|Củ quả
Cà bát|Củ quả
Cà chua bi|Củ quả
Dưa leo baby|Củ quả
Dưa gang non|Củ quả
Ớt chuông đỏ|Củ quả
Ớt chuông vàng|Củ quả
Bắp non|Củ quả
Củ cải đỏ|Củ quả
Cà rốt baby|Củ quả
Khoai lang tím|Tinh bột
Khoai lang mật|Tinh bột
Khoai tây bi|Tinh bột
Khoai môn cao|Tinh bột
Khoai sọ|Tinh bột
Khoai mỡ|Tinh bột
Khoai từ tím|Tinh bột
Bắp nếp luộc|Tinh bột
Bắp Mỹ luộc|Tinh bột
Gạo nếp|Tinh bột
Gạo lứt đỏ|Tinh bột
Gạo lứt đen|Tinh bột
Bún gạo khô|Tinh bột
Miến dong khô|Tinh bột
Mì trứng tươi|Tinh bột
Nui khô|Tinh bột
Hủ tiếu khô|Tinh bột
Bánh hỏi|Tinh bột
Bánh ướt|Tinh bột
Bánh đa đỏ|Tinh bột
Bánh tráng mè|Tinh bột
Bột bắp|Tinh bột
Bột sắn dây|Tinh bột
Bột khoai tây|Tinh bột
Yến mạch cán|Tinh bột
Ngũ cốc ăn sáng|Tinh bột
Táo xanh|Trái cây
Lê|Trái cây
Đào|Trái cây
Mận hậu|Trái cây
Mận cơm|Trái cây
Ổi ruột đỏ|Trái cây
Cam sành|Trái cây
Quýt|Trái cây
Chanh|Trái cây
Chanh dây tươi|Trái cây
Me chín|Trái cây
Hồng xiêm|Trái cây
Sapoche|Trái cây
Na|Trái cây
Mãng cầu xiêm|Trái cây
Mãng cầu ta|Trái cây
Vú sữa|Trái cây
Hồng giòn|Trái cây
Lựu|Trái cây
Sung Mỹ|Trái cây
Mâm xôi đen|Trái cây
Việt quất|Trái cây
Phúc bồn tử|Trái cây
Kiwi xanh|Trái cây
Kiwi vàng|Trái cây
Chuối cau|Trái cây
Chuối sứ|Trái cây
Chuối tiêu|Trái cây
Dừa cơm non|Trái cây
Dừa cơm già|Trái cây
Thịt heo vai|Thịt
Thịt heo đùi|Thịt
Thịt heo xay|Thịt
Thịt heo ba rọi luộc|Thịt
Sườn non heo|Thịt
Chân giò heo|Thịt
Tai heo|Thịt
Lưỡi heo|Thịt
Tim heo|Thịt
Cật heo|Thịt
Dạ dày heo|Thịt
Phổi heo|Thịt
Thịt bò thăn|Thịt
Thịt bò bắp|Thịt
Thịt bò gầu|Thịt
Thịt bò nạm|Thịt
Đuôi bò|Thịt
Gân bò|Thịt
Lá sách bò|Thịt
Thịt dê|Thịt
Thịt cừu|Thịt
Thịt thỏ|Thịt
Ức vịt|Thịt
Đùi vịt|Thịt
Thịt ngan|Thịt
Thịt ngỗng|Thịt
Cánh gà|Thịt
Đùi gà góc tư|Thịt
Mề gà|Thịt
Gan gà|Thịt
Tim gà|Thịt
Cá trắm cỏ|Cá
Cá trắm đen|Cá
Cá diêu hồng|Cá
Cá chim trắng|Cá
Cá chim đen|Cá
Cá basa phi lê|Cá
Cá hú|Cá
Cá bống|Cá
Cá linh|Cá
Cá thác lác|Cá
Cá chạch|Cá
Cá rô đồng|Cá
Cá sặc|Cá
Cá cơm tươi|Cá
Cá cơm khô|Cá
Cá trích|Cá
Cá đối|Cá
Cá tuyết|Cá
Cá bơn|Cá
Cá đuối|Cá
Cá ngừ đại dương|Cá
Cá bạc má|Cá
Cá thu ảo|Cá
Cá ngát|Cá
Tôm đất|Hải sản
Tôm càng xanh|Hải sản
Tép đồng|Hải sản
Ruốc biển|Hải sản
Mực ống|Hải sản
Mực lá|Hải sản
Bạch tuộc|Hải sản
Hàu sữa|Hải sản
Hàu đá|Hải sản
Sò lông|Hải sản
Sò điệp|Hải sản
Sò mai|Hải sản
Ốc móng tay|Hải sản
Ốc len|Hải sản
Ốc giác|Hải sản
Ốc mỡ|Hải sản
Ghẹ xanh|Hải sản
Cù kỳ|Hải sản
Tôm hùm|Hải sản
Cá viên|Thịt chế biến
Bò viên|Thịt chế biến
Tôm viên|Thịt chế biến
Đậu hũ non|Đậu
Đậu hũ chiên|Đậu
Tàu hũ ky|Đậu
Tương hột|Đậu
Chao trắng|Đậu
Chao đỏ|Đậu
Đậu lăng|Đậu
Đậu cô ve hạt|Đậu
Đậu phộng sống|Hạt
Hạt điều|Hạt
Hạnh nhân|Hạt
Óc chó|Hạt
Mắc ca|Hạt
Hạt chia|Hạt
Hạt lanh|Hạt
Mè trắng|Hạt
Mè đen|Hạt
Sữa chua Hy Lạp|Trứng sữa
Phô mai con bò cười|Trứng sữa
Phô mai mozzarella|Trứng sữa
Phô mai cheddar|Trứng sữa
Sữa tươi tách béo|Trứng sữa
Sữa tươi không đường|Trứng sữa
Sữa bột nguyên kem|Trứng sữa
Sữa đặc có đường|Trứng sữa
Nước tương|Gia vị
Dầu hào|Gia vị
Sa tế|Gia vị
Mắm tôm|Gia vị
Mắm nêm|Gia vị
Mắm ruốc|Gia vị
Muối mè|Gia vị
Bột nêm|Gia vị
Bột ngọt|Gia vị
Giấm gạo|Gia vị
Nước mía|Đồ uống
Nước sâm|Đồ uống
Nước rau má|Đồ uống
Sữa bắp|Đồ uống
Sữa hạt sen|Đồ uống
Sữa đậu xanh|Đồ uống
Trà bí đao|Đồ uống
Trà atiso|Đồ uống
Trà đào|Đồ uống
Nước ép cà rốt|Đồ uống
Nước ép thơm|Đồ uống
Nước ép ổi|Đồ uống
Bánh pía|Bánh kẹo
Bánh in|Bánh kẹo
Bánh khảo|Bánh kẹo
Bánh gai|Bánh kẹo
Bánh ít lá gai|Bánh kẹo
Bánh cốm|Bánh kẹo
Bánh bò|Bánh kẹo
Bánh da lợn|Bánh kẹo
Bánh tiêu|Bánh kẹo
Kẹo dừa|Bánh kẹo
Mứt gừng|Bánh kẹo
Mứt dừa|Bánh kẹo
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
Phở xào bò
Bún bò Nam Bộ
Bún riêu ốc
Bún mắm
Bún cá Nha Trang
Bún cá rô đồng
Bún đậu mắm tôm
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
Canh khổ qua nhồi thịt
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
Bánh giò
Bánh tằm bì
Bánh tráng trộn
Bánh tráng nướng
Xôi gấc
Xôi đậu xanh
Xôi đậu phộng
Xôi mặn
Xôi xéo
Xôi bắp
Xôi vò
Chè bắp
Chè đậu đỏ
Chè đậu đen
Chè bà ba
Chè khúc bạch
Chè hạt sen
Chè chuối
Chè trôi nước
Sâm bổ lượng
Rau câu dừa
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
  const [name, category] = line.split("|");
  return { name: name.trim(), category: category.trim() };
});

export const bulkFoods: Food[] = foodSeeds.slice(0, FOOD_TARGET).map((seed, index) => {
  const profile = profiles[seed.category] ?? profiles["Rau"];
  const slug = slugify(seed.name);
  return {
    id: slug,
    slug,
    name: seed.name,
    aliases: [normalize(seed.name)],
    category: profile.category,
    state: profile.state,
    basis: profile.basis,
    edibleNote: profile.edibleNote,
    tags: profile.tags,
    nutrients: vary(profile.nutrients, index),
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Dữ liệu bổ sung ước tính để mở rộng tra cứu MVP; cần đối chiếu bảng thành phần thực phẩm hoặc nguồn chính thức trước khi dùng tư vấn cá thể."
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
