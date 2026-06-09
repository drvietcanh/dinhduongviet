import { extraFoods1 } from "./foods-extra1";
import { extraFoods2 } from "./foods-extra2";
import { extraFoods3 } from "./foods-extra3";
import { extraFoods4 } from "./foods-extra4";
import { extraFoods5 } from "./foods-extra5";
import { extraFoods6 } from "./foods-extra6";
import { extraFoods7 } from "./foods-extra7";
import { extraFoods8 } from "./foods-extra8";
import { extraRecipes } from "./recipes-extra";
import { extraRecipes2 } from "./recipes-extra2";
import { extraRecipes3 } from "./recipes-extra3";
import { extraRecipes4 } from "./recipes-extra4";
import { extraRecipes5 } from "./recipes-extra5";
import { extraRecipes6 } from "./recipes-extra6";
import { bulkFoods, bulkRecipes } from "./bulk-catalog";

export type NutrientValues = {
  energyKcal: number;
  proteinG: number;
  carbG: number;
  fatG: number;
  fiberG?: number;
  sugarG?: number;
  cholesterolMg?: number;
  saturatedFatG?: number;
  calciumMg?: number;
  ironMg?: number;
  zincMg?: number;
  sodiumMg?: number;
  potassiumMg?: number;
  magnesiumMg?: number;
  seleniumMcg?: number;
  vitaminAUg?: number;
  vitaminCMg?: number;
  vitaminDMcg?: number;
  vitaminEMg?: number;
  vitaminB12Mcg?: number;
  phosphorusMg?: number;
  glycemicIndex?: number;
};

export type Food = {
  id: string;
  slug: string;
  name: string;
  aliases: string[];
  category: string;
  state: "raw" | "cooked" | "processed";
  basis: string;
  edibleNote: string;
  imageUrl?: string;
  tags?: string[];
  nutrients: NutrientValues;
  sourceId: string;
  confidence: "high" | "medium" | "low";
  note: string;
};

export type RecipeItem = {
  foodId: string;
  amountG: number;
  note?: string;
};

export type Recipe = {
  id: string;
  slug: string;
  name: string;
  aliases: string[];
  servingName: string;
  servingWeightG: number;
  imageUrl?: string;
  tags?: string[];
  portionNote?: string;
  commonPortions?: {
    label: string;
    description: string;
    beefAmountG?: number;
    totalWeightG?: number;
  }[];
  items: RecipeItem[];
  sourceId: string;
  confidence: "high" | "medium" | "low";
  note: string;
};

export type Source = {
  id: string;
  name: string;
  year?: string;
  url?: string;
  license?: string;
  note: string;
};

export const sources: Source[] = [
  {
    id: "vn-fct-2007",
    name: "Bảng thành phần thực phẩm Việt Nam",
    year: "2007",
    url: "https://www.fao.org/fileadmin/templates/food_composition/documents/pdf/VTN_FCT_2007.pdf",
    note: "Nguồn nền tảng cho thực phẩm Việt Nam. Bộ dữ liệu trong app hiện là mẫu khởi đầu, cần đối chiếu thủ công trước khi dùng chính thức."
  },
  {
    id: "recipe-estimate-v1",
    name: "Công thức ước tính MVP",
    year: "2026",
    note: "Công thức định lượng để demo cách tính món ăn. Cần chuẩn hóa bằng tài liệu/sách nấu ăn hoặc đo thực tế."
  }
];

export const foods: Food[] = [
  {
    id: "com-trang",
    slug: "com-trang",
    name: "Cơm trắng",
    aliases: ["cơm", "cơm tẻ", "com trang"],
    category: "Tinh bột",
    state: "cooked",
    basis: "100g phần ăn được",
    edibleNote: "Cơm gạo tẻ đã nấu chín.",
    imageUrl: "/images/com-trang.jpg",
    tags: ["gluten-free", "low-fat", "vegan"],
    nutrients: { energyKcal: 130, proteinG: 2.7, carbG: 28.2, fatG: 0.3, fiberG: 0.4, calciumMg: 10, ironMg: 0.2, sodiumMg: 1, potassiumMg: 35 , glycemicIndex: 73, phosphorusMg: 32},
    sourceId: "vn-fct-2007",
    confidence: "medium",
    note: "Số liệu mẫu cần đối chiếu lại với bảng gốc trước khi phát hành chính thức."
  },
  {
    id: "banh-pho-chin",
    slug: "banh-pho-chin",
    name: "Bánh phở chín",
    aliases: ["bánh phở", "pho noodle", "banh pho"],
    category: "Tinh bột",
    state: "cooked",
    basis: "100g phần ăn được",
    edibleNote: "Bánh phở đã trụng/chín.",
    imageUrl: "/images/banh-pho.jpg",
    tags: ["gluten-free", "low-fat", "vegan"],
    nutrients: { energyKcal: 110, proteinG: 2.0, carbG: 24.0, fatG: 0.2, fiberG: 0.5, calciumMg: 8, ironMg: 0.3, sodiumMg: 20, potassiumMg: 25 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính để dựng MVP; cần thay bằng dữ liệu chuẩn."
  },
  {
    id: "thit-bo-nac",
    slug: "thit-bo-nac",
    name: "Thịt bò nạc",
    aliases: ["bò nạc", "thịt bò", "beef lean", "thit bo"],
    category: "Thịt",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Phần nạc, sống; giá trị thay đổi theo phần thịt và mỡ.",
    imageUrl: "/images/thit-bo-nac.jpg",
    tags: ["high-protein", "gluten-free", "low-carb"],
    nutrients: { energyKcal: 118, proteinG: 21.0, carbG: 0, fatG: 3.8, calciumMg: 7, ironMg: 2.7, zincMg: 4.0, sodiumMg: 60, potassiumMg: 330 , phosphorusMg: 210},
    sourceId: "vn-fct-2007",
    confidence: "medium",
    note: "Mục mẫu dựa trên nhóm thịt bò nạc; cần xác minh theo mã thực phẩm cụ thể."
  },
  {
    id: "thit-bo-chin",
    slug: "thit-bo-chin",
    name: "Thịt bò chín",
    aliases: ["bò chín", "thịt bò luộc", "beef cooked"],
    category: "Thịt",
    state: "cooked",
    basis: "100g phần ăn được",
    edibleNote: "Thịt bò nạc đã nấu chín.",
    imageUrl: "/images/thit-bo-chin.jpg",
    tags: ["high-protein", "gluten-free", "low-carb"],
    nutrients: { energyKcal: 170, proteinG: 28.0, carbG: 0, fatG: 6.0, calciumMg: 8, ironMg: 3.0, zincMg: 5.0, sodiumMg: 70, potassiumMg: 360 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính vì khối lượng nước mất khi nấu làm thay đổi mật độ dinh dưỡng."
  },
  {
    id: "uc-ga",
    slug: "uc-ga",
    name: "Ức gà",
    aliases: ["thịt ức gà", "chicken breast", "uc ga"],
    category: "Thịt",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Ức gà bỏ da.",
    imageUrl: "/images/uc-ga.jpg",
    tags: ["high-protein", "gluten-free", "low-carb", "low-fat"],
    nutrients: { energyKcal: 120, proteinG: 22.5, carbG: 0, fatG: 2.6, calciumMg: 11, ironMg: 0.7, zincMg: 0.8, sodiumMg: 60, potassiumMg: 256 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Dữ liệu mẫu cần thay bằng nguồn chuẩn."
  },
  {
    id: "trung-ga",
    slug: "trung-ga",
    name: "Trứng gà",
    aliases: ["trứng", "egg", "trung ga"],
    category: "Trứng sữa",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Trứng gà nguyên quả.",
    imageUrl: "/images/trung-ga.jpg",
    tags: ["high-protein", "gluten-free", "low-carb"],
    nutrients: { energyKcal: 166, proteinG: 14.8, carbG: 0.5, fatG: 11.6, cholesterolMg: 373, calciumMg: 55, ironMg: 2.7, zincMg: 1.1, sodiumMg: 134, potassiumMg: 140, vitaminAUg: 160, vitaminDMcg: 2.0, vitaminB12Mcg: 1.1 , phosphorusMg: 180},
    sourceId: "vn-fct-2007",
    confidence: "medium",
    note: "Số liệu mẫu cần đối chiếu lại trước khi phát hành."
  },
  {
    id: "dau-phu",
    slug: "dau-phu",
    name: "Đậu phụ",
    aliases: ["đậu hũ", "tofu", "dau phu"],
    category: "Đậu",
    state: "processed",
    basis: "100g phần ăn được",
    edibleNote: "Đậu phụ trắng.",
    imageUrl: "/images/dau-phu.jpg",
    tags: ["vegan", "gluten-free", "low-calorie", "high-calcium"],
    nutrients: { energyKcal: 76, proteinG: 8.0, carbG: 1.9, fatG: 4.8, fiberG: 0.3, calciumMg: 350, ironMg: 1.5, sodiumMg: 7, potassiumMg: 120 , phosphorusMg: 97},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Dữ liệu mẫu, khác biệt lớn theo loại đậu phụ và chất làm đông."
  },
  {
    id: "rau-muong",
    slug: "rau-muong",
    name: "Rau muống",
    aliases: ["water spinach", "rau muong"],
    category: "Rau",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Rau muống tươi.",
    imageUrl: "/images/rau-muong.jpg",
    tags: ["vegan", "gluten-free", "low-fat", "low-calorie"],
    nutrients: { energyKcal: 30, proteinG: 3.2, carbG: 2.5, fatG: 0.4, fiberG: 1.0, calciumMg: 100, ironMg: 1.4, sodiumMg: 40, potassiumMg: 312, vitaminCMg: 30 , phosphorusMg: 50},
    sourceId: "vn-fct-2007",
    confidence: "medium",
    note: "Số liệu mẫu cần đối chiếu lại với nguồn gốc."
  },
  {
    id: "chuoi",
    slug: "chuoi",
    name: "Chuối",
    aliases: ["banana", "chuoi"],
    category: "Trái cây",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Chuối chín phần ăn được.",
    imageUrl: "/images/chuoi.jpg",
    tags: ["vegan", "gluten-free", "low-fat", "natural-sugar"],
    nutrients: { energyKcal: 89, proteinG: 1.1, carbG: 22.8, fatG: 0.3, fiberG: 2.6, calciumMg: 5, ironMg: 0.3, sodiumMg: 1, potassiumMg: 358, vitaminCMg: 8.7 , glycemicIndex: 51, phosphorusMg: 22},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Dữ liệu mẫu, cần thay bằng nguồn chuẩn cho giống chuối Việt Nam."
  },
  {
    id: "nuoc-dung-bo",
    slug: "nuoc-dung-bo",
    name: "Nước dùng bò",
    aliases: ["nước phở", "beef broth", "nuoc dung bo"],
    category: "Nước dùng",
    state: "cooked",
    basis: "100g phần ăn được",
    edibleNote: "Nước dùng bò lọc bớt mỡ.",
    tags: ["gluten-free", "low-calorie", "low-fat"],
    nutrients: { energyKcal: 12, proteinG: 1.8, carbG: 0.3, fatG: 0.4, sodiumMg: 260, potassiumMg: 35 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính có sai số lớn, đặc biệt ở mỡ và natri."
  },
  {
    id: "rau-thom-hanh",
    slug: "rau-thom-hanh",
    name: "Rau thơm và hành",
    aliases: ["hành ngò", "rau phở", "rau thom hanh"],
    category: "Rau",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Hỗn hợp rau thơm, hành lá dùng kèm món nước.",
    tags: ["vegan", "gluten-free", "low-calorie", "low-fat"],
    nutrients: { energyKcal: 25, proteinG: 2.0, carbG: 4.0, fatG: 0.3, fiberG: 2.0, calciumMg: 60, ironMg: 1.2, sodiumMg: 20, potassiumMg: 250, vitaminCMg: 20 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính hỗn hợp, chỉ dùng để tính món ăn MVP."
  },
  {
    id: "bun-tuoi",
    slug: "bun-tuoi",
    name: "Bún tươi",
    aliases: ["bún", "rice vermicelli", "bun tuoi"],
    category: "Tinh bột",
    state: "cooked",
    basis: "100g phần ăn được",
    edibleNote: "Bún gạo tươi đã chần hoặc dùng trực tiếp.",
    tags: ["vegan", "gluten-free", "low-fat"],
    nutrients: { energyKcal: 110, proteinG: 1.7, carbG: 25.0, fatG: 0.2, fiberG: 0.5, calciumMg: 7, ironMg: 0.2, sodiumMg: 12, potassiumMg: 18 , glycemicIndex: 70, phosphorusMg: 20},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; độ ẩm bún thay đổi nhiều theo cơ sở sản xuất."
  },
  {
    id: "banh-mi",
    slug: "banh-mi",
    name: "Bánh mì",
    aliases: ["ổ bánh mì", "baguette", "banh mi"],
    category: "Tinh bột",
    state: "processed",
    basis: "100g phần ăn được",
    edibleNote: "Bánh mì trắng kiểu Việt Nam.",
    tags: ["vegan", "low-fat"],
    nutrients: { energyKcal: 265, proteinG: 8.5, carbG: 52.0, fatG: 3.2, fiberG: 2.7, calciumMg: 80, ironMg: 3.0, sodiumMg: 490, potassiumMg: 115 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; mỗi ổ thường khoảng 60-90g tùy tiệm."
  },
  {
    id: "khoai-lang",
    slug: "khoai-lang",
    name: "Khoai lang",
    aliases: ["sweet potato", "khoai lang"],
    category: "Tinh bột",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Khoai lang tươi, phần củ ăn được.",
    tags: ["vegan", "gluten-free", "low-fat", "high-fiber"],
    nutrients: { energyKcal: 86, proteinG: 1.6, carbG: 20.1, fatG: 0.1, fiberG: 3.0, calciumMg: 30, ironMg: 0.6, sodiumMg: 55, potassiumMg: 337, vitaminAUg: 709, vitaminCMg: 2.4 , glycemicIndex: 54, phosphorusMg: 47},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; giống khoai và cách nấu làm thay đổi năng lượng trên 100g."
  },
  {
    id: "thit-heo-nac",
    slug: "thit-heo-nac",
    name: "Thịt heo nạc",
    aliases: ["thịt lợn nạc", "thit lon nac", "pork lean", "thit heo nac"],
    category: "Thịt",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Thịt heo phần nạc, bỏ mỡ nhìn thấy.",
    tags: ["high-protein", "gluten-free", "low-carb"],
    nutrients: { energyKcal: 143, proteinG: 21.0, carbG: 0, fatG: 6.3, calciumMg: 7, ironMg: 0.9, zincMg: 2.0, sodiumMg: 57, potassiumMg: 340 , phosphorusMg: 230},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; cần tách rõ thăn, vai, nạc dăm khi chuẩn hóa chính thức."
  },
  {
    id: "suon-heo-nuong",
    slug: "suon-heo-nuong",
    name: "Sườn heo nướng",
    aliases: ["sườn nướng", "sườn lợn nướng", "suon lon nuong", "pork chop grilled", "suon heo nuong"],
    category: "Thịt",
    state: "cooked",
    basis: "100g phần ăn được",
    edibleNote: "Sườn heo đã nướng, tính phần ăn được không gồm xương.",
    tags: ["high-protein", "gluten-free", "low-carb"],
    nutrients: { energyKcal: 260, proteinG: 24.0, carbG: 2.0, fatG: 17.0, sodiumMg: 430, potassiumMg: 320, ironMg: 1.0, zincMg: 2.6 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; nước ướp và phần mỡ làm sai số lớn."
  },
  {
    id: "ba-chi-heo",
    slug: "ba-chi-heo",
    name: "Ba chỉ heo",
    aliases: ["thịt ba rọi", "ba chỉ lợn", "thịt ba rọi lợn", "ba chi lon", "pork belly", "ba chi"],
    category: "Thịt",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Thịt ba chỉ sống, gồm nạc và mỡ.",
    tags: ["gluten-free", "low-carb", "high-fat"],
    nutrients: { energyKcal: 518, proteinG: 9.3, carbG: 0, fatG: 53.0, sodiumMg: 32, potassiumMg: 185, ironMg: 0.5, zincMg: 1.0 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; tỉ lệ nạc/mỡ thay đổi rất lớn."
  },
  {
    id: "tom-tuoi",
    slug: "tom-tuoi",
    name: "Tôm tươi",
    aliases: ["shrimp", "tom tuoi"],
    category: "Thủy sản",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Tôm tươi bóc vỏ, phần ăn được.",
    tags: ["high-protein", "gluten-free", "low-carb", "low-fat"],
    nutrients: { energyKcal: 99, proteinG: 20.9, carbG: 0.2, fatG: 1.0, calciumMg: 70, ironMg: 0.5, zincMg: 1.3, sodiumMg: 148, potassiumMg: 259 , phosphorusMg: 210},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; khác biệt theo loại tôm và cách sơ chế."
  },
  {
    id: "ca-thu",
    slug: "ca-thu",
    name: "Cá thu",
    aliases: ["mackerel", "ca thu"],
    category: "Thủy sản",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Cá thu tươi, phần thịt ăn được.",
    tags: ["high-protein", "gluten-free", "low-carb", "high-omega3"],
    nutrients: { energyKcal: 205, proteinG: 18.6, carbG: 0, fatG: 13.9, calciumMg: 12, ironMg: 1.6, zincMg: 0.6, sodiumMg: 90, potassiumMg: 314 , phosphorusMg: 250},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; hàm lượng béo thay đổi theo mùa và loài."
  },
  {
    id: "ca-basa",
    slug: "ca-basa",
    name: "Cá basa",
    aliases: ["basa fish", "ca basa"],
    category: "Thủy sản",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Phi lê cá basa tươi.",
    tags: ["high-protein", "gluten-free", "low-carb"],
    nutrients: { energyKcal: 123, proteinG: 15.0, carbG: 0, fatG: 6.8, calciumMg: 10, ironMg: 0.4, sodiumMg: 55, potassiumMg: 280 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; cần đối chiếu dữ liệu cá nuôi Việt Nam."
  },
  {
    id: "sua-tuoi",
    slug: "sua-tuoi",
    name: "Sữa tươi",
    aliases: ["sữa bò", "milk", "sua tuoi"],
    category: "Trứng sữa",
    state: "processed",
    basis: "100ml/100g gần tương đương",
    edibleNote: "Sữa tươi nguyên chất không đường.",
    tags: ["gluten-free", "high-calcium", "high-protein"],
    nutrients: { energyKcal: 61, proteinG: 3.2, carbG: 4.8, fatG: 3.3, calciumMg: 113, sodiumMg: 43, potassiumMg: 132, vitaminAUg: 46 , phosphorusMg: 95},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; sữa tách béo/ít béo có số khác."
  },
  {
    id: "ca-rot",
    slug: "ca-rot",
    name: "Cà rốt",
    aliases: ["carrot", "ca rot"],
    category: "Rau củ",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Cà rốt tươi.",
    tags: ["vegan", "gluten-free", "low-fat", "low-calorie"],
    nutrients: { energyKcal: 41, proteinG: 0.9, carbG: 9.6, fatG: 0.2, fiberG: 2.8, calciumMg: 33, ironMg: 0.3, sodiumMg: 69, potassiumMg: 320, vitaminAUg: 835, vitaminCMg: 5.9 , glycemicIndex: 71, phosphorusMg: 35},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "ca-chua",
    slug: "ca-chua",
    name: "Cà chua",
    aliases: ["tomato", "ca chua"],
    category: "Rau củ",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Cà chua tươi.",
    tags: ["vegan", "gluten-free", "low-fat", "low-calorie"],
    nutrients: { energyKcal: 18, proteinG: 0.9, carbG: 3.9, fatG: 0.2, fiberG: 1.2, calciumMg: 10, ironMg: 0.3, sodiumMg: 5, potassiumMg: 237, vitaminAUg: 42, vitaminCMg: 13.7 , glycemicIndex: 30, phosphorusMg: 24},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "dua-leo",
    slug: "dua-leo",
    name: "Dưa leo",
    aliases: ["dưa chuột", "cucumber", "dua leo"],
    category: "Rau củ",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Dưa leo tươi.",
    tags: ["vegan", "gluten-free", "low-fat", "low-calorie"],
    nutrients: { energyKcal: 15, proteinG: 0.7, carbG: 3.6, fatG: 0.1, fiberG: 0.5, calciumMg: 16, ironMg: 0.3, sodiumMg: 2, potassiumMg: 147, vitaminCMg: 2.8 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "bap-cai",
    slug: "bap-cai",
    name: "Bắp cải",
    aliases: ["cabbage", "bap cai"],
    category: "Rau củ",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Bắp cải tươi.",
    tags: ["vegan", "gluten-free", "low-fat", "low-calorie"],
    nutrients: { energyKcal: 25, proteinG: 1.3, carbG: 5.8, fatG: 0.1, fiberG: 2.5, calciumMg: 40, ironMg: 0.5, sodiumMg: 18, potassiumMg: 170, vitaminCMg: 36.6 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "cam",
    slug: "cam",
    name: "Cam",
    aliases: ["orange", "cam tuoi"],
    category: "Trái cây",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Cam tươi, múi ăn được.",
    nutrients: { energyKcal: 47, proteinG: 0.9, carbG: 11.8, fatG: 0.1, fiberG: 2.4, calciumMg: 40, ironMg: 0.1, sodiumMg: 0, potassiumMg: 181, vitaminAUg: 11, vitaminCMg: 53.2 , glycemicIndex: 40, phosphorusMg: 14},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "tao",
    slug: "tao",
    name: "Táo",
    aliases: ["apple", "tao"],
    category: "Trái cây",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Táo tươi có vỏ.",
    nutrients: { energyKcal: 52, proteinG: 0.3, carbG: 13.8, fatG: 0.2, fiberG: 2.4, calciumMg: 6, ironMg: 0.1, sodiumMg: 1, potassiumMg: 107, vitaminCMg: 4.6 , glycemicIndex: 36, phosphorusMg: 11},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "xoai",
    slug: "xoai",
    name: "Xoài",
    aliases: ["mango", "xoai"],
    category: "Trái cây",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Xoài chín, phần thịt quả.",
    nutrients: { energyKcal: 60, proteinG: 0.8, carbG: 15.0, fatG: 0.4, fiberG: 1.6, calciumMg: 11, ironMg: 0.2, sodiumMg: 1, potassiumMg: 168, vitaminAUg: 54, vitaminCMg: 36.4 , glycemicIndex: 56, phosphorusMg: 14},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "du-du",
    slug: "du-du",
    name: "Đu đủ",
    aliases: ["papaya", "du du"],
    category: "Trái cây",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Đu đủ chín.",
    nutrients: { energyKcal: 43, proteinG: 0.5, carbG: 10.8, fatG: 0.3, fiberG: 1.7, calciumMg: 20, ironMg: 0.3, sodiumMg: 8, potassiumMg: 182, vitaminAUg: 47, vitaminCMg: 60.9 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "dau-an",
    slug: "dau-an",
    name: "Dầu ăn",
    aliases: ["dầu thực vật", "cooking oil", "dau an"],
    category: "Dầu mỡ",
    state: "processed",
    basis: "100g",
    edibleNote: "Dầu thực vật dùng nấu ăn.",
    nutrients: { energyKcal: 884, proteinG: 0, carbG: 0, fatG: 100.0 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; 1 muỗng canh khoảng 13-14g dầu."
  },
  {
    id: "nuoc-mam",
    slug: "nuoc-mam",
    name: "Nước mắm",
    aliases: ["fish sauce", "nuoc mam"],
    category: "Gia vị",
    state: "processed",
    basis: "100g",
    edibleNote: "Nước mắm dùng nêm/nước chấm.",
    nutrients: { energyKcal: 35, proteinG: 5.0, carbG: 3.6, fatG: 0, sodiumMg: 7800, potassiumMg: 288 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; natri thay đổi rất lớn theo độ đạm và thương hiệu."
  },
  {
    id: "duong-trang",
    slug: "duong-trang",
    name: "Đường trắng",
    aliases: ["đường", "sugar", "duong trang"],
    category: "Gia vị",
    state: "processed",
    basis: "100g",
    edibleNote: "Đường tinh luyện.",
    nutrients: { energyKcal: 387, proteinG: 0, carbG: 100.0, fatG: 0, sodiumMg: 1, potassiumMg: 2 , glycemicIndex: 65},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "sua-dac",
    slug: "sua-dac",
    name: "Sữa đặc",
    aliases: ["sữa đặc có đường", "condensed milk", "sua dac"],
    category: "Trứng sữa",
    state: "processed",
    basis: "100g",
    edibleNote: "Sữa đặc có đường.",
    tags: ["high-sugar", "gluten-free"],
    nutrients: { energyKcal: 321, proteinG: 7.9, carbG: 54.4, fatG: 8.7, sugarG: 54.4, calciumMg: 284, sodiumMg: 128, potassiumMg: 371 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "thit-bo-bam",
    slug: "thit-bo-bam",
    name: "Thịt bò băm",
    aliases: ["beef minced", "thit bo bam"],
    category: "Thịt",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Thịt bò xay/băm ít mỡ.",
    tags: ["high-protein", "gluten-free", "low-carb"],
    nutrients: { energyKcal: 152, proteinG: 20.0, carbG: 0, fatG: 7.0, ironMg: 2.5, zincMg: 3.8, sodiumMg: 60, potassiumMg: 315 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "tom-kho",
    slug: "tom-kho",
    name: "Tôm khô",
    aliases: ["dried shrimp", "tom kho"],
    category: "Thủy sản",
    state: "processed",
    basis: "100g",
    edibleNote: "Tôm bóc vỏ phơi khô.",
    tags: ["high-protein", "gluten-free", "low-carb", "high-calcium"],
    nutrients: { energyKcal: 299, proteinG: 62.0, carbG: 0, fatG: 4.5, calciumMg: 360, ironMg: 5.5, sodiumMg: 480, potassiumMg: 600 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; natri rất cao tùy loại."
  },
  {
    id: "nam-huong",
    slug: "nam-huong",
    name: "Nấm hương khô",
    aliases: ["shiitake", "nam huong kho"],
    category: "Nấm",
    state: "dried",
    basis: "100g khô",
    edibleNote: "Nấm hương khô, trước khi ngâm nước.",
    tags: ["vegan", "gluten-free"],
    nutrients: { energyKcal: 296, proteinG: 9.6, carbG: 63.0, fatG: 1.0, fiberG: 11.5, calciumMg: 15, ironMg: 1.8, sodiumMg: 13, potassiumMg: 984 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "moc-nhi",
    slug: "moc-nhi",
    name: "Mộc nhĩ",
    aliases: ["nấm mèo", "wood ear", "moc nhi"],
    category: "Nấm",
    state: "dried",
    basis: "100g khô",
    edibleNote: "Mộc nhĩ khô, trước khi ngâm.",
    tags: ["vegan", "gluten-free", "low-fat", "high-fiber"],
    nutrients: { energyKcal: 263, proteinG: 4.8, carbG: 67.0, fatG: 0.5, fiberG: 32.0, calciumMg: 100, ironMg: 6.9, sodiumMg: 35, potassiumMg: 523 , phosphorusMg: 150},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; giàu chất xơ."
  },
  {
    id: "hung-que",
    slug: "hung-que",
    name: "Húng quế",
    aliases: ["thai basil", "hung que"],
    category: "Rau gia vị",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Rau húng quế tươi.",
    tags: ["vegan", "gluten-free", "low-fat", "low-calorie"],
    nutrients: { energyKcal: 44, proteinG: 3.2, carbG: 6.1, fatG: 0.8, fiberG: 2.0, calciumMg: 177, ironMg: 3.2, sodiumMg: 4, potassiumMg: 295, vitaminAUg: 264, vitaminCMg: 18 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "xa-lach",
    slug: "xa-lach",
    name: "Xà lách",
    aliases: ["lettuce", "salad", "xa lach"],
    category: "Rau củ",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Xà lách tươi các loại.",
    tags: ["vegan", "gluten-free", "low-fat", "low-calorie"],
    nutrients: { energyKcal: 15, proteinG: 1.4, carbG: 2.9, fatG: 0.2, fiberG: 1.3, calciumMg: 36, ironMg: 0.9, sodiumMg: 28, potassiumMg: 194, vitaminAUg: 370, vitaminCMg: 9.2 , phosphorusMg: 29},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "hat-tieu",
    slug: "hat-tieu",
    name: "Hạt tiêu",
    aliases: ["pepper", "tieu", "hat tieu"],
    category: "Gia vị",
    state: "processed",
    basis: "100g",
    edibleNote: "Hạt tiêu xay.",
    tags: ["vegan", "gluten-free"],
    nutrients: { energyKcal: 251, proteinG: 10.4, carbG: 64.0, fatG: 3.3, fiberG: 25.0, calciumMg: 443, ironMg: 9.7, sodiumMg: 20, potassiumMg: 1259 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; lượng dùng thực tế rất nhỏ."
  },
  {
    id: "sua-dau-nanh",
    slug: "sua-dau-nanh",
    name: "Sữa đậu nành",
    aliases: ["sữa đậu nành", "soy milk", "sua dau nanh"],
    category: "Đồ uống",
    state: "processed",
    basis: "100ml",
    edibleNote: "Sữa đậu nành không đường.",
    tags: ["vegan", "gluten-free", "low-fat"],
    nutrients: { energyKcal: 33, proteinG: 2.9, carbG: 1.2, fatG: 1.8, calciumMg: 120, sodiumMg: 39, potassiumMg: 118, vitaminDMcg: 1.0 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "ca-phe-den",
    slug: "ca-phe-den",
    name: "Cà phê đen",
    aliases: ["cà phê", "cà phê đen", "coffee black", "ca phe", "cafe", "ca phe den", "cafe den", "ca pha"],
    category: "Đồ uống",
    state: "processed",
    basis: "100ml",
    edibleNote: "Cà phê pha phin không sữa, không đường.",
    tags: ["vegan", "gluten-free", "low-calorie"],
    nutrients: { energyKcal: 2, proteinG: 0.2, carbG: 0, fatG: 0, sodiumMg: 2, potassiumMg: 49 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; thêm sữa/đường làm thay đổi năng lượng đáng kể."
  },
  {
    id: "tra-xanh",
    slug: "tra-xanh",
    name: "Trà xanh",
    aliases: ["green tea", "che xanh", "tra xanh"],
    category: "Đồ uống",
    state: "processed",
    basis: "100ml",
    edibleNote: "Trà xanh pha không đường.",
    tags: ["vegan", "gluten-free", "low-calorie"],
    nutrients: { energyKcal: 1, proteinG: 0, carbG: 0, fatG: 0 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; thêm đường làm thay đổi."
  },
  {
    id: "bia",
    slug: "bia",
    name: "Bia",
    aliases: ["beer", "bia hơi"],
    category: "Đồ uống",
    state: "processed",
    basis: "100ml",
    edibleNote: "Bia hơi/bia chai trung bình 5% cồn.",
    tags: ["gluten", "alcohol"],
    nutrients: { energyKcal: 43, proteinG: 0.5, carbG: 3.6, fatG: 0, sodiumMg: 4, potassiumMg: 27 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; nồng độ cồn và năng lượng thay đổi theo loại."
  },
  {
    id: "ruou",
    slug: "ruou",
    name: "Rượu trắng",
    aliases: ["rượu đế", "rượu nếp", "ruou de", "rice liquor"],
    category: "Đồ uống",
    state: "processed",
    basis: "100ml",
    edibleNote: "Rượu trắng truyền thống 40-45% cồn.",
    tags: ["gluten-free", "alcohol"],
    nutrients: { energyKcal: 250, proteinG: 0, carbG: 0, fatG: 0 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; năng lượng từ cồn, thay đổi theo nồng độ."
  },
  {
    id: "tra-sua",
    slug: "tra-sua",
    name: "Trà sữa trân châu",
    aliases: ["bubble tea", "tra sua", "trà sữa"],
    category: "Đồ uống",
    state: "processed",
    basis: "100ml",
    edibleNote: "Trà sữa pha sẵn trung bình, khoảng 50% đường.",
    tags: ["high-sugar", "high-calorie"],
    nutrients: { energyKcal: 78, proteinG: 1.0, carbG: 14.5, fatG: 2.0, sugarG: 12.0, sodiumMg: 30, calciumMg: 40 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; một ly trung bình ~400-500ml, thay đổi theo topping và đường."
  }
];

export const recipes: Recipe[] = [
  {
    id: "pho-bo",
    slug: "pho-bo",
    name: "Phở bò",
    aliases: ["pho bo", "phở bò thường"],
    servingName: "1 tô thường",
    servingWeightG: 680,
    portionNote: "Trong bản MVP, 1 tô phở bò thường được giả định có khoảng 70g thịt bò chín. Thực tế thường dao động khoảng 50-100g tùy quán và loại tô.",
    commonPortions: [
      {
        label: "Tô ít thịt",
        description: "Khoảng 50g thịt bò chín, phù hợp tô nhỏ hoặc quán cho ít thịt.",
        beefAmountG: 50,
        totalWeightG: 640
      },
      {
        label: "Tô thường",
        description: "Khoảng 70g thịt bò chín, dùng làm khẩu phần mặc định của app.",
        beefAmountG: 70,
        totalWeightG: 680
      },
      {
        label: "Tô đặc biệt",
        description: "Khoảng 100g thịt bò chín hoặc hơn, thường thêm nạm/gầu/tái.",
        beefAmountG: 100,
        totalWeightG: 740
      }
    ],
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính theo công thức mẫu. Sai số phụ thuộc lượng bánh phở, thịt, nước béo và muối.",
    items: [
      { foodId: "banh-pho-chin", amountG: 180, note: "Bánh phở chín" },
      { foodId: "thit-bo-chin", amountG: 70, note: "Thịt bò chín/nạm/nạc" },
      { foodId: "nuoc-dung-bo", amountG: 400, note: "Nước dùng" },
      { foodId: "rau-thom-hanh", amountG: 30, note: "Rau thơm, hành" }
    ]
  },
  {
    id: "com-ga-uc-ga",
    slug: "com-ga-uc-ga",
    name: "Cơm ức gà",
    aliases: ["cơm gà", "com uc ga"],
    servingName: "1 phần",
    servingWeightG: 320,
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Mẫu món đơn giản để kiểm tra logic tính; chưa đại diện cho mọi cách chế biến.",
    items: [
      { foodId: "com-trang", amountG: 200, note: "Cơm trắng" },
      { foodId: "uc-ga", amountG: 100, note: "Ức gà" },
      { foodId: "rau-muong", amountG: 20, note: "Rau ăn kèm" }
    ]
  },
  {
    id: "pho-ga",
    slug: "pho-ga",
    name: "Phở gà",
    aliases: ["pho ga", "phở gà thường"],
    servingName: "1 tô thường",
    servingWeightG: 660,
    portionNote: "Trong bản MVP, 1 tô phở gà thường được giả định có khoảng 80g thịt gà/ức gà chín.",
    commonPortions: [
      { label: "Tô ít thịt", description: "Khoảng 60g thịt gà chín.", totalWeightG: 630 },
      { label: "Tô thường", description: "Khoảng 80g thịt gà chín.", totalWeightG: 660 },
      { label: "Tô đặc biệt", description: "Khoảng 120g thịt gà chín hoặc thêm trứng non/lòng tùy quán.", totalWeightG: 730 }
    ],
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính theo công thức mẫu; sai số phụ thuộc nước dùng, da gà và lượng bánh phở.",
    items: [
      { foodId: "banh-pho-chin", amountG: 180, note: "Bánh phở chín" },
      { foodId: "uc-ga", amountG: 80, note: "Thịt gà/ức gà" },
      { foodId: "nuoc-dung-bo", amountG: 370, note: "Tạm dùng nước dùng ít béo để demo, cần thay bằng nước dùng gà" },
      { foodId: "rau-thom-hanh", amountG: 30, note: "Rau thơm, hành" }
    ]
  },
  {
    id: "com-tam-suon",
    slug: "com-tam-suon",
    name: "Cơm tấm sườn",
    aliases: ["cơm tấm", "com tam", "com tam suon"],
    servingName: "1 đĩa thường",
    servingWeightG: 380,
    portionNote: "Một đĩa cơm tấm sườn thường được giả định có 220g cơm và khoảng 100g sườn nướng phần ăn được.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; chưa tính bì, chả trứng, mỡ hành và nước mắm nếu gọi thêm.",
    items: [
      { foodId: "com-trang", amountG: 220, note: "Cơm tấm/cơm trắng" },
      { foodId: "suon-heo-nuong", amountG: 100, note: "Sườn nướng phần ăn được" },
      { foodId: "dua-leo", amountG: 30, note: "Dưa leo ăn kèm" },
      { foodId: "nuoc-mam", amountG: 15, note: "Nước mắm pha ước tính" },
      { foodId: "dau-an", amountG: 5, note: "Mỡ hành/dầu ước tính" }
    ]
  },
  {
    id: "banh-mi-thit",
    slug: "banh-mi-thit",
    name: "Bánh mì thịt",
    aliases: ["banh mi thit", "bánh mì heo", "bánh mì Việt Nam"],
    servingName: "1 ổ thường",
    servingWeightG: 210,
    portionNote: "Một ổ bánh mì thịt thường được giả định có 80g bánh mì, 60g thịt heo, rau dưa và nước sốt.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; pate, bơ, chả lụa và sốt có thể làm năng lượng tăng đáng kể.",
    items: [
      { foodId: "banh-mi", amountG: 80, note: "Bánh mì" },
      { foodId: "thit-heo-nac", amountG: 60, note: "Thịt heo nạc/chả thịt ước tính" },
      { foodId: "dua-leo", amountG: 30, note: "Dưa leo" },
      { foodId: "ca-rot", amountG: 20, note: "Đồ chua/cà rốt ước tính" },
      { foodId: "dau-an", amountG: 8, note: "Bơ/dầu/sốt ước tính" },
      { foodId: "nuoc-mam", amountG: 5, note: "Gia vị mặn ước tính" }
    ]
  },
  {
    id: "goi-cuon",
    slug: "goi-cuon",
    name: "Gỏi cuốn",
    aliases: ["gỏi cuốn tôm thịt", "fresh spring roll", "goi cuon"],
    servingName: "2 cuốn",
    servingWeightG: 220,
    portionNote: "Khẩu phần mẫu gồm 2 cuốn, mỗi cuốn khoảng 1-2 con tôm nhỏ và ít thịt nạc.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; chưa tính nước chấm đậu phộng/tương đen nếu dùng nhiều.",
    items: [
      { foodId: "bun-tuoi", amountG: 70, note: "Bún trong cuốn" },
      { foodId: "tom-tuoi", amountG: 50, note: "Tôm" },
      { foodId: "thit-heo-nac", amountG: 35, note: "Thịt heo nạc luộc" },
      { foodId: "rau-thom-hanh", amountG: 45, note: "Rau sống" },
      { foodId: "dua-leo", amountG: 20, note: "Dưa leo" }
    ]
  },
  {
    id: "bun-thit-nuong",
    slug: "bun-thit-nuong",
    name: "Bún thịt nướng",
    aliases: ["bun thit nuong", "bún heo nướng"],
    servingName: "1 tô thường",
    servingWeightG: 430,
    portionNote: "Một tô thường được giả định có 200g bún và 90g thịt heo nướng.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; đậu phộng, chả giò và nước mắm ngọt có thể làm năng lượng tăng.",
    items: [
      { foodId: "bun-tuoi", amountG: 200, note: "Bún tươi" },
      { foodId: "thit-heo-nac", amountG: 90, note: "Thịt heo nướng ước tính" },
      { foodId: "rau-thom-hanh", amountG: 60, note: "Rau sống" },
      { foodId: "dua-leo", amountG: 40, note: "Dưa leo" },
      { foodId: "nuoc-mam", amountG: 20, note: "Nước mắm pha" },
      { foodId: "duong-trang", amountG: 8, note: "Đường trong nước mắm/ướp thịt" },
      { foodId: "dau-an", amountG: 7, note: "Dầu trong ướp/nướng" }
    ]
  }
];

foods.push(
  {
    id: "mi-goi",
    slug: "mi-goi",
    name: "Mì gói",
    aliases: ["mì ăn liền", "instant noodles", "mi goi"],
    category: "Tinh bột",
    state: "processed",
    basis: "100g sản phẩm khô",
    edibleNote: "Mì ăn liền chưa pha nước, gồm vắt mì và gói gia vị trung bình.",
    nutrients: { energyKcal: 472, proteinG: 8.5, carbG: 62.0, fatG: 20.0, fiberG: 2.5, calciumMg: 30, ironMg: 3.0, sodiumMg: 1800, potassiumMg: 180 , glycemicIndex: 75, phosphorusMg: 100},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; số liệu thay đổi rất lớn theo thương hiệu và gói gia vị."
  },
  {
    id: "mien-dong",
    slug: "mien-dong",
    name: "Miến dong",
    aliases: ["miến", "glass noodles", "mien dong"],
    category: "Tinh bột",
    state: "processed",
    basis: "100g sản phẩm khô",
    edibleNote: "Miến dong khô trước khi nấu.",
    nutrients: { energyKcal: 332, proteinG: 0.5, carbG: 82.0, fatG: 0.1, fiberG: 1.0, calciumMg: 20, ironMg: 1.0, sodiumMg: 20, potassiumMg: 30 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; khi nấu chín khối lượng tăng do hút nước."
  },
  {
    id: "khoai-tay",
    slug: "khoai-tay",
    name: "Khoai tây",
    aliases: ["potato", "khoai tay"],
    category: "Tinh bột",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Khoai tây tươi bỏ vỏ.",
    nutrients: { energyKcal: 77, proteinG: 2.0, carbG: 17.5, fatG: 0.1, fiberG: 2.2, calciumMg: 12, ironMg: 0.8, sodiumMg: 6, potassiumMg: 425, vitaminCMg: 19.7 , glycemicIndex: 78, phosphorusMg: 57},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "thit-ga-dui",
    slug: "thit-ga-dui",
    name: "Đùi gà",
    aliases: ["thịt đùi gà", "chicken thigh", "dui ga"],
    category: "Thịt",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Thịt đùi gà, phần ăn được, chưa tách biệt da.",
    nutrients: { energyKcal: 177, proteinG: 18.0, carbG: 0, fatG: 11.0, calciumMg: 10, ironMg: 0.9, zincMg: 1.7, sodiumMg: 80, potassiumMg: 240 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; bỏ da sẽ giảm chất béo và năng lượng."
  },
  {
    id: "thit-vit",
    slug: "thit-vit",
    name: "Thịt vịt",
    aliases: ["duck meat", "thit vit"],
    category: "Thịt",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Thịt vịt gồm nạc và da trung bình.",
    nutrients: { energyKcal: 337, proteinG: 19.0, carbG: 0, fatG: 28.0, calciumMg: 11, ironMg: 2.4, zincMg: 1.9, sodiumMg: 59, potassiumMg: 204 , phosphorusMg: 160},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; bỏ da làm giảm năng lượng đáng kể."
  },
  {
    id: "cha-lua",
    slug: "cha-lua",
    name: "Chả lụa",
    aliases: ["giò lụa", "vietnamese pork sausage", "cha lua"],
    category: "Thịt chế biến",
    state: "processed",
    basis: "100g phần ăn được",
    edibleNote: "Chả lụa/giò lụa làm từ thịt heo xay.",
    nutrients: { energyKcal: 230, proteinG: 16.0, carbG: 4.0, fatG: 16.0, sodiumMg: 850, potassiumMg: 220, ironMg: 1.0, zincMg: 1.8 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; natri và tỉ lệ mỡ khác nhau theo cơ sở sản xuất."
  },
  {
    id: "ca-ro-phi",
    slug: "ca-ro-phi",
    name: "Cá rô phi",
    aliases: ["tilapia", "ca ro phi"],
    category: "Thủy sản",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Thịt cá rô phi tươi.",
    nutrients: { energyKcal: 96, proteinG: 20.1, carbG: 0, fatG: 1.7, calciumMg: 10, ironMg: 0.6, zincMg: 0.3, sodiumMg: 52, potassiumMg: 302 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; cá chiên sẽ tăng năng lượng do dầu."
  },
  {
    id: "muc-tuoi",
    slug: "muc-tuoi",
    name: "Mực tươi",
    aliases: ["squid", "muc tuoi"],
    category: "Thủy sản",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Mực tươi làm sạch.",
    nutrients: { energyKcal: 92, proteinG: 15.6, carbG: 3.1, fatG: 1.4, calciumMg: 32, ironMg: 0.7, zincMg: 1.5, sodiumMg: 44, potassiumMg: 246 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "cai-xanh",
    slug: "cai-xanh",
    name: "Cải xanh",
    aliases: ["mustard greens", "cai xanh"],
    category: "Rau củ",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Rau cải xanh tươi.",
    nutrients: { energyKcal: 27, proteinG: 2.9, carbG: 4.7, fatG: 0.4, fiberG: 3.2, calciumMg: 115, ironMg: 1.6, sodiumMg: 20, potassiumMg: 384, vitaminAUg: 151, vitaminCMg: 70 , phosphorusMg: 37},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "cai-thia",
    slug: "cai-thia",
    name: "Cải thìa",
    aliases: ["bok choy", "cai thia"],
    category: "Rau củ",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Cải thìa tươi.",
    nutrients: { energyKcal: 13, proteinG: 1.5, carbG: 2.2, fatG: 0.2, fiberG: 1.0, calciumMg: 105, ironMg: 0.8, sodiumMg: 65, potassiumMg: 252, vitaminAUg: 223, vitaminCMg: 45 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "bi-do",
    slug: "bi-do",
    name: "Bí đỏ",
    aliases: ["bí ngô", "pumpkin", "bi do"],
    category: "Rau củ",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Bí đỏ tươi.",
    nutrients: { energyKcal: 26, proteinG: 1.0, carbG: 6.5, fatG: 0.1, fiberG: 0.5, calciumMg: 21, ironMg: 0.8, sodiumMg: 1, potassiumMg: 340, vitaminAUg: 426, vitaminCMg: 9 , glycemicIndex: 75, phosphorusMg: 44},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "nam-rom",
    slug: "nam-rom",
    name: "Nấm rơm",
    aliases: ["straw mushroom", "nam rom"],
    category: "Nấm",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Nấm rơm tươi.",
    nutrients: { energyKcal: 32, proteinG: 3.8, carbG: 4.6, fatG: 0.7, fiberG: 2.5, calciumMg: 3, ironMg: 1.3, sodiumMg: 5, potassiumMg: 318 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "dua-hau",
    slug: "dua-hau",
    name: "Dưa hấu",
    aliases: ["watermelon", "dua hau"],
    category: "Trái cây",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Dưa hấu đỏ, phần ruột ăn được.",
    nutrients: { energyKcal: 30, proteinG: 0.6, carbG: 7.6, fatG: 0.2, fiberG: 0.4, calciumMg: 7, ironMg: 0.2, sodiumMg: 1, potassiumMg: 112, vitaminAUg: 28, vitaminCMg: 8.1 , glycemicIndex: 72},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "bo-trai",
    slug: "bo-trai",
    name: "Bơ",
    aliases: ["avocado", "bo trai"],
    category: "Trái cây",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Quả bơ chín, phần thịt quả.",
    nutrients: { energyKcal: 160, proteinG: 2.0, carbG: 8.5, fatG: 14.7, fiberG: 6.7, calciumMg: 12, ironMg: 0.6, sodiumMg: 7, potassiumMg: 485, vitaminCMg: 10 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "sua-chua",
    slug: "sua-chua",
    name: "Sữa chua",
    aliases: ["yogurt", "sua chua"],
    category: "Trứng sữa",
    state: "processed",
    basis: "100g",
    edibleNote: "Sữa chua có đường mức trung bình.",
    nutrients: { energyKcal: 95, proteinG: 3.5, carbG: 14.0, fatG: 3.0, calciumMg: 120, sodiumMg: 45, potassiumMg: 155 , phosphorusMg: 90},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; sữa chua không đường thấp carbohydrate hơn."
  },
  {
    id: "lac-rang",
    slug: "lac-rang",
    name: "Lạc rang",
    aliases: ["đậu phộng rang", "dau phong rang", "lạc rang", "peanut", "lac rang"],
    category: "Hạt và đậu",
    state: "processed",
    basis: "100g",
    edibleNote: "Lạc/đậu phộng rang khô.",
    nutrients: { energyKcal: 585, proteinG: 24.4, carbG: 21.5, fatG: 49.7, fiberG: 8.0, calciumMg: 58, ironMg: 1.6, zincMg: 3.3, sodiumMg: 18, potassiumMg: 705 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; lạc rang muối có natri cao hơn."
  },
  {
    id: "dau-xanh",
    slug: "dau-xanh",
    name: "Đậu xanh",
    aliases: ["mung bean", "dau xanh"],
    category: "Hạt và đậu",
    state: "raw",
    basis: "100g hạt khô",
    edibleNote: "Đậu xanh khô.",
    nutrients: { energyKcal: 347, proteinG: 23.9, carbG: 62.6, fatG: 1.2, fiberG: 16.3, calciumMg: 132, ironMg: 6.7, zincMg: 2.7, sodiumMg: 15, potassiumMg: 1246 , phosphorusMg: 367},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; khi nấu chè/cháo khối lượng và năng lượng trên 100g thay đổi do nước và đường."
  }
);

recipes.push(
  {
    id: "bun-bo-hue",
    slug: "bun-bo-hue",
    name: "Bún bò Huế",
    aliases: ["bun bo hue", "bún bò"],
    servingName: "1 tô thường",
    servingWeightG: 720,
    portionNote: "Tô thường giả định có 200g bún, 80g thịt bò chín và 40g giò/sườn heo phần ăn được.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; chưa tách riêng mắm ruốc, sa tế và nước béo nên natri/chất béo có thể sai số lớn.",
    items: [
      { foodId: "bun-tuoi", amountG: 200, note: "Bún sợi to/tươi" },
      { foodId: "thit-bo-chin", amountG: 80, note: "Thịt bò chín" },
      { foodId: "suon-heo-nuong", amountG: 40, note: "Tạm đại diện phần thịt heo/giò ăn được" },
      { foodId: "nuoc-dung-bo", amountG: 370, note: "Nước dùng cay/mặn ước tính" },
      { foodId: "rau-thom-hanh", amountG: 30, note: "Rau, hành" }
    ]
  },
  {
    id: "chao-ga",
    slug: "chao-ga",
    name: "Cháo gà",
    aliases: ["chao ga", "cháo thịt gà"],
    servingName: "1 tô",
    servingWeightG: 420,
    portionNote: "Một tô cháo gà thường được giả định có lượng gạo tương đương khoảng 80g cơm và 70g thịt gà.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; cháo loãng/đặc và lượng dầu hành làm thay đổi năng lượng.",
    items: [
      { foodId: "com-trang", amountG: 80, note: "Đại diện phần gạo đã nấu nhừ" },
      { foodId: "uc-ga", amountG: 70, note: "Thịt gà xé" },
      { foodId: "rau-thom-hanh", amountG: 15, note: "Hành, rau thơm" },
      { foodId: "dau-an", amountG: 3, note: "Dầu/mỡ hành ước tính" }
    ]
  },
  {
    id: "hu-tieu-nam-vang",
    slug: "hu-tieu-nam-vang",
    name: "Hủ tiếu Nam Vang",
    aliases: ["hu tieu", "hủ tiếu", "hu tieu nam vang"],
    servingName: "1 tô thường",
    servingWeightG: 680,
    portionNote: "Tô thường giả định dùng bún/phở gạo đại diện 180g, có tôm và thịt heo.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; cần thêm nguyên liệu hủ tiếu riêng để chính xác hơn.",
    items: [
      { foodId: "banh-pho-chin", amountG: 180, note: "Tạm đại diện sợi hủ tiếu chín" },
      { foodId: "thit-heo-nac", amountG: 60, note: "Thịt heo nạc" },
      { foodId: "tom-tuoi", amountG: 40, note: "Tôm" },
      { foodId: "nuoc-dung-bo", amountG: 370, note: "Nước dùng ước tính" },
      { foodId: "rau-thom-hanh", amountG: 30, note: "Hành, rau ăn kèm" }
    ]
  },
  {
    id: "thit-kho-trung",
    slug: "thit-kho-trung",
    name: "Thịt kho trứng",
    aliases: ["thịt kho tàu", "thit kho trung", "thit kho tau"],
    servingName: "1 phần",
    servingWeightG: 220,
    portionNote: "Một phần mẫu gồm 100g ba chỉ, 1 trứng khoảng 50g và nước kho/gia vị.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; lượng mỡ, đường và nước mắm trong nước kho làm sai số lớn.",
    items: [
      { foodId: "ba-chi-heo", amountG: 100, note: "Thịt ba chỉ" },
      { foodId: "trung-ga", amountG: 50, note: "Một trứng cỡ vừa" },
      { foodId: "nuoc-mam", amountG: 10, note: "Nước mắm/gia vị mặn" },
      { foodId: "duong-trang", amountG: 8, note: "Đường/nước màu" }
    ]
  },
  {
    id: "canh-bi-do-thit-bam",
    slug: "canh-bi-do-thit-bam",
    name: "Canh bí đỏ thịt băm",
    aliases: ["canh bi do", "canh bí đỏ", "canh bí đỏ thịt bằm"],
    servingName: "1 tô nhỏ",
    servingWeightG: 320,
    portionNote: "Một tô nhỏ giả định gồm 180g bí đỏ và 40g thịt heo nạc băm.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; lượng nước dùng và gia vị mặn thay đổi theo gia đình.",
    items: [
      { foodId: "bi-do", amountG: 180, note: "Bí đỏ" },
      { foodId: "thit-heo-nac", amountG: 40, note: "Thịt heo nạc băm" },
      { foodId: "rau-thom-hanh", amountG: 10, note: "Hành, rau thơm" },
      { foodId: "nuoc-mam", amountG: 5, note: "Gia vị mặn ước tính" }
    ]
  }
);

foods.push(
  {
    id: "gao-te",
    slug: "gao-te",
    name: "Gạo tẻ",
    aliases: ["gạo trắng", "white rice raw", "gao te"],
    category: "Tinh bột",
    state: "raw",
    basis: "100g hạt khô",
    edibleNote: "Gạo tẻ trắng trước khi nấu.",
    nutrients: { energyKcal: 365, proteinG: 7.1, carbG: 80.0, fatG: 0.7, fiberG: 1.3, calciumMg: 28, ironMg: 0.8, sodiumMg: 5, potassiumMg: 115 , glycemicIndex: 75},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; khi nấu thành cơm khối lượng tăng do hấp thu nước."
  },
  {
    id: "trung-vit",
    slug: "trung-vit",
    name: "Trứng vịt",
    aliases: ["duck egg", "trung vit"],
    category: "Trứng sữa",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Trứng vịt nguyên quả.",
    nutrients: { energyKcal: 185, proteinG: 12.8, carbG: 1.5, fatG: 13.8, calciumMg: 64, ironMg: 3.9, zincMg: 1.4, sodiumMg: 146, potassiumMg: 222, vitaminAUg: 194 , phosphorusMg: 200},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; trứng muối/trứng lộn có dữ liệu khác."
  },
  {
    id: "gan-heo",
    slug: "gan-heo",
    name: "Gan heo",
    aliases: ["pork liver", "gan lon", "gan heo"],
    category: "Thịt",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Gan heo tươi.",
    nutrients: { energyKcal: 134, proteinG: 21.4, carbG: 2.5, fatG: 3.7, calciumMg: 9, ironMg: 18.0, zincMg: 4.0, sodiumMg: 87, potassiumMg: 273, vitaminAUg: 6500 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; rất giàu vitamin A và sắt, không nên diễn giải như khuyến nghị ăn thường xuyên."
  },
  {
    id: "cua-dong",
    slug: "cua-dong",
    name: "Cua đồng",
    aliases: ["field crab", "cua dong"],
    category: "Thủy sản",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Cua đồng giã/lọc phần ăn được ước tính.",
    nutrients: { energyKcal: 89, proteinG: 12.3, carbG: 2.0, fatG: 3.3, calciumMg: 500, ironMg: 4.7, zincMg: 2.0, sodiumMg: 95, potassiumMg: 280 , phosphorusMg: 180},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; canxi phụ thuộc phần mai/vỏ được giã lọc."
  },
  {
    id: "ca-nuc",
    slug: "ca-nuc",
    name: "Cá nục",
    aliases: ["scad fish", "ca nuc"],
    category: "Thủy sản",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Thịt cá nục tươi.",
    nutrients: { energyKcal: 120, proteinG: 20.2, carbG: 0, fatG: 4.2, calciumMg: 50, ironMg: 1.1, zincMg: 0.8, sodiumMg: 75, potassiumMg: 330 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; cá kho/chiên sẽ thay đổi natri và chất béo."
  },
  {
    id: "rau-ngot",
    slug: "rau-ngot",
    name: "Rau ngót",
    aliases: ["katuk", "rau ngot"],
    category: "Rau củ",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Rau ngót tươi.",
    nutrients: { energyKcal: 35, proteinG: 5.3, carbG: 3.4, fatG: 0.6, fiberG: 2.5, calciumMg: 169, ironMg: 2.7, sodiumMg: 25, potassiumMg: 457, vitaminAUg: 665, vitaminCMg: 185 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; cần đối chiếu lại bảng Việt Nam vì rau ngót có vi chất cao."
  },
  {
    id: "mong-toi",
    slug: "mong-toi",
    name: "Mồng tơi",
    aliases: ["malabar spinach", "mong toi"],
    category: "Rau củ",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Rau mồng tơi tươi.",
    nutrients: { energyKcal: 19, proteinG: 1.8, carbG: 3.4, fatG: 0.3, fiberG: 2.1, calciumMg: 109, ironMg: 1.2, sodiumMg: 24, potassiumMg: 510, vitaminAUg: 400, vitaminCMg: 102 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "gia-do",
    slug: "gia-do",
    name: "Giá đỗ",
    aliases: ["giá đậu", "bean sprouts", "gia do"],
    category: "Rau củ",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Giá đỗ xanh tươi.",
    nutrients: { energyKcal: 30, proteinG: 3.0, carbG: 6.0, fatG: 0.2, fiberG: 1.8, calciumMg: 13, ironMg: 0.9, sodiumMg: 6, potassiumMg: 149, vitaminCMg: 13 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "hanh-tay",
    slug: "hanh-tay",
    name: "Hành tây",
    aliases: ["onion", "hanh tay"],
    category: "Rau củ",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Hành tây tươi.",
    nutrients: { energyKcal: 40, proteinG: 1.1, carbG: 9.3, fatG: 0.1, fiberG: 1.7, calciumMg: 23, ironMg: 0.2, sodiumMg: 4, potassiumMg: 146, vitaminCMg: 7.4 },
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP."
  },
  {
    id: "toi",
    slug: "toi",
    name: "Tỏi",
    aliases: ["garlic", "toi"],
    category: "Gia vị",
    state: "raw",
    basis: "100g phần ăn được",
    edibleNote: "Tỏi tươi bóc vỏ.",
    nutrients: { energyKcal: 149, proteinG: 6.4, carbG: 33.1, fatG: 0.5, fiberG: 2.1, calciumMg: 181, ironMg: 1.7, sodiumMg: 17, potassiumMg: 401, vitaminCMg: 31 , phosphorusMg: 153},
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; lượng dùng thực tế thường rất nhỏ."
  }
);

recipes.push(
  {
    id: "com-rang-trung",
    slug: "com-rang-trung",
    name: "Cơm rang trứng",
    aliases: ["cơm chiên trứng", "com rang trung", "com chien trung"],
    servingName: "1 đĩa",
    servingWeightG: 330,
    portionNote: "Một đĩa mẫu gồm 250g cơm, 1 trứng và khoảng 10g dầu.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; dầu và topping như xúc xích/chả làm năng lượng tăng nhanh.",
    items: [
      { foodId: "com-trang", amountG: 250, note: "Cơm trắng" },
      { foodId: "trung-ga", amountG: 50, note: "Một trứng" },
      { foodId: "dau-an", amountG: 10, note: "Dầu chiên" },
      { foodId: "hanh-tay", amountG: 20, note: "Hành/rau củ" },
      { foodId: "nuoc-mam", amountG: 5, note: "Gia vị mặn" }
    ]
  },
  {
    id: "mi-goi-trung",
    slug: "mi-goi-trung",
    name: "Mì gói trứng",
    aliases: ["mì trứng", "mi goi trung"],
    servingName: "1 tô",
    servingWeightG: 520,
    portionNote: "Một tô mẫu gồm 1 gói mì khoảng 75g khô và 1 trứng gà.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; natri phụ thuộc lượng gói gia vị dùng.",
    items: [
      { foodId: "mi-goi", amountG: 75, note: "Một gói mì khô ước tính" },
      { foodId: "trung-ga", amountG: 50, note: "Một trứng" },
      { foodId: "cai-xanh", amountG: 50, note: "Rau cải thêm vào" }
    ]
  },
  {
    id: "canh-rau-ngot-thit-bam",
    slug: "canh-rau-ngot-thit-bam",
    name: "Canh rau ngót thịt băm",
    aliases: ["canh rau ngot", "canh rau ngót"],
    servingName: "1 tô nhỏ",
    servingWeightG: 330,
    portionNote: "Một tô nhỏ giả định gồm 100g rau ngót và 40g thịt heo nạc băm.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; lượng nước và gia vị làm thay đổi natri trên khẩu phần.",
    items: [
      { foodId: "rau-ngot", amountG: 100, note: "Rau ngót" },
      { foodId: "thit-heo-nac", amountG: 40, note: "Thịt heo nạc băm" },
      { foodId: "nuoc-mam", amountG: 5, note: "Gia vị mặn" }
    ]
  },
  {
    id: "ca-nuc-kho",
    slug: "ca-nuc-kho",
    name: "Cá nục kho",
    aliases: ["cá kho", "ca nuc kho"],
    servingName: "1 phần",
    servingWeightG: 180,
    portionNote: "Một phần mẫu gồm khoảng 120g cá nục phần ăn được và nước kho.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; nước mắm, đường và dầu trong nước kho quyết định natri/năng lượng.",
    items: [
      { foodId: "ca-nuc", amountG: 120, note: "Cá nục" },
      { foodId: "nuoc-mam", amountG: 12, note: "Nước mắm/gia vị" },
      { foodId: "duong-trang", amountG: 6, note: "Đường/nước màu" },
      { foodId: "dau-an", amountG: 5, note: "Dầu/mỡ ước tính" }
    ]
  },
  {
    id: "dau-phu-sot-ca-chua",
    slug: "dau-phu-sot-ca-chua",
    name: "Đậu phụ sốt cà chua",
    aliases: ["đậu sốt cà", "dau phu sot ca chua"],
    servingName: "1 phần",
    servingWeightG: 260,
    portionNote: "Một phần mẫu gồm 180g đậu phụ và 80g cà chua/sốt.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; nếu chiên đậu trước khi sốt, năng lượng sẽ cao hơn nhiều.",
    items: [
      { foodId: "dau-phu", amountG: 180, note: "Đậu phụ" },
      { foodId: "ca-chua", amountG: 80, note: "Cà chua" },
      { foodId: "dau-an", amountG: 8, note: "Dầu xào/sốt" },
      { foodId: "nuoc-mam", amountG: 5, note: "Gia vị mặn" }
    ]
  },
  {
    id: "bun-rieu-cua",
    slug: "bun-rieu-cua",
    name: "Bún riêu cua",
    aliases: ["bun rieu", "bún riêu"],
    servingName: "1 tô thường",
    servingWeightG: 650,
    tags: ["gluten-free", "vietnamese-soup"],
    portionNote: "Một tô thường giả định có 200g bún, 100g cua/gạch và đậu phụ.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; nước dùng cà chua và dầu gấc tạo sai số.",
    items: [
      { foodId: "bun-tuoi", amountG: 200, note: "Bún tươi" },
      { foodId: "cua-dong", amountG: 80, note: "Thịt cua/gạch" },
      { foodId: "ca-chua", amountG: 60, note: "Cà chua" },
      { foodId: "dau-phu", amountG: 50, note: "Đậu phụ" },
      { foodId: "dau-an", amountG: 10, note: "Dầu gấc/dầu ăn" }
    ]
  },
  {
    id: "banh-xeo",
    slug: "banh-xeo",
    name: "Bánh xèo",
    aliases: ["banh xeo"],
    servingName: "1 cái thường",
    servingWeightG: 250,
    tags: ["gluten-free", "vietnamese-savory-pancake"],
    portionNote: "Một cái bánh xèo miền Trung giả định khoảng 200g với nhân tôm thịt và giá.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; bột pha mỡ và dầu chiên làm sai số năng lượng lớn.",
    items: [
      { foodId: "gao-te", amountG: 50, note: "Bột gạo (khoảng 50g gạo khô)" },
      { foodId: "tom-tuoi", amountG: 40, note: "Tôm" },
      { foodId: "thit-heo-nac", amountG: 30, note: "Thịt heo" },
      { foodId: "gia-do", amountG: 60, note: "Giá đỗ" },
      { foodId: "dau-an", amountG: 15, note: "Dầu chiên" },
      { foodId: "rau-thom-hanh", amountG: 30, note: "Rau ăn kèm" }
    ]
  },
  {
    id: "nem-ran",
    slug: "nem-ran",
    name: "Nem rán",
    aliases: ["chả giò", "spring rolls fried", "nem ran", "cha gio"],
    servingName: "4 cuốn nhỏ",
    servingWeightG: 180,
    tags: ["fried-food"],
    portionNote: "Bốn cuốn nem nhỏ, giả định nhân thịt + mộc nhĩ + miến.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; lượng dầu ngấm và vỏ bánh tráng tạo sai số rất lớn.",
    items: [
      { foodId: "thit-bo-bam", amountG: 80, note: "Thịt băm" },
      { foodId: "moc-nhi", amountG: 10, note: "Mộc nhĩ khô ngâm (trọng lượng khô)" },
      { foodId: "mien-dong", amountG: 20, note: "Miến khô ngâm" },
      { foodId: "ca-rot", amountG: 30, note: "Cà rốt băm" },
      { foodId: "dau-an", amountG: 20, note: "Dầu chiên" },
      { foodId: "trung-ga", amountG: 20, note: "Trứng kết dính" }
    ]
  },
  {
    id: "goi-ga",
    slug: "goi-ga",
    name: "Gỏi gà",
    aliases: ["gỏi gà bắp cải", "goi ga"],
    servingName: "1 phần",
    servingWeightG: 260,
    tags: ["gluten-free", "appetizer"],
    portionNote: "Gỏi gà bắp cải phổ biến, trộn với hành tây và rau thơm.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; lượng dầu giấm/sốt trộn làm sai số năng lượng.",
    items: [
      { foodId: "uc-ga", amountG: 80, note: "Thịt ức gà luộc xé" },
      { foodId: "bap-cai", amountG: 80, note: "Bắp cải thái sợi" },
      { foodId: "hanh-tay", amountG: 40, note: "Hành tây" },
      { foodId: "ca-rot", amountG: 30, note: "Cà rốt sợi" },
      { foodId: "rau-thom-hanh", amountG: 20, note: "Rau thơm" },
      { foodId: "dau-an", amountG: 5, note: "Dầu giấm/sốt" },
      { foodId: "duong-trang", amountG: 3, note: "Đường trộn" }
    ]
  },
  {
    id: "canh-chua-ca",
    slug: "canh-chua-ca",
    name: "Canh chua cá",
    aliases: ["canh chua", "canh chua cá lóc"],
    servingName: "1 tô nhỏ",
    servingWeightG: 350,
    tags: ["gluten-free", "low-calorie"],
    portionNote: "Canh chua cá lóc hoặc cá basa phổ biến, với cà chua, bạc hà và giá.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; lượng dầu và đường thay đổi tùy nêm nếm.",
    items: [
      { foodId: "ca-basa", amountG: 80, note: "Cá lóc/basa" },
      { foodId: "ca-chua", amountG: 60, note: "Cà chua" },
      { foodId: "gia-do", amountG: 40, note: "Giá đỗ" },
      { foodId: "rau-thom-hanh", amountG: 20, note: "Hành ngò, rau thơm" },
      { foodId: "dau-an", amountG: 5, note: "Dầu xào" },
      { foodId: "nuoc-mam", amountG: 8, note: "Nước mắm" },
      { foodId: "duong-trang", amountG: 4, note: "Đường" }
    ]
  },
  {
    id: "ca-kho-to",
    slug: "ca-kho-to",
    name: "Cá kho tộ",
    aliases: ["ca kho", "cá kho", "ca kho to"],
    servingName: "1 phần",
    servingWeightG: 200,
    tags: ["gluten-free", "low-carb"],
    portionNote: "Cá chặt khúc kho trong nước mắm, đường và tiêu.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; lượng nước mắm và đường quyết định natri/năng lượng.",
    items: [
      { foodId: "ca-nuc", amountG: 150, note: "Cá rô đồng/cá nục" },
      { foodId: "nuoc-mam", amountG: 15, note: "Nước mắm" },
      { foodId: "duong-trang", amountG: 10, note: "Đường/nước màu" },
      { foodId: "dau-an", amountG: 5, note: "Dầu/mỡ" },
      { foodId: "hat-tieu", amountG: 1, note: "Tiêu" }
    ]
  },
  {
    id: "bun-cha",
    slug: "bun-cha",
    name: "Bún chả",
    aliases: ["bun cha", "bún chả Hà Nội"],
    servingName: "1 phần thường",
    servingWeightG: 450,
    tags: ["gluten-free", "high-protein"],
    portionNote: "Phần bún chả Hà Nội gồm 200g bún, 100g chả thịt và rau sống.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; lượng mỡ ở chả, nước mắm ngọt và ướp thịt tạo sai số.",
    items: [
      { foodId: "bun-tuoi", amountG: 200, note: "Bún tươi" },
      { foodId: "thit-heo-nac", amountG: 100, note: "Chả thịt nướng" },
      { foodId: "xa-lach", amountG: 50, note: "Rau sống" },
      { foodId: "gia-do", amountG: 30, note: "Giá đỗ" },
      { foodId: "nuoc-mam", amountG: 25, note: "Nước mắm pha" },
      { foodId: "duong-trang", amountG: 5, note: "Đường trong nước chấm" },
      { foodId: "dau-an", amountG: 5, note: "Dầu ướp/nướng" }
    ]
  },
  {
    id: "com-hen",
    slug: "com-hen",
    name: "Cơm hến (Huế)",
    aliases: ["cơm hến Huế", "com hen hue"],
    servingName: "1 tô",
    servingWeightG: 280,
    tags: ["vietnamese", "central-vietnam"],
    portionNote: "Món đặc sản Huế: cơm nguội trộn thịt hến, tóp mỡ và rau sống.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; lượng tóp mỡ và lạc rang thay đổi nhiều.",
    items: [
      { foodId: "com-trang", amountG: 200, note: "Cơm nguội" },
      { foodId: "lac-rang", amountG: 8, note: "Lạc rang giã nhỏ" },
      { foodId: "dau-an", amountG: 3, note: "Tóp mỡ và dầu" }
    ]
  },
  {
    id: "mien-lon",
    slug: "mien-lon",
    name: "Miến lòng gà",
    aliases: ["miến lòng", "miến măng gà", "miến gà", "mien long ga"],
    servingName: "1 tô thường",
    servingWeightG: 550,
    tags: ["vietnamese"],
    portionNote: "Miến nấu lòng gà măng (Bắc) / tim gan gà (Nam) / thêm tiêu ớt (Huế).",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; lòng gà chứa nhiều cholesterol.",
    items: [
      { foodId: "mien-dong", amountG: 80, note: "Miến dong khô ngâm nước" },
      { foodId: "thit-ga-dui", amountG: 50, note: "Thịt gà xé" },
      { foodId: "nuoc-dung-bo", amountG: 370, note: "Tạm dùng nước dùng" }
    ]
  },
  {
    id: "chao-long",
    slug: "chao-long",
    name: "Cháo lòng",
    aliases: ["cháo lòng heo", "cháo lòng (Bắc)", "cháo lòng tiết (Nam)", "chao long"],
    servingName: "1 tô",
    servingWeightG: 350,
    tags: ["vietnamese", "street-food"],
    portionNote: "Cháo lòng heo + tiết. Bắc thêm dồi, Nam thêm hành phi.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; lòng huyết nhiều cholesterol và natri.",
    items: [
      { foodId: "com-trang", amountG: 120, note: "Gạo nấu cháo" },
      { foodId: "thit-heo-nac", amountG: 40, note: "Lòng/thịt heo" },
      { foodId: "gan-heo", amountG: 20, note: "Gan heo" },
      { foodId: "dau-an", amountG: 5, note: "Hành phi" },
      { foodId: "nuoc-mam", amountG: 8, note: "Gia vị" }
    ]
  },
  {
    id: "che-dau-xanh",
    slug: "che-dau-xanh",
    name: "Chè đậu xanh",
    aliases: ["chè đậu xanh đánh", "che dau xanh"],
    servingName: "1 chén",
    servingWeightG: 200,
    tags: ["vegan", "dessert"],
    portionNote: "Chè đậu xanh nấu đường. Miền Nam thêm nước cốt dừa.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; lượng đường và nước cốt dừa quyết định năng lượng.",
    items: [
      { foodId: "dau-xanh", amountG: 50, note: "Đậu xanh ngâm nấu" },
      { foodId: "duong-trang", amountG: 30, note: "Đường" }
    ]
  },
  {
    id: "muc-xao",
    slug: "muc-xao",
    name: "Mực xào chua ngọt",
    aliases: ["mực xào hành", "muc xao"],
    servingName: "1 phần",
    servingWeightG: 200,
    tags: ["high-protein", "low-carb"],
    portionNote: "Mực xào hành tây và cà chua, phổ biến cả ba miền.",
    sourceId: "recipe-estimate-v1",
    confidence: "low",
    note: "Ước tính MVP; lượng dầu xào tạo sai số.",
    items: [
      { foodId: "muc-tuoi", amountG: 120, note: "Mực tươi" },
      { foodId: "hanh-tay", amountG: 40, note: "Hành tây" },
      { foodId: "ca-chua", amountG: 30, note: "Cà chua" },
      { foodId: "dau-an", amountG: 10, note: "Dầu xào" },
      { foodId: "nuoc-mam", amountG: 5, note: "Gia vị" }
    ]
  }
);

function uniqueFoodAdditionsBySlug(additions: Food[]) {
  const seen = new Set(foods.map((food) => food.slug));
  return additions.filter((food) => {
    if (seen.has(food.slug)) return false;
    seen.add(food.slug);
    return true;
  });
}

foods.push(
  ...uniqueFoodAdditionsBySlug([
    ...extraFoods1,
    ...extraFoods2,
    ...extraFoods3,
    ...extraFoods4,
    ...extraFoods5,
    ...extraFoods6,
    ...extraFoods7,
    ...extraFoods8,
    ...bulkFoods
  ])
);
recipes.push(...extraRecipes, ...extraRecipes2, ...extraRecipes3, ...extraRecipes4, ...extraRecipes5, ...extraRecipes6, ...bulkRecipes);

const leafyVegetablePattern = /^(Rau|Cải|Bắp cải|Súp lơ|Mồng tơi|Mướp|Đậu que|Đậu bắp|Măng tây|Ngò|Ớt chuông|Cà tím|Bí xanh|Hẹ)/i;

for (const food of foods) {
  if (food.category === "Rau") {
    food.category = "Rau xanh";
  } else if (food.category === "Rau củ") {
    food.category = leafyVegetablePattern.test(food.name) ? "Rau xanh" : "Củ quả";
  } else if (food.category === "Thủy sản") {
    food.category = food.name.startsWith("Cá ") ? "Cá" : "Hải sản";
  } else if (food.category === "Hạt và đậu") {
    food.category = /^(Hạt|Mè)/i.test(food.name) ? "Hạt" : "Đậu";
  }
}

export const nutrientLabels: Record<keyof NutrientValues, { label: string; unit: string }> = {
  energyKcal: { label: "Năng lượng", unit: "kcal" },
  proteinG: { label: "Protein", unit: "g" },
  carbG: { label: "Carbohydrate", unit: "g" },
  fatG: { label: "Chất béo", unit: "g" },
  fiberG: { label: "Chất xơ", unit: "g" },
  sugarG: { label: "Đường", unit: "g" },
  cholesterolMg: { label: "Cholesterol", unit: "mg" },
  saturatedFatG: { label: "Chất béo bão hòa", unit: "g" },
  calciumMg: { label: "Canxi", unit: "mg" },
  ironMg: { label: "Sắt", unit: "mg" },
  zincMg: { label: "Kẽm", unit: "mg" },
  sodiumMg: { label: "Natri", unit: "mg" },
  potassiumMg: { label: "Kali", unit: "mg" },
  magnesiumMg: { label: "Magie", unit: "mg" },
  seleniumMcg: { label: "Selen", unit: "µg" },
  vitaminAUg: { label: "Vitamin A", unit: "µg" },
  vitaminCMg: { label: "Vitamin C", unit: "mg" },
  vitaminDMcg: { label: "Vitamin D", unit: "µg" },
  vitaminEMg: { label: "Vitamin E", unit: "mg" },
  vitaminB12Mcg: { label: "Vitamin B12", unit: "µg" },
  phosphorusMg: { label: "Phốt-pho", unit: "mg" },
  glycemicIndex: { label: "GI", unit: "" }
};

export function computeGlycemicLoad(gi: number, carbG: number): number {
  return (gi * carbG) / 100;
}
