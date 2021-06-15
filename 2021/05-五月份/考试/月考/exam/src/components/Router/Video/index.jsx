import React from 'react';
import { Route, NavLink, Redirect } from "react-router-dom";
const Web = () => {
  return (
    <div>Web视频教程</div>
  )
}
const Vue = () => {
  return (
    <div>Vue视频教程</div>
  )
}
const react = () => {
  return (
    <div>React视频教程</div>
  )
}
const Php = () => {
  return (
    <div>Php视频教程</div>
  )
}
class Video extends React.Component {
  render() {
    return (
      <div className='right'>
        <h2>Video页面</h2>
        <NavLink activeClassName='red' to='/video/web'>Web视频</NavLink>
        <NavLink activeClassName='red' to='/video/vue'>Vue视频</NavLink>
        <NavLink activeClassName='red' to='/video/react'>React视频</NavLink>
        <NavLink activeClassName='red' to='/video/php'>Php视频</NavLink>
        <Route path='/video/web' component={Web}></Route>
        <Route path='/video/vue' component={Vue}></Route>
        <Route path='/video/react' component={react}></Route>
        <Route path='/video/php' component={Php}></Route>
        <Redirect to='/video/web'></Redirect>
      </div>
    )
  }
}
export default Video