// 引入express框架
const express = require('express')

// 使用express方法提供的Router方法创建路由
const detailRouter = express.Router()

// 引入控制器方法

// 创建具体路由
detailRouter.get('/detail', (req, res) => {
    // res.send('详情')
    res.render('detail')
})

// 导出路由
module.exports = detailRouter