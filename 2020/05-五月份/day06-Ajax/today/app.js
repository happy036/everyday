// const express = require('express')
// const path = require('path')
// const app = express()

// // console.log(path.join(__dirname, 'public'))
// //把public作为静态资源目录
// app.use('/public', express.static(path.join(__dirname, 'public')))
// app.get('/simple', (req, res) => {
//     res.send('hello')
// })
// app.listen(80, () => {
//     console.log('请访问：http://localhost')
// })

// const express = require('express')
// const path = require('path')
// const app = express()

// //把public作为静态资源目录
// app.use('/public', express.static(path.join(__dirname, 'public')))
// app.get('/simple', (req, res) => {
//     res.send('hello')
// })
// app.listen(80, () => {
//     console.log('请访问：http://localhost')
// })

const express = require('express')
const path = require('path')
const app = express()

//把public作为静态资源目录
app.use('/public', express.static(path.join(__dirname, 'public')))
app.get('/simple', (req, res) => {
    res.send('hello')
})
app.listen(80, () => {
    console.log('请访问：http://localhost')
})