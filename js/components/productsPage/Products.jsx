import React from "react";
import ReactDOM from 'react-dom';
import {ROUTING} from '../../Settings';
import {TweenMax, TimelineLite} from 'gsap';
import Product from './Product.jsx';
import Menu from './Menu.jsx';
import {Localization} from '../../localization/Localization';
import AjaxUtility from '../../libs/ajax';
import styles from './products.scss';

export default class Products extends React.Component {
    constructor(props) {
		super(props);
        this.tl = new TimelineLite();
        this.loc = Localization.getInstance().getDict();
        this.state = {
            activeCategory: this.loc.CATEGORIES.ALL.id,
            fullProduct: false,
            productData: null
        }
        this.state.partialsData = null;
        this.xhrSuccess = false;
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

    goToFullProduct(data){
        this.setState({fullProduct: true, productData: data});
    }

    closeFullProduct(){
        this.setState({fullProduct: false});
    }

    renderProductList(){
        if (this.state.fullProduct === true) {return null};
        // If you add a unique `key` attribute, then the component will remount.
        return this.loc.PRODUCTLIST
            .filter(this.filterProducts.bind(this))
            .map((product, i) => <Product key={i+Math.random()} data={product} goToFullProduct = {this.goToFullProduct.bind(this)}/>);
    }

    renderLogistics(){
        return this.state.productData.logistics.map((item,i ) => <p key={i}>{item}</p>);
    }

    renderRows() {
        if (this.state.productData.row1) {
            let url = "assets/partials/"+this.state.productData.row1;
            let util = new AjaxUtility(this);
            let success =  (data) => {
                this.xhrSuccess = true;
                this.setState({partialsData: data});
            }
            let fail = function() {
                console.log('failed loading partial');
            }
            if (this.xhrSuccess===false) {
                util.ajaxRequest(url, success, fail);
            }
            
            return <div className={styles.row1} dangerouslySetInnerHTML={{__html:this.state.partialsData}} />;
        } else {return null};
    }

    renderFullProduct(){
        if (this.state.fullProduct){
            return (
                <div className={(this.state.fullProduct ? styles.fullProductDisplay+" " : "")+styles.fullProduct}>
                    <div className={styles.fullProductWrapper}>
                        <div className={styles.closeIcon} onClick={this.closeFullProduct.bind(this)}>
                            <span></span>
                            <span></span>
                        </div>
                        <p className={styles.fullProductName}>{this.state.productData.name}</p>
                        <div className={styles.product}>
                            <div className={styles.content}>
                                <p className={styles.fullProductWeight}><span>{this.loc.PRODUCT.WEIGHT+" "}</span>{this.state.productData.weight}</p>
                                <p className={styles.fullProductInfo}>{this.state.productData.info}</p>
                                <div className={styles.logistics}><div>{this.loc.PRODUCT.LOGISTICS}</div>
                                    {this.renderLogistics()}
                                </div>
                                
                            </div>
                            <a href={"http://fortexim.hu/"+this.state.productData.img} target="_blank"><img src={this.state.productData.img} alt=""/></a>
                        </div>
                        {this.renderRows()}
                    </div>
                </div>
            )
        } else { return null}
    }

    render() {
        return (
            <div ref="products" className={styles.productWrapper}>
                {this.renderFullProduct()}
                <Menu setCategory={this.setCategory.bind(this)}/>
                <div className={styles.productsContainer}>
                    <div className={styles.productsHolder}>
                        {this.renderProductList()}
                    </div>
                </div>
            </div>
        )
    }
}