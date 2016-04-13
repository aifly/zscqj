/**
 created by fly on 2016/4/13 0013
 */
import $ from 'jquery';


let data = {
    viewWidth: document.documentElement.clientWidth,
    viewHeight: document.documentElement.clientHeight,
    main: $("#fly-main"),
    year: $('#fly-main .year'),
    sh: $('#s-h'),
    sliderContainer: $('#fly-main .fly-slider-container')
};

let util = {
    init(){

        this.setSize(data.viewWidth, data.viewHeight, 100);
        this.setDefault();

        $(window).on('resize', ()=> {
            let width = document.documentElement.clientWidth,
                height = document.documentElement.clientHeight;

            let k = width <= 1366 ? 200 : 100;
            this.setSize(width, height, k);
            this.setDefault(width);
        });
        this.bindEvent();


        var img = new Image();
        img.onload = (e)=> {

            $('.fly-slider-container').height($('#s-h').height());

        };
        img.src = data.sh.attr("src")
    }


    ,
    setSize(width = data.viewWidth, height = data.viewHeight, k = 100){
        $("#fly-main").height(height - k).css({marginTop: k / 2});
        let h = $('#s-h').height()
        $('.fly-slider-container').height(h);
        this.h = h;
        /// year.css({lineHeight:year.height()+'px'})
    },

    slider(iNow){
        this.slider.iNow = iNow;
        $('.fly-slider-container ul').css({'transform': 'translate3d(0,-' + (iNow * this.h) + 'px,0)'});
    },

    bindEvent(){

        let iNow = 0,
            last = 0;

        let year = $("#fly-main .year")

        $('body').on('click', (e)=> {
            let $Target = $(e.target);
            if ($Target.hasClass('year') || $Target.parents('.year').hasClass('year')) {
                let target = $Target.hasClass('year') ? $Target : $Target.parents('.year');
                let index = target.index();
                if (index === iNow) return;
                iNow = index;
                year.eq(index).addClass("active");
                year.eq(last).removeClass('active');
                this.setTrantionDuration(index,last);
                this.slider(index);
                last = index;
            }
        });
    },
    setTrantionDuration(index, last){
        let dis = Math.abs(index - last);
        Number.isNaN(dis) && (dis = 1);
        $('.fly-slider-container ul').css({'transitionDuration': dis * 500 + 'ms'});
        $('.fly-slider-container ul').css({'-webkit-transitionDuration': dis * 500 + 'ms'});
    },
    setDefault(width = data.viewWidth){
        $('html').css({fontSize: width / 10});
    }

};
$('#temp').load('temp.html', function (e) {
    util.init();


})

