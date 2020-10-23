//7.  求1到100之间的累加值，其中不包含个位数为9的数字（while实现）
var a=1,sum=0
while(a<=100){
    if(a%10==9){
        a++
        continue
    }
    sum+=a
    a++
}
console.log(sum)