// //引入框架模块
// const express = require('express')

// //使用框架模块创建服务
// const app = express()

// //请求的时候，返回数据（中间件）
// app.use((req, res) => {
//     // res.write('你好')
//     res.send('你好')
// })

// //指定服务端口号，并启动服务
// app.listen(80, () => {
//     console.log('服务启动：http://localhost')
// })

// //引入框架模块
// const express = require('express')

// //使用框架模块创建服务
// const app = express()

// //请求的时候 返回数据（中间件）
// app.use((req, res) => {
//     res.send('你好')
// })

// //指定服务器端口号，并启动服务
// app.listen(80, () => {
//     console.log('服务启动：http://localhost')
// })


//引入框架模块
const express = require('express')

//使用框架模块创建服务
const app = express()

//请求的时候返回数据（中间件）
app.use((req, res) => {
    res.send('你好')
})

//指定服务器的端口号，并启动服务
app.listen(80, () => {
    console.log('服务启动：http://localhost')
})