const pool = require('../config/dbconfig')
module.exports.addone = (userObj, callback) => {
    let { uname, password, age, email, hobbies } = userObj;
    let sql = 'INSERT INTO users(uname,password,age,email,hobbies)VALUES (?,?,?,?,?)';
    pool.query(sql, [uname, password, age, email, hobbies], function(error, results) {
        if (error) throw error;
        callback(results);
    });
}