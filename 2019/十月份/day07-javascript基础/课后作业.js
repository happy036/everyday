//字符串连接用什么符号?

//答："`"  "\"

//如何把一个数字转成字符串？如何把字符串转成整数？

//console.log(string(变量))  

//i++和++i有什么区别?

//答：i++先使用变量，再把变量+1.++i先把变量+1，再使用变量

//*=是干什么用的？什么意思？
//答：a*=1
    // a=a*1

//求余用哪个符号？

//答：%

//== 和=== 的区别？

//答：==是值相等，===是值和数据类型都相等

//NaN 是什么？

//答：不是一个数字

//NaN==NaN结果是？
//答：空
//如何输出a对象中的name属性？

//答：console.log(a.name)

//如何删除一个对象中的属性？

//答：delete  a.name

//a是一个二维数组，如何打印第二个元素的第四个元素？

//答：console.log(a[1][3])

//什么时候使用.?

//答：对象取值赋值

//编程：计算1~100之间所有能够整除5的数的和？

/*var num=0
for(i=1;i<100;i++)
{
    if(i%5==0)
    num+=i
}
console.log(num)*/

//分支有几种结构？都是什么？

//答：三种结构，单向分支，双向分支，多向分支

//如何查看一个变量的类型？

//答：console.log(typeof  )

//1=="1"是否相等？0=="0"是否相当？

//答：不相等，相等

//并且用什么符号表示？

//答：&&

//定义一个对象保存姓名和年龄，然后判断如果年龄大于等于18就显示xxx已成年，否则显示xxx未成年

/*var name="小白"
var age=18
if(age>=18)
{
    console.log(`${name}已成年`)
}
else{
    console.log(`${name}未成年`)
}*/
 //与,或,非的特点? 用哪个符号表示？
// 答案:&&（与）：如果两个值都是true那么结果就是true,否则是false
      // ||(或)：如果两个值中有一个是true,那么结果就是false
      // !(非)：取反，如果一个值是true,那么结果就是false,如果一个值是false，那么值就是true

//说出至少三种执行js代码的方法?
//答：在网页中执行，在node中执行，viscode

// 如何定义一个对象?
// 答案:
/*var obj={
    name:"小黑"
}*/


// 如何打印对象中的一个属性?
// 答案:

//console.log(obj.name)

// 如何定义一个数组? 如何打印数组的一个元素?
// 答案:
//var arr=[1,2,3,4,5]
//console.log(arr[2])


// 计算1 ~ 100之间所有奇数的和?
// 答案:
/*var num=0
for (i=1;i<100;i++)
{
    if(i%2!=0)
    num+=i
}
console.log(num)*/


// 定义变量保存学生的分数,根据分类打印优,良,及格,不及格?
// 答案:
/*var abc=100
if(abc>90)
{
    console.log("优")
}
else if(abc>80&&abc<90)
{
    console.log("良")
}
else if(abc>65&&abc<80)
{
    console.log("及格")
}
else if(abc<65)
{
    console.log("不及格")
}*/



// true && false && true && true & false  的结果是 ?
// 答案:  false                                         



// false || false || false || true 的结果是?
// 答案:true



// !false && !true && !false 的结果?
// 答案:false



// 如何把一个数字转换为布尔?
// 答案:
//console.log(!!())
 