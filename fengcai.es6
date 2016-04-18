/**
 created by fly on 2016/4/13 0013
 */
import {utilMethods,$,$$} from  './utilMethod.es6';
import jQuery from 'jquery';
import './static/libs/jssor.slider.min';

let data = {
    viewWidth: document.documentElement.clientWidth,
    viewHeight: document.documentElement.clientHeight,
    header: $('#fly-main .fly-header'),
    logo: $('#fly-main .fly-logo'),
    pannelC: $('#fly-main .fly-panner-container'),
    pannelCs:$('#fly-main .fly-panner-containers'),
    containersWidth: jQuery(".fly-panner-container").width(),
    containers:jQuery(".fly-panner-shurong"),
    lastIndex:0
}

let util = {
    init(){
        this.bindEvent();
    },
    setSize(width = data.viewWidth, height = data.viewHeight){
        data.pannelC.style.height = (height - parseFloat(utilMethods.getStyle(data.logo).marginTop)-30 - data.header.offsetHeight) + 'px';
        data.pannelCs.style.height = (height - parseFloat(utilMethods.getStyle(data.logo).marginTop)-30 - data.header.offsetHeight) + 'px';
    },
    jssor_1_slider_init() {
        var jssor_1_SlideshowTransitions = [
            {$Duration:1200,x:0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:-0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,y:0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,y:-0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,y:-0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,y:0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:0.3,$Cols:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,y:0.3,$Rows:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,y:0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,y:-0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:0.3,$Rows:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:-0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,$Delay:20,$Clip:3,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,$Delay:20,$Clip:12,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,$Delay:20,$Clip:12,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
        ];

        var jssor_1_options = {
            $AutoPlay: true,
            $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
            },
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            },
            $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $Cols: 10,
                $SpacingX: 8,
                $SpacingY: 8,
                $Align: 360
            }
        };

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

        //responsive code begin
        //you can remove responsive code if you don't want the slider scales while window resizing
        function ScaleSlider() {
            var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
            if (refSize) {
                if(refSize<1228){
                    refSize = Math.min(refSize, 800);
                }
                jssor_1_slider.$ScaleWidth(refSize);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }
        ScaleSlider();
        jQuery(window).bind("load", ScaleSlider);
        jQuery(window).bind("resize", ScaleSlider);
        jQuery(window).bind("orientationchange", ScaleSlider);
//        responsive code end
    },
    jquery_slider_init($){
        var $panels= $('#slider .scrollContainer > li');
        var $parent=$panels.parent();
        var $length=$panels.length;
        var $first=$panels.eq(0).clone().addClass("panel cloned").attr("id",'panel_'+($length+1));
        var $last=$panels.eq($length-1).clone().addClass("cloned").attr("id",'panel_0');
        $parent.append($first);
        $parent.prepend($last);
        var totalPanels			= $(".scrollContainer").children().size();
        var regWidth			= $(".panel").css("width");
        var regImgWidth			= $(".panel img").css("width");
        var movingDistance	    = 295;
        var curWidth			= 327;
        var curHeight         =288;
        var curImgWidth  =327;
        var curImgHeight  =412;
        var othersW           =280;
        var othersH           =325;
        var othersImgW           =280;
        var othersImgH           =325;
        var $panels				= $('#slider .scrollContainer > li');
        var $container			= $('#slider .scrollContainer');
        $panels.css({'float' : 'left','position' : 'relative'});
        $("#slider").data("currentlyMoving", false);
        $container.css('width', (($panels[0].offsetWidth+25) * $panels.length) + 60 ).css('left','0');
        var scroll = $('#slider .scroll').css('overflow', 'hidden');
        function returnToNormal(element) {
            $(element).animate({ width: othersW,height: othersH,top:30}).find("img").animate({width:othersImgW,height:othersImgH});
        };
        function growBigger(element) {
            $(element).addClass("current").animate({ width: curWidth, height: curHeight}).siblings().removeClass("current").animate({top:30})
                .end().animate({top:0}).find("img").animate({width: curImgWidth, height: curImgHeight});
        }
        //direction true = right, false = left
        function change(direction) {
            //if not at the first or last panel
            if((direction && !(curPanel < totalPanels-2)) || (!direction && (curPanel <= 1))) {
                return false;
            }
            //if not currently moving
            if (($("#slider").data("currentlyMoving") == false)) {
                $("#slider").data("currentlyMoving", true);
                var next         = direction ? curPanel + 1 : curPanel - 1;
                var leftValue    = $(".scrollContainer").css("left");
                var movement	 = direction ? parseFloat(leftValue, 10) - movingDistance : parseFloat(leftValue, 10) + movingDistance;
                $(".scrollContainer").stop().animate({"left": movement}, function() {
                    $("#slider").data("currentlyMoving", false);
                });
                returnToNormal("#panel_"+curPanel);
                growBigger("#panel_"+next);
                curPanel = next;
                //remove all previous bound functions
                $("#panel_"+(curPanel+1)).unbind();
                //go forward
                $("#panel_"+(curPanel+1)).click(function(){ change(true); });
                //remove all previous bound functions
                $("#panel_"+(curPanel-1)).unbind();
                //go back
                $("#panel_"+(curPanel-1)).click(function(){ change(false); });
                //remove all previous bound functions
                $("#panel_"+curPanel).unbind();
            }
        }
        // Set up "Current" panel and next and prev
        growBigger("#panel_1");
        var curPanel = 1;
        $("#panel_"+(curPanel+1)).click(function(){ change(true);return false;});
        $("#panel_"+(curPanel-1)).click(function(){ change(false);return false;});
        //when the prev/next arrows are clicked
        $("#slider .next").click(function(){ change(true);});
        $("#slider .prev").click(function(){ change(false);});
        $(window).keydown(function(event){
            switch (event.keyCode) {
                case 13: //enter
                    $(".next").click();
                    break;
                case 37: //prev arrow
                    $(".prev").click();
                    break;
                case 39: //next arrow
                    $(".next").click();
                    break;
            }
        });
    },
    scroll_init($){
        $.fn.dayuwscroll = function(param) {
            var o = $.extend({
                parent_ele: '#t1',
                list_btn: '#tabT04',
                pre_btn: '#left',
                next_btn: '#right',
                path: 'left',
                auto: true,
                time: 5000,
                num: 1,
                gd_num: 1,
                waite_time: 1000
            }, param);
            var target_ele = $(this).selector;
            var $left = $(o.pre_btn);
            var $right = $(o.next_btn);
            var $con = $(target_ele).find('li');
            var curr = 0;
            var len = $con.length;
            var count_page = Math.ceil(len / o.gd_num);
            var out_width = $con.outerWidth(true);
            var out_height = $con.outerHeight(true);
            var clear_time = null;
            var wait_time = null;
            var first_click = true;
            var wrapbox_w = out_width * o.num;
            var scrollbox_w = wrapbox_w * count_page;
            //$con.clone().appendTo(target_ele);


            function init() {
                $(o.parent_ele).css({'width': wrapbox_w + 'px', 'height': out_height + 'px', 'overflow': 'hidden'});
                $(target_ele).css({'width': scrollbox_w + 'px', 'height': out_height + 'px'});
                if (o.auto) {
                    auto_play();
                }
                scroll_mousehover();
            }

            function auto_play() {
                switch (o.path) {
                    case 'left':
                        clear_time = window.setInterval(function () {
                            left__click();
                        }, o.time);
                        break;
                    case 'right':
                        clear_time = window.setInterval(function () {
                            right_click();
                        }, o.time);
                        break;
                    default :
                        clear_time = window.setInterval(function () {
                            left__click();
                        }, o.time);
                        break;
                }
            }

            function list_btn_style(i) {
                $(o.list_btn + ' li').removeClass('cur');
                $(o.list_btn + ' li').eq(i).addClass('cur');
            }

            function goto_curr(page) {
                if (page > count_page) {
                    curr = 0;
                    $(o.parent_ele).scrollLeft(0);
                    $(o.parent_ele).animate({scrollLeft: wrapbox_w}, 500);
                } else {
                    var sp = (page + 1) * wrapbox_w;
                    if ($(o.parent_ele).is(':animated')) {
                        $(o.parent_ele).stop();
                        $(o.parent_ele).animate({scrollLeft: sp}, 500);
                    } else {
                        $(o.parent_ele).animate({scrollLeft: sp}, 500);
                    }

                    curr = page + 1;
                }
            }

            $(o.list_btn + ' li').click(function () {
                var curLiIndex = $(this).index();
                list_btn_style(curLiIndex);
                curr = curLiIndex - 1;

                goto_curr(curr);
            })

            function left__click() {

                window.clearInterval(clear_time);
                window.clearTimeout(wait_time);

                curr++;

                if (curr >= count_page) {
                    curr = 0;
                }

                var curLiIndex = curr;
                list_btn_style(curLiIndex);

                if (first_click) {
                    curr = curLiIndex - 1;
                    first_click = false;
                } else {
                    curr = curLiIndex - 1;
                }

                goto_curr(curr);

                if (o.auto) {
                    wait_time = setTimeout(function () {
                        auto_play()
                    }, o.waite_time);
                }
            }

            $left.bind('click', left__click)

            function right_click() {
                window.clearInterval(clear_time);
                window.clearTimeout(wait_time);

                curr--;
                if (curr < 0) {
                    curr = count_page - 1;
                } else if (curr == (count_page - 1)) {
                    curr = 0;
                }
                var curLiIndex = curr;
                list_btn_style(curLiIndex);

                curr = curLiIndex - 1;


                goto_curr(curr);

                if (o.auto) {
                    wait_time = setTimeout(function () {
                        auto_play()
                    }, o.waite_time);
                }
            }

            function scroll_mousehover() {
                $con.mouseover(function () {
                    window.clearInterval(clear_time);
                    window.clearTimeout(wait_time);
                });
                $con.mouseout(function () {
                    if (o.auto) {
                        wait_time = setTimeout(function () {
                            auto_play()
                        }, o.waite_time);
                    }
                })
            }

            $right.bind('click', right_click);

            return init();
        };
        $("#count1").dayuwscroll({
            parent_ele: '#wrapBox1',
            list_btn: '#tabT04',
            pre_btn: '#left1',
            next_btn: '#right1',
            path: 'left',
            auto: true,
            time: 3000,
            num: 5,
            gd_num: 5,
            waite_time: 1000

        });
    },
    bindEvent() {
        this.setSize();
        window.addEventListener('resize', ()=> {
            let width = document.documentElement.clientWidth,
                height = document.documentElement.clientHeight;
            this.setSize(width, height);
        });
        document.addEventListener("click", e=> {
            if (utilMethods.hasClass(e.target, 'nav')) {
                e.preventDefault();
                let target = e.target;
                Array.from($$('a', $('#fly-main .fly-pannel-bar'))).forEach(item=> {
                    item.classList.remove('active');
                });
                let index = utilMethods.index(target);
                data.containers.eq(data.lastIndex).addClass('activeOut');
                data.containers.eq(index).addClass("activeIn").siblings().removeClass("activeIn");
                data.lastIndex = index;
                target.classList.add('active');
            }
        });
        this.jssor_1_slider_init();
        this.jquery_slider_init(jQuery);
        this.scroll_init(jQuery);
    }
};

utilMethods.ajax('temp.html', data=> {
    $("#temp").innerHTML = data;
    utilMethods.tempLoaded();
    util.init();
});