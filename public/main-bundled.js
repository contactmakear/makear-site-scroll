(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(i)?i:String(i)),r)}var i}var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.enterBtn=document.querySelector("#enterBtn"),this.story=document.querySelector(".story"),this.events()}var n,o;return n=t,(o=[{key:"events",value:function(){var t=this;this.enterBtn.addEventListener("click",(function(e){e.preventDefault(),t.scrollDiv()}))}},{key:"alertBox",value:function(){alert("Alert Box!")}},{key:"scrollDiv",value:function(){window.scrollTo(0,500)}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,i(o.key),o)}}function i(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===o(e)?e:String(e)}var u=function(){function t(){var e,n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,o={_x:0,_y:0,x:0,y:0,updatePosition:function(t){var e=t||window.event;this.x=e.clientX-this._x,this.y=-1*(e.clientY-this._y)},setOrigin:function(t){this._x=t.offsetLeft+Math.floor(t.offsetWidth/2),this._y=t.offsetTop+Math.floor(t.offsetHeight/2)},show:function(){return"("+this.x+", "+this.y+")"}},(n=i(n="mouse"))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,this.container=document.querySelector(".box-elements"),this.inner=document.querySelector(".inner"),this.events()}var e,n;return e=t,(n=[{key:"events",value:function(){this.onMouseEnterHandler=function(t){update(t)},this.onMouseLeaveHandler=function(){this.inner.style=""},this.onMouseMoveHandler=function(t){isTimeToUpdate()&&update(t)},this.container.onmouseenter=this.onMouseEnterHandler,this.container.onmouseleave=this.onMouseLeaveHandler,this.container.onmousemove=this.onMouseMoveHandler,this.updateTime(),this.mouse.setOrigin(this.container)}},{key:"updateTime",value:function(){this.counter=0,this.updateRate=10,this.isTimeToUpdate=function(){return counter++%updateRate==0}}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();new n,new u})();