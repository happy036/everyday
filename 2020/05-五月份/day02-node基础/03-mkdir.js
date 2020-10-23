// 1.导入模块
const fs = require('fs')

//2.使用fs的mkdir,创建文件夹的意思
fs.mkdir('../oo', { recursive: true }, function(err, path) {
    //err为null说明没有错误，不为null说明有错
    if (err != null) {
        console.log(err)
        return
    }
    console.log(path)
})