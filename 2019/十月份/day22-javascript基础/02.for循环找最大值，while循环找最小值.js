//需求：数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 使用while循环找出里面的最小值?
//步骤
//1.声明变量定义数组
var arr=[10, 5, 34, 59, 98]
//2.声明变量定义最大值
var num=arr[0]
//3.for循环
for(var i=0;i<arr.length;i++){
    //3.1判断是否为最大值
    if(num<arr[i]){
        num=arr[i]
    }
}
//4.打印
console.log(num)
//1.初始化表达式
var i=0
//2.声明变量定义最小值
var num1=arr[0]
//3.while循环
while(i<arr.length){
    //3.1判断是否为最小值
    if(num1>arr[i]){
        num1=arr[i]
    }
    //3.2步进
    i++
}
//4.打印
console.log(num1)