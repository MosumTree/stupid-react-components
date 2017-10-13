import React, { Component } from 'react';
import StyleClass           from './exampleButton.less';
import PropTypes            from 'prop-types';

class ExampleButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    };



    render() {
        let _this = this;
        const {isShow,clickCallback} = _this.props;
        return  isShow ? <div className = {StyleClass.container}  onClick = {clickCallback}>
            
        </div>: null;
    }
}


    ExampleButton.propTypes = {
        isShow:         PropTypes.bool
    };

    ExampleButton.defaultProps = {
        isShow:         true
    };


export default ExampleButton;