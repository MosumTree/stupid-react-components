import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ConfirmMask from './confirmMask'

let that = null
const container = document.createElement('div')
document.body.appendChild(container)

class ShowConfirm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            content: '',
            title: '',
            cancel: '',
            ok:''
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
    confirm(){
        that.setState({
            isShow: false
        });
        alert('success')
    }
    render() {
        return(
            <ConfirmMask isShow={this.state.isShow} showTitle={this.state.title} showContent={this.state.content} cancel={this.state.cancel} ok={this.state.ok} closeView={this.state.noCallback} yesCallback={this.state.yesCallback}></ConfirmMask>
        )
    }
}

ReactDOM.render(<ShowConfirm />, container)


export default function ShowConfirm (isShow,tit,msg,cancel,ok,noCallback,yesCallback) {
    that.setState({
        isShow:           isShow || false,
        title:          tit||'温馨提示',
        content:        msg || "正文",
        cancel:         cancel||"取消",
        ok:             ok||"确认",
        noCallback:     noCallback || that.closeView,
        yesCallback:    yesCallback || that.confirm
    })
}