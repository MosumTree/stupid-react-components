/**
 * Created by Administrator on 2017/1/4 0004.
 */
import React, { Component } from 'react';
import Style from './refreshDown.less';
import PropTypes from 'prop-types';

class RefreshDown extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        let _this = this;
        const { isShow,state } = _this.props;
        let tempStateContent = null;

        switch(state + ""){
            case "1":
                tempStateContent =      <div className={ Style.pullFreshDownInner }>
                                            <i className={ Style.pullFreshDownIcon }></i>
                                            <span className={ Style.pullFreshDownLabel }>正在加载数据</span>
                                        </div>;
                break;
            case "2":
                tempStateContent =      <div className={ Style.pullFreshDownInner }>
                                            <span className={ Style.pullFreshDownLabel }>已经到底了</span>
                                        </div>;
                break;
        }
            
        return  isShow ? <div className={Style.pullFreshDown}>{ tempStateContent } </div>: null
    }
}


    RefreshDown.propTypes = {
        isShow:     PropTypes.bool,
        state:      PropTypes.number
    };

    RefreshDown.defaultProps = {
        isShow:     true,
        state:      0
    };


export default RefreshDown;