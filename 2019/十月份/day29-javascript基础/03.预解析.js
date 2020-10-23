//3. 输出下列代码name3的值分别是多少？并且把预解析的过程写出来
var name3 = "zs";
function f3() {
    var name3 = "ls";
    function f4() {
        name3 = "ww";
    }
    f4();
    console.log(name3);   // ?
}
f3();
console.log(name3); // ?


// 拆分
    /* var name3 = "zs";
    function f3() {
      var name3 = "ls";
      function f4() {
        name3 = "ww";
      }
      f4();
      console.log(name3);   // ?"ww"
    }
    f3();
    console.log(name3); // ?"zs"
    // 由上而下执行 当执行f3()函数调用时 走进函数体f3  声明了变量值为"ls" 接着读函数f4
    // 执行调用的时候 函数体内：name3的值被重新赋值 "ww" 所以函数体内打印 "ww"
    // 函数f3（）调用执行完毕 最后打印全局变量值 "zs" */