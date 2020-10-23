//导包
const express = require('express')
const path = require('path')
const db = require('./data/db.json')
    //设置包

//创建服务器
const app = express()

//设置静态目录
app.use(express.static(path.join(__dirname, 'public')))

//处理请求 返回响应
//处理查找留言请求
app.get('/findGuest', (req, res) => {
        res.status(200).send(db)
    })
    //指定端口 启动服务
app.listen(3000, () => {
    console.log('请打开：http://localhost:3000')
})