## 简答题

1. 创建数据库fullstack2019
```js
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/fullstack2019', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log('数据连接成功') })
    .catch(() => { console.log(err, "数据连接失败") })
```
============================Student集合==================

2. 创建集合Student,集合的规则要求如下:
> 姓名:字符出类型，长度最少2个字符，最大6个字符，必传
> 年龄:数字类型，最大年龄不能超过25岁，必传，提示年龄不能大于25岁
> 性别: 字符串类型，只能是男或者是女，枚举，必传，
> 业务爱好:draw,computer,sing,football,running
```js
let studentSchema = new mongoose.Schema({
    name: {
        type: String,
        validate: {
            validator: v => {
                return v && v.length >= 2 && v.length <= 6;
            },
            message: '您的名字不符合姓名规则'
        }
    },
    age: {
        type: Number,
        required: [true, '请输入年龄'],
        max: [25, "年龄不能大于25岁"]
    },
    sex: {
        type: String,
        required: [true, '请输入性别'],
        enum: {
            values: ['男', '女'],
            message: '请选择性别'
        }
    },
    hobbies: {
        type: [String],
        enum: {
            values: ['draw', 'computer', 'sing', 'football', 'running'],
            message: '请在其中选一个'
        }
    }
})

let Student = new mongoose.model('Student', studentSchema)
```
=============================增加操作=============================
3. 在Student的集合中插入文档
>姓名:杨文林,年龄:19,性别:男,业务爱好：["draw","computer"]
>姓名:贾拉拉,年龄:18,性别:女,业务爱好：["sing","draw","football"]
>姓名:姚姚,年龄:24,性别:女,业务爱好：["football","computer","running"]
>姓名:王凯,年龄:25,性别:男,业务爱好：["sing","computer"]
```js
Student.create({
    name: '杨文林',
    age: '19',
    sex: '男',
    hobbies: ['draw', 'computer']
})

Student.create({
    name: '贾拉拉',
    age: '18',
    sex: '女',
    hobbies: ['sing', 'draw', 'football']
})

Student.create({
    name: '姚姚',
    age: '24',
    sex: '女',
    hobbies: ['football', 'computer', 'running']
})

Student.create({
    name: '王凯',
    age: '25',
    sex: '男',
    hobbies: ['sing', 'computer']
})
```

=============================Score集合==============================

4. 创建集合Score,集合的规则要求如下
> 姓名:字符出类型，长度最少2个字符，最大6个字符，必传
> 数学成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
> 英语成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
> 语文成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
```js
let scoreSchema = new mongoose.Schema({
    name: {
        type: String,
        validate: {
            validator: v => {
                return v && v.length >= 2 && v.length <= 6;
            },
            message: '您的名字不符合姓名规则'
        }
    },
    math: {
        type: Number,
        required: true,
        min: [0, '不能小于0'],
        max: [100, "不能大于100"]
    },
    English: {
        type: Number,
        required: true,
        min: [0, '不能小于0'],
        max: [100, "不能大于100"]
    },
    chinese: {
        type: Number,
        required: true,
        min: [0, '不能小于0'],
        max: [100, "不能大于100"]
    }
})

let Score = new mongoose.model('Score', scoreSchema)
```
=============================增加操作===============================
5. 在Score的集合中插入文档
>姓名:杨文林,英语成绩：88，数学成绩：99，语文成绩：80，
>姓名:贾拉拉,英语成绩：79，数学成绩：88，语文成绩：90，
>姓名:姚姚,英语成绩：90，数学成绩：90，语文成绩：90，
>姓名:王凯,英语成绩：98，数学成绩：90，语文成绩：99

6. 查询所有学生的信息
```js
Score.find().then(data => { console.log(data) })
```

7. 查询年龄大于18岁小于24岁的学生的信息
```js
Student.find({ age: { $gt: 18, $lt: 24 } }).then(data => { console.log(data) })
```

8. 查询年龄19岁并且喜欢计算机的男生的信息
```js
Student.find({ age: 19, hobbies: { $in: ["computer"] } }).then(data => { console.log(data) })
```

9. 查询班级中年龄最大的学生的信息
```js
Student.find().sort('-age').then(data => { console.log(data) })
```

10. 查询年龄是18岁的学生的姓名
```js
Student.find({ age: 18 }).select('name -_id').then(data => { console.log(data) })
```
11. 查询总人数(提示count)
```js
 Student.find().count().then(data => { console.log(data) })
```

12. 查询显示第二页的数据，每页显示2条
```js
Student.find().skip(2).limit(2).then(data => { console.log(data) })
```
13. 查询业余爱好里面包含sing的学生的信息
```js
Student.find({ hobbies: { $in: ["sing"] } }).then(data => { console.log(data) })
```
14. 对数学成绩降序输出
```js
Score.find().sort('-math').then(data => { console.log(data) })
```

15. 查询姓名是王凯的各科成绩
```js
Score.find({ name: '王凯' }).select('math English chinese -_id').then(data => { console.log(data) })
```

===============================更新操作===============================

16. 将姓名是姚姚的学生的年龄更改为23
```js
 Student.updateOne({ name: '姚姚' }, {
        age: 23
    })
```
17. 将所有学生的年龄更改为18
```js
Student.updateMany({}, {
        age: 18
    })
```
18. 将王凯的数学成绩更新为100分
```js
Score.updateOne({ name: '王凯' }, {
        math: 100
    })
```
==================================删除操作=============================
19. 删除年龄小于20的学生的信息
```js
Student.deleteMany({ age: { $lt: 20 } })
```
20. 删除姓名是贾拉拉的这条数据
```js
Score.findOneAndDelete({ name: '贾拉拉' })
```

