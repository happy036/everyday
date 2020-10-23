## js简答题

1. arguments对象和数组的相同点和不同点有哪些？

 arguments属于一种为对象，它无法使用数组的方法 除去方法之外，其余的功能都一样

2. rest参数作为函数的形参只能是最后一个参数，谈谈你的理解

因为rest参数搭配的变量是一个数组 该变量会将多余的参数放入数组中 所以rest参数只能是最后一个

3. 什么是函数表达式？

函数表达式将函数定义为表达式语句的一部分 通过函数表达式定义的函数可以是命名的 也可以是匿名的

4. 谈谈你对自调用函数的理解，格式是什么？

自调用函数为函数定义完后会立即运行的函数 格式: (function 函数名(){})()

## js编程题
1. 写一个函数，求出`3`在数组 var arr = {3,4,3,5,7,9};中出现的次数
 ```js
function getThree(arr){
    var count=0
    for(var i=0;i<arr.length;i++){        
        if(arr[i]==3){
            count++
        }
    }
    return count
}
var arr = [3,4,3,5,7,9]
console.log(getThree(arr))
 ```  


2. 写一个函数，判断一个数是否是素数，并返回结果true 或 false(又叫质数，只能被1和自身整数的数)
```js
function fn(num) {
    for (var i = 2; i <= num; i++) {
        if (num % i == 0) {
            return false
        }
        else {
            return true
        }
    }
}
var result = fn(12);
console.log(result);
```


3. 写一个函数，求任意一个数的阶乘
```js
function jc(num){
    var sum=1
for(var i=1;i<=num;i++){
    sum*=i
}
return sum
}
console.log(jc(3))

```


4. 写一个函数，该函数用于计算一个正数的因子和（比如6的因子和是1+2+3+6=12）
```js
function all(num){
    var sum=0
    for(var i=1;i<=num;i++){
        if(num%i==0){
            sum+=i
        }
    }
    return sum
}
var num=6
console.log(all(num))

```