//1.在控制台打印输出目前所学的所有数据类型的类型

var n1=12
console.log(typeof n1)
var n2=true
console.log(typeof n2)
var n3='黑黑'
console.log(typeof n3)
var n4
console.log(typeof n4)
var n5=null
console.log(typeof n5)
var n6={name:'白白'}
console.log(typeof n6)


/*2.数据类型的相互转换:
 Number(true)  // 
 Number(false) // 
 Number(" ") // 
 Number( [] ) //
 Number(['1','2']) // 
 Number([1]) // ?
 Number({})   //?
 Number({a:1}) // ?
 Number("3.14") //?
 Number(null) // ?
 Number(undefined) //?
 Number("12456aaaa") //?
 String({}) // ?
 String([]) // ?
 String(123) //?
 String(false) //?
 String(null) //?
 String(undefined) //?
 undefined.toString() //?
 null.toString()  //?
 Boolean(0) // ?
 Boolean("") //?
 Boolean(undefined) //?
 Boolean(null) //?
 Boolean(NaN) //?
 Boolean({}) // ?*/

 
 Number(true)  // 1
 Number(false) // 0
 Number(" ") // 0
 Number( [] ) //0
 Number(['1','2'])// NaN
 Number([1]) // 1
 Number({})   // NaN
 Number({a:1}) // NaN
 Number("3.14") // 3.14
 Number(null) // 0
 Number(undefined) // NaN
 Number("12456aaaa")// NaN
 String({}) // [object Object]
 String([]) // 空
 String(123) // 123
 String(false) //false
 String(null) //null
 String(undefined) // undefined
 //undefined.toString() //  不能用
 //null.toString() //  不能用
 Boolean(0) // false
 Boolean("") // false
 Boolean(undefined) // false
 Boolean(null) // false
 Boolean(NaN) // false
 Boolean({}) // true

 /*3. 将下列结果打印出来下面的题的结果
var num1 = 123;
var num2 ="123"
console.log(num1+num2)  // ?
console.log(num1 + +num2)  // ?
console.log(num1 + !! num2)  // ?
console.log(num1+Number(num2))  // ?*/

var num1 = 123;
var num2 ="123"
console.log(num1+num2)  // 123123
//  有一个字符串所以“+”是连接运算
console.log(num1 + +num2)  // 246
//字符串转数字+num2转为123,"+"是数学运算  123+123=246
console.log(num1 + !! num2)  // 124
//字符串转布尔值,布尔值转数字为1.  所以123+1=124
console.log(num1+Number(num2))  // 246
//字符串转数字为123  123+123=246

/*4. 求值
var a = 1; var b = ++a + ++a;   console.log(b);  //  ？
var a = 1; var b = a++ + ++a;   console.log(b);  // ？
var a = 1; var b = a++ + a++;   console.log(b);  // ？
var a = 1; var b = ++a + a++;   console.log(b);  // ？*/

var a = 1; var b = ++a + ++a;   console.log(b);  //  5
//前++是先把变量加1 所以++a=2   a=2 ++a=2+1=3  2+3=5
var a = 1; var b = a++ + ++a;   console.log(b);  // 4
//前++是先把变量加1,后++是先使用后加1. a++=1  ++a=3   1+3=4
var a = 1; var b = a++ + a++;   console.log(b);  // 3
//  后++是先使用后加1.  a++=1 a++=1+1=2  1+2=3
var a = 1; var b = ++a + a++;   console.log(b); // 4
//前++是先把变量加1,后++是先使用后加1. ++a=2 a++=2  2+2=4



/*5.输出下面的结果:
console.log ( NaN == NaN );//？
console.log( NaN === NaN ); //？
console.log ( undefined == null );//？
console.log ( undefined === null );//？
console.log ( 1 + "true" ); // ？
console.log ( 1 + true );  //？
console.log ( "abc" > "b" ); //？
console.log ( "abc" > "aad" ); //？
console.log ( [] == [] ); //？
console.log ( [] === [] ); //？
console.log ( [] == ! [] ); // ？
console.log ( [] == 0 );//？
console.log ( ! [] == 0 );//？
*/

console.log ( NaN == NaN );//false
//NaN不与任何值相等，包括它自己
console.log( NaN === NaN ); // false
//NaN 不与任何值相等，包括它自己
console.log ( undefined == null );// true
//特殊规定就是true
console.log ( undefined === null );//true
//特殊规定就是true
console.log ( 1 + "true" ); // 1true
//有一个字符串时“+”是连接运算
console.log ( 1 + true );  // 2
//布尔值转成数字true=1 1+1=2
console.log ( "abc" > "b" ); // false
// 因为js的字符串按字符在unicode中的码位来比较大小   a的码位是97  而b的码位是98   所以a不大于b  所以结果为false
console.log ( "abc" > "aad" ); // true
//因为js的字符串按字符在unicode中的码位来比较大小   a的码位是97  所以第一个相等   在比较第二位  而b的码位是98 
console.log ( [] == [] ); // false 
// 因为复杂数据类型是存放在堆中  在栈中只存放地址  而每个数组的地址不同  所以结果为flase
console.log ( [] === [] ); //false         
// 因为复杂数据类型是存放在堆中  在栈中只存放地址  而每个数组的地址不同  所以结果为flase
console.log ( [] == ! [] ); // trun
// [] == ! []   ->   [] == false  ->  [] == 0  ->   '' == 0   ->  0 == 0   ->  true
console.log ( [] == 0 );//trun 
//[] == 0  ->   '' == 0   ->  0 == 0   ->  true
console.log ( ! [] == 0 );//trun 
// 0 ==[]  -> 0=='' -> 0==0 ->trun


/*6.输出下面的结果:
var a = (10 * 3 - 4 / 2 + 1) % 2,
　  b = 3;
b %= a + 3;
console.log(a++); // ？
console.log(--b); // ？*/

var a = (10 * 3 - 4 / 2 + 1) % 2,//a=1
　  b = 3;
b %= a + 3;   //b=b%a+3
console.log(a++); //  1
//后++是先使用后加1. a++=1
console.log(--b); // 2


/*7.输出下面的结果:
 console.log(3+2||0&&true)  
 console.log(undefined&&5) 
 console.log(1&&2&&3) 
 console.log(1&&0&&3) 
 console.log(2+3>1&&4|| 4&&5%6) 
 console.log(5+10/2&&4>3||7-4)  */

 console.log(3+2||0&&true)  // true   5
 console.log(undefined&&5) // flase     undefined
 console.log(1&&2&&3) //true        3
 console.log(1&&0&&3) //flase       0
 console.log(2+3>1&&4|| 4&&5%6) // true         4
 console.log(5+10/2&&4>3||7-4)  //true



 /*8. 输出下面的结果:
var num1 = 20;
var num2 = 30
console.log(num1%num2);  // ?
num1+= num2
console.log(num1);  // ?
num1 = num1- num2;  // 将这段代码改写
console.log(num1);*/

var num1 = 20;
var num2 = 30
console.log(num1%num2);  // 20
num1+= num2
console.log(num1);  // 50
//
num1 = num1- num2;  // 将这段代码改写 num1-=num2
console.log(num1);  //20





/*9.世界上表示气温有两种方法：摄氏度和华氏度。两者的关系是：华氏度=(9/5)*摄氏度+32
   利用JavaScript编写程序，要求：当输入不同摄氏度，提示出对应的华氏温度*/
var wendu=30
var huadu=(9/5)*wendu+32
console.log(huadu)


/*10.在定义变量名字, 年龄,地址，打印出:我是XXX,今年XX岁了，我来自XXX。*/
var name ='黎明'
var age =36
var addres='河北省'

var all=`我是${name},今年${age}了，我来自${addres}.`



var name1 ="张杰"
var age1 =20
var addres1="湖南"

console.log('我是'+name1+',今年'+age1+'岁了,我来自'+addres1+'.')





