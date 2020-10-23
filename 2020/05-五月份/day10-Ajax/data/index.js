//引入包
const fs = require('fs')
const path = require('path')
const database = require('./backup.json')


//导出
module.exports = {
    get: () => {
        return database
    },
    getById: (id) => {
        // console.log(id)
        // 数组.find() 遍历数组 找到 某一个元素的id和传入的id一样 就把这个元素返回
        return database.find((item) => {
            // 如果数组的元素中的id和传入的id一样 那么就返回这个元素
            return item.id === id;
        })

        // console.log(info);
    },
    //添加用户
    add: (member) => {
        database.unshift(member)
        let json = JSON.stringify(database)
            //带sync的是同步的
        fs.writeFileSync(path.join(__dirname, 'backup.json'), json)
    },

    //删除用户
    deleteItem: (id) => {
        //遍历数据库中的数据，看看哪个数据的id和传来的数据的id一样
        let ids = database.find((item) => {
            return item.id === id
        })

        //如果一样获取数据索引
        database.splice(database.indexOf(ids), 1)
        let json = JSON.stringify(database)
        fs.writeFileSync(path.join(__dirname, 'backup.json'), json)
        return 'ok'
    },

    //分页获取数据
    getByPage: (last, limit) => {
        // console.log(last, limit)
        //遍历数组找到数组中和last一样id的数据
        const exist = database.find((item) => item.id === last)

        //判断数据是否存在
        const skip = exist ? database.indexOf(exist) : -1
        return database.splice(skip + 1, limit)
    }
}