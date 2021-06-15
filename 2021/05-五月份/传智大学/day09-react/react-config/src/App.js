import React from 'react';
import { HashRouter, NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <NavLink to="/home">首页</NavLink>
          <NavLink to="/about">关于</NavLink>
          <NavLink to="/login">登录</NavLink>
          {renderRoutes(routes)}
        </div>
      </HashRouter>
    )
  }
}
export default App