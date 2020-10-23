const http = require('http')
    // const url = require('url')
const querystring = require('querystring')
const a = http.createServer()
a.on('request', (req, res) => {
    // console.log(req.method)
    // console.log(req.url)
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    })

    // console.log(req.url)
    // let params = url.parse(req.url, true)
    // if (params.query.username == 'tom' && params.query.password == '123456') {
    //     res.write('欢迎加入' + params.query.username)
    // } else {
    //     res.write('输入错误')
    // }
    // res.end()
    let postData = ""
    req.on('data', (chunk) => {
        postData += chunk
    })
    req.on('end', () => {
        let finalData = querystring.parse(postData)
        console.log(finalData)
    })

})
a.listen(80, () => {
    console.log('请打开：http://localhost')
})