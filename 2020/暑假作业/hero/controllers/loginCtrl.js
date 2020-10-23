const Joi = require('joi')

// 引入模型
const { findUser } = require('../models/loginModel')

// 显示登录页面
module.exports.loginPage = (req, res) => {
    res.render('login')
}

// 处理登录业务
module.exports.loginUser = (req, res) => {
    // console.log(req.body)

    // 获取前端传来的数据
    let { username, password } = req.body

    //后端数据校验
    const schema = Joi.object().keys({
        username: Joi.string().min(0).max(10).required().error(new Error('用户名或密码不正确')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{5,30}$/).required().error(new Error('用户名或密码不正确')),
    })
    let result = Joi.validate({ username: username, password: password }, schema)
        // console.log(result)
    if (result.error) {
        res.send({
            code: 500,
            message: result.error.message,
        })

        // 抛出错误
        throw result.error;
    }

    // 数据库数据对比
    findUser(username, function(result) {
        // console.log(result)
        if (result.length !== 0) {
            if (result[0].password == password) {
                // console.log(req.session)
                req.session.user = result[0]
                res.send({
                    code: 200,
                    message: '登录成功'
                })
            } else {
                res.send({
                    code: 500,
                    message: '用户名或密码错误'
                })
            }
        } else {
            res.send({
                code: 500,
                message: '用户名或密码错误'
            })
        }
    })
}