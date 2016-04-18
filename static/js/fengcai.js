/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 created by fly on 2016/4/13 0013
	 */
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilMethodEs6 = __webpack_require__(1);

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	__webpack_require__(3);

	var data = {
	    viewWidth: document.documentElement.clientWidth,
	    viewHeight: document.documentElement.clientHeight,
	    header: (0, _utilMethodEs6.$)('#fly-main .fly-header'),
	    logo: (0, _utilMethodEs6.$)('#fly-main .fly-logo'),
	    pannelC: (0, _utilMethodEs6.$)('#fly-main .fly-panner-container'),
	    pannelCs: (0, _utilMethodEs6.$)('#fly-main .fly-panner-containers'),
	    containersWidth: (0, _jquery2['default'])(".fly-panner-container").width(),
	    containers: (0, _jquery2['default'])(".fly-panner-shurong"),
	    lastIndex: 0
	};

	var util = {
	    init: function init() {
	        this.bindEvent();
	    },
	    setSize: function setSize() {
	        var width = arguments.length <= 0 || arguments[0] === undefined ? data.viewWidth : arguments[0];
	        var height = arguments.length <= 1 || arguments[1] === undefined ? data.viewHeight : arguments[1];

	        data.pannelC.style.height = height - parseFloat(_utilMethodEs6.utilMethods.getStyle(data.logo).marginTop) - 30 - data.header.offsetHeight + 'px';
	        data.pannelCs.style.height = height - parseFloat(_utilMethodEs6.utilMethods.getStyle(data.logo).marginTop) - 30 - data.header.offsetHeight + 'px';
	    },
	    jssor_1_slider_init: function jssor_1_slider_init() {
	        var jssor_1_SlideshowTransitions = [{ $Duration: 1200, x: 0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, x: -0.3, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, x: -0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, x: 0.3, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, y: 0.3, $During: { $Top: [0.3, 0.7] }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, y: -0.3, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, y: -0.3, $During: { $Top: [0.3, 0.7] }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, y: 0.3, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, x: 0.3, $Cols: 2, $During: { $Left: [0.3, 0.7] }, $ChessMode: { $Column: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, x: 0.3, $Cols: 2, $SlideOut: true, $ChessMode: { $Column: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, y: 0.3, $Rows: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Row: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, y: 0.3, $Rows: 2, $SlideOut: true, $ChessMode: { $Row: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, y: 0.3, $Cols: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, y: -0.3, $Cols: 2, $SlideOut: true, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, x: 0.3, $Rows: 2, $During: { $Left: [0.3, 0.7] }, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, x: -0.3, $Rows: 2, $SlideOut: true, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $SlideOut: true, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, $Delay: 20, $Clip: 3, $Assembly: 260, $Easing: { $Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, $Delay: 20, $Clip: 3, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, $Delay: 20, $Clip: 12, $Assembly: 260, $Easing: { $Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }, { $Duration: 1200, $Delay: 20, $Clip: 12, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }];

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
	                if (refSize < 1228) {
	                    refSize = Math.min(refSize, 800);
	                }
	                jssor_1_slider.$ScaleWidth(refSize);
	            } else {
	                window.setTimeout(ScaleSlider, 30);
	            }
	        }
	        ScaleSlider();
	        (0, _jquery2['default'])(window).bind("load", ScaleSlider);
	        (0, _jquery2['default'])(window).bind("resize", ScaleSlider);
	        (0, _jquery2['default'])(window).bind("orientationchange", ScaleSlider);
	        //        responsive code end
	    },
	    jquery_slider_init: function jquery_slider_init($) {
	        var $panels = $('#slider .scrollContainer > li');
	        var $parent = $panels.parent();
	        var $length = $panels.length;
	        var $first = $panels.eq(0).clone().addClass("panel cloned").attr("id", 'panel_' + ($length + 1));
	        var $last = $panels.eq($length - 1).clone().addClass("cloned").attr("id", 'panel_0');
	        $parent.append($first);
	        $parent.prepend($last);
	        var totalPanels = $(".scrollContainer").children().size();
	        var regWidth = $(".panel").css("width");
	        var regImgWidth = $(".panel img").css("width");
	        var movingDistance = 295;
	        var curWidth = 327;
	        var curHeight = 288;
	        var curImgWidth = 327;
	        var curImgHeight = 412;
	        var othersW = 280;
	        var othersH = 325;
	        var othersImgW = 280;
	        var othersImgH = 325;
	        var $panels = $('#slider .scrollContainer > li');
	        var $container = $('#slider .scrollContainer');
	        $panels.css({ 'float': 'left', 'position': 'relative' });
	        $("#slider").data("currentlyMoving", false);
	        $container.css('width', ($panels[0].offsetWidth + 25) * $panels.length + 60).css('left', '0');
	        var scroll = $('#slider .scroll').css('overflow', 'hidden');
	        function returnToNormal(element) {
	            $(element).animate({ width: othersW, height: othersH, top: 30 }).find("img").animate({ width: othersImgW, height: othersImgH });
	        };
	        function growBigger(element) {
	            $(element).addClass("current").animate({ width: curWidth, height: curHeight }).siblings().removeClass("current").animate({ top: 30 }).end().animate({ top: 0 }).find("img").animate({ width: curImgWidth, height: curImgHeight });
	        }
	        //direction true = right, false = left
	        function change(direction) {
	            //if not at the first or last panel
	            if (direction && !(curPanel < totalPanels - 2) || !direction && curPanel <= 1) {
	                return false;
	            }
	            //if not currently moving
	            if ($("#slider").data("currentlyMoving") == false) {
	                $("#slider").data("currentlyMoving", true);
	                var next = direction ? curPanel + 1 : curPanel - 1;
	                var leftValue = $(".scrollContainer").css("left");
	                var movement = direction ? parseFloat(leftValue, 10) - movingDistance : parseFloat(leftValue, 10) + movingDistance;
	                $(".scrollContainer").stop().animate({ "left": movement }, function () {
	                    $("#slider").data("currentlyMoving", false);
	                });
	                returnToNormal("#panel_" + curPanel);
	                growBigger("#panel_" + next);
	                curPanel = next;
	                //remove all previous bound functions
	                $("#panel_" + (curPanel + 1)).unbind();
	                //go forward
	                $("#panel_" + (curPanel + 1)).click(function () {
	                    change(true);
	                });
	                //remove all previous bound functions
	                $("#panel_" + (curPanel - 1)).unbind();
	                //go back
	                $("#panel_" + (curPanel - 1)).click(function () {
	                    change(false);
	                });
	                //remove all previous bound functions
	                $("#panel_" + curPanel).unbind();
	            }
	        }
	        // Set up "Current" panel and next and prev
	        growBigger("#panel_1");
	        var curPanel = 1;
	        $("#panel_" + (curPanel + 1)).click(function () {
	            change(true);return false;
	        });
	        $("#panel_" + (curPanel - 1)).click(function () {
	            change(false);return false;
	        });
	        //when the prev/next arrows are clicked
	        $("#slider .next").click(function () {
	            change(true);
	        });
	        $("#slider .prev").click(function () {
	            change(false);
	        });
	        $(window).keydown(function (event) {
	            switch (event.keyCode) {
	                case 13:
	                    //enter
	                    $(".next").click();
	                    break;
	                case 37:
	                    //prev arrow
	                    $(".prev").click();
	                    break;
	                case 39:
	                    //next arrow
	                    $(".next").click();
	                    break;
	            }
	        });
	    },
	    scroll_init: function scroll_init($) {
	        $.fn.dayuwscroll = function (param) {
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
	                $(o.parent_ele).css({ 'width': wrapbox_w + 'px', 'height': out_height + 'px', 'overflow': 'hidden' });
	                $(target_ele).css({ 'width': scrollbox_w + 'px', 'height': out_height + 'px' });
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
	                    default:
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
	                    $(o.parent_ele).animate({ scrollLeft: wrapbox_w }, 500);
	                } else {
	                    var sp = (page + 1) * wrapbox_w;
	                    if ($(o.parent_ele).is(':animated')) {
	                        $(o.parent_ele).stop();
	                        $(o.parent_ele).animate({ scrollLeft: sp }, 500);
	                    } else {
	                        $(o.parent_ele).animate({ scrollLeft: sp }, 500);
	                    }

	                    curr = page + 1;
	                }
	            }

	            $(o.list_btn + ' li').click(function () {
	                var curLiIndex = $(this).index();
	                list_btn_style(curLiIndex);
	                curr = curLiIndex - 1;

	                goto_curr(curr);
	            });

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
	                        auto_play();
	                    }, o.waite_time);
	                }
	            }

	            $left.bind('click', left__click);

	            function right_click() {
	                window.clearInterval(clear_time);
	                window.clearTimeout(wait_time);

	                curr--;
	                if (curr < 0) {
	                    curr = count_page - 1;
	                } else if (curr == count_page - 1) {
	                    curr = 0;
	                }
	                var curLiIndex = curr;
	                list_btn_style(curLiIndex);

	                curr = curLiIndex - 1;

	                goto_curr(curr);

	                if (o.auto) {
	                    wait_time = setTimeout(function () {
	                        auto_play();
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
	                            auto_play();
	                        }, o.waite_time);
	                    }
	                });
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
	    bindEvent: function bindEvent() {
	        var _this = this;

	        this.setSize();
	        window.addEventListener('resize', function () {
	            var width = document.documentElement.clientWidth,
	                height = document.documentElement.clientHeight;
	            _this.setSize(width, height);
	        });
	        document.addEventListener("click", function (e) {
	            if (_utilMethodEs6.utilMethods.hasClass(e.target, 'nav')) {
	                e.preventDefault();
	                var target = e.target;
	                Array.from((0, _utilMethodEs6.$$)('a', (0, _utilMethodEs6.$)('#fly-main .fly-pannel-bar'))).forEach(function (item) {
	                    item.classList.remove('active');
	                });
	                var index = _utilMethodEs6.utilMethods.index(target);
	                data.containers.eq(data.lastIndex).addClass('activeOut');
	                data.containers.eq(index).addClass("activeIn").siblings().removeClass("activeIn");
	                data.lastIndex = index;
	                target.classList.add('active');
	            }
	        });
	        this.jssor_1_slider_init();
	        this.jquery_slider_init(_jquery2['default']);
	        this.scroll_init(_jquery2['default']);
	    }
	};

	_utilMethodEs6.utilMethods.ajax('temp.html', function (data) {
	    (0, _utilMethodEs6.$)("#temp").innerHTML = data;
	    _utilMethodEs6.utilMethods.tempLoaded();
	    util.init();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 created by fly on 2016/4/11 0011
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var utilMethods = {
	    getGuid: function getGuid() {
	        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	            var r = Math.random() * 16 | 0,
	                v = c == 'x' ? r : r & 0x3 | 0x8;
	            return v.toString(16);
	        });
	    },
	    r: function r(m, n) {
	        return m + Math.random() * (n - m);
	    },
	    loading: function loading(arr, fn, fnEnd) {
	        var len = arr.length;
	        var count = 0;
	        var i = 0;
	        loadimg();
	        function loadimg() {
	            if (i === len) {
	                return;
	            }
	            var img = new Image();
	            img.onload = img.onerror = function () {
	                count++;
	                if (i < len - 1) {
	                    i++;
	                    loadimg();
	                    fn && fn(i / (len - 1), img.src);
	                } else {
	                    fnEnd && fnEnd(img.src);
	                }
	            };
	            img.src = arr[i];
	        }
	    },
	    getQueryString: function getQueryString(name) {
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	        var r = window.location.search.substr(1).match(reg);
	        if (r != null) return unescape(r[2]);
	        return null;
	    },
	    getStyle: function getStyle(obj) {
	        return window.getComputedStyle ? window.getComputedStyle(obj, null) : obj.currentStyle;
	    },
	    hasClass: function hasClass(obj, className) {

	        return Array.from(obj.classList).indexOf(className) > -1;
	    },
	    index: function index(obj) {
	        var index = -1;
	        Array.from(obj.parentNode.children).forEach(function (item, i) {
	            if (obj === item) {
	                index = i;
	            }
	        });

	        return index;
	    },
	    bindEvent: function bindEvent() {
	        var _this = this;

	        window.addEventListener('resize', function () {
	            var width = document.documentElement.clientWidth,
	                height = document.documentElement.clientHeight;
	            _this.setSize(width, height);
	        });

	        document.addEventListener("click", function (e) {
	            if (_this.hasClass(e.target, 'nav')) {
	                e.preventDefault();
	                var target = e.target;
	                Array.from($$('a', $('#fly-main .fly-pannel-bar'))).forEach(function (item) {
	                    item.classList.remove('active');
	                });
	                target.classList.add('active');
	                var index = _this.index(target);
	                target.parentNode.classList[index === 1 ? 'add' : 'remove']('after');
	            }
	        });
	        //alert(utilMethods.getByTagName($('a',$('#fly-main .fly-pannel-bar .btn-group'))).length)
	    },

	    ajax: function ajax(url, fn) {
	        var _this2 = this;

	        var xmlhttp = null;
	        if (window.XMLHttpRequest) {
	            // code for all new browsers
	            xmlhttp = new XMLHttpRequest();
	        }
	        if (xmlhttp != null) {
	            xmlhttp.onreadystatechange = function () {
	                _this2.stateChange(xmlhttp, fn);
	            };
	            xmlhttp.overrideMimeType && xmlhttp.overrideMimeType('text/html'); //设置MiME类别
	            xmlhttp.open("GET", url, true);
	            xmlhttp.send(null);
	        }
	    },
	    stateChange: function stateChange(xmlhttp, fn) {
	        if (xmlhttp.readyState == 4) {
	            // 4 = "loaded"
	            if (xmlhttp.status == 200) {
	                // 200 = OK
	                fn && fn(xmlhttp.responseText);
	            } else {
	                alert("Problem retrieving XML data");
	            }
	        }
	    },
	    tempLoaded: function tempLoaded(name) {
	        var link = document.createElement('link');
	        link.href = './static/css/temp.min.css';
	        link.rel = 'stylesheet';
	        document.head.appendChild(link);

	        document.getElementById('temp').innerHTML += '<div class="border-effect"><img draggable="false" src="./static/images/logo1.png" alt=""></div>';

	        !Array.from && (Array.from = function (c) {
	            return Array.prototype.slice.call(c);
	        });

	        var href = window.location.href.split('/').pop();
	        var id = 1;
	        ["huigu.html", "shuhuai.html", "tushuo.html", "licheng.html", "fengcai.html"].forEach(function (h, i) {
	            if (href.indexOf(h) > -1) {
	                id = i + 1;
	            }
	        });

	        $$("img", $$("#temp .pub-nav li")[id])[0].src = './static/images/nav-' + id + '.jpg';

	        var nav = _$(".pub-nav");
	        var aLi = Array.from(nav.getElementsByTagName('li'));

	        function Nav(option) {
	            var s = this;
	            s.obj = option.obj || {};
	            s.xINow = 0;
	            s.speedX = r(.05, .08);
	            s.speedY = r(.05, .1);
	            s.yINow = 0;
	            s.transX = 0;
	            s.transY = 0;
	            s.xLife = r(120, 200);
	            s.yLife = r(150, 200);
	        }

	        Nav.prototype.move = function () {
	            var s = this;
	            s.xINow++;
	            if (s.xINow >= s.xLife) {
	                s.xINow = 0;
	                s.speedX *= -1;
	            }
	            s.yINow++;
	            if (s.yINow >= s.yLife) {
	                s.yINow = 0;
	                s.speedY *= -1;
	            }

	            var x = s.transX + s.speedX,
	                y = s.transY + s.speedY;
	            s.obj.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
	            s.obj.style.webkitTransform = 'translate3d(' + x + 'px,' + y + 'px,0)';
	            s.transX = x;
	            s.transY = y;
	        };

	        var n = new Nav({ obj: nav });
	        var t = setInterval(function () {
	            n.move();
	        }, 17);

	        addEvent(addEvent(nav, 'mouseover', function (e) {
	            aLi.forEach(function (item, i) {
	                item.classList.add('active');
	                item.style.transitionDelay = 80 * i + 'ms';
	                item.style.webkitTransitionDelay = 80 * i + 'ms';
	            });
	        }), 'mouseout', function (e) {
	            aLi.forEach(function (item, i) {
	                item.classList.remove('active');
	                item.style.transitionDelay = 80 * (6 - i) + 'ms';
	                item.style.webkitTransitionDelay = 80 * (6 - i) + 'ms';
	            });
	        });

	        function r(m, n) {
	            return m + Math.random() * (n - m);
	        }

	        function addEvent(obj, event, fn) {
	            obj.addEventListener(event, function (e) {
	                fn && fn(e);
	            });
	            return obj;
	        }

	        function _$(selector) {
	            return document.querySelector(selector);
	        }
	    }
	};

	if (!Array.from) {
	    Array.from = function (c) {
	        return Array.prototype.slice.call(c);
	    };
	}

	var $ = function $(selector) {
	    return document.querySelector(selector);
	};
	var $$ = function $$(selector, parent) {
	    parent = parent || document;
	    return parent.querySelectorAll(selector);
	};

	exports['default'] = { utilMethods: utilMethods, $: $, $$: $$ };
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-04-05T19:26Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.3",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {

			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the 1.x branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	(function (g, e, b, j, c, i, k) {
	  /*! Jssor */
	  new function () {
	    this.$DebugMode = c;this.$Log = function (c, d) {
	      var a = g.console || {},
	          b = this.$DebugMode;if (b && a.log) a.log(c);else b && d && alert(c);
	    };this.$Error = function (b, d) {
	      var c = g.console || {},
	          a = this.$DebugMode;if (a && c.error) c.error(b);else a && alert(b);if (a) throw d || new Error(b);
	    };this.$Fail = function (a) {
	      throw new Error(a);
	    };this.$Assert = function (b, c) {
	      var a = this.$DebugMode;if (a) if (!b) throw new Error("Assert failed " + c || "");
	    };this.$Trace = function (c) {
	      var a = g.console || {},
	          b = this.$DebugMode;b && a.log && a.log(c);
	    };this.$Execute = function (b) {
	      var a = this.$DebugMode;a && b();
	    };this.$LiveStamp = function (c, d) {
	      var b = this.$DebugMode;if (b) {
	        var a = e.createElement("DIV");a.setAttribute("id", d);c.$Live = a;
	      }
	    };this.$C_AbstractProperty = function () {
	      throw new Error("The property is abstract, it should be implemented by subclass.");
	    };this.$C_AbstractMethod = function () {
	      throw new Error("The method is abstract, it should be implemented by subclass.");
	    };function a(b) {
	      if (b.constructor === a.caller) throw new Error("Cannot create instance of an abstract class.");
	    }this.$C_AbstractClass = a;
	  }();var d = g.$JssorEasing$ = { $EaseSwing: function $EaseSwing(a) {
	      return -b.cos(a * b.PI) / 2 + .5;
	    }, $EaseLinear: function $EaseLinear(a) {
	      return a;
	    }, $EaseInQuad: function $EaseInQuad(a) {
	      return a * a;
	    }, $EaseOutQuad: function $EaseOutQuad(a) {
	      return -a * (a - 2);
	    }, $EaseInOutQuad: function $EaseInOutQuad(a) {
	      return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1);
	    }, $EaseInCubic: function $EaseInCubic(a) {
	      return a * a * a;
	    }, $EaseOutCubic: function $EaseOutCubic(a) {
	      return (a -= 1) * a * a + 1;
	    }, $EaseInOutCubic: function $EaseInOutCubic(a) {
	      return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2);
	    }, $EaseInQuart: function $EaseInQuart(a) {
	      return a * a * a * a;
	    }, $EaseOutQuart: function $EaseOutQuart(a) {
	      return -((a -= 1) * a * a * a - 1);
	    }, $EaseInOutQuart: function $EaseInOutQuart(a) {
	      return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2);
	    }, $EaseInQuint: function $EaseInQuint(a) {
	      return a * a * a * a * a;
	    }, $EaseOutQuint: function $EaseOutQuint(a) {
	      return (a -= 1) * a * a * a * a + 1;
	    }, $EaseInOutQuint: function $EaseInOutQuint(a) {
	      return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2);
	    }, $EaseInSine: function $EaseInSine(a) {
	      return 1 - b.cos(a * b.PI / 2);
	    }, $EaseOutSine: function $EaseOutSine(a) {
	      return b.sin(a * b.PI / 2);
	    }, $EaseInOutSine: function $EaseInOutSine(a) {
	      return -1 / 2 * (b.cos(b.PI * a) - 1);
	    }, $EaseInExpo: function $EaseInExpo(a) {
	      return a == 0 ? 0 : b.pow(2, 10 * (a - 1));
	    }, $EaseOutExpo: function $EaseOutExpo(a) {
	      return a == 1 ? 1 : -b.pow(2, -10 * a) + 1;
	    }, $EaseInOutExpo: function $EaseInOutExpo(a) {
	      return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * b.pow(2, 10 * (a - 1)) : 1 / 2 * (-b.pow(2, -10 * --a) + 2);
	    }, $EaseInCirc: function $EaseInCirc(a) {
	      return -(b.sqrt(1 - a * a) - 1);
	    }, $EaseOutCirc: function $EaseOutCirc(a) {
	      return b.sqrt(1 - (a -= 1) * a);
	    }, $EaseInOutCirc: function $EaseInOutCirc(a) {
	      return (a *= 2) < 1 ? -1 / 2 * (b.sqrt(1 - a * a) - 1) : 1 / 2 * (b.sqrt(1 - (a -= 2) * a) + 1);
	    }, $EaseInElastic: function $EaseInElastic(a) {
	      if (!a || a == 1) return a;var c = .3,
	          d = .075;return -(b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c));
	    }, $EaseOutElastic: function $EaseOutElastic(a) {
	      if (!a || a == 1) return a;var c = .3,
	          d = .075;return b.pow(2, -10 * a) * b.sin((a - d) * 2 * b.PI / c) + 1;
	    }, $EaseInOutElastic: function $EaseInOutElastic(a) {
	      if (!a || a == 1) return a;var c = .45,
	          d = .1125;return (a *= 2) < 1 ? -.5 * b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) : b.pow(2, -10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) * .5 + 1;
	    }, $EaseInBack: function $EaseInBack(a) {
	      var b = 1.70158;return a * a * ((b + 1) * a - b);
	    }, $EaseOutBack: function $EaseOutBack(a) {
	      var b = 1.70158;return (a -= 1) * a * ((b + 1) * a + b) + 1;
	    }, $EaseInOutBack: function $EaseInOutBack(a) {
	      var b = 1.70158;return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2);
	    }, $EaseInBounce: function $EaseInBounce(a) {
	      return 1 - d.$EaseOutBounce(1 - a);
	    }, $EaseOutBounce: function $EaseOutBounce(a) {
	      return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
	    }, $EaseInOutBounce: function $EaseInOutBounce(a) {
	      return a < 1 / 2 ? d.$EaseInBounce(a * 2) * .5 : d.$EaseOutBounce(a * 2 - 1) * .5 + .5;
	    }, $EaseGoBack: function $EaseGoBack(a) {
	      return 1 - b.abs(2 - 1);
	    }, $EaseInWave: function $EaseInWave(a) {
	      return 1 - b.cos(a * b.PI * 2);
	    }, $EaseOutWave: function $EaseOutWave(a) {
	      return b.sin(a * b.PI * 2);
	    }, $EaseOutJump: function $EaseOutJump(a) {
	      return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a);
	    }, $EaseInJump: function $EaseInJump(a) {
	      return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a;
	    } },
	      f = g.$Jease$ = { $Swing: d.$EaseSwing, $Linear: d.$EaseLinear, $InQuad: d.$EaseInQuad, $OutQuad: d.$EaseOutQuad, $InOutQuad: d.$EaseInOutQuad, $InCubic: d.$EaseInCubic, $OutCubic: d.$EaseOutCubic, $InOutCubic: d.$EaseInOutCubic, $InQuart: d.$EaseInQuart, $OutQuart: d.$EaseOutQuart, $InOutQuart: d.$EaseInOutQuart, $InQuint: d.$EaseInQuint, $OutQuint: d.$EaseOutQuint, $InOutQuint: d.$EaseInOutQuint, $InSine: d.$EaseInSine, $OutSine: d.$EaseOutSine, $InOutSine: d.$EaseInOutSine, $InExpo: d.$EaseInExpo, $OutExpo: d.$EaseOutExpo, $InOutExpo: d.$EaseInOutExpo, $InCirc: d.$EaseInCirc, $OutCirc: d.$EaseOutCirc, $InOutCirc: d.$EaseInOutCirc, $InElastic: d.$EaseInElastic, $OutElastic: d.$EaseOutElastic, $InOutElastic: d.$EaseInOutElastic, $InBack: d.$EaseInBack, $OutBack: d.$EaseOutBack, $InOutBack: d.$EaseInOutBack, $InBounce: d.$EaseInBounce, $OutBounce: d.$EaseOutBounce, $InOutBounce: d.$EaseInOutBounce, $GoBack: d.$EaseGoBack, $InWave: d.$EaseInWave, $OutWave: d.$EaseOutWave, $OutJump: d.$EaseOutJump, $InJump: d.$EaseInJump };g.$JssorDirection$ = { $TO_LEFT: 1, $TO_RIGHT: 2, $TO_TOP: 4, $TO_BOTTOM: 8, $HORIZONTAL: 3, $VERTICAL: 12, $GetDirectionHorizontal: function $GetDirectionHorizontal(a) {
	      return a & 3;
	    }, $GetDirectionVertical: function $GetDirectionVertical(a) {
	      return a & 12;
	    }, $IsHorizontal: function $IsHorizontal(a) {
	      return a & 3;
	    }, $IsVertical: function $IsVertical(a) {
	      return a & 12;
	    } };var a = g.$Jssor$ = new function () {
	    var f = this,
	        zb = /\S+/g,
	        S = 1,
	        fb = 2,
	        jb = 3,
	        ib = 4,
	        nb = 5,
	        I,
	        s = 0,
	        l = 0,
	        q = 0,
	        J = 0,
	        C = 0,
	        y = navigator,
	        sb = y.appName,
	        n = y.userAgent,
	        v = e.documentElement;function Ib() {
	      if (!I) {
	        I = { $Touchable: "ontouchstart" in g || "createTouch" in e };var a;if (y.pointerEnabled || (a = y.msPointerEnabled)) I.$TouchActionAttr = a ? "msTouchAction" : "touchAction";
	      }return I;
	    }function t(i) {
	      if (!s) {
	        s = -1;if (sb == "Microsoft Internet Explorer" && !!g.attachEvent && !!g.ActiveXObject) {
	          var f = n.indexOf("MSIE");s = S;q = o(n.substring(f + 5, n.indexOf(";", f))); /*@cc_on J=@_jscript_version@*/;l = e.documentMode || q;
	        } else if (sb == "Netscape" && !!g.addEventListener) {
	          var d = n.indexOf("Firefox"),
	              b = n.indexOf("Safari"),
	              h = n.indexOf("Chrome"),
	              c = n.indexOf("AppleWebKit");if (d >= 0) {
	            s = fb;l = o(n.substring(d + 8));
	          } else if (b >= 0) {
	            var j = n.substring(0, b).lastIndexOf("/");s = h >= 0 ? ib : jb;l = o(n.substring(j + 1, b));
	          } else {
	            var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(n);if (a) {
	              s = S;l = q = o(a[1]);
	            }
	          }if (c >= 0) C = o(n.substring(c + 12));
	        } else {
	          var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(n);if (a) {
	            s = nb;l = o(a[2]);
	          }
	        }
	      }return i == s;
	    }function p() {
	      return t(S);
	    }function N() {
	      return p() && (l < 6 || e.compatMode == "BackCompat");
	    }function Ab() {
	      return t(fb);
	    }function hb() {
	      return t(jb);
	    }function Db() {
	      return t(ib);
	    }function mb() {
	      return t(nb);
	    }function ab() {
	      return hb() && C > 534 && C < 535;
	    }function L() {
	      return p() && l < 9;
	    }function cb(a) {
	      var b;return function (d) {
	        if (!b) {
	          b = a;var c = a.substr(0, 1).toUpperCase() + a.substr(1);m([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function (g, f) {
	            var e = a;if (f) e = g + c;if (d.style[e] != k) return b = e;
	          });
	        }return b;
	      };
	    }var bb = cb("transform");function rb(a) {
	      return ({}).toString.call(a);
	    }var H;function Fb() {
	      if (!H) {
	        H = {};m(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
	          H["[object " + a + "]"] = a.toLowerCase();
	        });
	      }return H;
	    }function m(a, d) {
	      if (rb(a) == "[object Array]") {
	        for (var b = 0; b < a.length; b++) if (d(a[b], b, a)) return c;
	      } else for (var e in a) if (d(a[e], e, a)) return c;
	    }function A(a) {
	      return a == j ? String(a) : Fb()[rb(a)] || "object";
	    }function pb(a) {
	      for (var b in a) return c;
	    }function x(a) {
	      try {
	        return A(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || ({}).hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"));
	      } catch (b) {}
	    }function w(a, b) {
	      return { x: a, y: b };
	    }function vb(b, a) {
	      setTimeout(b, a || 0);
	    }function F(b, d, c) {
	      var a = !b || b == "inherit" ? "" : b;m(d, function (c) {
	        var b = c.exec(a);if (b) {
	          var d = a.substr(0, b.index),
	              e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));a = d + e;
	        }
	      });a = c + (a.indexOf(" ") != 0 ? " " : "") + a;return a;
	    }function eb(b, a) {
	      if (l < 9) b.style.filter = a;
	    }function Bb(g, a, i) {
	      if (!J || J < 9) {
	        var d = a.$ScaleX,
	            e = a.$ScaleY,
	            j = (a.$Rotate || 0) % 360,
	            h = "";if (j || d != k || e != k) {
	          if (d == k) d = 1;if (e == k) e = 1;var c = f.$CreateMatrix(j / 180 * b.PI, d || 1, e || 1),
	              i = f.$GetMatrixOffset(c, a.$OriginalWidth, a.$OriginalHeight);f.$CssMarginTop(g, i.y);f.$CssMarginLeft(g, i.x);h = "progid:DXImageTransform.Microsoft.Matrix(M11=" + c[0][0] + ", M12=" + c[0][1] + ", M21=" + c[1][0] + ", M22=" + c[1][1] + ", SizingMethod='auto expand')";
	        }var m = g.style.filter,
	            n = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
	            l = F(m, [n], h);eb(g, l);
	      }
	    }f.$Device = Ib;f.$IsBrowserIE = p;f.$IsBrowserIeQuirks = N;f.$IsBrowserFireFox = Ab;f.$IsBrowserSafari = hb;f.$IsBrowserChrome = Db;f.$IsBrowserOpera = mb;f.$IsBrowserBadTransform = ab;f.$IsBrowserIe9Earlier = L;f.$BrowserVersion = function () {
	      return l;
	    };f.$BrowserEngineVersion = function () {
	      return q || l;
	    };f.$WebKitVersion = function () {
	      t();return C;
	    };f.$Delay = vb;f.$Inherit = function (a, b) {
	      b.call(a);return z({}, a);
	    };function V(a) {
	      a.constructor === V.caller && a.$Construct && a.$Construct.apply(a, V.caller.arguments);
	    }f.$Construct = V;f.$GetElement = function (a) {
	      if (f.$IsString(a)) a = e.getElementById(a);return a;
	    };function r(a) {
	      return a || g.event;
	    }f.$GetEvent = r;f.$EvtSrc = function (a) {
	      a = r(a);return a.target || a.srcElement || e;
	    };f.$EvtTarget = function (a) {
	      a = r(a);return a.relatedTarget || a.toElement;
	    };f.$EvtWhich = function (a) {
	      a = r(a);return a.which || [0, 1, 3, 0, 2][a.button] || a.charCode || a.keyCode;
	    };f.$MousePosition = function (a) {
	      a = r(a);return { x: a.pageX || a.clientX || 0, y: a.pageY || a.clientY || 0 };
	    };f.$PageScroll = function () {
	      var a = e.body;return { x: (g.pageXOffset || v.scrollLeft || a.scrollLeft || 0) - (v.clientLeft || a.clientLeft || 0), y: (g.pageYOffset || v.scrollTop || a.scrollTop || 0) - (v.clientTop || a.clientTop || 0) };
	    };f.$WindowSize = function () {
	      var a = e.body;return { x: a.clientWidth || v.clientWidth, y: a.clientHeight || v.clientHeight };
	    };function B(c, d, a) {
	      if (a !== k) c.style[d] = a == k ? "" : a;else {
	        var b = c.currentStyle || c.style;a = b[d];if (a == "" && g.getComputedStyle) {
	          b = c.ownerDocument.defaultView.getComputedStyle(c, j);b && (a = b.getPropertyValue(d) || b[d]);
	        }return a;
	      }
	    }function X(b, c, a, d) {
	      if (a !== k) {
	        if (a == j) a = "";else d && (a += "px");B(b, c, a);
	      } else return o(B(b, c));
	    }function Jb(b, d, a) {
	      return X(b, d, a, c);
	    }function h(c, a) {
	      var d = a ? X : B,
	          b;if (a & 4) b = cb(c);return function (e, f) {
	        return d(e, b ? b(e) : c, f, a & 2);
	      };
	    }function Cb(b) {
	      if (p() && q < 9) {
	        var a = /opacity=([^)]*)/.exec(b.style.filter || "");return a ? o(a[1]) / 100 : 1;
	      } else return o(b.style.opacity || "1");
	    }function Eb(c, a, f) {
	      if (p() && q < 9) {
	        var h = c.style.filter || "",
	            i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
	            e = b.round(100 * a),
	            d = "";if (e < 100 || f) d = "alpha(opacity=" + e + ") ";var g = F(h, [i], d);eb(c, g);
	      } else c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100;
	    }var xb = { $Rotate: ["rotate"], $RotateX: ["rotateX"], $RotateY: ["rotateY"], $ScaleX: ["scaleX", 2], $ScaleY: ["scaleY", 2], $TranslateX: ["translateX", 1], $TranslateY: ["translateY", 1], $TranslateZ: ["translateZ", 1], $SkewX: ["skewX"], $SkewY: ["skewY"] };function Z(e, c) {
	      if (p() && l && l < 10) {
	        delete c.$RotateX;delete c.$RotateY;
	      }var d = bb(e);if (d) {
	        var b = "";a.$Each(c, function (e, c) {
	          var a = xb[c];if (a) {
	            var d = a[1] || 0;b += (b ? " " : "") + a[0] + "(" + e + ["deg", "px", ""][d] + ")";
	          }
	        });e.style[d] = b;
	      }
	    }f.$SetStyleTransform = function (b, a) {
	      if (ab()) vb(f.$CreateCallback(j, Z, b, a));else (L() ? Bb : Z)(b, a);
	    };f.$CssTransformOrigin = h("transformOrigin", 4);f.$CssBackfaceVisibility = h("backfaceVisibility", 4);f.$CssTransformStyle = h("transformStyle", 4);f.$CssPerspective = h("perspective", 6);f.$CssPerspectiveOrigin = h("perspectiveOrigin", 4);f.$CssScale = function (a, c) {
	      if (p() && q < 9 || q < 10 && N()) a.style.zoom = c == 1 ? "" : c;else {
	        var b = bb(a);if (b) {
	          var f = "scale(" + c + ")",
	              e = a.style[b],
	              g = new RegExp(/[\s]*scale\(.*?\)/g),
	              d = F(e, [g], f);a.style[b] = d;
	        }
	      }
	    };var lb = 0,
	        gb = 0;f.$WindowResizeFilter = function (b, a) {
	      return L() ? function () {
	        var g = c,
	            d = N() ? b.document.body : b.document.documentElement;if (d) {
	          var f = d.offsetWidth - lb,
	              e = d.offsetHeight - gb;if (f || e) {
	            lb += f;gb += e;
	          } else g = i;
	        }g && a();
	      } : a;
	    };f.$MouseOverOutFilter = function (b, a) {
	      return function (c) {
	        c = r(c);var e = c.type,
	            d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);(!d || d !== a && !f.$IsChild(a, d)) && b(c);
	      };
	    };f.$AddEvent = function (a, c, d, b) {
	      a = f.$GetElement(a);if (a.addEventListener) {
	        c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);a.addEventListener(c, d, b);
	      } else if (a.attachEvent) {
	        a.attachEvent("on" + c, d);b && a.setCapture && a.setCapture();
	      }
	    };f.$RemoveEvent = function (a, c, d, b) {
	      a = f.$GetElement(a);if (a.removeEventListener) {
	        c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);a.removeEventListener(c, d, b);
	      } else if (a.detachEvent) {
	        a.detachEvent("on" + c, d);b && a.releaseCapture && a.releaseCapture();
	      }
	    };f.$FireEvent = function (c, b) {
	      var a;if (e.createEvent) {
	        a = e.createEvent("HTMLEvents");a.initEvent(b, i, i);c.dispatchEvent(a);
	      } else {
	        var d = "on" + b;a = e.createEventObject();c.fireEvent(d, a);
	      }
	    };f.$CancelEvent = function (a) {
	      a = r(a);a.preventDefault && a.preventDefault();a.cancel = c;a.returnValue = i;
	    };f.$StopEvent = function (a) {
	      a = r(a);a.stopPropagation && a.stopPropagation();a.cancelBubble = c;
	    };f.$CreateCallback = function (d, c) {
	      var a = [].slice.call(arguments, 2),
	          b = function b() {
	        var b = a.concat([].slice.call(arguments, 0));return c.apply(d, b);
	      };return b;
	    };f.$InnerText = function (a, b) {
	      if (b == k) return a.textContent || a.innerText;var c = e.createTextNode(b);f.$Empty(a);a.appendChild(c);
	    };f.$InnerHtml = function (a, b) {
	      if (b == k) return a.innerHTML;a.innerHTML = b;
	    };f.$GetClientRect = function (b) {
	      var a = b.getBoundingClientRect();return { x: a.left, y: a.top, w: a.right - a.left, h: a.bottom - a.top };
	    };f.$ClearInnerHtml = function (a) {
	      a.innerHTML = "";
	    };f.$EncodeHtml = function (b) {
	      var a = f.$CreateDiv();f.$InnerText(a, b);return f.$InnerHtml(a);
	    };f.$DecodeHtml = function (b) {
	      var a = f.$CreateDiv();f.$InnerHtml(a, b);return f.$InnerText(a);
	    };f.$SelectElement = function (c) {
	      var b;if (g.getSelection) b = g.getSelection();var a = j;if (e.createRange) {
	        a = e.createRange();a.selectNode(c);
	      } else {
	        a = e.body.createTextRange();a.moveToElementText(c);a.select();
	      }b && b.addRange(a);
	    };f.$DeselectElements = function () {
	      if (e.selection) e.selection.empty();else g.getSelection && g.getSelection().removeAllRanges();
	    };f.$Children = function (d, c) {
	      for (var b = [], a = d.firstChild; a; a = a.nextSibling) (c || a.nodeType == 1) && b.push(a);return b;
	    };function qb(a, c, e, b) {
	      b = b || "u";for (a = a ? a.firstChild : j; a; a = a.nextSibling) if (a.nodeType == 1) {
	        if (R(a, b) == c) return a;if (!e) {
	          var d = qb(a, c, e, b);if (d) return d;
	        }
	      }
	    }f.$FindChild = qb;function P(a, d, f, b) {
	      b = b || "u";var c = [];for (a = a ? a.firstChild : j; a; a = a.nextSibling) if (a.nodeType == 1) {
	        R(a, b) == d && c.push(a);if (!f) {
	          var e = P(a, d, f, b);if (e.length) c = c.concat(e);
	        }
	      }return c;
	    }function kb(a, c, d) {
	      for (a = a ? a.firstChild : j; a; a = a.nextSibling) if (a.nodeType == 1) {
	        if (a.tagName == c) return a;if (!d) {
	          var b = kb(a, c, d);if (b) return b;
	        }
	      }
	    }f.$FindChildByTag = kb;function db(a, c, e) {
	      var b = [];for (a = a ? a.firstChild : j; a; a = a.nextSibling) if (a.nodeType == 1) {
	        (!c || a.tagName == c) && b.push(a);if (!e) {
	          var d = db(a, c, e);if (d.length) b = b.concat(d);
	        }
	      }return b;
	    }f.$FindChildrenByTag = db;f.$GetElementsByTag = function (b, a) {
	      return b.getElementsByTagName(a);
	    };function z() {
	      var e = arguments,
	          d,
	          c,
	          b,
	          a,
	          g = 1 & e[0],
	          f = 1 + g;d = e[f - 1] || {};for (; f < e.length; f++) if (c = e[f]) for (b in c) {
	        a = c[b];if (a !== k) {
	          a = c[b];var h = d[b];d[b] = g && (x(h) || x(a)) ? z(g, {}, h, a) : a;
	        }
	      }return d;
	    }f.$Extend = z;function W(f, g) {
	      var d = {},
	          c,
	          a,
	          b;for (c in f) {
	        a = f[c];b = g[c];if (a !== b) {
	          var e;if (x(a) && x(b)) {
	            a = W(a, b);e = !pb(a);
	          }!e && (d[c] = a);
	        }
	      }return d;
	    }f.$Unextend = W;f.$IsFunction = function (a) {
	      return A(a) == "function";
	    };f.$IsArray = function (a) {
	      return A(a) == "array";
	    };f.$IsString = function (a) {
	      return A(a) == "string";
	    };f.$IsNumeric = function (a) {
	      return !isNaN(o(a)) && isFinite(a);
	    };f.$Type = A;f.$Each = m;f.$IsNotEmpty = pb;f.$IsPlainObject = x;function O(a) {
	      return e.createElement(a);
	    }f.$CreateElement = O;f.$CreateDiv = function () {
	      return O("DIV");
	    };f.$CreateSpan = function () {
	      return O("SPAN");
	    };f.$EmptyFunction = function () {};function T(b, c, a) {
	      if (a == k) return b.getAttribute(c);b.setAttribute(c, a);
	    }function R(a, b) {
	      return T(a, b) || T(a, "data-" + b);
	    }f.$Attribute = T;f.$AttributeEx = R;function u(b, a) {
	      if (a == k) return b.className;b.className = a;
	    }f.$ClassName = u;function ub(b) {
	      var a = {};m(b, function (b) {
	        a[b] = b;
	      });return a;
	    }function Hb(b) {
	      var a = [];m(b, function (b) {
	        a.push(b);
	      });return a;
	    }function wb(b, a) {
	      return b.match(a || zb);
	    }function M(b, a) {
	      return ub(wb(b || "", a));
	    }f.$ToHash = ub;f.$FromHash = Hb;f.$Split = wb;function Y(b, c) {
	      var a = "";m(c, function (c) {
	        a && (a += b);a += c;
	      });return a;
	    }function E(a, c, b) {
	      u(a, Y(" ", z(W(M(u(a)), M(c)), M(b))));
	    }f.$Join = Y;f.$AddClass = function (b, a) {
	      E(b, j, a);
	    };f.$RemoveClass = E;f.$ReplaceClass = E;f.$ParentNode = function (a) {
	      return a.parentNode;
	    };f.$HideElement = function (a) {
	      f.$CssDisplay(a, "none");
	    };f.$EnableElement = function (a, b) {
	      if (b) f.$Attribute(a, "disabled", c);else f.$RemoveAttribute(a, "disabled");
	    };f.$HideElements = function (b) {
	      for (var a = 0; a < b.length; a++) f.$HideElement(b[a]);
	    };f.$ShowElement = function (a, b) {
	      f.$CssDisplay(a, b ? "none" : "");
	    };f.$ShowElements = function (b, c) {
	      for (var a = 0; a < b.length; a++) f.$ShowElement(b[a], c);
	    };f.$RemoveAttribute = function (b, a) {
	      b.removeAttribute(a);
	    };f.$CanClearClip = function () {
	      return p() && l < 10;
	    };f.$SetStyleClip = function (d, c) {
	      if (c) d.style.clip = "rect(" + b.round(c.$Top) + "px " + b.round(c.$Right) + "px " + b.round(c.$Bottom) + "px " + b.round(c.$Left) + "px)";else {
	        var g = d.style.cssText,
	            f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
	            e = F(g, f, "");a.$CssCssText(d, e);
	      }
	    };f.$GetNow = function () {
	      return +new Date();
	    };f.$AppendChild = function (b, a) {
	      b.appendChild(a);
	    };f.$AppendChildren = function (b, a) {
	      m(a, function (a) {
	        f.$AppendChild(b, a);
	      });
	    };f.$InsertBefore = function (b, a, c) {
	      (c || a.parentNode).insertBefore(b, a);
	    };f.$InsertAfter = function (b, a, c) {
	      f.$InsertBefore(b, a.nextSibling, c || a.parentNode);
	    };f.$InsertAdjacentHtml = function (b, a, c) {
	      b.insertAdjacentHTML(a, c);
	    };f.$RemoveElement = function (a, b) {
	      (b || a.parentNode).removeChild(a);
	    };f.$RemoveElements = function (a, b) {
	      m(a, function (a) {
	        f.$RemoveElement(a, b);
	      });
	    };f.$Empty = function (a) {
	      f.$RemoveElements(f.$Children(a, c), a);
	    };f.$CenterElement = function (a, b) {
	      var c = f.$ParentNode(a);b & 1 && f.$CssLeft(a, (f.$CssWidth(c) - f.$CssWidth(a)) / 2);b & 2 && f.$CssTop(a, (f.$CssHeight(c) - f.$CssHeight(a)) / 2);
	    };f.$ParseInt = function (b, a) {
	      return parseInt(b, a || 10);
	    };var o = parseFloat;f.$ParseFloat = o;f.$IsChild = function (b, a) {
	      var c = e.body;while (a && b !== a && c !== a) try {
	        a = a.parentNode;
	      } catch (d) {
	        return i;
	      }return b === a;
	    };function U(d, c, b) {
	      var a = d.cloneNode(!c);!b && f.$RemoveAttribute(a, "id");return a;
	    }f.$CloneNode = U;f.$LoadImage = function (e, g) {
	      var a = new Image();function b(e, c) {
	        f.$RemoveEvent(a, "load", b);f.$RemoveEvent(a, "abort", d);f.$RemoveEvent(a, "error", d);g && g(a, c);
	      }function d(a) {
	        b(a, c);
	      }if (mb() && l < 11.6 || !e) b(!e);else {
	        f.$AddEvent(a, "load", b);f.$AddEvent(a, "abort", d);f.$AddEvent(a, "error", d);a.src = e;
	      }
	    };f.$LoadImages = function (d, a, e) {
	      var c = d.length + 1;function b(b) {
	        c--;if (a && b && b.src == a.src) a = b;!c && e && e(a);
	      }m(d, function (a) {
	        f.$LoadImage(a.src, b);
	      });b();
	    };f.$BuildElement = function (b, g, i, h) {
	      if (h) b = U(b);var c = P(b, g);if (!c.length) c = a.$GetElementsByTag(b, g);for (var f = c.length - 1; f > -1; f--) {
	        var d = c[f],
	            e = U(i);u(e, u(d));a.$CssCssText(e, d.style.cssText);a.$InsertBefore(e, d);a.$RemoveElement(d);
	      }return b;
	    };function Gb(b) {
	      var l = this,
	          p = "",
	          r = ["av", "pv", "ds", "dn"],
	          g = [],
	          q,
	          j = 0,
	          h = 0,
	          d = 0;function i() {
	        E(b, q, g[d || j || h & 2 || h]);a.$Css(b, "pointer-events", d ? "none" : "");
	      }function c() {
	        j = 0;i();f.$RemoveEvent(e, "mouseup", c);f.$RemoveEvent(e, "touchend", c);f.$RemoveEvent(e, "touchcancel", c);
	      }function o(a) {
	        if (d) f.$CancelEvent(a);else {
	          j = 4;i();f.$AddEvent(e, "mouseup", c);f.$AddEvent(e, "touchend", c);f.$AddEvent(e, "touchcancel", c);
	        }
	      }l.$Selected = function (a) {
	        if (a === k) return h;h = a & 2 || a & 1;i();
	      };l.$Enable = function (a) {
	        if (a === k) return !d;d = a ? 0 : 3;i();
	      };l.$Elmt = b = f.$GetElement(b);var n = a.$Split(u(b));if (n) p = n.shift();m(r, function (a) {
	        g.push(p + a);
	      });q = Y(" ", g);g.unshift("");f.$AddEvent(b, "mousedown", o);f.$AddEvent(b, "touchstart", o);
	    }f.$Buttonize = function (a) {
	      return new Gb(a);
	    };f.$Css = B;f.$CssN = X;f.$CssP = Jb;f.$CssOverflow = h("overflow");f.$CssTop = h("top", 2);f.$CssLeft = h("left", 2);f.$CssWidth = h("width", 2);f.$CssHeight = h("height", 2);f.$CssMarginLeft = h("marginLeft", 2);f.$CssMarginTop = h("marginTop", 2);f.$CssPosition = h("position");f.$CssDisplay = h("display");f.$CssZIndex = h("zIndex", 1);f.$CssFloat = function (b, a) {
	      return B(b, p() ? "styleFloat" : "cssFloat", a);
	    };f.$CssOpacity = function (b, a, c) {
	      if (a != k) Eb(b, a, c);else return Cb(b);
	    };f.$CssCssText = function (a, b) {
	      if (b != k) a.style.cssText = b;else return a.style.cssText;
	    };var Q = { $Opacity: f.$CssOpacity, $Top: f.$CssTop, $Left: f.$CssLeft, $Width: f.$CssWidth, $Height: f.$CssHeight, $Position: f.$CssPosition, $Display: f.$CssDisplay, $ZIndex: f.$CssZIndex },
	        K;function G() {
	      if (!K) K = z({ $MarginTop: f.$CssMarginTop, $MarginLeft: f.$CssMarginLeft, $Clip: f.$SetStyleClip, $Transform: f.$SetStyleTransform }, Q);return K;
	    }function ob() {
	      var a = {};a.$Transform = a.$Transform;a.$Transform = a.$Rotate;a.$Transform = a.$RotateX;a.$Transform = a.$RotateY;a.$Transform = a.$SkewX;a.$Transform = a.$SkewY;a.$Transform = a.$TranslateX;a.$Transform = a.$TranslateY;a.$Transform = a.$TranslateZ;return G();
	    }f.$StyleSetter = G;f.$StyleSetterEx = ob;f.$GetStyles = function (c, b) {
	      G();var a = {};m(b, function (d, b) {
	        if (Q[b]) a[b] = Q[b](c);
	      });return a;
	    };f.$SetStyles = function (c, b) {
	      var a = G();m(b, function (d, b) {
	        a[b] && a[b](c, d);
	      });
	    };f.$SetStylesEx = function (b, a) {
	      ob();f.$SetStyles(b, a);
	    };var D = new function () {
	      var a = this;function b(d, g) {
	        for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++) for (var k = f[c] = [], b = 0; b < h; b++) {
	          for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];k[b] = e;
	        }return f;
	      }a.$ScaleX = function (b, c) {
	        return a.$ScaleXY(b, c, 0);
	      };a.$ScaleY = function (b, c) {
	        return a.$ScaleXY(b, 0, c);
	      };a.$ScaleXY = function (a, c, d) {
	        return b(a, [[c, 0], [0, d]]);
	      };a.$TransformPoint = function (d, c) {
	        var a = b(d, [[c.x], [c.y]]);return w(a[0][0], a[1][0]);
	      };
	    }();f.$CreateMatrix = function (d, a, c) {
	      var e = b.cos(d),
	          f = b.sin(d);return [[e * a, -f * c], [f * a, e * c]];
	    };f.$GetMatrixOffset = function (d, c, a) {
	      var e = D.$TransformPoint(d, w(-c / 2, -a / 2)),
	          f = D.$TransformPoint(d, w(c / 2, -a / 2)),
	          g = D.$TransformPoint(d, w(c / 2, a / 2)),
	          h = D.$TransformPoint(d, w(-c / 2, a / 2));return w(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2);
	    };var yb = { $Zoom: 1, $ScaleX: 1, $ScaleY: 1, $Rotate: 0, $RotateX: 0, $RotateY: 0, $TranslateX: 0, $TranslateY: 0, $TranslateZ: 0, $SkewX: 0, $SkewY: 0 };f.$FormatEasings = function (b) {
	      var c = b || {};if (b) if (a.$IsFunction(b)) c = { $Default: c };else if (a.$IsFunction(b.$Clip)) c.$Clip = { $Default: b.$Clip };return c;
	    };function tb(c, a) {
	      var b = {};m(c, function (c, d) {
	        var e = c;if (a[d] != k) if (f.$IsNumeric(c)) e = c + a[d];else e = tb(c, a[d]);b[d] = e;
	      });return b;
	    }f.$AddDif = tb;f.$Cast = function (h, i, w, n, y, z, o) {
	      var c = i;if (h) {
	        c = {};for (var g in i) {
	          var A = z[g] || 1,
	              v = y[g] || [0, 1],
	              e = (w - v[0]) / v[1];e = b.min(b.max(e, 0), 1);e = e * A;var u = b.floor(e);if (e != u) e -= u;var l = n.$Default || d.$EaseSwing,
	              m,
	              B = h[g],
	              q = i[g];if (a.$IsNumeric(q)) {
	            l = n[g] || l;var x = l(e);m = B + q * x;
	          } else {
	            m = a.$Extend({ $Offset: {} }, h[g]);a.$Each(q.$Offset || q, function (d, a) {
	              if (n.$Clip) l = n.$Clip[a] || n.$Clip.$Default || l;var c = l(e),
	                  b = d * c;m.$Offset[a] = b;m[a] += b;
	            });
	          }c[g] = m;
	        }var t,
	            f = { $OriginalWidth: o.$OriginalWidth, $OriginalHeight: o.$OriginalHeight };a.$Each(yb, function (d, a) {
	          t = t || i[a];var b = c[a];if (b != k) {
	            if (b != d) f[a] = b;delete c[a];
	          } else if (h[a] != k && h[a] != d) f[a] = h[a];
	        });if (i.$Zoom && f.$Zoom) {
	          f.$ScaleX = f.$Zoom;f.$ScaleY = f.$Zoom;
	        }c.$Transform = f;
	      }if (i.$Clip && o.$Move) {
	        var p = c.$Clip.$Offset,
	            s = (p.$Top || 0) + (p.$Bottom || 0),
	            r = (p.$Left || 0) + (p.$Right || 0);c.$Left = (c.$Left || 0) + r;c.$Top = (c.$Top || 0) + s;c.$Clip.$Left -= r;c.$Clip.$Right -= r;c.$Clip.$Top -= s;c.$Clip.$Bottom -= s;
	      }if (c.$Clip && a.$CanClearClip() && !c.$Clip.$Top && !c.$Clip.$Left && c.$Clip.$Right == o.$OriginalWidth && c.$Clip.$Bottom == o.$OriginalHeight) c.$Clip = j;return c;
	    };
	  }();function m() {
	    var b = this,
	        d = [],
	        c = [];function i(a, b) {
	      d.push({ $EventName: a, $Handler: b });
	    }function h(b, c) {
	      a.$Each(d, function (a, e) {
	        a.$EventName == b && a.$Handler === c && d.splice(e, 1);
	      });
	    }function f() {
	      d = [];
	    }function e() {
	      a.$Each(c, function (b) {
	        a.$RemoveEvent(b.$Obj, b.$EventName, b.$Handler);
	      });c = [];
	    }b.$Listen = function (e, b, d, f) {
	      a.$AddEvent(e, b, d, f);c.push({ $Obj: e, $EventName: b, $Handler: d });
	    };b.$Unlisten = function (e, b, d) {
	      a.$Each(c, function (f, g) {
	        if (f.$Obj === e && f.$EventName == b && f.$Handler === d) {
	          a.$RemoveEvent(e, b, d);c.splice(g, 1);
	        }
	      });
	    };b.$UnlistenAll = e;b.$On = b.addEventListener = i;b.$Off = b.removeEventListener = h;b.$TriggerEvent = function (b) {
	      var c = [].slice.call(arguments, 1);a.$Each(d, function (a) {
	        a.$EventName == b && a.$Handler.apply(g, c);
	      });
	    };b.$Destroy = function () {
	      e();f();for (var a in b) delete b[a];
	    };
	  }var l = g.$JssorAnimator$ = function (y, C, k, P, N, J) {
	    y = y || 0;var d = this,
	        q,
	        M,
	        n,
	        o,
	        v,
	        z = 0,
	        H,
	        I,
	        G,
	        B,
	        x = 0,
	        h = 0,
	        m = 0,
	        D,
	        l,
	        s,
	        f,
	        e,
	        p,
	        w = [],
	        A;function O(a) {
	      f += a;e += a;l += a;s += a;h += a;m += a;x += a;
	    }function u(n) {
	      var g = n;if (p && (g >= e || g <= f)) g = ((g - f) % p + p) % p + f;if (!D || v || h != g) {
	        var i = b.min(g, e);i = b.max(i, f);if (!D || v || i != m) {
	          if (J) {
	            var j = (i - l) / (C || 1);if (k.$Reverse) j = 1 - j;var o = a.$Cast(N, J, j, H, G, I, k);a.$Each(o, function (b, a) {
	              A[a] && A[a](P, b);
	            });
	          }d.$OnInnerOffsetChange(m - l, i - l);m = i;a.$Each(w, function (b, c) {
	            var a = n < h ? w[w.length - c - 1] : b;a.$GoToPosition(m - x);
	          });var r = h,
	              q = m;h = g;D = c;d.$OnPositionChange(r, q);
	        }
	      }
	    }function E(a, c, d) {
	      c && a.$Shift(e);if (!d) {
	        f = b.min(f, a.$GetPosition_OuterBegin() + x);e = b.max(e, a.$GetPosition_OuterEnd() + x);
	      }w.push(a);
	    }var r = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.msRequestAnimationFrame;if (a.$IsBrowserSafari() && a.$BrowserVersion() < 7) r = j;r = r || function (b) {
	      a.$Delay(b, k.$Interval);
	    };function K() {
	      if (q) {
	        var d = a.$GetNow(),
	            e = b.min(d - z, k.$IntervalMax),
	            c = h + e * o;z = d;if (c * o >= n * o) c = n;u(c);if (!v && c * o >= n * o) L(B);else r(K);
	      }
	    }function t(g, i, j) {
	      if (!q) {
	        q = c;v = j;B = i;g = b.max(g, f);g = b.min(g, e);n = g;o = n < h ? -1 : 1;d.$OnStart();z = a.$GetNow();r(K);
	      }
	    }function L(a) {
	      if (q) {
	        v = q = B = i;d.$OnStop();a && a();
	      }
	    }d.$Play = function (a, b, c) {
	      t(a ? h + a : e, b, c);
	    };d.$PlayToPosition = t;d.$PlayToBegin = function (a, b) {
	      t(f, a, b);
	    };d.$PlayToEnd = function (a, b) {
	      t(e, a, b);
	    };d.$Stop = L;d.$Continue = function (a) {
	      t(a);
	    };d.$GetPosition = function () {
	      return h;
	    };d.$GetPlayToPosition = function () {
	      return n;
	    };d.$GetPosition_Display = function () {
	      return m;
	    };d.$GoToPosition = u;d.$GoToBegin = function () {
	      u(f, c);
	    };d.$GoToEnd = function () {
	      u(e, c);
	    };d.$Move = function (a) {
	      u(h + a);
	    };d.$CombineMode = function () {
	      return M;
	    };d.$GetDuration = function () {
	      return C;
	    };d.$IsPlaying = function () {
	      return q;
	    };d.$IsOnTheWay = function () {
	      return h > l && h <= s;
	    };d.$SetLoopLength = function (a) {
	      p = a;
	    };d.$Shift = O;d.$Join = E;d.$Combine = function (a, b) {
	      E(a, 0, b);
	    };d.$Chain = function (a) {
	      E(a, 1);
	    };d.$Expand = function (a) {
	      e += a;
	    };d.$GetPosition_InnerBegin = function () {
	      return l;
	    };d.$GetPosition_InnerEnd = function () {
	      return s;
	    };d.$GetPosition_OuterBegin = function () {
	      return f;
	    };d.$GetPosition_OuterEnd = function () {
	      return e;
	    };d.$OnPositionChange = d.$OnStart = d.$OnStop = d.$OnInnerOffsetChange = a.$EmptyFunction;d.$Version = a.$GetNow();k = a.$Extend({ $Interval: 16, $IntervalMax: 50 }, k);p = k.$LoopLength;A = a.$Extend({}, a.$StyleSetter(), k.$Setter);f = l = y;e = s = y + C;I = k.$Round || {};G = k.$During || {};H = a.$FormatEasings(k.$Easing);
	  };var o = g.$JssorSlideshowFormations$ = new function () {
	    var h = this,
	        d = 0,
	        a = 1,
	        f = 2,
	        e = 3,
	        s = 1,
	        r = 2,
	        t = 4,
	        q = 8,
	        w = 256,
	        x = 512,
	        v = 1024,
	        u = 2048,
	        j = u + s,
	        i = u + r,
	        o = x + s,
	        m = x + r,
	        n = w + t,
	        k = w + q,
	        l = v + t,
	        p = v + q;function y(a) {
	      return (a & r) == r;
	    }function z(a) {
	      return (a & t) == t;
	    }function g(b, a, c) {
	      c.push(a);b[a] = b[a] || [];b[a].push(c);
	    }h.$FormationStraight = function (f) {
	      for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.$Count, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++) for (a = 0; a < d; a++) {
	        switch (s) {case j:
	            c = h - (a * e + (q - b));break;case l:
	            c = h - (b * d + (p - a));break;case o:
	            c = h - (a * e + b);case n:
	            c = h - (b * d + a);break;case i:
	            c = a * e + b;break;case k:
	            c = b * d + (p - a);break;case m:
	            c = a * e + (q - b);break;default:
	            c = b * d + a;}g(r, c, [b, a]);
	      }return r;
	    };h.$FormationSwirl = function (q) {
	      var x = q.$Cols,
	          y = q.$Rows,
	          B = q.$Assembly,
	          w = q.$Count,
	          A = [],
	          z = [],
	          u = 0,
	          b = 0,
	          h = 0,
	          r = x - 1,
	          s = y - 1,
	          t,
	          p,
	          v = 0;switch (B) {case j:
	          b = r;h = 0;p = [f, a, e, d];break;case l:
	          b = 0;h = s;p = [d, e, a, f];break;case o:
	          b = r;h = s;p = [e, a, f, d];break;case n:
	          b = r;h = s;p = [a, e, d, f];break;case i:
	          b = 0;h = 0;p = [f, d, e, a];break;case k:
	          b = r;h = 0;p = [a, f, d, e];break;case m:
	          b = 0;h = s;p = [e, d, f, a];break;default:
	          b = 0;h = 0;p = [d, f, a, e];}u = 0;while (u < w) {
	        t = h + "," + b;if (b >= 0 && b < x && h >= 0 && h < y && !z[t]) {
	          z[t] = c;g(A, u++, [h, b]);
	        } else switch (p[v++ % p.length]) {case d:
	            b--;break;case f:
	            h--;break;case a:
	            b++;break;case e:
	            h++;}switch (p[v % p.length]) {case d:
	            b++;break;case f:
	            h++;break;case a:
	            b--;break;case e:
	            h--;}
	      }return A;
	    };h.$FormationZigZag = function (p) {
	      var w = p.$Cols,
	          x = p.$Rows,
	          z = p.$Assembly,
	          v = p.$Count,
	          t = [],
	          u = 0,
	          b = 0,
	          c = 0,
	          q = w - 1,
	          r = x - 1,
	          y,
	          h,
	          s = 0;switch (z) {case j:
	          b = q;c = 0;h = [f, a, e, a];break;case l:
	          b = 0;c = r;h = [d, e, a, e];break;case o:
	          b = q;c = r;h = [e, a, f, a];break;case n:
	          b = q;c = r;h = [a, e, d, e];break;case i:
	          b = 0;c = 0;h = [f, d, e, d];break;case k:
	          b = q;c = 0;h = [a, f, d, f];break;case m:
	          b = 0;c = r;h = [e, d, f, d];break;default:
	          b = 0;c = 0;h = [d, f, a, f];}u = 0;while (u < v) {
	        y = c + "," + b;if (b >= 0 && b < w && c >= 0 && c < x && typeof t[y] == "undefined") {
	          g(t, u++, [c, b]);switch (h[s % h.length]) {case d:
	              b++;break;case f:
	              c++;break;case a:
	              b--;break;case e:
	              c--;}
	        } else {
	          switch (h[s++ % h.length]) {case d:
	              b--;break;case f:
	              c--;break;case a:
	              b++;break;case e:
	              c++;}switch (h[s++ % h.length]) {case d:
	              b++;break;case f:
	              c++;break;case a:
	              b--;break;case e:
	              c--;}
	        }
	      }return t;
	    };h.$FormationStraightStairs = function (q) {
	      var u = q.$Cols,
	          v = q.$Rows,
	          e = q.$Assembly,
	          t = q.$Count,
	          r = [],
	          s = 0,
	          c = 0,
	          d = 0,
	          f = u - 1,
	          h = v - 1,
	          x = t - 1;switch (e) {case j:case m:case o:case i:
	          var a = 0,
	              b = 0;break;case k:case l:case n:case p:
	          var a = f,
	              b = 0;break;default:
	          e = p;var a = f,
	              b = 0;}c = a;d = b;while (s < t) {
	        if (z(e) || y(e)) g(r, x - s++, [d, c]);else g(r, s++, [d, c]);switch (e) {case j:case m:
	            c--;d++;break;case o:case i:
	            c++;d--;break;case k:case l:
	            c--;d--;break;case p:case n:default:
	            c++;d++;}if (c < 0 || d < 0 || c > f || d > h) {
	          switch (e) {case j:case m:
	              a++;break;case k:case l:case o:case i:
	              b++;break;case p:case n:default:
	              a--;}if (a < 0 || b < 0 || a > f || b > h) {
	            switch (e) {case j:case m:
	                a = f;b++;break;case o:case i:
	                b = h;a++;break;case k:case l:
	                b = h;a--;break;case p:case n:default:
	                a = 0;b++;}if (b > h) b = h;else if (b < 0) b = 0;else if (a > f) a = f;else if (a < 0) a = 0;
	          }d = b;c = a;
	        }
	      }return r;
	    };h.$FormationSquare = function (i) {
	      var a = i.$Cols || 1,
	          c = i.$Rows || 1,
	          j = [],
	          d,
	          e,
	          f,
	          h,
	          k;f = a < c ? (c - a) / 2 : 0;h = a > c ? (a - c) / 2 : 0;k = b.round(b.max(a / 2, c / 2)) + 1;for (d = 0; d < a; d++) for (e = 0; e < c; e++) g(j, k - b.min(d + 1 + f, e + 1 + h, a - d + f, c - e + h), [e, d]);return j;
	    };h.$FormationRectangle = function (f) {
	      var d = f.$Cols || 1,
	          e = f.$Rows || 1,
	          h = [],
	          a,
	          c,
	          i;i = b.round(b.min(d / 2, e / 2)) + 1;for (a = 0; a < d; a++) for (c = 0; c < e; c++) g(h, i - b.min(a + 1, c + 1, d - a, e - c), [c, a]);return h;
	    };h.$FormationRandom = function (d) {
	      for (var e = [], a, c = 0; c < d.$Rows; c++) for (a = 0; a < d.$Cols; a++) g(e, b.ceil(1e5 * b.random()) % 13, [c, a]);return e;
	    };h.$FormationCircle = function (d) {
	      for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++) for (a = 0; a < f; a++) g(h, b.round(b.sqrt(b.pow(c - i, 2) + b.pow(a - j, 2))), [a, c]);return h;
	    };h.$FormationCross = function (d) {
	      for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++) for (a = 0; a < f; a++) g(h, b.round(b.min(b.abs(c - i), b.abs(a - j))), [a, c]);return h;
	    };h.$FormationRectangleCross = function (f) {
	      for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = b.max(d, e) + 1, c = 0; c < h; c++) for (a = 0; a < i; a++) g(j, b.round(k - b.max(d - b.abs(c - d), e - b.abs(a - e))) - 1, [a, c]);return j;
	    };
	  }();g.$JssorSlideshowRunner$ = function (n, s, q, t, y) {
	    var f = this,
	        u,
	        g,
	        e,
	        x = 0,
	        w = t.$TransitionsOrder,
	        r,
	        h = 8;function k(g, f) {
	      var e = { $Interval: f, $Duration: 1, $Delay: 0, $Cols: 1, $Rows: 1, $Opacity: 0, $Zoom: 0, $Clip: 0, $Move: i, $SlideOut: i, $Reverse: i, $Formation: o.$FormationRandom, $Assembly: 1032, $ChessMode: { $Column: 0, $Row: 0 }, $Easing: d.$EaseSwing, $Round: {}, $Blocks: [], $During: {} };a.$Extend(e, g);e.$Count = e.$Cols * e.$Rows;e.$Easing = a.$FormatEasings(e.$Easing);e.$FramesCount = b.ceil(e.$Duration / e.$Interval);e.$GetBlocks = function (b, a) {
	        b /= e.$Cols;a /= e.$Rows;var f = b + "x" + a;if (!e.$Blocks[f]) {
	          e.$Blocks[f] = { $Width: b, $Height: a };for (var c = 0; c < e.$Cols; c++) for (var d = 0; d < e.$Rows; d++) e.$Blocks[f][d + "," + c] = { $Top: d * a, $Right: c * b + b, $Bottom: d * a + a, $Left: c * b };
	        }return e.$Blocks[f];
	      };if (e.$Brother) {
	        e.$Brother = k(e.$Brother, f);e.$SlideOut = c;
	      }return e;
	    }function p(A, h, d, v, n, l) {
	      var y = this,
	          t,
	          u = {},
	          j = {},
	          m = [],
	          f,
	          e,
	          r,
	          p = d.$ChessMode.$Column || 0,
	          q = d.$ChessMode.$Row || 0,
	          g = d.$GetBlocks(n, l),
	          o = B(d),
	          C = o.length - 1,
	          s = d.$Duration + d.$Delay * C,
	          w = v + s,
	          k = d.$SlideOut,
	          x;w += 50;function B(a) {
	        var b = a.$Formation(a);return a.$Reverse ? b.reverse() : b;
	      }y.$EndTime = w;y.$ShowFrame = function (c) {
	        c -= v;var e = c < s;if (e || x) {
	          x = e;if (!k) c = s - c;var f = b.ceil(c / d.$Interval);a.$Each(j, function (c, e) {
	            var d = b.max(f, c.$Min);d = b.min(d, c.length - 1);if (c.$LastFrameIndex != d) {
	              if (!c.$LastFrameIndex && !k) a.$ShowElement(m[e]);else d == c.$Max && k && a.$HideElement(m[e]);c.$LastFrameIndex = d;a.$SetStylesEx(m[e], c[d]);
	            }
	          });
	        }
	      };h = a.$CloneNode(h);if (a.$IsBrowserIe9Earlier()) {
	        var D = !h["no-image"],
	            z = a.$FindChildrenByTag(h);a.$Each(z, function (b) {
	          (D || b["jssor-slider"]) && a.$CssOpacity(b, a.$CssOpacity(b), c);
	        });
	      }a.$Each(o, function (h, m) {
	        a.$Each(h, function (G) {
	          var K = G[0],
	              J = G[1],
	              v = K + "," + J,
	              o = i,
	              s = i,
	              x = i;if (p && J % 2) {
	            if (p & 3) o = !o;if (p & 12) s = !s;if (p & 16) x = !x;
	          }if (q && K % 2) {
	            if (q & 3) o = !o;if (q & 12) s = !s;if (q & 16) x = !x;
	          }d.$Top = d.$Top || d.$Clip & 4;d.$Bottom = d.$Bottom || d.$Clip & 8;d.$Left = d.$Left || d.$Clip & 1;d.$Right = d.$Right || d.$Clip & 2;var C = s ? d.$Bottom : d.$Top,
	              z = s ? d.$Top : d.$Bottom,
	              B = o ? d.$Right : d.$Left,
	              A = o ? d.$Left : d.$Right;d.$Clip = C || z || B || A;r = {};e = { $Top: 0, $Left: 0, $Opacity: 1, $Width: n, $Height: l };f = a.$Extend({}, e);t = a.$Extend({}, g[v]);if (d.$Opacity) e.$Opacity = 2 - d.$Opacity;if (d.$ZIndex) {
	            e.$ZIndex = d.$ZIndex;f.$ZIndex = 0;
	          }var I = d.$Cols * d.$Rows > 1 || d.$Clip;if (d.$Zoom || d.$Rotate) {
	            var H = c;if (a.$IsBrowserIe9Earlier()) if (d.$Cols * d.$Rows > 1) H = i;else I = i;if (H) {
	              e.$Zoom = d.$Zoom ? d.$Zoom - 1 : 1;f.$Zoom = 1;if (a.$IsBrowserIe9Earlier() || a.$IsBrowserOpera()) e.$Zoom = b.min(e.$Zoom, 2);var N = d.$Rotate || 0;e.$Rotate = N * 360 * (x ? -1 : 1);f.$Rotate = 0;
	            }
	          }if (I) {
	            var h = t.$Offset = {};if (d.$Clip) {
	              var w = d.$ScaleClip || 1;if (C && z) {
	                h.$Top = g.$Height / 2 * w;h.$Bottom = -h.$Top;
	              } else if (C) h.$Bottom = -g.$Height * w;else if (z) h.$Top = g.$Height * w;if (B && A) {
	                h.$Left = g.$Width / 2 * w;h.$Right = -h.$Left;
	              } else if (B) h.$Right = -g.$Width * w;else if (A) h.$Left = g.$Width * w;
	            }r.$Clip = t;f.$Clip = g[v];
	          }var L = o ? 1 : -1,
	              M = s ? 1 : -1;if (d.x) e.$Left += n * d.x * L;if (d.y) e.$Top += l * d.y * M;a.$Each(e, function (b, c) {
	            if (a.$IsNumeric(b)) if (b != f[c]) r[c] = b - f[c];
	          });u[v] = k ? f : e;var D = d.$FramesCount,
	              y = b.round(m * d.$Delay / d.$Interval);j[v] = new Array(y);j[v].$Min = y;j[v].$Max = y + D - 1;for (var F = 0; F <= D; F++) {
	            var E = a.$Cast(f, r, F / D, d.$Easing, d.$During, d.$Round, { $Move: d.$Move, $OriginalWidth: n, $OriginalHeight: l });E.$ZIndex = E.$ZIndex || 1;j[v].push(E);
	          }
	        });
	      });o.reverse();a.$Each(o, function (b) {
	        a.$Each(b, function (c) {
	          var f = c[0],
	              e = c[1],
	              d = f + "," + e,
	              b = h;if (e || f) b = a.$CloneNode(h);a.$SetStyles(b, u[d]);a.$CssOverflow(b, "hidden");a.$CssPosition(b, "absolute");A.$AddClipElement(b);m[d] = b;a.$ShowElement(b, !k);
	        });
	      });
	    }function v() {
	      var a = this,
	          b = 0;l.call(a, 0, u);a.$OnPositionChange = function (c, a) {
	        if (a - b > h) {
	          b = a;e && e.$ShowFrame(a);g && g.$ShowFrame(a);
	        }
	      };a.$Transition = r;
	    }f.$GetTransition = function () {
	      var a = 0,
	          c = t.$Transitions,
	          d = c.length;if (w) a = x++ % d;else a = b.floor(b.random() * d);c[a] && (c[a].$Index = a);return c[a];
	    };f.$Initialize = function (w, x, j, l, a) {
	      r = a;a = k(a, h);var i = l.$Item,
	          d = j.$Item;i["no-image"] = !l.$Image;d["no-image"] = !j.$Image;var m = i,
	          o = d,
	          v = a,
	          c = a.$Brother || k({}, h);if (!a.$SlideOut) {
	        m = d;o = i;
	      }var t = c.$Shift || 0;g = new p(n, o, c, b.max(t - c.$Interval, 0), s, q);e = new p(n, m, v, b.max(c.$Interval - t, 0), s, q);g.$ShowFrame(0);e.$ShowFrame(0);u = b.max(g.$EndTime, e.$EndTime);f.$Index = w;
	    };f.$Clear = function () {
	      n.$Clear();g = j;e = j;
	    };f.$GetProcessor = function () {
	      var a = j;if (e) a = new v();return a;
	    };if (a.$IsBrowserIe9Earlier() || a.$IsBrowserOpera() || y && a.$WebKitVersion() < 537) h = 16;m.call(f);l.call(f, -1e7, 1e7);
	  };var h = g.$JssorSlider$ = function (q, fc) {
	    var o = this;function Ec() {
	      var a = this;l.call(a, -1e8, 2e8);a.$GetCurrentSlideInfo = function () {
	        var c = a.$GetPosition_Display(),
	            d = b.floor(c),
	            f = t(d),
	            e = c - b.floor(c);return { $Index: f, $VirtualIndex: d, $Position: e };
	      };a.$OnPositionChange = function (d, a) {
	        var e = b.floor(a);if (e != a && a > d) e++;Ub(e, c);o.$TriggerEvent(h.$EVT_POSITION_CHANGE, t(a), t(d), a, d);
	      };
	    }function Dc() {
	      var b = this;l.call(b, 0, 0, { $LoopLength: r });a.$Each(C, function (a) {
	        D & 1 && a.$SetLoopLength(r);b.$Chain(a);a.$Shift(fb / bc);
	      });
	    }function Cc() {
	      var a = this,
	          b = Tb.$Elmt;l.call(a, -1, 2, { $Easing: d.$EaseLinear, $Setter: { $Position: Zb }, $LoopLength: r }, b, { $Position: 1 }, { $Position: -2 });a.$Wrapper = b;
	    }function qc(n, m) {
	      var a = this,
	          d,
	          e,
	          g,
	          k,
	          b;l.call(a, -1e8, 2e8, { $IntervalMax: 100 });a.$OnStart = function () {
	        O = c;R = j;o.$TriggerEvent(h.$EVT_SWIPE_START, t(w.$GetPosition()), w.$GetPosition());
	      };a.$OnStop = function () {
	        O = i;k = i;var a = w.$GetCurrentSlideInfo();o.$TriggerEvent(h.$EVT_SWIPE_END, t(w.$GetPosition()), w.$GetPosition());!a.$Position && Gc(a.$VirtualIndex, s);
	      };a.$OnPositionChange = function (i, h) {
	        var a;if (k) a = b;else {
	          a = e;if (g) {
	            var c = h / g;a = f.$SlideEasing(c) * (e - d) + d;
	          }
	        }w.$GoToPosition(a);
	      };a.$PlayCarousel = function (b, f, c, h) {
	        d = b;e = f;g = c;w.$GoToPosition(b);a.$GoToPosition(0);a.$PlayToPosition(c, h);
	      };a.$StandBy = function (d) {
	        k = c;b = d;a.$Play(d, j, c);
	      };a.$SetStandByPosition = function (a) {
	        b = a;
	      };a.$MoveCarouselTo = function (a) {
	        w.$GoToPosition(a);
	      };w = new Ec();w.$Combine(n);w.$Combine(m);
	    }function rc() {
	      var c = this,
	          b = Xb();a.$CssZIndex(b, 0);a.$Css(b, "pointerEvents", "none");c.$Elmt = b;c.$AddClipElement = function (c) {
	        a.$AppendChild(b, c);a.$ShowElement(b);
	      };c.$Clear = function () {
	        a.$HideElement(b);a.$Empty(b);
	      };
	    }function Bc(k, e) {
	      var d = this,
	          q,
	          H,
	          x,
	          n,
	          y = [],
	          w,
	          B,
	          W,
	          G,
	          Q,
	          F,
	          g,
	          v,
	          p,
	          eb;l.call(d, -u, u + 1, { $SlideItemAnimator: c });function E(b) {
	        q && q.$Revert();T(k, b, 0);F = c;q = new I.$Class(k, I, a.$ParseFloat(a.$AttributeEx(k, "idle")) || pc);q.$GoToPosition(0);
	      }function Y() {
	        q.$Version < I.$Version && E();
	      }function N(p, r, m) {
	        if (!G) {
	          G = c;if (n && m) {
	            var g = m.width,
	                b = m.height,
	                l = g,
	                k = b;if (g && b && f.$FillMode) {
	              if (f.$FillMode & 3 && (!(f.$FillMode & 4) || g > K || b > J)) {
	                var j = i,
	                    q = K / J * b / g;if (f.$FillMode & 1) j = q > 1;else if (f.$FillMode & 2) j = q < 1;l = j ? g * J / b : K;k = j ? J : b * K / g;
	              }a.$CssWidth(n, l);a.$CssHeight(n, k);a.$CssTop(n, (J - k) / 2);a.$CssLeft(n, (K - l) / 2);
	            }a.$CssPosition(n, "absolute");o.$TriggerEvent(h.$EVT_LOAD_END, e);
	          }
	        }a.$HideElement(r);p && p(d);
	      }function X(b, c, f, g) {
	        if (g == R && s == e && P) if (!Fc) {
	          var a = t(b);A.$Initialize(a, e, c, d, f);c.$HideContentForSlideshow();U.$Shift(a - U.$GetPosition_OuterBegin() - 1);U.$GoToPosition(a);z.$PlayCarousel(b, b, 0);
	        }
	      }function ab(b) {
	        if (b == R && s == e) {
	          if (!g) {
	            var a = j;if (A) if (A.$Index == e) a = A.$GetProcessor();else A.$Clear();Y();g = new yc(k, e, a, q);g.$SetPlayer(p);
	          }!g.$IsPlaying() && g.$Replay();
	        }
	      }function S(c, h, l) {
	        if (c == e) {
	          if (c != h) C[h] && C[h].$ParkOut();else !l && g && g.$AdjustIdleOnPark();p && p.$Enable();var m = R = a.$GetNow();d.$LoadImage(a.$CreateCallback(j, ab, m));
	        } else {
	          var k = b.min(e, c),
	              i = b.max(e, c),
	              o = b.min(i - k, k + r - i),
	              n = u + f.$LazyLoading - 1;(!Q || o <= n) && d.$LoadImage();
	        }
	      }function bb() {
	        if (s == e && g) {
	          g.$Stop();p && p.$Quit();p && p.$Disable();g.$OpenSlideshowPanel();
	        }
	      }function db() {
	        s == e && g && g.$Stop();
	      }function Z(a) {
	        !M && o.$TriggerEvent(h.$EVT_CLICK, e, a);
	      }function O() {
	        p = v.pInstance;g && g.$SetPlayer(p);
	      }d.$LoadImage = function (d, b) {
	        b = b || x;if (y.length && !G) {
	          a.$ShowElement(b);if (!W) {
	            W = c;o.$TriggerEvent(h.$EVT_LOAD_START, e);a.$Each(y, function (b) {
	              if (!a.$Attribute(b, "src")) {
	                b.src = a.$AttributeEx(b, "src2");a.$CssDisplay(b, b["display-origin"]);
	              }
	            });
	          }a.$LoadImages(y, n, a.$CreateCallback(j, N, d, b));
	        } else N(d, b);
	      };d.$GoForNextSlide = function () {
	        var h = e;if (f.$AutoPlaySteps < 0) h -= r;var c = h + f.$AutoPlaySteps * wc;if (D & 2) c = t(c);if (!(D & 1)) c = b.max(0, b.min(c, r - u));if (c != e) {
	          if (A) {
	            var d = A.$GetTransition(r);if (d) {
	              var i = R = a.$GetNow(),
	                  g = C[t(c)];return g.$LoadImage(a.$CreateCallback(j, X, c, g, d, i), x);
	            }
	          }nb(c);
	        }
	      };d.$TryActivate = function () {
	        S(e, e, c);
	      };d.$ParkOut = function () {
	        p && p.$Quit();p && p.$Disable();d.$UnhideContentForSlideshow();g && g.$Abort();g = j;E();
	      };d.$StampSlideItemElements = function (a) {
	        a = eb + "_" + a;
	      };d.$HideContentForSlideshow = function () {
	        a.$HideElement(k);
	      };d.$UnhideContentForSlideshow = function () {
	        a.$ShowElement(k);
	      };d.$EnablePlayer = function () {
	        p && p.$Enable();
	      };function T(b, d, e) {
	        if (a.$Attribute(b, "jssor-slider")) return;if (!F) {
	          if (b.tagName == "IMG") {
	            y.push(b);if (!a.$Attribute(b, "src")) {
	              Q = c;b["display-origin"] = a.$CssDisplay(b);a.$HideElement(b);
	            }
	          }a.$IsBrowserIe9Earlier() && a.$CssZIndex(b, (a.$CssZIndex(b) || 0) + 1);
	        }var f = a.$Children(b);a.$Each(f, function (f) {
	          var h = f.tagName,
	              j = a.$AttributeEx(f, "u");if (j == "player" && !v) {
	            v = f;if (v.pInstance) O();else a.$AddEvent(v, "dataavailable", O);
	          }if (j == "caption") {
	            if (d) {
	              a.$CssTransformOrigin(f, a.$AttributeEx(f, "to"));a.$CssBackfaceVisibility(f, a.$AttributeEx(f, "bf"));a.$CssTransformStyle(f, "preserve-3d");
	            } else if (!a.$IsBrowserIE()) {
	              var g = a.$CloneNode(f, i, c);a.$InsertBefore(g, f, b);a.$RemoveElement(f, b);f = g;d = c;
	            }
	          } else if (!F && !e && !n) {
	            if (h == "A") {
	              if (a.$AttributeEx(f, "u") == "image") n = a.$FindChildByTag(f, "IMG");else n = a.$FindChild(f, "image", c);if (n) {
	                w = f;a.$CssDisplay(w, "block");a.$SetStyles(w, V);B = a.$CloneNode(w, c);a.$CssPosition(w, "relative");a.$CssOpacity(B, 0);a.$Css(B, "backgroundColor", "#000");
	              }
	            } else if (h == "IMG" && a.$AttributeEx(f, "u") == "image") n = f;if (n) {
	              n.border = 0;a.$SetStyles(n, V);
	            }
	          }T(f, d, e + 1);
	        });
	      }d.$OnInnerOffsetChange = function (c, b) {
	        var a = u - b;Zb(H, a);
	      };d.$Index = e;m.call(d);a.$CssPerspective(k, a.$AttributeEx(k, "p"));a.$CssPerspectiveOrigin(k, a.$AttributeEx(k, "po"));var L = a.$FindChild(k, "thumb", c);if (L) {
	        d.$Thumb = a.$CloneNode(L);a.$HideElement(L);
	      }a.$ShowElement(k);x = a.$CloneNode(cb);a.$CssZIndex(x, 1e3);a.$AddEvent(k, "click", Z);E(c);d.$Image = n;d.$Link = B;d.$Item = k;d.$Wrapper = H = k;a.$AppendChild(H, x);o.$On(203, S);o.$On(28, db);o.$On(24, bb);
	    }function yc(y, f, p, q) {
	      var b = this,
	          m = 0,
	          u = 0,
	          g,
	          j,
	          e,
	          d,
	          k,
	          t,
	          r,
	          n = C[f];l.call(b, 0, 0);function v() {
	        a.$Empty(N);dc && k && n.$Link && a.$AppendChild(N, n.$Link);a.$ShowElement(N, !k && n.$Image);
	      }function w() {
	        b.$Replay();
	      }function x(a) {
	        r = a;b.$Stop();b.$Replay();
	      }b.$Replay = function () {
	        var a = b.$GetPosition_Display();if (!B && !O && !r && s == f) {
	          if (!a) {
	            if (g && !k) {
	              k = c;b.$OpenSlideshowPanel(c);o.$TriggerEvent(h.$EVT_SLIDESHOW_START, f, m, u, g, d);
	            }v();
	          }var i,
	              p = h.$EVT_STATE_CHANGE;if (a != d) if (a == e) i = d;else if (a == j) i = e;else if (!a) i = j;else i = b.$GetPlayToPosition();o.$TriggerEvent(p, f, a, m, j, e, d);var l = P && (!E || F);if (a == d) (e != d && !(E & 12) || l) && n.$GoForNextSlide();else (l || a != e) && b.$PlayToPosition(i, w);
	        }
	      };b.$AdjustIdleOnPark = function () {
	        e == d && e == b.$GetPosition_Display() && b.$GoToPosition(j);
	      };b.$Abort = function () {
	        A && A.$Index == f && A.$Clear();var a = b.$GetPosition_Display();a < d && o.$TriggerEvent(h.$EVT_STATE_CHANGE, f, -a - 1, m, j, e, d);
	      };b.$OpenSlideshowPanel = function (b) {
	        p && a.$CssOverflow(hb, b && p.$Transition.$Outside ? "" : "hidden");
	      };b.$OnInnerOffsetChange = function (b, a) {
	        if (k && a >= g) {
	          k = i;v();n.$UnhideContentForSlideshow();A.$Clear();o.$TriggerEvent(h.$EVT_SLIDESHOW_END, f, m, u, g, d);
	        }o.$TriggerEvent(h.$EVT_PROGRESS_CHANGE, f, a, m, j, e, d);
	      };b.$SetPlayer = function (a) {
	        if (a && !t) {
	          t = a;a.$On($JssorPlayer$.$EVT_SWITCH, x);
	        }
	      };p && b.$Chain(p);g = b.$GetPosition_OuterEnd();b.$Chain(q);j = g + q.$IdleBegin;e = g + q.$IdleEnd;d = b.$GetPosition_OuterEnd();
	    }function Zb(g, f) {
	      var e = x > 0 ? x : gb,
	          c = Bb * f * (e & 1),
	          d = Cb * f * (e >> 1 & 1);c = b.round(c);d = b.round(d);a.$CssLeft(g, c);a.$CssTop(g, d);
	    }function Pb() {
	      pb = O;Kb = z.$GetPlayToPosition();G = w.$GetPosition();
	    }function gc() {
	      Pb();if (B || !F && E & 12) {
	        z.$Stop();o.$TriggerEvent(h.$EVT_FREEZE);
	      }
	    }function ec(e) {
	      if (!B && (F || !(E & 12)) && !z.$IsPlaying()) {
	        var c = w.$GetPosition(),
	            a = b.ceil(G);if (e && b.abs(H) >= f.$MinDragOffsetToSlide) {
	          a = b.ceil(c);a += eb;
	        }if (!(D & 1)) a = b.min(r - u, b.max(a, 0));var d = b.abs(a - c);d = 1 - b.pow(1 - d, 5);if (!M && pb) z.$Continue(Kb);else if (c == a) {
	          tb.$EnablePlayer();tb.$TryActivate();
	        } else z.$PlayCarousel(c, a, d * Vb);
	      }
	    }function Ib(b) {
	      !a.$AttributeEx(a.$EvtSrc(b), "nodrag") && a.$CancelEvent(b);
	    }function uc(a) {
	      Yb(a, 1);
	    }function Yb(b, d) {
	      b = a.$GetEvent(b);var k = a.$EvtSrc(b);if (!L && !a.$AttributeEx(k, "nodrag") && vc() && (!d || b.touches.length == 1)) {
	        B = c;Ab = i;R = j;a.$AddEvent(e, d ? "touchmove" : "mousemove", Db);a.$GetNow();M = 0;gc();if (!pb) x = 0;if (d) {
	          var g = b.touches[0];vb = g.clientX;wb = g.clientY;
	        } else {
	          var f = a.$MousePosition(b);vb = f.x;wb = f.y;
	        }H = 0;bb = 0;eb = 0;o.$TriggerEvent(h.$EVT_DRAG_START, t(G), G, b);
	      }
	    }function Db(e) {
	      if (B) {
	        e = a.$GetEvent(e);var f;if (e.type != "mousemove") {
	          var l = e.touches[0];f = { x: l.clientX, y: l.clientY };
	        } else f = a.$MousePosition(e);if (f) {
	          var j = f.x - vb,
	              k = f.y - wb;if (b.floor(G) != G) x = x || gb & L;if ((j || k) && !x) {
	            if (L == 3) if (b.abs(k) > b.abs(j)) x = 2;else x = 1;else x = L;if (jb && x == 1 && b.abs(k) - b.abs(j) > 3) Ab = c;
	          }if (x) {
	            var d = k,
	                i = Cb;if (x == 1) {
	              d = j;i = Bb;
	            }if (!(D & 1)) {
	              if (d > 0) {
	                var g = i * s,
	                    h = d - g;if (h > 0) d = g + b.sqrt(h) * 5;
	              }if (d < 0) {
	                var g = i * (r - u - s),
	                    h = -d - g;if (h > 0) d = -g - b.sqrt(h) * 5;
	              }
	            }if (H - bb < -2) eb = 0;else if (H - bb > 2) eb = -1;bb = H;H = d;sb = G - H / i / (Z || 1);if (H && x && !Ab) {
	              a.$CancelEvent(e);if (!O) z.$StandBy(sb);else z.$SetStandByPosition(sb);
	            }
	          }
	        }
	      }
	    }function mb() {
	      sc();if (B) {
	        B = i;a.$GetNow();a.$RemoveEvent(e, "mousemove", Db);a.$RemoveEvent(e, "touchmove", Db);M = H;z.$Stop();var b = w.$GetPosition();o.$TriggerEvent(h.$EVT_DRAG_END, t(b), b, t(G), G);E & 12 && Pb();ec(c);
	      }
	    }function kc(c) {
	      if (M) {
	        a.$StopEvent(c);var b = a.$EvtSrc(c);while (b && v !== b) {
	          b.tagName == "A" && a.$CancelEvent(c);try {
	            b = b.parentNode;
	          } catch (d) {
	            break;
	          }
	        }
	      }
	    }function oc(a) {
	      C[s];s = t(a);tb = C[s];Ub(a);return s;
	    }function Gc(a, b) {
	      x = 0;oc(a);o.$TriggerEvent(h.$EVT_PARK, t(a), b);
	    }function Ub(b, c) {
	      yb = b;a.$Each(S, function (a) {
	        a.$SetCurrentIndex(t(b), b, c);
	      });
	    }function vc() {
	      var b = h.$DragRegistry || 0,
	          a = Y;if (jb) a & 1 && (a &= 1);h.$DragRegistry |= a;return L = a & ~b;
	    }function sc() {
	      if (L) {
	        h.$DragRegistry &= ~Y;L = 0;
	      }
	    }function Xb() {
	      var b = a.$CreateDiv();a.$SetStyles(b, V);a.$CssPosition(b, "absolute");return b;
	    }function t(a) {
	      return (a % r + r) % r;
	    }function lc(a, c) {
	      if (c) if (!D) {
	        a = b.min(b.max(a + yb, 0), r - u);c = i;
	      } else if (D & 2) {
	        a = t(a + yb);c = i;
	      }nb(a, f.$SlideDuration, c);
	    }function zb() {
	      a.$Each(S, function (a) {
	        a.$Show(a.$Options.$ChanceToShow <= F);
	      });
	    }function ic() {
	      if (!F) {
	        F = 1;zb();if (!B) {
	          E & 12 && ec();E & 3 && C[s].$TryActivate();
	        }
	      }
	    }function hc() {
	      if (F) {
	        F = 0;zb();B || !(E & 12) || gc();
	      }
	    }function jc() {
	      V = { $Width: K, $Height: J, $Top: 0, $Left: 0 };a.$Each(T, function (b) {
	        a.$SetStyles(b, V);a.$CssPosition(b, "absolute");a.$CssOverflow(b, "hidden");a.$HideElement(b);
	      });a.$SetStyles(cb, V);
	    }function lb(b, a) {
	      nb(b, a, c);
	    }function nb(g, e, l) {
	      if (Rb && (!B && (F || !(E & 12)) || f.$NaviQuitDrag)) {
	        O = c;B = i;z.$Stop();if (e == k) e = Vb;var d = Eb.$GetPosition_Display(),
	            a = g;if (l) {
	          a = d + g;if (g > 0) a = b.ceil(a);else a = b.floor(a);
	        }if (D & 2) a = t(a);if (!(D & 1)) a = b.max(0, b.min(a, r - u));var j = (a - d) % r;a = d + j;var h = d == a ? 0 : e * b.abs(j);h = b.min(h, e * u * 1.5);z.$PlayCarousel(d, a, h || 1);
	      }
	    }o.$PlayTo = nb;o.$GoTo = function (a) {
	      w.$GoToPosition(a);
	    };o.$Next = function () {
	      lb(1);
	    };o.$Prev = function () {
	      lb(-1);
	    };o.$Pause = function () {
	      P = i;
	    };o.$Play = function () {
	      if (!P) {
	        P = c;C[s] && C[s].$TryActivate();
	      }
	    };o.$SetSlideshowTransitions = function (a) {
	      f.$SlideshowOptions.$Transitions = a;
	    };o.$SetCaptionTransitions = function (b) {
	      I.$Transitions = b;I.$Version = a.$GetNow();
	    };o.$SlidesCount = function () {
	      return T.length;
	    };o.$CurrentIndex = function () {
	      return s;
	    };o.$IsAutoPlaying = function () {
	      return P;
	    };o.$IsDragging = function () {
	      return B;
	    };o.$IsSliding = function () {
	      return O;
	    };o.$IsMouseOver = function () {
	      return !F;
	    };o.$LastDragSucceded = function () {
	      return M;
	    };function X() {
	      return a.$CssWidth(y || q);
	    }function ib() {
	      return a.$CssHeight(y || q);
	    }o.$OriginalWidth = o.$GetOriginalWidth = X;o.$OriginalHeight = o.$GetOriginalHeight = ib;function Gb(c, d) {
	      if (c == k) return a.$CssWidth(q);if (!y) {
	        var b = a.$CreateDiv(e);a.$ClassName(b, a.$ClassName(q));a.$CssCssText(b, a.$CssCssText(q));a.$CssDisplay(b, "block");a.$CssPosition(b, "relative");a.$CssTop(b, 0);a.$CssLeft(b, 0);a.$CssOverflow(b, "visible");y = a.$CreateDiv(e);a.$CssPosition(y, "absolute");a.$CssTop(y, 0);a.$CssLeft(y, 0);a.$CssWidth(y, a.$CssWidth(q));a.$CssHeight(y, a.$CssHeight(q));a.$CssTransformOrigin(y, "0 0");a.$AppendChild(y, b);var h = a.$Children(q);a.$AppendChild(q, y);a.$Css(q, "backgroundImage", "");a.$Each(h, function (c) {
	          a.$AppendChild(a.$AttributeEx(c, "noscale") ? q : b, c);a.$AttributeEx(c, "autocenter") && Lb.push(c);
	        });
	      }Z = c / (d ? a.$CssHeight : a.$CssWidth)(y);a.$CssScale(y, Z);var g = d ? Z * X() : c,
	          f = d ? c : Z * ib();a.$CssWidth(q, g);a.$CssHeight(q, f);a.$Each(Lb, function (b) {
	        var c = a.$ParseInt(a.$AttributeEx(b, "autocenter"));a.$CenterElement(b, c);
	      });
	    }o.$ScaleHeight = o.$GetScaleHeight = function (b) {
	      if (b == k) return a.$CssHeight(q);Gb(b, c);
	    };o.$ScaleWidth = o.$SetScaleWidth = o.$GetScaleWidth = Gb;o.$GetVirtualIndex = function (a) {
	      var d = b.ceil(t(fb / bc)),
	          c = t(a - s + d);if (c > u) {
	        if (a - s > r / 2) a -= r;else if (a - s <= -r / 2) a += r;
	      } else a = s + c - d;return a;
	    };m.call(o);o.$Elmt = q = a.$GetElement(q);var f = a.$Extend({ $FillMode: 0, $LazyLoading: 1, $ArrowKeyNavigation: 1, $StartIndex: 0, $AutoPlay: i, $Loop: 1, $NaviQuitDrag: c, $AutoPlaySteps: 1, $AutoPlayInterval: 3e3, $PauseOnHover: 1, $SlideDuration: 500, $SlideEasing: d.$EaseOutQuad, $MinDragOffsetToSlide: 20, $SlideSpacing: 0, $Cols: 1, $Align: 0, $UISearchMode: 1, $PlayOrientation: 1, $DragOrientation: 1 }, fc);if (f.$Idle != k) f.$AutoPlayInterval = f.$Idle;if (f.$DisplayPieces != k) f.$Cols = f.$DisplayPieces;if (f.$ParkingPosition != k) f.$Align = f.$ParkingPosition;var gb = f.$PlayOrientation & 3,
	        wc = (f.$PlayOrientation & 4) / -4 || 1,
	        db = f.$SlideshowOptions,
	        I = a.$Extend({ $Class: p, $PlayInMode: 1, $PlayOutMode: 1 }, f.$CaptionSliderOptions);I.$Transitions = I.$Transitions || I.$CaptionTransitions;var qb = f.$BulletNavigatorOptions,
	        W = f.$ArrowNavigatorOptions,
	        ab = f.$ThumbnailNavigatorOptions,
	        Q = !f.$UISearchMode,
	        y,
	        v = a.$FindChild(q, "slides", Q),
	        cb = a.$FindChild(q, "loading", Q) || a.$CreateDiv(e),
	        Jb = a.$FindChild(q, "navigator", Q),
	        cc = a.$FindChild(q, "arrowleft", Q),
	        ac = a.$FindChild(q, "arrowright", Q),
	        Hb = a.$FindChild(q, "thumbnavigator", Q),
	        nc = a.$CssWidth(v),
	        mc = a.$CssHeight(v),
	        V,
	        T = [],
	        xc = a.$Children(v);a.$Each(xc, function (b) {
	      if (b.tagName == "DIV" && !a.$AttributeEx(b, "u")) T.push(b);else a.$IsBrowserIe9Earlier() && a.$CssZIndex(b, (a.$CssZIndex(b) || 0) + 1);
	    });var s = -1,
	        yb,
	        tb,
	        r = T.length,
	        K = f.$SlideWidth || nc,
	        J = f.$SlideHeight || mc,
	        Wb = f.$SlideSpacing,
	        Bb = K + Wb,
	        Cb = J + Wb,
	        bc = gb & 1 ? Bb : Cb,
	        u = b.min(f.$Cols, r),
	        hb,
	        x,
	        L,
	        Ab,
	        S = [],
	        Qb,
	        Sb,
	        Ob,
	        dc,
	        Fc,
	        P,
	        E = f.$PauseOnHover,
	        pc = f.$AutoPlayInterval,
	        Vb = f.$SlideDuration,
	        rb,
	        ub,
	        fb,
	        Rb = u < r,
	        D = Rb ? f.$Loop : 0,
	        Y,
	        M,
	        F = 1,
	        O,
	        B,
	        R,
	        vb = 0,
	        wb = 0,
	        H,
	        bb,
	        eb,
	        Eb,
	        w,
	        U,
	        z,
	        Tb = new rc(),
	        Z,
	        Lb = [];P = f.$AutoPlay;o.$Options = fc;jc();a.$Attribute(q, "jssor-slider", c);a.$CssZIndex(v, a.$CssZIndex(v) || 0);a.$CssPosition(v, "absolute");hb = a.$CloneNode(v, c);a.$InsertBefore(hb, v);if (db) {
	      dc = db.$ShowLink;rb = db.$Class;ub = u == 1 && r > 1 && rb && (!a.$IsBrowserIE() || a.$BrowserVersion() >= 8);
	    }fb = ub || u >= r || !(D & 1) ? 0 : f.$Align;Y = (u > 1 || fb ? gb : -1) & f.$DragOrientation;var xb = v,
	        C = [],
	        A,
	        N,
	        Fb = a.$Device(),
	        jb = Fb.$Touchable,
	        G,
	        pb,
	        Kb,
	        sb;Fb.$TouchActionAttr && a.$Css(xb, Fb.$TouchActionAttr, [j, "pan-y", "pan-x", "none"][Y] || "");U = new Cc();if (ub) A = new rb(Tb, K, J, db, jb);a.$AppendChild(hb, U.$Wrapper);a.$CssOverflow(v, "hidden");N = Xb();a.$Css(N, "backgroundColor", "#000");a.$CssOpacity(N, 0);a.$InsertBefore(N, xb.firstChild, xb);for (var ob = 0; ob < T.length; ob++) {
	      var zc = T[ob],
	          Ac = new Bc(zc, ob);C.push(Ac);
	    }a.$HideElement(cb);Eb = new Dc();z = new qc(Eb, U);if (Y) {
	      a.$AddEvent(v, "mousedown", Yb);a.$AddEvent(v, "touchstart", uc);a.$AddEvent(v, "dragstart", Ib);a.$AddEvent(v, "selectstart", Ib);a.$AddEvent(e, "mouseup", mb);a.$AddEvent(e, "touchend", mb);a.$AddEvent(e, "touchcancel", mb);a.$AddEvent(g, "blur", mb);
	    }E &= jb ? 10 : 5;if (Jb && qb) {
	      Qb = new qb.$Class(Jb, qb, X(), ib());S.push(Qb);
	    }if (W && cc && ac) {
	      W.$Loop = D;W.$Cols = u;Sb = new W.$Class(cc, ac, W, X(), ib());S.push(Sb);
	    }if (Hb && ab) {
	      ab.$StartIndex = f.$StartIndex;Ob = new ab.$Class(Hb, ab);S.push(Ob);
	    }a.$Each(S, function (a) {
	      a.$Reset(r, C, cb);a.$On(n.$NAVIGATIONREQUEST, lc);
	    });a.$Css(q, "visibility", "visible");Gb(X());a.$AddEvent(v, "click", kc);a.$AddEvent(q, "mouseout", a.$MouseOverOutFilter(ic, q));a.$AddEvent(q, "mouseover", a.$MouseOverOutFilter(hc, q));zb();f.$ArrowKeyNavigation && a.$AddEvent(e, "keydown", function (a) {
	      if (a.keyCode == 37) lb(-f.$ArrowKeyNavigation);else a.keyCode == 39 && lb(f.$ArrowKeyNavigation);
	    });var kb = f.$StartIndex;if (!(D & 1)) kb = b.max(0, b.min(kb, r - u));z.$PlayCarousel(kb, kb, 0);
	  };h.$EVT_CLICK = 21;h.$EVT_DRAG_START = 22;h.$EVT_DRAG_END = 23;h.$EVT_SWIPE_START = 24;h.$EVT_SWIPE_END = 25;h.$EVT_LOAD_START = 26;h.$EVT_LOAD_END = 27;h.$EVT_FREEZE = 28;h.$EVT_POSITION_CHANGE = 202;h.$EVT_PARK = 203;h.$EVT_SLIDESHOW_START = 206;h.$EVT_SLIDESHOW_END = 207;h.$EVT_PROGRESS_CHANGE = 208;h.$EVT_STATE_CHANGE = 209;var n = { $NAVIGATIONREQUEST: 1, $INDEXCHANGE: 2, $RESET: 3 };g.$JssorBulletNavigator$ = function (e, C) {
	    var f = this;m.call(f);e = a.$GetElement(e);var s,
	        A,
	        z,
	        r,
	        l = 0,
	        d,
	        o,
	        k,
	        w,
	        x,
	        h,
	        g,
	        q,
	        p,
	        B = [],
	        y = [];function v(a) {
	      a != -1 && y[a].$Selected(a == l);
	    }function t(a) {
	      f.$TriggerEvent(n.$NAVIGATIONREQUEST, a * o);
	    }f.$Elmt = e;f.$GetCurrentIndex = function () {
	      return r;
	    };f.$SetCurrentIndex = function (a) {
	      if (a != r) {
	        var d = l,
	            c = b.floor(a / o);l = c;r = a;v(d);v(c);
	      }
	    };f.$Show = function (b) {
	      a.$ShowElement(e, b);
	    };var u;f.$Reset = function (E) {
	      if (!u) {
	        s = b.ceil(E / o);l = 0;var n = q + w,
	            r = p + x,
	            m = b.ceil(s / k) - 1;A = q + n * (!h ? m : k - 1);z = p + r * (h ? m : k - 1);a.$CssWidth(e, A);a.$CssHeight(e, z);for (var f = 0; f < s; f++) {
	          var C = a.$CreateSpan();a.$InnerText(C, f + 1);var i = a.$BuildElement(g, "numbertemplate", C, c);a.$CssPosition(i, "absolute");var v = f % (m + 1);a.$CssLeft(i, !h ? n * v : f % k * n);a.$CssTop(i, h ? r * v : b.floor(f / (m + 1)) * r);a.$AppendChild(e, i);B[f] = i;d.$ActionMode & 1 && a.$AddEvent(i, "click", a.$CreateCallback(j, t, f));d.$ActionMode & 2 && a.$AddEvent(i, "mouseover", a.$MouseOverOutFilter(a.$CreateCallback(j, t, f), i));y[f] = a.$Buttonize(i);
	        }u = c;
	      }
	    };f.$Options = d = a.$Extend({ $SpacingX: 10, $SpacingY: 10, $Orientation: 1, $ActionMode: 1 }, C);g = a.$FindChild(e, "prototype");q = a.$CssWidth(g);p = a.$CssHeight(g);a.$RemoveElement(g, e);o = d.$Steps || 1;k = d.$Lanes || 1;w = d.$SpacingX;x = d.$SpacingY;h = d.$Orientation - 1;d.$Scale == i && a.$Attribute(e, "noscale", c);d.$AutoCenter && a.$Attribute(e, "autocenter", d.$AutoCenter);
	  };g.$JssorArrowNavigator$ = function (b, g, h) {
	    var d = this;m.call(d);var r, q, e, f, k;a.$CssWidth(b);a.$CssHeight(b);function l(a) {
	      d.$TriggerEvent(n.$NAVIGATIONREQUEST, a, c);
	    }function p(c) {
	      a.$ShowElement(b, c || !h.$Loop && e == 0);a.$ShowElement(g, c || !h.$Loop && e >= q - h.$Cols);r = c;
	    }d.$GetCurrentIndex = function () {
	      return e;
	    };d.$SetCurrentIndex = function (b, a, c) {
	      if (c) e = a;else {
	        e = b;p(r);
	      }
	    };d.$Show = p;var o;d.$Reset = function (d) {
	      q = d;e = 0;if (!o) {
	        a.$AddEvent(b, "click", a.$CreateCallback(j, l, -k));a.$AddEvent(g, "click", a.$CreateCallback(j, l, k));a.$Buttonize(b);a.$Buttonize(g);o = c;
	      }
	    };d.$Options = f = a.$Extend({ $Steps: 1 }, h);k = f.$Steps;if (f.$Scale == i) {
	      a.$Attribute(b, "noscale", c);a.$Attribute(g, "noscale", c);
	    }if (f.$AutoCenter) {
	      a.$Attribute(b, "autocenter", f.$AutoCenter);a.$Attribute(g, "autocenter", f.$AutoCenter);
	    }
	  };g.$JssorThumbnailNavigator$ = function (g, C) {
	    var l = this,
	        z,
	        q,
	        d,
	        w = [],
	        A,
	        y,
	        e,
	        r,
	        s,
	        v,
	        u,
	        p,
	        t,
	        f,
	        o;m.call(l);g = a.$GetElement(g);function B(m, f) {
	      var g = this,
	          b,
	          k,
	          i;function p() {
	        k.$Selected(q == f);
	      }function h(d) {
	        if (d || !t.$LastDragSucceded()) {
	          var a = e - f % e,
	              b = t.$GetVirtualIndex((f + a) / e - 1),
	              c = b * e + e - a;l.$TriggerEvent(n.$NAVIGATIONREQUEST, c);
	        }
	      }g.$Index = f;g.$Highlight = p;i = m.$Thumb || m.$Image || a.$CreateDiv();g.$Wrapper = b = a.$BuildElement(o, "thumbnailtemplate", i, c);k = a.$Buttonize(b);d.$ActionMode & 1 && a.$AddEvent(b, "click", a.$CreateCallback(j, h, 0));d.$ActionMode & 2 && a.$AddEvent(b, "mouseover", a.$MouseOverOutFilter(a.$CreateCallback(j, h, 1), b));
	    }l.$GetCurrentIndex = function () {
	      return q;
	    };l.$SetCurrentIndex = function (c, d, f) {
	      var a = q;q = c;a != -1 && w[a].$Highlight();w[c].$Highlight();!f && t.$PlayTo(t.$GetVirtualIndex(b.floor(d / e)));
	    };l.$Show = function (b) {
	      a.$ShowElement(g, b);
	    };var x;l.$Reset = function (F, C) {
	      if (!x) {
	        z = F;b.ceil(z / e);q = -1;p = b.min(p, C.length);var j = d.$Orientation & 1,
	            m = v + (v + r) * (e - 1) * (1 - j),
	            l = u + (u + s) * (e - 1) * j,
	            o = m + (m + r) * (p - 1) * j,
	            n = l + (l + s) * (p - 1) * (1 - j);a.$CssPosition(f, "absolute");a.$CssOverflow(f, "hidden");d.$AutoCenter & 1 && a.$CssLeft(f, (A - o) / 2);d.$AutoCenter & 2 && a.$CssTop(f, (y - n) / 2);a.$CssWidth(f, o);a.$CssHeight(f, n);var k = [];a.$Each(C, function (l, g) {
	          var h = new B(l, g),
	              d = h.$Wrapper,
	              c = b.floor(g / e),
	              i = g % e;a.$CssLeft(d, (v + r) * i * (1 - j));a.$CssTop(d, (u + s) * i * j);if (!k[c]) {
	            k[c] = a.$CreateDiv();a.$AppendChild(f, k[c]);
	          }a.$AppendChild(k[c], d);w.push(h);
	        });var E = a.$Extend({ $AutoPlay: i, $NaviQuitDrag: i, $SlideWidth: m, $SlideHeight: l, $SlideSpacing: r * j + s * (1 - j), $MinDragOffsetToSlide: 12, $SlideDuration: 200, $PauseOnHover: 1, $PlayOrientation: d.$Orientation, $DragOrientation: d.$NoDrag || d.$DisableDrag ? 0 : d.$Orientation }, d);t = new h(g, E);x = c;
	      }
	    };l.$Options = d = a.$Extend({ $SpacingX: 0, $SpacingY: 0, $Cols: 1, $Orientation: 1, $AutoCenter: 3, $ActionMode: 1 }, C);if (d.$DisplayPieces != k) d.$Cols = d.$DisplayPieces;if (d.$Rows != k) d.$Lanes = d.$Rows;A = a.$CssWidth(g);y = a.$CssHeight(g);f = a.$FindChild(g, "slides", c);o = a.$FindChild(f, "prototype");v = a.$CssWidth(o);u = a.$CssHeight(o);a.$RemoveElement(o, f);e = d.$Lanes || 1;r = d.$SpacingX;s = d.$SpacingY;p = d.$Cols;d.$Scale == i && a.$Attribute(g, "noscale", c);
	  };function p(e, d, c) {
	    var b = this;l.call(b, 0, c);b.$Revert = a.$EmptyFunction;b.$IdleBegin = 0;b.$IdleEnd = c;
	  }g.$JssorCaptionSlider$ = function (h, f, i) {
	    var c = this;l.call(c, 0, 0);var e, d;function g(p, h, f) {
	      var c = this,
	          g,
	          n = f ? h.$PlayInMode : h.$PlayOutMode,
	          e = h.$Transitions,
	          o = { $Transition: "t", $Delay: "d", $Duration: "du", x: "x", y: "y", $Rotate: "r", $Zoom: "z", $Opacity: "f", $BeginTime: "b" },
	          d = { $Default: function $Default(b, a) {
	          if (!isNaN(a.$Value)) b = a.$Value;else b *= a.$Percent;return b;
	        }, $Opacity: function $Opacity(b, a) {
	          return this.$Default(b - 1, a);
	        } };d.$Zoom = d.$Opacity;l.call(c, 0, 0);function j(r, m) {
	        var l = [],
	            i,
	            k = [],
	            c = [];function h(c, d) {
	          var b = {};a.$Each(o, function (g, h) {
	            var e = a.$AttributeEx(c, g + (d || ""));if (e) {
	              var f = {};if (g == "t") f.$Value = e;else if (e.indexOf("%") + 1) f.$Percent = a.$ParseFloat(e) / 100;else f.$Value = a.$ParseFloat(e);b[h] = f;
	            }
	          });return b;
	        }function p() {
	          return e[b.floor(b.random() * e.length)];
	        }function g(f) {
	          var h;if (f == "*") h = p();else if (f) {
	            var d = e[a.$ParseInt(f)] || e[f];if (a.$IsArray(d)) {
	              if (f != i) {
	                i = f;c[f] = 0;k[f] = d[b.floor(b.random() * d.length)];
	              } else c[f]++;d = k[f];if (a.$IsArray(d)) {
	                d = d.length && d[c[f] % d.length];if (a.$IsArray(d)) d = d[b.floor(b.random() * d.length)];
	              }
	            }h = d;if (a.$IsString(h)) h = g(h);
	          }return h;
	        }var q = a.$Children(r);a.$Each(q, function (b) {
	          var c = [];c.$Elmt = b;var e = a.$AttributeEx(b, "u") == "caption";a.$Each(f ? [0, 3] : [2], function (l, o) {
	            if (e) {
	              var k, f;if (l != 2 || !a.$AttributeEx(b, "t3")) {
	                f = h(b, l);if (l == 2 && !f.$Transition) {
	                  f.$Delay = f.$Delay || { $Value: 0 };f = a.$Extend(h(b, 0), f);
	                }
	              }if (f && f.$Transition) {
	                k = g(f.$Transition.$Value);if (k) {
	                  var i = a.$Extend({ $Delay: 0 }, k);a.$Each(f, function (c, a) {
	                    var b = (d[a] || d.$Default).apply(d, [i[a], f[a]]);if (!isNaN(b)) i[a] = b;
	                  });if (!o) if (f.$BeginTime) i.$BeginTime = f.$BeginTime.$Value || 0;else if (n & 2) i.$BeginTime = 0;
	                }
	              }c.push(i);
	            }if (m % 2 && !o) c.$Children = j(b, m + 1);
	          });l.push(c);
	        });return l;
	      }function m(w, c, z) {
	        var g = { $Easing: c.$Easing, $Round: c.$Round, $During: c.$During, $Reverse: f && !z },
	            m = w,
	            r = a.$ParentNode(w),
	            k = a.$CssWidth(m),
	            j = a.$CssHeight(m),
	            y = a.$CssWidth(r),
	            x = a.$CssHeight(r),
	            h = {},
	            e = {},
	            i = c.$ScaleClip || 1;if (c.$Opacity) e.$Opacity = 1 - c.$Opacity;g.$OriginalWidth = k;g.$OriginalHeight = j;if (c.$Zoom || c.$Rotate) {
	          e.$Zoom = (c.$Zoom || 2) - 2;if (a.$IsBrowserIe9Earlier() || a.$IsBrowserOpera()) e.$Zoom = b.min(e.$Zoom, 1);h.$Zoom = 1;var B = c.$Rotate || 0;e.$Rotate = B * 360;h.$Rotate = 0;
	        } else if (c.$Clip) {
	          var s = { $Top: 0, $Right: k, $Bottom: j, $Left: 0 },
	              v = a.$Extend({}, s),
	              d = v.$Offset = {},
	              u = c.$Clip & 4,
	              p = c.$Clip & 8,
	              t = c.$Clip & 1,
	              q = c.$Clip & 2;if (u && p) {
	            d.$Top = j / 2 * i;d.$Bottom = -d.$Top;
	          } else if (u) d.$Bottom = -j * i;else if (p) d.$Top = j * i;if (t && q) {
	            d.$Left = k / 2 * i;d.$Right = -d.$Left;
	          } else if (t) d.$Right = -k * i;else if (q) d.$Left = k * i;g.$Move = c.$Move;e.$Clip = v;h.$Clip = s;
	        }var n = 0,
	            o = 0;if (c.x) n -= y * c.x;if (c.y) o -= x * c.y;if (n || o || g.$Move) {
	          e.$Left = n;e.$Top = o;
	        }var A = c.$Duration;h = a.$Extend(h, a.$GetStyles(m, e));g.$Setter = a.$StyleSetterEx();return new l(c.$Delay, A, g, m, h, e);
	      }function i(b, d) {
	        a.$Each(d, function (d) {
	          var a,
	              h = d.$Elmt,
	              e = d[0],
	              j = d[1];if (e) {
	            a = m(h, e);e.$BeginTime == k && a.$Shift(b);b = a.$GetPosition_OuterEnd();
	          }b = i(b, d.$Children);if (j) {
	            var f = m(h, j, 1);f.$Shift(b);c.$Combine(f);g.$Combine(f);
	          }a && c.$Combine(a);
	        });return b;
	      }c.$Revert = function () {
	        c.$GoToPosition(c.$GetPosition_OuterEnd() * (f || 0));g.$GoToPosition(0);
	      };g = new l(0, 0);i(0, n ? j(p, 1) : []);
	    }c.$Revert = function () {
	      d.$Revert();e.$Revert();
	    };e = new g(h, f, 1);c.$IdleBegin = e.$GetPosition_OuterEnd();c.$IdleEnd = c.$IdleBegin + i;d = new g(h, f);d.$Shift(c.$IdleEnd);c.$Combine(d);c.$Combine(e);
	  };g.$JssorCaptionSlideo$ = function (n, g, m) {
	    var b = this,
	        o,
	        h = {},
	        i = g.$Transitions,
	        d = new l(0, 0);l.call(b, 0, 0);function j(d, c) {
	      var b = {};a.$Each(d, function (d, f) {
	        var e = h[f];if (e) {
	          if (a.$IsPlainObject(d)) d = j(d, c || f == "e");else if (c) if (a.$IsNumeric(d)) d = o[d];b[e] = d;
	        }
	      });return b;
	    }function k(e, c) {
	      var b = [],
	          d = a.$Children(e);a.$Each(d, function (d) {
	        var h = a.$AttributeEx(d, "u") == "caption";if (h) {
	          var e = a.$AttributeEx(d, "t"),
	              g = i[a.$ParseInt(e)] || i[e],
	              f = { $Elmt: d, $Transition: g };b.push(f);
	        }if (c < 5) b = b.concat(k(d, c + 1));
	      });return b;
	    }function r(c, e, b) {
	      a.$Each(e, function (f) {
	        var e = j(f),
	            g = { $Easing: a.$FormatEasings(e.$Easing), $Setter: a.$StyleSetterEx(), $OriginalWidth: b.$Width, $OriginalHeight: b.$Height },
	            h = new l(f.b, f.d, g, c, b, e);d.$Combine(h);b = a.$AddDif(b, e);
	      });return b;
	    }function q(b) {
	      a.$Each(b, function (e) {
	        var b = e.$Elmt,
	            d = a.$CssWidth(b),
	            c = a.$CssHeight(b),
	            f = { $Left: a.$CssLeft(b), $Top: a.$CssTop(b), $Opacity: 1, $ZIndex: a.$CssZIndex(b) || 0, $Rotate: 0, $RotateX: 0, $RotateY: 0, $ScaleX: 1, $ScaleY: 1, $TranslateX: 0, $TranslateY: 0, $TranslateZ: 0, $SkewX: 0, $SkewY: 0, $Width: d, $Height: c, $Clip: { $Top: 0, $Right: d, $Bottom: c, $Left: 0 } };r(b, e.$Transition, f);
	      });
	    }function t(g, f, h) {
	      var e = g.b - f;if (e) {
	        var a = new l(f, e);a.$Combine(d, c);a.$Shift(h);b.$Combine(a);
	      }b.$Expand(g.d);return e;
	    }function s(f) {
	      var c = d.$GetPosition_OuterBegin(),
	          e = 0;a.$Each(f, function (d, f) {
	        d = a.$Extend({ d: m }, d);t(d, c, e);c = d.b;e += d.d;if (!f || d.t == 2) {
	          b.$IdleBegin = c;b.$IdleEnd = c + d.d;
	        }
	      });
	    }b.$Revert = function () {
	      b.$GoToPosition(-1, c);
	    };o = [f.$Swing, f.$Linear, f.$InQuad, f.$OutQuad, f.$InOutQuad, f.$InCubic, f.$OutCubic, f.$InOutCubic, f.$InQuart, f.$OutQuart, f.$InOutQuart, f.$InQuint, f.$OutQuint, f.$InOutQuint, f.$InSine, f.$OutSine, f.$InOutSine, f.$InExpo, f.$OutExpo, f.$InOutExpo, f.$InCirc, f.$OutCirc, f.$InOutCirc, f.$InElastic, f.$OutElastic, f.$InOutElastic, f.$InBack, f.$OutBack, f.$InOutBack, f.$InBounce, f.$OutBounce, f.$InOutBounce, f.$GoBack, f.$InWave, f.$OutWave, f.$OutJump, f.$InJump];var u = { $Top: "y", $Left: "x", $Bottom: "m", $Right: "t", $Rotate: "r", $RotateX: "rX", $RotateY: "rY", $ScaleX: "sX", $ScaleY: "sY", $TranslateX: "tX", $TranslateY: "tY", $TranslateZ: "tZ", $SkewX: "kX", $SkewY: "kY", $Opacity: "o", $Easing: "e", $ZIndex: "i", $Clip: "c" };a.$Each(u, function (b, a) {
	      h[b] = a;
	    });q(k(n, 1));d.$GoToPosition(-1);var p = g.$Breaks || [],
	        e = [].concat(p[a.$ParseInt(a.$AttributeEx(n, "b"))] || []);e.push({ b: d.$GetPosition_OuterEnd(), d: e.length ? 0 : m });s(e);b.$GoToPosition(-1);
	  };
	})(window, document, Math, null, true, false);

/***/ }
/******/ ]);