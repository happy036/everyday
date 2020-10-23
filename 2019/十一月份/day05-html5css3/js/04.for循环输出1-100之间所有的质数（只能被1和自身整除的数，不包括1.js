// 4. 利用JavaScript的for循环输出1-100之间所有的质数（只能被1和自身整除的数，不包括1）
for(var i=2;i<=100;i++){
    var z=true
    for(var j=2;j<i;j++){
        if(i%j===0){
            z=false
        }
    }
    if(z==true){
        console.log(i)
    }
}
