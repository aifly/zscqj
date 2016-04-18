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
	    pannelC: (0, _utilMethodEs6.$)('#fly-main .fly-panner-container')
	};

	var util = {
	    init: function init() {
	        this.bindEvent();
	    },
	    setSize: function setSize() {
	        var width = arguments.length <= 0 || arguments[0] === undefined ? data.viewWidth : arguments[0];
	        var height = arguments.length <= 1 || arguments[1] === undefined ? data.viewHeight : arguments[1];

	        var pannelH = height - parseFloat(_utilMethodEs6.utilMethods.getStyle(data.logo).marginTop) - 100 - data.header.offsetHeight;
	        data.pannelC.style.height = pannelH + 'px';
	        var w = (0, _utilMethodEs6.$)('.fly-flex').offsetWidth;
	        var h = 803 / 520 * w;
	        Array.from((0, _utilMethodEs6.$$)(".fly-inner")).forEach(function (inner) {
	            inner.style.height = h + 'px';
	        });
	        Array.from((0, _utilMethodEs6.$$)(".item")).forEach(function (item) {
	            item.style.transformOrigin = 'center center -' + w / 2 + 'px';
	            item.style.webkitTransformOrigin = 'center center -' + w / 2 + 'px';
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