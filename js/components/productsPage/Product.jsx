import React from "react";
import ReactDOM from 'react-dom';
import {ROUTING} from '../../Settings';
import {TweenMax, TimelineLite} from 'gsap';
import {Localization} from '../../localization/Localization';
import styles from './product.scss';

export default class Products extends React.Component {
    constructor(props) {
		super(props);
        this.info = false;
        this.tl = new TimelineLite();
        this.loc = Localization.getInstance().getDict();
	}

    componentWillUpdate(){
        this.loc = Localization.getInstance().getDict();
    }

    componentDidMount(){
        this.imgNode = ReactDOM.findDOMNode(this.refs.img);
        this.infoNode = ReactDOM.findDOMNode(this.refs.info);
        this.moreNode = ReactDOM.findDOMNode(this.refs.more);
        this.productNode = ReactDOM.findDOMNode(this.refs.product);
        this.mountAnimation();
    }

    mountAnimation(){
        TweenMax.to(this.productNode, 0.5, {opacity:1});
    }


    animateMore() {
        this.tl.clear();
        if (this.info === false) {
            this.tl.to(this.imgNode, 0.5, {opacity:0})
            .set(this.imgNode, {display:"none"})
            .set(this.infoNode, {display:"block"})
            .to(this.infoNode,0.5, {opacity:1});
            this.info = true;
            this.moreNode.innerText = this.loc.PRODUCT.PICTURES;
        } else {
            this.tl.to(this.infoNode, 0.5, {opacity:0})
            .set(this.infoNode, {display:"none"})
            .set(this.imgNode, {display:"block"})
            .to(this.imgNode,0.5, {opacity:1});
            this.info = false;
            this.moreNode.innerText = this.loc.PRODUCT.MORE;
        }
    }

    render() {
        return (
            <div ref="product" className={styles.product}>
                <div className={styles.imgInfoHolder}>
                    <a href={"http://fortexim.hu/"+this.props.data.img} target="_blank"><img ref="img" src={this.props.data.img} alt="product"/></a>
                    <div ref="info" className={styles.info}>
                        <p>{this.props.data.info}</p>
                        <p>{this.props.data.logistics}</p>
                    </div>
                </div>
                <p className={styles.name} >{this.props.data.name} 
                    <span className={styles.weight}>{this.props.data.weight}</span>
                </p>
                <p ref="more" className={styles.more} onClick={this.props.goToFullProduct.bind(this, this.props.data)}>{this.loc.PRODUCT.MORE}</p>
            </div>
            
        )
    }
}