const { getAllOrders, searchOrders } = require('../controller/order')

const router = require('koa-router')()
router.prefix('/orders')
router.get('/getOrders', getAllOrders)
router.get('/findOrders', searchOrders)
module.exports = router