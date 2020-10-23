// 3.找到100到200之间第一个能被7整除的数字
var count=0
for(var i=100;i<=200;i++){
    if(i%7==0){
        count++
    }
    if(count==1){
        break
    }
}
console.log(i)