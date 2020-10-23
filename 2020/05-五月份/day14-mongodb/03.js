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

user.updateOne({ _id: '5ecdbf394b331e36bc99c7b8' }, {
    username: '咕嘟嘟'
}).then((data) => {
    console.log(data)
})

user.updateMany({}, {
    email: '456@qq.com'
}).then(data => console.log(data))