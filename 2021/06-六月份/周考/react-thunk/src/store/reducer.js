const aaa = {
  bbb: 0
}
const reducer = (state = aaa, action) => {
  console.log(state)
  switch (action.type) {
    case 'NUM':
      return {
        bbb: action.num
      }

    default:
      return state
  }
}
export default reducer