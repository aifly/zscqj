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

	var _utilMethodEs6 = __webpack_require__(1);

	var data = {
	    viewWidth: document.documentElement.clientWidth,
	    viewHeight: document.documentElement.clientHeight,
	    header: (0, _utilMethodEs6.$)('#fly-main .fly-header'),
	    logo: (0, _utilMethodEs6.$)('#fly-main .fly-logo'),
	    pannelC: (0, _utilMethodEs6.$)('#fly-main .fly-panner-container'),
	    imgC: (0, _utilMethodEs6.$)("#fly-main .fly-img-container ul"),
	    currentPage: (0, _utilMethodEs6.$)("#current"),
	    prevBtn: (0, _utilMethodEs6.$)('#fly-prev'),
	    nextBtn: (0, _utilMethodEs6.$)('#fly-next'),
	    textArr: [{
	        title: "直播局长首次做客中国政府网", //直播局长首次做客中国政府网
	        content: '2006年2月15日，国家知识产权局政府网站策划并直播了国家知识产权局局长田力普做客中国政府网，围绕国家“十一五”规划建议中对知识产权工作的要求，就如何发挥知识产权作用促进自主创新进行在线访谈，并对网民提出的问题给予解答。图为国家知识产权局局长田力普接受中国政府网访谈。'
	    }, {
	        title: "门户网站开通并上线",
	        content: '    2006年4月26日，全国知识产权局系统政府门户网站（www.sipo.gov.cn）正式上线。网站以原有的国家知识产权局政府网站为主站，国家知识产权局局内各职能部门和各省、自治区、直辖市知识产权局为子站，将主站和子站的政务信息与服务信息统一到门户网站平台上。图为国家知识产权局副局长李玉光与参加开放日活动的客人共同触摸激光球，正式开通全国知识产权局系统政府门户网站。'
	    }, {
	        title: "首次开展在线访谈",
	        content: '2006年4月26日，国家知识产权局政府网站首次做在线访谈。图为国家知识产权局副局长贺化通过新的门户网站以“让社会了解我们，让我们更好地服务社会”为主题接受访谈，并与网民在线交流。'
	    }, {
	        title: "首次图文直播 ",
	        content: '2006年4月26日，是国家知识产权局的首个开放日。来自全国各地的100多名参观人员、外国及使馆人员和媒体记者参观了国家知识产权局受理大厅、专利文献部、材料工程发明审查部等部门。当日下午另有100多名来访者参加了专利文献讲座和业务咨询活动。在国家知识产权局政府门户网站开通日上午9：30至11：30，国知局政府网站对开放日活动作现场直播。图为国家知识产权局局长田力普在开放日主会场致辞。'
	    }, {
	        title: "第一个网站管理办法",
	        content: '2006年6月27日，《全国知识产权局系统政府门户网站管理办法》的正式印发。图为该文件截图。'
	    }, {
	        title: "大型系列在线访谈",
	        content: "2006年8月25日，由国家知识产权局主办、各地方知识产权局协办的“关注企业的明天——自主创新知识产权化”专题系列在线访谈，在陕西西安正式启动。系列访谈历时一年，分别在陕西、青岛、江苏、宁夏、北京等地举行。图为“评析西安达刚路机公司的专利维权之路”访谈现场。"
	    }, {
	        title: "网站首次直播新闻发布会",
	        content: "2007年1月30日，国家知识产权局网站首次直播“国家知识产权局2007年首次定点新闻发布会”。图为国家知识产权局新闻发言人尹新天（左）介绍2006年工作情况。"
	    }, {
	        title: "《司部长访谈》在线为公众详解专利申请及审查",
	        content: "2007年4月12日，国家知识产权局政府网站首次开通《司部长访谈》，在线详解专利申请及审查，并同网民一起探讨“专利申请及审查流程管理”的相关内容。国家知识产权局政府门户网站的《司部长访谈》栏目，旨在加大关键性政府信息的公开，为公众提供具有政府权威性的政策解读，引导社会公众参与政府公共管理, 增进政府与公众的有效沟通与互动，确保公众对政府政策的制定和执行、政府职能的履行、公共服务的有效提供等能够准确地理解和把握，从而在公众心目中构筑起服务型政府的形象。图为初审及流程管理部部长谈专利申请及审查流程管理的访谈现场。"
	    }, {
	        title: "“4•26”宣传活动全国图文信息联播",
	        content: "2007年4月26日全天，知识产权政府门户网站对全国各地庆祝世界知识产权日的盛况进行实时报道。国家知识产权局系统政府门户网站主站与地方子站首次联合举行 “4•26”宣传活动全国图文信息联播。图为国家知识产权局局长田力普致辞。"
	    }, {
	        title: "“儿童专区”亮相政府网站",
	        content: "2006年12月1日，全国知识产权局系统政府门户网站推出一个全新栏目——儿童专区。这个儿童专区的创建意义在于充分发挥互联网优势，向青少年普及知识产权知识，这是我国政府网站中第一个面向儿童的专题栏目。栏目包括“给局长写封信？”“创意无限”“游戏”“历史”“你知道吗”等板块，页面风格生动可爱，内容丰富。图为“儿童专区”页面截图。"
	    }, {
	        title: "增设15个地方子站网站群体系初具规模",
	        content: "2008年1月2日，继2006年4月26日开通32个省级知识产权局子站（北京、黑龙江、吉林、辽宁、天津、内蒙古、新疆、宁夏、青海、甘肃、陕西、西藏、四川、重庆、贵州、云南、山西、河北、山东、河南、安徽、江苏、上海、湖北、湖南、江西、浙江、福建、广西、海南、广东、新疆生产建设兵团）后，国家知识产权局政府网站又开通了15个计划单列市、副省级城市知识产权局子站（沈阳、长春、哈尔滨、南京、杭州、济南、武汉、广州、成都、西安、大连、宁波、厦门、青岛、深圳），地方子站已增至47个，子站体系进一步完善，形成了主站与子站集合的知识产权政府网站群体系。图为47个地方子站示意图。"
	    }, {
	        title: "全国知识产权局系统政府门户网站首次全新改版",
	        content: "2008年4月25日，在第八个世界知识产权日到来之际，全国知识产权局系统政府门户网站全新改版，并上线运行。新版网站包括政务、服务、互动、资讯、办事、检索六个频道，增设政务公开等新栏目，方便社会公众准确、便捷地查询所需信息；进一步增强在线办事和公众参与等服务功能，为专利申请人提供系统而全面的服务；同时，更新了地方子站页面设计和栏目，增强了子站功能。图为2008年首次改版后的政府网站首页。"
	    }, {
	        title: "国家知识产权战略专题宣传持续推进",
	        content: "2008年6月，国家知识产权局政府网站推出国家知识产权战略专题。在此基础上。2015年6月5日，在《国家知识产权战略纲要》发布实施七周年之际，为配合国家知识产权战略实施工作开展，加大国家知识产权战略实施工作宣传力度，国务院知识产权战略实施工作部际联席会议办公室网站专题正式上线运行。图为战略专题、国务院知识产权战略实施工作部际联席会议办公室网站页面截图。"
	    }, {
	        title: "在线维权服务实现一体化、智能化、信息化管理",
	        content: "2009年4月29日，为配合全国知识产权维权援助公益服务电话“12330”的开通，国家知识产权局政府网站开设“维权援助”专栏。该专栏设置了政策文件、工作要求、国内外动态、地方信息、案例介绍、“12330”热线、大事记等子栏目。“维权援助”专栏运行五年后，2016年2月4日，中国知识产权维权援助与举报投诉网（www.12330.gov.cn）上线运行，实现了知识产权维权援助与举报投诉在线申请、受理、处理和反馈等多项功能。网站直接对接知识产权维权援助与举报投诉管理系统，该系统提供举报投诉、维权援助案件在线受理、答复、移交、反馈、案件信息实时统计分析等多项功能，提供在线提交举报投诉、维权援助申请的全国统一入口，实现了全国知识产权维权援助与举报投诉工作的一体化、智能化、信息化管理。图为维权援助专栏与维权援助与举报投诉网的页面截图。"
	    }, {
	        title: "“地方局长访谈”在线直播",
	        content: "2009年11月26日，国家知识产权局政府网站“地方知识产权局局长访谈”（简称“地方局长访谈” ）首期访谈在江苏南京举行。访谈邀请江苏省知识产权局局长朱宇，围绕“创建实施知识产权战略示范省 加快推进创新型经济建设”的主题与网友在线交流。“地方局长访谈”栏目邀请了地方知识产权局局长围绕相关主题与网民进行对话交流，共享知识产权创造、运用、保护和管理的先进经验，丰富工作抓手，以推动全国知识产权工作深入开展。图为江苏省知识产权局局长朱宇在南京与各位网民在线交流。"
	    }, {
	        title: "2009年英文网站改版　",
	        content: "2009年，国家知识产权局政府网站英文网站正式改版上线。图为改版后网站英文网站的首页截图。"
	    }, {
	        title: "中文网站第二次改版 ",
	        content: "2013年10月， 国家知识产权局政府网站中文网站第二次改版后正式上线，新增“时政要闻” “图解”等栏目，宣传中心工作、解读重要政策；整合专利申请、专利审查等在线办事服务的栏目，更加全面集中地为公众提供服务。图为第二次改版后的网站首页截图。"
	    }, {
	        title: "首次直播专利复审委员会重大案件口审实况",
	        content: "2016年4月5日，专利复审委员会对百度公司和搜狗公司关于输入法的专利纠纷案面向社会进行公开审理，国家知识产权局政府网站作现场直播。这也是首次直播专利复审委员会重大案件口审实况。图为该案审理实况的图文直播页面截图。 "
	    }],
	    content: (0, _utilMethodEs6.$)("#fly-content"),
	    flyNum: (0, _utilMethodEs6.$)("#fly-num"),
	    flyT: (0, _utilMethodEs6.$)("#fly-t")
	};

	var util = {
	    init: function init() {
	        this.bindEvent();
	    },
	    setSize: function setSize() {
	        var width = arguments.length <= 0 || arguments[0] === undefined ? data.viewWidth : arguments[0];
	        var height = arguments.length <= 1 || arguments[1] === undefined ? data.viewHeight : arguments[1];

	        // alert(data.pannelC.offsetTop)

	        data.pannelC.style.height = height / 5 * 3.5 + 'px';
	        var w = (0, _utilMethodEs6.$)('.fly-right').offsetWidth * .84,
	            h = 527 / 800 * w;
	        var aLi = Array.from((0, _utilMethodEs6.$$)("#fly-main .fly-img-container ul li"));

	        data.imgC.style.width = w * aLi.length + 'px';
	        data.imgC.style.height = h + 'px';

	        var imgC = (0, _utilMethodEs6.$)("#fly-main .fly-img-container");

	        console.log(imgC.offsetWidth, w);
	        aLi.forEach(function (li) {
	            li.style.width = imgC.offsetWidth + 'px';
	            li.style.height = h + 'px';
	        });

	        (0, _utilMethodEs6.$)("#fly-main .fly-img-container").style.height = 445 / 800 * imgC.offsetWidth + 'px';
	        this.initSlider();
	    },
	    bindEvent: function bindEvent() {
	        var _this = this;

	        this.setSize();
	        window.addEventListener('resize', function () {
	            var width = document.documentElement.clientWidth,
	                height = document.documentElement.clientHeight;
	            _this.setSize(width, height);
	        });

	        data.imgC.iNow = 0;
	        var len = (0, _utilMethodEs6.$$)('li', data.imgC).length;
	        var w = (0, _utilMethodEs6.$)("#fly-main .fly-img-container ul li").offsetWidth;
	        data.prevBtn.addEventListener('click', function () {
	            _this.prev(w);
	        });
	        data.nextBtn.addEventListener('click', function () {
	            _this.next(w, len);
	        });

	        document.addEventListener('keydown', function (e) {
	            if (e.keyCode === 37) {
	                _this.prev(w);
	            } else if (e.keyCode === 39) {
	                _this.next(w, len);
	            }
	        });
	    },
	    initSlider: function initSlider() {
	        data.imgC.iNow = 0;
	        data.imgC.style.transform = 'translate3d(0,0,0)';
	        data.imgC.style.webkitTransform = 'translate3d(0,0,0)';
	        data.nextBtn.classList.remove('disable');
	        data.prevBtn.classList.add('disable');
	        data.content.innerHTML = data.textArr[0].content;
	        data.flyT.innerHTML = data.textArr[0].title;
	        data.flyNum.innerHTML = "01";
	    },
	    next: function next(w, len) {
	        data.imgC.iNow++;
	        data.imgC.iNow > len - 2 && data.nextBtn.classList.add('disable');
	        data.imgC.iNow > len - 1 && (data.imgC.iNow = len - 1);
	        data.imgC.style.transform = 'translate3d(-' + data.imgC.iNow * w + 'px,0,0)';
	        data.imgC.style.webkitTransform = 'translate3d(-' + data.imgC.iNow * w + 'px,0,0)';
	        data.currentPage.innerHTML = data.imgC.iNow + 1;
	        data.prevBtn.classList.remove('disable');
	        this.sliderDefault();
	    },
	    prev: function prev(w) {
	        data.imgC.iNow--;
	        data.imgC.iNow <= 0 && (data.imgC.iNow = 0);
	        data.imgC.iNow <= 0 && data.prevBtn.classList.add('disable');
	        data.imgC.style.transform = 'translate3d(-' + data.imgC.iNow * w + 'px,0,0)';
	        data.imgC.style.webkitTransform = 'translate3d(-' + data.imgC.iNow * w + 'px,0,0)';
	        data.currentPage.innerHTML = data.imgC.iNow + 1;
	        data.nextBtn.classList.remove('disable');
	        this.sliderDefault();
	    },
	    sliderDefault: function sliderDefault() {
	        data.content.innerHTML = data.textArr[data.imgC.iNow].content;
	        data.flyT.innerHTML = data.textArr[data.imgC.iNow].title;
	        data.flyNum.innerHTML = data.imgC.iNow + 1 >= 10 ? data.imgC.iNow + 1 : "0" + (data.imgC.iNow + 1);
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

/***/ }
/******/ ]);