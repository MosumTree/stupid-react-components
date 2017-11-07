import React, { Component }     from 'react';
import StyleClass               from './filterMask.less';
import PropTypes                from 'prop-types';


class FilterMask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterMaskShow : false,
            chosenItem:0
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
        this.setState({
            chosenItem:key
        })
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
        const { isShow,listDic,chosenItemName } = this.props;



		let{ filterMaskShow ,chosenItem} = this.state;
		let filterMoreChoiceDicArray = [];
        

		for (let key in listDic){
            if (listDic[key][2] == chosenItemName) {
                filterMoreChoiceDicArray.push(<div className = {StyleClass.up_item_menu_title} key = { key } onClick = {()=>_this.test(key)}>{listDic[key][2]}</div>);
            }
            else{
			    filterMoreChoiceDicArray.push(<div key = { key } onClick = {()=>_this.test(key)}>{listDic[key][2]}</div>);
            }
		}
        
		let moreFilter;

		moreFilter =    <div className={StyleClass.up_item_wrap}>
                            
                            <div className={StyleClass.up_item_board}>
                                
                                <div className={filterMaskShow ?StyleClass.bgShow:StyleClass.up_item_fixed_bg} onClick={
                                    filterMaskShow ?(e)=>
                                        {
                                            e.stopPropagation();
                                            _this.showMask()
                                        }
                                    :()=>false}>
                                </div>
                                <div className={StyleClass.up_item_menu} >		
                                    { filterMoreChoiceDicArray.map((item,i)=> item) }
                                    <p className = {StyleClass.divide}></p>
                                    <p className={StyleClass.up_item_hide_btn} onClick={(e)=>
                                    {
                                        e.stopPropagation();
                                        _this.showMask()
                                    }
                                    }>取消</p>
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
        direction:      PropTypes.string,
        chosenItemName: PropTypes.string

    };

    FilterMask.defaultProps = {
        isShow:         true,
        resultData:     null,
        listDic:        null,
        direction:      'down',
        chosenItemName: ''
    };


export default FilterMask;