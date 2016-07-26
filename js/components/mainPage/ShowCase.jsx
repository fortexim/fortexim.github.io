import React from "react";
import ReactDOM from 'react-dom';
import {Localization} from '../../localization/Localization';
import {ProductList} from '../../ProductList';
// import {TweenMax} from 'gsap';
import styles from './showCase.scss';

export default class ShowCase extends React.Component {

    constructor(props) {
        super(props);
        this.showCaseProducts = ProductList
        .filter(this.filterButtons.bind(this));

        //initial active product
        this.activeProduct = this.showCaseProducts[0];

        this.state = {
            activeProduct: this.activeProduct
        }
        this.rotateProducts();
    }

    rotateProducts(){
        let that = this;
        let a = 0;
        this.rotator = window.setInterval(function(){
            that.setActive(that.showCaseProducts[a%4]);
            a++;
        }, 5000);
    }

    componentDidMount(){
        this.productNode = ReactDOM.findDOMNode(this.refs.showProduct);
        this.setActive(this.activeProduct);
    }


    filterButtons(product){
        if (product.featuredImg !=="") {
            return true;
        }
    }

    onClickButton(product){
        window.clearInterval(this.rotator);
        this.setActive(product);
    }

    setActive(product){
        this.setState({activeProduct:product});
    }

    renderProduct(){
        let activeStyle = styles.activeProduct + " "+styles.products;
        let inActiveStyle = styles.products;
        return this.showCaseProducts
            .map((product, i) =>
            <div key= {i} ref="showProduct" className={this.state.activeProduct===product? activeStyle : inActiveStyle }>
                    <img src={this.state.activeProduct.featuredImg} alt=""/>
                    <div className={styles.title}>{this.state.activeProduct.name}</div>
            </div>);
        
    }

    renderButtons() {
        let inActiveStyle = styles.activeButton + " "+styles.inactiveButton;
        let activeStyle = styles.activeButton;

        return this.showCaseProducts
            .map((product, i) => 
                    <div key= {i} className={styles.button} onClick={this.onClickButton.bind(this, product)}>
                        <div className={this.state.activeProduct===product? activeStyle : inActiveStyle}></div>
                    </div>);
    }

    render() {
        return(
            <div className={styles.holder}>
                <div style={{backgroundColor:this.state.activeProduct.featuredColor}} className={styles.colorized}></div>
                <div className={styles.showCase}>
                    {this.renderProduct()}
                    <div className={styles.buttons}>
                        {this.renderButtons()}
                    </div>
                </div>
            </div>
        )
    }
}