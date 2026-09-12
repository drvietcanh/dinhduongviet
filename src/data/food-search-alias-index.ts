export type FoodSearchAliasEntry = {
  acceptedName: string;
  aliases: readonly string[];
  scientificScope: string;
  indexingNote: string;
};

// Alias được kiểm duyệt thủ công: chỉ gộp tên vùng miền/cách gọi cùng thực phẩm.
// Không dùng bảng này để gộp loài gần nhau, phần ăn khác nhau, hay dạng sống/chín/khô.
export const foodSearchAliasIndex: Record<string, FoodSearchAliasEntry> = {
  "be-be": {
    acceptedName: "Bề bề",
    aliases: ["tôm tít", "tôm tích", "tom tit", "tom tich"],
    scientificScope: "Nhóm tôm chân miệng Stomatopoda (mantis shrimp).",
    indexingNote: "Không đồng nghĩa với tôm huyết, tôm sú hoặc tôm biển thông thường."
  },
  "ca-loc": {
    acceptedName: "Cá lóc",
    aliases: ["cá quả", "cá chuối", "ca qua", "ca chuoi"],
    scientificScope: "Cá quả/cá lóc nước ngọt (snakehead fish).",
    indexingNote: "Không gộp với cá trê, cá rô hay cá basa."
  },
  "kho-qua": {
    acceptedName: "Khổ qua",
    aliases: ["mướp đắng", "muop dang"],
    scientificScope: "Quả Momordica charantia dùng làm rau.",
    indexingNote: "Tên Nam Bộ là khổ qua; mướp đắng là tên phổ biến ở nhiều vùng khác."
  },
  "cu-san": {
    acceptedName: "Củ sắn",
    aliases: ["sắn mì", "san mi"],
    scientificScope: "Củ sắn/khoai mì (cassava).",
    indexingNote: "Tên khoai mì được giữ ở bản ghi canonical Khoai mì; không tạo alias kép gây trùng kết quả. Không thêm alias 'củ đậu' vì đó là thực phẩm khác."
  },
  "cu-nang": {
    acceptedName: "Củ năng",
    aliases: ["mã thầy", "củ mã thầy", "ma thay", "cu ma thay"],
    scientificScope: "Củ mã thầy/water chestnut (Eleocharis dulcis).",
    indexingNote: "Không gộp với củ ấu, vốn là nhóm thực vật khác."
  },
  "rau-dan": {
    acceptedName: "Rau dền",
    aliases: ["rau giền", "rau gien"],
    scientificScope: "Rau dền/amaranth; 'giền' là biến thể chính tả cũ trong nguồn.",
    indexingNote: "Không dùng alias này để xác định riêng các giống dền đỏ, trắng hoặc dền cơm."
  },
  "rau-diep-ca": {
    acceptedName: "Rau diếp cá",
    aliases: ["giấp cá", "dấp cá", "lá giấp", "giap ca", "dap ca", "la giap"],
    scientificScope: "Houttuynia cordata (fish mint).",
    indexingNote: "Các tên vùng miền cùng chỉ rau diếp cá, không phải xà lách."
  },
  "rau-ngo": {
    acceptedName: "Rau ngổ",
    aliases: ["ngò om", "ngo om"],
    scientificScope: "Limnophila aromatica, rau thơm dùng trong canh chua.",
    indexingNote: "Không gộp với rau mùi/ngò rí."
  },
  "rau-tan-o": {
    acceptedName: "Rau tần ô",
    aliases: ["cải cúc", "cai cuc"],
    scientificScope: "Glebionis coronaria (crown daisy).",
    indexingNote: "Tên 'cải cúc' phổ biến ở miền Bắc."
  },
  "rau-mui-tau": {
    acceptedName: "Rau mùi tàu",
    aliases: ["ngò gai", "ngò tàu", "ngo gai", "ngo tau"],
    scientificScope: "Eryngium foetidum (culantro).",
    indexingNote: "Không gộp với rau mùi ta/ngò rí."
  },
  "rau-mui-ta": {
    acceptedName: "Rau mùi ta",
    aliases: ["ngò rí", "ngò", "ngo ri", "ngo"],
    scientificScope: "Coriandrum sativum (coriander).",
    indexingNote: "Từ 'ngò' đơn lẻ có thể mơ hồ trong hội thoại, nhưng được giữ như từ khóa tìm kiếm."
  },
  "bap-chuoi-bao": {
    acceptedName: "Bắp chuối bào",
    aliases: ["hoa chuối bào", "bắp chuối", "hoa chuối", "hoa chuoi bao", "bap chuoi"],
    scientificScope: "Cụm hoa chuối đã bào dùng làm rau.",
    indexingNote: "Không gộp với quả chuối hay thân cây chuối."
  }
};
