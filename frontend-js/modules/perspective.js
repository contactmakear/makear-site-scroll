export default class Perspective{

    //Select DOM elements
    constructor() {
        this.container = document.querySelector(".box-elements")
        this.inner = document.querySelector(".inner")
        //this.events()
        
    }

    //Events
    events() {

        this.onMouseEnterHandler = function(event) {
            update(event)
        }
        
        this.onMouseLeaveHandler = function() {
            this.inner.style = ""
        }

        this.onMouseMoveHandler = function(event) {
            if (isTimeToUpdate()) {
                update(event)
            }
        }
        this.container.onmouseenter = this.onMouseEnterHandler
        this.container.onmouseleave = this.onMouseLeaveHandler
        this.container.onmousemove = this.onMouseMoveHandler

        this.updateTime()
        this.mouse.setOrigin(this.container);
        
    }

    //Methods
    updateTime() {
        this.counter = 0
        this.updateRate = 10
        this.isTimeToUpdate = function() {
            return counter++ % updateRate === 0
        }
    }
    

    //Mouse
    mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(event) {
            var e = event || window.event
            this.x = e.clientX - this._x
            this.y = (e.clientY - this._y) * -1
        },

        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth/2)
            this._y = e.offsetTop + Math.floor(e.offsetHeight/2)
        },
        show: function() { return '(' + this.x + ', ' + this.y + ')'}
    }
}