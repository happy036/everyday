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