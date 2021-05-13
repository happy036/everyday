// 组件挂载阶段
import React from "react";
class App extends React.Component {
  constructor() {
    super()
    console.log('1.组件挂载--constructor 初始化state')
  }
  componentDidMount() {
    console.log('3.组件挂载--componentDidMount 发送网络请求 操作DOM')
  }
  render() {
    console.log('2.组件挂载--渲染UI')
    return (
      <div>哈哈哈</div>
    )
  }
}
export default App