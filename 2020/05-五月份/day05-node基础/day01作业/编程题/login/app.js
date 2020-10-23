// 引入模块框架
const express = require('express')

//导入fs
const fs = require('fs')

//创建服务
const app = express()

//静态目录
app.use('/public', express.static('public'))

//使用express中间件
app.use(express.urlencoded())
app.post('/login', (req, res) => {
    //读取文件
    fs.readFile('./data.json', 'utf8', function(err, data) {
        if (err != null) {
            return
        }

        //转换
        let sum = JSON.parse(data)
        let all = req.body
        console.log(all)
        if (all.username == sum.username && all.password == sum.password) {
            res.send('登入成功')
        } else {
            res.send('用户名或密码输入错误')
        }
    })
})

//端口监听
app.listen(80, () => {
    console.log("请访问：http://localhost")
})