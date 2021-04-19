// class Person {
//   // 属性
//   name: string
//   // 构造函数
//   constructor(msg: string) {
//     this.name = msg
//   }
//   // 方法
//   study(msg: string): void {
//     console.log(`${msg}爱学习`)
//   }
// }
// // 通过类来实例化对象
// let pdd = new Person('小白')
// // console.log(pdd.name)
// pdd.study('小黑')

// 类的继承
// 继承语法 extends
// 基类(父类)
// class Animal {
//   age: number
//   constructor(age: number) {
//     this.age = age
//   }
//   eat(): void {
//     console.log('我爱吃食物')
//   }
// }
// // 派生类(子类)
// class Mouse extends Animal {
//   name: string
//   constructor(name: string) {
//     super(1)
//     this.name = name
//   }
//   dadong() {
//     console.log(`${this.name}会打洞`)
//   }
// }
// let Jerry = new Mouse('Jerry')
// Jerry.eat()
// Jerry.dadong()

// 类的修饰符
// private
// class Animal {
//   private age: number
//   constructor(age: number) {
//     this.age = age
//   }
//   eat(): void {
//     console.log('我爱吃食物')
//   }
// }
// // 派生类(子类)
// class Mouse extends Animal {
//   name: string
//   constructor(name: string) {
//     super(12)
//     this.name = name
//   }
//   dadong() {
//     console.log(`${this.name}会打洞`)
//   }
// }
// let Jerry = new Mouse('Jerry')
// // console.log(Jerry.age)
// Jerry.eat()
// Jerry.dadong()

// protected
// class Animal {
//   protected age: number
//   constructor(age: number) {
//     this.age = age
//   }
//   eat(): void {
//     console.log('我爱吃食物')
//   }
// }
// // 派生类(子类)
// class Mouse extends Animal {
//   name: string
//   constructor(name: string) {
//     super(12)
//     this.name = name
//   }
//   dadong() {
//     console.log(`${this.name}-${this.age}会打洞`)
//   }
// }
// let Jerry = new Mouse('Jerry')
// // console.log(Jerry.age)
// Jerry.eat()
// Jerry.dadong()

// 存取器(get set)
class Animal {
  private age: number
  constructor(age: number) {
    this.age = age
  }
  public get getAge(): number {
    return this.age
  }
  public set setAge(age: number) {
    this.age = age
  }
  eat(): void {
    console.log(`我爱吃食物${this.age}`)
  }
}
// 派生类(子类)
class Mouse extends Animal {
  name: string
  constructor(name: string) {
    super(12)
    this.name = name
  }
  dadong() {
    console.log(`${this.name}会打洞`)
  }
}
let Jerry = new Mouse('Jerry')
// console.log(Jerry.age)
Jerry.eat()
Jerry.dadong()
console.log(Jerry.getAge)
Jerry.setAge = 15
console.log(Jerry.getAge)



// 抽象类
// 只要某一个类中有抽象方法 就是抽象类
abstract class PoorFather {
  abstract getMoney(money: number): void
}

class RichSon extends PoorFather {
  getMoney() {
    console.log('有钱')
  }
}
let bai = new RichSon()
bai.getMoney()