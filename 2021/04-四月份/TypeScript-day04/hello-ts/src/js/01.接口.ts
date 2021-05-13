// 需求:定义一个函数getUserInfo,用来获取一个用户的姓名和年龄的字符串
// interface userInterface {
//   name: string,
//   age: number
// }
// let getUserInfo = ({ name, age }: userInterface): void => {
//   console.log(`我的名字叫${name},我今年${age}`)
// }
// getUserInfo({
//   name: 'haha',
//   age: 18
// })



// 函数类型接口
// interface Foo {
//   (x: number, y: number, desc?: string): void
// }
// const sum: Foo = function (x, y, desc) {
//   console.log(x, y, desc)
// }
// sum(1, 2, 'haha')



// 使用某个类来实现某一个接口
// interface carInterface {
//   color: string,
//   brand: string,
//   run(): void
// }
// class BMW implements carInterface {
//   color: string
//   brand: string
//   constructor(color: string, brand: string) {
//     this.color = color
//     this.brand = brand
//   }
//   run() {
//     console.log(`${this.color}颜色,${this.brand}车`)
//   }
// }
// let x5 = new BMW('蓝色', '宝马')
// x5.run()



// 接口的继承
interface whiteInterface {
  color: string
}
interface ageInterface {
  age: number
}
interface catInterface extends whiteInterface, ageInterface {
  run(): void
}
class cat implements catInterface {
  color: string
  age: number
  constructor() {
    this.color = '白色'
    this.age = 3
  }
  run() {
    console.log(`${this.color}的橘猫,${this.age}岁了`)
  }
}
let jvmao = new cat()
jvmao.run()