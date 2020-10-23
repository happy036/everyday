//6.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
  (function (num) {
        console.log(num); // 100 
        var num = 10;
      console.log(num);  // 10
    }(100))

 // 函数的自调用 且传入实参100 打印100  接着将num从新赋值10 所以打印结果为10
