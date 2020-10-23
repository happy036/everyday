//需求：按照从大到小的顺序排列 ，var arr= [10, 5, 34, 59, 98],最后打印排序后的数组。
//步骤
//1.声明变量定义数组
var arr= [10, 5, 34, 59, 98]
//2.排序
var result = arr.sort(function (a,b) { return b-a})
console.log(result)