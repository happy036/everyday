//需求： 定义数组 var arr = [11,22,33,44,55],要求：将arr数组中为偶数的元素打印到控制台
var arr = [11,22,33,44,55]
for (var a=0;a<arr.length;a++){
    if(arr[a]%2==0){
        console.log(arr[a])
    }
}