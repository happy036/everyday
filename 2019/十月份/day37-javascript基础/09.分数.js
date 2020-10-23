// 9. 分数转换,给一个分数，判定等级。大于等于90  A，大于等于80小于90  B，大于等于70小于80  C ，大于等于60小于70 D，小于60 E
var number=88
if (number>=90)
{
    console.log("A")
}
else if (number>=80 && number<90)
{
    console.log("B")
}
else if (number>=70 && number<80)
{
    console.log("C")
}
else if(number>=60 && number<70)
{
    console.log("D")
}
else if(number<60)
{
    console.log("E")
}
