export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    task: task
  }
}
export const changeTask = (idnex) => {
  // console.log(data)
  return {
    type: 'CHANGE_STATUS',
    num: idnex,
  }
}