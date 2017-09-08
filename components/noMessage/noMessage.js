/**
 * Created by Administrator on 2017/1/4 0004.
 */
import React, { Component } from 'react';
import Style from './noMessage.less';
import PropTypes from 'prop-types';

class NoMessage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    };
    
    render() {
        let _this = this;
        let { pageText } = this.props;

        return  <div className = {Style.emptyPage}>
                <div className = {Style.emptyImage}></div>
                    {pageText}
        </div>;
    }
}


    NoMessage.propTypes = {
        pageText:     PropTypes.string
    };

    NoMessage.defaultProps = {
        pageText:     '暂无数据'
    };


export default NoMessage;