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
    }
}

if(!Array.from){
    Array.from = (c)=>{
        return Array.prototype.slice.call(c);
    }
}

let $ = (selector)=>{
    return document.querySelector(selector);
}



export default {utilMethods,$};