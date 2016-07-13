import React from "react";
import styles from './menu.scss';

export default class Products extends React.Component {


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
                        <li className={styles.active} >
                            <a href="">Minden Termék</a>
                        </li>
                        <li>
                            <a href="">Sütemények</a>
                        </li>
                        <li>
                            <a href="">Cereáliák</a>
                        </li>
                        <li>
                            <a href="">Snackek</a>
                        </li>
                        <li>
                            <a href="">Italok</a>
                        </li>
                        <li>
                            <a href="">Egyéb Termékek</a>
                        </li>
                    </ul>
                </div>
            </div>
    )}
}