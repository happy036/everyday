import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
// redux - thunk 是 Redux 官方提供的用于在 Redux 工作流程中加入异步代码的中间件。
import thunk from 'redux-thunk'
// 状态调试工具
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage
}
const reducerPersist = persistReducer(persistConfig, reducers)
const store = createStore(reducerPersist, composeWithDevTools(applyMiddleware(thunk)))
let persistor = persistStore(store)
export { store, persistor }