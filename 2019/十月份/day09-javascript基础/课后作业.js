//1.定义若干个js变量，需表现出js中的各种数据类型，并在页面中输出每个变量的值和其对应类型。
var a =123
console.log(a,typeof(a))
var b='abc'
console.log(b,typeof(b))

var c=true
console.log(c,typeof(c))

var d=undefined
console.log(`${d}是undefined`)
var e=null
console.log(`${e}是null`)
var obj={name:'tom',age:9}
console.log(obj,typeof(obj))

var arr=[1,2,3,4]
console.log(`${arr}是数组`,typeof(arr))
/*2.用户输入一个数字，列出所有它能够整除的数字。比如用户输入48，那么控制台中将显示：比如，用户输入19，那么控制台显示
1
19
比如，用户输入21，那么控制台显示
1
3
7
21*/
for (var i=1;i<=19;i++)
{
    if(19%i==0)
    {
        console.log(i)
    }
}
//3.读程序，写结果：
//(1)123abc   abc
//(2)22    23
//4.已知任意两个正整数（a，b），将其作为直角三角形的直角边长，求斜边长

var a = 3
var b = 4
for(c = 1 ; c<10 ; c++)
{
    if((a*a+b*b)%c*c == 0)
    {
        console.log(c)
    }
}



/*6. 写一个程序打印1到100这些数字。但是遇到数字为3的倍数的时候，打印“Fizz”替代数字，5的倍数用“Buzz”代替，既是3的倍数又是5的倍数打印“abcde”。*/
for(var o=1;o<=100;o++)
{
    if(o%3==0)
    {
        console.log("Fizz")
    }
    else if(o%5==0)
    {
        console.log("Buzz")
    }
    else if(o%3==0&&o%5==0)
    {
        console.log("abcde")
    }
}

//9. 
 var fruit1 = {
    number : 1,
    name1 : '榴莲',
    money : 32.0,
    much : '公斤',
    quality : "A"
}
console.log(fruit1)

var fruit2 = {
    number : 2,
    name :'苹果',
    money :6.5,
    much : '公斤',
    quality : 'B'
}
console.log(fruit2)

var fruit3 = {
    number : 3,
    name :'猕猴桃',
    money :6.0,
    much : '公斤',
    quality : 'A'
}
console.log(fruit3)

//10.
var food1 = {
        name1 : '少林寺酥饼核桃',
        money : 15.50,
        number1 : 22.00,
        use : 341.00
    }
    console.log(food2)
    var food2 = {
        name1 : '然光Q移',
        money : 16.00,
        number1 : 55.00,
        use : 880.00
    }
    console.log(food2)
    
    var food3 = {
        name1 : '尚康杂粮牡丹饼',
        money : 14.50,
        number1 : 24.00,
        use : 348.00
    }
    console.log(food3)

  //  二、简答题
//1.数据类型有几种,分别是哪些

//七种  数字，字符串，undefined，null，对象，数组，布尔

//2.怎么判断一个变量的数据类型

//console.log(typeof())

//3.怎么判断一个变量是否是数字

//isNaN()

//4. 怎么将其他数据类型转换成数字类型

//number(),+,perseInt,perseFlot






