var PubSub = require('pubsub-js');
require("./libs/routie.js")

export const ROUTING = {
    HOME:{id:"HOME", hash:""},
    PRODUCTS:{id:"PRODUCTS", hash:"products"},
    ABOUT:{id:"ABOUT", hash:"about"},
    CONTACT:{id:"CONTACT", hash:"contact"}
};
export class Routes {

    constructor() {
        this._currentRoute = null;
        this.setRoutes();
    }

    get currentRoute () {
        return this._currentRoute;
    }

    set currentRoute (currentRoute) {
        this._currentRoute = currentRoute; 
    }

    hashChanged(isStartPage) {
        PubSub.publish('HASH', this.currentRoute);
    }


    setRoutes(){
        let that = this;

        routie(ROUTING.HOME.hash, function() {
            that.currentRoute = ROUTING.HOME;
            that.hashChanged();
            
        });
        routie(ROUTING.PRODUCTS.hash, function() {
            that.currentRoute = ROUTING.PRODUCTS;
            that.hashChanged();
        });
        routie(ROUTING.ABOUT.hash, function() {
            that.currentRoute = ROUTING.ABOUT;
            that.hashChanged();
        });
        routie(ROUTING.CONTACT.hash, function() {
            that.currentRoute = ROUTING.CONTACT;
            that.hashChanged();
        });
    }
}