// ==UserScript==
// @name        2ch
// @namespace   2ch
// @include     https://2ch.pm/*/
// @include     http://2ch.pm/*/
// @include     https://2ch.hk/*/
// @version     1
// @grant       none
// ==/UserScript==
$('.oppost').each(
function a(){
    gg = $(this).find(".turnmeoff")[0]
    bb = $(this).find(".postbtn-hide")[0]
    $(gg).before(bb)
    }
)