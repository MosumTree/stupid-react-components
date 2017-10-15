import React, { Component } from 'react';
import StyleClass           from './input_button.less';
import PropTypes            from 'prop-types';


class input_button extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    };



    render() {
        const { isShow,name,callback,status,buttonType } = this.props;
        let tempClass = "";
        switch(buttonType){
            case "white":
                tempClass = status == 1 ? StyleClass.white_button : StyleClass.white_button+ " " + StyleClass.unable;
                break;
            default:
                tempClass = status == 1 ? StyleClass.button : StyleClass.button + " " + StyleClass.unable;
                break;
        }

        return  isShow ? <span onClick={ callback } className={ tempClass }>{ name }</span>: null;
    }
}


    input_button.propTypes = {
        name:           PropTypes.string,
        status:         PropTypes.number,
        callback:       PropTypes.func,
        buttonType:     PropTypes.string,
        isShow:         PropTypes.bool
    };

    input_button.defaultProps = {
        name:           "",
        status:         1,
        isShow:         true,
        buttonType:     "red",
        callback:       ()=>false
    };


export default input_button;