import React from 'react'
import Navbar from '../../components/navbar/navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Style from './artical.less'
import mdStyle from '../../resources/css/markdown.css'
import {markdown} from 'markdown'
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/Editor/vertical-align-top';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import html from './articalFile/array.md';
import Swipeable from 'react-swipeable';
import {List, ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ArticalView from '../../components/articalView/articalView'
injectTapEventPlugin();
export default React.createClass({
    //
    getInitialState: function() {
        return {
            showDrawer: false
        };
    },
    /* 本页面要实现的目标：
    左侧侧边栏内容；
    顶部栏需不需要，和侧边栏放在一起会不会拥挤
    返回首页操作；
    回到顶部操作，页面目录；
    文章列表和打开前的预览；
    md文档从数据库读取；
    建立从前端显示到后端接口与数据的连接；
    留言或者说评论功能；
    写文章的日期显示；
     */
    swipingLeft(e, absX) {
            this.setState({
                showDrawer:false
            });
    },
    swiping(e, deltaX, deltaY, absX, absY, velocity) {
        if (deltaX<0&&velocity>1&&Math.abs(deltaY)<10) {
            this.setState({
                showDrawer:true
            });
        }
        else if (deltaX>=0) {
            this.setState({
                showDrawer:false
            });
        }
    },
    goToTop(e){
        document.documentElement.scrollTop = document.body.scrollTop =0;
    },
    render(){
        let articalContext = html;
        var a = require('./articalFile/array.md');
        let isShowDrawer = this.state.showDrawer;
        return <MuiThemeProvider>
            <Swipeable onSwiping={this.swiping}>
            <div>
                {/*<Navbar title = {'文章'}/>*/}
                <ArticalView/>
                <div id="container"  className={mdStyle.markdownBody} dangerouslySetInnerHTML={{__html: a}}> 
                    {/*{articalContext}*/}
                </div>
                <div onClick = {this.goToTop}>   
                    <FloatingActionButton className={Style.backButton} >
                    <ActionGrade color="red"/>
                    </FloatingActionButton>
                </div>
                <Drawer open={isShowDrawer} width={200}>
                        <List>
                            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                            <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
                            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                        </List>
                        <Divider />
                        <List>
                            <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
                            <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
                            <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
                            <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
                            <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
                            <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
                            <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
                            <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
                        </List>
                </Drawer>
            </div>
            </Swipeable>
        </MuiThemeProvider>
    }
})