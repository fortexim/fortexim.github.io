import {ROUTING, LANGUAGES} from '../Settings';

export default class En {
    constructor() {
        this.lang = LANGUAGES.EN;
        this.ROUTES = {
            HOME: {id: ROUTING.HOME.id, value: "Home", hash:""},
            PRODUCTS: {id: ROUTING.PRODUCTS.id, value: "Products", hash:"products"},
            ABOUT: {id: ROUTING.ABOUT.id, value: "About", hash:"about"},
            CONTACT: {id: ROUTING.CONTACT.id, value: "Contact", hash:"contact"},
            lang: LANGUAGES.EN
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
            MORE: "More Information",
            WEIGHT: "Weight:",
            LOGISTICS: "Logistics:"
        }
        this.CATEGORIES = {
            ALL:{id:"ALL", name:"All Products"},
            COOKIES:{id:"COOKIES", name:"COOKIES"},
            WAFERS:{id:"WAFERS", name:"WAFERS"},
            CEREALS:{id:"CEREALS", name:"CEREALS"},
            SNACKS:{id:"SNACKS", name:"SNACKS"},
            DRINKS:{id:"DRINKS", name:"DRINKS"},
            PAPERS:{id:"PAPERS", name:"PAPER"},
            OTHERS:{id:"OTHERS", name:"OTHERS"}
        };
        this.SHOWCASEPRODUCTS = [
            {
                "name": "SMILE Pancake",
                "weight": "40 g",
                "featuredImg":"assets/images/products/smile_front.png",
                "featuredColor":"#FF8705",
            },
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
            "name": "SMILE Pancake",
            "info": "",
            "weight": "40 g",
            "logistics": ["6 pcs / box", "240 box / pallet"],
            "img": "assets/images/products/smile_front.png",
            "row1": 'smile_en.html',
            "category": this.CATEGORIES.COOKIES
        },
        {
            "name": "S Cookie",
            "info": "Fortexim private labeled brand",
            "weight": "140 g",
            "logistics": ["28 pcs / box"," - ", "54 box / pallet"],
            "img": "assets/images/products/s_suti.png",
            "category": this.CATEGORIES.COOKIES
        },
        {
            "name": "Cocoa-Pretzel Cookie",
            "info": "Fortexim private labeled brand",
            "weight": "140 g",
            "logistics": ["28 pcs / box"," - ", "54 box / pallet"],
            "img": "assets/images/products/csokis_perec.png",
            "category": this.CATEGORIES.COOKIES
        },
        {
            "name": "Petit Cookie",
            "info": "Fortexim private labeled brand",
            "weight": "140 g",
            "logistics": ["28 pcs / box"," - ", "54 box / pallet"],
            "img": "assets/images/products/petit.png",
            "category": this.CATEGORIES.COOKIES
        },
        {
            "name": "Minimix Cookie",
            "info": "Fortexim private labeled brand",
            "weight": "140 g",
            "logistics": ["28 pcs / box"," - ", "54 box / pallet"],
            "img": "assets/images/products/minimix.png",
            "category": this.CATEGORIES.COOKIES
        },
        {
            "name": "Sugary Flower Cookie",
            "info": "Fortexim private labeled brand",
            "weight": "140 g",
            "logistics": ["28 pcs / box"," - ", "54 box / pallet"],
            "img": "assets/images/products/cukros_virag.png",
            "category": this.CATEGORIES.COOKIES
        },
        {
            "name": "Freymas snacks",
            "info": "",
            "weight": "40 g",
            "logistics": ["100 pcs / box", "100 box / pallet"],
            "img": "assets/images/products/freymas.png",
            "category": this.CATEGORIES.SNACKS
        },
        {
            "name": "Amulet alkaline water pH 9.2",
            "info": "",
            "weight": "1.5 L",
            "logistics": ["6 pcs / box", "84 box / pallet"],
            "img": "assets/images/products/amulet.png",
            "category": this.CATEGORIES.DRINKS
        },
        {
            "name": "Browned Sunflower Seed, salted and original",
            "info": [],
            "weight": "40g / 180g",
            "logistics": ["180g: ","30 pcs / box", "70 box / pallet","40g: ","100 pcs / box", "70 box / pallet"],
            "img": "assets/images/products/napraforgo.png",
            "category": this.CATEGORIES.OTHERS
        },
        {
            "name": "Fruit-Flavoured Puffed Cornflakes",
            "info": "",
            "weight": "40 g",
            "logistics": ["40 pcs / box"],
            "img": "assets/images/products/gyumolcs.jpg",
            "category": this.CATEGORIES.CEREALS
        },
        {
            "name": "Salt-Flavoured PuffedCornflakes",
            "info": "",
            "weight": "70 g",
            "logistics": ["30 pcs / box"],
            "img": "assets/images/products/nagysos.jpg",
            "category": this.CATEGORIES.CEREALS
        },
        {
            "name": "Cacao-Flavoured Puffed Cornflakes",
            "info": "",
            "weight": "100 g",
            "logistics": ["35 pcs / box"],
            "img": "assets/images/products/kakaos.jpg",
            "category": this.CATEGORIES.CEREALS
        },
        {
            "name": "Mekkoo toilet paper, 2 layer",
            "info": "",
            "weight": "10 pcs",
            "logistics": ["6 package / bag"," - ", "32 bag / raklap"],
            "img": "assets/images/products/mekkoo_2r.png",
            "category": this.CATEGORIES.PAPERS
        },
        {
            "name": "Mekkoo toilet paper, 3 layer",
            "info": "",
            "weight": "10 pcs",
            "logistics": ["6 package / bag"," - ", "32 bag / pallet"],
            "img": "assets/images/products/mekkoo_3r.png",
            "category": this.CATEGORIES.PAPERS
        },
        {
            "name": "Mekkoo paper wiper, 2 layer, XXL",
            "info": "",
            "weight": "2 pcs",
            "logistics": ["10 package / bag"," - ", "20 bag / pallet"],
            "img": "assets/images/products/mekkoo_keztorlo_2xxl.png",
            "category": this.CATEGORIES.PAPERS
        },
        {
            "name": "Mekkoo paper wiper, 2 layer, Jumbo",
            "info": "",
            "weight": "",
            "logistics": ["6 package / bag"," - ", "32 bag / pallet"],
            "img": "assets/images/products/mekkoo_torlo_nagy.png",
            "category": this.CATEGORIES.PAPERS
        },
        {
            "name": "Mekkoo paper wiper, 1 layer, box",
            "info": "100 pcs",
            "weight": "",
            "logistics": ["30 package / carton"," - ", "32 carton / pallet"],
            "img": "assets/images/products/mekkoo_keztorlo_dobozos.png",
            "category": this.CATEGORIES.PAPERS
        },
        {
            "name": "Cheesy Thaler",
            "info": "Original and cumin",
            "weight": "100 g",
            "logistics": ["12 package / carton"," - ", "100 carton / pallet"],
            "img": "assets/images/products/sajtos_taller.jpg",
            "category": this.CATEGORIES.OTHERS
        },
        {
            "name": "Győri Édes biscuit, original",
            "info": "",
            "weight": "180 g",
            "logistics": ["21 package / carton"," - ", "54 carton / pallet"],
            "img": "assets/images/products/gyori_eredeti.jpg",
            "category": this.CATEGORIES.OTHERS
        },
        {
            "name": "Győri Édes biscuit, cocoa",
            "info": "",
            "weight": "180 g",
            "logistics": ["21 package / carton"," - ", "54 carton / pallet"],
            "img": "assets/images/products/gyori_kakaos.jpg",
            "category": this.CATEGORIES.OTHERS
        },
         {
            "name": "CERKA",
            "info": "Kakaós ízű töltött ostyarúd",
            "weight": "30 g",
            "logistics": ["30 pcs / 12 cylinder / 16 carton / pallet"],
            "img": "assets/images/products/cerka.jpg",
            "category": this.CATEGORIES.OTHERS
        },
        {
            "name": "Mini Ropogós sajtos",
            "info": "",
            "weight": "60 g",
            "logistics": ["18 pcs / 6 box / 20 carton / pallet"],
            "img": "assets/images/products/mini_ropogos.jpg",
            "category": this.CATEGORIES.OTHERS
        },
        {
            "name": "Téli Fagyi",
            "info": "",
            "weight": "30 g",
            "logistics": ["50 pcs / 80 box / pallet"],
            "img": "assets/images/products/teli_fagyi.jpg",
            "category": this.CATEGORIES.OTHERS
        },
        {
            "name": "Tuti ostya citrom ízű",
            "info": "Citrom ízű krémmel töltött",
            "weight": "200 g",
            "logistics": ["42 pcs / 50 box / pallet"],
            "img": "assets/images/products/tuti_ostya_citrom.jpg",
            "category": this.CATEGORIES.WAFERS
        },
        {
            "name": "Tuti ostya kakaós ízű",
            "info": "Kakaós ízű krémmel töltött",
            "weight": "200 g",
            "logistics": ["42 pcs / 50 box / pallet"],
            "img": "assets/images/products/tuti_ostya_kakaos.jpg",
            "category": this.CATEGORIES.WAFERS
        },
        {
            "name": "Tuti ostya kakaós-vanília ízű",
            "info": "Kakaós vaníliás ízű krémmel töltött",
            "weight": "200 g",
            "logistics": ["42 pcs / 50 box / pallet"],
            "img": "assets/images/products/tuti_ostya_kakaos_vanilia.jpg",
            "category": this.CATEGORIES.WAFERS
        },
        {
            "name": "Tuti EXTRA töltött ostya kakaós ízű",
            "info": "Kakaós ízű krémmel töltött",
            "weight": "200 g",
            "logistics": ["36 pcs / 50 box / pallet"],
            "img": "assets/images/products/tuti_extra_kakaos.jpg",
            "category": this.CATEGORIES.WAFERS
        },
        {
            "name": "Tuti EXTRA töltött ostya vanília ízű",
            "info": "Vanília ízű krémmel töltött",
            "weight": "200 g",
            "logistics": ["36 pcs / 50 box / pallet"],
            "img": "assets/images/products/tuti_extra_vanilia.jpg",
            "category": this.CATEGORIES.WAFERS
        },
        {
            "name": "ÉT-PARÁNY",
            "info": "",
            "weight": "300 g",
            "logistics": ["20 pcs / 50 box / pallet"],
            "img": "assets/images/products/et_parany_300.jpg",
            "category": this.CATEGORIES.WAFERS
        },
        {
            "name": "ÉT-PARÁNY",
            "info": "",
            "weight": "200 g",
            "logistics": ["6 pcs / 100 box / pallet"],
            "img": "assets/images/products/et_parany_200.jpg",
            "category": this.CATEGORIES.WAFERS
        },
        {
            "name": "LÉDIG ÉT-PARÁNY",
            "info": "",
            "weight": "3 kg",
            "logistics": ["60 carton / pallet"],
            "img": "assets/images/products/ledig_parany.jpg",
            "category": this.CATEGORIES.WAFERS
        },
        {
            "name": "LÉDIG NÁPOLYI",
            "info": "",
            "weight": "6 kg",
            "logistics": ["60 carton / pallet"],
            "img": "assets/images/products/ledig_napolyi.jpg",
            "category": this.CATEGORIES.WAFERS
        }
        ];
    }

}