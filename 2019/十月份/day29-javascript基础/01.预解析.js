//1. 输出下列代码a的值分别是多少？并且把预解析的过程写出来
var a = 25;
 function abc() {
   console.log(a);   // ?
   var a = 10;
 }
abc();
console.log(a)  //?


/* // 拆分
    var a = 25;
    function abc() {
      var a;
      console.log((a));;   // ?undefined
      a = 10;
    }
    abc();
    console.log((a));  //?25
    // 代码由上往下执行 当abc（）时运行function函数 打印undefined 函数执行完毕后 继续执行打印全局变量a=25 */