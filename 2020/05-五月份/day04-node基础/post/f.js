// const http = require('http')
// const querystring = require('querystring')
// const f = http.createServer()
// f.on('request', (req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html;charset=utf8'
//     })
//     let postData = ""
//         //监听数据传输事件
//         //chunk获取到的数据,字符串的16进制表示
//     req.on('data', (chunk) => {
//             // console.log(chunk)
//             //在传输中，不能保证数据传输完整，一直拼接数据
//             postData += chunk
//         })
//         // end事件
//     req.on('end', () => {
//         //postData就变成了数据,把数据变成对象
//         let finalData = querystring.parse(postData)
//         console.log(finalData)
//     })
// })
// f.listen(3000, () => {
//     console.log('请访问：http://localhost:3000')
// })

// const http = require('http')
// const querystring = require('querystring')
// const f = http.createServer()
// f.on('request', (req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html;charset=utf8'
//     })
//     let postData = ""
//     req.on('data', (chunk) => {
//         postData += chunk
//     })
//     req.on('end', () => {
//         let finalData = querystring.parse(postData)
//         console.log(finalData)
//     })
// })
// f.listen(3000, () => {
//     console.log('请访问：http://localhost:3000')
// })

const http = require('http')
const querystring = require('querystring')
const f = http.createServer()
f.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    })
    let postData = ""
    req.on('data', (chunk) => {
        postData += chunk
    })
    req.on('end', () => {
        let finalData = querystring.parse(postData)
        console.log(finalData)
    })
})
f.listen(3000, () => {
    console.log('请访问：http://localhost:3000')
})