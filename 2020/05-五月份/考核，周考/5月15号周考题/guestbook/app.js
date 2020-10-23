//引包
const express = require('express')
const path = require('path')
const fs = require('fs')
const db = require('./data/db.json')

//创建服务器
const app = express()

//开启静态资源目录
app.use(express.static(path.join(__dirname, 'public')))

//中间件
app.use(express.urlencoded({ extended: false }))
app.get('/showtime', (req, res) => {
    res.status(200).send(db)
})

app.post('/addshow', (req, res) => {
    // console.log(req.body)
    let reqData = {
        name: req.body.name,
        content: req.body.content,
        created: new Date().toLocaleString()
    }
    db.unshift(reqData)
        // console.log(db)
        // console.log(JSON.stringify(db))
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


//监听
app.listen(80, () => {
    console.log('请打开：http://localhost')
})