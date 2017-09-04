import React,{Component} from 'react';
import Style from './articalView.less';
import PropTypes from 'prop-types';
class ArticalView extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShow: true
        }
    }
    render(){
        let _this = this;
        let isShow = _this.state.isShow;
        let title = _this.props.title;
        return isShow?
            <div className={Style.container}>
                <div className={Style.title}>数组的扩展</div>
                <div className={Style.abstract}>摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要</div>
                <div className={Style.detail}>
                    <div className={Style.time}>2017-08-04</div>
                    <div className={Style.readRecord}>阅读</div>
                </div>
            </div>:null;
    }
}
export default ArticalView;