parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"iqGP":[function(require,module,exports) {
var e=document.querySelector("#all"),t=document.querySelector("#websites"),d=document.querySelector("#apps"),i=document.querySelector("#components"),c=document.querySelector("#hide"),n=document.querySelector(".portfolio-container"),s=document.querySelector(".scroll-text"),o=document.querySelectorAll(".p-item"),a=document.querySelectorAll(".loader"),r=window.matchMedia("(max-width: 569px)");window.addEventListener("load",function(){a.forEach(function(e){e.classList.add("hide")})});var l=function(e){e.target.id,o.forEach(function(t){t.classList.contains(e.target.id)?(t.classList.remove("hide"),n.hidden=!1):(t.classList.add("hide"),n.hidden=!1)}),r.matches&&!s.classList.contains("hide")?s.classList.add("hide"):r.matches&&s.classList.contains("hide")&&s.classList.remove("hide"),"hide"===e.target.id&&o.forEach(function(e){e.classList.add("hide"),n.hidden=!0})};t.addEventListener("click",l),d.addEventListener("click",l),e.addEventListener("click",l),i.addEventListener("click",l),c.addEventListener("click",l),window.addEventListener("resize",scrollTextHide);
},{}]},{},["iqGP"], null)
//# sourceMappingURL=/portfolio.2ecf6732.js.map