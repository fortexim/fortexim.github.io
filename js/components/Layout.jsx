import React from "react";
import Nav from "./navigation/Nav";
import Navicon from "./navigation/Navicon";
import Wrapper from "./Wrapper";
import Loader from "./Loader";
import style from './layout.scss';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);

	}

    render() {
        return (
				<div id={style.rootdiv}>
                    <Loader />
					<Nav startRoute= {this.props.startRoute}/>
					<Navicon/>
					<Wrapper startRoute= {this.props.startRoute} />
				</div>
			);
	}
}