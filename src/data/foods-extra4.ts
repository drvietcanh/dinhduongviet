import type { Food, NutrientValues } from "./nutrition";

type FoodSeed = {
  name: string;
  category: string;
  state: Food["state"];
  basis: string;
  edibleNote: string;
  nutrients: NutrientValues;
  tags?: string[];
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const makeFood = (seed: FoodSeed): Food => {
  const slug = slugify(seed.name);
  return {
    id: slug,
    slug,
    name: seed.name,
    aliases: [slug.replace(/-/g, " ")],
    category: seed.category,
    state: seed.state,
    basis: seed.basis,
    edibleNote: seed.edibleNote,
    nutrients: seed.nutrients,
    tags: seed.tags,
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; cần đối chiếu bảng thành phần chính thức trước khi dùng lâm sàng."
  };
};

const oilSeeds: FoodSeed[] = [
  ["Dầu ô liu", 884, 0, 0, 100, "Dầu thực vật giàu acid béo không bão hòa."],
  ["Dầu mè", 884, 0, 0, 100, "Dầu mè/vừng dùng nêm hoặc xào."],
  ["Dầu đậu nành", 884, 0, 0, 100, "Dầu đậu nành tinh luyện."],
  ["Dầu hướng dương", 884, 0, 0, 100, "Dầu hạt hướng dương tinh luyện."],
  ["Dầu hạt cải", 884, 0, 0, 100, "Dầu canola/hạt cải."],
  ["Mỡ heo", 902, 0, 0, 100, "Mỡ heo thắng, nhiều chất béo bão hòa."],
  ["Bơ lạt", 717, 0.9, 0.1, 81, "Bơ sữa không muối."],
  ["Bơ thực vật", 720, 0.5, 1, 80, "Margarine, thành phần thay đổi theo hãng."],
  ["Nước cốt dừa đặc", 230, 2.3, 6, 24, "Nước cốt dừa đặc dùng nấu chè/cà ri."],
  ["Kem béo thực vật", 310, 0.5, 14, 28, "Creamer thực vật dùng pha đồ uống."]
].map(([name, energyKcal, proteinG, carbG, fatG, edibleNote]) => ({
  name: String(name),
  category: "Dầu mỡ",
  state: "processed" as const,
  basis: "100g",
  edibleNote: String(edibleNote),
  nutrients: { energyKcal: Number(energyKcal), proteinG: Number(proteinG), carbG: Number(carbG), fatG: Number(fatG), saturatedFatG: Number(fatG) * 0.3 },
  tags: ["high-fat", "high-calorie"]
}));

const brothSeeds: FoodSeed[] = [
  ["Nước hầm xương heo", 28, 2.5, 0.8, 1.5, 210, "Nước hầm xương heo đã hớt bớt mỡ."],
  ["Nước hầm xương bò", 32, 3, 0.6, 1.8, 230, "Nước hầm xương bò/nạm, natri tùy lượng muối."],
  ["Nước dùng gà", 24, 2.8, 0.5, 1.0, 190, "Nước luộc/hầm gà đã lọc."],
  ["Nước luộc rau", 8, 0.4, 1.5, 0.1, 35, "Nước luộc rau nhạt không nêm muối."],
  ["Nước dùng nấm", 12, 0.8, 2, 0.1, 60, "Nước hầm nấm, vị umami tự nhiên."],
  ["Nước dashi cá bào", 10, 1.2, 0.5, 0.1, 160, "Nước dashi cá bào/rong biển."],
  ["Nước lẩu thái", 42, 1, 6, 1.5, 620, "Nước lẩu chua cay, thường nhiều natri."],
  ["Nước lẩu mắm", 55, 3, 5, 2, 980, "Nước lẩu mắm đậm vị, natri rất cao."]
].map(([name, energyKcal, proteinG, carbG, fatG, sodiumMg, edibleNote]) => ({
  name: String(name),
  category: "Nước dùng",
  state: "processed" as const,
  basis: "100ml",
  edibleNote: String(edibleNote),
  nutrients: { energyKcal: Number(energyKcal), proteinG: Number(proteinG), carbG: Number(carbG), fatG: Number(fatG), sodiumMg: Number(sodiumMg), potassiumMg: 45 },
  tags: Number(sodiumMg) >= 600 ? ["high-sodium"] : ["low-calorie"]
}));

const mushroomSeeds: FoodSeed[] = [
  "Nấm hầu thủ",
  "Nấm bào ngư",
  "Nấm mỡ",
  "Nấm linh chi nâu",
  "Nấm đùi gà",
  "Nấm thái dương",
  "Nấm tuyết",
  "Nấm mối",
  "Nấm tràm",
  "Nấm hải sản",
  "Nấm sò",
  "Mộc nhĩ khô"
].map((name) => ({
  name,
  category: "Nấm",
  state: name.includes("khô") ? "processed" as const : "raw" as const,
  basis: name.includes("khô") ? "100g khô" : "100g phần ăn được",
  edibleNote: `${name}, giá trị thay đổi theo độ tươi/khô và cách chế biến.`,
  nutrients: name.includes("khô")
    ? { energyKcal: 280, proteinG: 10, carbG: 65, fatG: 1, fiberG: 28, sodiumMg: 35, potassiumMg: 900 }
    : { energyKcal: 30, proteinG: 3, carbG: 5, fatG: 0.3, fiberG: 2.5, sodiumMg: 8, potassiumMg: 320 },
  tags: ["vegan", "low-fat"]
}));

const eggDairySeeds: FoodSeed[] = [
  ["Trứng vịt lộn", 182, 13, 1.2, 13, 900, "Trứng vịt lộn luộc, giá trị thay đổi theo kích thước."],
  ["Trứng cút", 158, 13, 0.4, 11, 844, "Trứng cút nguyên quả."],
  ["Lòng trắng trứng", 52, 11, 0.7, 0.2, 0, "Lòng trắng trứng gà."],
  ["Lòng đỏ trứng", 322, 16, 3.6, 27, 1085, "Lòng đỏ trứng gà."],
  ["Sữa tươi không đường", 62, 3.2, 4.8, 3.4, 14, "Sữa bò tươi không đường."],
  ["Sữa tươi tách béo", 35, 3.4, 5, 0.2, 5, "Sữa bò tách béo không đường."],
  ["Sữa đặc có đường", 321, 7.9, 54, 8.7, 34, "Sữa đặc có đường."],
  ["Phô mai cheddar", 403, 25, 1.3, 33, 105, "Phô mai cheddar."],
  ["Phô mai tươi", 98, 11, 3.4, 4.3, 17, "Cottage cheese/phô mai tươi."],
  ["Váng sữa", 190, 3, 16, 13, 45, "Váng sữa ngọt đóng hộp."],
  ["Kem sữa", 207, 2.8, 24, 11, 44, "Kem sữa tráng miệng."],
  ["Sữa bột nguyên kem", 496, 26, 38, 27, 85, "Sữa bột nguyên kem."]
].map(([name, energyKcal, proteinG, carbG, fatG, cholesterolMg, edibleNote]) => ({
  name: String(name),
  category: "Trứng sữa",
  state: "processed" as const,
  basis: "100g",
  edibleNote: String(edibleNote),
  nutrients: { energyKcal: Number(energyKcal), proteinG: Number(proteinG), carbG: Number(carbG), fatG: Number(fatG), cholesterolMg: Number(cholesterolMg), calciumMg: 120, sodiumMg: 90 },
  tags: ["high-calcium"]
}));

const snackSeeds: FoodSeed[] = [
  ["Bánh pía", 410, 7, 58, 17, 22, "Bánh pía nhân đậu xanh/sầu riêng."],
  ["Bánh bò", 260, 3, 55, 3, 24, "Bánh bò hấp/nướng."],
  ["Bánh da lợn", 295, 4, 58, 5, 30, "Bánh da lợn đậu xanh lá dứa."],
  ["Bánh chuối hấp", 210, 3, 44, 4, 24, "Bánh chuối hấp nước cốt dừa."],
  ["Bánh flan", 145, 5, 20, 5, 18, "Bánh flan/caramel."],
  ["Chè khúc bạch", 165, 4, 22, 7, 18, "Chè khúc bạch phần trung bình."],
  ["Kẹo dừa", 390, 2, 74, 10, 58, "Kẹo dừa Bến Tre."],
  ["Kẹo mè xửng", 420, 8, 62, 16, 40, "Kẹo mè xửng Huế."],
  ["Bánh gai", 300, 5, 60, 6, 32, "Bánh gai nhân đậu xanh dừa."],
  ["Bánh cốm", 330, 6, 68, 5, 38, "Bánh cốm nhân đậu xanh."],
  ["Bánh in", 390, 5, 82, 4, 45, "Bánh in bột nếp/đậu xanh."],
  ["Bánh khảo", 375, 5, 80, 4, 42, "Bánh khảo truyền thống."]
].map(([name, energyKcal, proteinG, carbG, fatG, sugarG, edibleNote]) => ({
  name: String(name),
  category: "Bánh kẹo",
  state: "processed" as const,
  basis: "100g",
  edibleNote: String(edibleNote),
  nutrients: { energyKcal: Number(energyKcal), proteinG: Number(proteinG), carbG: Number(carbG), fatG: Number(fatG), sugarG: Number(sugarG), sodiumMg: 140 },
  tags: ["high-sugar", "high-calorie"]
}));

const regionalSeeds: FoodSeed[] = [
  ["Bánh đa cua khô", "Tinh bột", "processed", "100g khô", "Bánh đa đỏ/bánh đa cua khô dùng cho món Hải Phòng.", { energyKcal: 335, proteinG: 6.5, carbG: 74, fatG: 1.1, fiberG: 1.8, sodiumMg: 90, potassiumMg: 85, glycemicIndex: 72 }, ["vegan", "low-fat"]],
  ["Miến dong làng So", "Tinh bột", "processed", "100g khô", "Miến dong khô miền Bắc.", { energyKcal: 332, proteinG: 0.8, carbG: 82, fatG: 0.2, fiberG: 0.8, sodiumMg: 20, potassiumMg: 35, glycemicIndex: 65 }, ["vegan", "gluten-free", "low-fat"]],
  ["Cốm làng Vòng", "Tinh bột", "processed", "100g", "Cốm non Hà Nội.", { energyKcal: 350, proteinG: 7, carbG: 77, fatG: 1.5, fiberG: 2.0, sodiumMg: 15, potassiumMg: 120 }, ["vegan", "low-fat"]],
  ["Thịt trâu gác bếp", "Thịt chế biến", "processed", "100g", "Thịt trâu sấy/ hun khói vùng Tây Bắc.", { energyKcal: 260, proteinG: 42, carbG: 3, fatG: 8, saturatedFatG: 3, sodiumMg: 980, potassiumMg: 430, ironMg: 4.5, zincMg: 5 }, ["high-protein", "low-carb", "high-sodium"]],
  ["Lạp sườn Tây Bắc", "Thịt chế biến", "processed", "100g", "Lạp sườn/lạp xưởng hun khói vùng núi phía Bắc.", { energyKcal: 420, proteinG: 18, carbG: 6, fatG: 34, saturatedFatG: 12, sodiumMg: 1200, potassiumMg: 240 }, ["high-fat", "high-sodium"]],
  ["Cá suối nướng", "Cá", "cooked", "100g phần ăn được", "Cá suối nhỏ nướng, bỏ xương lớn.", { energyKcal: 155, proteinG: 24, carbG: 0, fatG: 6, calciumMg: 80, sodiumMg: 90, potassiumMg: 330, phosphorusMg: 220 }, ["high-protein", "low-carb"]],
  ["Rươi", "Hải sản", "raw", "100g phần ăn được", "Rươi tươi dùng làm chả rươi.", { energyKcal: 92, proteinG: 12, carbG: 2, fatG: 3.5, sodiumMg: 190, potassiumMg: 210, calciumMg: 60, ironMg: 2.2 }, ["high-protein", "low-fat"]],
  ["Cua bể Hải Phòng", "Hải sản", "raw", "100g thịt", "Thịt cua bể tươi.", { energyKcal: 97, proteinG: 19, carbG: 0, fatG: 1.5, cholesterolMg: 90, sodiumMg: 320, potassiumMg: 260, zincMg: 3.2 }, ["high-protein", "low-fat"]],
  ["Chả mực Hạ Long", "Thịt chế biến", "processed", "100g", "Chả mực giã tay chiên.", { energyKcal: 260, proteinG: 16, carbG: 12, fatG: 16, sodiumMg: 820, potassiumMg: 180, cholesterolMg: 140 }, ["high-sodium"]],
  ["Tôm chua Huế", "Hải sản", "processed", "100g", "Tôm chua lên men kiểu Huế.", { energyKcal: 115, proteinG: 12, carbG: 12, fatG: 2, sugarG: 6, sodiumMg: 1450, potassiumMg: 160 }, ["high-sodium"]],
  ["Mắm ruốc Huế", "Gia vị", "processed", "100g", "Mắm ruốc đậm vị, dùng lượng nhỏ.", { energyKcal: 90, proteinG: 14, carbG: 6, fatG: 1.5, sodiumMg: 5200, potassiumMg: 180, calciumMg: 80 }, ["high-sodium"]],
  ["Mắm nêm", "Gia vị", "processed", "100g", "Mắm nêm miền Trung/Nam, dùng pha chấm.", { energyKcal: 95, proteinG: 12, carbG: 9, fatG: 1.5, sugarG: 4, sodiumMg: 4800, potassiumMg: 160 }, ["high-sodium"]],
  ["Tré Bình Định", "Thịt chế biến", "processed", "100g", "Tré lên men từ tai/thịt heo và thính.", { energyKcal: 250, proteinG: 18, carbG: 6, fatG: 17, saturatedFatG: 6, sodiumMg: 980, potassiumMg: 220 }, ["high-sodium", "high-fat"]],
  ["Chả bò Đà Nẵng", "Thịt chế biến", "processed", "100g", "Chả bò miền Trung.", { energyKcal: 210, proteinG: 19, carbG: 5, fatG: 12, sodiumMg: 1050, potassiumMg: 260, ironMg: 2.4 }, ["high-protein", "high-sodium"]],
  ["Nem lụi", "Thịt chế biến", "cooked", "100g", "Thịt heo xay nướng xiên kiểu Huế/Nha Trang.", { energyKcal: 285, proteinG: 18, carbG: 8, fatG: 19, saturatedFatG: 6, sodiumMg: 650, potassiumMg: 260 }, ["high-protein", "high-fat"]],
  ["Bánh tráng Đại Lộc", "Tinh bột", "processed", "100g khô", "Bánh tráng gạo mè miền Trung.", { energyKcal: 345, proteinG: 6, carbG: 76, fatG: 1.5, fiberG: 1.2, sodiumMg: 260, glycemicIndex: 72 }, ["vegan", "low-fat"]],
  ["Bún song thằn", "Tinh bột", "processed", "100g khô", "Bún song thằn Bình Định làm từ đậu xanh.", { energyKcal: 338, proteinG: 1.5, carbG: 82, fatG: 0.4, fiberG: 1.0, sodiumMg: 25, potassiumMg: 55, glycemicIndex: 62 }, ["vegan", "gluten-free", "low-fat"]],
  ["Cá dìa", "Cá", "raw", "100g phần ăn được", "Cá dìa tươi phổ biến miền Trung.", { energyKcal: 118, proteinG: 20, carbG: 0, fatG: 4, sodiumMg: 82, potassiumMg: 310, phosphorusMg: 190 }, ["high-protein", "low-carb"]],
  ["Cá bống sông Trà", "Cá", "raw", "100g phần ăn được", "Cá bống nhỏ dùng kho tiêu.", { energyKcal: 105, proteinG: 18, carbG: 0, fatG: 3.2, calciumMg: 90, sodiumMg: 88, potassiumMg: 290 }, ["high-protein", "low-carb"]],
  ["Rau đắng", "Rau", "raw", "100g phần ăn được", "Rau đắng đất/rau đắng biển ăn lẩu hoặc cháo.", { energyKcal: 24, proteinG: 2.2, carbG: 4.1, fatG: 0.3, fiberG: 2.4, sodiumMg: 18, potassiumMg: 240, vitaminCMg: 18 }, ["vegan", "low-calorie", "low-fat"]],
  ["Bông súng", "Rau", "raw", "100g phần ăn được", "Cọng bông súng dùng lẩu mắm/canh chua.", { energyKcal: 20, proteinG: 1.3, carbG: 4.2, fatG: 0.1, fiberG: 2.0, sodiumMg: 12, potassiumMg: 180 }, ["vegan", "low-calorie", "low-fat"]],
  ["Bồn bồn", "Rau", "raw", "100g phần ăn được", "Bồn bồn Cà Mau/Bạc Liêu, dùng xào hoặc muối chua.", { energyKcal: 23, proteinG: 1.4, carbG: 4.8, fatG: 0.2, fiberG: 2.3, sodiumMg: 20, potassiumMg: 210 }, ["vegan", "low-calorie", "low-fat"]],
  ["Đọt choại", "Rau", "raw", "100g phần ăn được", "Đọt choại miền Tây dùng luộc/xào.", { energyKcal: 31, proteinG: 2.8, carbG: 5.5, fatG: 0.3, fiberG: 3.0, sodiumMg: 18, potassiumMg: 310, ironMg: 1.2 }, ["vegan", "low-calorie", "high-fiber"]],
  ["Mắm cá linh", "Gia vị", "processed", "100g", "Mắm cá linh dùng nấu lẩu mắm/bún mắm.", { energyKcal: 135, proteinG: 18, carbG: 5, fatG: 5, sodiumMg: 5600, potassiumMg: 220, calciumMg: 120 }, ["high-sodium"]],
  ["Mắm cá sặc", "Gia vị", "processed", "100g", "Mắm cá sặc miền Tây.", { energyKcal: 145, proteinG: 19, carbG: 4, fatG: 6, sodiumMg: 5400, potassiumMg: 230, calciumMg: 110 }, ["high-sodium"]],
  ["Khô cá lóc", "Cá", "processed", "100g", "Cá lóc phơi khô, thường mặn.", { energyKcal: 290, proteinG: 55, carbG: 0, fatG: 6, sodiumMg: 1800, potassiumMg: 720, calciumMg: 120 }, ["high-protein", "high-sodium", "low-carb"]],
  ["Tép khô", "Hải sản", "processed", "100g", "Tép/tôm nhỏ phơi khô.", { energyKcal: 250, proteinG: 52, carbG: 2, fatG: 4, calciumMg: 900, sodiumMg: 1600, potassiumMg: 650, zincMg: 3 }, ["high-protein", "high-calcium", "high-sodium"]],
  ["Bánh phồng tôm Sa Đéc", "Bánh kẹo", "processed", "100g khô", "Bánh phồng tôm khô trước khi chiên.", { energyKcal: 350, proteinG: 4, carbG: 76, fatG: 2, sodiumMg: 950, potassiumMg: 80 }, ["high-sodium"]],
  ["Cơm dừa nạo", "Trái cây", "raw", "100g phần ăn được", "Cơm dừa già nạo.", { energyKcal: 354, proteinG: 3.3, carbG: 15, fatG: 33, fiberG: 9, sodiumMg: 20, potassiumMg: 356, saturatedFatG: 30 }, ["vegan", "high-fat", "high-fiber"]],
  ["Nước màu dừa", "Gia vị", "processed", "100g", "Nước màu/kẹo đắng từ dừa hoặc đường.", { energyKcal: 290, proteinG: 0, carbG: 72, fatG: 0, sugarG: 70, sodiumMg: 20 }, ["high-sugar"]],
  ["Đường thốt nốt", "Gia vị", "processed", "100g", "Đường thốt nốt An Giang.", { energyKcal: 383, proteinG: 0.4, carbG: 95, fatG: 0, sugarG: 92, sodiumMg: 25, potassiumMg: 240 }, ["high-sugar", "high-calorie"]],
  ["Bánh tét lá cẩm", "Tinh bột", "processed", "100g", "Bánh tét nếp lá cẩm nhân đậu/thịt.", { energyKcal: 280, proteinG: 7, carbG: 45, fatG: 8, fiberG: 2.5, sodiumMg: 320, potassiumMg: 170 }, ["high-calorie"]],
  ["Cơm cháy Ninh Bình", "Tinh bột", "processed", "100g", "Cơm cháy chiên/sấy ăn kèm ruốc.", { energyKcal: 430, proteinG: 7, carbG: 72, fatG: 12, sodiumMg: 520, potassiumMg: 130 }, ["high-calorie"]],
  ["Dưa món", "Củ quả", "processed", "100g", "Củ quả muối chua ngọt ăn Tết.", { energyKcal: 70, proteinG: 1.2, carbG: 16, fatG: 0.2, sugarG: 10, sodiumMg: 1200, potassiumMg: 180 }, ["high-sodium"]]
].map(([name, category, state, basis, edibleNote, nutrients, tags]) => ({
  name: String(name),
  category: String(category),
  state: state as Food["state"],
  basis: String(basis),
  edibleNote: String(edibleNote),
  nutrients: nutrients as NutrientValues,
  tags: tags as string[] | undefined
}));

export const extraFoods4: Food[] = [
  ...oilSeeds,
  ...brothSeeds,
  ...mushroomSeeds,
  ...eggDairySeeds,
  ...snackSeeds,
  ...regionalSeeds
].map(makeFood);
