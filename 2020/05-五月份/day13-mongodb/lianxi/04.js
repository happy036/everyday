//连接数据库
//引入
const mongoose = require('mongoose')

//使用mongoose的包的connect方法来连接数据
//mongoose.connect('mongodb://IP或域名/数据库名称')
mongoose.connect('mongodb://localhost/db_student', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log('数据连接成功') })
    .catch((err) => { console.log(err, '数据库连接失败') })


let studentSchema = new mongoose.Schema({
    //字段：数据类型
    name: String,
    age: Number,
    address: String,
    hobby: Array
})

let student = new mongoose.model('student', studentSchema)
student.find()
    .then(data => console.log(data))
    .catch(err => console.log(err))