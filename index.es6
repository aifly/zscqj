/**
 created by fly on 2016/4/11 0011
 */
import {utilMethods} from  './utilMethod.es6';
import {$} from './utilMethod.es6';
import './static/libs/EasePack.min';
import './static/libs/TweenLite.min';
import './static/js/header-canvas';


let data = {
    viewWidth: document.documentElement.clientWidth,
    viewHeight: document.documentElement.clientHeight,
    transitionEnd: 'onwebkittransitionend' in window ? 'webkitTransitionEnd' : 'transitionend',
    flyMain: $('#fly-main'),
    headerCanvas: $("#sideshow-canvas"),
    ar: document.getElementsByClassName('ar'),
    logo: $('#fly-main .fly-logo'),
    text: $('#fly-main .fly-text p')

};

let util = {
    init(){
        let s = this;
        s.setBg();
        s.setSize();
        s.setDefault();
        window.addEventListener('resize', ()=> {
            let width = document.documentElement.clientWidth,
                height = document.documentElement.clientHeight;
            s.setSize(width, height);
            s.setDefault(width);
        });

        let canvas = $("#nav-canvas");
        let stage = new createjs.Stage(canvas);
        let container = new createjs.Container();
        let width = canvas.width,
            height = canvas.height;

        stage.enableMouseOver(10);
        //stage.mouseEnabled = true;
        stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas


        class Shape {
            constructor(option) {
                [this.src, this.x, this.y, this.width, this.name] = [...option];
                this.create();
                this.iNowX = 0;
                this.iNowY = 0;
                this.speedX = utilMethods.r(.01, .08);
                this.speedY = utilMethods.r(.01, .1);
                this.xLife = utilMethods.r(100, 140);
                this.yLife = utilMethods.r(200, 300);
            }

            create() {
                let s = this;
                let c1 = new createjs.Bitmap(s.src).set({scaleX: .8, scaleY: .8, x: s.x, y: s.y});
                s.name && ( c1.cursor = 'pointer');
                s.shape = c1;
                c1.name = s.name;
                container.addChild(c1);

                c1.on('mousedown', (e)=> {
                    var a = document.createElement('a');
                    a.href = e.currentTarget.name+'.html';
                    a.target = "_blank";
                    a.click();
                })

            }

            move() {

                let s = this;
                s.iNowY++;
                if (s.iNowY > s.yLife) {
                    s.iNowY = 0;
                    s.speedY *= -1;
                }
                s.iNowX++;
                if (s.iNowX > s.xLife) {
                    s.iNowX = 0;
                    s.speedX *= -1;
                }
                s.shape.y += s.speedY;
                s.shape.x += s.speedX;

                s.drawLine();
            }

            drawLine() {
                let lineColor = "#097dff";
                container.removeChild(Shape.line);
                Shape.line = new createjs.Shape();
                Shape.line.graphics.beginStroke(lineColor).setStrokeStyle(1).moveTo(shapeArr[0].x + shapeArr[0].width / 2 * .8, shapeArr[0].y + shapeArr[0].width / 2 * .8);

                shapeArr.forEach((item)=> {
                    Shape.line.graphics.lineTo(item.shape.x + item.width * .8 / 2, item.shape.y + item.width * .8 / 2)
                });
                container.addChildAt(Shape.line, 0);
            }
        }


        this.addMoveEffect();
        this.addTextEffect();


        let dataArr = [
            {
                x: 40,
                y: height / 4,
                src: "./static/images/c1.png",
                width: 40,
                name: ""
            },
            {
                x: 80,
                y: 110,
                src: "./static/images/huigu.png",
                width: 150,
                name: "huigu"
            },
            {
                x: 250,
                y: 170,
                src: "./static/images/c2.png",
                width: 34,
                name: ""
            },
            {
                x: 300,
                y: 70,
                src: "./static/images/shuhuai.png",
                width: 150,
                name: "shuhuai"

            },
            {
                x: 460,
                y: 100,
                src: "./static/images/tushuo.png",
                width: 150,
                name: "tushuo"
            },
            {
                x: 620,
                y: 100,
                src: "./static/images/c2.png",
                width: 34,
                name: ''
            },
            {
                x: 670,
                y: 170,
                src: "./static/images/licheng.png",
                width: 150,
                name: "licheng"
            },
            {
                x: 840,
                y: 220,
                src: "./static/images/c2.png",
                width: 34,
                name: ""
            },
            {
                x: 900,
                y: 100,
                src: "./static/images/rongyu.png",
                width: 150,
                name: "fengcai"
            }, {
                x: 1100,
                y: 180,
                src: "./static/images/c1.png",
                width: 40,
                name: ""
            }
        ];

        let shapeArr = [];
        dataArr.forEach((item)=> {
            shapeArr.push(new Shape([item.src, item.x, item.y, item.width, item.name]));
        });

        stage.addChild(container);

        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        createjs.Ticker.on('tick', tick, this);

        function tick(evt) {
            shapeArr.forEach(item=>item.move());
            stage.update();
        }

    },
    addMoveEffect(){
        let centerX = data.logo.offsetLeft + data.logo.parentNode.offsetLeft + data.logo.offsetWidth / 2;
        let centerY = data.logo.offsetTop + data.logo.parentNode.offsetTop + data.logo.offsetHeight / 2;
        document.addEventListener('mousemove', (e)=> {
            let x = e.pageX,
                y = e.pageY;
            let rotateX = -((y - centerY) / 40),
                rotateY = ((x - centerX) / 30);
            Array.from(data.ar).forEach((ar, i)=> {
                let l = (x / (i + 1) / 30),
                    t = (y / (i + 1) / 30);
                ar.style.transform = 'translate3d(' + l + 'px,' + t + 'px,' + l + 'px) rotateX(' + rotateX/2 + 'deg) rotateY(' + rotateY/2 + 'deg)' ;
                ar.style.webkitTransform = 'translate3d(' + l + 'px,' + t + 'px,' + l + 'px) rotateX(' + rotateX/2 + 'deg) rotateY(' + rotateY/2 + 'deg)';
                ar.style.oTransform = 'translate3d(' + l + 'px,' + t + 'px,' + l + 'px) rotateX(' + rotateX/2 + 'deg) rotateY(' + rotateY/2 + 'deg)';
                ar.style.mozTransform = 'translate3d(' + l + 'px,' + t + 'px,' + l + 'px) rotateX(' + rotateX/2 + 'deg) rotateY(' + rotateY/2 + 'deg)';

            });


            data.logo.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
            data.logo.style.webkitTransform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
            data.logo.style.otransform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
            data.logo.style.mozTransform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
        });

    },

    addTextEffect(){
        let html = "";
        data.text.innerHTML.split('').forEach(item=> {
            html += "<span class='word'>" + item + "</span>";
        });
        data.text.innerHTML = html;
        let aSpan = Array.from(data.text.getElementsByClassName('word'));

        var iNow = 0;
        let t = setInterval(()=>{
            if(aSpan[iNow]){
                aSpan[iNow].classList.add("active");
            }
            else{
                clearInterval(t);
            }
            iNow++;
        },70)



    },

    setDefault(width = data.viewWidth){
        document.getElementsByTagName('html')[0].style.fontSize = width / 10 + 'px';
    },
    setSize (width = data.viewWidth, height = data.viewHeight){
        data.headerCanvas.width = width;
        data.headerCanvas.height = height / 3;
    },
    setBg(){

    }
}

util.init();



