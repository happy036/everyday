//6. 求 20 到 50 之间的随机整数 [包括20 和 50]

//定义函数 并声明两个形参为最大值和最小值
function getRandom(min, max) {
    //返回 最大值跟最小值之间的整数
    return Math.floor(Math.random() * (50 - min + 1)) + min;
}
//调用函数 并输入最大值50，最小值20
console.log(getRandom(20, 50))