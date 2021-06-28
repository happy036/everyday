import React, { useRef, useState } from 'react';
import './App.css';
function App() {
  //#region 初始数据
  const [list, setList] = useState(
    [
      {
        id: 1,
        info: "我周六去百盟物流园 打沙包",
        status: false
      },
      {
        id: 2,
        info: "我明天下午 去操场打篮球",
        status: true
      }
    ]
  )
  const [activeKey, setActiveKey] = useState('all')
  const inputRef = useRef()
  //#endregion

  //#region 添加任务
  const handleAdd = () => {
    if(inputRef.current.value.trim().length <= 0) return alert('输入框不能为空!')
    const task = {
      id: new Date().valueOf(),
      info: inputRef.current.value,
      status: false
    }
    const newList = [...list, task]
    setList(newList)
    // 清空输入框
    inputRef.current.value = '';
  }
  //#endregion
  //#region 删除
  const handleDel = (id) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }
  //#endregion
  //#region 更新状态
  const handleState = (id) => {
    const newList = list.map(item => {
      if (item.id === id) {
        return { ...item, status: !item.status }
      }
      return item
    })
    setList(newList)
  }
  //#endregion
  //#region 切换任务
  const handleTask = (key) => {
    setActiveKey(key)
  }
  //#endregion
  //#region 处理渲染列表
  const taskList = () => {
    if (activeKey === 'undone') {
      return list.filter(item => !item.status)
    } else if (activeKey === 'done') {
      return list.filter(item => item.status)
    } else {
      return list
    }
  }
  //#endregion
  //#region 清除已完成任务
  const clearTask = () => {
    const newList = list.filter(item=>!item.status)
    setList(newList)
  }
  //#endregion

  return (
    <div className="App todo" >
      {/* 输入框及搜索按钮 */}
      < div className="todo-header" >
        <input type="text" placeholder="请输入任务" ref={inputRef} />
        <button onClick={handleAdd}>添加事项</button>
      </div>
      {/* 列表 */}
      < ul className="todo-main" >
        {
          taskList().map(item => (
            <li key={item.id}>
              <input type="checkbox" checked={item.status} onChange={() => handleState(item.id)} /> <span>{item.info}</span>
              <a href="#!" onClick={() => handleDel(item.id)}>删除</a>
            </li>
          ))
        }
      </ul >
      {/* 底部菜单 */}
      < div className="todo-footer" >
        <p>共有{taskList().length}条</p>
        <div className="todo-footer-button">
          <button onClick={() => handleTask('all')} className={activeKey === 'all' ? 'primary' : ''}>全&nbsp;&nbsp;部</button>
          <button onClick={() => handleTask('undone')} className={activeKey === 'undone' ? 'primary' : ''}>未完成</button>
          <button onClick={() => handleTask('done')} className={activeKey === 'done' ? 'primary' : ''}>已完成</button>
        </div>
        <a href="#!" onClick={clearTask}>清除已完成</a>
      </div >
    </div >
  );
}

export default App;
