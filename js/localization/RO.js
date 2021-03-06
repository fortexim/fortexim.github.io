import { ROUTING, LANGUAGES } from "../Settings";

export default class Ro {
  constructor() {
    this.lang = LANGUAGES.RO;
    this.ROUTES = {
      HOME: { id: ROUTING.HOME.id, value: "Home", hash: "" },
      PRODUCTS: { id: ROUTING.PRODUCTS.id, value: "Produse", hash: "produse" },
      ABOUT: { id: ROUTING.ABOUT.id, value: "Despre", hash: "despre" },
      CONTACT: { id: ROUTING.CONTACT.id, value: "Contact", hash: "informatii" },
      lang: LANGUAGES.RO,
    };

    this.ABOUT = {
      P1:
        "Our company named FORTEXIM Kft. is a wholesale FMCG company which formed in 2012 from a successful family business which operated many years before that.",
      P2:
        "The candy trade is our main function, in addition that we distribute many kind of products, cereals, energy drinks, cleaning and washing products etc.",
      P3:
        "Our main area are Hungary, where our depot is placed, as well as Romania, Slovakia and Bulgaria.",
      P4:
        "We hold stable bank connections and despite the challenging economic environment we expecting good returns for this year. ",
      P5: "Sincerely:",
      P6: "Sztányi Antal managing director",
    };
    this.CONTACT = {
      P1: "Fortexim Ltd.",
      P2: "Hungary, 6000 Kecskemét, Forrás u. 2/A",
      P3: "VAT number: HU24066138",
      P4: "Warehouse: Hungary, 4244 Újfehértó, Egészségház u. 11.",
      P5: "Phone.: +3630-2296-492",
      P6: "Email: info [@] fortexim.hu",
    };
    this.PRODUCT = {
      PICTURES: "Pictures",
      MORE: "More Information",
      WEIGHT: "Weight:",
      LOGISTICS: "Logistics:",
    };
    this.CATEGORIES = {
      ALL: { id: "ALL", name: "All Products" },
      DRINKS: { id: "DRINKS", name: "DRINKS" },
      WASH: {id: "WASH", name: "MOSÓSZEREK"},
      OTHERS: { id: "OTHERS", name: "OTHERS" },
    };

    this.SHOWCASEPRODUCTS = [
      {
        name: "Herbow minge nucă de spălat",
        weight: "5 spălări",
        featuredImg: "assets/images/products/mosodio.png",
        featuredColor: "#8DAF9E",
      },
      {
  name: "Herbow parfumuri de spalare",
  weight: "200 ml",
  featuredImg: "assets/images/products/parfum.png",
  featuredColor: "mediumvioletred",
      },
      {
        name: "Herbow detergent lichid",
        weight: "1 L",
        featuredImg: "assets/images/products/folyekony.png",
        featuredColor: "#AF6D3E",
      }
        
    ];
    this.PRODUCTLIST = [
      {
        name: "Herbow minge nucă de spălat",
        info: "5 spălări",
        weight: "",
        logistics: [""],
        img: "assets/images/products/mosodio.png",
        category: this.CATEGORIES.WASH,
      },
      {
        name: "Herbow parfumuri de spalare",
        info: "40 spălări",
        weight: "200 ml",
        logistics: [""],
        img: "assets/images/products/parfum.png",
        category: this.CATEGORIES.WASH,
      },
      {
        name: "Herbow detergent lichid",
        info: "33 spălări",
        weight: "1 L",
        logistics: [""],
        img: "assets/images/products/folyekony.png",
        category: this.CATEGORIES.WASH,
      },
      {
        name: "Elixiw Aqua alkaline water pH 9,2",
        info: "",
        weight: "1,5 L",
        logistics: ["6 pcs / box", "84 box / pallet"],
        img: "assets/images/products/elixiw.png",
        category: this.CATEGORIES.DRINKS,
      },
      {
        name: "Home Fresh Lemon dishwasher",
        info: "",
        weight: "1 L",
        logistics: [""],
        img: "assets/images/products/home_fresh.png",
        category: this.CATEGORIES.OTHERS,
      },
      {
        name: "Boom Narancs és Menta Liquid Soap",
        info: "",
        weight: "1 L",
        logistics: [""],
        img: "assets/images/products/boom_narancs_menta.png",
        category: this.CATEGORIES.OTHERS,
      } 
    ];
  }
}
