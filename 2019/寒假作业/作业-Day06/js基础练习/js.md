## js解答题

1. 算数运算符都有哪些？
+(加),-(减),*(乘),/(除),%(求模，取余),++(自增1),--(自减1)
2. NaN和任何值比较的结果都是什么？包括和自身比较吗？
NaN和任何值比较的结果都是: NaN
包括和自身比较也是: NaN
3. == 和 === 的区别在哪？
==只比较值，如果等号两边的数据类型不一致，会进行隐式的转换，然后在进行比较，===既比较值也比较数据类型
4. 逻辑运算符有哪些, 逻辑运算的规则有哪些
‘&&’ 如果两个值都是true结果是true，否则是false
‘||’ 如果两个值中有一个是true，那么结果就是true。否则是false
!(取反)
## js编程题

1. `typeof` 无法显示出的数据类型名称有什么？为什么？
   ```js
    数组，因为数组属于对象
    null是一个只有一个值的特殊类型。表示一个空对象引用。用typeof检测返回是object
   ```
    
    
2. 判断下面结果的布尔值

   ```js
    333 == '333' //true
    666 == [666] //true
    '999' == [999] //true
    NaN == NaN //false
    NaN === NaN //false
    undefined == null //true
    undefined === null //false
    [] == [] //false
    [] === [] //false
    [] == 0 //true
    ![] == 0 //true
    [] == ![] //true
   ```

3. 打印输出下面的结果

   ```js
    1) true && !true //false
    2) false || !false //true
    3) false || !true && !false //false
    4) true && !false || false //true
    5) undefined && true //undefined
    6) 2+2 > 5 || 3-3 <=0 && !undefined //true
   ```

4. 打印输出下面的结果

   ```js
    var a = 10;
    var b = a++;
    console.log(b>=a); //false
    var c = b + 'a'; 
    console.log(c); //10a
    console.log(c == ('a' + b))  //false
   ```