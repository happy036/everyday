//4.下列代码控制台打印出的值分别是多少？并且把预解析的过程写出来
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


// 代码由上而下执行  当outer()执行该函数调用时走进函数outer
    // 声明了一个变量值为"blue" 读取函数inner 执行inner()调用时走进inner()函数
    //        red      找到全局变量red
    //  var tmpColor = color;
    //   blue              找到全局变量blue
    //  color = anotherColor;
    //       red             red
    //  anotherColor = tmpColor;
    // 所以打印 red 函数 outer();执行完毕
    // 打印color值为 blue


