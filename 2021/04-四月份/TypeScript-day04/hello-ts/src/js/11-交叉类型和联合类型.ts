// 1.联合类型
// 格式:type1 | type2 | ...
// 联合类型是多个类型中的任意类型
// let a: number | string | boolean
// a = 123
// a = '123'
// a = true

// 2.交叉类型
// 格式:type1&type2&type...
// 交叉类型是将多个类型合并为一个类型

let getNewobj = <T, U>(target: T, source: U): (T & U) => {
  let res = {} as (T & U)
  res = Object.assign(target, source)
  return res
}
console.log(getNewobj({ name: 'haha' }, { age: 18 }))