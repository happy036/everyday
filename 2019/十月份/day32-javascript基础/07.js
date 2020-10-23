//7. 随机产生一个十六进制的颜色值 ,格式：#90E353
// 定义一个数组
var colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
// 定义字符串
var str = "#";
//  for循环
for (var i = 0; i < 6; i++) {
    str += colors[parseInt(Math.random() * 16 - 1)];
}
//  打印输出
console.log(str)