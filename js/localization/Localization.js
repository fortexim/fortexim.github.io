import {LANGUAGES} from '../Settings';
import En from './EN';
import Hu from './HU';

let instance = null;

export class Localization {

    constructor() {
        this._lang = null;
        this.dict = null;
        this.langObjectList = [];
        this.routes = null;
        
        // Setting new languages
        this.langObjectList.push(new Hu());
        this.langObjectList.push(new En());

        this.initLanguage();
        this.setLangObject();
        
        if(!instance){
                instance = this;
        }
        return instance; 
    }

    static getInstance() {
        return instance;
    }

    initLanguage(){
        let currentHash = window.location.hash.substring(1);
        let routes = this.getObjectFromLocals("ROUTES");
        
        for (let route in routes) {
            for (let o in routes[route]) {
                if (routes[route].hasOwnProperty(o)) {
                    if (currentHash === routes[route][o].hash) {
                        this._lang = routes[route].lang;
                    }
                    
                }
            }
            
        }
    }

    get lang() {
        return this._lang;
    }

    setLang(lang) {
        this._lang = lang;
        this.setLangObject();
        this.routes.setRoutes();
    }

    setLangObject() {
        for (let lan in LANGUAGES) {
            if (LANGUAGES.hasOwnProperty(lan)) {
                if (this.lang.id===LANGUAGES[lan].id) {
                    for (let langObj in this.langObjectList) {
                        if (this.langObjectList.hasOwnProperty(langObj)) {
                            if (this.lang.id === this.langObjectList[langObj].lang.id) {
                                this.dict = this.langObjectList[langObj];
                            }
                        }
                    }
                }
                
            }
        }
    }  

    getObjectFromLocals(object){
        let results = [];
        for (let langObj in this.langObjectList) {
            if (this.langObjectList.hasOwnProperty(langObj)) {
                for (let objs in this.langObjectList[langObj]) {
                    if (this.langObjectList[langObj].hasOwnProperty(objs)) {
                        if(object === objs) {
                            results.push(this.langObjectList[langObj][objs]);
                        }
                    }
                }
            }
        }
        return results;
    }

    getDict() {
        return this.dict;
    }

    setRoutingLocalization(routes) {
        this.routes = routes;
    }
}