//1. 定义一个数组，保存六种数据类型的名称？
var all=['num','boolean','string','undefined','null','object']

//2. 定义一个对象，保存你自己的名字、年龄、爱好？

var num2={
    name:'曹喜娟',
    age:19,
    hobby:'book'
}
console.log(num2)

//3. 有一个数组：var arr = [12,43,54,43]，写代码计算数组中第1个元素和第3个元素的和？

var arr=[12,43,54,43]
var and=arr[0]+arr[2]
console.log(and)

//4. 定义一个二维数组（随便放些数据进去）？
var and2=[1,2,3,4,5,[6,7,8],9]
console.log(and2)

//5. 有两个变量 a 和 b ，请写代码交换这两个变量的值？
var a=1  
var b=2
var c
c=a   
a=b
b=c
console.log(a,b)


//6. 有一个对象： var obj = {name:'tom',age:10,books:['水浒','西游']} ，写代码打印出 name 属性和 books 中第2个元素？

var obj = {name:'tom',age:10,books:['水浒','西游']}
console.log(obj.name)
console.log(obj.books[1])

//7. 定义两个变量保存两个数字，然后再定义一个变量保存前两个变量的和？

var num3=1
var num4=2
var num5=num3+num4
console.log(num5)

//8. 定义一个包含多行和另一个变量值的字符串？

var num7=8
var num6=`fnvfdjkjdhreihjvfdljvsdmnnld${num7}`

//9. 定义一个数组，数组中保存两个对象，然后打印数组中第二个对象的随便一个属性？

var num8=[{name:'黑黑'},{name:'白白'}]
console.log(num8[1].name)

//10. 有一个数组：var arr = [13,54,65,23,54]，写代码计算数组中第2个元素和第4个元素的和，并把和保存到第3个元素上

var arr = [13,54,65,23,54]
var and1=arr[1]+arr[3]
    arr[2]=and1
console.log(arr[2]=and1)


/*11.说出下面代码的运行结果,并且解释原因:
    var name = '张三';
    var age ;
    const gender ="女";
    name = "李四"；
    console.log(name);
    console.log(age);
    gender = "男";
    console.log(gender);*/

    //11.说出下面代码的运行结果,并且解释原因:
    var name = '张三'
    var age 
    const gender ="女"
    name = "李四"
    console.log(name)//李四
    console.log(age)//undefined
    //gender = "男" 常量不能变
    console.log(gender)//女

    //12.下列变量名哪个不正确
  var sname 
    //var 1age 变量名不能以数字开头
     var Name


/*二、解答题
1、数据类型有几种？
2、什么是对象？如何创建对象？
3、如何读取和修改和删除对象中的值？
4、什么时候会出现 undefined？
5、什么是数组？如何创建数组？
6、如何获取和修改数组中的某一个值？
7、js变量命名有什么规范？
8、如何定义多行字符串？有几种方法？
9、Boolean 类型有几个值？分别代表什么？
10、字符串中能解析变量吗？怎么解析？*/


//1.六种

//2.对象就是由多个键值对被组合到一起形成的一种类型.
/*方法一:使用{...}
Var obj ={name:'蓝蓝'}

方法二:使用 new object({...})
Var obj = new object({ name:'红红'})*/

//3.console.log(num.name)   delete  num.age

//4.声明变量未赋值

//5.数组是把同一类的数据放在一起组成一组
//var are =[1,2,3.....]  var are=new Array[1,2,3.....]

//6.获取  console.log(are[0])   修改 are[0]='值'

//7.只能包含数字，字母，下划线。不能以数字开头。

//8.用"`"和“\”
//var or=`jsdcdjewojo`
//var or='ijjjkllfddiddj\djjdkldlll'

//9. 两个  true真的  false 假的

//10.`${}`















