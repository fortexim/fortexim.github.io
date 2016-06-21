import React from "react";
import Innerleft from "./Innerleft";
import Innerright from "./Innerright";
import styles from './wrapper.scss';

export default class Wrapper extends React.Component {
	constructor(props) {
		super(props);
		
	}
    render() {
		return (
			<div className={styles.wrapper}>
				<Innerleft />
				<Innerright />
			</div>	
		);
	}
}