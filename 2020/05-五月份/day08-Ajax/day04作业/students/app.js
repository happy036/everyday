const express = require('express')
const path = require('path')

const fs = require('fs')
const db = require('./data/db.json')
const app = express()
    //静态目录
app.use(express.static(path.join(__dirname, '/public')))
    //设置post参数中间件
app.use(express.urlencoded({ extended: false }))
    //接收post请求
app.post('/addStudent', (req, res) => {
    console.log(req.body)
    let reqData = {
        username: req.body.username,
        age: req.body.age,
        sex: req.body.sex,
        email: req.body.email,
        hobby: req.body.hobby,
        school: req.body.school,
        date: req.body.date
    }

    db.push(reqData)
    fs.writeFile(path.join(__dirname, 'data', 'db.json'), JSON.stringify(db), (err) => {
        if (err != null) {
            console.log(err)
        }

        res.status(200).json({
            code: 200,
            msg: '数据添加成功'
        })
    })
})

app.get('/listSudents', (req, res) => {
    res.status(200).send(db)
})
app.listen(80, () => {
    console.log('请打开：http://localhost')
})