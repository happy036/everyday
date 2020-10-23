const path = require('path')
const fs = require('fs')

// const realPath = path.join(__dirname, 'static')
// console.log(realPath)

const result = fs.readFile('./01.txt', 'utf8', (err, data) => {
    console.log(data)
})