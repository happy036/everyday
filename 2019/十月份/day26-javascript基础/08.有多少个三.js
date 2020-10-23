//需求：写一个函数,  100到200有多少3 ，解释：例如101中没有3；103中有一个3；133中有两个3。你要做的是统计出到200之间的整数一共有多少个3。

function all(){
    var count=0
for(var i=100;i<=200;i++){
    var ge=i%10
var shi=parseInt(i/10%10)
if(ge==3){
    count++
}
if(shi==3){
    count++
}
}
console.log(count)
}
all()