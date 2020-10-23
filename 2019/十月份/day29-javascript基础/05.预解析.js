//5. 下列代码控制台打印出的值分别是多少？并且把预解析的过程写出来
var a = 25;
function f1() {
  var a = b = c = 9;
  console.log(a);    //? 9
  console.log(b);    // ?  9
  console.log(c);    // ? 9
}
 f1();
 console.log(a);    //?    25
console.log(b);     // ?   9
 console.log(c);     // ？9

 /*   var a = 25;
      function f1() {
        // var a = b = c = 9;
        var a = 9;
        b = 9;// 全局变量
        c = 9;// 全局变量
        console.log(a);    //? 9
        console.log(b);    // ? 9
        console.log(c);    // ? 9
      }
      f1();
      console.log(a);    //? 25
      console.log(b);     // ? 9
      console.log(c);     // ？ 9

        // 代码由上而下执行  当执行f1时走进函数f1
        // 声明了局部变量 a b c 且都赋值为9 所以函数体内打印的结过都是 9
        // f1（）调用执行完毕 console.log(a);找到全局变量 打印25  其他打印为9 */