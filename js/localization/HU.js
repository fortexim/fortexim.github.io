import {ROUTING, LANGUAGES} from '../Settings';

export default class Hu {
    constructor(){
        this.lang = LANGUAGES.HU;
        this.ROUTES = {
            HOME: {id: ROUTING.HOME.id, value: "Kezdőlap", hash:""},
            PRODUCTS: {id: ROUTING.PRODUCTS.id, value: "Termékek", hash:"termekek"},
            ABOUT: {id: ROUTING.ABOUT.id, value: "Rólunk", hash:"rolunk"},
            CONTACT: {id: ROUTING.CONTACT.id, value: "Kapcsolat", hash:"kapcsolat"},
            lang: LANGUAGES.HU
        }
        this.ABOUT = {
            P1: "Cégünk, a FORTEXIM Kft. egy családi vállalkozásból alakult külkereskedelmi vállalat.",
            P2: "Vállalkozásunkat 1995-ben édességek és cereáliák előállítása és kereskedelme céljából alapítottuk, s később úgy döntöttünk, hogy nemzetközi kapcsolatainkat kihasználva és arra alapozva bővítjük profilunkat, így 2012-ben megalapítottuk a FORTEXIM Kft-t.",
            P3: "Cégünk főként Magyarországon, Romániában és Szlovákiában végez értékesítést. Központi irodánk és telephelyünk Magyarországon található.",
            P4: "Vállalatunk stabil banki kapcsolatokkal rendelkezik és a nehéz gazdasági környezet ellenére nyereséges évre számítunk. Vevőink stabil kiszolgálása céljából jelentős szállítói kapacitást illetve raktárbázist építettünk ki, és a jövőben további bővítést tervezünk.",
            P5: "Üdvözlettel:",
            P6: "Sztányi Antal ügyvezető igazgató"
        }
        this.CONTACT = {
            P1: "Fortexim Kereskedelmi és Szolgáltató Kft.",
            P2: "6000 Kecskemét, Forrás u. 2/A",
            P3: "Közösségi adószám: HU24066138",
            P4: "Telephely: 4244 Újfehértó, Egészségház u. 11.",
            P5: "Tel.: +3630-2296-492",
            P6: "Email: info [kukac] fortexim.hu"
        }
        this.CATEGORIES = {
            ALL:{id:"ALL", name:"MINDEN TERMÉK"},
            COOKIES:{id:"COOKIES", name:"SÜTEMÉNYEK"},
            CEREALS:{id:"CEREALS", name:"CEREÁLIÁK"},
            SNACKS:{id:"SNACKS", name:"SNACKEK"},
            DRINKS:{id:"DRINKS", name:"ITALOK"},
            OTHERS:{id:"OTHERS", name:"EGYÉB TERMÉKEK"}
        };
        this.PRODUCT = {
            PICTURES: "Képek",
            MORE: "További Információk"
        }
        this.SHOWCASEPRODUCTS = [
            {
                "name": "Fortexim Teasütemények",
                "weight": "140 g",
                "featuredImg":"assets/images/products/s_suti.png",
                "featuredColor":"maroon",
            },
            {
                "name": "Freymas snack",
                "weight": "40 g",
                "featuredImg":"assets/images/products/freymas.png",
                "featuredColor":"#dc9701",
            },
            {
                "name": "Amulet lúgosított víz pH 9,2",
                "weight": "1.5 L",
                "featuredImg":"assets/images/products/amulet.png",
                "featuredColor":"mediumvioletred",
            }
        ];
        this.PRODUCTLIST = [
        {
            "name": "S Teasütemény",
            "info": "This is information abt the product",
            "weight": "140 g",
            "logistics": ["300 pcs / box", "40 box / pallet"],
            "img": "assets/images/products/s_suti.png",
            "category": this.CATEGORIES.COOKIES
        },
        {
            "name": "Csokis Perec Teasütemény",
            "info": "This is information abt the product",
            "weight": "140 g",
            "logistics": ["3100 pcs / box", "40 box / pallet"],
            "img": "assets/images/products/csokis_perec.png",
            "category": this.CATEGORIES.COOKIES
        },
        {
            "name": "Cukros Virág Teasütemény",
            "info": "This is information abt the product",
            "weight": "140 g",
            "logistics": ["3100 pcs / box", "40 box / pallet"],
            "img": "assets/images/products/cukros_virag.png",
            "category": this.CATEGORIES.COOKIES
        },
        {
            "name": "Freymas snack",
            "info": "Termékinformáció",
            "weight": "40 g",
            "logistics": ["100 pcs / box", "100 box / pallet"],
            "img": "assets/images/products/freymas.png",
            "category": this.CATEGORIES.SNACKS
        },
        {
            "name": "Amulet lúgosított víz pH 9,2",
            "info": "This is information abt the product",
            "weight": "1,5 L",
            "logistics": ["3000 pcs / box", "40 box / pallet"],
            "img": "assets/images/products/amulet.png",
            "category": this.CATEGORIES.DRINKS
        },
        {
            "name": "Pirított napraforgó",
            "info": "This is information abt the product",
            "weight": "40 g / 100g",
            "logistics": ["500 pcs / box", "40 box / pallet"],
            "img": "assets/images/products/napraforgo.png",
            "category": this.CATEGORIES.OTHERS
        },
        {
            "name": "Gyümölcsízű kukoricapehely",
            "info": "This is information abt the product",
            "weight": "40 g",
            "logistics": ["3100 pcs / box", "40 box / pallet"],
            "img": "assets/images/products/gyumolcs.jpg",
            "category": this.CATEGORIES.CEREALS
        },
        {
            "name": "Sós ízú Puffasztott kukoricapehely",
            "info": "This is information abt the product",
            "weight": "70 g",
            "logistics": ["3100 pcs / box", "40 box / pallet"],
            "img": "assets/images/products/nagysos.jpg",
            "category": this.CATEGORIES.CEREALS
        },
        {
            "name": "Kakaós ízű puffasztott kukoricapehely",
            "info": "This is information abt the product",
            "weight": "100 g",
            "logistics": ["3100 pcs / box", "40 box / pallet"],
            "img": "assets/images/products/kakaos.jpg",
            "category": this.CATEGORIES.CEREALS
        }
    ];
    }
}