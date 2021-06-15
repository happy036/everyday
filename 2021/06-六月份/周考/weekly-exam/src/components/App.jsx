import React, { Component, createRef } from 'react';
import "./App.css";
// 导入AppSon
import AppSon from "./AppSon";
import store from "../store/store";
import { addTask, changeTask } from "../store/actions";
class App extends Component {
  constructor() {
    super()
    this.state = store.getState()
    this.input = createRef()
  }
  componentDidMount() {
    // console.log(this.state.list)
    store.subscribe(() => {
      this.setState({
        list: store.getState().list
      })
    })
  }
  // 添加数据
  addInfo = () => {
    const task = {
      time: new Date().toLocaleString(),
      info: this.input.current.value,
      status: false
    }
    store.dispatch(addTask(task))
  }
  // 改变状态
  changeStatus = (index) => {
    store.dispatch(changeTask(index))
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>App--发送信息</h1>
          <div>
            <input type="text" ref={this.input} placeholder="输入要发送的信息" />
            <button onClick={this.addInfo}>Send</button>
          </div>
        </div>
        {/* AppSon */}
        <AppSon list={this.state.list} changeStatus={this.changeStatus} />
      </div>
    );
  }
}

export default App;