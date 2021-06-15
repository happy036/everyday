import React from 'react';
import { HashRouter, NavLink, Route, Redirect } from "react-router-dom";
import Animation from "./components/Animation";
import Video from "./components/Video";
import User from "./components/User";
import "./index.css"
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className='left'>
            <h2>一级导航</h2>
            <NavLink activeClassName="green" to='/animation'>动画</NavLink>
            <NavLink activeClassName="green" to='/video'>视频教程</NavLink>
            <NavLink activeClassName="green" to='/user'>用户管理</NavLink>
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