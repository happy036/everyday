const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.get('/reqGet', (req, res) => {
    console.log(req.query)
    res.send('我接收到了请求')
})
app.listen(80, () => {
    console.log('请访问：http://localhost')
})