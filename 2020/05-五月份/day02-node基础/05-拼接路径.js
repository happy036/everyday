// 1.导入模块
const fs = require('fs')
const path = require('path')
console.log(__dirname)
console.log(path.join(__dirname, '01.txt'))
let finalPath = path.join(__dirname, '01.txt')
fs.readFile(finalPath, 'utf8', function(err, data) {
    console.log(err)
    console.log(data)
})