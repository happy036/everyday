const { query } = require("../db/query")

module.exports.getUsers = async (username, password) => {
    return await query(`INSERT INTO user (username, password) VALUES('${username}', '${password}')`)
}
module.exports.findUsers = async (username) => {
    return await query('SELECT username FROM user WHERE username=?', [username])
}
module.exports.loginModel = async (username, password) => {
    return await query('SELECT username, password FROM user WHERE username=?&password=?', [username, password])
}