const router = require('koa-router')()
const { getGoodsList, searchGoods, deleteGoods, updategoodInfo, uploadImages, findGood, addGoods } = require('../controller/goods')
router.prefix('/goods')
// 获取所有商品
router.get('/goodsList', getGoodsList)
// 查找商品
router.get('/findGoods', searchGoods)
// 删除商品
router.get('/delgood', deleteGoods)
// 更新商品
router.post('/updategood', updategoodInfo)
// 根据Id查找商品
router.get('/findGood', findGood)
// 添加商品
router.post('/addGood', addGoods)
module.exports = router