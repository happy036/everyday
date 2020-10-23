// *****
// *****
// *****
// *****
// *****
//打印一个星星
// for(var i=0;i<1;i++){
//     console.log('*')
// }
// //可以使用for循环打印一行星号(打印五遍)
// var str=''
// for(var i=0;i<5;i++){
//     str+="*"
// }
// console.log(str)






// *
// **
// ***
// ****
// *****
// for(var i=0;i<5;i++){
//     var str='';
//     for(var j=0;j<i;j++){
//         str+='*'
//     }
//     console.log(str)
// }


//打印等腰三角形
var str = "";
for (var i = 0; i < 4; i++) {
    str += " ";
}
for (var k = 0; k < 5; k++) {
    var str = "";
    // 4 3 2 1 0
    for (var i = 0; i < 4 - k; i++) {
        str += " ";
    }
    // 1 2 3 4 5
    for (var j = 0; j <= k; j++) {
        str += "* ";
    }
    console.log(str);
}


// //打印菱形
// // 上
// for (var s = 0; s < 3; s++) {
//     var str = "";
//     // i: 3 2 1
//     for (var i = 0; i < 3 - s; i++) {
//         str += "-"
//     }
//     // j: 1 3 5
//     for (var j = 0; j < 2 * s + 1; j++) {
//         str += "*"
//     }
//     console.log(str);
// }
// // 中
// console.log("*******")
// // 下
// for (var s = 0; s < 3; s++) {
//     var str = "";
//     // i: 1 2 3 
//     for (var i = 0; i <= s; i++) {
//         str += "-"
//     }
//     // j: 5 3 1
//     for (var j = 0; j <= -(2 * s + 1) + 5; j++) {
//         str += "*"
//     }
//     console.log(str);
// }



//斐波那契数列(亲两个数的和等于后一个)
//1 1 2 3 5 8 13 21 34 55 89 144
//分析：
//第一个月：1
//第二个月：1
//第三个月：2 未知数（第三个月的小兔子是第一个月+第二个月的）
//要声明三个变量
//第三个月的兔子的数量=前两个月的兔子数量+前一个月的兔子数量



// //步骤：
// //1.声明一个变量 代表第一个月兔子的对数
// var m1=1
// //2.声明一个变量 表示第二个月兔子的对数
// var m2=1
// //3.声明一个变量 表示第三个月兔子的对数
// var m3=0
// //4.循环 计算兔子的数量
// for(var i=2;i<12;i++){
// //4.1因为知道了日历中的1月和2月的兔子数量，必须要求出3月的兔子数量
// m3=m1+m2
// //4.2进行值的传递：m1=m2
// m1=m2
// //4.3进行值的传递:m2=m3
// m2=m3
// }
// //4.4打印m3
// console.log(m3)


// 写一个函数,去掉数组中重复的元素，var arr = [1,5,4,4,7,6,6]
// function  a(arr){
    
//     var arr1=[]
//     for(var i=0;i<arr.length;i++){
//         if(arr1.indexOf(arr[i])==-1){
//               arr1.push(arr[i])
//         }
//     }
//     return arr1
// }
// var arr = [1,5,4,4,7,6,6]
// console.log(a(arr))


//10. 写一个函数，求斐波那契数列fibonacci中的第n个数是多少？？1  1  2  3  5   8  13  21 
// function num(n){
//     if(n>2){
//         var a=1
//         var b=1
//         for(var i=3;i<=n;i++){
//             var c=a+b
//             a=b
//             b=c
//         }
//         return c
//     }else{
//         return 1
//     }
// }
// console.log(num(5))




