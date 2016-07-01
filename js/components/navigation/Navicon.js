import React from "react";
import styles from './nav.scss';

export default class Navicon extends React.Component {
    render() {
        return (
            <div id="nav-icon" className="open">
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}