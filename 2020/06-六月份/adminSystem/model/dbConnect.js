const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/db_blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('数据连接成功')
}).catch((err) => {
    console.log(err)
})