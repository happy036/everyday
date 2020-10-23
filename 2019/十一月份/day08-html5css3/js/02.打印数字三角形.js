//需求：在控制台实现下列图形:
/*
55555
4444
333
22
1
22
333
4444
55555
*/
var num = '5'
for (var i = 5; i >= 1; i--) {
    var str = ''
    for (var x = i; x >= 1; x--) {
        str += num
    }
    num--
    console.log(str);
}
var num = '2'
for (var i = 2; i <= 5; i++) {
    var str = ''
    for (var x = 1; x <= i; x++) {
        str = str + num
    }
    num++
    console.log(str);
} 