// 2. 利用JavaScript完成如下功能：给出一个数判断是属于小数还是整数，如：var a= 3.14输出：3.14是小数 
//声明变量定义数字
var num=3.14
//判断数字是小数还是整数
if(num%1==0){
    console.log(`${num}是整数`)
}else{
    console.log(`${num}是小数`)
}