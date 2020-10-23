// 引入express框架
const express = require('express')

// 使用router方法提供的router方法来创建路由
const editRouter = express.Router()

// 引入控制器方法


// 创建具体路由
editRouter.get('/edit', (req, res) => {
    res.render('edit')
})

// 导出路由
module.exports = editRouter