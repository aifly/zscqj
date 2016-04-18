/**
 created by fly on 2016/4/13 0013
 */
import {utilMethods,$,$$} from  './utilMethod.es6';


let data = {
    viewWidth: document.documentElement.clientWidth,
    viewHeight: document.documentElement.clientHeight,
    header: $('#fly-main .fly-header'),
    logo: $('#fly-main .fly-logo'),
    pannelC: $('#fly-main .fly-panner-container')
}

let util = {
    init(){
        this.bindEvent();
    },
    setSize(width = data.viewWidth, height = data.viewHeight){
        let pannelH =(height - parseFloat(utilMethods.getStyle(data.logo).marginTop) - 100 - data.header.offsetHeight);
        data.pannelC.style.height = pannelH + 'px';
        let w = $('.fly-flex').offsetWidth;
        let h = 803 / 520 * w;
        Array.from($$(".fly-inner")).forEach(inner=> {
            inner.style.height = h + 'px';
        });
        Array.from($$(".item")).forEach(item=> {
            item.style.transformOrigin = 'center center -' + w / 2 + 'px';
            item.style.webkitTransformOrigin = 'center center -' + w / 2 + 'px';
        });
    },
    bindEvent(){
        this.setSize();
        window.addEventListener('resize', ()=> {
            let width = document.documentElement.clientWidth,
                height = document.documentElement.clientHeight;
            this.setSize(width, height);
        });
    },
};

utilMethods.ajax('temp.html', data=> {
    $("#temp").innerHTML = data;
    utilMethods.tempLoaded();
    util.init();
});