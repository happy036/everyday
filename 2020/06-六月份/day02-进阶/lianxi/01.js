//引入express
const express = require('express')

//创建服务器
const app = express()


app.get('/about/:id/:name/:age', (req, res) => {
    res.send(req.params)
})


//监听
app.listen(80, () => {
    console.log('请打开：http://localhost')
})