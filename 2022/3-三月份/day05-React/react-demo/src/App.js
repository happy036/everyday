import { useReducer } from 'react'
function reducer() {

}
function App() {
  // 接收action 匹配action类型，返回最新状态
  useReducer(reducer, 0)
  return (
    <div>App</div>
  )
}

export default App