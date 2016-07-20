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
        this.state = {
            activeCategory: CATEGORIES.ALL.id
        }
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

    filterProducts(product) {
        if (product.category.id ===this.state.activeCategory) {
            return true;
        } else if (this.state.activeCategory === CATEGORIES.ALL.id) {
            return true;
        } else { return false}
    }

    setCategory(category){
        this.setState({activeCategory:category});
    }

    renderProduct(){
        // If you add a unique `key` attribute, then the component will remount.
        return ProductList
            .filter(this.filterProducts.bind(this))
            .map((product, i) => <Product key={i+Math.random()} data={product} />);
    }

    render() {
        return (
            <div ref="products" className={styles.productWrapper}>
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