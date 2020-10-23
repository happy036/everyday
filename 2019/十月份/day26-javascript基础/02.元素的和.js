//需求： 写一个函数，求数组的所有元素的和，var arr = [18, 45, 333，5，6，1，5]

function all(arr){
    var sum=0
for(var i=0;i<arr.length;i++){
    sum+=arr[i]
}
return sum
}
var arr = [18, 45, 333,5,6,1,5]
console.log(all(arr))