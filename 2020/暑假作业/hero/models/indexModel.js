const pool = require('../config/dbconfig')
module.exports.findAll = (callback) => {
    pool.query('SELECT * FROM hero;', (error, results) => {
        if (error) throw error
        callback(results)
    })
}

// 删除英雄
module.exports.deleteHero = (id, callback) => {
    let sql = `DELETE FROM hero WHERE id='${id}'`;
    pool.query(sql, function(error, results) {
        if (error) throw error;
        callback(results);
    });
}

// 查找英雄
module.exports.findhero = (hname, callback) => {
    let sql = `SELECT * FROM hero WHERE hname='${hname}'`
    pool.query(sql, function(error, results) {
        if (error) throw error;
        callback(results);
    });
}