import React from 'react';
import ReactDOM from 'react-dom';
const widthMouse = WrappedComponent => {
  // 1.创建Mouse组件，在组件中提供复用的状态逻辑代码
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0
    }
    // 使用componentDidMount生命周期函数 --> 发请求，操作DOM
    fn = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    componentDidMount() {
      window.addEventListener('mousemove', this.fn)
    }
    render() {
      // 2.将要复用的状态作为 props.render(state) 方法的参数，暴露到组件外部
      return <WrappedComponent {...this.state}></WrappedComponent>
    }
  }
  return Mouse
}
// 创建一个组件(函数组件)
const Position = props => {
  return (
    <div>
      <p>{props.x}--{props.y}</p>
    </div>
  )
}
const MousePosition = widthMouse(Position)
// 3.使用 props.render() 的返回值作为要渲染的内容
class App extends React.Component {
  render() {
    return (
      <div>
        <MousePosition></MousePosition>
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
