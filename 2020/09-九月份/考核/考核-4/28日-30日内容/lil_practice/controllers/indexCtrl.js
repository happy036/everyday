const { findUsers, deleteOne, editOne, updateUser } = require('../models/indexModel')
    // 显示首页
module.exports.indexPage = (req, res) => {
    res.render('index')
}

// 处理业务
module.exports.indexShow = (req, res) => {
    findUsers(function(results) {
        // console.log(results)
        res.send({
            code: 200,
            message: '成功',
            data: results
        })
    })
}

// 删除
module.exports.deleteUser = (req, res) => {
    // console.log(req.body)
    let { id } = req.body
    deleteOne(id, function(results) {
        if (results.affectedRows == 1) {
            res.send({
                code: 200,
                message: '用户删除成功'
            })
        }
    })
}

// 修改
module.exports.editUser = (req, res) => {
    // console.log(req.body)
    let { id } = req.body
    editOne(id, function(results) {
        // console.log(results)
        results[0].hobbies = results[0].hobbies.split(',')
        if (results) {
            res.status(200).send({
                code: 200,
                msg: '用户查询成功',
                obj: results[0]
            })
        }
    })
}

// 修改2
module.exports.upadatuser = (req, res) => {
    // console.log(req.body)
    if (!req.body.hobbies) {
        req.body.hobbies = '';
    } else if (typeof(req.body.hobbies) != 'string' && req.body.hobbies.length >= 1) {
        req.body.hobbies = req.body.hobbies.join(',')
    }
    let userobj = {
        uname: req.body.username,
        age: req.body.age,
        password: req.body.password,
        email: req.body.email,
        hobbies: req.body.hobbies || req.body.hobbies.join(),
    }
    updateUser(req.body.id, userobj, function(results) {
        if (results.affectedRows == 1) {
            res.send({
                code: 200,
                msg: '数据修改成功'
            })
        }
    })
}