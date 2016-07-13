import {LANGUAGES} from '../Settings';
import En from './EN';
import Hu from './HU';

let instance = null;

export class Localization {

    constructor(lang) {
        this._lang = lang;
        this.dict = null;
        this.HuLang = new Hu();
        this.EnLang = new En();
        this.setLangObject();
        
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

    setLang(lang) {
        this._lang = lang;
        this.setLangObject();
    }

    setLangObject() {
        
        if (this.lang.id === LANGUAGES.HU.id) {
            this.dict = this.HuLang;
        } else if (this.lang.id === LANGUAGES.EN.id) {
            this.dict = this.EnLang;
        } else {
            this.dict = this.HuLang;
        }
        console.log(this.dict);
        
    }

    getDict() {
        return this.dict;
    }
}