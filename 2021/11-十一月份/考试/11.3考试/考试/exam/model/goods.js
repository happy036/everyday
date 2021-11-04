const { query } = require("../db/query")
module.exports.getGoods = async () => {
    return await query('select * from product')
}
module.exports.deleteGoods = async (id) => {
    return await query('DELETE FROM product WHERE id =?', [id])
}
module.exports.addGoods = async (product_name, product_desc, product_price, product_img) => {
    return await query(`INSERT INTO product (product_name, product_desc, product_price, product_img) VALUES('${product_name}', '${product_desc}', '${product_price}', '${product_price}')`)
}
module.exports.getOneGoods = async (id) => {
    return await query('SELECT product_name, product_desc, product_price, product_img FROM product WHERE id =?', [id])
}
module.exports.updateOneGoods = async (id, product_name, product_desc, product_price, product_img) => {
    return await query(`UPDATE product SET product_name='${product_name}', product_desc='${product_desc}', product_price='${product_price}', product_img='${product_img}' WHERE id=?`, [id])
}