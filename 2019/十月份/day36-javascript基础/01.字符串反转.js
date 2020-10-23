// 1.将字符串 var str="abcdefgh"进行反转，结果是 "hgfedcba"
var str="abcdefgh"
var str1=''
for(var i=str.length-1;i>=0;i--){
str1+=str[i]
}
console.log(str1)