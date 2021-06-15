import React from 'react';
import "./App.css"
import Home from "./components/Home"
import About from "./components/About"
import { BrowserRouter, HashRouter, Link, NavLink, Route } from "react-router-dom";
class APP extends React.Component {
  render() {
    return (
      <div>
        {/* HashRouter 和 BrowserRouter 监听路由变化的 */}
        <HashRouter>
          <NavLink exact activeClassName='active' to="/home">Home</NavLink>
          <NavLink exact activeClassName='active' to="/about">About</NavLink>
          <Route exact path='/home' component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
        </HashRouter>
      </div>
    )
  }
}
export default APP