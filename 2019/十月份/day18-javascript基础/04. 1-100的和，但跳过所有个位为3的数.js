//4.  求整数1～100的累加值，但要求跳过所有个位为3的数(while实现)
var i=1,sum=0
while(i<=100){
    var ge=i%10
    if(ge==3){
        i++
        continue
    }
    sum+=i
    i++
}
console.log(sum)