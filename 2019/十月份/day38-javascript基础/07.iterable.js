//可以使用for...of遍历的统一集合类型 包括Array Set Map
let arr=[1,2,3,4,5]
for(let key of arr){
    console.log(key)
}
for(let item of arr.entries()){
    console.log(item)
}


let set = new Set(['a','b','c'])
for(let item of set.entries()){
    console.log(item)
}

let map = new Map([
    ['a',1],
    ['b',2],
    ['c',3]
])

for(let item of map.entries()){
    console.log(item)
}