const { getUsers, findUsers, loginModel } = require('../model/users')
module.exports.getgetRegister = async (ctx) => {
    const { username, password } = ctx.request.body
    // console.log(ctx.request.body)
    const results = await findUsers(username)

    if (results[0]) {
        ctx.body = {
            status: 0,
            data: '用户已注册'
        }
        return
    }
    const result = await getUsers(username, password)
    ctx.body = {
        status: 200,
        data: '用户注册成功'
    }
}
module.exports.Login = async (ctx) => {
    const { username, password } = ctx.request.body
    const result = await loginModel(username, password)
    ctx.body = {
        status: 200,
        data: '用户登录成功',
    }
}