const { getOrders, getOrdersLimit, searchOrderslimit, searchOrders } = require("../model/order")
// 获取所有订单
module.exports.getAllOrders = async (ctx) => {
    const { pagesize, pagenum } = ctx.request.query
    console.log(pagesize, pagenum)
    const result = await getOrders()
    const limitData = await getOrdersLimit(pagesize, pagenum)
    ctx.body = {
        data: result,
        limitData: limitData
    }
}
// 搜索订单
// 搜索商品
module.exports.searchOrders = async (ctx) => {
    console.log(ctx.request.query)
    const { search, pageSize, currentPage } = ctx.request.query
    const result = await searchOrders(search)
    const resultLimt = await searchOrderslimit(search, pageSize, currentPage)
    ctx.body = {
        status: 200,
        data: result,
        datalimit: resultLimt
    }
}