const { query } = require('../db/query')
// 注册
module.exports.register = async (username, password, mobile, email) => {
    return await query(`insert into user (username, password, mobile,email,role_id) values( "${username}", "${password}", "${mobile}", "${email}",'1')`)
}
// 根据用户名查询用户
module.exports.findUserByName = async (username) => {
    return await query('select * from user where username = ?', [username]);
}
// 登录
module.exports.login = async (username, password) => {
    return await query(`select * from user where username = ?  and password = ?`, [username, password]);
}
// 获取所有用户
module.exports.getAllUsers = async () => {
    return await query(`select*from user`)
}
// 用户列表分页
module.exports.allUsersLimit = async ({
    pagesize, pagenum
}) => {
    return await query(`select id,username,mobile,role_id,email from user order by id limit ${(pagenum - 1) * pagesize},${pagesize}`)
}
// 根据id查询用户
module.exports.getIdUser = async (id) => {
    return await query('select * from user where id= ?', [id])
}
// 更新用户信息
module.exports.updateUser = async ({ id, username, mobile, email, role_id }) => {
    return await query(`UPDATE user
SET username=?, mobile=?, email=?, role_id=? WHERE id=${id}`, [username, mobile, email, role_id])
}
// 删除用户
module.exports.deleteUser = async (id) => {
    return await query("DELETE FROM user WHERE id=?", [id])
}
// 搜索用户
module.exports.searchUser = async (username) => {
    return await query(`SELECT * FROM user WHERE username LIKE  \'%${username}%\'`)
}
// 搜索用户分页
module.exports.searchUserLimit = async (username, pagesize, pagenum) => {
    return await query(`SELECT * FROM user WHERE username LIKE  \'%${username}%\' order by id limit ${(pagenum - 1) * pagesize},${pagesize}`)
}