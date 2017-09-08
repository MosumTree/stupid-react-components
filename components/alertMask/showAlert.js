import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AlertMask from './alertMask'


let that = null
const container = document.createElement('div')
document.body.appendChild(container)

class ShowAlert extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            content: '',
            callbcack:()=>false
        }
        that = this
    }
    
    componentWillUnmount() {
        document.removeChild(container)
    }

    closeView(){
        that.setState({
            isShow: false
        });
    }

    render() {
        const _this = this;
        return(
            <AlertMask isShow={this.state.isShow} showContent={this.state.content} closeView={this.state.callback}></AlertMask>
        )
    }
}

ReactDOM.render(<ShowAlert />, container)


export default function ShowAlertControl (isShow,msg,callback) {

    let callback1 = function(){
        that.closeView();
        if (callback) {
            callback();
        }
        
    }

    that.setState({
        isShow: isShow || false,
        content: msg || "No Message",
        callback:callback1
    })
}

export { that as ShowAlertComponent }