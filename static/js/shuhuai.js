!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2),o={viewWidth:document.documentElement.clientWidth,viewHeight:document.documentElement.clientHeight,header:(0,i.$)("#fly-main .fly-header"),pannelC:(0,i.$)("#fly-main .fly-panner-container"),logo:(0,i.$)("#fly-main .fly-logo"),canvas:(0,i.$)("#province-canvas")},s={init:function(){var e=this;this.setSize(),(0,i.$)("#province-canvas").width=parseFloat(this.getStyle((0,i.$)("#fly-main .fly-panner-container")).width),(0,i.$)("#province-canvas").height=parseFloat(o.pannelC.style.height),this.bindEvent();for(var t=this.renderLoading(),n=["./static/images/line.png"],s=1;32>=s;s++)n.push("./static/images/"+s+".png");var c=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];r(this,e);var n=this;n.container=t.container,n.src=t.src,n.stage=t.stage,n.speed=.01,n.render()}return a(e,[{key:"fadeIn",value:function(){var t=this;t.bit.alpha+=t.speed,t.bit.alpha>=1&&(t.bit.alpha=1),t.bit.alpha>=1&&(t.bit.alpha=1,e.iNow++)}},{key:"render",value:function(){var e=this,t=(0,i.$)("#province-canvas").height/800,n=new createjs.Bitmap(e.src).set({scaleX:t,scaleY:t});n.alpha=0,n.on("mousedown",function(e){}),e.bit=n,e.container.addChild(n),e.stage.update()}}]),e}();this.proviceArr=[],this.loading(n,function(n,r){t.prec.text=Math.round(100*n)+"%",e.proviceArr.push(new c({src:r,container:t.container,stage:t.stage})),t.stage.update()},function(n){e.proviceArr.push(new c({src:n,container:t.container,stage:t.stage})),t.container.removeChild(t.prec,t.text),e.proviceArr.forEach(function(e){e.bit.alpha=1}),t.stage.update()})},loading:function(e,t,n){function r(){if(o!==a){var s=new Image;s.onload=s.onerror=function(){i++,a-1>o?(o++,r(),t&&t(o/(a-1),s.src)):n&&n(s.src)},s.src=e[o]}}var a=e.length,i=0,o=0;r()},renderLoading:function(){var e=(0,i.$)("#province-canvas"),t=new createjs.Stage(e),n=new createjs.Container,r=new createjs.Text("Loading...","50px Arial","rgba(62, 59, 189, 1)");r.x=300,r.y=300,r.textAlign="center",r.x=e.width/2,r.y=e.height/2-20;var a=new createjs.Text("0%","50px Arial","rgba(62, 59, 189, 1)");return a.x=300,a.y=300,a.textAlign="center",n.x=(e.width-e.height/800*1700)/2,a.x=e.width/2,a.y=e.height/2+40,n.addChild(r,a),t.addChild(n),t.update(),{container:n,prec:a,stage:t,text:r}},setSize:function(){var e=arguments.length<=0||void 0===arguments[0]?o.viewWidth:arguments[0],t=arguments.length<=1||void 0===arguments[1]?o.viewHeight:arguments[1];o.pannelC.style.height=t-parseFloat(this.getStyle(o.logo).marginTop)-30-o.header.offsetHeight+"px",(0,i.$)("#fly-main .fly-logo").style.transform="scale("+e/1920+")"},getStyle:function(e){return window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle},hasClass:function(e,t){return Array.from(e.classList).indexOf(t)>-1},index:function c(e){var c=-1;return Array.from(e.parentNode.children).forEach(function(t,n){e===t&&(c=n)}),c},bindEvent:function(){var e=this;window.addEventListener("resize",function(){var t=document.documentElement.clientWidth,n=document.documentElement.clientHeight;e.setSize(t,n)}),document.addEventListener("click",function(t){if(e.hasClass(t.target,"nav")){t.preventDefault();var n=t.target;Array.from((0,i.$$)("a",(0,i.$)("#fly-main .fly-pannel-bar"))).forEach(function(e){e.classList.remove("active")}),n.classList.add("active");var r=e.index(n);n.parentNode.classList[1===r?"add":"remove"]("after")}})},ajax:function(e,t){var n=this,r=null;window.XMLHttpRequest&&(r=new XMLHttpRequest),null!=r&&(r.onreadystatechange=function(){n.stateChange(r,t)},r.overrideMimeType&&r.overrideMimeType("text/html"),r.open("GET",e,!0),r.send(null))},stateChange:function(e,t){4==e.readyState&&(200==e.status?t&&t(e.responseText):alert("Problem retrieving XML data"))}};s.ajax("temp.html",function(e){(0,i.$)("#temp").innerHTML=e,i.utilMethods.tempLoaded(),s.init()})},,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={getGuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"==e?t:3&t|8;return n.toString(16)})},r:function(e,t){return e+Math.random()*(t-e)},tempLoaded:function(){function e(e){var n=this;n.obj=e.obj||{},n.xINow=0,n.speedX=t(.05,.08),n.speedY=t(.05,.1),n.yINow=0,n.transX=0,n.transY=0,n.xLife=t(120,200),n.yLife=t(150,200)}function t(e,t){return e+Math.random()*(t-e)}function n(e,t,n){return e.addEventListener(t,function(e){n&&n(e)}),e}function r(e){return document.querySelector(e)}var a=document.createElement("link");a.href="./static/css/temp.min.css",a.rel="stylesheet",document.head.appendChild(a),document.getElementById("temp").innerHTML+='<div class="border-effect"><img draggable="false" src="./static/images/logo1.png" alt=""></div>',!Array.from&&(Array.from=function(e){return Array.prototype.slice.call(e)});var i=r(".pub-nav"),o=Array.from(i.getElementsByTagName("li"));e.prototype.move=function(){var e=this;e.xINow++,e.xINow>=e.xLife&&(e.xINow=0,e.speedX*=-1),e.yINow++,e.yINow>=e.yLife&&(e.yINow=0,e.speedY*=-1);var t=e.transX+e.speedX,n=e.transY+e.speedY;e.obj.style.transform="translate3d("+t+"px,"+n+"px,0)",e.obj.style.webkitTransform="translate3d("+t+"px,"+n+"px,0)",e.transX=t,e.transY=n};var s=new e({obj:i});setInterval(function(){s.move()},17);n(n(i,"mouseover",function(e){o.forEach(function(e,t){e.classList.add("active"),e.style.transitionDelay=80*t+"ms",e.style.webkitTransitionDelay=80*t+"ms"})}),"mouseout",function(e){o.forEach(function(e,t){e.classList.remove("active"),e.style.transitionDelay=80*(6-t)+"ms",e.style.webkitTransitionDelay=80*(6-t)+"ms"})})}};Array.from||(Array.from=function(e){return Array.prototype.slice.call(e)});var r=function(e){return document.querySelector(e)},a=function(e,t){return t=t||document,t.querySelectorAll(e)};t["default"]={utilMethods:n,$:r,$$:a},e.exports=t["default"]}]);