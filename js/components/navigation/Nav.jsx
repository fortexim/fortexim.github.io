import React from "react";
var PubSub = require('pubsub-js');
require("../../libs/routie.js");
import {ROUTING, LANGUAGES} from '../../Settings';
import {Localization} from '../../localization/Localization';
import styles from './nav.scss';

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.getLocalization();
        this.setLangClasses();
        this.activePage = null;
        this.state = { navicon: true }
    }

    getLocalization() {
        this.localization = Localization.getInstance();
        this.loc = this.localization.getDict();
    }
    
    componentWillMount() {
        var token = PubSub.subscribe( 'HASH', this.hashChanged.bind(this) );
        var token2 = PubSub.subscribe( 'NAVICON', this.naviconClicked.bind(this) );
        this.hashChanged(null, this.props.startRoute);
    }

    componentWillUnmount() {
        PubSub.unsubscribe(token);
        PubSub.unsubscribe(token2);
    }
    naviconClicked(msg, data){
        this.setState({navicon: data});
    }
    hashChanged(msg, data) {
        this.homeClass = "";
        this.productClass = "";
        this.aboutClass = "";
        this.contactClass = "";;
        switch (data.id) {
            case ROUTING.HOME.id:
                this.activePage = this.loc.ROUTES.HOME.id;
                this.homeClass = styles.active;
                break;
            case ROUTING.ABOUT.id:
                this.activePage = this.loc.ROUTES.ABOUT.id;
                this.aboutClass = styles.active;
                break;
            case ROUTING.PRODUCTS.id:
                this.activePage = this.loc.ROUTES.PRODUCTS.id;
                this.productClass = styles.active;
                break;
            case ROUTING.CONTACT.id:
                this.activePage = this.loc.ROUTES.CONTACT.id;
                this.contactClass = styles.active;
                break;
            default:
                break;
        }
        if (msg!==null) this.forceUpdate();
        
    }

    setLangClasses(){
        this.huClass = "";
        this.enClass = "";
        this.roClass = "";
        switch (this.localization.lang) {
            case LANGUAGES.EN:
                this.enClass = styles.active;
                break;
            case LANGUAGES.HU:
                this.huClass = styles.active;
                break;
            case LANGUAGES.RO:
                this.roClass = styles.active;
                break;
            default:
                console.warn("This language is not exist.")
                break;
        }
    }

    setLanguage(lang) {
        this.localization.setLang(lang, true);
        this.getLocalization();
        this.setLangClasses();
        for (let hash in this.loc.ROUTES){
            if (this.loc.ROUTES.hasOwnProperty(hash)){
                if (this.loc.ROUTES[hash].id === this.activePage) {
                    routie(this.loc.ROUTES[hash].hash);
                }
                
            }
        }
    }

    
    render() {             
        return (
            <nav className={(this.state.navicon? "" : styles.open) + " "+ styles.navigation}>
                <ul>
                    <li><a className={this.homeClass} href="/#">{this.loc.ROUTES.HOME.value}</a></li>
                    <li><a className={this.productClass} href={"#"+this.loc.ROUTES.PRODUCTS.hash}>{this.loc.ROUTES.PRODUCTS.value}</a></li>
                    <li><a className={this.aboutClass} href={"#"+this.loc.ROUTES.ABOUT.hash}>{this.loc.ROUTES.ABOUT.value}</a></li>
                    <li><a className={this.contactClass} href={"#"+this.loc.ROUTES.CONTACT.hash}>{this.loc.ROUTES.CONTACT.value}</a></li>
                </ul>
                <ul >
                    <li className={this.huClass} onClick={this.setLanguage.bind(this, LANGUAGES.HU)}>HU</li>
                    <li className={this.enClass} onClick={this.setLanguage.bind(this, LANGUAGES.EN)}>EN</li>
                    <li className={this.roClass} onClick={this.setLanguage.bind(this, LANGUAGES.RO)}>RO</li>
                </ul>
            </nav>
        );
    }
}