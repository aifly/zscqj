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

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilMethodEs6 = __webpack_require__(2);

	var data = {
	    viewWidth: document.documentElement.clientWidth,
	    viewHeight: document.documentElement.clientHeight,
	    header: (0, _utilMethodEs6.$)('#fly-main .fly-header'),
	    pannelC: (0, _utilMethodEs6.$)('#fly-main .fly-panner-container'),
	    logo: (0, _utilMethodEs6.$)('#fly-main .fly-logo'),
	    canvas: (0, _utilMethodEs6.$)("#province-canvas")
	};

	var util = {
	    init: function init() {
	        var _this = this;

	        this.setSize();
	        (0, _utilMethodEs6.$)("#province-canvas").width = parseFloat(this.getStyle((0, _utilMethodEs6.$)('#fly-main .fly-panner-container')).width);
	        (0, _utilMethodEs6.$)("#province-canvas").height = parseFloat(data.pannelC.style.height);
	        this.bindEvent();
	        var d = this.renderLoading();

	        var imgArr = ['./static/images/line.png'];
	        for (var i = 1; i <= 32; i++) {
	            imgArr.push('./static/images/' + i + '.png');
	        }

	        var BitMap = (function () {
	            function BitMap() {
	                var option = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	                _classCallCheck(this, BitMap);

	                var s = this;
	                s.container = option.container;
	                s.src = option.src;
	                s.stage = option.stage;
	                s.speed = .01;
	                s.render();
	            }

	            _createClass(BitMap, [{
	                key: 'fadeIn',
	                value: function fadeIn() {
	                    var s = this;
	                    s.bit.alpha += s.speed;

	                    s.bit.alpha >= 1 && (s.bit.alpha = 1);
	                    if (s.bit.alpha >= 1) {
	                        s.bit.alpha = 1;
	                        BitMap.iNow++;
	                    }
	                }
	            }, {
	                key: 'render',
	                value: function render() {
	                    var s = this;
	                    var scale = (0, _utilMethodEs6.$)("#province-canvas").height / 800;
	                    var bit = new createjs.Bitmap(s.src).set({ scaleX: scale, scaleY: scale });
	                    bit.alpha = 0;
	                    bit.on('mousedown', function (e) {});
	                    s.bit = bit;
	                    s.container.addChild(bit);
	                    s.stage.update();
	                }
	            }]);

	            return BitMap;
	        })();

	        this.proviceArr = [];
	        this.loading(imgArr, function (p, s) {
	            d.prec.text = Math.round(p * 100) + "%";

	            _this.proviceArr.push(new BitMap({ src: s, container: d.container, stage: d.stage }));

	            d.stage.update();
	        }, function (s) {

	            _this.proviceArr.push(new BitMap({ src: s, container: d.container, stage: d.stage }));

	            d.container.removeChild(d.prec, d.text);
	            _this.proviceArr.forEach(function (item) {
	                item.bit.alpha = 1;
	            });
	            d.stage.update();
	            /*  BitMap.iNow =0 ;
	              let t = setInterval(()=> {
	                  this.proviceArr.forEach(item=>{
	                      item.fadeIn();
	                  });
	                  if(BitMap.iNow>=this.proviceArr.length){
	                      clearInterval(t);
	                  }
	                  d.stage.update();
	                }, 17);*/
	        });
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

	    renderLoading: function renderLoading() {
	        var canvas = (0, _utilMethodEs6.$)('#province-canvas');
	        var stage = new createjs.Stage(canvas);
	        var container = new createjs.Container();

	        var text = new createjs.Text("Loading...", "50px Arial", "rgba(62, 59, 189, 1)");
	        text.x = 300;
	        text.y = 300;
	        text.textAlign = "center";
	        //text.textBaseline = "top";

	        text.x = canvas.width / 2;
	        text.y = canvas.height / 2 - 20;

	        var prec = new createjs.Text("0%", "50px Arial", "rgba(62, 59, 189, 1)");
	        prec.x = 300;
	        prec.y = 300;
	        prec.textAlign = "center";
	        //text.textBaseline = "top";

	        container.x = (canvas.width - canvas.height / 800 * 1700) / 2;

	        prec.x = canvas.width / 2;
	        prec.y = canvas.height / 2 + 40;

	        container.addChild(text, prec);

	        stage.addChild(container);
	        stage.update();

	        /*  createjs.Ticker.timingMode = createjs.Ticker.RAF;
	         createjs.Ticker.on('tick', tick);
	           var i = 0;
	           function tick(evt) {
	         stage.update();
	         }*/

	        return { container: container, prec: prec, stage: stage, text: text };
	    },

	    setSize: function setSize() {
	        var width = arguments.length <= 0 || arguments[0] === undefined ? data.viewWidth : arguments[0];
	        var height = arguments.length <= 1 || arguments[1] === undefined ? data.viewHeight : arguments[1];

	        data.pannelC.style.height = height - parseFloat(this.getStyle(data.logo).marginTop) - 30 - data.header.offsetHeight + 'px';
	        // $("#province-canvas").width = parseFloat(this.getStyle($('#fly-main .fly-panner-container')).width);
	        // $("#province-canvas").height = parseFloat(data.pannelC.style.height);
	        (0, _utilMethodEs6.$)('#fly-main .fly-logo').style.transform = 'scale(' + width / 1920 + ')';
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
	        var _this2 = this;

	        window.addEventListener('resize', function () {
	            var width = document.documentElement.clientWidth,
	                height = document.documentElement.clientHeight;
	            _this2.setSize(width, height);
	        });

	        document.addEventListener("click", function (e) {
	            if (_this2.hasClass(e.target, 'nav')) {
	                e.preventDefault();
	                var target = e.target;
	                Array.from((0, _utilMethodEs6.$$)('a', (0, _utilMethodEs6.$)('#fly-main .fly-pannel-bar'))).forEach(function (item) {
	                    item.classList.remove('active');
	                });
	                target.classList.add('active');
	                var index = _this2.index(target);
	                target.parentNode.classList[index === 1 ? 'add' : 'remove']('after');
	            }
	        });
	        //alert(utilMethods.getByTagName($('a',$('#fly-main .fly-pannel-bar .btn-group'))).length)
	    },

	    ajax: function ajax(url, fn) {
	        var _this3 = this;

	        var xmlhttp = null;
	        if (window.XMLHttpRequest) {
	            // code for all new browsers
	            xmlhttp = new XMLHttpRequest();
	        }
	        if (xmlhttp != null) {
	            xmlhttp.onreadystatechange = function () {
	                _this3.stateChange(xmlhttp, fn);
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
	    }
	};

	util.ajax('temp.html', function (data) {
	    (0, _utilMethodEs6.$)("#temp").innerHTML = data;

	    _utilMethodEs6.utilMethods.tempLoaded();
	    util.init();
	});

/***/ },
/* 1 */,
/* 2 */
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

	    tempLoaded: function tempLoaded() {
	        var link = document.createElement('link');
	        link.href = './static/css/temp.min.css';
	        link.rel = 'stylesheet';
	        document.head.appendChild(link);

	        document.getElementById('temp').innerHTML += '<div class="border-effect"><img draggable="false" src="./static/images/logo1.png" alt=""></div>';

	        !Array.from && (Array.from = function (c) {
	            return Array.prototype.slice.call(c);
	        });

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