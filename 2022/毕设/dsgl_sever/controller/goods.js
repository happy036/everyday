const { getGoods, goodsLimit, searchgoods, deletegoods, updateGood, getGoodId, addGood } = require("../model/goods")

// 获取所有商品
module.exports.getGoodsList = async (ctx) => {
    let limitdata = {
        pagesize: ctx.request.query.pagesize,
        pagenum: ctx.request.query.pagenum
    }
    const limitData = await goodsLimit(limitdata)
    const result = await getGoods()
    ctx.body = {
        status: 200,
        data: result,
        getlimitData: limitData
    }
}
// 搜索商品
module.exports.searchGoods = async (ctx) => {
    const { search, pageSize, currentPage } = ctx.request.query
    const result = await searchgoods(search, pageSize, currentPage)
    ctx.body = {
        status: 200,
        data: result
    }
}
// 删除商品
module.exports.deleteGoods = async (ctx) => {
    const { id } = ctx.request.query
    console.log(id)
    const result = await deletegoods(id)
    ctx.body = {
        status: 200,
        msg: '删除商品成功'
    }
}
// 更新商品信息
module.exports.updategoodInfo = async (ctx) => {
    const { id, name, desc, price, inventory, sales_volume, effective, goodsimg } = ctx.request.body
    const result = await updateGood({ id, name, desc, price, inventory, sales_volume, effective, goodsimg })
    ctx.body = {
        status: 200,
        data: { msg: '更新成功' }
    }
}
// 根据Id查找商品
module.exports.findGood = async (ctx) => {
    const { id } = ctx.request.query
    const result = await getGoodId(id)
    ctx.body = {
        status: 200,
        data: result
    }
}
// 添加商品
module.exports.addGoods = async (ctx) => {
    const { name, desc, price, inventory, sales_volume, effective, cate_id, goodsimg } = ctx.request.body
    // console.log(name, desc, price, inventory, sales_volume, effective, cate_id)
    const result = await addGood(name, desc, price, inventory, sales_volume, effective, cate_id, goodsimg)
    ctx.body = {
        status: 200
    }
}