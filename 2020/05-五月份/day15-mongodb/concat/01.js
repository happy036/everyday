//引包
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/db_log', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => { console.log('数据连接成功') })
    .catch((err) => { console.log('数据连接失败') })

//创建约束
const userSchema = new mongoose.Schema({
    name: {
        type: String
    }
})

let user = new mongoose.model('user', userSchema)
user.create({
    name: '零三六'
})
const postSchema = new mongoose.Schema({
    //文章的标题
    title: {
        type: String
    },
    //文章作者
    author: {
        //用户id（规定写法，如果你的数据类型是用户的id）
        type: mongoose.Schema.Types.ObjectId,
        //author的id引用自user集合
        ref: 'user'
    }
})