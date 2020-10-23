## 简答题

1. 创建数据库quanzhan12
```js
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/quanzhan12', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => { console.log('数据连接成功') })

.catch((err) => { console.log(err, '数据连接失败') })
```
============================================class集合==============================
2. 创建集合class,集合的规则要求如下
> 姓名:字符串类型
> 年龄:数字类型
> 性别: 数字类型
> 业务爱好:数组类型
```js
let classScheam = new mongoose.Schema({
    name: String,
    age: Number,
    sex: Number,
    hobby: Array
})

let Class = new mongoose.model('Class', classScheam)
```
============================================增加操作===============================
3. 在class的集合中插入文档
>姓名:zhangsan,年龄:22,性别:0,业务爱好：["draw","computer"]
>姓名:jialala,年龄:18,性别:1,业务爱好：["sing","draw","football"]
>姓名:yaoyao,年龄:24,性别:1,业务爱好：["football","computer","running"]
>姓名:yangwenlin,年龄:19,性别:0,业务爱好：["sing","computer"]
```js
Class.create({
    name: 'zhangsan',
    age: 22,
    sex: 0,
    hobby: ['draw', 'computer']
})

Class.create({
    name: 'jialala',
    age: 18,
    sex: 1,
    hobby: ['sing', 'draw', 'football']
})
Class.create({
    name: 'yaoyao',
    age: 24,
    sex: 1,
    hobby: ['football', 'computer', 'running']
})
Class.create({
    name: 'yangwenlin',
    age: 19,
    sex: 0,
    hobby: ['sing', 'computer']
})

```
============================================查询操作===============================
4. 查询所有人的信息
```js
Class.find()
    .then(data => console.log(data))
    .catch(err => console.log(err))
```
============================================score集合==============================

5. 创建集合score,集合的规则要求如下
> 姓名:字符串类型
> 数学成绩: 数字类型
> 英语成绩: 数字类型
> 语文成绩: 数字类型
```js
let Score = new mongoose.Schema({
    name: String,
    math: Number,
    English: Number,
    chinese: Number
})

let score = new mongoose.model('score', Score)
```
============================================增加操作===============================
6. 在class的集合中插入文档
>姓名:zhangsan,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:jialala,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:yaoyao,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:yangwenlin,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
```js
score.create({
    name: 'zhangsan',
    math: 88,
    English: 77,
    chinese: 100
})

score.create({
    name: 'jialala',
    math: 99,
    English: 77,
    chinese: 100
})

score.create({
    name: 'yaoyao',
    math: 100,
    English: 77,
    chinese: 100
})

score.create({
    name: 'yangwenlin',
    math: 100,
    English: 100,
    chinese: 100
})
```
============================================查询操作===============================
7. 查询所有成绩
```js
score.find()
    .then(data => console.log(data))
    .catch(err => console.log(err))
```

============================================老师集合==============================
8. 创建集合teacher,集合的规则要求如下
> 姓名:字符串类型
> 性别: 数字类型
> 年龄: 数字类型
> 新资: 数字类型
```js
let Teacher = new mongoose.Schema({
    name: String,
    sex: Number,
    age: Number,
    money: Number
})

let teacher = new mongoose.model('teacher', Teacher)
```
============================================增加操作===============================
9. 在class的集合中插入文档
这个你自己定义，插入3条文档就可以
```js
teacher.create({
    name: 'tom',
    sex: 0,
    age: 18,
    money: 10000
})

teacher.create({
    name: 'jack',
    sex: 0,
    age: 19,
    money: 20000
})

teacher.create({
    name: 'jerry',
    sex: 1,
    age: 20,
    money: 30000
})
```
============================================查询操作===============================
10. 查询所有老师的信息
```js
teacher.find()
    .then(data => console.log(data))
    .catch(err => console.log(err))
```

