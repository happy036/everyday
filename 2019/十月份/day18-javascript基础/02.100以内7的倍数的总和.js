//2. 100以内7的倍数的总和(while实现)
var i=1,sum=0
while(i<=100){
    if(i%7==0){
        sum+=i
    }
    i++
}
console.log(sum)
