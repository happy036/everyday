//5.下列代码控制台打印出的值分别是多少？
function f1() {
    //这个this在函数里生成了对象
    this.user = "二狗子";
}
var a = new f1();
console.log(a.user);  // ?     二狗子