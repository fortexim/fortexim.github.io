import React from "react";
import ReactDOM from 'react-dom';
import {ROUTING} from '../../Settings';
import {Localization} from '../../localization/Localization';
import CompanyMap from './googlemaps/CompanyMap.jsx';
import styles from './contact.scss';

export default class Contact extends React.Component {
    constructor(props) {
		super(props);
        this.loc = Localization.getInstance().getDict();
        this.tl = new TimelineLite();
        this.state = {
            markers: [{
            position: {
                lat: 47.803116,
                lng: 21.680198399999995,
            },
            key: 'Hungary',
            defaultAnimation: 2,
            }],
        }
	}

    componentWillUpdate(){
        this.loc = Localization.getInstance().getDict();
    }

    componentDidMount(){
        this.contactNode = ReactDOM.findDOMNode(this.refs.contact);
        this.createClass();
    }
    componentDidUpdate() {
        this.createClass();
    }

    createClass() {
        this.tl.clear();
        if (this.props.page===ROUTING.CONTACT.id) {
            this.tl.set(this.contactNode, {display:"block"})
                .to(this.contactNode,0.5, {opacity:1});
        } else {
            this.tl.to(this.contactNode,0.5, {opacity:0})
                .set(this.contactNode, {display:"none"});
        }
    }

    render() {
        return (
            <div ref="contact" className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <p>{this.loc.CONTACT.P1}</p>
                        <p>{this.loc.CONTACT.P2}</p>
                        <p>{this.loc.CONTACT.P3}</p>
                        <p>{this.loc.CONTACT.P4}</p>
                        <p>{this.loc.CONTACT.P5}</p>
                        <p>{this.loc.CONTACT.P6}</p>
                    </div>
                    <CompanyMap markers={this.state.markers} />
                </div>
            </div>
        )
    }
}