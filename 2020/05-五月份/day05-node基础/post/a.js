const http = require('http')
const querystring = require('querystring')
const a = http.createServer()
a.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    })
    let all = ""
    req.on('data', (chunk) => {
        all += chunk
    })
    req.on('end', () => {
        let sum = querystring.parse(all)
        console.log(sum)
    })
})
a.listen(3000, () => {
    console.log('请访问:http://localhost:3000')
})