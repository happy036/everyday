//1、例如101中没有4；104中有一个4；144中有两个4。你要做的是统计出101到200之间的整数一共有多少个4?
var count=0
for(var i=101;i<=200;i++){
    
    var ge=i%10
    var shi=parseInt(i/10%10)
    if(ge==4 ){
        count++
    }
    if(shi==4){
        count++
    }
}
console.log(count)

