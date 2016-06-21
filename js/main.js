import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import {Routes, ROUTING} from './Routes';
require('../css/normalize.css');
require('../css/app.scss');

const app = document.getElementById('app');
var routie = new Routes();



ReactDOM.render(
    <Layout />, app
);

routie.hashChanged();

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