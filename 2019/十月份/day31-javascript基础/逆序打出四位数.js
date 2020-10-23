//3、定义一个四位数，按逆序打印出各位数字。例如原数字为5678，应输出8765。
var num=5678
var ge=num%10
var shi=parseInt(num/10%10)
var bai=parseInt(num/100%10)
var qian=parseInt(num/1000)
console.log(`${ge}${shi}${bai}${qian}`)