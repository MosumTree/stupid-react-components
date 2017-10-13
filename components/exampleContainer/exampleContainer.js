import React, { Component } from 'react';
import StyleClass           from './exampleContainer.less';
import PropTypes            from 'prop-types';

class ExampleContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isExpand:false
        };
    };


    showCode(){
        let _this = this;
        let isExpandCode = _this.state.isExpand;
        _this.setState({
            isExpand: !isExpandCode
        }) 
    }

    render() {
        let _this = this;
        const { isShow,title,code,description,children} = this.props;
        const {isExpand} = _this.state;
        return  isShow ? <div className = {StyleClass.container}>
            <div className = {StyleClass.title}>
                {title}
                <div className = {StyleClass.expandButton} onClick = {_this.showCode.bind(_this)}>

                </div>
            </div>
            <div className = {isExpand?StyleClass.codeContainer:StyleClass.hidden}>
            
            </div>
            <div className = {StyleClass.content}>
                { children ? React.cloneElement( children, {}): null }
            </div>
        </div>: null;
    }
}


    ExampleContainer.propTypes = {
        isShow:         PropTypes.bool,
        title:          PropTypes.string,
        code:           PropTypes.string,
        description:    PropTypes.string
    };

    ExampleContainer.defaultProps = {
        isShow:         true,
        title:          "",
        code:           "",
        description:    ""
    };


export default ExampleContainer;