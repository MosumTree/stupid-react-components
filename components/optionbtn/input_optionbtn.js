import React, { Component } from    'react';
import StyleClass           from    './input_optionbtn.less';
import PropTypes            from    'prop-types';
import TouchItem			from 	'touchItem/touchItem';



class Input_optionBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        const _this = this;
        const { isShow,title,type,typeValue,tapCallback } = _this.props;

        let itemTpl = "";
        switch(type){
            case "tel":
                itemTpl =                               
                            <TouchItem defaultClass={ StyleClass.option_btn } HoverClass={StyleClass.list_item_hover}>
                                <li className={ StyleClass.option_btn }>
                                    <a href={ "tel:" + typeValue }>
                                        <p>{ title }</p>
                                        <span className={ StyleClass.tel_code }>{ typeValue }</span>
                                        <span className={ StyleClass.right_arrow }><i className={ StyleClass.icon_arrow_right }></i></span>
                                    </a>    
                                </li>
                            </TouchItem>;
            break;
            default:
                itemTpl =                                   
                            <TouchItem defaultClass={ StyleClass.option_btn } HoverClass={StyleClass.list_item_hover}>
                                <li className={ StyleClass.option_btn } onClick={ tapCallback }>
                                    <p dangerouslySetInnerHTML={{ __html:title }}></p>
                                    <span className={ StyleClass.right_arrow }><i className={ StyleClass.icon_arrow_right }></i></span>
                                </li>
                            </TouchItem>;
            break;
        }
        
        return  isShow ? itemTpl : null;
    }

}


Input_optionBtn.propTypes = {
    isShow:     PropTypes.bool,
    title:      PropTypes.string,
    tapCallback:PropTypes.func
};

Input_optionBtn.defaultProps = {
    isShow:     true,
    title:      "",
    tapCallback:()=>false
};


export default Input_optionBtn;