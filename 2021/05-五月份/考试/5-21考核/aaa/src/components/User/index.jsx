import React from 'react';
import { NavLink, Route, Redirect } from "react-router-dom";
class aa extends React.Component {
  componentDidMount() {
    // console.log(this.props.location.search)
    const aa = new URLSearchParams(this.props.location.search)
    // console.log(aa.get('name'))
    this.setState({
      age: aa.get('age'),
      name: aa.get('name')
    })
  }
  state = {
    age: '',
    name: ''
  }
  render() {
    return <p>{this.state.age}岁-----{this.state.name}</p>
  }
}
class bb extends React.Component {
  componentDidMount() {
    // console.log(this.props.location.search)
    const aa = new URLSearchParams(this.props.location.search)
    // console.log(aa.get('name'))
    this.setState({
      age: aa.get('age'),
      name: aa.get('name')
    })
  }
  state = {
    age: '',
    name: ''
  }
  render() {
    return <p>{this.state.age}岁-----{this.state.name}</p>
  }
}
class cc extends React.Component {
  componentDidMount() {
    // console.log(this.props.location.search)
    const aa = new URLSearchParams(this.props.location.search)
    // console.log(aa.get('name'))
    this.setState({
      age: aa.get('age'),
      name: aa.get('name')
    })
  }
  state = {
    age: '',
    name: ''
  }
  render() {
    return <p>{this.state.age}岁-----{this.state.name}</p>
  }
}
class dd extends React.Component {
  componentDidMount() {
    // console.log(this.props.location.search)
    const aa = new URLSearchParams(this.props.location.search)
    // console.log(aa.get('name'))
    this.setState({
      age: aa.get('age'),
      name: aa.get('name')
    })
  }
  state = {
    age: '',
    name: ''
  }
  render() {
    return <p>{this.state.age}岁-----{this.state.name}</p>
  }
}
class User extends React.Component {
  render() {
    return (
      <div className='right'>
        <h2>用户页面</h2>
        <NavLink activeClassName='red' to="/user/aa/?age=1&name=aa">aa</NavLink>
        <NavLink activeClassName='red' to="/user/bb/?age=2&name=bb">bb</NavLink>
        <NavLink activeClassName='red' to="/user/cc/?age=3&name=cc">cc</NavLink>
        <NavLink activeClassName='red' to="/user/dd/?age=4&name=dd">dd</NavLink>
        <Redirect to='/user/aa?age=1&name=aa'></Redirect>
        <Route path='/user/aa' component={aa}></Route>
        <Route path='/user/bb' component={bb}></Route>
        <Route path='/user/cc' component={cc}></Route>
        <Route path='/user/dd' component={dd}></Route>
        {/* <Redirect to='/animation'></Redirect> */}
      </div>
    )
  }
}
export default User