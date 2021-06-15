import React from 'react';
import Home from "./components/Home"
import About from "./components/About"
import { BrowserRouter, HashRouter, Link, NavLink, Route } from "react-router-dom";
class APP extends React.Component {
  render() {
    return (
      <div>
        {/* HashRouter 和 BrowserRouter 监听路由变化的 */}
        <HashRouter>
          <Link to="/home">Home</Link><Link to="/about">About</Link>
          <Route path='/home' component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </HashRouter>
      </div>
    )
  }
}
export default APP