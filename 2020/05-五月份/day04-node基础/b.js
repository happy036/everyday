// const http = require('http')
// let b = http.createServer()
// b.on('request', (req, res) => {
//     // 请求
//     // console.log(req)
//     res.end('hello')
// })

// b.listen(80, () => {
//     console.log('请访问：http://localhost')
// })

// const http = require('http')
// let b = http.createServer()
// b.on('request', (req, res) => {
//     // console.log(req)
//     res.end('hello')
// })

// b.listen(80, () => {
//     console.log('请访问：http://localhost')
// })

const http = require('http')
let b = http.createServer()
b.on('request', (req, res) => {
    console.log(req)
    res.end('hello')
})

b.listen(80, () => {
    console.log('请访问：http://localhost')
})