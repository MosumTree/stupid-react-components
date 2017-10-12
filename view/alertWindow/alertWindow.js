import React ,{Component}   from 'react'
import {Link}               from 'react-router-dom'
import Style                from './alertWindow.less'
import ExampleContainer     from 'exampleContainer/exampleContainer'
export default class extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let _this = this;
        return  <div className={Style.indexContainer}>
                    <div className={Style.head}> 
                        <h4 className={Style.indexTitle}>
                            Alert Window 弹窗
                        </h4>
                        <p className = {Style.description}>
                            各式各样的弹窗
                        </p>
                    </div>
                    <ExampleContainer title = {"AlertMask"}/>
                    <ExampleContainer title = {"ConfirmMask"}/>
                    <ExampleContainer title = {"FilterMask"}/>
                    <ExampleContainer title = {"FilterMask"}/>
                    <ExampleContainer title = {"FilterMask"}/>
                    <ExampleContainer title = {"FilterMask"}/>
                    <ExampleContainer title = {"FilterMask"}/>
                </div>
        
    }
}