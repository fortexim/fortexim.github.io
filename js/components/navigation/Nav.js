import React from "react";
var PubSub = require('pubsub-js');
import {ROUTING, LANGUAGES} from '../../Settings';
import {Localization} from '../../localization/Localization';
import styles from './nav.scss';

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.getLocalization();
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
        this.setClassesToEmpty();
        switch (data.id) {
            case ROUTING.HOME.id:
                this.homeClass = styles.active;
                break;
            case ROUTING.ABOUT.id:
                this.aboutClass = styles.active;
                break;
            case ROUTING.PRODUCTS.id:
                this.productClass = styles.active;
                break;
            case ROUTING.CONTACT.id:
                this.contactClass = styles.active;
                break;
            default:
                break;
        }
        if (msg!==null) this.forceUpdate();
        
    }

    setClassesToEmpty(){
        this.homeClass = "";
        this.productClass = "";
        this.aboutClass = "";
        this.contactClass = "";
    }

    setLanguage(lang) {
        this.localization.setLang(lang);
        this.getLocalization();
        this.forceUpdate();
    }

    
    render() {             
        return (
            <nav className={(this.state.navicon? "" : styles.open) + " "+ styles.navigation}>
                <ul>
                    <li><a className={this.homeClass} href="/#">{this.loc.ROUTES.HOME.value}</a></li>
                    <li><a className={this.productClass} href="#products">{this.loc.ROUTES.PRODUCTS.value}</a></li>
                    <li><a className={this.aboutClass} href="#about">{this.loc.ROUTES.ABOUT.value}</a></li>
                    <li><a className={this.contactClass} href="#contact">{this.loc.ROUTES.CONTACT.value}</a></li>
                </ul>
                <ul>
                    <li className={styles.active} onClick={this.setLanguage.bind(this, LANGUAGES.HU)}>HU</li>
                    <li onClick={this.setLanguage.bind(this, LANGUAGES.EN)}>EN</li>
                    <li onClick={this.setLanguage.bind(this, LANGUAGES.RO)}>RO</li>
                </ul>
            </nav>
        );
    }
}