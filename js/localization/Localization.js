import {LANGUAGES} from '../Settings';
var PubSub = require('pubsub-js');
import En from './EN';
import Hu from './HU';
import Ro from './RO';

let instance = null;

export class Localization {

    constructor() {
        this._lang = null;
        this.dict = null;
        this.langObjectList = [];
        this.routes = null;
        
        // Setting new languages - last is the default
        this.langObjectList.push(new En());
        this.langObjectList.push(new Ro());
        this.langObjectList.push(new Hu());
        
        if(!instance){
                instance = this;
        }
        return instance; 
    }

    static getInstance() {
        return instance;
    }

    get lang() {
        return this._lang;
    }

    setLang(lang, langChanged) {
        this._lang = lang;
        this.setLangObject();
        if (langChanged) this.routes.setRoutes();
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

    setRoutesObject(routes){
        this.routes = routes;
    }
}