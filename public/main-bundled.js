(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function n(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}new(function(){function e(){var t,i,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,o={_x:0,_y:0,x:0,y:0,updatePosition:function(e){var t=e||window.event;this.x=t.clientX-this._x,this.y=-1*(t.clientY-this._y)},setOrigin:function(e){this._x=e.offsetLeft+Math.floor(e.offsetWidth/2),this._y=e.offsetTop+Math.floor(e.offsetHeight/2)},show:function(){return"("+this.x+", "+this.y+")"}},(i=n(i="mouse"))in t?Object.defineProperty(t,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[i]=o,this.container=document.querySelector(".box-elements"),this.inner=document.querySelector(".inner")}var i,o;return i=e,(o=[{key:"events",value:function(){this.onMouseEnterHandler=function(e){update(e)},this.onMouseLeaveHandler=function(){this.inner.style=""},this.onMouseMoveHandler=function(e){isTimeToUpdate()&&update(e)},this.container.onmouseenter=this.onMouseEnterHandler,this.container.onmouseleave=this.onMouseLeaveHandler,this.container.onmousemove=this.onMouseMoveHandler,this.updateTime(),this.mouse.setOrigin(this.container)}},{key:"updateTime",value:function(){this.counter=0,this.updateRate=10,this.isTimeToUpdate=function(){return counter++%updateRate==0}}}])&&t(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),e}());var i=document.querySelector(".project-thumbnail-1"),o=document.querySelector(".project-thumbnail-2"),r=document.querySelector(".project-thumbnail-3");i.addEventListener("click",(function(){i.parentElement.children[1].classList.remove("hide-me")})),o.addEventListener("click",(function(){o.parentElement.children[1].classList.remove("hide-me")})),r.addEventListener("click",(function(){r.parentElement.children[1].classList.remove("hide-me")}));var c=document.getElementById("closeIcon1"),s=document.getElementById("closeIcon2"),u=document.getElementById("closeIcon3");c.addEventListener("click",(function(){i.parentElement.children[1].classList.add("hide-me")})),s.addEventListener("click",(function(){o.parentElement.children[1].classList.add("hide-me")})),u.addEventListener("click",(function(){r.parentElement.children[1].classList.add("hide-me")}))})();