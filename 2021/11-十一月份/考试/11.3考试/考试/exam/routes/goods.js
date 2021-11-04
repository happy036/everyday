const router = require('koa-router')()
const { getList, delGoods, addGoods, getOne, updateGoods } = require('../controller/goods')
router.prefix('/goods')

router.get('/list', getList)
router.post('/delete', delGoods)
router.post('/add', addGoods)
router.get('/getone', getOne)
router.post('/update', updateGoods)
module.exports = router
