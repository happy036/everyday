const router = require('koa-router')()
const { getgetRegister, Login } = require('../controller/users')
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.post('/register', getgetRegister)
router.post('/login', Login)

module.exports = router
