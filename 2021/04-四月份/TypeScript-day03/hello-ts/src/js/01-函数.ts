// 函数的可选参数
// 在形参的后面添加一个问号，就代表该参数可选
// let fn = function (x: number, y?: number) {
//   if (y) {
//     return x + y
//   } else {
//     return x
//   }
// }
// ts中如果没有声明可选，那么必须传 不传报错
// let result: number = fn(1, 2)
// console.log(result)


// 参数的默认值
// 带有默认值参数一定在没有默认值的参数后面
// let fn = function (x: number = 3, y: number) {
//   if (y) {
//     return x + y
//   } else {
//     return x
//   }
// }
// ts中如果没有声明可选，那么必须传 不传报错
// let result: number = fn(6, 3)
// console.log(result)


// rest参数(剩余参数)
// 有一个人20岁了，未来会有人来，计算全班人的平均年龄
// let getAvg = function (age: number, ...rest: number[]) {
//   let sum: number = 0
//   for (let i = 0; i < rest.length; i++) {
//     sum += rest[i]
//   }
//   let avg = (sum + age) / (rest.length + 1)
//   return avg
// }
// console.log(getAvg(20, 20, 20, 20, 20))