//8.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
var n = 0;
function a(){
    var n = 10;
    function b(){
        n++;
        console.log(n);
    }
    b();
    return b;
}
var c = a();   //?
c(); //?
console.log(n); // ?

// 拆分
    /* var n = 0;
    function a() {
      var n = 10;
      function b() {
        n++;
        console.log((n));
      }
      b();
      return b;// 执行完返回结果11
    }
    var c = a();   //? 11
    c(); //? 12 
    console.log((n)); // ? 0
    // 代码由上而下执行 当执行var c = a();时 函数a执行代码 因为n=10 所以执行完返回值b为11并将
    // // b=11 ,n++的结果为11赋给c变量且c等于
    // function a() {
    //   var n = 10;
    //   function b() {
    //     n++;
    //     console.log((n));
    //   }
    //   b();
    //   return b;
    // }  该函数
    // 接着c（）调用执行 再执行一遍 但n的值为11 所以n++后返回b的值为12
    // 最后执行代码打印全局变量n=0 */