const pool = require('../config/dbconfig')

// 查询用户信息
module.exports.findUsers = (callback) => {
    let sql = 'SELECT * FROM users'
    pool.query(sql, function(error, results) {
        if (error) throw error;
        callback(results)
    });
}

// 删除用户
module.exports.deleteOne = (id, callback) => {
    let sql = 'DELETE FROM users WHERE uid=' + id;
    pool.query(sql, function(error, results) {
        if (error) throw error;
        callback(results)
    });
}

// 修改用户
module.exports.editOne = (id, callback) => {
    let sql = 'SELECT * FROM users WHERE uid=' + id;
    pool.query(sql, function(error, results) {
        if (error) throw error;
        callback(results)
    });
}

module.exports.updateUser = (userId, userobj, callback) => {
    pool.query(`update users set ? where uid = '${userId}'`, userobj, function(error, results) {
        if (error) throw error;
        callback(results)
    });
}