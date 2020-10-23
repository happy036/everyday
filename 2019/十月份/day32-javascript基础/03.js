//3.下列代码控制台打印出的值分别是多少？
var a = {
    user: '二狗子',
    b: {
        user: '大傻子',
        f1: function () {
            console.log(this.user);  // ?   大傻子
        }
    }
}
a.b.f1(); 