import React, { Component } from 'react';
import Style from './topInform.less';
import PropTypes from 'prop-types';

class TopInform extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShow: props.isShow
        };
    }

    closeView(e){
        this.setState({
            isShow:false
        });
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            isShow: nextProps.isShow
        });
    }

    render() {
        const _this = this;
        const { isShow } =  _this.state;
        const { content,tapCallback } = _this.props;

        return  isShow ? 
                    <div className={Style.inform_container}>

                        <div className={Style.inform_view}>
                            <i className={Style.inform_icon}></i>
                        </div>
                        
                        <div className={Style.inform_text_wrapper} onClick={ tapCallback }>{ content }</div>
                        
                        <div className={Style.close_view} onClick={ _this.closeView.bind(_this) }>
                            <i className={Style.close_icon}></i>
                        </div>
                    
                    </div>  :  null
    }
}  


TopInform.propTypes = {
    isShow:             PropTypes.bool,
    content:            PropTypes.string,
    tapCallback:        PropTypes.func
};

TopInform.defaultProps = {
    isShow:             true,
    content:            "",
    tapCallback:        ()=>false
};

export default TopInform;