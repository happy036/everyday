const router = require('koa-router')()
const { gridlist, swipeList, sportsList } = require('../controller/index')
// 首页宫格数据
router.get('/gridlist', gridlist)
// 轮播图接口
router.get('/banners', swipeList)
// 运动专区接口
router.get('/sports', sportsList)
module.exports = router
