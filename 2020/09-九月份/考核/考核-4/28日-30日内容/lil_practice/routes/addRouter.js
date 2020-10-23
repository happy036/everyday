// 引入express框架
const express = require('express')

// 使用express方法提供的Router方法来创建路由
const addRouter = express.Router()

// 引入控制器方法
const { addUsers } = require('../controllers/addCtrl')

// 创建具体路由
addRouter.post('/add', addUsers)

// 导出路由
module.exports = addRouter