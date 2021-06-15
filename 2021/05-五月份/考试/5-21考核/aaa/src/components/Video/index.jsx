import React from 'react';
import { NavLink, Route, Redirect } from "react-router-dom";
import "./index.css"
const web = () => {
  return <div>web教程</div>
}
const vue = () => {
  return <div>vue教程</div>
}
const react = () => {
  return <div>react教程</div>
}
const php = () => {
  return <div>php教程</div>
}
class Video extends React.Component {
  render() {
    return (
      <div className='right'>
        <h2>Video页面</h2>
        <NavLink activeClassName='red' to='/video/web'>web视频</NavLink>
        <NavLink activeClassName='red' to='/video/vue'>vue视频</NavLink>
        <NavLink activeClassName='red' to='/video/react'>react视频</NavLink>
        <NavLink activeClassName='red' to='/video/php'>php视频</NavLink>
        <Redirect to='/video/web'></Redirect>
        <Route path='/video/web' component={web}></Route>
        <Route path='/video/vue' component={vue}></Route>
        <Route path='/video/react' component={react}></Route>
        <Route path='/video/php' component={php}></Route>
        {/* <Redirect to='/animation'></Redirect> */}
      </div>
    )
  }
}
export default Video