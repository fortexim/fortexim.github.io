import React from "react";
import ReactDOM from 'react-dom';
import {ROUTING} from '../../Settings';
import {TweenMax, TimelineLite} from 'gsap';
import {Localization} from '../../localization/Localization';
import styles from './about.scss';

export default class About extends React.Component {
    constructor(props) {
		super(props);
        this.tl = new TimelineLite();
        this.loc = Localization.getInstance().getDict();
	}

    componentWillUpdate(){
        this.loc = Localization.getInstance().getDict();
    }

    componentDidMount(){
        this.aboutNode = ReactDOM.findDOMNode(this.refs.about);
        this.createClass();
    }

    componentDidUpdate() {
        this.createClass();
    }
    
    createClass() {
        this.tl.clear();
        if (this.props.page===ROUTING.ABOUT.id) {
            this.tl.set(this.aboutNode, {display:"block"})
                .to(this.aboutNode,0.5, {opacity:1});
        } else {
            this.tl.to(this.aboutNode,0.5, {opacity:0})
              .set(this.aboutNode, {display:"none"});
        }
    }

    render() {
        return (
            <div ref="about" className={styles.about}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <p>{this.loc.ABOUT.P1}</p>
                        <p>{this.loc.ABOUT.P2}</p>
                        <p>{this.loc.ABOUT.P3}</p>
                        <p>{this.loc.ABOUT.P4}</p>
                        <p>{this.loc.ABOUT.P5}</p>
                        <p>{this.loc.ABOUT.P6}</p>
                    </div>
                </div>
            </div>
        )
    }
}