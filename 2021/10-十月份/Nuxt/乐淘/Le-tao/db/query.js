var mysql = require('mysql');
const { config } = require('./config')
// 配置信息
const dbConfig = config[process.env.DB_ENV]
// 连接数据库配置信息
var pool = mysql.createPool(dbConfig)

// 封装sql查询函数
module.exports.query = (sql, values) => {
    return new Promise((resolve, reject) => {
        // 开始连接数据
        pool.getConnection(function (err, connection) {
            if (err) throw err; // not connected!

            // Use the connection
            connection.query(sql, values, function (error, results, fields) {
                // When done with the connection, release it.
                connection.release();

                // Handle error after the release.
                if (error) throw error;

                // Don't use the connection here, it has been returned to the pool.
                resolve(results);
            });
        });
    });
}