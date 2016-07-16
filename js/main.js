import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import {Routes} from './Routes';
import {Localization}from './localization/Localization';
require('../css/normalize.css');
require('../css/app.scss');

const app = document.getElementById('app');
let loc = new Localization();
var routie = new Routes(loc);


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