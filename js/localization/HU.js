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
            PAPERS:{id:"PAPERS", name:"PAPÍRÁRU"},
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
            "info": "Fortexim saját márkás termék",
            "weight": "140 g",
            "logistics": ["28 doboz / karton"," - ", "54 karton / raklap"]  ,
            "img": "assets/images/products/s_suti.png",
            "category": this.CATEGORIES.COOKIES
        },
        {
            "name": "Csokis Perec Teasütemény",
            "info": "Fortexim saját márkás termék",
            "weight": "140 g",
            "logistics": ["28 doboz / karton"," - ", "54 karton / raklap"],
            "img": "assets/images/products/csokis_perec.png",
            "category": this.CATEGORIES.COOKIES
        },
        {
            "name": "Petit Teasütemény",
            "info": "Fortexim saját márkás termék",
            "weight": "140 g",
            "logistics": ["28 doboz / karton"," - ", "54 karton / raklap"],
            "img": "assets/images/products/petit.png",
            "category": this.CATEGORIES.COOKIES
        },
        {
            "name": "Minimix Teasütemény",
            "info": "Fortexim saját márkás termék",
            "weight": "140 g",
            "logistics": ["28 doboz / karton"," - ", "54 karton / raklap"],
            "img": "assets/images/products/minimix.png",
            "category": this.CATEGORIES.COOKIES
        },
        {
            "name": "Cukros Virág Teasütemény",
            "info": "Fortexim saját márkás termék",
            "weight": "140 g",
            "logistics": ["28 doboz / karton"," - ", "54 karton / raklap"],
            "img": "assets/images/products/cukros_virag.png",
            "category": this.CATEGORIES.COOKIES
        },
        {
            "name": "Freymas snack",
            "info": "",
            "weight": "40 g",
            "logistics": ["40 doboz / karton"," - ", "40 karton / raklap"],
            "img": "assets/images/products/freymas.png",
            "category": this.CATEGORIES.SNACKS
        },
        {
            "name": "Amulet lúgosított víz pH 9,2",
            "info": "",
            "weight": "1,5 L",
            "logistics": ["6 db / gyűjtő"," - ", "84 gyűjtő / raklap"],
            "img": "assets/images/products/amulet.png",
            "category": this.CATEGORIES.DRINKS
        },
        {
            "name": "Pirított napraforgó, sós és natúr",
            "info": ["40g: ","100 csomag / gyűjtő"," - ", "70 gyűjtő / raklap"],
            "weight": "40 g / 100g",
            "logistics": ["180g: ","30 csomag / gyűjtő"," - ", "70 gyűjtő / raklap"],
            "img": "assets/images/products/napraforgo.png",
            "category": this.CATEGORIES.OTHERS
        },
        {
            "name": "Gyümölcsízű kukoricapehely",
            "info": "Extrudált",
            "weight": "40 g",
            "logistics": ["40 csomag / gyűjtő"],
            "img": "assets/images/products/gyumolcs.jpg",
            "category": this.CATEGORIES.CEREALS
        },
        {
            "name": "Sós ízú Puffasztott kukoricapehely",
            "info": "Extrudált",
            "weight": "70 g",
            "logistics": ["30 csomag / gyűjtő"],
            "img": "assets/images/products/nagysos.jpg",
            "category": this.CATEGORIES.CEREALS
        },
        {
            "name": "Kakaós ízű puffasztott kukoricapehely",
            "info": "Extrudált",
            "weight": "100 g",
            "logistics": ["35 csomag / gyűjtő"],
            "img": "assets/images/products/kakaos.jpg",
            "category": this.CATEGORIES.CEREALS
        },
        {
            "name": "Mekkoo 2 rétegű wc-papír",
            "info": "",
            "weight": "10 db-os",
            "logistics": ["6 csomag / gyűjtő"," - ", "32 gyűjtő / raklap"],
            "img": "assets/images/products/mekkoo_2r.png",
            "category": this.CATEGORIES.PAPERS
        },
        {
            "name": "Mekkoo 3 rétegű wc-papír",
            "info": "",
            "weight": "10 db-os",
            "logistics": ["6 csomag / gyűjtő"," - ", "32 gyűjtő / raklap"],
            "img": "assets/images/products/mekkoo_3r.png",
            "category": this.CATEGORIES.PAPERS
        },
        {
            "name": "Mekkoo 3 rétegű törlőkendő XXL",
            "info": "",
            "weight": "2 db-os",
            "logistics": ["10 csomag / gyűjtő"," - ", "20 gyűjtő / raklap"],
            "img": "assets/images/products/mekkoo_keztorlo_2xxl.png",
            "category": this.CATEGORIES.PAPERS
        },
        {
            "name": "Mekkoo 2 rétegű törlőkendő Jumbo",
            "info": "",
            "weight": "",
            "logistics": ["6 csomag / gyűjtő"," - ", "32 gyűjtő / raklap"],
            "img": "assets/images/products/mekkoo_torlo_nagy.png",
            "category": this.CATEGORIES.PAPERS
        },
        {
            "name": "Mekkoo 1 rétegű törlőkendő dobozos",
            "info": "100 db-os",
            "weight": "",
            "logistics": ["30 doboz / karton"," - ", "32 karton / raklap"],
            "img": "assets/images/products/mekkoo_keztorlo_dobozos.png",
            "category": this.CATEGORIES.PAPERS
        },
        {
            "name": "Sajtos Tallér",
            "info": "Natúr és köményes ízben",
            "weight": "100 g",
            "logistics": ["12 csomag / karton"," - ", "100 karton / raklap"],
            "img": "assets/images/products/sajtos_taller.jpg",
            "category": this.CATEGORIES.OTHERS
        },
        {
            "name": "Győri Édes keksz, eredeti",
            "info": "",
            "weight": "180 g",
            "logistics": ["21 csomag / karton"," - ", "54 karton / raklap"],
            "img": "assets/images/products/gyori_eredeti.jpg",
            "category": this.CATEGORIES.OTHERS
        },
        {
            "name": "Győri Édes keksz, kakaós",
            "info": "",
            "weight": "180 g",
            "logistics": ["21 csomag / karton"," - ", "54 karton / raklap"],
            "img": "assets/images/products/gyori_kakaos.jpg",
            "category": this.CATEGORIES.OTHERS
        }
    ];
    }
}