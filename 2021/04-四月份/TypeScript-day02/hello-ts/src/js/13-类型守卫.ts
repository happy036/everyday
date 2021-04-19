// function useStr(str: string) {
//   if (typeof str === 'string') {
//     console.log(str.substr(1))
//   } else {

//   }
// }
// useStr('hahaha')
// interface A {
//   x: number;
// }

// interface B {
//   y: string;
// }

// function doStuff1(q: A | B) {
//   if ('x' in q) {
//     // q: A
//     console.log(q.x)
//   } else {
//     // q: B
//     console.log(q.y)
//   }
// }
// 联合类型
let z: string | number | boolean;
z = 5;
z = true;
type zzz = string | number | boolean;
let aaa: zzz = 6;

