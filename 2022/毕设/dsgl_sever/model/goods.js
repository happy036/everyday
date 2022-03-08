const { query } = require('../db/query')
// 获取所有商品
module.exports.getGoods = async () => {
    return await query('select*from goods')
}
// 分页
module.exports.goodsLimit = async ({
    pagesize, pagenum
}) => {
    return await query(`select * from goods order by id limit ${(pagenum - 1) * pagesize},${pagesize}`)
}
// 搜索商品
module.exports.searchgoods = async (search, pagesize, pagenum) => {
    // console.log(search)
    return await query(`SELECT * FROM goods WHERE name LIKE  \'%${search}%\' order by id limit ${(pagenum - 1) * pagesize},${pagesize}`)
}
// 删除商品
module.exports.deletegoods = async (id) => {
    return await query("DELETE FROM goods WHERE id=?", [id])
}
// 更新商品信息
module.exports.updateGood = async ({ id, name, desc, price, inventory, sales_volume, effective, goodsimg }) => {
    return await query('UPDATE goods SET name=?, `desc`=?, price=?, inventory=?,sales_volume=?,effective=?,goodsimg=? WHERE id=?', [name + '', desc + '', price, inventory, sales_volume, effective, goodsimg + '', id])
}
// 根据Id查找商品
module.exports.getGoodId = async (id) => {
    return await query('select * from goods where id= ?', [id])
}
// 添加商品
module.exports.addGood = async (name, desc, price, inventory, sales_volume, effective, cate_id, goodsimg) => {
    return await query(`INSERT INTO goods (name,\`desc\`,price,inventory,sales_volume,effective,cate_id,goodsimg) VALUES( '${name}', '${desc}', '${price}', '${inventory}', '${sales_volume}', '${effective}','${cate_id}','${goodsimg}')`)
}