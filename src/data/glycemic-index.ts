export type GiCategory = "low" | "medium" | "high";
export type GiMatchQuality = "exact" | "close" | "generic" | "estimated" | "no_gi";

export interface GlycemicIndexMapping {
  mappingId: string;
  foodSlug: string;
  aliases: string[];
  foodName: string;
  gi: number | null;
  giCategory: GiCategory | null;
  matchQuality: GiMatchQuality;
  sourceLabel: string;
  sourceUrl?: string;
  note: string;
  appliesTo: string;
  notFor: string;
}

const GI_SEARCH_URL = "https://glycemicindex.com/gi-search/";
const INTERNATIONAL_TABLES_2021_URL = "https://ajcn.nutrition.org/article/S0002-9165(22)00494-4/fulltext";

export const glycemicIndexMappings: GlycemicIndexMapping[] = [
  {
    mappingId: "com-trang",
    foodSlug: "com-trang",
    aliases: ["cơm trắng", "com trang", "white rice", "rice cooked"],
    foodName: "Cơm trắng",
    gi: 73,
    giCategory: "high",
    matchQuality: "close",
    sourceLabel: "University of Sydney GI Search / International GI database, white rice cooked match",
    sourceUrl: GI_SEARCH_URL,
    note: "Match gần đúng cho cơm trắng nấu chín; GI thay đổi theo giống gạo, độ dẻo, cách nấu và để nguội/hâm lại.",
    appliesTo: "Cơm trắng nấu chín dùng như tinh bột chính.",
    notFor: "Xôi, cháo, cơm trộn nhiều dầu, cơm chiên hoặc gạo nếp.",
  },
  {
    mappingId: "com-gao-lut",
    foodSlug: "com-gao-lut",
    aliases: ["cơm gạo lứt", "com gao lut", "gao lut cooked", "brown rice cooked", "cơm gạo lật", "com gao lat"],
    foodName: "Cơm gạo lứt",
    gi: 55,
    giCategory: "low",
    matchQuality: "generic",
    sourceLabel: "University of Sydney GI Search / International GI database, brown rice generic match",
    sourceUrl: GI_SEARCH_URL,
    note: "GI nhóm gạo lứt nấu chín; chưa khóa theo giống gạo Việt Nam cụ thể.",
    appliesTo: "Cơm gạo lứt nấu chín.",
    notFor: "Hạt gạo lứt khô/chưa nấu, cơm trộn hoặc cơm chiên.",
  },
  {
    mappingId: "com-gao-lut-do",
    foodSlug: "com-gao-lut-do",
    aliases: ["cơm gạo lứt đỏ", "com gao lut do", "com gao lat do", "red brown rice cooked"],
    foodName: "Cơm gạo lứt đỏ",
    gi: 55,
    giCategory: "low",
    matchQuality: "generic",
    sourceLabel: "University of Sydney GI Search / International GI database, brown rice generic match",
    sourceUrl: GI_SEARCH_URL,
    note: "Dùng GI nhóm gạo lứt nấu chín; cần nguồn tốt hơn nếu muốn phân biệt gạo lứt đỏ.",
    appliesTo: "Cơm gạo lứt đỏ nấu chín.",
    notFor: "Gạo lứt đỏ khô/chưa nấu hoặc món trộn nhiều nguyên liệu.",
  },
  {
    mappingId: "com-gao-lut-den",
    foodSlug: "com-gao-lut-den",
    aliases: ["cơm gạo lứt đen", "com gao lut den", "com gao lat den", "black brown rice cooked"],
    foodName: "Cơm gạo lứt đen",
    gi: 55,
    giCategory: "low",
    matchQuality: "generic",
    sourceLabel: "University of Sydney GI Search / International GI database, brown rice generic match",
    sourceUrl: GI_SEARCH_URL,
    note: "Dùng GI nhóm gạo lứt nấu chín; cần nguồn tốt hơn nếu muốn phân biệt gạo lứt đen.",
    appliesTo: "Cơm gạo lứt đen nấu chín.",
    notFor: "Gạo lứt đen khô/chưa nấu hoặc món trộn nhiều nguyên liệu.",
  },
  {
    mappingId: "com-nep",
    foodSlug: "com-nep",
    aliases: ["cơm nếp", "com nep", "xôi trắng", "xoi trang", "sticky rice", "glutinous rice cooked"],
    foodName: "Cơm nếp",
    gi: 75,
    giCategory: "high",
    matchQuality: "generic",
    sourceLabel: "International GI tables / GI source-lock v1, sticky rice generic match",
    sourceUrl: INTERNATIONAL_TABLES_2021_URL,
    note: "GI generic cho nhóm gạo nếp/xôi; mức thực tế thay đổi theo loại nếp và cách nấu.",
    appliesTo: "Cơm nếp/xôi trắng nấu chín đơn giản.",
    notFor: "Bánh chưng, bánh tét, xôi có đường/dừa/mỡ hoặc gạo nếp khô.",
  },
  {
    mappingId: "bun-tuoi",
    foodSlug: "bun-tuoi",
    aliases: ["bún tươi", "bun tuoi", "rice vermicelli", "rice noodle"],
    foodName: "Bún tươi",
    gi: 70,
    giCategory: "high",
    matchQuality: "generic",
    sourceLabel: "Internal app GI field / GI source-lock v1, rice noodle generic match",
    note: "Dùng GI nhóm bún/rice noodle; cần source item-level tốt hơn cho bún Việt.",
    appliesTo: "Bún tươi đã chần/ăn được.",
    notFor: "Bún khô, phở, miến hoặc bún trộn nhiều đường/dầu.",
  },
  {
    mappingId: "banh-pho-chin",
    foodSlug: "banh-pho-chin",
    aliases: ["bánh phở chín", "banh pho chin", "phở", "pho", "pho noodle", "banh pho"],
    foodName: "Bánh phở chín",
    gi: 62,
    giCategory: "medium",
    matchQuality: "generic",
    sourceLabel: "GI source-lock v1, flat rice noodle generic match",
    note: "GI nhóm bánh phở/rice noodle bản dẹt; chưa phải source riêng cho từng tô phở.",
    appliesTo: "Sợi bánh phở chín tính riêng phần sợi.",
    notFor: "Tô phở hoàn chỉnh có nước dùng, thịt, rau và gia vị.",
  },
  {
    mappingId: "banh-mi",
    foodSlug: "banh-mi",
    aliases: ["bánh mì", "banh mi", "white bread", "baguette"],
    foodName: "Bánh mì",
    gi: 71,
    giCategory: "high",
    matchQuality: "close",
    sourceLabel: "University of Sydney GI Search / International GI database, white bread/baguette match",
    sourceUrl: GI_SEARCH_URL,
    note: "Match gần đúng cho bánh mì trắng; ổ bánh mì Việt có thể khác theo bột, kích thước và nhân.",
    appliesTo: "Phần bánh mì trắng không tính nhân.",
    notFor: "Bánh mì pate/ốp la/chả lụa hoàn chỉnh hoặc bánh mì nguyên cám.",
  },
  {
    mappingId: "khoai-lang",
    foodSlug: "khoai-lang",
    aliases: ["khoai lang", "sweet potato", "khoai lang luộc", "khoai lang luoc"],
    foodName: "Khoai lang",
    gi: 54,
    giCategory: "low",
    matchQuality: "close",
    sourceLabel: "University of Sydney GI Search / International GI database, sweet potato match",
    sourceUrl: GI_SEARCH_URL,
    note: "GI gần đúng cho khoai lang; nướng, nghiền hoặc giống khoai khác có thể làm GI thay đổi.",
    appliesTo: "Khoai lang luộc/hấp đơn giản.",
    notFor: "Khoai lang chiên, khoai mật nướng hoặc món có đường/dầu.",
  },
  {
    mappingId: "khoai-lang-tim",
    foodSlug: "khoai-lang-tim",
    aliases: ["khoai lang tím", "khoai lang tim", "purple sweet potato"],
    foodName: "Khoai lang tím",
    gi: 54,
    giCategory: "low",
    matchQuality: "generic",
    sourceLabel: "University of Sydney GI Search / International GI database, sweet potato generic match",
    sourceUrl: GI_SEARCH_URL,
    note: "Dùng GI nhóm khoai lang; cần nguồn riêng nếu muốn phân biệt khoai lang tím.",
    appliesTo: "Khoai lang tím luộc/hấp.",
    notFor: "Khoai lang tím chiên, nướng mật hoặc món ngọt.",
  },
  {
    mappingId: "khoai-lang-mat",
    foodSlug: "khoai-lang-mat",
    aliases: ["khoai lang mật", "khoai lang mat", "honey sweet potato"],
    foodName: "Khoai lang mật",
    gi: 54,
    giCategory: "low",
    matchQuality: "generic",
    sourceLabel: "University of Sydney GI Search / International GI database, sweet potato generic match",
    sourceUrl: GI_SEARCH_URL,
    note: "Dùng GI nhóm khoai lang; khoai mật nướng có thể khác đáng kể.",
    appliesTo: "Khoai lang mật luộc/hấp đơn giản.",
    notFor: "Khoai lang mật nướng chảy mật hoặc món có thêm đường.",
  },
  {
    mappingId: "khoai-tay",
    foodSlug: "khoai-tay",
    aliases: ["khoai tây", "khoai tay", "potato"],
    foodName: "Khoai tây",
    gi: 65,
    giCategory: "medium",
    matchQuality: "generic",
    sourceLabel: "University of Sydney GI Search / International GI database, potato generic match",
    sourceUrl: GI_SEARCH_URL,
    note: "GI khoai tây thay đổi rất mạnh theo giống, nghiền/luộc/nướng/chiên và nhiệt độ sau nấu.",
    appliesTo: "Khoai tây luộc/hấp đơn giản.",
    notFor: "Khoai tây chiên, nghiền bơ sữa hoặc snack khoai.",
  },
  {
    mappingId: "bap-nep-luoc",
    foodSlug: "bap-nep-luoc",
    aliases: ["bắp nếp luộc", "bap nep luoc", "ngô nếp luộc", "ngo nep luoc", "bắp luộc", "ngo luoc"],
    foodName: "Bắp nếp luộc",
    gi: 56,
    giCategory: "medium",
    matchQuality: "generic",
    sourceLabel: "International GI database / GI source-lock v1, sweet corn generic match",
    sourceUrl: GI_SEARCH_URL,
    note: "Dùng GI nhóm bắp/ngô luộc; chưa phân biệt rõ bắp nếp Việt Nam.",
    appliesTo: "Bắp/ngô luộc ăn phần hạt.",
    notFor: "Bắp xào bơ, bắp rang, bột bắp hoặc bắp non.",
  },
  {
    mappingId: "bap-my-luoc",
    foodSlug: "bap-my-luoc",
    aliases: ["bắp mỹ luộc", "bap my luoc", "ngô mỹ luộc", "ngo my luoc", "sweet corn"],
    foodName: "Bắp Mỹ luộc",
    gi: 56,
    giCategory: "medium",
    matchQuality: "generic",
    sourceLabel: "International GI database / GI source-lock v1, sweet corn generic match",
    sourceUrl: GI_SEARCH_URL,
    note: "Dùng GI nhóm sweet corn luộc; GI thay đổi theo giống và độ chín.",
    appliesTo: "Bắp Mỹ luộc ăn phần hạt.",
    notFor: "Bắp xào bơ, bắp rang, bột bắp hoặc bắp non.",
  },
  {
    mappingId: "yen-mach-can",
    foodSlug: "yen-mach-can",
    aliases: ["yến mạch cán", "yen mach can", "oats", "rolled oats", "oatmeal"],
    foodName: "Yến mạch cán",
    gi: 55,
    giCategory: "low",
    matchQuality: "close",
    sourceLabel: "University of Sydney GI Search / International GI database, rolled oats/oatmeal match",
    sourceUrl: GI_SEARCH_URL,
    note: "Match gần đúng cho yến mạch cán/cháo yến mạch; instant oats có thể GI cao hơn.",
    appliesTo: "Yến mạch cán nấu/chế biến đơn giản.",
    notFor: "Yến mạch ăn liền có đường hoặc granola.",
  },
  {
    mappingId: "chuoi",
    foodSlug: "chuoi",
    aliases: ["chuối", "chuoi", "banana", "chuối chín", "chuoi chin"],
    foodName: "Chuối",
    gi: 51,
    giCategory: "low",
    matchQuality: "generic",
    sourceLabel: "University of Sydney GI Search / International GI database, banana generic match",
    sourceUrl: GI_SEARCH_URL,
    note: "GI chuối thay đổi theo giống và độ chín.",
    appliesTo: "Chuối chín ăn tươi.",
    notFor: "Chuối sấy, bánh chuối hoặc chuối xanh luộc.",
  },
  {
    mappingId: "chuoi-cau",
    foodSlug: "chuoi-cau",
    aliases: ["chuối cau", "chuoi cau"],
    foodName: "Chuối cau",
    gi: 51,
    giCategory: "low",
    matchQuality: "generic",
    sourceLabel: "University of Sydney GI Search / International GI database, banana generic match",
    sourceUrl: GI_SEARCH_URL,
    note: "Dùng GI nhóm chuối; chưa có nguồn riêng cho chuối cau.",
    appliesTo: "Chuối cau chín ăn tươi.",
    notFor: "Chuối sấy, bánh chuối hoặc chuối xanh luộc.",
  },
  {
    mappingId: "chuoi-su",
    foodSlug: "chuoi-su",
    aliases: ["chuối sứ", "chuoi su"],
    foodName: "Chuối sứ",
    gi: 51,
    giCategory: "low",
    matchQuality: "generic",
    sourceLabel: "University of Sydney GI Search / International GI database, banana generic match",
    sourceUrl: GI_SEARCH_URL,
    note: "Dùng GI nhóm chuối; chưa có nguồn riêng cho chuối sứ.",
    appliesTo: "Chuối sứ chín ăn tươi.",
    notFor: "Chuối sấy, bánh chuối hoặc chuối xanh luộc.",
  },
  {
    mappingId: "chuoi-tieu",
    foodSlug: "chuoi-tieu",
    aliases: ["chuối tiêu", "chuoi tieu"],
    foodName: "Chuối tiêu",
    gi: 51,
    giCategory: "low",
    matchQuality: "generic",
    sourceLabel: "University of Sydney GI Search / International GI database, banana generic match",
    sourceUrl: GI_SEARCH_URL,
    note: "Dùng GI nhóm chuối; chưa có nguồn riêng cho chuối tiêu.",
    appliesTo: "Chuối tiêu chín ăn tươi.",
    notFor: "Chuối sấy, bánh chuối hoặc chuối xanh luộc.",
  },
  {
    mappingId: "tao",
    foodSlug: "tao",
    aliases: ["táo", "tao", "apple"],
    foodName: "Táo",
    gi: 36,
    giCategory: "low",
    matchQuality: "close",
    sourceLabel: "University of Sydney GI Search / International GI database, apple match",
    sourceUrl: GI_SEARCH_URL,
    note: "Match gần đúng cho táo tươi.",
    appliesTo: "Táo tươi ăn nguyên quả.",
    notFor: "Nước ép táo, táo sấy hoặc bánh táo.",
  },
  {
    mappingId: "tao-xanh",
    foodSlug: "tao-xanh",
    aliases: ["táo xanh", "tao xanh", "green apple"],
    foodName: "Táo xanh",
    gi: 36,
    giCategory: "low",
    matchQuality: "close",
    sourceLabel: "University of Sydney GI Search / International GI database, apple match",
    sourceUrl: GI_SEARCH_URL,
    note: "Match gần đúng cho táo tươi; chưa phân biệt giống táo xanh.",
    appliesTo: "Táo xanh tươi ăn nguyên quả.",
    notFor: "Nước ép táo, táo sấy hoặc bánh táo.",
  },
  {
    mappingId: "cam",
    foodSlug: "cam",
    aliases: ["cam", "orange"],
    foodName: "Cam",
    gi: 40,
    giCategory: "low",
    matchQuality: "close",
    sourceLabel: "University of Sydney GI Search / International GI database, orange match",
    sourceUrl: GI_SEARCH_URL,
    note: "Match gần đúng cho cam tươi ăn nguyên múi.",
    appliesTo: "Cam tươi ăn nguyên múi.",
    notFor: "Nước cam ép hoặc nước giải khát vị cam.",
  },
  {
    mappingId: "cam-sanh",
    foodSlug: "cam-sanh",
    aliases: ["cam sành", "cam sanh"],
    foodName: "Cam sành",
    gi: 40,
    giCategory: "low",
    matchQuality: "generic",
    sourceLabel: "University of Sydney GI Search / International GI database, orange generic match",
    sourceUrl: GI_SEARCH_URL,
    note: "Dùng GI nhóm cam; chưa có nguồn riêng cho cam sành Việt Nam.",
    appliesTo: "Cam sành tươi ăn nguyên múi.",
    notFor: "Nước cam ép hoặc nước giải khát vị cam.",
  },
  {
    mappingId: "xoai",
    foodSlug: "xoai",
    aliases: ["xoài", "xoai", "mango"],
    foodName: "Xoài",
    gi: 56,
    giCategory: "medium",
    matchQuality: "generic",
    sourceLabel: "Internal app GI field / GI source-lock v1, mango generic match",
    note: "GI nhóm xoài chín; thay đổi theo giống và độ chín.",
    appliesTo: "Xoài chín ăn tươi.",
    notFor: "Xoài xanh, xoài sấy hoặc sinh tố có đường.",
  },
  {
    mappingId: "sua-tuoi",
    foodSlug: "sua-tuoi",
    aliases: ["sữa tươi", "sua tuoi", "milk"],
    foodName: "Sữa tươi",
    gi: 37,
    giCategory: "low",
    matchQuality: "close",
    sourceLabel: "University of Sydney GI Search / International GI database, milk match",
    sourceUrl: GI_SEARCH_URL,
    note: "Match gần đúng cho sữa tươi không thêm đường; sữa có đường sẽ khác.",
    appliesTo: "Sữa tươi không đường hoặc ít đường trong khẩu phần nhỏ.",
    notFor: "Sữa đặc, sữa hương vị, trà sữa hoặc đồ uống pha đường.",
  },
  {
    mappingId: "ca-rot",
    foodSlug: "ca-rot",
    aliases: ["cà rốt", "ca rot", "carrot"],
    foodName: "Cà rốt",
    gi: 71,
    giCategory: "high",
    matchQuality: "close",
    sourceLabel: "Internal app GI field / GI source-lock v1, carrot cooked match",
    note: "GI có thể cao trong một số bảng, nhưng GL khẩu phần thường thấp vì carb không nhiều.",
    appliesTo: "Cà rốt luộc/chín.",
    notFor: "Nước ép cà rốt hoặc món có đường.",
  },
  {
    mappingId: "duong-trang",
    foodSlug: "duong-trang",
    aliases: ["đường trắng", "duong trang", "sugar", "sucrose"],
    foodName: "Đường trắng",
    gi: 65,
    giCategory: "medium",
    matchQuality: "exact",
    sourceLabel: "International GI database / GI source-lock v1, sucrose match",
    sourceUrl: GI_SEARCH_URL,
    note: "Match trực tiếp cho sucrose/đường ăn.",
    appliesTo: "Đường trắng dùng như nguyên liệu.",
    notFor: "Món tráng miệng pha trộn nhiều thành phần.",
  },
];

export function categorizeGi(gi: number | null | undefined): GiCategory | null {
  if (typeof gi !== "number" || !Number.isFinite(gi)) return null;
  if (gi <= 55) return "low";
  if (gi <= 69) return "medium";
  return "high";
}

export function normalizeGiLookup(value: string | null | undefined): string {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function mappingKeys(mapping: GlycemicIndexMapping): string[] {
  return [mapping.mappingId, mapping.foodSlug, mapping.foodName, ...mapping.aliases]
    .map(normalizeGiLookup)
    .filter(Boolean);
}

export function findGlycemicIndexMapping(slugOrId: string | null | undefined, name?: string | null): GlycemicIndexMapping | null {
  const slugKey = normalizeGiLookup(slugOrId);
  if (slugKey) {
    const exactSlug = glycemicIndexMappings.find((mapping) => normalizeGiLookup(mapping.foodSlug) === slugKey || normalizeGiLookup(mapping.mappingId) === slugKey);
    if (exactSlug) return exactSlug;
  }

  const nameKey = normalizeGiLookup(name);
  if (!nameKey) return null;

  return glycemicIndexMappings.find((mapping) => mappingKeys(mapping).includes(nameKey)) ?? null;
}

