import React from "react";
import ReactDOM from 'react-dom';
import {ROUTING} from '../../Routes';
import {TweenMax, TimelineLite} from 'gsap';
import styles from './product.scss';

export default class Products extends React.Component {
    constructor(props) {
		super(props);
        this.tl = new TimelineLite();
	}

    componentDidMount(){
        this.productNode = ReactDOM.findDOMNode(this.refs.product);
        this.createClass();
    }
    componentDidUpdate() {
        this.createClass();
    }

    createClass() {
        // this.tl.clear();
        // if (this.props.page===ROUTING.PRODUCTS.id) {
        //     this.tl.set(this.productsNode, {display:"block"})
        //         .to(this.productsNode,0.5, {opacity:1});
        // } else {
        //     this.tl.to(this.productsNode,0.5, {opacity:0})
        //       .set(this.productsNode, {display:"none"});
        // }
    }

    render() {
        return (
            <div ref="product" className={styles.product}>
                
            </div>
        )
    }
}