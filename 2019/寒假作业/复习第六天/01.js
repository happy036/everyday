// 1.	定义2个数组，let arrA = [1,2,3,3]; let arrB = [2,4,5,6]求2个数组的并集，交集
// let arrA = [1, 2, 3, 3]
// let arrB = [2, 4, 5, 6]
// let arrC = [].concat(arrA, arrB)
// console.log(arrC)
// let arrD = []
// for (let i = 0; i < arrA.length; i++) {
//     for (let j = 0; j < arrB.length; j++) {
//         if (arrA[i] === arrB[j]) {
//             arrD.push(arrA[i])
//         }
//     }
// }
// console.log(arrD)

// 2.	随机产生一个十六进制的颜色值 ,例如：#90E353
// var str = "#";
// //一个十六进制的值的数组
// var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
// for (var i = 0; i < 6; i++) {
//     //产生的每个随机数都是一个索引,根据索引找到数组中对应的值,拼接到一起
//     var num = parseInt(Math.random() * 16);
//     str += arr[num];
// }
// console.log(str)
// 3.	封装一个函数，把一个时间日期对象转成yyyy-mm-dd HH:mm:ss
// function time() {
//     let date = new Date()
//     let date1 = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
//     return date1
// }
// console.log(time())
// 4.	获取指定数组中元素值为奇数的元素个数，具体要求如下：
// 使用javascript定义函数getEvens实现要求：获取指定数组arr中元素值为奇数的元素个数，并返回
// 1).定义一个整数数组arr;
// 2).获取4个1~50之间（包含1和50）的随机整数，并存入arr
// 3).传递arr调用getEvens(arr)方法，获取返回值，并打印在控制台
// var arr = [];
// for (var i = 0; i < 4; i++) {
//     arr.push(Math.ceil(Math.random() * (50 - 1) + 1))
// }
// function getEvens(arr) {
//     var count = 0
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 != 0) {
//             count++
//         }
//     }
//     return count
// }
// console.log(getEvens(arr))
// 5.定义一个函数， 接收一个字符串数组， 方法中打印姓 "张"的名字
// 输入： ["张三丰","李晓阳","大张","刘张伟","张章"]
// 输出： 张三丰 张章
// 要求： 至少用3中方式判断姓是张
// var arr = ["张三丰", "李晓阳", "大张", "刘张伟", "张章"]
// function name(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i][0] == "张") {
//             console.log(arr[i])
//         }
//     }
// }
// name(arr)
// var arr = ["张三丰", "李晓阳", "大张", "刘张伟", "张章"]
// function name(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].charAt(0) == "张") {
//             console.log(arr[i])
//         }
//     }
// }
// name(arr)