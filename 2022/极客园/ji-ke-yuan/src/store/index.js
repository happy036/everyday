import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
// redux - thunk 是 Redux 官方提供的用于在 Redux 工作流程中加入异步代码的中间件。
import thunk from 'redux-thunk'
// 状态调试工具
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
export default store