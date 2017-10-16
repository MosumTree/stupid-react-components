import React ,{Component}   from 'react'
import {Link}               from 'react-router-dom'
import Style                from './appBar.less'
import NavBar               from 'navBar/input_navbar'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
export default class extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let _this = this;
        return  <div className={Style.indexContainer}>
                    <div className = {Style.headBar}>
                        Components
                    </div>
                    <div>
                        <div className={Style.indexTitle}>
                            
                        </div>
                    </div>
                </div>
        
    }
}