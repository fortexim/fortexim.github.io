var PubSub = require('pubsub-js');
import React from "react";
import ReactDOM from 'react-dom';
// import TweenMax from 'gsap';
import {ROUTING} from '../Settings';
import styles from './innerleft.scss';

export default class Innerleft extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
            pageStyle: null
        };
        this.setPageStyle(true, this.props.startRoute);
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

    handlePageState(style){
        this.setState({pageStyle:style});
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
            <div className={this.state.pageStyle+" "+styles.innerleft}>
                <div className={styles.shadow}></div>
                <div className={styles.logo}>
                    <div className={styles.logographic}>
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
                    <div className={styles.logotitle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 476 106">
                            <path d="M470.05 58.36c0 23.02-18.647 41.686-41.65 41.686H47.6c-23.003 0-41.65-18.663-41.65-41.686V47.64c0-23.02 18.647-41.686 41.65-41.686h380.8c23.003 0 41.65 18.663 41.65 41.686v10.72z" opacity=".7" fill="#fff"></path>
                            <path d="M428.4 11.91c19.686 0 35.7 16.027 35.7 35.73v10.198c0 19.7-15.57 36.25-35.255 36.25H47.6c-19.685 0-35.7-16.55-35.7-36.25V47.64c0-19.702 16.016-35.73 35.7-35.73h380.8M428.845 0H47.6C21.31 0 0 21.328 0 47.64v10.2C0 84.15 21.31 106 47.6 106h381.245C455.135 106 476 84.148 476 57.84v-10.2C476 21.33 454.91 0 428.62 0h.225z"></path>
                            <g>
                                <path d="M92.773 37.068V48.53h17.344v6.808H92.773v19.866H85.19V30.13h28.115v6.94l-20.532-.002zM156.193 52.668c0 3.692-.353 6.985-1.06 9.885-.705 2.898-1.82 5.356-3.35 7.376-1.53 2.02-3.488 3.56-5.874 4.623-2.388 1.063-5.25 1.597-8.592 1.597-3.342 0-6.2-.532-8.574-1.597-2.375-1.063-4.328-2.604-5.857-4.624-1.53-2.02-2.653-4.48-3.367-7.377-.716-2.896-1.074-6.19-1.074-9.885 0-3.69.358-6.99 1.074-9.9.715-2.908 1.838-5.367 3.367-7.377 1.53-2.007 3.48-3.543 5.857-4.605 2.375-1.063 5.232-1.596 8.574-1.596 3.34 0 6.204.524 8.59 1.577 2.387 1.055 4.346 2.584 5.875 4.592 1.528 2.01 2.646 4.467 3.35 7.375.707 2.91 1.06 6.22 1.06 9.933zm-7.94 0c0-2.802-.196-5.248-.586-7.344-.392-2.095-1.02-3.838-1.888-5.23-.868-1.388-1.996-2.43-3.386-3.125-1.39-.695-3.08-1.043-5.076-1.043-2.018 0-3.726.348-5.126 1.042-1.398.694-2.53 1.736-3.398 3.125-.868 1.39-1.498 3.133-1.89 5.23-.39 2.095-.585 4.54-.585 7.343 0 2.802.195 5.25.585 7.344.39 2.098 1.025 3.84 1.903 5.23.88 1.39 2.02 2.432 3.417 3.125 1.398.696 3.096 1.042 5.092 1.042 1.995 0 3.688-.342 5.076-1.026 1.39-.684 2.517-1.72 3.385-3.108.867-1.39 1.496-3.132 1.888-5.228.39-2.1.586-4.557.586-7.38zM190.228 75.204l-11.455-17.75h-6.28v17.75h-7.58V30.13h15.194c2.69 0 5.05.235 7.077.702 2.03.468 3.715 1.216 5.062 2.247 1.345 1.03 2.354 2.376 3.024 4.038.673 1.66 1.01 3.686 1.01 6.073 0 2.13-.23 3.964-.698 5.506-.468 1.542-1.118 2.845-1.954 3.906-.834 1.065-1.828 1.906-2.978 2.524-1.15.62-2.397 1.068-3.744 1.352l12.106 18.727h-8.784zm-1.725-31.622c0-1.323-.162-2.42-.488-3.29-.324-.868-.83-1.563-1.513-2.084-.683-.52-1.563-.89-2.635-1.107-1.073-.216-2.35-.323-3.823-.323h-7.55V50.78h7.126c1.713 0 3.14-.123 4.278-.373 1.14-.25 2.05-.656 2.732-1.222.684-.563 1.166-1.304 1.45-2.215.283-.913.423-2.04.423-3.388zM223.222 37.068v38.136h-7.614V37.068h-14.383V30.13h36.38v6.938h-14.383zM244.274 75.204V30.13h28.375v6.776h-20.793v11.43h17.67v6.81h-17.67V68.27h20.792v6.937l-28.376-.003zM277.66 75.204L292.464 52.6 278.05 30.13h8.752l9.99 16.512 10.315-16.512h8.458L300.99 52.406l14.513 22.797h-8.655L296.53 58.4l-10.477 16.804h-8.394zM340.298 75.204H320.22v-6.122h6.218v-32.83h-6.217V30.13H340.3v6.123h-6.28v32.83h6.28v6.12zM383.933 75.204V41.4L372.35 63.315h-4.557L356.273 41.4v33.804h-7.256V30.13h9.34L370.2 53.125l11.94-22.993h9.11v45.074h-7.317z"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
		);
	}
}