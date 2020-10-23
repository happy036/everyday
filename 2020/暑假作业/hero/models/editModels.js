const pool = require('../config/dbconfig')


module.exports.editHero = (id, callback) => {
    let sql = `SELECT * FROM hero WHERE id='${id}'`;
    pool.query(sql, function(error, results) {
        if (error) throw error;
        callback(results);
    });
}