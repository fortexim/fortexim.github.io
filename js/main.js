import React from 'react';
import ReactDOM from 'react-dom';
require('../css/normalize.css');
require('../css/app.scss');



var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)/-4;
var l = document.getElementsByClassName('innerleft');
// l[0].style.backgroundPositionX = w.toString()+"px";