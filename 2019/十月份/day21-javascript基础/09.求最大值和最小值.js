//需求：求数组中的最大值和最小值, var arr =  [11, 32，55, 47，79，23]
//步骤
//1.声明变量定义数组
var arr =  [11, 32,55, 47,79,23]
//2.声明变量定义最大值
var a=arr[0]
//3.声明变量定义最小值
var b=arr[0]
//4.遍历数组
for (c=0;c<arr.length;c++){
    if(a<arr[c]){
        a=arr[c]
    }
    if(b>arr[c]){
        b=arr[c]
    }
}
//5.打印
console.log(a,b)
