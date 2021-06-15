import React, { createRef } from 'react';
import './App.css';
// 1.5 在app.js中导入store,获取list数据
import store from "../../store/store";
import { addData, delData, fixData, fixKey } from "../../store/action";
class App extends React.Component {
  constructor() {
    super()
    // 1.6 把数据映射到state中
    this.state = store.getState()
    // 在constructor中使用创建ref的方法创建ref
    this.inputRef = createRef()
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        list: store.getState().list
      })
    })
  }

  // 添加任务
  addTask = () => {
    let task = {
      id: new Date().valueOf(),
      info: this.inputRef.current.value,
      status: false
    }
    store.dispatch(addData(task))
  }

  // 删除任务
  delTask = (id) => {
    store.dispatch(delData(id))
  }
  // 更新复选框状态
  fixStatus = (id) => {
    store.dispatch(fixData(id))
  }
  // 更新分类
  fixCate = (viewkey) => {
    store.dispatch(fixKey(viewkey))
  }
  render() {
    return (
      <div className="App todo" >
        {/* 输入框及搜索按钮 */}
        < div className="todo-header" >
          <input type="text" placeholder="请输入任务" ref={this.inputRef} />
          <button onClick={() => this.addTask()}>添加事项</button>
        </div>
        {/* 列表 */}
        < ul className="todo-main" >
          {
            this.state.list.map(item => {
              if (item.status === false && this.state.viewKey === 'undone') {
                return (
                  <li key={item.id}>
                    <input type="checkbox" checked={item.status} onChange={() => this.fixStatus(item.id)} /> <span>{item.info}</span>
                    <a href="#" onClick={() => { this.delTask(item.id) }}>删除</a>
                  </li>
                )
              } else if (item.status === true && this.state.viewKey === 'done') {
                return (
                  <li key={item.id}>
                    <input type="checkbox" checked={item.status} onChange={() => this.fixStatus(item.id)} /> <span>{item.info}</span>
                    <a href="#" onClick={() => { this.delTask(item.id) }}>删除</a>
                  </li>
                )
              } else if (this.state.viewKey === 'all') {
                return (
                  <li key={item.id}>
                    <input type="checkbox" checked={item.status} onChange={() => this.fixStatus(item.id)} /> <span>{item.info}</span>
                    <a href="#" onClick={() => { this.delTask(item.id) }}>删除</a>
                  </li>
                )
              }
            })
          }
        </ul >
        {/* 底部菜单 */}
        < div className="todo-footer" >
          <p>5条剩余</p>
          <div className="todo-footer-button">
            {/* all 全部  undone 未完成  done 已完成  */}
            <button onClick={() => { this.fixCate('all') }} className={this.state.viewKey === 'all' ? 'primary' : ''}>全&nbsp;&nbsp;部</button>
            <button onClick={() => { this.fixCate('undone') }} className={this.state.viewKey === 'undone' ? 'primary' : ''}> 未完成</button>
            <button onClick={() => { this.fixCate('done') }} className={this.state.viewKey === 'done' ? 'primary' : ''} > 已完成</button>
          </div>
          <a href="#" >清除已完成</a>
        </div >
      </div >
    );
  }
}

export default App;
