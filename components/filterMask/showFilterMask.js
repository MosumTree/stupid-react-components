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
            callback:()=>false
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
        const {callback} = _this.state;
        const filterChoiceDic = {
			0:['M','月','近1月'],
			1:['Q','季','近3月'],
			2:['HY','半年','近6月'],
			3:['Y','年','近1年'],
			4:['','更多','更多']
		}	
        return(
            <FilterMask isShow={this.state.show} isExpand = {this.state.isExpand} listDic = {filterChoiceDic} callback = {callback.bind(_this)}></FilterMask>
        )
    }
}

ReactDOM.render(<ShowFilterMask />, container)


export default function ShowFilterMaskControl (isShow,isExpand,listDic,callback) {

    let callback1 = function(key){
        that.closeView();
        callback(key);
    }

    that.setState({
        show: isShow || false,
        isExpand: isExpand,
        listDic: listDic,
        callback:callback1
    })
}