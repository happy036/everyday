// 1.导入模块
const fs = require('fs')

//2.使用模块的读文件的方法来读文件
fs.readFile("./01.txt", 'utf8', function(err, data) {
    console.log(err)
    console.log(data)
})