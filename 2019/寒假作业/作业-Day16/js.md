## js简答题

1. 函数的形参是局部变量吗？谈谈你的理解

是的; 函数的形参只能在函数内部使用，即函数变量也就是局部变量

2. 函数内部可以调用其他函数吗？谈谈你的理解

可以，函数里面可以放函数所以函数内部可以调用其他函数

3. 函数的return是必须要添加的吗？函数如果调用的时候，没有返回值，输出的结果是什么？举例说明

不是必须添加的 没有返回值输出console.log输出的内容

function sum(a) {
   console.log(a);  //输出3
}
sum(3);

4. 函数调用的时候传递了实参，但是没有形参接收，怎么在函数内部获取实参传递的个数

function sum() {
  console.log(arguments.length);//获取实参个数
}
sum(3);

## js编程题

1. 定义一个函数，用户输入任意两个不同数字,返回最后的最大值

```js
function maxz(num,num1){
    num>num1?max=num:max=num1
    return max
}
maxz(35,36)
console.log(maxz(num,num1))
```


2. 定义一个函数 function add(){}，求函数任意参数的和
 - 1) add(1,2,3)
 - 2) add(1,2,3,4,5)

```js
function add(){
    var sum=0
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    return sum
}
console.log(add(1,2,3))
```

3. 写一个函数，判断是否是闰年【能被4整除且不能被100整除，或者能被400整除】

```js
function all(year){
    
if(year%4==0 && year%100!=0 || year%400==0){
    console.log(`${year}是闰年`)
}
return year
}
var year=2000
console.log(all(year))
```

4. 写一个函数,求数组中的最大值,  var arr = [18, 45, 0, 58, 32,59]
```js
function  maxz(){
    var arr = [18, 45, 0, 58, 32,59]
    var max=arr[0]
    for(var i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    console.log(max)
}
maxz()
```