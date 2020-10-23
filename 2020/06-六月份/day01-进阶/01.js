//引入express
const express = require('express')

//创建服务
const app = express()

//中间件是匹配到了就停止匹配
// app.get('/request', (req, res, next) => {
//     req.name = 'zhangsan'
//当匹配到/request就让数据流向下一个中间件
//     next()
// })

// app.get('/request', (req, res) => {
//     console.log('222222')
//     res.send(req.name)
// })

// app.use((req, res, next) => {
//     console.log('222')
//     next()
// })
// 如果用use的话 get请求能接受 post能接受
// app.use('/', (req, res) => {
//     console.log('路由/')
//     res.send('我是路由/的请求')
// })

// app.use((req, res, next) => {
//     console.log('222')
//     next()
// })
// 如果用use的话 get请求能接受 post能接受
// app.use('/', (req, res) => {
//     console.log('路由/')
//     res.send('我是路由/的请求')
// })

// app.use((req, res, next) => {
//     console.log('222')
//     next()
// })
// 如果用use的话 get请求能接受 post能接受
// app.use('/', (req, res) => {
//     console.log('路由/')
//     res.send('我是路由/的请求')
// })

//监听
app.listen(80, () => {
    console.log('请打开：http://localhost')
})