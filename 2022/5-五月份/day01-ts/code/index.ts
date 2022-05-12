let apples: number = 5
let speed: string = 'fast'
let hasName: boolean = true
// 内置对象
let date: Date = new Date()
// 字符串数组
let colors: string[] = ['red', 'green', 'blue']
// 对象字面量
let point: { x: number; y: number } = { x: 100, y: 200 }
// 自定义类
// 类可以作为类实例的类型
class Car{ }
let car: Car = new Car()
// 函数
let logNumber: (n: number) => void
logNumber = (n) => {
    console.log(n)
}
logNumber(10)