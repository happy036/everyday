const { getRights, getRightsLimit, roleRights, getRole } = require("../model/rights")
// 获取所有权限
module.exports.getAllRights = async (ctx) => {
    const { pageSize, currentPage } = ctx.request.query
    console.log(pageSize, currentPage)
    let result = await getRights()
    let resultLimit = await getRightsLimit(pageSize, currentPage)
    ctx.body = {
        status: 200,
        data: result,
        dataLimit: resultLimit
    }
}
// 角色权限
module.exports.getRoleRights = async (ctx) => {
    // 角色
    let role = await getRole()
    // 权限树方法
    const getData = async (id) => {
        let rights = await roleRights(id)
        let levelArr1 = []
        let levelArr2 = []
        let levelArr3 = []
        for (let i = 0; i < rights.length; i++) {
            if (rights[i].level == 1) {
                rights[i].children = []
                levelArr1.push(rights[i])
            } else if (rights[i].level == 2) {
                rights[i].children2 = []
                levelArr2.push(rights[i])
            } else {
                levelArr3.push(rights[i])
            }
        }
        for (let i = 0; i < levelArr3.length; i++) {
            for (let j = 0; j < levelArr2.length; j++) {
                if (levelArr3[i].pid == levelArr2[j].permission_id) {
                    levelArr2[j].children2.push(levelArr3[i])
                }
            }
        }
        for (let i = 0; i < levelArr2.length; i++) {
            for (let j = 0; j < levelArr1.length; j++) {
                if (levelArr2[i].pid == levelArr1[j].permission_id) {
                    levelArr1[j].children.push(levelArr2[i])
                }
            }
        }
        return levelArr1
    }

    // 循环获取全部数据
    for (let i = 0; i < role.length; i++) {
        const result = await getData(role[i].role_id)
        role[i].tree = result
    }
    ctx.body = {
        status: 200,
        data: role
    }
}