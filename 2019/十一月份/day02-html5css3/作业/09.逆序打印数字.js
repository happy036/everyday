// 9. 录入一个三位数，按逆序打印出各位数字。例如原数字为321，应输出123。
var num=123
var ge=parseInt(num%10)
var shi=parseInt(num/10%10)
var bai=parseInt(num/100)
console.log(`${ge}${shi}${bai}`)