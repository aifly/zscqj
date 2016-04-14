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

        this.setSize();
        $("#province-canvas").width = parseFloat(this.getStyle($('#fly-main .fly-panner-container')).width);
        $("#province-canvas").height = parseFloat(data.pannelC.style.height);
        this.bindEvent();
        let d = this.renderLoading();

        let imgArr = ['./static/images/line.png'];
        for (let i = 1; i <= 32; i++) {
            imgArr.push('./static/images/' + i + '.png');
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

            fadeIn() {
                let s = this;
                s.bit.alpha += s.speed;

                s.bit.alpha >= 1 && (s.bit.alpha = 1);
                if(s.bit.alpha >= 1){
                    s.bit.alpha = 1;
                    BitMap.iNow++;
                }
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
                s.stage.update();
            }
        }
        this.proviceArr = [];
        this.loading(imgArr, (p, s)=> {
            d.prec.text = Math.round(p * 100) + "%";

            this.proviceArr.push(new BitMap({src: s, container: d.container, stage: d.stage}));

            d.stage.update();


        }, (s)=> {

            this.proviceArr.push(new BitMap({src: s, container: d.container, stage: d.stage}));

            d.container.removeChild(d.prec, d.text);
            this.proviceArr.forEach(item=>{
                item.bit.alpha =1;
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

        })

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
        stage.update();

        /*  createjs.Ticker.timingMode = createjs.Ticker.RAF;
         createjs.Ticker.on('tick', tick);

         var i = 0;

         function tick(evt) {
         stage.update();
         }*/

        return {container, prec, stage, text};
    },

    setSize(width = data.viewWidth, height = data.viewHeight){
        data.pannelC.style.height = (height - parseFloat(this.getStyle(data.logo).marginTop) - 30 - data.header.offsetHeight) + 'px';
        // $("#province-canvas").width = parseFloat(this.getStyle($('#fly-main .fly-panner-container')).width);
        // $("#province-canvas").height = parseFloat(data.pannelC.style.height);
        $('#fly-main .fly-logo').style.transform = 'scale(' + (width / 1920) + ')';
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
    }
};

util.ajax('temp.html', data=> {
    $("#temp").innerHTML = data;

    utilMethods.tempLoaded();
    util.init();
});