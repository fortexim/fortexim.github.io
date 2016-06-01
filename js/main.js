// import 'babel-polyfill';
import world from './world';
require('../css/bootstrap.css');
require('../css/app.scss');
// debugger;
// document.getElementById('output').innerHTML = `Hello ${world}! from B`;

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)/-4;
console.log(w)
var l = document.getElementsByClassName('innerleft');
l[0].style.backgroundPositionX = w.toString()+"px";
console.log("hog");