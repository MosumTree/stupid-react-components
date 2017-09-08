import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import LoadingMask from './loadingMask'

let that = null;
const container = document.createElement('div')
document.body.appendChild(container)

class ShowLoading extends Component{
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            content: ''
        }
        that = this
    }
    
    componentWillUnmount() {
        document.removeChild(container)
    }

    render() {
        return(
            <LoadingMask isShow={this.state.show} showContent={this.state.content}></LoadingMask>
        )
    }
}

ReactDOM.render(<ShowLoading />, container)


export default function ShowLoading (isShow,msg) {
    that.setState({
        show: isShow || false,
        content: msg || "加载中..."
    })
}