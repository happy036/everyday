//利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成)
/*1
var str=""
for (i=1;i<=4;i++)
{
    str+=" "
}
for (i=0;i<1;i++)
{
    str+=" *"
}
console.log(str)

2.
var str=""
for (i=1;i<=3;i++)
{
    str+=" "
}
for (i=1;i<=2;i++)
{
    str+=" *"
}
console.log(str)

3.
var str=""
for (i=1;i<=2;i++)
{
    str+=" "
}
for (i=1;i<=3;i++)
{
    str+=" *"
}
console.log(str)

4.
var str=""
for (i=1;i<=1;i++)
{
    str+=" "
}
for (i=1;i<=4;i++)
{
    str+=" *"
}
console.log(str)

5.
var str=""
for (i=0;i<0;i++)
{
    str+=" "
}
for (i=1;i<=5;i++)
{
    str+=" *"
}
console.log(str)*/


for (var a=1;a<=5;a++)
{
    var str=""
    //b: 4 3 2 1 0
    for (var b=1;b<=5-a;b++)
    {
        str+=" "
    }
    //c: 1 2 3 4 5
    for (var c=1;c<=a;c++)
    {
        str+=" *"
    }
    console.log(str)
}