//导入express框架
const express = require('express')

//导入path模块
const path = require('path')

//导入路由模块
const router = require('./routes')

//创建服务
const app = express()

//设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')))
    //连接数据库
require('./models/dbConnect')


//挂载路由
app.use(router)














app.listen(80, () => {
    console.log('请访问：http://localhost')
})