import {ROUTING, LANGUAGES} from '../Settings';

export default class Ro {
    constructor() {
        this.lang = LANGUAGES.RO;
        this.ROUTES = {
            HOME: {id: ROUTING.HOME.id, value: "Home", hash:""},
            PRODUCTS: {id: ROUTING.PRODUCTS.id, value: "Produse", hash:"produse"},
            ABOUT: {id: ROUTING.ABOUT.id, value: "Despre", hash:"despre"},
            CONTACT: {id: ROUTING.CONTACT.id, value: "Contact", hash:"informatii"},
            lang: LANGUAGES.RO
        }

        this.ABOUT = {
            P1: "Our company named FORTEXIM Kft. is a wholesale FMCG company which formed in 2012 from a successful family business which operated many years before that.",
            P2: "The candy trade is our main function, in addition that we distribute many kind of products, cereals, energy drinks, cleaning and washing products etc.",
            P3: "Our main area are Hungary, where our depot is placed, as well as Romania, Slovakia and Bulgaria.",
            P4: "We hold stable bank connections and despite the challenging economic environment we expecting good returns for this year. ",
            P5: "Sincerely:",
            P6: "Sztányi Antal managing director"
        }
        this.CONTACT = {
            P1: "Fortexim Ltd.",
            P2: "Hungary, 6000 Kecskemét, Forrás u. 2/A",
            P3: "VAT number: HU24066138",
            P4: "Warehouse: Hungary, 4244 Újfehértó, Egészségház u. 11.",
            P5: "Phone.: +3630-2296-492",
            P6: "Email: info [@] fortexim.hu"
        }
        this.PRODUCT = {
            PICTURES: "Pictures",
            MORE: "More Information"
        }
        this.CATEGORIES = {
            ALL:{id:"ALL", name:"All Products"},
            COOKIES:{id:"COOKIES", name:"COOKIES"},
            CEREALS:{id:"CEREALS", name:"CEREALS"},
            SNACKS:{id:"SNACKS", name:"SNACKS"},
            DRINKS:{id:"DRINKS", name:"DRINKS"},
            OTHERS:{id:"OTHERS", name:"OTHERS"}
        };

        this.SHOWCASEPRODUCTS = [
            {
                "name": "Fortexim Cookies",
                "weight": "150 g",
                "featuredImg":"assets/images/products/s_suti.png",
                "featuredColor":"maroon",
            },
            {
                "name": "Freymas snacks",
                "weight": "1 L",
                "featuredImg":"assets/images/products/freymas.png",
                "featuredColor":"#dc9701",
            },
            {
                "name": "Amulet mineral water pH 9.2",
                "weight": "1.5 L",
                "featuredImg":"assets/images/products/amulet.png",
                "featuredColor":"mediumvioletred",
            }
        ];
        this.PRODUCTLIST = [
        {
            "name": "S Cookie",
            "info": "This is information abt the product",
            "weight": "140 g",
            "logistics": ["300 pcs / box", "40 box / pallet"],
            "img": "assets/images/products/s_suti.png",
            "category": this.CATEGORIES.COOKIES
        },
        {
            "name": "Cocoa-Pretzel Cookie",
            "info": "This is information abt the product",
            "weight": "140 g",
            "logistics": ["3100 pcs / box", "40 box / pallet"],
            "img": "assets/images/products/csokis_perec.png",
            "category": this.CATEGORIES.COOKIES
        },
        {
            "name": "Sugary Flower Cookie",
            "info": "This is information abt the product",
            "weight": "140 g",
            "logistics": ["3100 pcs / box", "40 box / pallet"],
            "img": "assets/images/products/cukros_virag.png",
            "category": this.CATEGORIES.COOKIES
        },
        {
            "name": "Freymas snacks",
            "info": "This is information abt the product",
            "weight": "40 g",
            "logistics": ["100 pcs / box", "100 box / pallet"],
            "img": "assets/images/products/freymas.png",
            "category": this.CATEGORIES.SNACKS
        },
        {
            "name": "Amulet mineral water pH 9.2",
            "info": "This is information abt the product",
            "weight": "1.5 L",
            "logistics": ["3000 pcs / box", "40 box / pallet"],
            "img": "assets/images/products/amulet.png",
            "category": this.CATEGORIES.DRINKS
        },
        {
            "name": "Browned Sunflower Seed",
            "info": "This is information abt the product",
            "weight": "40 g / 100g",
            "logistics": ["500 pcs / box", "40 box / pallet"],
            "img": "assets/images/products/napraforgo.png",
            "category": this.CATEGORIES.OTHERS
        },
        {
            "name": "Fruit-Flavoured Cornflakes",
            "info": "This is information abt the product",
            "weight": "40 g",
            "logistics": ["3100 pcs / box", "40 box / pallet"],
            "img": "assets/images/products/gyumolcs.jpg",
            "category": this.CATEGORIES.CEREALS
        },
        {
            "name": "Salt-Flavoured Cornflakes",
            "info": "This is information abt the product",
            "weight": "70 g",
            "logistics": ["3100 pcs / box", "40 box / pallet"],
            "img": "assets/images/products/nagysos.jpg",
            "category": this.CATEGORIES.CEREALS
        },
        {
            "name": "Cacao-Flavoured Cornflakes",
            "info": "This is information abt the product",
            "weight": "100 g",
            "logistics": ["3100 pcs / box", "40 box / pallet"],
            "img": "assets/images/products/kakaos.jpg",
            "category": this.CATEGORIES.CEREALS
        }
        ];
    }

}