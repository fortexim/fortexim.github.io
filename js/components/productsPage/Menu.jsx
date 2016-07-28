import React from "react";
import {Localization} from '../../localization/Localization';
import styles from './menu.scss';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.loc = Localization.getInstance().getDict();
    }

    componentWillUpdate(){
        this.loc = Localization.getInstance().getDict();
    }

    onMenuClick(e){
        this.props.setCategory(e.target.getAttribute("data-category"));
        let lis = e.target.parentNode.parentNode.childNodes;
        for (let i = 0; i<lis.length; i++) {
             lis[i].setAttribute("class","");
        }
        e.target.parentNode.setAttribute("class", styles.active);
        
        
    }

    renderMenus(){
        let menus = [];
        let index = 0;
        for (let cat in this.loc.CATEGORIES) {
            menus.push(
            <li className={index===0 ? styles.active : ""} key={index++}>
                <a data-category={this.loc.CATEGORIES[cat].id} onClick = {this.onMenuClick.bind(this)}>{this.loc.CATEGORIES[cat].name}</a>
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