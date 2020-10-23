//引入express
const express = require('express')


//引入控制器代码
let { show, login, logout } = require('../controller/indexCtrl')

//创建路由
const indexRouter = express.Router()

//显示后台系统首页
indexRouter.get('/', show)

//后台管理系统登录
indexRouter.post('/api/login', login)

//后台管理系统退出
indexRouter.get('/api/logout', logout)

//导出
module.exports = indexRouter;