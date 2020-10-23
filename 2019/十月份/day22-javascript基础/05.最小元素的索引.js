//需求：求出数组var arr= [1,2,4,5,10,100,2,-22]中最小元素的索引，如果这样的元素个数大于1，则返回索引最小的数的索引
//步骤
//1.声明变量定义数组
var arr= [1,2,4,5,10,100,2,-22]
//2.声明变量定义最小值
var arr1=arr[0]
//3.遍历数组
for (var i=0;i<arr.length;i++){
    //3.1判断是否为最小值
    if(arr1>arr[i]){
        arr1=arr[i]
    }
}
//4.打印最小元素
console.log(arr1)
//5.查看元素在数组中的位置
var arr2=arr.indexOf(-22)
//6.打印
console.log(arr2)