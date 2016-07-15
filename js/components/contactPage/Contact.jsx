import React from "react";
import ReactDOM from 'react-dom';
import {ROUTING} from '../../Settings';
import CompanyMap from './googlemaps/CompanyMap.jsx';
import styles from './contact.scss';

export default class Contact extends React.Component {
    constructor(props) {
		super(props);
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

    componentDidMount(){
        this.contactNode = ReactDOM.findDOMNode(this.refs.contact);
        this.createClass();
    }
    componentDidUpdate() {
        this.createClass();
    }

    createClass() {
        if (this.props.page===ROUTING.CONTACT.id) {
            this.tl.set(this.contactNode, {display:"block"})
                .to(this.contactNode,0.5, {opacity:1});
            // this.activeClass = styles.active;
        } else {
            this.tl.to(this.contactNode,0.5, {opacity:0})
                .set(this.contactNode, {display:"none"});
            // this.activeClass = "";
        }
    }

    render() {
        // this.createClass();
        
        return (
            <div ref="contact" className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <p>Fortexim Kereskedelmi és Szolgáltató Kft.</p>
                        <p>6000 Kecskemét, Forrás u. 2/A</p>
                        <p>Közösségi adószám: HU24066138</p>
                        <p>Telephely: 4244 Újfehértó, Egészségház u. 11.</p>
                        <p>Tel.: +3630-2296-492</p>
                        <p>Email: info [kukac] fortexim.hu</p>
                    </div>
                    <CompanyMap markers={this.state.markers} />
                </div>
            </div>
        )
    }
}