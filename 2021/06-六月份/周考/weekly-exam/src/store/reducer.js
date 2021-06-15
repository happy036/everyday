const initializeState = {
  list: [
    {
      time: new Date().toLocaleString(),
      info: '唉',
      status: false
    },
    {
      time: new Date().toLocaleString(),
      info: '无语',
      status: false
    }
  ]
}
const reducer = (state = initializeState, action) => {
  // console.log(action.type)
  switch (action.type) {
    case 'ADD_TASK':
      state.list.push(action.task)
      return { ...state, list: state.list }
    case 'CHANGE_STATUS':
      state.list[action.num].status = true
      return { ...state, list: state.list }
    default:
      return state
  }
}
export default reducer