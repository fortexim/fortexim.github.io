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
    }
}