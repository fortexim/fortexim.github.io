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
    }
}