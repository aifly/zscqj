/**
 created by fly on 2016/4/13 0013
 */
import {utilMethods,$,$$} from './utilMethod.es6';


let data = {
    viewWidth: document.documentElement.clientWidth,
    viewHeight: document.documentElement.clientHeight,
    main: $("#fly-main"),
    year: $('#fly-main .year'),
    sh: $('#s-h'),
    sliderContainer: $('#fly-main .fly-slider-container'),
    leftFill: $("#bg .left")
};

let util = {
    init(){

        this.setSize(data.viewWidth, data.viewHeight, 100);
        this.setDefault();

        window.addEventListener('resize', ()=> {
            let width = document.documentElement.clientWidth,
                height = document.documentElement.clientHeight;

            let k = width <= 1366 ? 200 : 100;
            this.setSize(width, height, k);
            this.setDefault(width);
        });
        this.bindEvent();


    }


    ,
    setSize(width = data.viewWidth, height = data.viewHeight, k = 100){

        data.main.style.height = (height - k) + 'px';
        data.main.style.marginTop = k / 2 + 'px';

        let h = $('.time-line-container').offsetHeight();

        let sh = $("#s-h"),
            imgW = sh.width,
            imgH = sh.height,
            sliderC = $('.fly-slider-container');

        sliderC.style.height = (h) + 'px'
        sliderC.style.width =  (imgW * sliderC.height() / imgH) + 'px';


        Array.from($('.fly-slider-container ul li'))

        this.h = h;

        data.leftFill.style.width = 100 + 'px';

        this.initSlider();

    },

    initSlider(){
        let year = $('.year');

        this.setTrantionDuration(0, 0);
        $('.fly-slider-container ul').css({'transform': 'translate3d(0,0,0)'});
        year.removeClass('active');
        year.eq(0).addClass("active");

    },

    slider(iNow, year, index, last){
        this.slider.iNow = iNow;
        if (index === last) {
            return;
        }
        year.eq(index).addClass("active");
        year.eq(last).removeClass('active');
        $('.fly-slider-container ul').css({'transform': 'translate3d(0,-' + (iNow * this.h) + 'px,0)'});
    },

    bindEvent(){

        let iNow = 0,
            last = 0;

        let year = $("#fly-main .year");

        $('body').on('click', (e)=> {
            let $Target = $(e.target);
            if ($Target.hasClass('year') || $Target.parents('.year').hasClass('year')) {
                let target = $Target.hasClass('year') ? $Target : $Target.parents('.year');
                let index = target.index();
                if (index === iNow) return;
                iNow = index;
                this.setTrantionDuration(index, last);
                this.slider(index, year, index, last);
                last = index;
            }
        });

        let len = $('.fly-slider-container ul li').size();

        $(window).on('keydown', (e)=> {
            let code = e.keyCode;
            if (code === 38) { // 上
                iNow--;
                iNow < 0 && (iNow = 0);
                this.slider(iNow, year, iNow, last);
                this.setTrantionDuration();
                last = iNow;
            }
            else if (code === 40) { //下
                iNow++;
                iNow >= len - 1 && (iNow = len - 1);
                this.slider(iNow, year, iNow, last);
                this.setTrantionDuration();
                last = iNow;
            }

        })


    },
    setTrantionDuration(index, last){
        let dis = Math.abs(index - last);
        isNaN(dis) && (dis = 1);
        $('.fly-slider-container ul').css({'transitionDuration': dis * 500 + 'ms'});
        $('.fly-slider-container ul').css({'-webkit-transitionDuration': dis * 500 + 'ms'});
    },
    setDefault(width = data.viewWidth){
        $('html').css({fontSize: width / 10});
    }

};
$('#temp').load('temp.html', function (e) {
    utilMethods.tempLoaded();
    util.init();
});

