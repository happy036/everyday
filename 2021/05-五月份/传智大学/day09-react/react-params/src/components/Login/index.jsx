import React from 'react';
class Login extends React.Component {
  // 通过NavLink或Link组件的to属性传参
  componentDidMount() {
    console.log(this.props.location.state)
  }
  render() {
    return (
      <div>
        <h2>登录</h2>
      </div>
    )
  }
}
export default Login