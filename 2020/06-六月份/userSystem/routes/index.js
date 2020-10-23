//导入express
const express = require('express')

//创建路由
const router = express.Router()

//引入controller文件(结构赋值)
const { getArticle, getDetai } = require('../controller/indexCtrl')

//显示首页列表数据
router.get('/api/article', getArticle)

//显示文章详情数据
router.get('/api/detail', getDetai)

module.exports = router