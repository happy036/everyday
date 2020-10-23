// 引入express框架
const express = require('express')

// 使用router方法提供的router方法来创建路由
const loginRouter = express.Router()

// 引入控制器方法
const { loginPage, loginUser } = require('../controllers/loginCtrl')

// 创建具体路由
// 显示登录页面
loginRouter.get('/login', loginPage)

// 处理登录业务
loginRouter.post('/login', loginUser)

// 导出路由
module.exports = loginRouter