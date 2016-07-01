import React from "react";
import ReactDOM from 'react-dom';
import {ROUTING} from '../../Routes';
import {TweenMax, TimelineLite} from 'gsap';
import styles from './product.scss';

export default class Products extends React.Component {
    constructor(props) {
		super(props);
        this.info = false;
        this.tl = new TimelineLite();
	}

    componentDidMount(){
        this.imgNode = ReactDOM.findDOMNode(this.refs.img);
        this.infoNode = ReactDOM.findDOMNode(this.refs.info);
        this.moreNode = ReactDOM.findDOMNode(this.refs.more);
    }

    createClass() {
        this.tl.clear();
        if (this.info === false) {
            this.tl.to(this.imgNode, 0.5, {opacity:0})
            .set(this.imgNode, {display:"none"})
            .set(this.infoNode, {display:"block"})
            .to(this.infoNode,0.5, {opacity:1});
            this.info = true;
            this.moreNode.innerText = "Képek";
        } else {
            this.tl.to(this.infoNode, 0.5, {opacity:0})
            .set(this.infoNode, {display:"none"})
            .set(this.imgNode, {display:"block"})
            .to(this.imgNode,0.5, {opacity:1});
            this.info = false;
            this.moreNode.innerText = "További Információk";
        }
    }

    render() {
        return (
            <div className={styles.product}>
            <div className={styles.imgInfoHolder}>
                <img ref="img" src="assets/images/products/product.png" alt="product"/>
                <div ref="info" className={styles.info}>
                    <p>This is information about the product.</p>
                    <p>Ingredients: sugar, fat, arsenic-acid</p>
                    <p>Logistics: 100 box / pallet</p>
                </div>
            </div>
                <p className={styles.name} >Chio Chips 40 g</p>
                <p ref="more" className={styles.more} onClick={this.createClass.bind(this)}>További információk</p>
            </div>
        )
    }
}