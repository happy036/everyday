//需求：求1!+2!+3!+...+20!的和
var all=0
var sum=1
for (var i=1;i<=20;i++)
{
    sum*=i  
    all+=sum

}
console.log(all)
