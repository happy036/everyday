//1.下列代码控制台打印出的值分别是多少？
function f1() {
    var user = '二狗子';
    console.log(this.user);  // ？   undefined  单纯的函数中，this指向的是window对象
    console.log(this);   // ？   window
}

f1(); 