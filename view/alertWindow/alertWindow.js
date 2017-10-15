import React ,{Component}   from 'react'
import {Link}               from 'react-router-dom'
import Style                from './alertWindow.less'
import ExampleContainer     from 'exampleContainer/exampleContainer'
import ExampleButton        from 'exampleButton/exampleButton'
import ExampleParameter     from 'exampleParameter/exampleParameter'
import ShowAlert            from 'alertMask/showAlert'
import ShowConfirm          from 'confirmMask/showConfirm'
import ShowFilter           from 'filterMask/showFilterMask'
import ShowLoading          from 'loadingMask/showLoading'
export default class extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        ShowFilter(true,false)
    }
    render(){
        let _this = this;
        let alertList = [["isShow","bool","true","控制组件显示"],["showContent","string","No Message","弹窗正文"],["closeView","function","","按钮回调事件"]]
        let confirmList = [["isShow","bool","true","控制组件显示"],["showContent","string","No Message","弹窗正文"],["closeView","function","","按钮回调事件"],["isShow","bool","true","控制组件显示"],["showContent","string","No Message","弹窗正文"],["closeView","function","","按钮回调事件"]]
        let loadingList = [["isShow","bool","true","控制组件显示"],["showContent","string","加载中","弹窗正文"]]
        return  <div className={Style.indexContainer}>
                    <div className={Style.head}> 
                        <h4 className={Style.indexTitle}>
                            Alert Window 弹窗
                        </h4>
                        <p className = {Style.description}>
                            单键弹窗：Alertmask;<br/>
                            双键弹窗：Confirmmask;<br/>
                            过滤弹窗：Filtermask;<br/>
                            加载弹窗：Loadingmask;
                        </p>
                    </div>
                    <ExampleContainer title = {"AlertMask"}>
                        <div className = {Style.componentContainer}>
                            <ExampleParameter tableList = {alertList}/>
                            <ExampleButton clickCallback = {()=>ShowAlert(true)}/>
                        </div>
                    </ExampleContainer>
                    <ExampleContainer title = {"ConfirmMask"}>
                    <div className = {Style.componentContainer}>
                        <ExampleParameter tableList = {confirmList}/>
                        <ExampleButton clickCallback = {()=>ShowConfirm(true)}/>
                            </div>
                    </ExampleContainer>
                    <ExampleContainer title = {"FilterMask"}>
                    <div className = {Style.componentContainer}>
                        <ExampleParameter tableList = {alertList}/>
                        <ExampleButton clickCallback = {()=>ShowFilter(true,true)}/>
                            </div>
                    </ExampleContainer>
                    <ExampleContainer title = {"LoadingMask"}>
                    <div className = {Style.componentContainer}>
                        <ExampleParameter tableList = {loadingList}/>
                        <ExampleButton clickCallback = {()=>{ShowLoading(true);setTimeout(function() {
                            ShowLoading(false)
                        }, 3000);}}/>
                            </div>
                    </ExampleContainer>
                </div>
        
    }
}