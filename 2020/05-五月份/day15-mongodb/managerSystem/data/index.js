//引入模块
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/db_losystem', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => { console.log('数据连接成功') })
    .catch((err) => { console.log('数据连接失败') })

//设置约束
let userScherm = new mongoose.Schema({
    username: {
        type: String,
        required: [true, '请输入用户名'],
        minlength: [2, '长度最少两个字符'],
        maxlength: [6, '长度最大六个字符']
    },
    password: {
        type: String,
        required: [true, '请输入密码']
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
        //元素的数据类型都是字符串数组
        type: [String],
        enum: {
            values: ['足球', '篮球'],
        }
    }
})

let user = new mongoose.model('user', userScherm)


module.exports = {
    //查找数据
    findAll: function(fn) {
        user.find()
            .then((data) => {
                //查询数据成功，返回数据
                //这里是函数的调用 data是实参
                fn(data)
            })
            .catch((error) => {
                //查询数据 打印错误
                console.log(error)
            })
    },
    //分页
    findPage: function(pageNum, pageSize, fn) {
        //每次取五条数据
        user.find().skip((pageNum - 1) * pageSize).limit(pageSize).then((data) => {
            // console.log(data)
            //数据库中总共有多少条数据
            user.countDocuments().then(total => {
                //pageNum pageSize 总数据量 数据返回
                fn({
                    pageSize: pageSize,
                    pageNum: pageNum,
                    dataTotal: total,
                    data: data
                })
            })
        })
    },
    //添加数据
    addOne: function(newUser, fn) {
        user.create(newUser)
            .then((data) => {
                fn(data)
            })
            .catch((error) => {
                //查询数据 打印错误
                console.log(error)
            })
    },
    //删除数据
    deleteOne: function(userId, fn) {
        user.findOneAndDelete({
            _id: userId
        }).then(data => {
            // console.log(data)
            fn(data)
        })
    }
}


//添加数据
// user.create({
//     username: '零三六',
//     password: '123456',
//     age: 20,
//     email: '123@qq.com',
//     hobbies: ['足球', '篮球']
// })

//修改数据
//删除数据