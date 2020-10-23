//需求：请编程实现数组最大的与第一个元素交换，最小的与最后一个元素交换，然后打印数组内容, var arr = [1,2,4,5,7,7,666,0,-1,-2,-3]
//步骤
//1.声明变量定义数组
var arr = [1,2,4,5,7,7,666,0,-1,-2,-3]
//2.最大值
var arr1=arr[0]
//3.最小值
var arr2=arr[0]
//4.遍历数组
for(var a=0;a<arr.length;a++){
    if(arr1<arr[a]){
        arr1=arr[a]
    }
    if(arr2>arr[a]){
        arr2=arr[a]
    }
}
//5.元素交换位置
arr[arr.indexOf(arr1)]=arr[0]
arr[0]=arr1
arr[arr.indexOf(arr2)]=arr[arr.length-1]
arr[arr.length-1]=arr2
console.log(arr)