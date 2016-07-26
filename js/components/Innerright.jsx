var PubSub = require('pubsub-js');
import React from "react";
import ReactDOM from 'react-dom';
import {TweenMax, TimelineLite} from 'gsap';
import {ROUTING} from '../Settings';
import styles from './innerright.scss';
import Contact from './contactPage/Contact.jsx';
import About from './aboutPage/About.jsx';
import Products from './productsPage/Products.jsx'
import ShowCase from './mainPage/ShowCase.jsx'

export default class Innerright extends React.Component {
	constructor(props) {
		super(props);
        this.tl = new TimelineLite();
        this.state = {
            pageStyle: null,
            page: this.props.startRoute.id
        };
        this.setPageStyle(true, this.props.startRoute);
	}
	componentWillMount() {
        var token = PubSub.subscribe( 'HASH', this.hashChanged.bind(this) );
    }

    componentWillUnmount() {
        PubSub.unsubscribe(token);
    }

    componentWillUpdate(){
        this.animateShowCase();
    }
    componentDidMount(){
        this.showCaseNode = ReactDOM.findDOMNode(this.refs.showCase);
        this.animateShowCase();
    }
    hashChanged(msg, data) {
        this.setPageStyle(false, data);
    }

    handlePageState(style, route){
        this.setState({pageStyle:style, page:route});
    }

    animateShowCase(){
        if (this.state.pageStyle === styles.HomePageState) {
            this.tl.clear();
            this.tl.set(this.showCaseNode, {display:"block", delay:0.5})
                .to(this.showCaseNode, 0.5, {opacity: 1});
        } else {
            this.tl.clear();
            this.tl.set(this.showCaseNode, {display:"none"})
                .to(this.showCaseNode, 0, {opacity: 0});
        }
        
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
        
		return (
            <div className={this.state.pageStyle+" "+styles.innerright}>
				<div className={styles.shadow}></div>
                    <ShowCase ref="showCase" setBgColor={this.setBgColor}/>
                <Contact page={this.state.page}/>
                <About page={this.state.page}/>
                <Products page={this.state.page}/>
			</div>
		);
	}
}