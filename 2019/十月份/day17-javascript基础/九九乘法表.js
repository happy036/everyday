//利用JavaScript完成如下九九乘法表

//分析：外层控制行数，内层控制列数
for (var a=1;a<=9;a++){
    var str=""
    for(var b=1;b<=a;b++){
        str+=b + 'x' + a + '=' + b * a + ' '
    }
    console.log(str)
}