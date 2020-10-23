//1.利用JavaScript的console实现在控制台输出”我是传智学院的一名”

console.log ('我是传智学院的一名学生，我为自己代言')
// 2.利用JavaScript定义变量a，赋值为88，并且在控制台打印输出变量a的值

 var a =88
console.log(a)
//3.利用JavaScript定义6个不同类型的变量，赋值，并且在控制台打印输出变量的类型

var num =100
var boo =true
var str ='abc'
var und 
var efg =null
var object="对象"
console.log(num)
console.log(boo)
console.log(str)
console.log(und)
console.log(efg)
console.log(object)
//4.声明两个变量,第一个变量为num1,值为123,第二个变量为num2,值为456,实现两个变量值的交换,即让num1为456,让num2为123;

//第一种写法
var num1 =123
var num2 =456
var and  =  num1+num2
num1=and-num1,num2=and-num1
console.log(num1,num2)

//第二种写法
var num1 =123
var num2 =456
var num3
num3=num1, num1=num2,num2=num3
console.log(num1,num2)
/*5.输出如下代码的执行结果:
 var myVarVariable = 666
 const myConstVariable = 2;
 console.log(myVarVariable); //?
 console.log(myConstVariable); // ?
 myVarVariable = 888;
 myConstVariable = 5;  
 console.log(myVarVariable); //?
 console.log(myConstVariable); // ？*/

var myVarVariable = 666  
console.log(myVarVariable)
const myConstVariable = 2
console.log(myConstVariable)
console.log(myVarVariable)
console.log(myConstVariable)
//myConstVariable = 5 报错，常量不能被更改
var myVarVariable = 888
console.log(myVarVariable)
console.log(myConstVariable)

/*6.自定义一个对象：对象拥有年龄，学号，姓名，身高，体重，手机号等属性(这个代码敲三遍，创建3个不同的对象，非常重要)
要求：
  1. 通过2种方式定义对象
  2. 通过2种方式给对象添加一个属性 gender,值是"男"
  3. 获取属性姓名和年龄的值
  4. 删除属性体重
*/
//第一种写法
var obj1={
    name:"张三",
    age :10,
    xuehao:10,
    hight:160,
    weight:100,
    tel:123456
}
var obj2={
    name :"李四",
    age :20,
    xuehao:20,
    hight:170,
    weight:110,
    tel:789065
}
var obj3={
    name :'王五',
    age:30,
    xuehao:30,
    hight :170,
    weight:110,
    tel:1234567890
}
//第二种写法
var obj4 = new object({
    name:"张三",
    age :10,
    xuehao:10,
    hight:160,
    weight:100,
    tel:123456
})
var obj5 = new object({
    name :"李四",
    age :20,
    xuehao:20,
    hight:170,
    weight:110,
    tel:789065
})
var obj6 = new object({
    name :'王五',
    age:30,
    xuehao:30,
    hight :170,
    weight:110,
    tel:1234567890
})

var xingBie = obj1.gender = '男'//方法一
var xingBie1 = 'gender'
obj1[xingBie1] = '男'
var ah1 = obj1.name ,ah2 =  obj1.age
delete obj1.weight
console.log(ah1,ah2)



/*7.var name = 'zs';
  var age;
console.log(name);
console.log(age);*/

var name = 'zs'
  var age;
console.log(name)//打印结果zs
console.log(age)//打印结果undefined

//8.将下列字符串按照句号分段显示，不要一行显示
//第一种写法
var huanhang='君不见，黄河之水天上来，奔流到海不复回。\
君不见，高堂明镜悲白发，朝如青丝暮成雪。\
人生得意须尽欢，莫使金樽空对月。\
天生我材必有用，千金散尽还复来。\
烹羊宰牛且为乐，会须一饮三百杯。\
岑夫子，丹丘生，将进酒，杯莫停。\
与君歌一曲，请君为我倾耳听。'
//第二种写法
var huan =`君不见，黄河之水天上来，奔流到海不复回。
君不见，高堂明镜悲白发，朝如青丝暮成雪。
人生得意须尽欢，莫使金樽空对月。
天生我材必有用，千金散尽还复来。
烹羊宰牛且为乐，会须一饮三百杯。
岑夫子，丹丘生，将进酒，杯莫停。
与君歌一曲，请君为我倾耳听。`

/*9.将字符串我是"我是中国人"，我爱我的祖国"种的中国人需要加上引号再控制台打印出来，*/

var zuguo='我是\'中国\'人，我爱我的祖国'
var zhongguo="我是\"中国\"人，我爱我的祖国"
console.log(zuguo)
console.log(zhongguo)



/*10.定义一个数组，里面放都是数字的类型
要求：
1.把下标是3对应的元素获取到
2.把数组第一个元素修改成数字666
3.求出下标是2和4对应的元素的和赋值给下表是1*/

var num =[1,2,3,4,5]
console.log(num[4])
num[1]=666
console.log(num)
num[1]=num[2]+num[4]
console.log(num)



/*11.定义一个数组，里面的元素要把今天所学的数据类型都用到*/


var ber=[1,'zf',false,[1,2,3],{name:'红红'},]



/*12.定义一个数组，数组里面放2个对象，对象的属性有name,age,gender,studentId,属性值自己写
要求：
1.输出第二个对象里面的属性name的值
2.将第一个对象里面的属性gender的值修改成数字18
3.算出2个对象里面属性是age的和*/

var boy=[{
    name :'亮亮',
    age :17,
    gender:'男',
    studentid:20
},{
    name:'明明',
    age :18,
    gebder:'男',
    studentid:22
}]
console.log(boy[1].name)

var hi=boy[0].gender=18
console.log(hi)
var is=boy[0].age  
var it=boy[1].age
var  am=is+it
console.log(am)


/*13.定义一个数组，数组里面有一个对象，对象里面有属性price,num,name,colors,colors的值是一个数组，获取colors数组下标是1的值*/

var are=[{
    price:10,
    num:1,
    name:'李明',
    colors:['blue','red']
}]
var me=are[0].colors[1]
console.log(me)