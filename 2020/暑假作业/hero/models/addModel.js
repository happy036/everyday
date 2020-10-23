const pool = require('../config/dbconfig')
module.exports.addying = (heroObj, callback) => {
    let { hname, nickname, skill } = heroObj;
    let sql = 'INSERT INTO hero(hname,nickname,skill)VALUES (?,?,?)';
    pool.query(sql, [hname, nickname, skill], function(error, results) {
        if (error) throw error;
        callback(results);
    });
}