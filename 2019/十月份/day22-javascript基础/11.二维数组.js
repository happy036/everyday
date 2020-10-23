//需求：现有二维数组，var  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];                                       
//   1. 遍历打印二维数组的所有元素
//   2. 计算二维数组中所有元素的和
//   3. 求二维数组中所有元素的最大值。
//步骤
//1.声明变量定义数组
var  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
//2.累加
var sum=0
//3.声明变量定义最大值
var sum1=array[0][0]
//4.遍历数组
for (var i=0;i<array.length;i++){
    for (var j=0;j<array[i].length;j++){
        //4.1累加数组
        sum+=array[i][j]
        //4.2判断是否为最大值
        if(sum1<array[i][j]){
            sum1=array[i][j]
        }
        //4.3打印
        console.log(array[i][j])
    }
}
//5.打印
console.log(sum,sum1)
