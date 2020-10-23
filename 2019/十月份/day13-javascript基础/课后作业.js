//41.入职薪水10K，每年涨幅5%，输出50年后工资多少
var money=10000
for(var i=1;i<=50;i++)
{
    money+=money*0.05
}
console.log(money)
//42.求出1-1/2+1/3-1/4…..-1/100的和（拔高题）
//43.用for循环求2+22+222+2222+22222的和
var sum=0
for (var i=2;i<=22222;i++)
{
    var a1 = i % 10;
    var a2 = parseInt(i / 10 % 10)
    var a3 = parseInt(i / 100 % 10)
    var a4 = parseInt(i / 1000 % 10)
    var a5 = parseInt(i / 10000)
    if (i < 10) 
    {
        if (a1 == 2) 
        {
            sum += i 
        }       
    }
    
    if (i < 100)
    {
        if (a1 == 2 && a2 == 2) 
        {
            sum += i
        }
    }
    if (i < 1000) 
    {
        if (a1 == 2 && a2 == 2 && a3 == 2)
        {
            sum += i
        }   
    }
    if (i < 10000)
    {
        if (a1 == 2 && a2 == 2 && a3 == 2 && a4 == 2)
        {
            sum+=i
        }
    } 
    if (i < 100000)
    {
        if (a1 == 2 && a2 == 2 && a3 == 2 && a4 == 2 && a5 == 2)
        {
            sum+=i
        }
    }
            
}
console.log(sum)
/*44.定义一个人的对象，有name,age,gender,height等属性，
要求：1)获取name的值
2)	通过2种方式给对象添加一个新的属性weight,值自己写
3)	删除属性名height*/
var people={
    name:"小白",
    age:18,
    gender:"男",
    height:180,
}
console.log(people.name)
people.weight=110
console.log(people)
delete  people.height
console.log(people)
//45.定义一个数组，取出下标是3的值，计算下表是2和下表是4对应的元素的和，并且赋值给一个变量，在控制台输出
var arr=[1,2,3,4,5,6]
console.log(arr[3])
var all=arr[2]+arr[4]
console.log(all)
//46.定义一个二维数组，var arr = [1,2,’3’,true,[22,33,55,66]],将55输出在控制台上
var arr = [1,2,'3',true,[22,33,55,66]]
console.log(arr[4][2])
//47.猴子偷桃  第一天吃一半+1个，第二天吃剩下的一半+1个，以后都吃剩下的一半+1个 到第10天只剩一个了 问第一天摘了多少桃子？
var sum3 = 1
 for(var i = 0;i<10;i++)
 {
     sum3 = (sum3+1)*2
 }
 console.log(sum3)
//48.控制台输出：计算 1+1/2!+1/3!+1/4!+...1/20!的和
//49.控制台输出：求1 x 2 x 3 x 4 x ... x 19 x 20的结果
var sum1=1
for(var i=1;i<=20;i++)
{
    sum1*=i
}
console.log(sum1)
//50.控制台输出：从100到500所有自然数中不含数字4的自然数共有多少个？
var sum2=0
for(var i=100;i<=500;i++)
{
     var b1 = i % 10
     var b2 = parseInt(i / 10 % 10)
     var b3 = parseInt(i / 100 % 10)
     if (b1==4||b2==4||b3==4) 
     {

     }
     else
     {
         sum2+=1
     }
 }
 console.log(sum2)

//二、简答题
//1. 怎么将别的数据类型转换成字符串类型
//String  to String
//2. 怎么定义一个对象，并且给获取对象的属性，给对象添加和删除属性
/*var obj={
    name:"小黑"
}
console.log(obj.name)
obj.age=19
delete obj.name
console.log(obj)*/
//3. == 和 === 的区别是什么？
/*==是数据类型不同，先转成相同数据类型再比较
===是不转换数据类型，直接比较*/
//console.log(1 == “1”)和console.log(1 === fasle)的结果是什么，并解释为什么
//console.log(1 == “1”)结果是true  字符串1转换为数字也为1,因为1==1，所以结果为true
//console.log(1 === fasle)结果报错  单词错误 fasle是false
//4. 前++ 后++的区别是什么
//前++是先把变量加1，然后再使用这个变量
//后++是先使用这个变量，然后再把这个变量加1

