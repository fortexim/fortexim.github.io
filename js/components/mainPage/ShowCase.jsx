import React from "react";
import ReactDOM from 'react-dom';
import {Localization} from '../../localization/Localization';
import styles from './showCase.scss';

export default class ShowCase extends React.Component {

    constructor(props) {
        super(props);
        this.loc = Localization.getInstance().getDict();

        //initial active product
        this.activeProduct = this.loc.SHOWCASEPRODUCTS[0];

        this.state = {
            activeProduct: this.activeProduct
        }
        this.rotateProducts();
    }

    componentWillUpdate(){
        this.loc = Localization.getInstance().getDict();
    }

    componentWillReceiveProps() {
        this.activeProduct = this.loc.SHOWCASEPRODUCTS[0];
        this.setState({activeProduct: this.activeProduct});
    }

    rotateProducts(){
        let that = this;
        let a = 0;
        let len = this.loc.SHOWCASEPRODUCTS.length;
        
        this.rotator = window.setInterval(function(){
            that.setActive(that.loc.SHOWCASEPRODUCTS[a%len]);
            a++;
        }, 5000);
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
        return this.loc.SHOWCASEPRODUCTS
            .map((product, i) =>
            <div key= {i} className={this.state.activeProduct===product? activeStyle : inActiveStyle }>
                    <img src={this.state.activeProduct.featuredImg} alt=""/>
                    <div className={styles.title}>{this.state.activeProduct.name}</div>
            </div>);
    }

    renderButtons() {
        let inActiveStyle = styles.activeButton + " "+styles.inactiveButton;
        let activeStyle = styles.activeButton;

        return this.loc.SHOWCASEPRODUCTS
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