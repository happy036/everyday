// 2.求1-100之间所有偶数的和，以及偶数的个数
//定义变量 累加
var sum=0
//定义变量，计算偶数出现的次数
var count=0
//for 循环
for(var i=1;i<=100;i++){
    //判断数字是否为偶数
    if(i%2==0){
        count++
        sum+=i
    }
}
console.log(count,sum)