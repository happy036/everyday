//引入express
const express = require('express')

//引入fs
const fs = require('fs')

//创建服务
const app = express()

// app.get('/index', (req, res, next) => {
//     //有一个内置对象 错误对象Error
//     //throw new Error("程序发生未知错误")
//     fs.readFile('./01.txt', 'utf8', (err, result) => {
//         if (err != null) {
//             next(err)
//         } else {
//             res.send(result)
//         }
//     })
// })

// //app.use就会拦截所有的请求
// app.use((err, req, res, next) => {
//     //console.log(err.message);
//     res.status(500).send(err.message);
// })

// app.get('/index', (req, res, next) => {
//     //有一个内置对象 错误对象Error
//     //throw new Error("程序发生未知错误")
//     fs.readFile('./01.txt', 'utf8', (err, result) => {
//         if (err != null) {
//             next(err)
//         } else {
//             res.send(result)
//         }
//     })
// })

// //app.use就会拦截所有的请求
// app.use((err, req, res, next) => {
//     //console.log(err.message);
//     res.status(500).send(err.message);
// })

// app.get('/index', (req, res, next) => {
//     //有一个内置对象 错误对象Error
//     //throw new Error("程序发生未知错误")
//     fs.readFile('./01.txt', 'utf8', (err, result) => {
//         if (err != null) {
//             next(err)
//         } else {
//             res.send(result)
//         }
//     })
// })

// //app.use就会拦截所有的请求
// app.use((err, req, res, next) => {
//     //console.log(err.message);
//     res.status(500).send(err.message);
// })
app.listen(80, () => {
    console.log('请访问：http://localhost')
})