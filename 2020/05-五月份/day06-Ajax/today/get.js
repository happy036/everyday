// const express = require('express')
// const path = require('path')
// const app = express()

// //把public作为静态资源目录
// app.use('/public', express.static(path.join(__dirname, 'public')))

// //接受GET参数
// app.get('/getParam', (req, res) => {
//     res.send(req.query)
// })
// app.listen(80, () => {
//     console.log('请访问：http://localhost')
// })

// const express = require('express')
// const path = require('path')
// const app = express()

// // 把public作为静态资源目录
// app.use('/public', express.static(path.join(__dirname, 'public')))

// //接受GET参数
// app.get('/getParam', (req, res) => {
//     res.send(req.query)
// })
// app.listen(80, () => {
//     console.log('请访问：http://localhost')
// })


const express = require('express')
const path = require('path')
const app = express()

// 把public作为静态资源目录
app.use('/public', express.static(path.join(__dirname, 'public')))

//接受GET参数
app.get('/getParam', (req, res) => {
    res.send(req.query)
})
app.listen(80, () => {
    console.log('请访问：http://localhost')
})