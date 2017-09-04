import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter, Route,Link } from 'react-router-dom'
import App from './view/index/index'
import Artical from './view/artical/artical'
import Style from './index.less'
import "./resources/css/reset.css";
render ((
    <BrowserRouter> 
        <div className={Style.reactContainer}>
            <Route exact path="/" component={App}/>
            <Route path="/artical" component={Artical}/>
        </div>
    </BrowserRouter>
),document.getElementById('app'))