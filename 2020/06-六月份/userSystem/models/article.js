const mongoose = require('mongoose')

//数据库连接
// mongoose.connect('mongodb://localhost/db_blog', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('数据连接成功')
// }).catch((err) => {
//     console.log(err)
// })

let articleSchema = new mongoose.Schema({
    // 标题
    title: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 1
    },
    // 作者
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // 发布时间
    publishDate: {
        type: Date,
        default: Date.now
    },
    // 封面图片
    cover: {
        type: String,
        default: null
    },
    // 内容
    content: {
        type: String
    }
})

let Article = new mongoose.model('Article', articleSchema)
    // Article.create({
    //     title: '宋',
    //     author: '5ed9a87d0bfb5e3b70e0407e',
    //     content: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'
    // })

module.exports = Article