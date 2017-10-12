import React ,{Component}           from 'react'
import {Link}                       from 'react-router-dom'
import Style                        from './index.less'
export default class extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let _this = this;
        return  <div className={Style.indexContainer}>
                    <div>
                        {/* <div className={Style.indexTitle}>
                            MOSUM
                        </div> */}
                    </div>
                </div>
        
    }
}