import React from 'react';
import { HashRouter, Route, NavLink, Redirect } from "react-router-dom";
import Animation from "../Animation/index";
import Video from "../Video/index";
import User from "../User/index";
// 引入样式
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className='main'>
          <div className='left'>
            <h2>一级导航</h2>
            <NavLink activeClassName='green' to='/animation'>动画</NavLink>
            <NavLink activeClassName='green' to='/video'>视频教程</NavLink>
            <NavLink activeClassName='green' to='/user'>用户管理</NavLink>
          </div>
          <Route path='/animation' component={Animation}></Route>
          <Route path='/video' component={Video}></Route>
          <Route path='/user' component={User}></Route>
          <Redirect to='/animation'></Redirect>
        </div>
      </HashRouter>
    )
  }
}
export default App