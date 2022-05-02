import { useReducer } from 'react'
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}
function App() {
  // 接收action 匹配action类型，返回最新状态
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </div>
  )
}

export default App