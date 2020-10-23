### 查看数据类型

var n1  ='name'

console.log(typeof  n1)



# 数据类型转换

#### <1>转数字

1. Number     Number(变量)

   var  n1 ='name'

   console.log(Number  (n1))

   2.+  

   用法：+（变量） 转数字

   3. parseInt  转成整数

      用法：parseInt（变量）

      （必须是数字或以数字开头才能转数字）

      4. parseFloat  转成小数

         用法：parseFloat（变量）

         

         

#### <2>转字符串

String    用法：String（变量）

to String （进制）（undefined和null不能用）

用法：变量.to String()

1, var n1 =911

var n2 =String(n1)(转成字符串并保存到n2变量中)

2，console .log(ture.to String())

数字转二，八，十六进制

var num32=911

console.log (num32.to String(2))转二进制

#### <3>转布尔值

console.log(Boolean())

只有0是false其他都是true

只有空字符是false 非空字符串是true

数组全是真

0和空字符串，NaN , null,undefined 全是false

console.log(!!   (  )      )

# 运算符

#### <1>算术运算符

前加加和后加加的区别

前++：先把变量加1，然后再使用这个变量

后++：先使用变量，然后再把这个变量+1

#### <2>赋值运算符

=:将一个数赋给一个变量

var  a =100

  +=:加后赋值 

var a=100
a+=20  // 相当于a=a+20



