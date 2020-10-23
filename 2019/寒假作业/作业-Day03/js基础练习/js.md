## js解答题

1. 如何通过字面量方式创建对象，对象都是有什么组成的？
var obj={}
键值对
2. 如何使用new关键字创建对象?
```js
var man=new Object()
    man.name="zhangsan";
    man.age=18;
```

3. 说明对象的基本操作（读取，修改，添加，删除）
1.读取 对象名.属性名

2.修改 对象名.属性名=新的属性值

3.添加 对象名.新属性名=新属性值

4.删除 delete对象名.属性值

4. 创建对象有几种方式，分别是什么？写语法
```js
1. 字面量创建方式
var 变量名={
    对象名=属性值;
}
2.系统构造函数创建对象
var 变量名=new Object()
    对象名.键=值;
    对象名.键=值;
3.工厂函数创建对象
var 函数名=function(形参,形参){
    var 变量名=new Object()
        对象名.键=形参;
        对象名.键=形参;
        return 变量名
}
var 变量名=函数名(实参,实参)
4.自定义构造函数创建对象
var 函数名=function(形参,形参){
    this.键=形参;
}
var 变量名=new 函数名 (实参,实参)
```


## js编程题

1. 字面量创建一个对象：【姓名:可乐 年龄:18 性别:你猜 爱好:Rush B】

   ```js
   var obj={
       name="可乐";
       age=18;
       sex="你猜";
       hobby="Rush B";
   }
   ```

2. 使用new关键字创建一个对象：【姓名:雪碧 年龄:19 性别:未知 爱好:Rush A】

    ```js
    var man=new Object()
    man.name="可乐";
    man.age=18;
    man.sex="未知";
    man.hobby="Rush A";
    ```

3. 根据步骤操作对象

    ```js
    1) 定义一个对象：【姓名:柠檬 年龄:17】
    2) 输出该对象的姓名
    3) 修改该对象年龄为：未成年
    4) 添加对象属性：性别为女，爱好为画画，职业为学生
    5) 输出该对象
    6) 删除该对象的姓名
    7) 输出该对象
    var obj={
        name="柠檬";
        age=17;
    }
    console.log(obj.name);
    obj.age="未成年";
    obj.sex="女";
    obj.hobby="画画";
    obj.job="学生";
    console.log(obj);
    delete obj.name;
    console.log(obj);
    ```

4. 使用三种方式给对象var obj = {name:"杨"}添加属性age为30

    ```js
    var obj = {name:"杨"}
    1) obj.age = 30; 
    2) obj['age'] = 30; 
    3) var age = "age"; obj[age] = 30;
    ```