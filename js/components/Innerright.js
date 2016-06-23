var PubSub = require('pubsub-js');
import React from "react";
import ReactDOM from 'react-dom';
// import TweenMax from 'gsap';
import {ROUTING} from '../Routes';
import styles from './innerright.scss';
import Contact from './Contact.jsx';

export default class Innerright extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
            pageStyle: null,
            page: this.props.startRoute.id
        };
        this.setPageStyle(true, this.props.startRoute);
        this.contactContent = null;
	}
	componentWillMount() {
        var token = PubSub.subscribe( 'HASH', this.hashChanged.bind(this) );
    }

    componentWillUnmount() {
        PubSub.unsubscribe(token);
    }

    hashChanged(msg, data) {
        this.setPageStyle(false, data);
    }

    handlePageState(style, route){
        this.setState({pageStyle:style, page:route});
    }

    renderContact() {
        return (<Contact page={this.state.page}/>);
    }

    setPageStyle(isStarter, route){      
        switch (route.id) {
            case ROUTING.HOME.id:
                this.state.pageStyle = styles.HomePageState;
                break;
            case ROUTING.ABOUT.id:
                this.state.pageStyle = styles.AboutPageState;
                break;
            case ROUTING.PRODUCTS.id:
                this.state.pageStyle = styles.ProductPageState;
                break;
            case ROUTING.CONTACT.id:
                this.state.pageStyle = styles.ContactPageState;
                break;
            default:
                break;
        }
        if (isStarter===false) this.handlePageState(this.state.pageStyle, route.id);
    }

    render() {
        // console.log(this.state.page);
        if (this.state.pageStyle === styles.ContactPageState) {
            this.contactContent = this.renderContact();
        } else {
            this.contactContent = null;
        }
        
		return (
            <div className={this.state.pageStyle+" "+styles.innerright}>
				<div className={styles.shadow}></div>
                {this.contactContent}
			</div>
		);
	}
}