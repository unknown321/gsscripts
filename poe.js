// ==UserScript==
// @name        poe trade
// @namespace   poe
// @include     http://control.poe.xyz.is/*
// @version     1
// @grant       none
// ==/UserScript==
f = function(){document.getElementById('form').submit();}
window.setInterval(f,300000)
