const express = require('express')
const loginRouter = express.Router()
const { loginshow, loginbut } = require('../controllers/loginctrl')
    // 显示登录页面
loginRouter.get('/', loginshow)

// 处理登录业务
loginRouter.post('/login', loginbut)
module.exports = loginRouter