import React from "react";
import ReactDOM from 'react-dom';
import {ROUTING} from '../../Routes';
import {TweenMax, TimelineLite} from 'gsap';
import Product from './Product.jsx';
import styles from './products.scss';

export default class Products extends React.Component {
    constructor(props) {
		super(props);
        this.tl = new TimelineLite();
	}

    componentDidMount(){
        this.productsNode = ReactDOM.findDOMNode(this.refs.products);
        this.createClass();
    }
    componentDidUpdate() {
        this.createClass();
    }

    createClass() {
        this.tl.clear();
        if (this.props.page===ROUTING.PRODUCTS.id) {
            this.tl.set(this.productsNode, {display:"block"})
                .to(this.productsNode,0.5, {opacity:1});
        } else {
            this.tl.to(this.productsNode,0.5, {opacity:0})
              .set(this.productsNode, {display:"none"});
        }
    }

    render() {
        return (
            <div ref="products" className={styles.productWrapper}>
                <div className={styles.mobileMenu}></div>
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
                            <a href="">Italok</a>
                        </li>
                        <li>
                            <a href="">Italok</a>
                        </li>
                        <li>
                            <a href="">Italok</a>
                        </li>
                        <li>
                            <a href="">Italok</a>
                        </li>
                        
                    </ul>
                </div>
                <div className={styles.productsContainer}>
                    <div className={styles.productsHolder}>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
        )
    }
}