//引入express
const express = require('express')

//创建服务
const app = express()

// //未登录
// app.use('/admin', (req, res, next) => {
//     //用户登录标识
//     let isLogin = true
//     if (isLogin) {
//         next()
//     } else {
//         res.send('您还没有登录不能访问 /admin页面')
//     }
// })

// //已登录
// app.get('/admin', (req, res) => {
//     res.send('您已经登录，可以访问当前页面')
// })

// //如果用户乱输入地址，返回404页面
// app.use((req, res, next) => {
//     res.status(404).send(`
//     <h1>404</h1>
//     `)
// })

// //未登录
// app.use('/admin', (req, res, next) => {
//     //用户登录标识
//     let isLogin = true
//     if (isLogin) {
//         next()
//     } else {
//         res.send('您还没有登录不能访问 /admin页面')
//     }
// })

// //已登录
// app.get('/admin', (req, res) => {
//     res.send('您已经登录，可以访问当前页面')
// })

// //如果用户乱输入地址，返回404页面
// app.use((req, res, next) => {
//     res.status(404).send(`
//     <h1>404</h1>
//     `)
// })


// //未登录
// app.use('/admin', (req, res, next) => {
//     //用户登录标识
//     let isLogin = true
//     if (isLogin) {
//         next()
//     } else {
//         res.send('您还没有登录不能访问 /admin页面')
//     }
// })

// //已登录
// app.get('/admin', (req, res) => {
//     res.send('您已经登录，可以访问当前页面')
// })

// //如果用户乱输入地址，返回404页面
// app.use((req, res, next) => {
//     res.status(404).send(`
//     <h1>404</h1>
//     `)
// })

app.listen(80, () => {
    console.log('请访问：http://localhost')
})