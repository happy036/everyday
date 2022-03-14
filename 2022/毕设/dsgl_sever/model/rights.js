const { query } = require('../db/query')
// 获取所有权限
module.exports.getRights = async () => {
    return await query('SELECT * FROM permission')
}
// 所有权限分页数据
module.exports.getRightsLimit = async (pagesize, pagenum) => {
    return await query(`SELECT * FROM permission order by permission_id limit ${(pagenum - 1) * pagesize},${pagesize}`)
}
// 角色权限
module.exports.roleRights = async (id) => {
    return await query(`select * from permission p inner join role_permission r where p.permission_id = r.permission_id and r.role_id = ${id}`)
}
// 所有角色
module.exports.getRole = async () => {
    return await query('SELECT * FROM `role`')
}