//引入express
const express = require('express')

//创建路由
const userRouter = express.Router()
const { showUser, editUser, findUsers } = require('../controller/userCtrl')

// 显示用户页面
userRouter.get('/', showUser)

// 获取所有用户
userRouter.get('/findAll', findUsers)
userRouter.get('/edit', editUser)

//导出
module.exports = userRouter;