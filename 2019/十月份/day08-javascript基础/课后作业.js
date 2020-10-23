//1. 1-100之间所有数的总和 与 平均值
var sum=0
var num
for(var i=1;i<=100;i++)
{
    sum+=i
}
num=sum/100
console.log(sum,num)

//2. 1-100之间所有偶数的和
var sum1=0
for(var p=1;p<=100;p++)
{
    if(p%2==0)
    {
        sum1+=p
    }
}
console.log(sum1)

//3 . 100以内7的倍数的总和
var sum2=0
for(var o=1;o<=100;o++)
{
    if(o%7==0)
    {
        sum2+=o
    }
}
console.log(sum2)

//4. 利用JavaScript完成如下九九乘法表

var sum4=0
for(var a=1;a<10;a++)
{
    for(var b=1;b<=a;b++)
    {
        sum4=a*b
        console.log(`${a}*${b}=${sum4}`)
    }
}
//5. 用户输入一个数字，列出所有它能够整除的数字。

var num2=12
for(var i=1;i<=num2;i++)
{
    if(num2%i==0)
    {
        console.log(i)
    }
}

//6. 利用JavaScript求：1+2+3+…+100的和

var sum3=0
for(var i=1;i<=100;i++)
{
    sum3+=i
}
console.log(sum3)

//7. 利用JavaScript完成如下功能：要求在1~1000数字之中，找出所有能被5整除，或者被6整除的数字，并在控制台输出这些数字

for (var u=1;u<=1000;u++)
{
    if(u%5==0 || u%6==0)
    {
        console.log(u)
    }
}

//8. 打印一个 5行4列的矩形
/*9. 利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）（拔高题）
        * 
       * * 
      * * * 
     * * * * 
    * * * * * 
10. 利用JavaScript，使用循环语句输出如下菱形图案（由“-”和“*”这两种符号组成） （拔高题）

     ---*
     --***
     -*****
     *******
     -*****
     --***
     ---*
11.利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）
     55555
     4444
     333
     22
     1
     22
     333
     4444
     55555
12.利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）
     *                      *********
     ***                   *******
     *****                *****
     *******             ***      
     *********          *  */