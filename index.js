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
                    Index
                </Link>
                <Link className={Style.leftLink} to={'/buttonView'}>
                    Button
                </Link>
                <Link className={Style.leftLink} to={'/appBarView'}>
                    AppBar
                </Link>
                <Link className={Style.leftLink} to={'/alertWindow'}>
                    AlertWindow
                </Link>
              </Menu>
            
            
            <div className={Style.reactContainer}>
                <Route exact path="/" component={App}/>
                <Route path="/buttonView" component={ButtonView}/>
                <Route path="/appBarView" component={AppBarView}/>
                <Route path="/alertWindow" component={AlertWindow}/>
            </div>
        </div>
    </BrowserRouter>
),document.getElementById('app'))