import { createStore } from "redux";
// 1.3 导出reducer到store中去(在store中使用导出的reducer)
import reducer from "./reducer";
// 1.4 在store.js创建store并导出
const store = createStore(reducer)
// 导出
export default store