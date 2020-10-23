const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('你好')
})
app.listen(80, () => {
    console.log('请访问：http://localhost')
})