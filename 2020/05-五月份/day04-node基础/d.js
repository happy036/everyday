// const http = require('http')
// const d = http.createServer()
// d.on('request', (req, res) => {
//     // res.writeHead(响应状态码，响应头)
//     res.writeHead(200, {
//         'Content-Type': 'text/html;charset=utf8'
//     })
//     res.end('你好')
// })

// d.listen(80, () => {
//     console.log('请访问:http://localhost')
// })


// const http = require('http')
// const d = http.createServer()
// d.on('request', (req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html;charset=utf8'
//     })
//     res.end('你好')
// })

// d.listen(80, () => {
//     console.log('请访问:http://localhost')
// })


const http = require('http')
const d = http.createServer()
d.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    })
    res.end('你好')
})

d.listen(80, () => {
    console.log('请访问:http://localhost')
})