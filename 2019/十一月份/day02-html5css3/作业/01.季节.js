// 1.录入月份，输出对应的季节
//     (1)键盘录入一个整数(代表月份,范围1-12)
//     (2)输出该月份对应的季节
//    	   3,4,5春季
//    	   6,7,8夏季
//    	   9,10,11秋季
//    	   12,1,2冬季
//     (3)演示格式如下:
//    	   请输入一个月份:3
//    	   控制台输出:3月份是春季"
//定义变量
var month=3
//判断月份属于哪个季节
if(month>=3 && month<=5){
    console.log(`${month}月份是春季`)
}else if(month>=6 && month<=8){
    console.log(`${month}月份是夏季`)
}else if(month>=9 && month<=11){
    console.log(`${month}月份是秋季`)
}else if(month>=1 && month<=2 || month==2){
    console.log(`${month}月份是冬季`)
}