import React from "react";
import {CATEGORIES} from '../../ProductList';
import styles from './menu.scss';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
    }

    onMenuClick(e){
        this.props.setCategory(e.target.getAttribute("data-category"));
        let lis = e.target.parentNode.parentNode.childNodes;
        lis.forEach(function(li) {
            li.setAttribute("class","")
        }, this);
        e.target.parentNode.setAttribute("class", styles.active);
        
        
    }

    renderMenus(){
        let menus = [];
        let index = 0;
        for (let cat in CATEGORIES) {
            menus.push(
            <li className={index===0 ? styles.active : ""} key={index++}>
                <a data-category={CATEGORIES[cat].id} onClick = {this.onMenuClick.bind(this)}>{CATEGORIES[cat].name}</a>
            </li>);
        }
        return menus;
    }

    render() {
        return (
            <div className={styles.menuHolder}>
                <div className={styles.mobileMenu}>
                    <div className={styles.productNavIcon}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a className={styles.activeCategory}>Minden Termék</a>
                </div>
                <div className={styles.menuContainer}>
                    <ul>
                        {this.renderMenus()}
                    </ul>
                </div>
            </div>
    )}
}