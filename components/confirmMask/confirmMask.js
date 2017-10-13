import React, {
    PropTypes,
    Component
} from 'react';
import Style from './confirmMask.less';

class ConfirmMask extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShow: this.props.isShow
        };
    }
    closeWindow(){
        this.setState({
            isShow: false
        })
    }
    render() {
        const _this = this;
        let {isShow,showTitle,showContent,cancel,ok,closeView,yesCallback} = this.props;
        return isShow ? 
                    <div className={Style.confirmMasker}>
                        <div>
                            <div className={Style.confirm}>
                                <div className={Style.inner}>
                                    <h2>{ showTitle }</h2>
                                    <p>{ showContent }</p>
                                    <footer>
                                        {/*这里的for属性解析成js会成为关键词，所以会报warning，所以改成htmlFor。--mousm*/}
                                        <a href="javascript:void(0)" className={Style.leftButton}  htmlFor="no" onClick={(e)=>closeView(e)}>{cancel}</a>
                                        <a href="javascript:void(0)" className={Style.rightButton}  htmlFor="yes" onClick={(e)=>yesCallback(e)}>{ok}</a>  
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div> :  null
    }
}  
export default ConfirmMask;