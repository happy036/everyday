// const http = require('http')
// const url = require('url')
// let g = http.createServer()
// g.on('request', (req, res) => {
//     res.writeHead(200, {
//             'Content-Type': 'text/html;charset=utf8'
//         })
//         //当url掺杂参数的时候，必须使用pathname来做
//     let pathname = url.parse(req.url).pathname
//     console.log(pathname)
//     if (pathname == "/" || pathname == "/index") {
//         res.end(`<!DOCTYPE html>
//         <html lang="en">

//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Document</title>
//         </head>

//         <body>
//             <h1>首页</h1>
//             <a href="/login?username=zhansan&password=123456">登录页面</a>
//         </body>

//         </html>`)
//     }

//     if (req.url == "/list") {
//         res.end('列表页')
//     }

//     if (pathname == "/login") {
//         res.end('登录页面')
//     }

// })
// g.listen(80, () => {
//     console.log('请访问：http://localhost')
// })

// const http = require('http')
// const url = require('url')
// let g = http.createServer()
// g.on('request', (req, res) => {
//     res.writeHead(200, {
//             'Content-Type': 'text/html;charset=utf8'
//         })
//         //当url掺杂参数的时候，必须使用pathname来做
//     let pathname = url.parse(req.url).pathname
//     console.log(pathname)
//     if (pathname == "/" || pathname == "/index") {
//         res.end(`<!DOCTYPE html>
//         <html lang="en">

//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Document</title>
//         </head>

//         <body>
//             <h1>首页</h1>
//             <a href="/login?username=zhansan&password=123456">登录页面</a>
//         </body>

//         </html>`)
//     }

//     if (req.url == "/list") {
//         res.end('列表页')
//     }

//     if (pathname == "/login") {
//         res.end('登录页面')
//     }

// })
// g.listen(80, () => {
//     console.log('请访问：http://localhost')
// })


const http = require('http')
const url = require('url')
let g = http.createServer()
g.on('request', (req, res) => {
    res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf8'
        })
        //当url掺杂参数的时候，必须使用pathname来做
    let pathname = url.parse(req.url).pathname
    console.log(pathname)
    if (pathname == "/" || pathname == "/index") {
        res.end(`<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        
        <body>
            <h1>首页</h1>
            <a href="/login?username=zhansan&password=123456">登录页面</a>
        </body>
        
        </html>`)
    }

    if (req.url == "/list") {
        res.end('列表页')
    }

    if (pathname == "/login") {
        res.end('登录页面')
    }

})
g.listen(80, () => {
    console.log('请访问：http://localhost')
})