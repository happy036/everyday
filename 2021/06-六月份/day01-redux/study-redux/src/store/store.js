// 1.引入redux
import { createStore } from "redux";
// 2.创建初始化数据
const initialState = {
  count: 0
}
// 3.创建action

// 4.创建reducer函数
function reducer(state = initialState, action) {
  return state
}
// 5.创建store
const store = createStore(reducer)
// 导出store
export default store