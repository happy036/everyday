//10. 求1到100所有不能被3整除的整数的第一个大于2000的和
var sum=0
for (var a=1;a<=100;a++){
    if(a%3!=0){
        sum+=a
    }
    if(sum>2000){
        console.log(sum)
        break
    }
}


