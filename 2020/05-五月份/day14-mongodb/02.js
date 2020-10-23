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

//删除一条数据
//返回的是删除完成的数据
user.findOneAndDelete({ _id: '5ecdbb988aa8fd2b1c0c4994' }).then((data) => console.log(data))

//删除多个
user.deleteMany({ age: 20 }).then((data) => console.log(data))