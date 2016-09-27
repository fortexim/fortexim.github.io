import React from "react";
import Nav from "./navigation/Nav";
import Navicon from "./navigation/Navicon";
import Wrapper from "./Wrapper";
import Loader from "./Loader";
import style from './layout.scss';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.assets = {
            images: [
				"assets/images/products/s_suti.png",
				"assets/images/products/freymas.png",
				"assets/images/products/amulet.png",
                "/assets/images/ship.jpg",
                "/assets/images/warehouse_cropped.jpg",
                "/assets/images/market.jpg",
				"assets/images/bg.jpg"
            ]
        }
		this.state = {
			loader: true
		}
		
		this.ajaxRequestMulti(this.assets.images, this.success, this.failed);
	}

	success(data){
		console.log("success");
		this.setState({loader:false});
    }

    failed(url){
        console.log(url+" "+"failed");
        
    }

	ajaxRequest(url, callback, failCallback) {
        let xmlhttp;
		let cb = callback.bind(this);
		let fcb = failCallback.bind(this);
        if (window.XMLHttpRequest)
            xmlhttp = new XMLHttpRequest();
        else
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    cb(xmlhttp.responseText, url);
				}
                else
                    failCallback(url);
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

    ajaxRequestMulti(urls, callbackMulti, failCallbackMulti) {
        let isAllCallsCompleted = false;
        let isCallFailed = false;
        let data = {};
		let cbMulti = callbackMulti.bind(this);

        for (let i = 0; i < urls.length; i++) {
            var callback = function (responseText, url) {
                if (isCallFailed) return;

                data[url] = responseText;

                // get size of data
                let size = 0;
                for (let index in data) {
                    if (data.hasOwnProperty(index))
                        size++;
                }

                if (size == urls.length)
                // all AJAX requests are completed successfully
                    cbMulti(data);
            }.bind(this);

            let failCallback = function (url) {
                isCallFailed = true;
                failCallbackMulti(url);
            };

            this.ajaxRequest(urls[i], callback, failCallback);
        }
    }


	renderLoader(loader) {
		if (loader === false) {
			return (
				<div id={style.rootdiv}>
					<Nav startRoute= {this.props.startRoute}/>
					<Navicon/>
					<Wrapper startRoute= {this.props.startRoute} />
				</div>
			);
		} else {
			return <Loader />;
		}
	}

    render() {
		return this.renderLoader(this.state.loader);
	}
}