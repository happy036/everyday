## js简答题
1. 怎么定义一个二维数组？

数组中的元素为数组(数组中包含数组)

2. 数组的方法有哪些？请列举10个，并说明方法的作用

push() 添加元素到数组末尾
pop() 删除数组末尾元素
shift() 删除数组最前面的元素
unshift() 添加元素到数组的头部
indexOf() 查看某个元素在数组中的位置,如果存在，就返回该元素的当前下标，如果不存在，就返回-1
splice是数组中最强大的功能之一，增，删，改
slice 拷贝原数组
concat() 方法用于合并两个或多个数组
join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，括号内是连接符
sort()  数组的元素进行排序，并返回数组

3. 怎么获取二维数组里面的某一个元素，自己定义数组

var arr = [1,2,3,[4,5,6]]
console.log(arr[3][1])

4. 数组的长度和数组的下标(索引)的对应关系

数组的长度=数组的下标+1


## js编程题

1. 定义数组 var arr = [1,2,666,3,4],
 
 - 1） 给数组最后添加1个元素
 - 2）给数组最前面添加1个元素
 - 3）将元素666删除之后，添加一个元素"拉拉"
```js
    var arr = [1, 2, 666, 3, 4];
    arr.push(5);
    arr.unshift(0);
    arr.splice(3, 1, '拉拉');
    console.log(arr);
```
2. 定义数组var arr = [2,4,77,100,1]
 - 1）在控制台输出数组的最大值
 - 2）在控制台输出数组的最小值
 ```js
var arr = [2, 4, 77, 100, 1]
var min = arr[0]
for (var i = 0; i < arr.length - 1; i++) {
    if (min > arr[i]) {
        min = arr[i]
    }
}
console.log(min)
var max = arr[0]
for (var i = 0; i < arr.length - 1; i++) {
    if (max < arr[i]) {
        max = arr[i]
    }
}
console.log(max)
 ```
3. 定义数组var arr = [1,2,3,4,5,6,1,2,3,1,2],将数组重复的元素去重,(请使用2种方式实现)
```js
var arr = [1,2,3,4,5,6,1,2,3,1,2]
var array = []
for (var i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
        array.push(arr[i]);
    }
}
console.log(array)

var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1, 2]
var arr = new Set(arr)
console.log(Array.from(arr))
```

4. 现有二维数组，var  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];                                       
   - 1). 遍历打印二维数组的所有元素
   - 2). 计算二维数组中所有元素的和
   - 3). 求二维数组中所有元素的最大值。

  ```js
   var array = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]];
  //    1. 遍历打印二维数组的所有元素
  for (var i = 0; i <= array.length - 1; i++) {
      for (var j = 0; j <= array.length - 1; j++) {
          console.log(array[i][j])
      }
  }
  //    2. 计算二维数组中所有元素的和
  var num = 0;
  for (var i = 0; i <= array.length - 1; i++) {
      for (var j = 0; j <= array.length - 1; j++) {
          num += array[i][j];
      }
  }
  console.log(num);
  //    3. 求二维数组中所有元素的最大值。
  for (var i = 0; i < array.length; i++) {
      var max = array[0][0];
      for (var j = 0; j < array[i].length; j++) {
          if (array[i][j] > max) {
              max = array[i][j];
          }
      }
  }
  console.log(max);
  
  ```