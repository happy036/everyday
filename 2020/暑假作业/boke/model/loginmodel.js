// 引入数据库连接池
const pool = require('../config/dbconfig');
module.exports.findUser = (email, callback) => {
    pool.query(`select * from user where username='${email}'`, function(error, results) {
        if (error) throw error;
        callback(results);
    });
}