const router = require('koa-router')()
const { getAllRights, getRoleRights } = require('../controller/rights')
router.prefix('/rights')
// 获取所有权限
router.get('/getrights', getAllRights)
// 角色权限
router.get('/roleRights', getRoleRights)
module.exports = router