const express = require('express')
const path = require('path')
const multer = require('multer')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
let uploder = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, 'upload'))
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    })
})
app.post('/profile', uploder.single('avatar'), function(req, res) {
    console.log(req.file)
})
app.listen(80, () => {
    console.log('服务已启动：http://localhost')
})