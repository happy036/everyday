//7.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
function a(b) {
      console.log(b);  //?
      var s = b();
      console.log(s)  // ?
    }
 a(c);
function c() { return 123 }

// 拆分
    /* function a(b) {
      console.log(b);  //?f c() { return 123 }
      var s = b();
      console.log(s)  // ?123
    }
    a(function c() { return 123 });
    function c() { return 123 }// 声明一个函数
    // 代码由上而下执行 a(c)执行该函数的调用 将实参：function c() { return 123 }传给形参
    // 相当于：var b =  function c() { return 123 } 走进函数体 打印结果为 函数 function c() { return 123 }
    // 接着调用函数b 并将123返回值赋值给变量s 打印s结果为123
    // a（c）调用执行完毕 接走读取函数function c() { return 123 } */