import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import {Routes} from './Routes';
import {Localization}from './localization/Localization';
import {LANGUAGES, ROUTING} from './Settings';
require('../css/normalize.css');
require('../css/app.scss');

const app = document.getElementById('app');
var routie = new Routes();
let loc = new Localization(LANGUAGES.HU);


ReactDOM.render(
    <Layout startRoute={routie.currentRoute} />, app
);


/*if (matchMedia) {
  var mq = window.matchMedia("(min-width: 500px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
  if (mq.matches) {
    console.log("window width is at least 500px")
  } else {
    console.log('window width is less than 500px');
  }
}*/