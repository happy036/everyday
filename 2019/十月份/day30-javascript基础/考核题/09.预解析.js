//9.下列代码控制台打印出的值是多少？把执行过程写出来
function a(){
     console.log('a');
     c();
 }
 function b(){
     console.log('b');
     a();
 }
 function c(){
     console.log('c');
 }
 a(); // a c
 b();  // b a c
 c();   // c