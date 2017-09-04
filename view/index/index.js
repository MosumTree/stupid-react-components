import React from 'react'
import {Link} from 'react-router-dom'
import Style from './index.less'
import history from 'react-router';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export default React.createClass({
    jump(e){
        this.props.history.push("/artical");
    },
    render(){
        let _this = this;
        return <MuiThemeProvider>
                <div className={Style.indexContainer}>
                    <div>
                        <div className={Style.indexTitle}>
                            MOSUM
                        </div>
                        <div className={Style.indexContext}>
                            <Link to="/artical" className={Style.element} >
                                <i className={Style.elementIcon}></i>
                                <p className={Style.elementText}>文章</p>
                            </Link>
                            <div onClick={ _this.jump} className={Style.element}>
                                <i className={Style.elementIcon}></i>
                                <p className={Style.elementText}>记录</p>
                            </div><div className={Style.element}>
                                <i className={Style.elementIcon}></i>
                                <p className={Style.elementText}>照片</p>
                            </div><div className={Style.element}>
                                <i className={Style.elementIcon}></i>
                                <p className={Style.elementText}>观影</p>
                            </div><div className={Style.element}>
                                <i className={Style.elementIcon}></i>
                                <p className={Style.elementText}>拾色</p>
                            </div><div className={Style.element}>
                                <i className={Style.elementIcon}></i>
                                <p className={Style.elementText}>设计</p>
                            </div>
                        </div>
                    </div>
                </div>
        
        </MuiThemeProvider>
    }
})