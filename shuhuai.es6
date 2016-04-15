/**
 created by fly on 2016/4/13 0013
 */
import {utilMethods,$,$$} from  './utilMethod.es6';

let data = {
    viewWidth: document.documentElement.clientWidth,
    viewHeight: document.documentElement.clientHeight,
    header: $('#fly-main .fly-header'),
    pannelC: $('#fly-main .fly-panner-container'),
    logo: $('#fly-main .fly-logo'),
    canvas: $("#province-canvas")
}


let util = {
    init(){

        $("#temp .border-effect").classList.add("stop");

        this.setSize();
        $("#province-canvas").width = parseFloat(utilMethods.getStyle($('#fly-main .fly-panner-container')).width);
        $("#province-canvas").height = parseFloat(data.pannelC.style.height);
        this.bindEvent();
        let d = this.renderLoading();

        let imgArr = ['./static/images/line.png'];
        for (let i = 1; i <= 32; i++) {
            imgArr.push('./static/images/' + i + '.png');
        }
        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        createjs.Ticker.on('tick', tick);

        var a = 0;

        function tick(evt) {
            !a && d.stage.update();
        }
        class BitMap {
            constructor(option = {}) {
                let s = this;
                s.container = option.container;
                s.src = option.src;
                s.stage = option.stage;
                s.speed = .01;
                s.render();
            }


            render() {
                let s = this;
                let scale = $("#province-canvas").height / 800;
                let bit = new createjs.Bitmap(s.src).set({scaleX: scale, scaleY: scale});
                bit.alpha = 0;
                bit.on('mousedown', e=> {

                })
                s.bit = bit;
                s.container.addChild(bit);

            }
        }
        this.proviceArr = [];
        utilMethods.loading(imgArr, (p, s)=> {
            d.prec.text = Math.round(p * 100) + "%";
            this.proviceArr.push(new BitMap({src: s, container: d.container, stage: d.stage}));


        }, (s)=> {

            this.proviceArr.push(new BitMap({src: s, container: d.container, stage: d.stage}));

            d.container.removeChild(d.prec, d.text);

            let iNow = 1;
            let t = setInterval(()=> {

                if (this.proviceArr[iNow]) {
                    createjs.Tween.get(this.proviceArr[iNow].bit, {loop: false})
                    .to({alpha: 1}, 1500, createjs.Ease.bounceOut);
                }
                else {
                    clearInterval(t);
                    createjs.Tween.get(this.proviceArr[0].bit, {loop: false})
                    .to({alpha: 1}, 1500, createjs.Ease.bounceOut).call(()=> {
                        a = 1;
                        $("#temp .border-effect").classList.remove("stop");
                    });
                }
                iNow++;
            }, 300);

        })

    },
    renderLoading(){
        let canvas = $('#province-canvas');
        let stage = new createjs.Stage(canvas);
        let container = new createjs.Container();


        let text = new createjs.Text("Loading...", "50px Arial", "rgba(62, 59, 189, 1)");
        text.x = 300;
        text.y = 300;
        text.textAlign = "center";
        //text.textBaseline = "top";

        text.x = canvas.width / 2;
        text.y = canvas.height / 2 - 20;


        let prec = new createjs.Text("0%", "50px Arial", "rgba(62, 59, 189, 1)");
        prec.x = 300;
        prec.y = 300;
        prec.textAlign = "center";
        //text.textBaseline = "top";

        container.x = (canvas.width - canvas.height / 800 * 1700) / 2;

        prec.x = canvas.width / 2;
        prec.y = canvas.height / 2 + 40;
        container.addChild(text, prec);
        stage.addChild(container);
        return {container, prec, stage, text};
    },

    setSize(width = data.viewWidth, height = data.viewHeight){
        data.pannelC.style.height = (height - parseFloat(utilMethods.getStyle(data.logo).marginTop) - 30 - data.header.offsetHeight) + 'px';
        // $("#province-canvas").width = parseFloat(utilMethods.getStyle($('#fly-main .fly-panner-container')).width);
        // $("#province-canvas").height = parseFloat(utilMethods.pannelC.style.height);
        $('#fly-main .fly-logo').style.transform = 'scale(' + (width / 1920) + ')';
    },
    bindEvent(){
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
                target.classList.add('active');
                let index = utilMethods.index(target);
                target.parentNode.classList[index === 1 ? 'add' : 'remove']('after');
            }
        });
    }
};

utilMethods.ajax('temp.html', data=> {
    $("#temp").innerHTML = data;
    utilMethods.tempLoaded();
    util.init();
});