/**
 created by fly on 2016/4/13 0013
 */
import {utilMethods,$,$$} from  './utilMethod.es6';

let data = {
    viewWidth: document.documentElement.clientWidth,
    viewHeight: document.documentElement.clientHeight,
    header: $('#fly-main .fly-header'),
    logo: $('#fly-main .fly-logo'),
    pannelC: $('#fly-main .fly-panner-container'),
    imgC: $("#fly-main .fly-img-container ul"),
    currentPage: $("#current"),
    prevBtn: $('#fly-prev'),
    nextBtn: $('#fly-next'),
    textArr: [
        {
            title:"第一次直播",
            content:'1 2015年12月1日至2日，第十二届上海知识产权国际论坛在沪举办。本次论坛由上海市人民政府和世界知识产权组织共同主办，来自世界知识产权组织与国内外知识产权政府管理部门官员、行业协会与企业界代表以及知识产权专业人士等，将就全球知识产权发展趋势与特点、知识产权与公平竞争、知识产权保护、上海科技创新中心建设等议题深入探讨。'
        },{
            title:"第二次直播",
            content:'2 2015年12月1日至2日，第十二届上海知识产权国际论坛在沪举办。本次论坛由上海市人民政府和世界知识产权组织共同主办，来自世界知识产权组织与国内外知识产权政府管理部门官员、行业协会与企业界代表以及知识产权专业人士等，将就全球知识产权发展趋势与特点、知识产权与公平竞争、知识产权保护、上海科技创新中心建设等议题深入探讨。'
        },{
            title:"第三次直播",
            content:'3 2015年12月1日至2日，第十二届上海知识产权国际论坛在沪举办。本次论坛由上海市人民政府和世界知识产权组织共同主办，来自世界知识产权组织与国内外知识产权政府管理部门官员、行业协会与企业界代表以及知识产权专业人士等，将就全球知识产权发展趋势与特点、知识产权与公平竞争、知识产权保护、上海科技创新中心建设等议题深入探讨。'
        },{
            title:"第四次直播",
            content:'4 2015年12月1日至2日，第十二届上海知识产权国际论坛在沪举办。本次论坛由上海市人民政府和世界知识产权组织共同主办，来自世界知识产权组织与国内外知识产权政府管理部门官员、行业协会与企业界代表以及知识产权专业人士等，将就全球知识产权发展趋势与特点、知识产权与公平竞争、知识产权保护、上海科技创新中心建设等议题深入探讨。'
        },{
            title:"第五次直播",
            content:'5 2015年12月1日至2日，第十二届上海知识产权国际论坛在沪举办。本次论坛由上海市人民政府和世界知识产权组织共同主办，来自世界知识产权组织与国内外知识产权政府管理部门官员、行业协会与企业界代表以及知识产权专业人士等，将就全球知识产权发展趋势与特点、知识产权与公平竞争、知识产权保护、上海科技创新中心建设等议题深入探讨。'
        },{
            title:"第六次直播",
            content:'6 2015年12月1日至2日，第十二届上海知识产权国际论坛在沪举办。本次论坛由上海市人民政府和世界知识产权组织共同主办，来自世界知识产权组织与国内外知识产权政府管理部门官员、行业协会与企业界代表以及知识产权专业人士等，将就全球知识产权发展趋势与特点、知识产权与公平竞争、知识产权保护、上海科技创新中心建设等议题深入探讨。'
        },{
            title:"第七次直播",
            content:'7 2015年12月1日至2日，第十二届上海知识产权国际论坛在沪举办。本次论坛由上海市人民政府和世界知识产权组织共同主办，来自世界知识产权组织与国内外知识产权政府管理部门官员、行业协会与企业界代表以及知识产权专业人士等，将就全球知识产权发展趋势与特点、知识产权与公平竞争、知识产权保护、上海科技创新中心建设等议题深入探讨。'
        },{
            title:"第八次直播",
            content:'8 2015年12月1日至2日，第十二届上海知识产权国际论坛在沪举办。本次论坛由上海市人民政府和世界知识产权组织共同主办，来自世界知识产权组织与国内外知识产权政府管理部门官员、行业协会与企业界代表以及知识产权专业人士等，将就全球知识产权发展趋势与特点、知识产权与公平竞争、知识产权保护、上海科技创新中心建设等议题深入探讨。'
        },{
            title:"第九次直播",
            content:'9 2015年12月1日至2日，第十二届上海知识产权国际论坛在沪举办。本次论坛由上海市人民政府和世界知识产权组织共同主办，来自世界知识产权组织与国内外知识产权政府管理部门官员、行业协会与企业界代表以及知识产权专业人士等，将就全球知识产权发展趋势与特点、知识产权与公平竞争、知识产权保护、上海科技创新中心建设等议题深入探讨。'
        },{
            title:"第十次直播",
            content:'10 2015年12月1日至2日，第十二届上海知识产权国际论坛在沪举办。本次论坛由上海市人民政府和世界知识产权组织共同主办，来自世界知识产权组织与国内外知识产权政府管理部门官员、行业协会与企业界代表以及知识产权专业人士等，将就全球知识产权发展趋势与特点、知识产权与公平竞争、知识产权保护、上海科技创新中心建设等议题深入探讨。'
        },


    ],
    content: $("#fly-content"),
    flyNum: $("#fly-num"),
    flyT:$("#fly-t")
}


let util = {
    init(){
        this.bindEvent();

    },
    setSize(width = data.viewWidth, height = data.viewHeight){
        data.pannelC.style.height = (height - parseFloat(utilMethods.getStyle(data.logo).marginTop) - 100 - data.header.offsetHeight) + 'px';
        let w = $('.fly-right').offsetWidth * .85,
            h = 527 / 800 * w;
        let aLi = Array.from($$("#fly-main .fly-img-container ul li"));
        aLi.forEach(li=> {
            li.style.width = w + 'px';
            li.style.height = h + 'px';
        });

        data.imgC.style.width = w * aLi.length + 'px';
        data.imgC.style.height = h + 'px';
        $("#fly-main .fly-img-container").style.height = h + 'px';
        this.initSlider();
    },
    bindEvent(){
        this.setSize();
        window.addEventListener('resize', ()=> {
            let width = document.documentElement.clientWidth,
                height = document.documentElement.clientHeight;
            this.setSize(width, height);
        });

        data.imgC.iNow = 0;
        let len = $$('li', data.imgC).length;
        let w = $("#fly-main .fly-img-container ul li").offsetWidth;
        data.prevBtn.addEventListener('click', ()=> {
            this.prev(w);
        });
        data.nextBtn.addEventListener('click', ()=> {
            this.next(w, len);
        });

        document.addEventListener('keydown', (e)=> {
            if (e.keyCode === 37) {
                this.prev(w);
            } else if (e.keyCode === 39) {
                this.next(w, len);
            }
        });
    },
    initSlider(){
        data.imgC.iNow = 0;
        data.imgC.style.transform = 'translate3d(0,0,0)';
        data.imgC.style.webkitTransform = 'translate3d(0,0,0)';
        data.nextBtn.classList.remove('disable');
        data.prevBtn.classList.add('disable');
        data.content.innerHTML = data.textArr[0].content;
        data.flyT.innerHTML=  data.textArr[0].title;
        data.flyNum.innerHTML = "01";
    },
    next(w, len){
        data.imgC.iNow++;
        data.imgC.iNow > len - 2 && (data.nextBtn.classList.add('disable'));
        data.imgC.iNow > len - 1 && (data.imgC.iNow = len - 1);
        data.imgC.style.transform = 'translate3d(-' + (data.imgC.iNow * w) + 'px,0,0)';
        data.imgC.style.webkitTransform = 'translate3d(-' + (data.imgC.iNow * w) + 'px,0,0)';
        data.currentPage.innerHTML = data.imgC.iNow + 1;
        data.prevBtn.classList.remove('disable');
        this.sliderDefault();
    },
    prev(w){
        data.imgC.iNow--;
        data.imgC.iNow <= 0 && (data.imgC.iNow = 0);
        data.imgC.iNow <= 0 && (data.prevBtn.classList.add('disable'));
        data.imgC.style.transform = 'translate3d(-' + (data.imgC.iNow * w) + 'px,0,0)';
        data.imgC.style.webkitTransform = 'translate3d(-' + (data.imgC.iNow * w) + 'px,0,0)';
        data.currentPage.innerHTML = data.imgC.iNow + 1;
        data.nextBtn.classList.remove('disable');
        this.sliderDefault();
    },
    sliderDefault(){
        data.content.innerHTML = data.textArr[data.imgC.iNow].content;
        data.flyT.innerHTML=  data.textArr[data.imgC.iNow].title;
        data.flyNum.innerHTML = (data.imgC.iNow + 1) >= 10 ? 10 : "0" + (data.imgC.iNow + 1);
    }


};

utilMethods.ajax('temp.html', data=> {
    $("#temp").innerHTML = data;
    utilMethods.tempLoaded();
    util.init();
});