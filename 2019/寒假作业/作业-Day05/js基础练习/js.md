## js解答题
1. 如何判断一个变量是否是数字（需要通过输出true或false进行判断），输出的true或false分别代表着什么含义？

isNaN  输出false为数字，输出true非数字

2. 100+100结果是200，那么100+‘100’结果是什么，为什么？

结果：100100
原因：当 + 号的两边，只要有一边是string类型的时候，此时 + 号代表字符串的连接符

3. 请说说 `+` 号有几层含义，分别是什么？

第一层意义，当 + 号的两边都是number类型的时候，此时 + 号 代表数学符号加法
第二层意义，当 + 号的两边，只要有一边是string类型的时候，此时 + 号代表字符串的连接符
第三层意义，+可以进行数据类型的隐式转换，给一个string类型的数据前面加上+号，就会把这个字符串变成数字

4. 前--和后--的区别是什么？

前--遇到赋值运算符的时候，会先自增，在赋值，后--遇到赋值运算符的时候，先赋值，在自增

## js编程题

1. 如何能够判断一个数字是小数还是整数？

   ```js
    //声明变量定义数字
    var num=3.14
    //判断数字是小数还是整数
    if(num%1==0){
    console.log(`${num}是整数`)
    }else{
    console.log(`${num}是小数`)
    }
   ```

2. 探究题：详见下面代码

   ```js
    isNaN('') // false
    isNaN('1A') // true
    isNaN(true) // false
    isNaN({}) // true
    isNaN([1,1]) // true
    // 探究：根据isNaN的作用你是否能说明出现上面现象的原因
    isNaN有隐式转换的作用，是数字就输出false,不是数字就输出true
   ```

3. 打印下面的输出结果

   ```js
    var num1 = 12, num2 = '12', num3 = '', num4;
    console.log(num1 + num2); // 1212
    console.log(num1 + +num3); // 12
    console.log(num1 + +num4); // NaN
    console.log(+num2 + !!num3); // 12
    console.log(!!num2 + !!num4); // 1
   ```

4. 打印下面的输出结果

   ```js
    1) var a = 10,
         b = ++a,
         c = a--,
         d = c++ + ++b + --a;
     console.log(a, b, c, d); // 9 12 12 32 
    
    2) var a = 100,
         b = --a,
         c = a-- + b++,
         d = a - b-- + ++c;
     console.log(a, b, c, d); // 98 99 199 197
   ```
