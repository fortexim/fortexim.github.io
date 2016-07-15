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
    }
}