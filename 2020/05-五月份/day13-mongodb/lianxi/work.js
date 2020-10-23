const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/quanzhan12', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => { console.log('数据连接成功') })

.catch((err) => { console.log(err, '数据连接失败') })

// let classScheam = new mongoose.Schema({
//     name: String,
//     age: Number,
//     sex: Number,
//     hobby: Array
// })

// let Class = new mongoose.model('Class', classScheam)
// Class.create({
//     name: 'zhangsan',
//     age: 22,
//     sex: 0,
//     hobby: ['draw', 'computer']
// })

// Class.create({
//     name: 'jialala',
//     age: 18,
//     sex: 1,
//     hobby: ['sing', 'draw', 'football']
// })
// Class.create({
//     name: 'yaoyao',
//     age: 24,
//     sex: 1,
//     hobby: ['football', 'computer', 'running']
// })
// Class.create({
//     name: 'yangwenlin',
//     age: 19,
//     sex: 0,
//     hobby: ['sing', 'computer']
// })

// Class.find()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

let Score = new mongoose.Schema({
    name: String,
    math: Number,
    English: Number,
    chinese: Number
})

let score = new mongoose.model('score', Score)

score.create({
    name: 'zhangsan',
    math: 88,
    English: 77,
    chinese: 100
})

score.create({
    name: 'jialala',
    math: 99,
    English: 77,
    chinese: 100
})

score.create({
    name: 'yaoyao',
    math: 100,
    English: 77,
    chinese: 100
})

score.create({
    name: 'yangwenlin',
    math: 100,
    English: 100,
    chinese: 100
})

score.find()
    .then(data => console.log(data))
    .catch(err => console.log(err))

// let Teacher = new mongoose.Schema({
//     name: String,
//     sex: Number,
//     age: Number,
//     money: Number
// })

// let teacher = new mongoose.model('teacher', Teacher)

// teacher.create({
//     name: 'tom',
//     sex: 0,
//     age: 18,
//     money: 10000
// })

// teacher.create({
//     name: 'jack',
//     sex: 0,
//     age: 19,
//     money: 20000
// })

// teacher.create({
//     name: 'jerry',
//     sex: 1,
//     age: 20,
//     money: 30000
// })

// teacher.find()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))