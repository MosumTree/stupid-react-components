import React, {
    PropTypes,
    Component
} from 'react';
import Style from './alertMask.less';

class AlertMask extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        const _this = this; 
        const {isShow,showContent,closeView} = _this.props;
        return  isShow ? 
                    <div className={Style.alertMasker}>
                        <div>
                            <div className={Style.alert}>
                                <div className={Style.inner}>
                                    <h2>温馨提示</h2>
                                    <p>{ showContent }</p>
                                    <footer>
                                        <a href="javascript:void(0);" className={Style.button} htmlFor="yes" onClick={(e)=>closeView(e)}>确定</a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>  :  null
    }
}  

export default AlertMask;