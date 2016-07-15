import React from "react";
import ReactDOM from 'react-dom';
import {ROUTING} from '../../Settings';
import {TweenMax, TimelineLite} from 'gsap';
import Product from './Product.jsx';
import Menu from './Menu.jsx';
import {ProductList, CATEGORIES} from '../../ProductList';
import styles from './products.scss';

export default class Products extends React.Component {
    constructor(props) {
		super(props);
        this.tl = new TimelineLite();
        // console.log(CATEGORIES);
        
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
                <Menu />
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