const Joi = require('joi')
const { findUser } = require('../model/loginmodel')
module.exports.loginshow = (req, res) => {
    res.render('login')
}

module.exports.loginbut = (req, res) => {
    // console.log(req.body)
    let { email, password } = req.body;
    const schema = Joi.object().keys({
        email: Joi.string().min(6).max(100).email().required().error(new Error('邮箱或密码不正确')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{5,30}$/).required().error(new Error('邮箱或密码不正确'))
    })
    let result = Joi.validate({ email: email, password: password }, schema);
    if (result.error) {
        res.send({
                code: 500,
                message: result.error.message
            })
            // 抛出错误
        throw result.error;
    }
    findUser(email, function(result) {
        if (result.length !== 0) { // 邮箱存在
            if (result[0].password == password) { // 密码匹配

                req.session.user = result[0]
                console.log(req.session)
                return res.send({
                    code: 200,
                    message: "登录成功"
                })
            } else { // 密码不匹配
                return res.send({
                    code: 500,
                    message: "邮箱或密码错误"
                })
            }

        } else { // 邮箱不存在
            return res.send({
                code: 500,
                message: "邮箱或密码错误"
            })
        }
    })
}