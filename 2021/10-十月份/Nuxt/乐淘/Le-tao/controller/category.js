const { oneCategory, twoCategory } = require('../model/category')
// 一级分类
module.exports.oneCategory = async (ctx) => {
    let result = await oneCategory()
    // 返回数据
    ctx.body = {
        status: 200,
        oneCategory: result
    }
}
// 二级分类
module.exports.twoCategory = async (ctx) => {
    // 获取请求参数id    (你点击了一级分类商品中具体哪一个商品)
    const { id } = ctx.request.query
    console.log(id, 'id')
    // 数据查询交给model层
    const result = await twoCategory(id)
    ctx.body = {
        status: 200,
        twoCategory: result
    }
}