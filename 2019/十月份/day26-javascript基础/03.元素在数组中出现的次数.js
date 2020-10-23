//需求： 写一个函数，求出3在数组 var arr = {3,4,3,5,7,9};中出现的次数

function  ci(arr){
    var count=0
for (var i=0;i<arr.length;i++){
    if(arr[i]==3){
        count++
    }
}
return count
}
var arr=[3,4,3,5,7,9]
console.log(ci(arr))