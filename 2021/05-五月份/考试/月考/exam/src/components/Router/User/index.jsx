import React from 'react';
import { Route, NavLink, Redirect } from "react-router-dom";
class aa extends React.Component {
  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search)
    this.setState({
      age: params.get('age'),
      name: params.get('name')
    })
  }
  state = {
    age: '',
    name: ''
  }
  render() {
    return (
      <div>{this.state.age}----{this.state.name}</div>
    )
  }
}
class bb extends React.Component {
  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search)
    this.setState({
      age: params.get('age'),
      name: params.get('name')
    })
  }
  state = {
    age: '',
    name: ''
  }
  render() {
    return (
      <div>{this.state.age}----{this.state.name}</div>
    )
  }
}
class cc extends React.Component {
  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search)
    this.setState({
      age: params.get('age'),
      name: params.get('name')
    })
  }
  state = {
    age: '',
    name: ''
  }
  render() {
    return (
      <div>{this.state.age}----{this.state.name}</div>
    )
  }
}
class dd extends React.Component {
  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search)
    this.setState({
      age: params.get('age'),
      name: params.get('name')
    })
  }
  state = {
    age: '',
    name: ''
  }
  render() {
    return (
      <div>{this.state.age}----{this.state.name}</div>
    )
  }
}
class User extends React.Component {
  render() {
    return (
      <div className='right'>
        <h2>Usermanage页面</h2>
        <NavLink activeClassName='red' to='/user/aa?age=20岁&name=鲁正一'>鲁正一</NavLink>
        <NavLink activeClassName='red' to='/user/bb?age=21岁&name=徐玥'>徐玥</NavLink>
        <NavLink activeClassName='red' to='/user/cc?age=22岁&name=殷鸿亮'>殷鸿亮</NavLink>
        <NavLink activeClassName='red' to='/user/dd?age=23岁&name=刘浩宇'>刘浩宇</NavLink>
        <Route path='/user/aa' component={aa}></Route>
        <Route path='/user/bb' component={bb}></Route>
        <Route path='/user/cc' component={cc}></Route>
        <Route path='/user/dd' component={dd}></Route>
        {/* 重定向 */}
        <Redirect to='/user/aa?age=20岁&name=鲁正一'></Redirect>
      </div>
    )
  }
}
export default User