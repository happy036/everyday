// 引入express框架
const express = require('express')

// 使用express方法提供的Router方法创建路由
const listRouter = express.Router()

// 引入控制器方法

// 创建具体路由
listRouter.get('/list', (req, res) => {
    // res.send('列表')
    res.render('list')
})

// 导出路由
module.exports = listRouter