const { query } = require('../db/query')
module.exports.getOrders = async () => {
    return await query('select * from order_goodsinfo')
}
// 分页
module.exports.getOrdersLimit = async (pagesize, pagenum) => {
    console.log(pagesize, pagenum)
    return await query(`select * from order_goodsinfo order by id limit ${(pagenum - 1) * pagesize},${pagesize}`)
}
// 搜索订单
module.exports.searchOrders = async (search) => {
    return await query(`SELECT * FROM order_goodsinfo WHERE name LIKE  \'%${search}%\'`)
}
// 搜索订单分页
module.exports.searchOrderslimit = async (search, pagesize, pagenum) => {
    return await query(`SELECT * FROM order_goodsinfo WHERE name LIKE  \'%${search}%\' order by id limit ${(pagenum - 1) * pagesize},${pagesize}`)
}