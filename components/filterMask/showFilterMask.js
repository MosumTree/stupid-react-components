import React, { Component } from 'react'
import ReactDOM             from 'react-dom'
import FilterMask           from './filterMask'


let that = null
const container = document.createElement('div')
document.body.appendChild(container)

class ShowFilterMask extends Component{
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            listDic: null,
            isExpand: false,
            callback:()=>false,
            chosenItemName:''
        }
        that = this
    }
    
    componentWillUnmount() {
        document.removeChild(container)
    }

    closeView(){
        that.setState({
            show: true,
            isExpand:false
        });
    }

    render() {
        const _this = this;
        const {callback,listDic,chosenItemName} = _this.state;

        return(
            <FilterMask isShow={this.state.show} isExpand = {this.state.isExpand} listDic = {listDic} callback = {callback.bind(_this)} chosenItemName = {chosenItemName}></FilterMask>
        )
    }
}

ReactDOM.render(<ShowFilterMask />, container)


export default function ShowFilterMaskControl (isShow,isExpand,listDic,callback,chosenItemName) {

    let callback1 = function(key){
        that.closeView();
        callback(key);
    }

    that.setState({
        show: isShow || false,
        isExpand: isExpand,
        listDic: listDic,
        callback:callback1,
        chosenItemName:chosenItemName
    })
}