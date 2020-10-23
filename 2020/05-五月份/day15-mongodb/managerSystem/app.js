//导入包
const express = require('express')
const path = require('path')
let mongodb = require('mongoose')

const db = require('./data/index')

//使用express方法创建web服务
const app = express()

//设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))

//查找数据
// /api/list 称为路由
//req 请求 requset
//res 响应 response
// app.get('/api/list', (req, res) => {
//     db.findAll(function(data) {
//         res.status(200).send({
//             code: 200,
//             msg: '数据查询成功',
//             data: data
//         })
//     })
// })

//查找分页数据
app.get('/api/getPage', (req, res) => {
    // console.log(req.query)
    db.findPage(parseInt(req.query.pageNum), parseInt(req.query.pageSize),
        function(data) {
            if (data) {
                res.status(200).send({
                    code: 200,
                    msg: '数据查询成功',
                    data: data
                })
            }
        })
})

//添加数据
app.post('/api/add', (req, res) => {
    console.log(req.body)
    let newUser = {
        username: req.body.username,
        password: req.body.password,
        age: req.body.age,
        email: req.body.email,
        hobbies: req.body.hobbies
    }
    db.addOne(newUser, function(data) {
        if (data) {
            res.status(200).send({
                code: 200,
                msg: '用户添加成功',
                data: data
            })
        }
    })
})

//删除数据
app.delete('/api/deleteUser', (req, res) => {
    db.deleteOne(req.body.id, function(data) {
        // console.log(data)
        res.status(200).send({
            code: 200,
            msg: '用户删除成功',
            data: data
        })
    })
})

//指定端口并启动服务
app.listen(80, () => {
    console.log('请访问：http://localhost')
})