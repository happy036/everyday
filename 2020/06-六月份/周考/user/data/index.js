const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/caoxijuan_user', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((data) => {
    console.log('数据连接成功')
}).catch((error) => {
    console.log('数据连接失败')
})

let user = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hobbies: {
        type: [String],
        enum: ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头']
    }
})

let User = new mongoose.model('User', user)
    // User.create({
    //     username: '小张',
    //     password: '123456',
    //     age: 18,
    //     email: '123@qq.com',
    //     hobbies: ['足球', '篮球']
    // })

module.exports = {
    findShow: function(fn) {
        User.find().then((data) => {
            fn(data)
        }).catch((error) => {
            console.log(error)
        })
    }
}