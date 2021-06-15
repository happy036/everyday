export const getNum = (dispatch) => {
  fetch('http://localhost:8080/getNum')
    .then(response => response.json())
    .then(json => {
      // console.log(json)
      dispatch(getTask(json.num))
    })
}
export const getTask = (num) => {
  return {
    type: 'NUM',
    num: num
  }
}