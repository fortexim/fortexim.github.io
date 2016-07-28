// import {Localization} from './localization/Localization';
import {ROUTING, LANGUAGES} from './Settings';
var PubSub = require('pubsub-js');
require("./libs/routie.js");

export class Routes {

    constructor(localization) {
        this.localization = localization;
        this._currentRoute = null;
        this.lang = null;
        this.invalidHash = "404";
        this.initRoutes();
    }

   initRoutes(){
        let validRoutes = new Set();
        let currentHash = this.getCurrentHash();
        let routes = this.localization.getObjectFromLocals("ROUTES");
        this.localization.setRoutesObject(this);

        for (let route in routes) {
            for (let o in routes[route]) {
                if (routes[route].hasOwnProperty(o) && routes[route][o].hash!== undefined) {
                    validRoutes.add(routes[route][o].hash);
                    if (currentHash===routes[route][o].hash) {
                        this.localization.setLang(routes[route].lang);
                    }
                }
            }
        }
        if (!this.setQuickLanguageLinks(currentHash)) {
            if (!validRoutes.has(currentHash)) {
                this.invalidHash = currentHash;
                this.localization.setLang(LANGUAGES.HU);
            }
        }
        this.setRoutes();
    }

    getCurrentHash() {
        return window.location.hash.substring(1);
    }

    get currentRoute () {
        return this._currentRoute;
    }

    set currentRoute (currentRoute) {
        this._currentRoute = currentRoute; 
    }

    hashChanged() {
        PubSub.publish('HASH', this.currentRoute);
    }

    setRoutes(){
        let that = this;
        this.loc = this.localization.getDict();
        routie({
            [this.loc.ROUTES.HOME.hash]: function() {
                that.currentRoute = ROUTING.HOME;
                that.hashChanged();
            },
            [this.loc.ROUTES.PRODUCTS.hash]: function() {
                that.currentRoute = ROUTING.PRODUCTS;
                that.hashChanged();
            },
            [this.loc.ROUTES.ABOUT.hash]: function() {
                that.currentRoute = ROUTING.ABOUT;
                that.hashChanged();
            },
            [this.loc.ROUTES.CONTACT.hash]: function() {
                that.currentRoute = ROUTING.CONTACT;
                that.hashChanged();
            },
            [this.invalidHash]: function() {
                console.warn('404 This route does not exist!!');
                that.currentRoute = ROUTING.HOME;
                that.hashChanged();
            }
        })
    }

    setQuickLanguageLinks(hash){
        if (hash === LANGUAGES.EN.quickHash) {
            this.localization.setLang(LANGUAGES.EN);
            this.currentRoute = ROUTING.HOME;
            return true;
        } else if (hash === LANGUAGES.HU.quickHash) {
            this.localization.setLang(LANGUAGES.HU);
            this.currentRoute = ROUTING.HOME;
            return true;
        } else if (hash === LANGUAGES.RO.quickHash) {
            this.localization.setLang(LANGUAGES.RO);
            this.currentRoute = ROUTING.HOME;
            return true;
        }
         else {
            return false;
        }
    }
}