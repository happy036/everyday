const express = require('express')
const path = require('path')
const db = require('./data/index')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.get('/show', (req, res) => {
    db.findShow(function(data) {
        res.status(200).send({
            code: 200,
            msg: '数据成功',
            data: data
        })
    })
})
app.post('/add', (req, res) => {
    console.log(req.body)
})
app.listen(80)