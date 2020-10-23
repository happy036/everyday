const mongoose = require('mongoose')

// 数据库连接
// mongoose.connect('mongodb://localhost/db_blog', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('数据连接成功')
// }).catch((err) => {
//     console.log(err)
// })


let user = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        //唯一
        unique: true,
        minlength: 6,
        maxlength: 18
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 12
    },
    email: {
        type: String,
        required: true,
        //唯一
        unique: true
    },
    //状态（1 true：用户正常，0 false：用户被禁用）
    status: {
        type: Boolean,
        default: true
    },
    //角色（普通用户还是超级管理员 必选）
    role: {
        type: String,
        required: true
    }
})

let User = new mongoose.model('User', user)

// User.create({
//     username: 'songlin',
//     password: '123456',
//     email: '123@qq.com',
//     role: '超级管理员'
// })
// User.create({
//     username: 'songsong',
//     password: '123456',
//     email: '12345@qq.com',
//     role: '超级管理员'
// })
module.exports = User