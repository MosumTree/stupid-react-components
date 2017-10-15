/**
 * Created by Administrator on 2017/1/4 0004.
 */
import React, {
    PropTypes,
    Component
} from 'react';

class TouchItem extends Component {

     constructor(props) {
        super(props)  

        this.firstTouch;
        this.touch = {};
        this.now;
        this.delta;
        this.touchTimeout;
        this.tapTouchTimeout;
        this.deltaX = 0;
        this.deltaY = 0;

        this.state = {
            isHover: false 
        }
    }

    enter(e) {
        const _this = this;

        let firstTouch = _this.firstTouch;
        let touch = _this.touch;
        let now = _this.now;
        let delta = _this.delta;
        let touchTimeout = _this.touchTimeout;

        firstTouch = e.touches[0];

        touch.el = e.currentTarget;

        touch.x2 = undefined;
        touch.y2 = undefined;

        now = Date.now();
        delta = now - (touch.last || now);

        touchTimeout && clearTimeout(touchTimeout);

        touch.x1 = firstTouch.pageX;
        touch.y1 = firstTouch.pageY;
        touch.last = now;

        _this.tapTouchTimeout = setTimeout(()=>this.setState({isHover: true}),200);
    }

    userTouchMove(e){
        const _this = this;

        _this.tapTouchTimeout && clearTimeout(_this.tapTouchTimeout);

        let firstTouch = _this.firstTouch;
        let touch = _this.touch;
        let deltaX = _this.deltaX;
        let deltaY = _this.deltaY;

        firstTouch = e.changedTouches[0];

        touch.x2 = firstTouch.pageX;
        touch.y2 = firstTouch.pageY;

        deltaX += Math.abs(touch.x1 - touch.x2);
        deltaY += Math.abs(touch.y1 - touch.y2);
    }

    leave(e) {
        const _this = this;
        let touch = _this.touch;
        let touchTimeout = _this.touchTimeout;
        let deltaX = _this.deltaX;
        let deltaY = _this.deltaY;

        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) || (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30)){
            _this.setState({isHover: false});
        }
        else if ('last' in touch){
             // don't fire tap when delta position changed by more than 30 pixels,
            // for instance when moving to a point and back to origin
            if (deltaX < 30 && deltaY < 30) {

                touchTimeout = setTimeout(function(){
                    
                    touchTimeout = null
                    
                    if (touch.el) 
                        _this.setState({isHover: false});
                    
                    touch = {}
                }, 250);

            }
            else {
                touch = {}
            }

            deltaX = deltaY = 0;
        }

        
    }

    render() {
            const { defaultClass, HoverClass } = this.props
            const { isHover } = this.state

            const className = isHover ? HoverClass : defaultClass

            return React.cloneElement(this.props.children, {
                className: className,
                onTouchStart:(e)=>  this.enter(e),
                onTouchEnd: (e)=>   this.leave(e),
                onTouchMove: (e)=>  this.userTouchMove(e)
            })
        }
    }


    /* eslint-disable */
    TouchItem.propTypes = {
        defaultClass:   PropTypes.any,
        HoverClass:     PropTypes.any
    }


export default TouchItem;