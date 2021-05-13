// 需求:定义一个创建数组的方法,可以创建出指定长度的数组,并且可以用任意指定的内容填充这个数组
// let getArray = (length: number, value: any): any[] => {
//   return new Array(length).fill(value)
// }
// let arr = getArray(5, 'abc')
// console.log(arr)



// 通过泛型解决需求
let getArray = <T>(length: number, value: T): T[] => {
  return new Array(length).fill(value)
}