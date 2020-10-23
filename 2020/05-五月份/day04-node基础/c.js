// const http = require('http')
// const c = http.createServer()
// c.on('request', (req, res) => {
//     //请求方式
//     console.log(req.method)
//         //请求地址
//     console.log(req.url)
//         //请求头
//     console.log(req.headers)
//     res.end('hello')
// })
// c.listen(80, () => {
//     console.log('请访问：http://localhost')
// })

// const http = require('http')
// const c = http.createServer()
// c.on('request', (req, res) => {
//     //请求方式
//     console.log(req.method)
//         //请求地址
//     console.log(req.url)
//         //请求头
//     console.log(req.headers)
//     res.end('hello')
// })
// c.listen(80, () => {
//     console.log('请访问：http://localhost')
// })

const http = require('http')
const c = http.createServer()
c.on('request', (req, res) => {
    //请求方式
    console.log(req.method)
        //请求地址
    console.log(req.url)
        //请求头
    console.log(req.headers)
    res.end('hello')
})
c.listen(80, () => {
    console.log('请访问：http://localhost')
})