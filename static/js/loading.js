/**
 * Created by linten01 on 2016/4/11 0011.
 */
var style = '';
var scale = document.documentElement.clientWidth / 3000 / 20;
style = '#loading.hide{transform:scale(' + scale + ');-webkit-transform:scale(' + scale + ');}';
function _$(selector) {
    return document.querySelector(selector);
}
window.onload = function () {
    _$('#style').innerHTML = style;
    var loading = _$("#loading");
    var height = document.documentElement.clientHeight;
    loading.style.left = -(loading.offsetWidth - document.documentElement.clientWidth) / 2 + "px";
    loading.style.top = -(loading.offsetHeight - height) / 2 + "px";

    setTimeout(function () {
        loading.style.opacity = 0;
    }, 700);
    setTimeout(function () {
        loading.parentNode.removeChild(loading);
    }, 1100);
};