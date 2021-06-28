import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [list, setList] = useState(
    [
      { id: 1, info: '睡觉', status: false },
      { id: 2, info: '吃饭', status: false },
      { id: 3, info: '打豆豆', status: false }
    ]
  )
  const [name, setName] = useState('')
  // 输入框
  const handleChange = (e) => {
    // console.log(e.target.value)
    setName(e.target.value)
  }
  // 添加事件
  const addTask = () => {
    if (name.trim().length === 0) return alert('不能为空!')
    const task = { id: new Date().toLocaleDateString(), info: name }
    setList([...list, task])
    setName('')
  }
  // 删除
  const deleteTask = (id) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }
  // 完成
  const handleDone = (id) => {
    list.forEach(item => {
      if (item.id === id) {
        item.status = !item.status
        // return item
      }
    })
    setList([...list])
  }
  // 监听
  useEffect(() => {
    return alert('完成操作')
  }, [list])
  return (
    <div className='App'>
      <h2>Todos</h2>
      <ul>
        {
          list.map((item, index) => (
            <p key={index}><span >{item.info}</span><button onClick={() => { handleDone(item.id) }} className={item.status ? 'active' : ''}>完成</button><button onClick={() => { deleteTask(item.id) }}>删除</button></p>
          ))
        }
      </ul>
      <div>
        <input placeholder='add todo...' type='text' name='name' value={name} onChange={handleChange} /><button onClick={addTask}>添加</button>
      </div>
    </div>
  )
}
export default App