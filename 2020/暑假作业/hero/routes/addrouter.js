// 引入express框架
const express = require('express')

// 使用router方法提供的router方法来创建路由
const addRouter = express.Router()

// 引入控制器方法
const { addshow, addup } = require('../controllers/addctrl')

// 创建具体路由
addRouter.get('/add', addshow)

// 添加英雄
addRouter.post('/add', addup)

// 导出路由
module.exports = addRouter