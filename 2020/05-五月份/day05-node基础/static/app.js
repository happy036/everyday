// //1:引入模块
// const http = require('http')

// //引入url模块
// const url = require('url')

// //引入path模块
// const path = require('path')

// //引入fs模块
// const fs = require('fs')

// //引入mime模块，识别分析文件的mime类型
// const mime = require('mime')

// //使用http模块提供的方法创建服务
// const app = http.createServer()

// app.on('request', (req, res) => {
//     //获取地址栏中的url
//     let pathname = url.parse(req.url).pathname
//         //绝对路径
//     let abloustePath = path.join(__dirname, pathname)
//     fs.readFile(abloustePath, (err, data) => {
//         //如果路径错误，返回Not Found
//         if (err != null) {
//             res.writeHead(404, {
//                 'Content-Type': 'text/html;charset=uft8'
//             })
//             res.end('Not Found')
//             return;
//         }
//         let type = mime.getType(abloustePath)
//             //如果路径正确，返回内容
//         res.writeHead(200, {
//             'Content-Type': type
//         })
//         res.end(data)
//     })
// })

// //指定端口，启动服务
// app.listen(80, () => {
//     console.log('请打开：http://localhost')
// })




// //引入http模块
// const http = require('http')

// //引入url模块
// const url = require('url')

// //引入path
// const path = require('path')

// //引入fs模块
// const fs = require('fs')

// //引入mime模块，识别分析文件的MIME类型
// const mime = require('mime')

// //使用http模块提供的方法创建服务
// const app = http.createServer()

// //监听客户端得request事件，处理请求并响应内容
// app.on('request', (req, res) => {
//     //获取地址栏中的url
//     let pathname = url.parse(req.url).pathname
//         //绝对路径
//     let abloustePath = path.join(__dirname, pathname)
//     fs.readFile(abloustePath, (err, data) => {
//         //如果路径错误，返回Not Found
//         if (err != null) {
//             res.writeHead(404, {
//                 'Content-Type': 'text/plain;charset=utf8'
//             })
//             res.end("Not Found");
//             return;
//         }
//         let type = mime.getType(abloustePath)
//             //如果路径正确，返回内容
//         res.writeHead(200, {
//             'Content-Type': type
//         })
//         res.end(data)
//     })
// })

// // 指定端口，启动服务
// app.listen(80, () => {
//     console.log('请访问：http://localhost')
// })



// 引入http模块
const http = require('http')

// 引入url模块
const url = require('url')

// 引入path模块
const path = require('path')

// 引入fs模块
const fs = require('fs')

// 引入mime模块
const mime = require('mime')

// 使用http模块提供的方法创建服务
const app = http.createServer()

// 监听客户端的request事件，处理请求并响应内容
app.on('request', (req, res) => {
    // 获取地址栏的url
    let pathname = url.parse(req.url).pathname
        //绝对路径
    let abloustePath = path.join(__dirname, pathname)
    fs.readFile(abloustePath, (err, data) => {
        //如果路径错误 返回Not Found
        if (err != null) {
            res.writeHead(404, {
                'Content-Type': 'text/plain;charset=utf8'
            })
            res.end('Not Found')
            return
        }
        let type = mime.getType(abloustePath)
            //如果路径正确，返回内容
        res.writeHead(200, {
            'Content-Type': type
        })
        res.end(data)
    })
})

// 指定端口 启动服务
app.listen(80, () => {
    console.log('请访问：http://localhost')
})