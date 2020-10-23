//引入express
const express = require('express')

//创建路由
const articleRouter = express.Router()
const { showArticle, editArticle } = require('../controller/articleCtrl')
articleRouter.get('/', showArticle)

articleRouter.get('/edit', editArticle)

//导出
// module.exports = articleRouter;
module.exports = articleRouter