const router = require('koa-router')()
const { register, login } = require('../controller/users')
router.prefix('/users')
// 用户注册
router.post('/register', register)
// 登录
router.post('/login', login)
module.exports = router
