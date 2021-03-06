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
      DRINKS: { id: "DRINKS", name: "ITALOK" },
      WASH: {id: "WASH", name: "MOSÓSZEREK"},
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
        name: "Herbow mosódiós labda",
        weight: "5 mosáshoz",
        featuredImg: "assets/images/products/mosodio.png",
        featuredColor: "#8DAF9E",
      },
      {
  name: "Herbow mosóparfüm",
  weight: "200 ml",
  featuredImg: "assets/images/products/parfum.png",
  featuredColor: "mediumvioletred",
      },
      {
        name: "Herbow folyékony mosószer",
        weight: "1 L",
        featuredImg: "assets/images/products/folyekony.png",
        featuredColor: "#AF6D3E",
        }
      

    ];
    this.PRODUCTLIST = [
      {
        name: "Herbow mosódiós labda",
        info: "5 mosáshoz elegendő",
        weight: "",
        logistics: [""],
        img: "assets/images/products/mosodio.png",
        category: this.CATEGORIES.WASH,
      },
      {
        name: "Herbow mosóparfüm",
        info: "40 mosáshoz elegendő",
        weight: "200 ml",
        logistics: [""],
        img: "assets/images/products/parfum.png",
        category: this.CATEGORIES.WASH,
      },
      {
        name: "Herbow folyékony mosószer",
        info: "33 mosáshoz elegendő",
        weight: "1 L",
        logistics: [""],
        img: "assets/images/products/folyekony.png",
        category: this.CATEGORIES.WASH,
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
        name: "Home Fresh Lemon mosogatószer",
        info: "",
        weight: "1 L",
        logistics: [""],
        img: "assets/images/products/home_fresh.png",
        category: this.CATEGORIES.OTHERS,
      },
      {
        name: "Boom Narancs és Menta Krémszappan",
        info: "",
        weight: "1 L",
        logistics: [""],
        img: "assets/images/products/boom_narancs_menta.png",
        category: this.CATEGORIES.OTHERS,
      }  
    ];
  }
}
