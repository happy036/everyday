// 引入express框架
const express = require('express')

// 使用express方法提供的Router方法来创建路由
const indexRouter = express.Router()

// 引入控制器方法
const { indexPage, indexShow, deleteUser, editUser, upadatuser } = require('../controllers/indexCtrl')

// 创建具体路由
// 显示首页
indexRouter.get('/', indexPage)

// 处理业务
indexRouter.get('/show', indexShow)

// 删除
indexRouter.delete('/deleteUser', deleteUser)

// 修改数据
indexRouter.post('/edit', editUser)

//修改数据2
indexRouter.post('/upadatuser', upadatuser)

// 导出路由
module.exports = indexRouter