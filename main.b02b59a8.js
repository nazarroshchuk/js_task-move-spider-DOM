parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t=document.querySelector(".spider"),e=document.querySelector(".wall");document.addEventListener("click",function(c){if(c.target.classList.contains("wall")){var i=e.getBoundingClientRect(),n=e.clientWidth-t.clientWidth,l=e.clientHeight-t.clientHeight,a=c.clientX-i.x-t.clientWidth/2-10,r=c.clientY-i.y-t.clientHeight/2-10;a>n&&(a=n),a<0&&(a=0),r>l&&(r=l),r<0&&(r=0),t.style.cssText="transform: translate(".concat(a,"px, ").concat(r,"px);")}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.b02b59a8.js.map