const Article = require('../models/article')
const mongooseSex = require('mongoose-sex-page')
require('../models/user')

//获取文章列表
module.exports.getArticle = async(req, res) => {
    // Article.find().then(data => {
    //     console.log(data)
    // })
    let result = await mongooseSex(Article).page(1).size(6).display().find().populate("author").exec()
        // let result = await Article.find()

    res.send({
        code: 200,
        msg: '数据获取成功',
        data: result,
    })
}

//获取文章详情
module.exports.getDetai = async(req, res) => {
    let result = await Article.findOne({ _id: req.query.id }).populate('author')
    res.send({
        code: 200,
        msg: '数据获取成功',
        data: result
    })
}