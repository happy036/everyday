const http = require('http')
const app = http.createServer()
app.on('request', (req, res) => {
    res.end('<h1>hello</h1>')

})
app.listen(3000, () => {
    console.log('请打开：http://127.0.0.1:3000 或 localhost:3000')
})