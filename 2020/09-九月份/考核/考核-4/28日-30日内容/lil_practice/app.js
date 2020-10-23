// 导入包
const express = require('express')
const path = require('path')

// 导入首页路由
const index = require('./routes/indexRouter')
const add = require('./routes/addRouter')

// 创建服务器
const app = express()

// 配置静态资源
app.use(express.static(path.join(__dirname, 'public')))

// 配置中间件
app.use(express.urlencoded({ extended: false }));
// 挂载路由
app.use(index)
app.use(add)

// 指定端口并启动服务
app.listen(3000, () => {
    console.log('请打开：http://localhost:3000')
})