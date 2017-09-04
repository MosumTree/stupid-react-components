import React,{Component} from 'react';
import Style from './navbar.less';
import PropTypes from 'prop-types';
class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShow: true
        }
    }
    backToIndex(){
        this.props.history.push('/');
    }
    render(){
        let _this = this;
        let isShow = _this.state.isShow;
        let title = _this.props.title;
        return isShow?
            <div>
                <div className = {Style.header}>
                    <i className ={Style.back}></i>
                    <p className ={Style.title}>{title}</p>
                    <i className ={Style.setting}></i>
                </div>
            </div>:null;
    }
}
export default Navbar;