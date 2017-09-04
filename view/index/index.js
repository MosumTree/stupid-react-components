import React ,{Component}from 'react'
import {Link} from 'react-router-dom'
import Style from './index.less'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { slide as Menu } from 'react-burger-menu'
export default class extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let _this = this;
        // return  <div className={Style.indexContainer}>
        //             <div>
        //                 <div className={Style.indexTitle}>
        //                     MOSUM
        //                 </div>
        //             </div>
        //         </div>
        return 
        <Menu>
            <div onClick={ this.showSettings } className="menu-item--small">Settings</div>
        </Menu>
        
    }
}