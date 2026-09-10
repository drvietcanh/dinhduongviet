# Ke hoach chuan hoa va mo rong thu vien thuc pham

Ngay lap: 2026-09-10

Pham vi: ra soat `dist/api-foods.json`, `public/api/foods-full.json`, `src/data/nutrition.ts` va cac file `src/data/foods-extra*.ts`.

## 1. Tinh trang hien tai

- Tong so thuc pham trong build: 791.
- Nhom lon dang co nhieu muc: Rau xanh 90, Do uong 73, Trai cay 70, Tinh bot 68, Hai san 65, Thit 60, Banh keo 48, Thit che bien 45.
- Trang thai che bien: raw 390, processed 326, cooked 56, dried 16, roasted 3.
- Do tin cay: high 18, medium 52, low 721.
- Nguon: recipe-estimate-v1 716, label 50, vdd-food-portal-2026 14, vn-fct-2007 4, USDA 7.
- Metadata chat luong: 20 muc `source_verified`, 124 muc `reviewed_keep_current`, 4 muc `candidate_pending_dietitian_review`, 2 muc `needs_better_source`, 1 muc `recipe_estimate_only`.

Ket luan ngan: thu vien da phong phu ve do phu ten mon/thuc pham, nhung tang "nguon chac" con mong. Viec mo rong tiep nen uu tien doi chieu nguon chinh thuc cho thuc pham hay gap, khong them tran lan cac mon bien thien theo cong thuc.

## 2. Taxonomy de xuat de de phan loai va tim kiem

Dung 2 lop phan loai:

1. `category`: giu ngan gon de hien thi va loc nhanh.
2. `tags`: mo rong theo ngu canh suc khoe, vung mien, cach dung, va canh bao.

### Category chuan nen duy tri

- Tinh bot: gao, com, bun, pho, mi, nui, khoai, bap, san pham tu bot.
- Rau xanh: rau la, cai, rau an la, rau muc nuoc cao.
- Cu qua: cu, qua dung nau an, qua it ngot.
- Trai cay: qua an tuoi, trai cay say, nuoc qua nguyen chat neu can.
- Rau gia vi: hanh, ngo, rau ram, tia to, hung, la lot.
- Nam: nam tuoi, nam kho, nam che bien.
- Dau: dau hat va san pham dau nhu dau phu, sua dau nanh neu khong tach sang do uong.
- Hat: me, lac, dieu, hanh nhan, hat bi, hat huong duong.
- Thit: thit tuoi theo loai va phan cat.
- Thit che bien: gio, cha, xuc xich, lap xuong, thit nguoi, do xong khoi.
- Ca: ca tuoi/kho/hop, tach khoi hai san vi nguoi dung hay tim rieng.
- Hai san: tom, cua, ghe, muc, bach tuoc, ngheu, so, oc.
- Trung sua: trung, sua, sua chua, pho mai; neu muon gon hon thi hop nhat `Sua` vao `Trung sua`.
- Dau mo: dau thuc vat, mo dong vat, bo, margarine.
- Gia vi: muoi, nuoc mam, xi dau, duong, mam, sot.
- Do uong: tra, ca phe, nuoc ngot, tra sua, do uong co con.
- Banh keo: banh ngot, keo, snack, dessert.
- Do hop/dong goi: chi giu neu can loc rieng; neu khong, gan vao category thuc pham chinh va them tag `packaged`.
- Mi goi: co the giu rieng vi nguoi Viet tim nhieu, hoac dua ve `Tinh bot` + tag `instant-noodle`.
- Nuoc dung: giu rieng neu cong cu tinh mon an can, vi natri va cach nau rat khac.

### Tags nen chuan hoa

- Dinh duong: `high-protein`, `high-fiber`, `high-sodium`, `high-sugar`, `high-fat`, `low-fat`, `low-sodium`, `low-potassium`, `low-carb`.
- Benh ly/quan tam: `diabetes-watch`, `ckd-watch`, `hypertension-watch`, `gout-watch`, `dyslipidemia-watch`, `weight-loss-watch`.
- Che bien: `fried`, `grilled`, `boiled`, `fermented`, `dried`, `canned`, `instant`, `sweetened`.
- Van hoa/tim kiem: `vietnamese-common`, `street-food`, `breakfast`, `family-meal`, `school-snack`.
- Chat luong du lieu: nen hien thi tu metadata hien co thay vi tag thu cong: `source_verified`, `recipe_estimate`, `needs_better_source`.

## 3. Quy tac bo sung du lieu de tranh sai sot

- Chi dien so lieu khi co nguon ro cho dung thuc pham, trang thai song/chin/kho, va don vi 100g hoac 100ml.
- Voi thuc pham dong goi, uu tien nhan san pham; khong lay mot nhan hang lam dai dien cho toan bo nhom neu khong ghi ro.
- Voi mon che bien, chi them nhu `Recipe` uoc tinh theo cong thuc; khong gan `confidence: high` neu khong co cong thuc dinh luong va nguon ro.
- Khong dien 0 cho vi chat neu nguon khong co so lieu; de thieu tot hon la tao cam giac chinh xac gia.
- Rau/cu/qua uu tien bo sung: chat xo, duong, canxi, sat, kali, natri, vitamin C neu co nguon.
- Thit/ca/trung/sua uu tien bo sung: B12, cholesterol, phosphorus, sat, kem, natri, kali.
- Tinh bot uu tien phan biet song/chin/kho: gao song khac com chin; bun/pho tuoi khac banh pho kho; mi goi kho khac mi goi luoc.
- Moi batch nen co 8-15 muc, cung mot nhom, cung nguon chinh, co bao cao doi chieu va chay `npm run build` + `npm run qa`.

## 4. Khoang trong can uu tien

### Uu tien 1: thuc pham an hang ngay, de co nguon chinh thuc

- Gao/com/bun/pho/mi/khoai/bap: hoan thien nhom tinh bot song-chin-kho.
- Rau an la va rau gia vi: rau muong, cai xanh, cai ngot, rau den, mung toi, rau ngot, hanh la, ngo gai, tia to, rau ram.
- Cu qua bep Viet: bi do, bi xanh, bau, muop, ca tim, su su, ca rot, cu cai, khoai mon, khoai lang.
- Trai cay pho bien: chuoi, cam, buoi, oi, xoai, dua hau, du du, thanh long, sau rieng, mit, vai, nhan.
- Ca nuoc ngot va ca bien pho bien: ca loc, ca basa, ca tra, ca ro phi, ca thu, ca nuc, ca com, ca moi.
- Thit/trung/sua co ban: thit heo nac/mo/ba chi, bo nac, ga ta/ga cong nghiep, vit, trung ga/vit, sua tuoi, sua chua.

### Uu tien 2: thuc pham nguy co can canh bao suc khoe

- Nuoc mam, muoi, bot canh, hat nem, xi dau, mam tom, tuong ot: natri cao, lien quan tang huyet ap/CKD/suy tim.
- Mi goi, snack, xuc xich, gio cha, lap xuong, thit nguoi: natri, chat beo bao hoa, bien thien theo nhan hang.
- Do uong ngot, tra sua, ca phe sua, nuoc tang luc: duong/nang luong, phu hop nhu cau nguoi Viet hien nay.
- Banh mi, xoi, banh chung, banh tet, banh bao, banh xeo: can tach mon an theo recipe hon la food don le.

### Uu tien 3: vi chat cho nhom benh man tinh

- Kali cho rau/cu/qua va dau/hat: quan trong voi CKD, tang huyet ap.
- Natri cho gia vi, thuc pham dong goi, mon che bien: quan trong voi tang huyet ap, suy tim, CKD.
- Phosphorus cho thit/ca/trung/sua/dau: quan trong voi CKD.
- B12, sat, kem cho thit/ca/trung/sua: quan trong voi thieu mau, nguoi cao tuoi, an chay.
- Chat xo va duong cho trai cay/tinh bot: quan trong voi dai thao duong, giam can, roi loan lipid.

## 5. Lo trinh bo sung de dung lau dai

### Batch A: tinh bot co ban

Muc tieu: gao te, gao nep, gao lut, com trang, com nep, bun tuoi, pho tuoi, banh pho kho, mien, nui, khoai lang, khoai tay, bap.

Ly do: day la nhom nguoi Viet tim nhieu nhat khi hoi tieu duong, giam can, gan nhiem mo.

### Batch B: rau la va cu qua bep Viet

Muc tieu: 20-30 rau/cu hay gap o cho Viet, uu tien chat xo, kali, canxi, sat, vitamin C, natri.

Ly do: giup cong cu goi y bua com Viet co du lieu vi chat tot hon.

### Batch C: trai cay Viet Nam

Muc tieu: trai cay an hang ngay va trai cay duong cao. Tach trai cay tuoi, say, ep.

Ly do: can cho dai thao duong, giam can, gout, gan nhiem mo.

### Batch D: thit, ca, trung, sua

Muc tieu: bo sung B12, cholesterol, phosphorus cho nguon dam dong vat; phan biet phan cat co mo/it mo.

Ly do: quan trong voi tim mach, CKD, gout, thieu mau, nguoi cao tuoi.

### Batch E: gia vi va thuc pham dong goi

Muc tieu: natri, duong, chat beo bao hoa cho nuoc mam, xi dau, hat nem, mi goi, snack, xuc xich, gio cha.

Ly do: day la nhom tac dong lon nhung bien thien cao; can nhan "doi chieu nhan san pham".

### Batch F: recipe mon an Viet

Muc tieu: chuan hoa mon an hay gap theo cong thuc/khau phan: pho, bun bo, com tam, bun cha, banh mi, xoi, mi goi trung, lau, do chien.

Ly do: nguoi dung thuong tim mon an, khong chi nguyen lieu; nhung phai hien thi la uoc tinh theo cong thuc.

## 6. De xuat cai tien ky thuat

- Tao file `src/data/food-taxonomy.ts` gom category chuan, alias category cu, mo ta category, icon/label hien thi, va priority sap xep.
- Doi buoc normalize category trong `nutrition.ts` sang dung mapping tu `food-taxonomy.ts`.
- Them script bao cao coverage theo category: tong so muc, so muc source-backed, so muc thieu vi chat uu tien.
- Them field tuy chon `searchKeywords` hoac mo rong aliases theo vung mien: heo/lon, bap/ngo, thom/dua/khom, dau phong/lac, cai/rau.
- Tren giao dien chi tiet thuc pham, hien badge nguon: "Nguon xac minh", "Uoc tinh theo cong thuc", "Can doi chieu nhan".
- Tren trang danh sach, cho loc theo: category, nguon du lieu, natri cao, kali cao/thap, giau chat xo, phu hop/luu y voi dai thao duong/CKD/tang huyet ap.

## 7. Batch nen lam tiep ngay

Nen lam tiep Batch A hoac Batch B.

De xuat cu the: Batch B rau/cu vi dang co 90 rau xanh va 35 cu qua nhung van con nhieu muc low confidence; nhom nay it bien thien hon mon che bien, de nang chat luong bang nguon Viện Dinh dưỡng. Danh sach goi y 12 muc: rau muong, rau ngot, mong toi, cai xanh, cai ngot, bap cai, bi do, bi xanh, bau, muop, ca rot, khoai lang.

Nguon nen dung theo thu tu:

1. Cong cu gia tri dinh duong thuc pham cua Vien Dinh duong.
2. Bang thanh phan thuc pham Viet Nam 2007 khi can doi chieu.
3. USDA FoodData Central chi dung cho thuc pham pho quoc te hoac khi ten/loai trung khop ro.

