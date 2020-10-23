// let arr=[1,2,2,2,2,2,3,3,4,4,4,5,5,5,5,6,6,6,6,6,6]
// //数组去重
// let set = new Set(arr)
// console.log(set)

let set = new Set()
//属性：size
console.log(set.size)
//方法：添加元素 add()
set.add(3)
set.add('c')
console.log(set)
//方法：判断有没有该元素 has()
console.log(set.has('c'))
//方法：删除 delete()
console.log(set.delete('c'))
console.log(set)
//方法：清除 clear()
console.log(set.clear())
console.log(set)
