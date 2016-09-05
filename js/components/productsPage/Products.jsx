import React from "react";
import ReactDOM from 'react-dom';
import {ROUTING} from '../../Settings';
import {TweenMax, TimelineLite} from 'gsap';
import Product from './Product.jsx';
import Menu from './Menu.jsx';
import {Localization} from '../../localization/Localization';
import styles from './products.scss';

export default class Products extends React.Component {
    constructor(props) {
		super(props);
        this.tl = new TimelineLite();
        this.loc = Localization.getInstance().getDict();
        this.state = {
            activeCategory: this.loc.CATEGORIES.ALL.id
        }
	}

    componentWillUpdate(){
        this.loc = Localization.getInstance().getDict();
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

    filterProducts(product) {
        if (product.category.id ===this.state.activeCategory) {
            return true;
        } else if (this.state.activeCategory === this.loc.CATEGORIES.ALL.id) {
            return true;
        } else { return false}
    }

    setCategory(category){
        this.setState({activeCategory:category});
    }

    renderProduct(){
        // If you add a unique `key` attribute, then the component will remount.
        return this.loc.PRODUCTLIST
            .filter(this.filterProducts.bind(this))
            .map((product, i) => <Product key={i+Math.random()} data={product} />);
    }

    renderProductInfo(){
        return <p className={styles.fullProductInfo}>Fortexim private labeled brand</p>;
    }

    renderLogistics(){
        return <p className={styles.fullProductInfo}>28 pcs / box</p>;
    }

    render() {
        return (
            <div ref="products" className={styles.productWrapper}>
                <div className={styles.fullProduct}>
                    <div className={styles.fullProductWrapper}>
                        <div className={styles.closeIcon}>
                            <span></span>
                            <span></span>
                        </div>
                        <p className={styles.fullProductName}>Cocoa-Pretzel Cookie</p>
                        <p className={styles.fullProductWeight}>140 g</p>
                        {this.renderProductInfo()}
                        {this.renderLogistics()}
                        <img src="assets/images/products/amulet.png" alt=""/>
                    </div>
                </div>
                <Menu setCategory={this.setCategory.bind(this)}/>
                <div className={styles.productsContainer}>
                    <div className={styles.productsHolder}>
                        {this.renderProduct()}
                    </div>
                </div>
            </div>
        )
    }
}