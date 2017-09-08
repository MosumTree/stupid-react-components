import React ,{Component}   from 'react'
import {Link}               from 'react-router-dom'
import Style                from './button.less'
import Button               from 'button/input_button'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
export default class extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let _this = this;
        return  <div className={Style.indexContainer}>
                    <div>
                        <div className={Style.indexTitle}>
                            <Button/>
                        </div>
                    </div>
                </div>
        
    }
}