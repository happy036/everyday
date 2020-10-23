// 引入express框架
const express = require('express')

// 使用router方法提供的router方法来创建路由
const indexRouter = express.Router()

// 引入控制器方法
const { indexshow, indexfind, indexdelete, indexhero } = require('../controllers/indexctrl')

// 创建具体路由
// 显示页面
indexRouter.get('/', indexshow)

// 获取英雄
indexRouter.get('/find', indexfind)

// 删除英雄
indexRouter.put('/delete', indexdelete)

// 查找英雄
indexRouter.get('/findhero', indexhero)

// 导出路由
module.exports = indexRouter