var PubSub = require('pubsub-js');
import React from "react";
import ReactDOM from 'react-dom';
// import TweenMax from 'gsap';
import {Routes, ROUTING} from '../Routes';
import styles from './innerright.scss';

export default class Innerright extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
            pageStyle: null
        };
		
	}
	componentWillMount() {
        var token = PubSub.subscribe( 'HASH', this.hashChanged.bind(this) );
    }

    componentWillUnmount() {
        PubSub.unsubscribe(token);
    }

    hashChanged(msg, data) {
        this.setPageState(data);
    }

     handlePageState(state){
        this.setState({pageStyle:state});
    }

    setPageState(route){      
        switch (route.id) {
            case ROUTING.HOME.id:
                this.handlePageState(styles.innerrightHomePageState);
                break;
            case ROUTING.ABOUT.id:
                this.handlePageState(styles.innerrightAboutPageState);
                break;
            case ROUTING.PRODUCTS.id:
                this.handlePageState(styles.innerrightProductPageState);
                break;
            case ROUTING.CONTACT.id:
                this.handlePageState(styles.innerrightContactPageState);
                break;
        
            default:
                break;
        }
    }

    render() {
		return (
            <div className={this.state.pageStyle+" "+styles.innerright}>
				<div className={styles.shadow}></div>
			</div>
		);
	}
}