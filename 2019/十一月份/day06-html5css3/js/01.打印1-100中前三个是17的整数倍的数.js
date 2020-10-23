// 1. 打印1-100中前三个是17的整数倍的数。
var count=0
for(var i=1;i<=100;i++){
    if(i%17==0){
        count++
        console.log(i)
        if(count==3){
           break
        }
    }
}