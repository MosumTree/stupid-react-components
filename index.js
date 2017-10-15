import React                            from 'react'
import {render}                         from 'react-dom'
import { BrowserRouter, Route,Link }    from 'react-router-dom'
import App                              from './view/index/index'
import ButtonView                       from './view/button/button'
import AppBarView                       from './view/appBar/appBar'
import AlertWindow                      from './view/alertWindow/alertWindow'
import Style                            from './index.less'
import { slide as Menu }                from 'react-burger-menu'
import "./resources/css/reset.css";
//左侧栏样式
var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '20px',
      height: '17px',
      left: '15px',
      top: '18px'
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
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    //列表样式
    bmItemList: {
      color: '#b8b7ad'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    },
    bmMorphShape:{
      background: '#fff'
    }
  }
  var isMenuOpen = function(state) {
    return state.isOpen;
  };
render ((
    <BrowserRouter> 
        <div>
            <div className = {Style.headBar}>
                Components
            </div>
              <Menu styles={ styles } isOpen={false}>
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
                <Link className={Style.leftLink} to={'/alertWindow'}>
                    其它常用组件
                </Link>
                <Link className={Style.leftLink} to={'/alertWindow'}>
                    复杂组件
                </Link>
              </Menu>
            
            
            <div className={Style.reactContainer}>
                <Route exact path="/" component={App}/>
                <Route path="/buttonView" component={ButtonView}/>
                <Route path="/appBarView" component={AppBarView}/>
                <Route path="/alertWindow" component={AlertWindow}/>
            </div>
            <div className = {Style.bottomText}>
              <div className = {Style.iconWraper}>
                <div className = {Style.indexIcon}></div>
                <strong className = {Style.author}>
                  Mosum
                </strong>
              </div>
              <p>I don't konw this part what <br/>i should write , i just think this part<br/> should place some English Text to make the page more designalble.</p>
            </div>
        </div>
    </BrowserRouter>
),document.getElementById('app'))