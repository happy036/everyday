const { query } = require('../db/query')
// 获取一级分类
module.exports.getCategorys = async () => {
    return await query('select*from category')
}
// 获取二级分类
module.exports.getSubcategory = async (id) => {
    return await query(`SELECT id, name, cate_id FROM subcategory WHERE cate_id = ${id}`)
}
// 添加二级分类
module.exports.addSubcategory = async (name, id) => {
    return await query(`INSERT INTO subcategory (name, cate_id) VALUES('${name}', ${id})`)
}
// 查询二级分类
module.exports.findCate = async (name) => {
    return await query('select * from subcategory where name = ?', [name])
}
// 添加一级分类
module.exports.addOnecategory = async (name) => {
    return await query(`INSERT INTO category (name) VALUES('${name}')`)
}
// 查询一级分类
module.exports.findOneCate = async (name) => {
    return await query('select * from category where name = ?', [name])
}
// 删除二级分类
module.exports.delSubCategory = async (id) => {
    return await query("DELETE FROM subcategory WHERE id=?", [id])
}
// 修改一级分类
module.exports.editOneCate = async (name, id) => {
    return await query(`UPDATE category SET name=? WHERE cate_id=${id}`, [name])
}
// 修改二级分类
module.exports.editSubCate = async (name, id) => {
    return await query(`UPDATE subcategory SET name=? WHERE id=${id}`, [name])
}