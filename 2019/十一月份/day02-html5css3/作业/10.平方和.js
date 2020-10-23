// 10.定义一个三位数，求各位数的平方和是多少，在控制台输出。
var num=123
var ge=parseInt(num%10)
var shi=parseInt(num/10%10)
var bai=parseInt(num/100)
console.log(ge*ge+shi*shi+bai*bai)
