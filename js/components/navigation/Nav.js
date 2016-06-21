import React from "react";
var PubSub = require('pubsub-js');
import {Routes, ROUTING} from '../../Routes';
import styles from './nav.scss';

export default class Nav extends React.Component {
    constructor(){
        super();
        this.MENU = {
            HOME: "Kezdőlap",
            PRODUCTS: "Termékek",
            ABOUT: "Rólunk",
            CONTACT: "Kapcsolat"
        }
        this.setClassesToEmpty();
    }
    
    componentWillMount() {
        var token = PubSub.subscribe( 'HASH', this.hashChanged.bind(this) );
    }

    componentWillUnmount() {
        PubSub.unsubscribe(token);
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
        this.forceUpdate();
        
    }

    setClassesToEmpty(){
        this.homeClass = "";
        this.productClass = "";
        this.aboutClass = "";
        this.contactClass = "";
    }

    
    render() {
        return (
            <nav>
                <ul>
                    <li><a className={this.homeClass} href="/#">{this.MENU.HOME}</a></li>
                    <li><a className={this.productClass} href="#products">{this.MENU.PRODUCTS}</a></li>
                    <li><a className={this.aboutClass} href="#about">{this.MENU.ABOUT}</a></li>
                    <li><a className={this.contactClass} href="#contact">{this.MENU.CONTACT}</a></li>
                </ul>
                <ul>
                    <li className={styles.active}>HU</li>
                    <li>EN</li>
                    <li>RO</li>
                </ul>
            </nav>
        );
    }
}