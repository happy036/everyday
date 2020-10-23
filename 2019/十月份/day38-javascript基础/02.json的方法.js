let objJson='{"name":"张三","age":18}'

//把json字符串变成js对象，用的方法：JSON.parse（字符串）
console.log(typeof objJson)  //string


let obj = JSON.parse(objJson)
console.log(obj)

let arrJson = '["a","b","c"]'
let arr = JSON.parse(arrJson)
console.log(arr)
console.log(Array.isArray(arr))