const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
    //把public作为静态资源目录
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.post('/json', (req, res) => {
    res.send(req.body)
})
app.listen(80, () => {
    console.log('请访问：http://localhost')
})