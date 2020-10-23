// 引入模型
const { findAll, deleteHero, findhero } = require('../models/indexModel')
const { editHero } = require('../models/editModels')
    //显示页面
module.exports.indexshow = (req, res) => {
    res.render('index')
}

// 展示英雄信息
module.exports.indexfind = (req, res) => {
    findAll(function(results) {
        // console.log(results)
        res.send({
            code: 200,
            message: '用户信息获取成功',
            data: results
        })
    })
}

// 删除英雄
module.exports.indexdelete = (req, res) => {
    let { id } = req.body
    deleteHero(id, function(results) {
        if (results.affectedRows == 1) {
            res.send({
                code: 200,
                message: "用户删除成功"
            })
        }
    })
}

// 查找英雄
module.exports.indexhero = (req, res) => {
    let { hname } = req.query
    findhero(hname, function(results) {
        if (results.length != 0) {
            res.send({
                code: 200,
                message: '查询成功',
                data: results
            })
        } else {
            res.send({
                code: 500,
                message: '查询失败'
            })
        }
    })
}


//显示编辑页面