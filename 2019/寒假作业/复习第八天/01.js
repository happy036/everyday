// 1.获取数组中元素值为偶数的累加和与元素值为奇数的累加和，并计算出它们之间的差值，要求： 
// 使用javascript定义函数 getNum(arr)，完成如下要求：
// 1）用户输入5个整数，并存放在数组arr中 ，输入前提示输入的是第几个值
// 2）获取指定数组arr中元素值为偶数的累加和
// 3）获取指定数组arr中元素值为奇数的累加和
// 4）返回偶数累加和与奇数累加和之间的差值
// 5）传递数组arr调用getNum(arr)函数,获取返回值，并打印输出


// 2.	求出1-1/2+1/3-1/4…..-1/100的和
// var sum = 0
// for (var i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         sum -= 1 / i
//     } else {
//         sum += 1 / i
//     }
// }
// console.log(sum)
// 3.	有一组带前缀的“ 整数”（ 字母加数字）：“ A5”, ”B6”, ”AB7”, ”YR99”， 整数的位数都不确定， 要求设计一个函数把这样的“ 整数” 加上1
// 例如：
// “ A5” 经过方法运算后返回结果是“ A6”，
// “ AE7” 经过方法运算后返回结果是“ AE8”，
// “ YR99” 经过方法运算后返回结果是“ YR100”
// 定义一个函数， 接收一个字符串： 字符串左边是英文字母， 右边是数字， 返回 + 1 后的结果



// 4.	查询学生相关信息，使用javascript实现如下要求：
// 有一个二维数组，每条数据固定stuid表示学号,name表示姓名,gender表示性别
// var students = [
//   { stuid: "S01", name: "周夏", gender: "男",score: 86 },
//   { stuid: "S02", name: "郑竹", gender: "男",score: 77 },
//   { stuid: "S03", name: "吴兰", gender: "女",score: 35},
//   { stuid: "S04", name: "李云", gender: "男",score: 56 }
// ];
// 解释：{stuid:"S01",name:"周夏",gender:"男"}表示学生"周夏"的学号是"S01"，性别是"男";

// 1.定义函数totalBySex，
//   要求：接收学生信息二维数组students，函数中查询男生、女生各多少人并将结果返回
//   示例：
//   男生人数：3人
//   女生人数：1人
// 2.定义函数getMaxScore,
//  要求:接收学生信息二维数组students,函数中找出成绩最高的学生姓名，并将结果返回
// var students = [
//     { stuid: "S01", name: "周夏", gender: "男", score: 86 },
//     { stuid: "S02", name: "郑竹", gender: "男", score: 77 },
//     { stuid: "S03", name: "吴兰", gender: "女", score: 35 },
//     { stuid: "S04", name: "李云", gender: "男", score: 56 }
// ];

// function totalBySex(students) {
//     var girls = 0
//     var boy = 0
//     for (var i = 0; i < students.length; i++) {
//         if (students[i].gender == "男") {
//             boy++
//         } else if (students[i].gender == "女") {
//             girls++
//         }
//     }
//     console.log(`男生人数：${boy}人`)
//     console.log(`女生人数：${girls}人`)
// }
// totalBySex(students)

// function getMaxScore(students) {
//     var max = students[1]
//     for (var i = 0; i < students.length; i++) {
//         if (students[i].score > max.score) {
//             max = students[i]
//         }
//     }
//     console.log(`成绩最高的学生是${max.name}`)
// }
// getMaxScore(students)
// 5.判分小程序： 学生答案var str = "a#ab#c#D#a", 正确答案var  ans = "A#AC#C#BD#B", 表示一共5题， 答对一题3分
// 定义函数， 接收学生答案和正确答案， 计算学生得分并返回分数
var str = "a#ab#c#D#a"
var ans = "A#AC#C#BD#B"

function students(str, ans) {
    str = str.toUpperCase()
    var str1 = str.split("#")
    var ans1 = ans.split("#")
    var sum = 0
    for (var i = 0; i < ans1.length; i++) {
        if (str1[i] === ans1[i]) {
            sum += 3
        }
    }
    return sum
}
console.log(students(str, ans))