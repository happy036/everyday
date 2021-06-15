const redux = require('redux')
// 1.创建初始化状态(展示数据) 相当于state={}
const initialState = {
  count: 0
}
// 2.创建action(修改数据)如果你没有修改数据的需求那么就不需创建action
// 把count的值从0变成1
// const addCount = { type: 'ADD_COUNT', count: 1 }
const addCount = (id) => {
  return { type: 'ADD_COUNT', count: id }
}
// 3.创建reducer方法(串联 数据和action)
// state的默认值就是initialState为了首屏渲染
function reducer(state = initialState, action) {
  // console.log(action)
  // return state
  switch (action.type) {
    case 'ADD_COUNT':
      return { count: action.count }
    default:
      return state
  }
}
// 4.创建store 参数是固定的:reducer
const store = redux.createStore(reducer)

// 先订阅
console.log(store.getState())
store.subscribe(() => {
  console.log("******************")
  console.log(store.getState())
  console.log("******************")
})

// 获取数据 store.getState()
// console.log(store.getState())

// 修改数据store.dispatch(Action的名字)
// store.dispatch(addCount(5))
// console.log(store.getState())