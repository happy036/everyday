## js解答题

1. 系统构造函数创建对象的格式

var 变量名=new Object()
    对象名.键=值;
    对象名.键=值;

2. 工厂函数创建对象的格式

var 函数名=function(形参,形参){
    var 变量名=new Object()
        对象名.键=形参;
        对象名.键=形参;
        return 变量名
}
var 变量名=函数名(实参,实参)

3. 自定义构造函数创建对象的格式

var 函数名=function(形参,形参){
    this.键=形参;
}
var 变量名=new 函数名 (实参,实参)

4. 构造函数创建对象有什么好处？

通过封装后的构造函数创建对象，可以方便快捷大量的创建我们需要的对象。

## js编程题

1. 定义一个人的对象, 属性有姓名，年龄，性别，身高，方法有：能吃饭，能跑步，
 - 要求分别使用 `4` 种方式创建下面要求的对象
 - 遍历对象，将对象的属性和值输出来，并且调用其中的一个方法，将结果在控制台输出
 - 将对象得 `年龄` 这个属性删除
 - 将对象的 `身高` 的值题换成"180cm"
 - 给对象添加属性 `学号` ，通过两种方式

 ```js
 // 【一】1.字面量创建对象
var idol = {
  name: '张杰',
  sex: '水',
  age: 3,
  height: '未知',
  hobby: function () {
      console.log('吃饭,跑步');
  }
}
// 2.
for (var key in idol) {
  console.log(key);
  console.log(idol[key]);
}
idol.hobby();
// 3.
delete idol.age;
// 4.
idol.height = '180cm';
// 5.
idol.id = 6; // 方式一
idol['id'] = 6 // 方式二
// 打印对象
console.log(idol);


// 【二】1.系统构造函数创建对象
var idol = new Object();
idol.name = '张杰';
idol.sex = '水';
idol.age = 3;
idol.height = '未知';
idol.hobby = function () {
  console.log('吃饭,跑步');
};
// 2.
for (var key in idol) {
  console.log(key);
  console.log(idol[key]);
}
idol.hobby();
// 3.
delete idol.age;
// 4.
idol.height = '180cm';
// 5.
idol.id = 6; // 方式一
idol['id'] = 6 // 方式二
// 打印对象
console.log(idol);


// 【三】1.工厂函数创建对象
var person = function (name, sex, age, height, hobby) {
  var object = new Object();
  object.name = name;
  object.sex = sex;
  object.age = age;
  object.height = height;
  object.hobby = hobby;
  return object;
}
var idol = person('张杰', '水', 3, '未知', function () {
  console.log('吃饭,跑步');
})
// 2.
for (var key in idol) {
  console.log(key);
  console.log(idol[key]);
}
idol.hobby();
// 3.
delete idol.age;
// 4.
idol.height = '180cm';
// 5.
idol.id = 6; // 方式一
idol['id'] = 6 // 方式二
// 打印对象
console.log(idol);


// 【四】1.自定义构造函数创建对象
var Person = function (name, sex, age, height, hobby) {
  this.name = name;
  this.sex = sex;
  this.age = age;
  this.height = height;
  this.hobby = hobby;
}
var idol = new Person('张杰', '水', 3, '未知', function () {
  console.log('吃饭,跑步');
});
// 2.
for (var key in idol) {
  console.log(key);
  console.log(idol[key]);
}
idol.hobby();
// 3.
delete idol.age;
// 4.
idol.height = '180cm';
// 5.
idol.id = 6; // 方式一
idol['id'] = 6 // 方式二
// 打印对象
console.log(idol);
 ````

 2. 编写一个程序，让用户输入一个5位数，判断该 五位数是否为 `回文数`。（判断第一位和第五位是否一样，第二位和第四位是否一样）如果用户输入的不是5位数提示错误并继续输入直到用户输入一个5位数

    ```html
    var a = 54321;
    var g1 = a % 10;
    var g2 = parseInt(a % 100 / 10);
    var g3 = parseInt(a % 1000 / 100);
    var g4 = parseInt(a % 10000 / 1000);
    var g5 = parseInt(a / 10000);
    if (g1 == g5 && g2 == g4) {
        console.log(a + "是回文数");
    } else {
        console.log(a + '不是回文数');
    }
    ```

3. 求10! 的结果（提示：10! = 1x2x3x4x5x6x7x8x9x10）

    ```js
    var num = 1;
    for (var i = 1; i <= 10; i++) {
        num *= i;
    }
    console.log(num);
    ```

4. 操作数组 var arr = [2,3,4,5,6] 

    ```js
    1) 将1放到数组中2的前面
    2) 删除数组中的6
    3) 将数组的所有剩余元素求和
    4) 在 3) 的基础上通过length求出数组元素和的平均值
    5) 用方法判断数组中是否有6这个元素，有返回索引，无则返回false
    var arr = [2, 3, 4, 5, 6]
    // 1) 将1放到数组中2的前面
    arr.unshift(1);
    console.log(arr);

    // 2) 删除数组中的6
    arr.pop();
    console.log(arr);

    // 3) 将数组的所有剩余元素求和
    var sum = 0
    for (var key in arr) {
        sum += arr[key];
    }
    console.log(sum);

    // 4) 在 3) 的基础上通过length求出数组元素和的平均值
    var average = sum / (arr.length);
    console.log(average);

    // 5) 用方法判断数组中是否有6这个元素，有返回索引，无则返回false
    if (arr.indexOf(6) != -1) {
        console.log(arr.indexOf(6));
    } else {
        console.log(false);
    }
    ```