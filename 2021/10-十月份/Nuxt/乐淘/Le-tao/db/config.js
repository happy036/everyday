module.exports.config = {
    dev: {
        connectionLimit: 10,  // 最大连接数
        host: 'localhost',    // 主机
        user: 'root',   // 用户名
        password: 'root',  // 密码
        database: 'letao'  // 数据库名称
    },
    uat: {
        connectionLimit: 10,  // 最大连接数
        host: 'localhost',    // 主机
        user: 'root',   // 用户名
        password: 'root',  // 密码
        database: 'letao'  // 数据库名称
    },
    prd: {
        connectionLimit: 10,  // 最大连接数
        host: 'localhost',    // 主机
        user: 'root',   // 用户名
        password: 'root',  // 密码
        database: 'letao'  // 数据库名称
    }
}