// //引入框架模块
// const express = require('express')

// //使用框架模块创建服务
// const app = express()

// app.get('/', (req, res) => {
//     res.send('这是首页')
// })

// app.get('/login', (req, res) => {
//     res.send('这是登录页')
// })

// //指定服务器端口号 并启动服务
// app.listen(80, () => {
//     console.log('服务启动：http://localhost')
// })

// //引入框架模块
// const express = require('express')

// //使用框架模块创建服务
// const app = express()

// app.get('/', (req, res) => {
//     res.send('这是首页')
// })

// app.get('/login', (req, res) => {
//     res.send('这是登录页')
// })

// //指定服务器端口，并启动服务
// app.listen(80, () => {
//     console.log('服务启动：http://localhost')
// })

//引入框架模块
const express = require('express')

//使用框架模块创建服务
const app = express()

app.get('/', (req, res) => {
    res.send('这是首页')
})

app.get('/login', (req, res) => {
    res.send('这是登录页')
})

//指定服务器端口，并启动服务
app.listen(80, () => {
    console.log('服务启动：http://localhost')
})