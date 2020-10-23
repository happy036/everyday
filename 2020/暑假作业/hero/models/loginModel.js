// 引入数据库连接池
const pool = require('../config/dbconfig');

// 从数据库连接池中通过连接去查询数据库
module.exports.findUser = (username, callback) => {
    pool.query(`select * from users where username='${username}'`, function(error, results) {
        if (error) throw error;
        callback(results)
    });
}