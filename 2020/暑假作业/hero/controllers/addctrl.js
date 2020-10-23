const { addying } = require("../models/addModel")

module.exports.addshow = (req, res) => {
    res.render('add')
}

module.exports.addup = (req, res) => {
    // console.log(req.body)
    let heroData = {
        hname: req.body.name,
        nickname: req.body.nickname,
        skill: req.body.skill
    }
    addying(heroData, function(results) {
        // console.log(results)
        if (results.affectedRows == 1) {
            res.send({
                code: 200,
                message: '用户添加成功'
            })
        }
    })
}