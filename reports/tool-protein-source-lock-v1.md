# Protein Requirement Source Lock v1

Pham vi: `/cong-cu/tinh-nhu-cau-dam`.

Muc tieu: khoa bang nguon, range protein va muc tu dong hoa truoc khi sua code. Vong nay khong sua logic tinh toan, input/output UI, hay du lieu dinh duong.

## Ket luan ngan

- Engine co the tu dong tinh cho nguoi lon khoe manh sau khi da loai tru CKD, thai ky/cho con bu, ung thu/suy dinh duong, phu/suy tim/xo gan va nhom dang an theo chi dinh.
- Nhom van dong/tang co co the tinh tu dong co dieu kien neu la nguoi lon khoe manh, nhung can wording "uoc tinh cho nguoi khong co benh than/gan".
- Nhom giam can, nguoi cao tuoi, dai thao duong khong CKD, gout, an chay nen de `caution`.
- Nhom CKD chua loc mau, CKD + dai thao duong, dang loc mau, thai ky/cho con bu, ung thu/suy dinh duong nen `no` cho tinh tu dong self-service; chi hien bang tham khao va can chuyen mon.

## Bang source/range protein

| Nhom doi tuong | Range protein g/kg/ngay de xuat | Dieu kien ap dung | Khong ap dung khi nao | Nguon chinh | Nguon phu | Muc chac chan | Wording an toan dua vao UI | Tu dong tinh |
|---|---:|---|---|---|---|---|---|---|
| 1. Nguoi lon khoe manh/it van dong | 0.8-1.0 | Nguoi lon, khong mang thai/cho con bu, khong CKD/benh gan, khong suy dinh duong, khong benh cap/catabolic. | Tre em, thai ky, cho con bu, CKD, loc mau, ung thu/suy dinh duong, phu/suy tim/xo gan, dang an theo chi dinh. | DRI/National Academies via NCBI Bookshelf: RDA protein adult 0.8 g/kg. | NIH ODS DRI framework. | high cho 0.8; medium cho 1.0. | "Khoang uoc tinh cho nguoi lon khoe manh. Neu co benh nen hoac dang an theo chi dinh, hay hoi bac si/dinh duong vien." | yes |
| 2. Van dong vua/tang co | 1.2-2.0 | Nguoi lon khoe manh, tap luyen deu, muc tieu duy tri/tang co; da loai tru CKD/benh gan va tinh huong lam sang. | CKD, proteinuria/eGFR giam, benh gan tien trien, gout khong kiem soat, thai ky neu chua duyet san khoa, suy dinh duong/ung thu/hau phau. | ISSN Position Stand: protein and exercise, range 1.4-2.0 cho nguoi tap luyen; DRI lam moc toi thieu. | ACSM position resources can doi chieu khi sua code. | high cho 1.4-2.0 trong tap luyen; medium cho 1.2-1.4. | "Danh cho nguoi tap luyen va khong co benh than/gan. Neu co benh nen, khong tu tang dam." | yes, co sang loc |
| 3. Giam can | 1.2-1.6 | Nguoi lon thua can/beo phi giam nang luong co kiem soat, muon giu khoi co; nen kem tap khang luc. | CKD, roi loan an uong, suy dinh duong, thai ky, ung thu, nguoi cao tuoi yeu, phu/suy tim/xo gan. | needs_source: can nguon obesity/weight management duoc bac si duyet. | ISSN ho tro logic giu co khi co tap luyen; ESPEN hospital/geriatric neu cao tuoi. | medium-low | "Uoc tinh ban dau khi giam can. Khong ap dung neu co benh than, suy dinh duong, thai ky hoac dang dieu tri." | caution |
| 4. Nguoi cao tuoi | 1.0-1.2 neu khoe/manh; 1.2-1.5 neu yeu/sarcopenia/benh man nhung phai duyet | >=65 tuoi, an uong on, khong CKD tien trien; co the can protein cao hon nguoi tre de bao ve co. | CKD G3-G5, loc mau, suy dinh duong nang, benh cap, dysphagia, phu/suy tim/xo gan, catabolic illness. | ESPEN practical guideline: clinical nutrition and hydration in geriatrics. | PROT-AGE/geriatric consensus can doi chieu; DRI lam moc toi thieu. | medium | "Nguoi cao tuoi can ca nhan hoa theo chuc nang than, khoi co, kha nang nhai/nuot va nguy co suy dinh duong." | caution |
| 5. Dai thao duong khong CKD | 0.8-1.2, khong co range toi uu rieng | Chi ap dung neu khong albuminuria/eGFR giam, khong CKD, khong thai ky, khong suy dinh duong. | Diabetic kidney disease, CKD, albuminuria, eGFR giam, thai ky, suy tim/gan/than, an theo chi dinh. | ADA Standards/Endotext summary: khong co bang chung rang chinh protein cai thien ket cuc neu khong co kidney disease; muc tieu can ca nhan hoa. | DRI RDA 0.8 g/kg; ADA CKD chapter for khi co CKD. | medium | "Dai thao duong khong co benh than khong co muc protein toi uu chung; uu tien ca nhan hoa va theo doi chuc nang than." | caution |
| 6. CKD chua loc mau | 0.55-0.60 cho CKD 3-5 khong diabetes khi co giam sat; 0.6-0.8 trong mot so tinh huong | Chi khi xac dinh CKD stage/eGFR, chua loc mau, du nang luong, co theo doi dinh duong va chi dinh chuyen mon. | Dang loc mau, suy dinh duong, benh cap/catabolic, thai ky, ung thu, hoi chung than hu, khong biet eGFR/stage. | KDOQI/NKF 2020 Nutrition in CKD. | KDOQI 2020 PubMed summary; local nephrology protocol can doi chieu. | high cho su tach nhom; medium cho ap dung ca nhan. | "Benh than man chua loc mau: khong tu giam hoac tang dam. Range nay chi de trao doi voi bac si/dinh duong vien." | no |
| 7. CKD + dai thao duong | 0.6-0.8 cho CKD 3-5 + diabetes khong loc mau theo KDOQI; ADA 2026 canh bao khong nen <0.8 neu khong co giam sat/vi co nguy co suy dinh duong | Chi khi CKD 3-5 + diabetes, khong loc mau, duoi medical nutrition therapy. | Dang loc mau, suy dinh duong, benh cap, eGFR/stage khong ro, thai ky. | KDOQI/KDIGO commentary; ADA CKD Standards of Care. | KDOQI/NKF 2020. | medium-high, vi guideline co cach framing khac nhau. | "CKD kem dai thao duong can muc tieu rieng va theo doi sat; khong tu ap dung range giam dam." | no |
| 8. Dang loc mau | 1.0-1.2 hoac >1.2 theo phac do trung tam | Hemodialysis/peritoneal dialysis da xac nhan; can theo doi albumin, nPNA, tinh trang viem, an du nang luong. | CKD chua loc mau, suy dinh duong nang chua danh gia, benh cap/ICU, khong ro loai loc mau. | KDOQI/NKF 2020 Nutrition in CKD. | KDOQI/KDIGO diabetes CKD commentary; local dialysis protocol. | high cho viec tach khoi CKD chua loc mau; medium cho range cu the. | "Dang loc mau khac CKD chua loc mau. Khong tu an kieng dam; muc dam can theo trung tam loc mau." | no |
| 9. Gout | Khong co range protein rieng; neu khong CKD co the dung range nguoi lon 0.8-1.0/nhu cau theo muc tieu | Gout on dinh, khong CKD, khong dot cap nang; can tap trung vao nguon dam it purin va han che ruou/fructose. | CKD, soi than urat, dot gout cap, dang han che dich, suy tim/xo gan, dang dung thuoc/dieu tri can tu van. | ACR 2020 gout guideline; ACR patient gout info. | DRI cho protein nen chung. | medium cho diet risk factors; low cho range protein rieng. | "Gout khong chi phu thuoc tong dam; quan trong la purin, ruou/bia, fructose, can nang va chuc nang than." | caution |
| 10. Thai ky/cho con bu | needs_source; tam thoi khong khoa range g/kg vao engine | Chi khi co tuoi thai, can nang truoc mang thai, BMI, song thai/khong, nguy co san khoa va muc tieu san khoa. | Thai nguy co cao, tien san giat, CKD, dai thao duong thai ky, suy dinh duong, sinh non, cho con bu co benh me. | DRI/National Academies pregnancy/lactation protein; obstetric guideline can doi chieu. | Mayo Clinic overview chi lam nguon giao duc, khong phai engine source. | low-medium | "Thai ky/cho con bu can ca nhan hoa theo san khoa. Cong cu khong thay the tu van cua bac si san va dinh duong vien." | no |
| 11. Ung thu/suy dinh duong | 1.0-1.5 trong nhieu tinh huong ung thu; suy dinh duong/benh cap can ca nhan hoa | Chi sau sang loc/danh gia dinh duong, muc tieu dieu tri va nguy co refeeding; can du nang luong. | CKD/gan tien trien, ICU, refeeding risk cao, nuot kem, dieu tri dac hieu can phac do rieng. | ESPEN practical guideline: Clinical Nutrition in cancer. | ESPEN polymorbid medical inpatients; ESPEN surgery/hospital nutrition khi hau phau/benh cap. | medium-high ve nguon; high ve rui ro ap dung sai. | "Nhom ung thu/suy dinh duong can danh gia dinh duong. Ket qua chi la tham khao, khong tu tang dam neu chua duoc huong dan." | no |
| 12. An chay | 0.9-1.1, co the can cao hon tuy chat luong protein | Nguoi lon khoe, an chay can doi, khong CKD/benh gan/thai ky/suy dinh duong. | CKD, thai ky, tre em, suy dinh duong, nguoi cao tuoi yeu, an chay qua han che. | needs_source: can nguon ve protein quality/digestibility cho an chay. | DRI 0.8 g/kg lam moc toi thieu; Academy of Nutrition and Dietetics position paper can tim/duyet. | low-medium | "An chay can chu y du tong protein, chat luong protein va B12/sat/kem; khong tu tang dam neu co benh than." | caution |

## Nhom duoc phep tinh tu dong

Dieu kien chung truoc khi auto-calc:

- Nguoi lon.
- Khong mang thai/cho con bu.
- Khong co CKD, loc mau, benh gan tien trien, suy tim/phu/xo gan, ung thu/suy dinh duong, benh cap/hau phau.
- Khong dang an theo chi dinh rieng.
- Can nang hien tai khong bi sai lech ro do phu/thai ky/beo phi nang; neu co thi can chon can nang ly tuong/hieu chinh duoc duyet.

Auto-calc `yes`:

- Nguoi lon khoe manh/it van dong: 0.8-1.0 g/kg/ngay.
- Van dong vua/tang co: 1.2-2.0 g/kg/ngay, chi khi profile la nguoi lon khoe manh va da sang loc benh than/gan.

Auto-calc `caution`:

- Giam can.
- Nguoi cao tuoi.
- Dai thao duong khong CKD.
- Gout.
- An chay.

Auto-calc `no`:

- CKD chua loc mau.
- CKD + dai thao duong.
- Dang loc mau.
- Thai ky/cho con bu.
- Ung thu/suy dinh duong.

## Wording an toan can khoa

Dung chung:

> Ket qua la uoc tinh giao duc, khong thay the tu van dinh duong ca the. Neu co benh than, gan, tim, phu, xo gan, dang mang thai/cho con bu, ung thu, suy dinh duong, dang loc mau, hoac dang an theo chi dinh, hay hoi bac si/dinh duong vien truoc khi thay doi luong dam.

CKD chua loc mau:

> Benh than man chua loc mau can muc protein rieng theo eGFR, albumin nieu, tinh trang dinh duong va nang luong an vao. Khong tu giam/tang dam theo cong cu.

Dang loc mau:

> Dang loc mau khac voi CKD chua loc mau. Nguoi dang loc mau thuong can du dam hon, nhung muc cu the phai theo trung tam loc mau/dinh duong vien.

Gout:

> Gout khong chi phu thuoc tong dam. Loai thuc pham, purin, ruou/bia, fructose, giam can nhanh, thuoc va chuc nang than moi la cac yeu to can theo doi.

Thai ky/cho con bu:

> Nhu cau protein trong thai ky/cho con bu phu thuoc tuoi thai, can nang truoc mang thai, BMI, song thai/khong va nguy co san khoa. Cong cu khong thay the tu van san khoa.

Ung thu/suy dinh duong:

> Nhom nay can danh gia dinh duong, nguy co refeeding, muc tieu dieu tri va kha nang an/uong/nuot. Khong tu tang dam neu chua co huong dan chuyen mon.

Nuoc uong:

> Neu co phu, suy tim, xo gan, CKD tien trien, ha natri mau hoac dang bi han che dich, khong dung loi khuyen nuoc chung.

## Source lock

Sources da dung de khoa bang:

- DRI/National Academies via NCBI Bookshelf, RDA protein adult 0.8 g/kg: https://www.ncbi.nlm.nih.gov/books/NBK208874/
- NIH Office of Dietary Supplements DRI framework: https://ods.od.nih.gov/healthinformation/nutrientrecommendations.aspx
- International Society of Sports Nutrition Position Stand: protein and exercise: https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0177-8
- KDOQI Clinical Practice Guideline for Nutrition in CKD: 2020 Update, National Kidney Foundation: https://www.kidney.org/professionals/kdoqi/guidelines-and-commentaries/nutrition-ckd
- KDOQI 2020 guideline PubMed summary: https://pubmed.ncbi.nlm.nih.gov/32829751/
- KDOQI/KDIGO diabetes in CKD commentary: https://pmc.ncbi.nlm.nih.gov/articles/PMC9740752/
- ADA Standards of Care in Diabetes CKD chapter: https://diabetesjournals.org/care/article/49/Supplement_1/S246/163914/11-Chronic-Kidney-Disease-and-Risk-Management
- Endotext diabetes nutrition summary: https://www.ncbi.nlm.nih.gov/books/NBK279012/
- ESPEN practical guideline: Clinical nutrition and hydration in geriatrics: https://2022.espen.org/files/ESPEN-Guidelines/ESPEN_practical_guideline_Clinical_nutrition_and_hydration_in_geriatrics.pdf
- ESPEN practical guideline: Clinical Nutrition in cancer: https://www.espen.org/files/ESPEN-Guidelines/ESPEN-practical-guideline-clinical-nutrition-in-cancer.pdf
- ESPEN guideline on nutritional support for polymorbid medical inpatients: https://www.espen.org/files/ESPEN-Guidelines/ESPEN_guideline_on_nutritional_support_for_polymorbid_medical_in_patients.pdf
- American College of Rheumatology 2020 gout guideline: https://rheumatology.org/gout-guideline
- American College of Rheumatology patient gout information: https://rheumatology.org/patients/gout
- Pregnancy nutrition overview, Mayo Clinic, only as patient-education support pending obstetric source lock: https://www.mayoclinic.org/health/pregnancy-nutrition/PR00110

## Can bac si/dinh duong vien duyet truoc khi sua code

- Co chap nhan auto-calc cho `normal` va `muscle` sau sang loc benh nen khong.
- Range `weight-loss` nen la 1.2-1.6 hay mot khoang khac, va tinh theo actual/ideal/adjusted weight.
- Nguoi cao tuoi: khi nao hien 1.0-1.2, khi nao 1.2-1.5, va co can sang loc CKD/eGFR bat buoc khong.
- Dai thao duong khong CKD: co nen hien range rieng hay tra ve range nguoi lon/muc tieu ca nhan.
- CKD/CKD + diabetes/dialysis: chi hien canh bao hay cho phep tinh neu nguoi dung nhap eGFR/dialysis.
- Thai ky/cho con bu: can nguon san khoa chinh thuc va co nen tach khoi cong cu protein nguoi lon.
- Ung thu/suy dinh duong/hau phau: co nen tach thanh cong cu lâm sàng rieng.
- An chay: can source ve protein quality/digestibility va wording bo sung B12/sat/kem.

## Ghi chu thay doi

- Khong sua code.
- Khong sua cong thuc.
- Khong sua du lieu dinh duong.
- File nay la source lock de trien khai vong code tiep theo.
