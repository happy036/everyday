### 流程控制：（代码执行的顺序）

顺序：自上向下一行一行的执行（默认）

分支：只执行满足条件的代码，（有多段代码，但是只有一段代码被执行）

双向分支：有两段代码

##### 双向分支

语法：var gender = '女'
console.log('请进：')
/if else如果条件为true就执行第一个代码块，否则执行第二个/
if(gendwr == '男')
{
console.log('向左走')
}
else
{
console.log('向右走')
}
计算某年份是否为闰年
var year = 1999 
if(year % 400 == 0){
console.log('是闰年')
}
if(year % 4 == 0 && year % 100 != 0){
console.log('是闰年')
}
if( year % 400 == 0 || yeae % 4 == 0 && year % 100 ！=0){
console.log('是闰年')}

#### 分支

语法：

 (1.)if分支
语法：如果表达式的结果为true,那么就执行大括号中的代码块。
格式：
if(表达式){
代码块
} 
var a = 100 
console.log('hello')
if(a === '100'){
console.log('world') //条件不满足，所以不执行
}
if(a == '100'){ //'='赋值 '=='(不全等)： 如果数据类型不同，那么先专成相同类型
console.log('中国')
}
if(a == '100'){
console.log('你好')
}

#### 总结

<1.&&代表并且的含义
<2.||代表的是或者
<3.当多个条件房子一起时考虑优先级
多向分支
有多段代码，每个代码都有一个条件，满足那个条件就执行某段代码。如果多段代码都能满足，只执行第一个满足条件

#### 循环

语法：
for( 定义初始值 ； 循环条件 ； 自增 )
{
重复执行代码块
}
例一：循环输出50个hello word
for( var i=0 ；i<50 ;i++ )
{
console.log('hello word~')
}
执行顺序i=0 (赋值)
判断i是否小于50
执行conlose.log()
返回i++
例二：计算1~100之间所有整数和
var sum = 0
for( var i=1 ; i<=100 ; i++)
{
sum = sum+1
}
console.log(sum)juj j'j
vscode断点调试功能
添加红色标点
调试 启动调试









