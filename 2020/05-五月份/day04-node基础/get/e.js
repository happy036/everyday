// const http = require('http')
// const url = require('url')
// const e = http.createServer()
// e.on('request', (req, res) => {
//     //打印请求地址
//     // console.log(req.url)
//     res.writeHead(200, {
//         'Content-Type': 'text/html;charset=utf8'
//     })
//     let parms = url.parse(req.url, true)
//         // console.log(parms)
//     if (parms.query.username == 'tom' && parms.query.password == "123456") {
//         res.write('欢迎你')
//     } else {
//         res.write('输入错误')
//     }

//     res.end()
// })
// e.listen(80, () => {
//     console.log('请访问：http://localhost')
// })

// const http = require('http')
// const url = require('url')
// const e = http.createServer()
// e.on('request', (req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html;charset=utf8'
//     })
//     let parms = url.parse(req.url, true)
//     if (parms.query.username == 'tom' && parms.query.password == "123456") {
//         res.write('欢迎你')
//     } else {
//         res.write('输入错误')
//     }

//     res.end()
// })
// e.listen(80, () => {
//     console.log('请访问：http://localhost')
// })

const http = require('http')
const url = require('url')
const e = http.createServer()
e.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    })
    let parms = url.parse(req.url, true)
    console.log(parms)
    if (parms.query.username == 'tom' && parms.query.password == "123456") {
        res.write('欢迎你')
    } else {
        res.write('输入错误')
    }

    res.end()
})
e.listen(80, () => {
    console.log('请访问：http://localhost')
})