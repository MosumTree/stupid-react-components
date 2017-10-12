import React, { Component }     from 'react';
import ReactDOM                 from "react-dom";
import StyleClass               from './childChoiceBar.less';
import PropTypes                from 'prop-types';
import Svg 				        from './svg.js';
import common 			    	from 	'common';
const listItem = [
    ["全部类型","保险理财","券商产品","私募固收"],
    ["全部期限","≤3月","3~6月(含)","6~12月(含)",">12月"],
    ["全部起购","≤1000元","≤5万","≤20万",">20万"],
    ["默认排序","全部产品 / 收益排序","券商产品 / 收益排序","券商产品 / 3月内期限 / 收益排序","券商产品 / 购买热度排序"]
]
class ChildChoiceBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chosed:             [0,0,0,0],          //数组元素值是4个tab键上被选中的产品类型号
            listNum:            0,                  //tab键的序号   
            isExpand:           [0,0,0,0],          //控制4个展开列表
            isShowList:         false,              //列表是否展开的标识
            isFixedBar:         0,                  //是否要把tab栏置顶
            chosedTag:          ["","","",""],       //记录选中的标签
            pageHeight:         0,
            barPos:             442,
            listenLock:         false
            
        };
    };
    getTop(e){
          var offset=e.offsetTop;
           if(e.offsetParent!=null) offset+=this.getTop(e.offsetParent);
           return offset;
    }
    componentDidMount(){
        setTimeout(()=>{
            let thisPage = this.props.page;
            let choosePage = $(ReactDOM.findDOMNode(thisPage.refs["indexScroll"]))
            //var pos = document.getElementById('toplist').offsetTop;
            var pos = this.getTop(document.getElementById('toplist'));

            this.setState({
                barPos: pos
            })
        },100)
    };
    toTheTop(n){
        let thisPage = this.props.page;
        let isAndroid = $.getDeviceType()=="ios"?false:true;
        let choosePage = isAndroid?$(ReactDOM.findDOMNode(thisPage.refs["indexScroll"])):$(ReactDOM.findDOMNode(thisPage.refs["indexChildScroll"]))
        // //var pos = document.getElementById('toplist').offsetTop;
        //console.log($(ReactDOM.findDOMNode(thisPage.refs["indexChildScroll"])).scrollTop())
        let pos = this.state.barPos;
        if (n||!isAndroid) {
            setTimeout(()=>choosePage.scrollTo({
					endY: pos,
					duration: 200
		    }),0)
        }
    }
    componentWillReceiveProps(nextProps){
        let pagePosition = nextProps.indexPageOffset;
        let pageHeight = nextProps.pageHeight;
        let {fixedBarCallback} = nextProps;
        let {isShowList,barPos,listenLock} = this.state;
        
        let _this = this;

        //这里点了标签栏×，tab会fixed = 0，这时往上滑pagePosition会
        if (pagePosition>=barPos&&listenLock) {
            if (isShowList) {
                _this.setState({
                    isFixedBar:1,
                    "listenLock" : false
                })
            }else{
                _this.setState({
                    isFixedBar:2,
                    "listenLock" : false
                })
            }
        }
        else if(pagePosition<barPos&&!listenLock){
            _this.setState({
                isFixedBar:0,
                "listenLock" : true
            })
        }

    }
    preventScroll(){
        event.preventDefault();
    }
    expandList(n,e){
        let _this = this;
        let isExpandFlag = _this.state.isExpand;
        let {isShowList,choosePage,pageHeight} = _this.state;
        //存储被点击的flag值，其它被重置，点击的重新取反
        let isExpandClick = isExpandFlag[n];
        isExpandFlag = [0,0,0,0];
        isExpandFlag[n] = !isExpandClick;
        //console.log(isExpandFlag[n],isShowList)
        document.querySelector('body').addEventListener('touchmove', _this.preventScroll);
        setTimeout(()=>{
            _this.setState({
                listNum : n,
                isExpand: isExpandFlag,
                isShowList: isExpandFlag[n],
                isFixedBar: 1
            })
            if(!isExpandFlag[n]&&isShowList){
                _this.setState({
                    isFixedBar: 2
                })
            }
        },isShowList?0:200);

        this.toTheTop(!_this.state.isFixedBar);
    }
    //最终选择 这个地方应该是我们做请求的地方
    chooseType(topListNum,bottomListNum){
        let _this = this;
        let arrayList = _this.state.chosed;
        let {chosedTag} = _this.state;
        arrayList[topListNum] = bottomListNum;
        document.querySelector('body').removeEventListener('touchmove',_this.preventScroll);
        if (bottomListNum>0) {
            chosedTag[topListNum] = listItem[topListNum][bottomListNum];
            //选的第4个tab键，其它选择清除 这个地方第4个tab键要做特殊处理
            if (topListNum == 3) {
                chosedTag = ['','','','']
                switch (bottomListNum) {
                    case 0:
                        arrayList = [0,0,0,bottomListNum];
                        chosedTag = ['','','','']
                        break;
                    case 1:
                        arrayList = [0,0,0,bottomListNum];
                        chosedTag = ['','','','收益排序']
                        break;
                    case 2:
                        chosedTag[0]=listItem[0][2];
                        chosedTag[topListNum] = listItem[topListNum][bottomListNum].split("/").pop();
                        arrayList = [2,0,0,bottomListNum];
                        break;
                    case 3:
                        chosedTag[0]=listItem[0][2];
                        chosedTag[1]=listItem[1][1];
                        chosedTag[topListNum] = listItem[topListNum][bottomListNum].split("/").pop();
                        arrayList = [2,1,0,bottomListNum];
                        break;
                    case 4:
                        chosedTag[0]=listItem[0][2];
                        chosedTag[topListNum] = listItem[topListNum][bottomListNum].split("/").pop();
                        arrayList = [2,0,0,bottomListNum];
                        break;
                    default:
                        break;
                }
            }
        }
        else if(topListNum == 3&&bottomListNum==0){
            arrayList = [0,0,0,0];
            chosedTag = ['','','','']
        }
        else {
            chosedTag[topListNum] = '';
        }
        _this.setState({
            chosed: arrayList,
            chosedTag : chosedTag
        },function(){
           
            let {chosed} = _this.state;           
            let {fundGetCallback} = _this.props;

            fundGetCallback(chosed);
            
        })
        _this.toTheTop(true)

    }
    //控制tab选项卡的隐藏于展开
    hideBar(){
        let _this = this;
        let isExpandFlag = _this.state.isExpand;
        let {isShowList,chosedTag} = _this.state;
        //存储被点击的flag值，其它被重置，点击的重新取反
        isExpandFlag = [0,0,0,0];
        if (isShowList) {
            _this.setState({
                isShowList: false,
                isFixedBar: 2,
                isExpand:isExpandFlag
            })
        }   
        document.querySelector('body').removeEventListener('touchmove',_this.preventScroll);     
    }
    //重新处理一下标签
    getTag(tag){
        let tagText = (tag.map((item)=>{if(item!='') return item+' | '})).join('');
        return tagText.slice(0,-2);
    }
    //清空选择
    clearChoice(){
        let _this = this;
        let thisPage = _this.props.page;
        let isAndroid = $.getDeviceType()=="ios"?false:true;
        let choosePage = isAndroid?$(ReactDOM.findDOMNode(thisPage.refs["indexScroll"])):$(ReactDOM.findDOMNode(thisPage.refs["indexChildScroll"]))


        _this.setState({
            chosed:             [0,0,0,0],          //数组元素值是4个tab键上被选中的产品类型号
            listNum:            0,                  //tab键的序号   
            isExpand:           [0,0,0,0],          //控制4个展开列表
            isShowList:         false,              //列表是否展开的标识
            isFixedBar:         0,                  //是否要把tab栏置顶
            chosedTag:          ["","","",""],      //记录选中的标签
            listenLock:         true
        },function(){
            let {chosed} = _this.state;           
            let {fundGetCallback} = _this.props;

            fundGetCallback(chosed);
        })
        this.toTheTop(true);
    }
    render() {
        const _this = this;
        const {isShow,childChoiceDic} = this.props;
        const {chosed,listNum,isExpand,isShowList,isFixedBar,chosedTag} = _this.state;
        let isAndroid = $.getDeviceType()=="ios"?false:true;
        if(!childChoiceDic) 
            return null;
        let hook = <span className = {StyleClass.hook}></span>
        let list =  isShowList?<div><ul className={StyleClass.bannerList}>
        {
            listItem[listNum].map((item,i) =>{
               return (
                    <li key={ i } className={StyleClass.bannerListItem} onClick = {_this.chooseType.bind(_this,listNum,i)}>
                        <span className={(chosed[listNum]==i&&listNum<3)?StyleClass.chosedItem:null}>{item}</span>
                        {(chosed[listNum]==i&&listNum<3)?hook:null}
                    </li>
                )
            })
         }  
         
        </ul>
        <div className={StyleClass.blackBannerListItem}  onClick={_this.releaveScroll}></div></div>
        :null;
        
        let Bar =   <div id='toplist' className={StyleClass.fund_child_choice}>
                        <ul className={StyleClass.choice_list}>
                            <li  className={StyleClass.choice_list_item} onClick = {(event)=>{event.stopPropagation();_this.expandList(0);}}>
                                <span className={isExpand[0] ? StyleClass.chosedText :null}>产品类型<i className={isExpand[0] ? StyleClass.expandDown : StyleClass.expandUp} ></i></span>
                            </li>
                            <li  className={StyleClass.choice_list_item} onClick = {(event)=>{event.stopPropagation();_this.expandList(1);}}>
                                <span className={isExpand[1] ? StyleClass.chosedText :null}>投资期限<i className={isExpand[1] ? StyleClass.expandDown : StyleClass.expandUp} ></i></span>
                                
                            </li>
                            <li  className={StyleClass.choice_list_item} onClick = {(event)=>{event.stopPropagation();_this.expandList(2);}}>
                                <span className={isExpand[2] ? StyleClass.chosedText :null}>起购金额<i className={isExpand[2] ? StyleClass.expandDown : StyleClass.expandUp} ></i></span>
                                
                            </li>
                            <li  className={StyleClass.choice_list_item} onClick = {(event)=>{event.stopPropagation();_this.expandList(3);}}>
                                <span className={isExpand[3] ? StyleClass.chosedText :null}>常用排序<i className={isExpand[3] ? StyleClass.expandDown : StyleClass.expandUp} ></i></span>
                            </li>
                        </ul>
                                    
                        {_this.getTag(chosedTag)!=''&&!isShowList?<div className = {StyleClass.recordChoice}>
                            {
                                _this.getTag(chosedTag)
                            }
                            <span onClick = {_this.clearChoice.bind(_this)}>
                                <Svg.close fill={'#ccc'} width={'20px'} height={'20px'} />
                            </span>
                        </div>:null}
                        {list}                                    
                    </div>
        return  isShow ? (isAndroid?<div className={_this.getTag(chosedTag)!=''?StyleClass.barHeight:StyleClass.barHeightMin}>
                        <div className={isAndroid?(isFixedBar==1?($.isInApp()?StyleClass.blackBackFixedApp:StyleClass.blackBackFixed):isFixedBar==0?StyleClass.blackBack:($.isInApp()?StyleClass.backScrollApp:StyleClass.backScroll)):StyleClass.blackBackIOS +' '+(_this.getTag(chosedTag)!=''?StyleClass.barHeight:StyleClass.barHeightMin)} onClick={_this.hideBar.bind(_this)}>
                            {Bar}
                        </div>
                        </div>:
                        <div className={isAndroid?(isFixedBar==1?($.isInApp()?StyleClass.blackBackFixedApp:StyleClass.blackBackFixed):isFixedBar==0?StyleClass.blackBack:($.isInApp()?StyleClass.backScrollApp:StyleClass.backScroll)):StyleClass.blackBackIOS +' '+(_this.getTag(chosedTag)!=''?StyleClass.barHeight:StyleClass.barHeightMin)} onClick={_this.hideBar.bind(_this)}>
                            {Bar}
                        </div>): null;
    }

}


    ChildChoiceBar.propTypes = {
        isShow:     PropTypes.bool,
        currentTab: PropTypes.string,
        dic:        PropTypes.object,
        callback:   PropTypes.func
    };

    ChildChoiceBar.defaultProps = {
        isShow:     true,
        currentTab: "",
        dic:        null,
        callback:   ()=>false
    };


export default ChildChoiceBar;