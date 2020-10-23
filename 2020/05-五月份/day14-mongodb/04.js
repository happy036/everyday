const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/db_user', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log('数据连接成功') })
    .catch((err) => { console.log(err, '数据连接失败') })

let teacherSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, '年龄没写']
    },
    name: String,
    email: String,
    age: Number,
    hobbies: [String]
})

let Teacher = new mongoose.model('Teacher', teacherSchema)
Teacher.create({})
    .then(data => console.log(data))
    .catch((err) => {
        for (let k in err.errors) {
            console.log(err.errors[k].properties.message)
        }
    })