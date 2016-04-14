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