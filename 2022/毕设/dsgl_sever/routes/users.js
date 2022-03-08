const router = require('koa-router')()
const { register, login, getAllUsers, findUser, updateUserInfo, delUser, serUser } = require('../controller/users')
router.prefix('/users')
// 用户注册
router.post('/register', register)
// 用户登录
router.post('/login', login)
// 获取所有用户
router.get('/allusers', getAllUsers)
// 根据id查询用户
router.get('/finduser', findUser)
// 更新用户信息
router.put('/updateuser', updateUserInfo)
// 删除用户
router.get('/delUser', delUser)
// 搜索用户
router.get('/serUser', serUser)
module.exports = router
