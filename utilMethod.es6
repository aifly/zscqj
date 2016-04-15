/**
 created by fly on 2016/4/11 0011
 */
const  utilMethods = {
    getGuid(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },
    r(m, n) {
        return (m + Math.random() * (n - m));
    },
    loading(arr, fn, fnEnd){
        var len = arr.length;
        var count = 0;
        var i = 0;
        loadimg();
        function loadimg() {
            if (i === len) {
                return;
            }
            var img = new Image();
            img.onload = img.onerror = ()=> {
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
    getStyle(obj){
        return window.getComputedStyle ? window.getComputedStyle(obj, null) : obj.currentStyle;
    },
    hasClass(obj, className){

        return Array.from(obj.classList).indexOf(className) > -1;

    },
    index(obj){
        let index = -1;
        Array.from(obj.parentNode.children).forEach((item, i)=> {
            if (obj === item) {
                index = i;
            }
        });

        return index;
    },
    bindEvent(){


        window.addEventListener('resize', ()=> {
            let width = document.documentElement.clientWidth,
                height = document.documentElement.clientHeight;
            this.setSize(width, height);
        });

        document.addEventListener("click", e=> {
            if (this.hasClass(e.target, 'nav')) {
                e.preventDefault();
                let target = e.target;
                Array.from($$('a', $('#fly-main .fly-pannel-bar'))).forEach(item=> {
                    item.classList.remove('active');
                });
                target.classList.add('active');
                let index = this.index(target);
                target.parentNode.classList[index === 1 ? 'add' : 'remove']('after');

            }
        });
        //alert(utilMethods.getByTagName($('a',$('#fly-main .fly-pannel-bar .btn-group'))).length)
    },

    ajax(url, fn){
        let xmlhttp = null;
        if (window.XMLHttpRequest) {// code for all new browsers
            xmlhttp = new XMLHttpRequest();
        }
        if (xmlhttp != null) {
            xmlhttp.onreadystatechange = ()=> {
                this.stateChange(xmlhttp, fn)
            };
            xmlhttp.overrideMimeType && xmlhttp.overrideMimeType('text/html');//设置MiME类别
            xmlhttp.open("GET", url, true);
            xmlhttp.send(null);
        }
    },
    stateChange(xmlhttp, fn){
        if (xmlhttp.readyState == 4) {// 4 = "loaded"
            if (xmlhttp.status == 200) {// 200 = OK
                fn && fn(xmlhttp.responseText)

            }
            else {
                alert("Problem retrieving XML data");
            }
        }
    },
    tempLoaded(){
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
                y = (s.transY + s.speedY);
            s.obj.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
            s.obj.style.webkitTransform = 'translate3d(' + x + 'px,' + y + 'px,0)';
            s.transX = x;
            s.transY = y;
        };


        var n = new Nav({obj:nav});
        var t = setInterval(function(){
            n.move();
        },17);

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
            })
        });

        function r(m, n) {
            return m + Math.random() * (n - m);
        }

        function addEvent(obj, event, fn) {
            obj.addEventListener(event, function (e) {
                fn && fn(e)
            });
            return obj;
        }
        function _$(selector) {
            return document.querySelector(selector);
        }
    }
}

if(!Array.from){
    Array.from = (c)=>{
        return Array.prototype.slice.call(c);
    }
}

let $ = (selector)=>{
    return document.querySelector(selector);
};
let $$= (selector,parent)=>{
    parent = parent || document;
    return parent.querySelectorAll(selector);
};



export default {utilMethods,$,$$};