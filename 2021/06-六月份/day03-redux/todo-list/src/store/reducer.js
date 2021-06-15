import { ADD_DATA, DEL_DATA, FIX_DATA, FIX_KEY } from "./constants";

// 1.1 在reducer中初始化数据--> list: [{id,info,status}]
const initialState = {
  list: [
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
  ],
  viewKey: 'all'
}
// 1.2 在reducer中创建reducer函数
const reducer = (state = initialState, action) => {
  // console.log(action.type)
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        list: [...state.list, action.task]
      }
    case DEL_DATA:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.id)
      }
    case FIX_DATA:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.id) {
            return { ...item, status: !item.status }
          } else {
            return item
          }
        })
      }
    case FIX_KEY:
      return {
        ...state,
        viewKey: action.viewKey
      }
    default:
      return state
  }
}
// 1.3 导出reducer到store中去
export default reducer