// 类组件 也被成为有状态组件
// 定义一个类, 在这个类中实现render方法, 在render方法中返回组件的结构即可
import React from 'react';
class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 10
    }
  }
  handleClick = () => {
    console.log('我是类组件中的事件')
    console.log(this)
  }
  render() {
    return (
      <div onClick={this.handleClick}>我是类组件{this.state.count}</div>
    )
  }
}
export default Home