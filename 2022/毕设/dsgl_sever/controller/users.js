const { register, findUserByName, login, getAllUsers, allUsersLimit, getIdUser, updateUser, deleteUser, searchUser, searchUserLimit } = require('../model/users')
const Joi = require('joi')
const { jwtSecret } = require('../config')
const jwt = require('jsonwebtoken');
// 注册
module.exports.register = async (ctx) => {
    const { username, password, mobile, email } = ctx.request.body
    // console.log(username, password, mobile)
    // 校验用户名 密码 手机号
    const schema = Joi.object({
        username: Joi.string().min(3).max(20).required(),
        password: Joi.string().pattern(/^[a-zA-Z0-9]{3,20}$/),
        repeat_password: Joi.ref('password'),
        //手机号正则  
        mobile: Joi.string().pattern(/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/)
    })
    // 校验结果对象
    const result = schema.validate({ username, password, mobile })
    if (result.error) {
        ctx.body = {
            status: false,
            msg: result.error.details[0].message
        }
        return
    }
    // 查看用户是否已注册
    const user = await findUserByName(username)
    if (user[0]) {
        ctx.body = {
            status: 1000,
            msg: '该用户已注册'
        }
    } else {
        await register(username, password, mobile, email)
        ctx.body = {
            status: 200,
            msg: '注册成功'
        }
    }
}
// 登录
module.exports.login = async (ctx) => {
    const { username, password } = ctx.request.body;
    const result = await login(username, password);
    if (result[0]) {
        const token = await jwt.sign({
            username,
            password
        }, jwtSecret, { expiresIn: '3h' });
        ctx.body = {
            code: 200,
            data: {
                token
            },
            msg: '登录成功'
        }
    } else {
        ctx.body = {
            code: 0,
            msg: '用户名或密码错误'
        }
    }
}
// 获取所有用户
module.exports.getAllUsers = async (ctx) => {
    let limitdata = {
        pagesize: ctx.request.query.pagesize,
        pagenum: ctx.request.query.pagenum
    }
    const limitData = await allUsersLimit(limitdata)
    const result = await getAllUsers()
    // 返回数据
    ctx.body = {
        status: 200,
        allUsersList: result,
        allUsersLimit: limitData
    }
}
// 根据id查询用户
module.exports.findUser = async (ctx) => {
    const { id } = ctx.request.query
    const result = await getIdUser(id)
    ctx.body = {
        status: 200,
        userList: result
    }
}
// 更新用户信息
module.exports.updateUserInfo = async (ctx) => {
    const { id, username, password, mobile, email, role_id } = ctx.request.body
    const result = await updateUser({ id, username, password, mobile, email, role_id })
    ctx.body = {
        status: 200,
        data: { msg: '更新成功' }
    }
}
// 删除用户
module.exports.delUser = async (ctx) => {
    const { id } = ctx.request.query
    const result = await deleteUser(id)
    ctx.body = {
        status: 200,
        msg: '删除用户成功'
    }
}
// 搜索用户
module.exports.serUser = async (ctx) => {
    const { username, pageSize, currentPage } = ctx.request.query
    // console.log(username)
    const result = await searchUser(username)
    const resultLimit = await searchUserLimit(username, pageSize, currentPage)
    // console.log(result)
    ctx.body = {
        status: 200,
        data: result,
        datalimit: resultLimit
    }
}