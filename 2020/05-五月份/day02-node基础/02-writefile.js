// 导入模块
const fs = require('fs')

//使用fs模块的写入文件内容的方法 writeFile
let content = '<h1>writeFile</h1>'
fs.writeFile('./index.html', content, function(err) {
    if (err != null) {
        console.log(err)
        return
    }
    console.log('文件写入成功')
})