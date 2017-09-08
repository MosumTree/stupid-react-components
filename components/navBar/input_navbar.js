/**
 * Created by Administrator on 2017/1/4 0004.
 */
import React, { Component } from 'react';
import Style from './input_navbar.less';
import PropTypes from 'prop-types';

class Input_NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        };
    };

    render() {
        const {closeView,isShow,title} = this.props;
        return  this.state.isShow && isShow ? <header className={Style.navbar}>
                    <div className={Style.nav_bar_left}>
                        <div className={Style.button_inner} onClick={(e)=>closeView(e)}>
                            <i className={Style.back_icon}></i>
                        </div>
                    </div>

                    <h1>{title}</h1>

                    <div className={Style.nav_bar_right}>
                        <div className={Style.button_inner}></div>
                    </div>

                </header> : null
    }
}


    Input_NavBar.propTypes = {
        closeView:  PropTypes.func,
        isShow:     PropTypes.bool,
        title:      PropTypes.string
    };

    Input_NavBar.defaultProps = {
        closeView:  ()=>history.back(),
        isShow:     true,
        title:      '天天基金网'
    };


export default Input_NavBar;