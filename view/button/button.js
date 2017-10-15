import React ,{Component}   from 'react'
import {Link}               from 'react-router-dom'
import Style                from './button.less'
import Button               from 'button/input_button'
import OptionBt             from 'optionbtn/input_optionbtn'
import ExampleContainer     from 'exampleContainer/exampleContainer'
import ExampleButton        from 'exampleButton/exampleButton'
import ExampleParameter     from 'exampleParameter/exampleParameter'
export default class extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let _this = this;
        let buttonList = [["isShow","bool","true","控制组件显示"],["name","string","","按钮文字"],["callback","function","()=>false","点击事件"],["status","number","1","1为可点击，其余为不可点击，背景呈灰色"],["buttonType","string","red","默认橙色，‘white’表示白色"]]
        return  <div className={Style.indexContainer}>
                    <div className={Style.head}> 
                        <h4 className={Style.indexTitle}>
                            Button 按钮
                        </h4>
                        <p className = {Style.description}>
                            
                        </p>
                    </div>
                    <ExampleContainer title = {"Button"}>
                        <div className = {Style.componentContainer}>
                            <ExampleParameter tableList = {buttonList}/>
                            <Button name = {'我是一个按钮'} status = {1} buttonType = {"red"}/>
                        </div>
                    </ExampleContainer>
                    <ExampleContainer title = {"Button"}>
                        <div className = {Style.componentContainer}>
                            <ExampleParameter tableList = {buttonList}/>
                            <OptionBt />
                        </div>
                    </ExampleContainer>
                </div>
        
    }
}