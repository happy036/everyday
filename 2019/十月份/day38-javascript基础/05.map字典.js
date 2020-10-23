//object的键有哪些数据类型

// let obj = {
//     1:'a',
//     '2':'b',
//     true:'c',
//     undefined:'d',
//     null:'e'
// }

// console.log(obj)
// for (var key in obj){
//     console.log(typeof key)
// }

//map的语法
//1.初始化一个空的map
//let map = new Map()

//2.通过字面量的方式声明

// let map = new Map([
//     [键，值]，
//     [键，值]，
//     [键，值]
     
// ])

let map = new Map([
    ['name','张杰'],
    ['wife','谢娜']
])
console.log(map)
console.log(map.size)

// //在字典中增加数据  字典名.set（键，值）
// map.set('daughter',2)
// console.log(map)

// //字典名.has(key)判断某一个键在不在map中，如果在返回true,如果不在返回false
// console.log(map.has('name'))

// //字典名.get(key)通过key获取map中的key对应的值
// console.log(map.get('name'))

// //字典名.delete(key) 通过key删除整条数据
// console.log(map.delete('name'))
// console.log(map)

// //字典名.clear()清除所有成员数据
// map.clear()
// console.log(map)

//通过for...of遍历map中的所有的键
for(let key of map.keys()){
    console.log(key)
}
//遍历值
for(let value of map.values()){
    console.log(value)
}

//遍历键值对
for(let item of map.entries()){
    console.log(item[0],item[1])
}

// map.forEach(function (值，键，map本身) {})
map.forEach(function(value,key,map){
    console.log(key,value)
})
