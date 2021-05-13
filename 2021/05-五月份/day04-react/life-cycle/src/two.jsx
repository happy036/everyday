// 组件更新阶段
import React from "react";
class Two extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    console.log('1.组件挂载--constructor 初始化state')
  }
  componentDidMount() {
    console.log('3.组件挂载--componentDidMount 发送网络请求 操作DOM')
  }
  componentDidUpdate() {
    console.log("2.2.组件更新--componentDidUpdate 发送网络请求 操作DOM")
    if (this.state.count <= 1) {
      this.setState({
        count: 2
      })
    }
  }
  handleClick = () => {
    this.setState({
      count: 1
    })
    // this.forceUpdate()
  }
  render() {
    if (this.state.count === 0) {
      console.log('2.组件挂载--渲染UI')
    } else {
      console.log('2.1.组件更新--render 更新UI')
    }
    console.log('----------------------------------')
    return (
      <div>
        <div>我是父组件</div>
        <button onClick={this.handleClick}>点击我更新count的值</button>
        <TwoSon count={this.state.count}></TwoSon>
      </div>
    )
  }
}
class TwoSon extends React.Component {
  componentDidUpdate() {
    console.log("3.2.TwoSon--componentDidUpdate 发送网络请求 操作DOM")
  }
  render() {
    console.log('TwoSon组件更新')
    return (
      <div>{this.props.count}我是子组件</div>
    )
  }
}
export default Two