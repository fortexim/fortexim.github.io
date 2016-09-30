import React from "react";
import {LOADINGTIME} from '../Settings';
import style from './loader.scss';

export default class Loader extends React.Component {
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
		};

        this.ajaxFinished = false;
        this.ajaxLongLoading = false;
		this.ajaxRequestMulti(this.assets.images, this.success, this.failed);
	}
        componentDidMount() {
            window.setTimeout(() => {
                if (this.ajaxFinished === true) {
                    this.setState({loader:false});
                } else {
                    console.log('Ajax has a long time loading...');
                    this.ajaxLongLoading = true;
                };
            }, LOADINGTIME);
        }

    	success(data){
            if (this.ajaxFinished === false) {
                    this.ajaxFinished = true; 
                }
            if (this.ajaxLongLoading) this.setState({loader:false});
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

    render(){
        if (this.state.loader) {
            return (
                <div className={style.loader}>
                    <div className={style.logo}>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="100%" height="100%" viewBox="0 0 230 230" xmlSpace="preserve">
                            <g>
                            <path fill="#FFFFFF" d="M230,115c0,63.517-51.483,115-115,115S0,178.517,0,115S51.483,0,115,0S230,51.483,230,115z"/>
                            <path fill="#71211C" d="M23.792,98.54c0,50.567,40.71,91.566,90.932,91.566c50.224,0,90.934-40.999,90.934-91.566
                            c0-18.043-5.188-34.873-14.139-49.057C206.171,67.003,215,89.613,215,114.31C215,169.919,170.23,215,114.997,215
                            C59.77,215,15,169.919,15,114.31c0-23.452,7.955-45.019,21.296-62.122C28.352,65.782,23.792,81.617,23.792,98.54z"/>
                            <path fill="#71211C" d="M126.6,22.361c-41.778,0-75.646,34.103-75.646,76.165c0,42.08,33.867,76.175,75.646,76.175
                            c14.906,0,28.806-4.349,40.519-11.841c-14.468,12.268-33.147,19.667-53.546,19.667c-45.942,0-83.183-37.505-83.183-83.767
                            C30.389,52.505,67.63,15,113.572,15c19.366,0,37.184,6.661,51.321,17.835C153.661,26.182,140.574,22.361,126.6,22.361z"/>
                            <path fill="#71211C" d="M140.409,162.17c32.502-12.711,48.608-49.567,35.972-82.3c-12.64-32.726-49.231-48.946-81.738-36.222
                            C83.046,48.188,73.538,55.8,66.675,65.201c7.573-13.956,19.882-25.395,35.756-31.61c35.744-13.994,75.986,3.84,89.885,39.833
                            c13.896,35.993-3.811,76.514-39.562,90.513c-15.068,5.896-30.937,6.145-45.291,1.755
                            C118.204,167.442,129.538,166.428,140.409,162.17z"/>
                            <g>
                                <path fill="#71211C" d="M144.375,67.996L144.375,67.996L144.375,67.996h-25.827V49.483h-7.096v18.512H85.625l-25.289,52.62
                                c5.483,8.165,14.762,13.535,25.288,13.535c10.527,0,19.807-5.368,25.29-13.535L87.616,72.138h54.769l-23.299,48.478
                                c5.482,8.165,14.763,13.535,25.288,13.535c10.526,0,19.807-5.37,25.29-13.535L144.375,67.996z M64.918,120.615l20.707-43.086
                                l20.707,43.086H64.918z M123.667,120.615l20.708-43.086l20.707,43.086H123.667z"/>
                            </g>
                            </g>
                        </svg>
                    </div>
                </div>
            )
        } else return null;
    }
}