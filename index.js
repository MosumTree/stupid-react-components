import React                            from 'react'
import {render}                         from 'react-dom'
import { BrowserRouter, Route,Link }    from 'react-router-dom'
import App                              from './view/index/index'
import ButtonView                       from './view/button/button'
import AppBarView                       from './view/appBar/appBar'
import Style                            from './index.less'
import { bubble as Menu }               from 'react-burger-menu'
import "./resources/css/reset.css";
var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
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
            </Menu>
            <div className={Style.reactContainer}>
                <Route exact path="/" component={App}/>
                <Route path="/buttonView" component={ButtonView}/>
                <Route path="/appBarView" component={AppBarView}/>
            </div>
        </div>
    </BrowserRouter>
),document.getElementById('app'))