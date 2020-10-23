const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/fullstack2019', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log('数据连接成功') })
    .catch((err) => { console.log(err, '数据连接失败') })

let studentSchema = new mongoose.Schema({
    name: {
        type: String,
        validate: {
            validator: v => {
                return v && v.length >= 2 && v.length <= 6;
            },
            message: '您的名字不符合姓名规则'
        }
    },
    age: {
        type: Number,
        required: [true, '请输入年龄'],
        max: [25, "年龄不能大于25岁"]
    },
    sex: {
        type: String,
        required: [true, '请输入性别'],
        enum: {
            values: ['男', '女'],
            message: '请选择性别'
        }
    },
    hobbies: {
        type: [String],
        enum: {
            values: ['draw', 'computer', 'sing', 'football', 'running'],
            message: '请在其中选一个'
        }
    }
})

let Student = new mongoose.model('Student', studentSchema)



let scoreSchema = new mongoose.Schema({
    name: {
        type: String,
        validate: {
            validator: v => {
                return v && v.length >= 2 && v.length <= 6;
            },
            message: '您的名字不符合姓名规则'
        }
    },
    math: {
        type: Number,
        required: true,
        min: [0, '不能小于0'],
        max: [100, "不能大于100"]
    },
    English: {
        type: Number,
        required: true,
        min: [0, '不能小于0'],
        max: [100, "不能大于100"]
    },
    chinese: {
        type: Number,
        required: true,
        min: [0, '不能小于0'],
        max: [100, "不能大于100"]
    }
})

let Score = new mongoose.model('Score', scoreSchema)
    // Score.create({
    //     name: '杨文林',
    //     math: 99,
    //     English: 88,
    //     chinese: 80
    // })

// Score.create({
//     name: '贾拉拉',
//     math: 88,
//     English: 79,
//     chinese: 90
// })

// Score.create({
//     name: '姚姚',
//     math: 90,
//     English: 90,
//     chinese: 90
// })

// Score.create({
//     name: '王凯',
//     math: 90,
//     English: 98,
//     chinese: 99
// })

// Score.find().then(data => { console.log(data) })

// Student.find({ age: { $gt: 18, $lt: 24 } }).then(data => { console.log(data) })

// Student.find({ age: 19, hobbies: { $in: ["computer"] } }).then(data => { console.log(data) })

// Student.find().sort('-age').then(data => { console.log(data) })
// Student.find({ age: 18 }).select('name -_id').then(data => { console.log(data) })
// Student.find().count().then(data => { console.log(data) })
// Student.find().skip(2).limit(2).then(data => { console.log(data) })
// Student.find({ hobbies: { $in: ["sing"] } }).then(data => { console.log(data) })
// 
// Score.find({ name: '王凯' }).select('math English chinese -_id').then(data => { console.log(data) })
// Student.updateOne({ name: '姚姚' }, {
//         age: 23
//     })
// Student.updateMany({}, {
//         age: 18
//     })
// Score.updateOne({ name: '王凯' }, {
//         math: 100
//     })
//     .then(data => { console.log(data) })
// Student.deleteMany({ age: { $lt: 20 } }).then(data => console.log(data))
// Score.findOneAndDelete({ name: '贾拉拉' }).then(data => console.log(data))
// .then(data => console.log(data))
//     .catch((err) => {
//         for (let k in err.errors) {
//             console.log(err.errors[k].properties.message)
//         }
//     })