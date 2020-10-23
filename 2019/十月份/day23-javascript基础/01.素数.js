//需求：输出2-100之间的所有素数（素数就是只能被1和其本身整除的数）
for (var i = 2; i <= 100; i++){
    var s = 1
    for (var j = 2; j < i; j++){
        if (i%j == 0){
            s = 0
        }
    }
    if (s == 1){
        console.log(i)
    }
}