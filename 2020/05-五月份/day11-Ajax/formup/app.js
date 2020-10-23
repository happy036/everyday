const express = require('express')
const path = require('path')
const multer = require('multer')

//设置包
const app = express()

//设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')))

//设置文件上传路径
let uploder = multer({
    storage: multer.diskStorage({
        //确定上传的文件在哪里 cb(callback)
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, 'upload'))
        },
        //确定上传之后的文件的名字
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    })
})

//处理请求并响应
app.post('/profile', uploder.single('avatar'), function(req, res) {
    console.log(req.file)
})
app.listen(80, () => {
    console.log('服务已启动：http://localhost')
})