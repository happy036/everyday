//需求：定义一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）
//步骤
//1.声明变量定义一个五位数
var num=23432
//2.取出数字
var a=num%10
var b=parseInt(num/10%10)
var c=parseInt(num/100%10)
var d=parseInt(num/1000%10)
var e=parseInt(num/10000)
//3.判断第一位和第五位是否一样，第二位和第四位是否一样
if(e==a && d==b){
    //3.1打印
    console.log(`${num}是回文数`)
}