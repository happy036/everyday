// 数据类型兼容
// 类型兼容性用于确定一个类型是否能赋值给其他类型。
// 协变（Covariant）：只在同一个方向；
// 逆变（Contravariant）：只在相反的方向；
// 双向协变（Bivariant）：包括同一个方向和不同方向；
// 不变（Invariant）：如果类型不完全相同，则它们是不兼容的。

// 接口兼容性
// 检查接口的兼容性 接口能不能赋值给对象
// interface TestInterface {
//   age: number
// }
// let t: TestInterface
// let p1 = { age: 18 }
// let p2 = { name: 'zs' }
// let p3 = { age: 18, name: 'zs' }
// t = p1
// t = p2
// t = p3 //可多不可少，就可以实现兼容



// 会递归检查
// interface PersonInterface {
//   age: number;
//   name: {
//     firstName: string
//   }
// }
// let k: PersonInterface
// let p1 = { age: 18 }
// let p2 = { age: 18, name: 'haha' }
// let p3 = { age: 18, name: { firstName: 'haha' } }
// k = p1
// k = p2
// k = p3