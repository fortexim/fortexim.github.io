import React from "react";
var PubSub = require('pubsub-js');
import styles from './navicon.scss';

export default class Navicon extends React.Component {

    constructor(props) {
        super(props);
        this.state = { navicon: false};
    }

    onNaviconClicked(){
        if (this.state.navicon === false) {
            this.setState({navicon: true});
        } else {this.setState({navicon: false});}
        PubSub.publish('NAVICON', this.state.navicon);
    }

    render() {
        return (
            <div className={(this.state.navicon? styles.open : "") +" "+styles.navIcon} onClick={this.onNaviconClicked.bind(this)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}