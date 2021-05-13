// 类型守卫
// typeof
// let fn = (x: number | string): number | string => {
//   if (typeof x === 'string') {
//     return x.length
//   } else {
//     return x.toFixed()
//   }
// }
// console.log(fn(3))



// instanceof
// instanceof就是用在类或者对象
// class Dog {
//   name: string
//   constructor() {
//     this.name = 'aaa'
//   }
// }
// class Cat {
//   age: number
//   constructor() {
//     this.age = 2
//   }
// }
// function fn(): string | number {
//   // 生成随机数
//   let num = Math.random()
//   let res = num > 0.5 ? new Dog() : new Cat()
//   if (res instanceof Dog) {
//     return res.name
//   } else {
//     return res.age
//   }
// }
// console.log(fn())