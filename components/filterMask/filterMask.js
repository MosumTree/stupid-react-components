import React, { Component }     from 'react';
import StyleClass               from './filterMask.less';
import PropTypes                from 'prop-types';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
/* 
组件为弹出式的过滤器，接收显示，隐藏与展开，方向，列表数据，点击的回调函数
*/
class FilterMask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterMaskShow : false
		};
    };


	componentWillReceiveProps(nextProps){
        let _this = this;
        _this.setState({
            filterMaskShow: nextProps.isExpand
        })
    }
    test(key){
        this.props.callback(key);
    }
    showMask(){
        let _this = this;
        let isShowMask = _this.state.filterMaskShow;
        _this.setState({
            filterMaskShow : !isShowMask
        })
    }

    render() {
		const _this = this;
        const { isShow,listDic } = this.props;

		let{ filterMaskShow } = this.state;
		let filterMoreChoiceDicArray = [];
        
		for (let key in listDic){

			filterMoreChoiceDicArray.push(<div key = { key } onClick = {()=>_this.test(key)}>{listDic[key][2]}</div>);
            
		}
        
		let moreFilter;

		moreFilter =    <div className={StyleClass.up_item_wrap}>
                            
                            <div className={StyleClass.up_item_board}>
                                <div className={StyleClass.up_item_menu} >				
                                    { filterMoreChoiceDicArray.map((item,i)=> item) }
                                </div>
                                <div className={StyleClass.up_item_hide_btn} onClick={(e)=>
                                    {
                                        e.stopPropagation();
                                        _this.showMask()
                                    }
                                }>取消</div>
                                <div className={StyleClass.up_item_fixed_bg} onClick={(e)=>
                                        {
                                            e.stopPropagation();
                                            _this.showMask()
                                        }
                                    }>
                                </div>
                            </div>
                        </div> 

        return  isShow ? 
                    <div className={filterMaskShow ? StyleClass.filter_mask_wrap : StyleClass.hidden}>
                            {moreFilter}
					</div>: null;
    }
}


    FilterMask.propTypes = {
        isShow:         PropTypes.bool,
        resultData:     PropTypes.array,
        listDic:        PropTypes.object,
        direction:      PropTypes.string

    };

    FilterMask.defaultProps = {
        isShow:         true,
        resultData:     null,
        listDic:        ["近一个月","近3个月","近1年","近3年"],
        direction:      'down'
    };


export default FilterMask;