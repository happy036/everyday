//需求:利用JavaScript，使用循环语句输出如下菱形图案（由“-”和“*”这两种符号组成）
for (var i=0;i<3;i++){
    var str=''
    for(var j=0;j<3-i;j++){
         str+='-'
    }
    for (var k=0;k<2*i+1;k++){
        str+='*'
    }
    console.log(str)
}
console.log('*******')
for (var i=0;i<3;i++){
    var str=''
    for(var j=0;j<=i;j++){
         str+='-'
    }
    for (var k=0;k<=-(2*i+1)+5;k++){
        str+='*'
    }
    console.log(str)
}


