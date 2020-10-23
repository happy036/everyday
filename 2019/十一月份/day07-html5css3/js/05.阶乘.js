// 5.求1!+2!+3!+...+20!的和
var sum=1
var sum1=0
for(var i=1;i<=20;i++){
    sum*=i
    sum1+=sum
}
console.log(sum)