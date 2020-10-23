const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/db_user', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log('数据连接成功') })
    .catch((err) => { console.log(err, '数据连接失败') })

let userSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    age: Number,
    hobbies: [String]
})

let user = new mongoose.model('user', userSchema)
    // user.create({
    //     username: '咕嘟',
    //     name: '零三六',
    //     email: '123@qq.com',
    //     age: 20,
    //     hobbies: ['学习', '吃东西']
    // })

// user.create({
//     username: '咕嘟2',
//     name: '零三六',
//     email: '123@qq.com',
//     age: 19,
//     hobbies: ['学习', '吃东西']
// })

// user.create({
//     username: '咕嘟3',
//     name: '零三六',
//     email: '123@qq.com',
//     age: 18,
//     hobbies: ['学习', '吃东西']
// })
// user.find({ username: '咕嘟' }).then(data => { console.log(data) })

//查询年龄在大于18小于20之间的数据
// user.find({ age: { $gt: 18, $lt: 20 } }).then((data) => { console.log(data) })

//查询名字中含有咕嘟2的数据($in只能查找字段值是数组的)
// user.find({ hobbies: { $in: ['玩耍'] } }).then((data) => { console.log(data) })
//查找所有数据 按照年龄排序（升序）
// user.find().sort('age').then((data) => { console.log(data) })

//查找所有数据 按照年龄排序（降序）
// user.find().sort('-age').then((data) => { console.log(data) })

//分页（跳过多少个，获取多少个）
// user.find().skip(2).limit(2).then(data => {
//     console.log(data)
// })

//根据字段查询
// user.find().select('name email -_id').then((data) => { console.log(data) })

user.findOne({
    username: '咕嘟2'
}).then((data) => {
    console.log(data)
})