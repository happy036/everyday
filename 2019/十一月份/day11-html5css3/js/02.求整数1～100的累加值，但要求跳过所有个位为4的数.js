// 2.求整数1～100的累加值，但要求跳过所有个位为4的数
var sum=0
for(var i=1;i<=100;i++){
    var ge=parseInt(i%10)
    if(ge==4){
        continue
    }
    sum+=i
}
console.log(sum)