import React                            from 'react'
import {render}                         from 'react-dom'
import { BrowserRouter,HashRouter,Route,Link }    from 'react-router-dom'
import App                              from './view/index/index'
import ButtonView                       from './view/button/button'
import AppBarView                       from './view/appBar/appBar'
import AlertWindow                      from './view/alertWindow/alertWindow'
import WorkComponent                    from './view/workComponent/workComponent'
import ChoiceBar                        from './view/complexComponent/choiceBar'
import Style                            from './index.less'
import { slide as Menu }                from 'react-burger-menu'
import "./resources/css/reset.css";
let expandFlag = false;
//左侧栏样式
var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '20px',
      height: '17px',
      left: '15px',
      top: '18px',
      zIndex:9
    },
    bmMenuWrap:{
      zIndex:10
    },
    bmBurgerBars: {
      background: '#fff'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#fff'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 0.7em 0',
      fontSize: '1.15em',
      zIndex:8
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    //列表样式
    bmItemList: {
      color: '#b8b7ad'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      zIndex:8
    },
    bmMorphShape:{
      background: '#fff'
    }
  }
  var isMenuOpen = function(state) {
    return state.isOpen;
  };
  var StupidComponents=React.createClass({
    getInitialState:function(){
      return{
        expandFlag: false
      }
    },
    changeExpand:function(){
      let expand = this.state.expandFlag;
      event.stopPropagation();
      event.preventDefault();
      this.setState({
        expandFlag:!expand
      });
    },
    render:function(){
        const _this = this;
        return <HashRouter> 
        <div>
            <div className = {Style.headBar}>
                Components
            </div>
              <Menu styles={ styles } isOpen={_this.isMenuOpen}>
                <Link className={Style.leftLink} to={'/'}>
                    首页
                </Link>
                <Link className={Style.leftLink} to={'/buttonView'}>
                    按钮
                </Link>
                <Link className={Style.leftLink} to={'/appBarView'}>
                    标题栏
                </Link>
                <Link className={Style.leftLink} to={'/alertWindow'}>
                    弹窗
                </Link>
                <Link className={Style.leftLink} to={'/workComponent'}>
                    业务组件
                </Link>
                <p className={Style.leftLink} onClick = {_this.changeExpand} >
                    复杂组件
                </p>
                <div className = {_this.state.expandFlag?Style.linkItem:Style.hidden}>
                  <Link className={Style.leftSubLink} to={'/complexComponent/choiceBar'}>
                      粘附型选择栏
                  </Link>
                  <Link className={Style.leftSubLink} to={'/workComponent'}>
                      下拉刷新
                  </Link>
                </div>
                <Link className={Style.leftLink} to={'/workComponent'}>
                    其它常用组件
                </Link>
                
                
              </Menu>
            
            
            <div className={Style.reactContainer}>
                <Route exact path="/" component={App}/>
                <Route path="/buttonView" component={ButtonView}/>
                <Route path="/appBarView" component={AppBarView}/>
                <Route path="/alertWindow" component={AlertWindow}/>
                <Route path="/workComponent" component={WorkComponent}/>
                <Route path="/complexComponent/choiceBar" component={ChoiceBar}/>
            </div>
            <div className = {Style.bottomText}>
              <div className = {Style.iconWraper}>
                <div className = {Style.indexIcon}></div>
                <strong className = {Style.author}>
                  Mosum
                </strong>
              </div>
              <p>I don't know this part what <br/>i should write , i just think this part<br/> should place some English Text to make the page more designable.</p>
            </div>
        </div>
    </HashRouter>
    }
  })
  render(<StupidComponents/>,document.getElementById('app'))