const { getGoods, deleteGoods, addGoods, getOneGoods, updateOneGoods } = require('../model/goods')
module.exports.getList = async (ctx) => {
    const result = await getGoods()
    ctx.body = {
        status: 200,
        data: result
    }
}
module.exports.delGoods = async (ctx) => {
    const { id } = ctx.request.body
    const result = await deleteGoods(id)
    ctx.body = {
        status: 0,
        data: '删除商品成功'
    }
}
module.exports.addGoods = async (ctx) => {
    const { product_name, product_desc, product_price, product_img } = ctx.request.body
    const result = await addGoods(product_name, product_desc, product_price, product_img)
    ctx.body = {
        data: '添加商品成功',
        status: 0
    }
}
module.exports.getOne = async (ctx) => {
    const { id } = ctx.request.query
    // console.log(id)
    console.log(id, '1')
    const result = await getOneGoods(id)
    console.log(result)
    ctx.body = {
        status: 0,
        data: '商品获取成功',
        res: result
    }
}
module.exports.updateGoods = async (ctx) => {
    const { id, product_name, product_desc, product_price, product_img } = ctx.request.body
    const result = await updateOneGoods(id, product_name, product_desc, product_price, product_img)
    ctx.body = {
        data: '更新商品成功',
        status: 0
    }
}