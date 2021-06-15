import React from 'react';
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import { HashRouter, NavLink, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className='App'>
          {/* 通过URL传参 */}
          <NavLink to='/home?name=zs&age=18&hobby=football&hobby=pingpang'>首页</NavLink>
          {/* 通过动态路由传参 */}
          <NavLink to='/about/123456'>关于</NavLink>
          {/* 通过NavLink或Link组件的to属性传参 */}
          <NavLink to={{
            pathname: '/login',
            state: {
              name: 'zs',
              age: 18,
              hobby: ['football', 'pingpang']
            }
          }}>登录</NavLink>
          <Route path='/home' component={Home}></Route>
          <Route path='/about/:id' component={About}></Route>
          <Route path='/login' component={Login}></Route>
        </div>
      </HashRouter>
    )
  }
}
export default App