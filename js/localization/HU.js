import { ROUTING, LANGUAGES } from "../Settings";

export default class Hu {
  constructor() {
    this.lang = LANGUAGES.HU;
    this.ROUTES = {
      HOME: { id: ROUTING.HOME.id, value: "Kezdőlap", hash: "" },
      PRODUCTS: {
        id: ROUTING.PRODUCTS.id,
        value: "Termékek",
        hash: "termekek",
      },
      ABOUT: { id: ROUTING.ABOUT.id, value: "Rólunk", hash: "rolunk" },
      CONTACT: {
        id: ROUTING.CONTACT.id,
        value: "Kapcsolat",
        hash: "kapcsolat",
      },
      lang: LANGUAGES.HU,
    };
    this.ABOUT = {
      P1:
        "Cégünk, a FORTEXIM Kft. egy családi vállalkozásból alakult külkereskedelmi vállalat.",
      P2:
        "Vállalkozásunkat 1995-ben édességek és cereáliák előállítása és kereskedelme céljából alapítottuk, s később úgy döntöttünk, hogy nemzetközi kapcsolatainkat kihasználva és arra alapozva bővítjük profilunkat, így 2012-ben megalapítottuk a FORTEXIM Kft-t.",
      P3:
        "Cégünk főként Magyarországon, Romániában és Szlovákiában végez értékesítést. Központi irodánk és telephelyünk Magyarországon található.",
      P4:
        "Vállalatunk stabil banki kapcsolatokkal rendelkezik és a nehéz gazdasági környezet ellenére nyereséges évre számítunk. Vevőink stabil kiszolgálása céljából jelentős szállítói kapacitást illetve raktárbázist építettünk ki, és a jövőben további bővítést tervezünk.",
      P5: "Üdvözlettel:",
      P6: "Sztányi Antal ügyvezető igazgató",
    };
    this.CONTACT = {
      P1: "Fortexim Kereskedelmi és Szolgáltató Kft.",
      P2: "6000 Kecskemét, Forrás u. 2/A",
      P3: "Közösségi adószám: HU24066138",
      P4: "Telephely: 4244 Újfehértó, Egészségház u. 11.",
      P5: "Tel.: +3630-2296-492",
      P6: "Email: info [kukac] fortexim.hu",
    };
    this.CATEGORIES = {
      ALL: { id: "ALL", name: "MINDEN TERMÉK" },
      COOKIES: { id: "COOKIES", name: "SÜTEMÉNYEK" },
      WAFERS: { id: "WAFERS", name: "NÁPOLYIK" },
      CEREALS: { id: "CEREALS", name: "CEREÁLIÁK" },
      SNACKS: { id: "SNACKS", name: "SNACKEK" },
      DRINKS: { id: "DRINKS", name: "ITALOK" },
      PAPERS: { id: "PAPERS", name: "PAPÍRÁRU" },
      OTHERS: { id: "OTHERS", name: "EGYÉB TERMÉKEK" },
    };
    this.PRODUCT = {
      PICTURES: "Képek",
      MORE: "További Információk",
      WEIGHT: "Tömeg:",
      LOGISTICS: "Logisztika:",
    };
    this.SHOWCASEPRODUCTS = [
      {
        name: "Elixiw Aqua lúgosított víz pH 9,2",
        weight: "1.5 L",
        featuredImg: "assets/images/products/elixiw.png",
        featuredColor: "mediumvioletred",
      },
      {
        name: "SMILE palacsinta",
        weight: "40 g",
        featuredImg: "assets/images/products/smile_front.png",
        featuredColor: "#FF8705",
      },
      {
        name: "Freymas snack",
        weight: "40 g",
        featuredImg: "assets/images/products/freymas.png",
        featuredColor: "#dc9701",
      },
    ];
    this.PRODUCTLIST = [
      {
        name: "SMILE palacsinta",
        info: "",
        weight: "40 g",
        logistics: ["6 db / karton", "240 karton / raklap"],
        img: "assets/images/products/smile_front.png",
        row1: "smile_hu.html",
        category: this.CATEGORIES.COOKIES,
      },
      {
        name: "Freymas snack",
        info: "",
        weight: "40 g",
        logistics: ["40 doboz / karton", "40 karton / raklap"],

        img: "assets/images/products/freymas.png",
        category: this.CATEGORIES.SNACKS,
      },
      {
        name: "Elixiw Aqua lúgosított víz pH 9,2",
        info: "",
        weight: "1,5 L",
        logistics: ["6 db / gyűjtő", "84 gyűjtő / raklap"],
        img: "assets/images/products/elixiw.png",
        category: this.CATEGORIES.DRINKS,
      },
      {
        name: "Pirított napraforgó, sós és natúr",
        info: [],

        weight: "40g / 180g",
        logistics: [
          "180g: ",
          "30 csomag / gyűjtő",
          "70 gyűjtő / raklap",
          "40g: ",
          "100 csomag / gyűjtő",
          "70 gyűjtő / raklap",
        ],

        img: "assets/images/products/napraforgo.png",
        category: this.CATEGORIES.OTHERS,
      },
      {
        name: "Gyümölcsízű kukoricapehely",
        info: "Extrudált",
        weight: "40 g",
        logistics: ["40 csomag / gyűjtő"],
        img: "assets/images/products/gyumolcs.jpg",
        category: this.CATEGORIES.CEREALS,
      },
      {
        name: "Sós ízú Puffasztott kukoricapehely",
        info: "Extrudált",
        weight: "70 g",
        logistics: ["30 csomag / gyűjtő"],
        img: "assets/images/products/nagysos.jpg",
        category: this.CATEGORIES.CEREALS,
      },
      {
        name: "Kakaós ízű puffasztott kukoricapehely",
        info: "Extrudált",
        weight: "100 g",
        logistics: ["35 csomag / gyűjtő"],
        img: "assets/images/products/kakaos.jpg",
        category: this.CATEGORIES.CEREALS,
      },
      {
        name: "Mekkoo 2 rétegű wc-papír",
        info: "",
        weight: "10 db-os",
        logistics: ["6 csomag / gyűjtő", "32 gyűjtő / raklap"],

        img: "assets/images/products/mekkoo_2r.png",
        category: this.CATEGORIES.PAPERS,
      },
      {
        name: "Mekkoo 3 rétegű wc-papír",
        info: "",
        weight: "10 db-os",
        logistics: ["6 csomag / gyűjtő", "32 gyűjtő / raklap"],

        img: "assets/images/products/mekkoo_3r.png",
        category: this.CATEGORIES.PAPERS,
      },
      {
        name: "Mekkoo 3 rétegű törlőkendő XXL",
        info: "",
        weight: "2 db-os",
        logistics: ["10 csomag / gyűjtő", "20 gyűjtő / raklap"],

        img: "assets/images/products/mekkoo_keztorlo_2xxl.png",
        category: this.CATEGORIES.PAPERS,
      },
      {
        name: "Mekkoo 2 rétegű törlőkendő Jumbo",
        info: "",
        weight: "",
        logistics: ["6 csomag / gyűjtő", "32 gyűjtő / raklap"],

        img: "assets/images/products/mekkoo_torlo_nagy.png",
        category: this.CATEGORIES.PAPERS,
      },
      {
        name: "Mekkoo 1 rétegű törlőkendő dobozos",
        info: "100 db-os",
        weight: "",
        logistics: ["30 doboz / karton", "32 karton / raklap"],

        img: "assets/images/products/mekkoo_keztorlo_dobozos.png",
        category: this.CATEGORIES.PAPERS,
      },
      {
        name: "Sajtos Tallér",
        info: "Natúr és köményes ízben",
        weight: "100 g",
        logistics: ["12 csomag / karton", "100 karton / raklap"],

        img: "assets/images/products/sajtos_taller.jpg",
        category: this.CATEGORIES.OTHERS,
      },
      {
        name: "Győri Édes keksz, eredeti",
        info: "",
        weight: "180 g",
        logistics: ["21 csomag / karton", "54 karton / raklap"],

        img: "assets/images/products/gyori_eredeti.jpg",
        category: this.CATEGORIES.OTHERS,
      },
      {
        name: "Győri Édes keksz, kakaós",
        info: "",
        weight: "180 g",
        logistics: ["21 csomag / karton", "54 karton / raklap"],

        img: "assets/images/products/gyori_kakaos.jpg",
        category: this.CATEGORIES.OTHERS,
      },
      {
        name: "CERKA",
        info: "Kakaós ízű töltött ostyarúd",
        weight: "30 g",
        logistics: ["30 db / 12 henger / 16 karton / raklap"],
        img: "assets/images/products/cerka.jpg",
        category: this.CATEGORIES.OTHERS,
      },
      {
        name: "Mini Ropogós sajtos",
        info: "",
        weight: "60 g",
        logistics: ["18 csomag / 6 gyűjtő / 20 karton / raklap"],
        img: "assets/images/products/mini_ropogos.jpg",
        category: this.CATEGORIES.OTHERS,
      },
      {
        name: "Téli Fagyi",
        info: "",
        weight: "30 g",
        logistics: ["50 db / 80 karton / raklap"],
        img: "assets/images/products/teli_fagyi.jpg",
        category: this.CATEGORIES.OTHERS,
      },
      {
        name: "Tuti ostya citrom ízű",
        info: "Citrom ízű krémmel töltött",
        weight: "200 g",
        logistics: ["42 db / 50 karton / raklap"],
        img: "assets/images/products/tuti_ostya_citrom.jpg",
        category: this.CATEGORIES.WAFERS,
      },
      {
        name: "Tuti ostya kakaós ízű",
        info: "Kakaós ízű krémmel töltött",
        weight: "200 g",
        logistics: ["42 db / 50 karton / raklap"],
        img: "assets/images/products/tuti_ostya_kakaos.jpg",
        category: this.CATEGORIES.WAFERS,
      },
      {
        name: "Tuti ostya kakaós-vanília ízű",
        info: "Kakaós vaníliás ízű krémmel töltött",
        weight: "200 g",
        logistics: ["42 db / 50 karton / raklap"],
        img: "assets/images/products/tuti_ostya_kakaos_vanilia.jpg",
        category: this.CATEGORIES.WAFERS,
      },
      {
        name: "Tuti EXTRA töltött ostya kakaós ízű",
        info: "Kakaós ízű krémmel töltött",
        weight: "200 g",
        logistics: ["36 db / 50 karton / raklap"],
        img: "assets/images/products/tuti_extra_kakaos.jpg",
        category: this.CATEGORIES.WAFERS,
      },
      {
        name: "Tuti EXTRA töltött ostya vanília ízű",
        info: "Vanília ízű krémmel töltött",
        weight: "200 g",
        logistics: ["36 db / 50 karton / raklap"],
        img: "assets/images/products/tuti_extra_vanilia.jpg",
        category: this.CATEGORIES.WAFERS,
      },
      {
        name: "ÉT-PARÁNY",
        info: "",
        weight: "300 g",
        logistics: ["20 db / 50 karton / raklap"],
        img: "assets/images/products/et_parany_300.jpg",
        category: this.CATEGORIES.WAFERS,
      },
      {
        name: "ÉT-PARÁNY",
        info: "",
        weight: "200 g",
        logistics: ["6 db / 100 gyűjtő / raklap"],
        img: "assets/images/products/et_parany_200.jpg",
        category: this.CATEGORIES.WAFERS,
      },
      {
        name: "LÉDIG ÉT-PARÁNY",
        info: "",
        weight: "3 kg",
        logistics: ["60 karton / raklap"],
        img: "assets/images/products/ledig_parany.jpg",
        category: this.CATEGORIES.WAFERS,
      },
      {
        name: "LÉDIG NÁPOLYI",
        info: "",
        weight: "6 kg",
        logistics: ["60 karton / raklap"],
        img: "assets/images/products/ledig_napolyi.jpg",
        category: this.CATEGORIES.WAFERS,
      },
    ];
  }
}
