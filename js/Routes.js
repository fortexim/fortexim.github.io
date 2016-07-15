import {Localization} from './localization/Localization';
import {ROUTING, LANGUAGES} from './Settings';
var PubSub = require('pubsub-js');
require("./libs/routie.js");

export class Routes {

    constructor() {
        this._currentRoute = null;
        this.setRoutes();
    }

    getLocalization() {
        this.localization = Localization.getInstance()
        this.loc = this.localization.getDict();
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
        this.getLocalization();
        let that = this;

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
            }
        })
    }
}