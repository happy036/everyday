//4.下列代码控制台打印出的值分别是多少？
var a = {
    user: '二狗子',
    b: {
        f1: function () {
            //没有给user赋值
            console.log(this.user);  // ?     undefined  this指向的对象是对象b，所以b.user 的值为undefined.
        }
    }
}
a.b.f1();  