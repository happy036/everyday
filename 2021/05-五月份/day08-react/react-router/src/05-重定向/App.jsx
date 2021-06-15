import React from 'react';
import "./App.css"
import Home from "./components/Home";
import About from "./components/About";
import Other from "./components/Other";
import Login from "./components/Login";
import User from "./components/User";
import { BrowserRouter, HashRouter, Link, NavLink, Route, Switch } from "react-router-dom";
class APP extends React.Component {
  render() {
    return (
      <div>
        {/* HashRouter 和 BrowserRouter 监听路由变化的 */}
        <HashRouter>
          <NavLink exact activeClassName='active' to="/home">Home</NavLink>
          <NavLink exact activeClassName='active' to="/about">About</NavLink>
          <NavLink exact activeClassName='active' to="/login">Login</NavLink>
          <NavLink exact activeClassName='active' to="/user">User</NavLink>
          {/* switch规定了只匹配一个 匹配到就不继续匹配了 */}
          {/* 用Switch组件包裹 Route就可以用了 */}
          <Switch>
            <Route exact path='/home' component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path="/user" component={User}></Route>
            <Route component={Other}></Route>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
export default APP