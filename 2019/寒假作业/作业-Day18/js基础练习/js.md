## js简答题

1. 若一个变量没有声明直接赋值，它会属于什么变量？根据所学知识说说它会有什么特性

若一个变量没有声明直接赋值，它会属于'全局变量':
全局作用域;

2. 请解释一下什么是作用域链？

'作用域链': 当查找变量的时候，采取的是链式查找的方式决定取哪个值，会从内到外，站在目标出发，一层一层的往外查找，也就是就近原则

3. 同名函数和变量是怎么解析的？

对应同名函数和变量: 变量 = 该函数

4. 函数表达式预解析属于变量的预解析还是函数的预解析？为什么？

函数表达式预解析属于'变量预解析':
因为函数表达式的本质是什么声明一个变量，该变量赋值为一个函数，所以预解析的实质上还是该变量声明提升

## js编程题
1. 输出下列代码a的值分别是多少？
```js
var a = 25;
 function abc() {
   alert(a);   // ?undefined
   var a = 10;
 }
abc();
alert(a)  //?25

```
2.输出下列代码a的值分别是多少？
```js
var a = 25;
 function abc() {
   alert(a);   // ?25
   a = 10;
 }
abc();
alert(a)  //?10 全局变量被覆盖

```
3. 输出下列代码name3的值分别是多少？
```js
var name3 = "zs";
function f3() {
    var name3 = "ls";
    function f4() {
        name3 = "ww";
    }
    f4();
    console.log(name3);   // ? ww
}
f3();
console.log(name3); // ? zs
```

4.下列代码控制台打印出的值分别是多少？
```js
var color = "red";
   function outer() {
       var anotherColor = "blue";
       function inner() {
           var tmpColor = color;
           color = anotherColor;
           anotherColor = tmpColor;
           console.log(anotherColor);     // ? red
       }
       inner();
   }
   outer();
   console.log(color);  // ? blue
```

5. 下列代码控制台打印出的值分别是多少？
```js
function f1() {
  var a = b = c = 9;
  console.log(a);    //? 9
  console.log(b);    // ? 9
  console.log(c);    // ? 9
}
 f1();
 console.log(a);    //? 报错 终止下面的代码执行
 console.log(b);     // ?
 console.log(c);     // ?
```