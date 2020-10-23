const { addone } = require('../models/addModel')
module.exports.addUsers = (req, res) => {
    if (!req.body.hobbies) {
        req.body.hobbies = '';
    } else if (typeof(req.body.hobbies) != 'string' && req.body.hobbies.length >= 1) {
        req.body.hobbies = req.body.hobbies.join(',')
    }
    let userData = {
        uname: req.body.username,
        password: req.body.password,
        age: req.body.age,
        email: req.body.email,
        hobbies: req.body.hobbies,
    }
    addone(userData, function(results) {
        // console.log(results)
        if (results.affectedRows == 1) {
            res.send({
                code: 200,
                message: '用户添加成功'
            })
        }
    })
}