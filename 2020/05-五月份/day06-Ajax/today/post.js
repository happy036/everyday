// const express = require('express')
// const path = require('path')
// const app = express()

// //把public作为静态资源目录
// app.use('/public', express.static(path.join(__dirname, 'public')))
// app.use(express.urlencoded())
//     //接收post请求
// app.post('/postParam', (req, res) => {
//     res.send(req.body)
// })
// app.listen(80, () => {
//     console.log('请访问：http://localhost')
// })

// const express = require('express')
// const path = require('path')
// const app = express()

// //把public作为静态资源目录
// app.use('/public', express.static(path.join(__dirname, 'public')))
// app.use(express.urlencoded())
//     //接收post请求
// app.post('/postParam', (req, res) => {
//     res.send(req.body)
// })
// app.listen(80, () => {
//     console.log('请访问：http://localhost')
// })

const express = require('express')
const path = require('path')
const app = express()

//把public作为静态资源目录
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded())
    //接收post请求
app.post('/postParam', (req, res) => {
    res.send(req.body)
})
app.listen(80, () => {
    console.log('请访问：http://localhost')
})