const { getCategorys, getSubcategory, addSubcategory, findCate, findOneCate, addOnecategory, delSubCategory, editOneCate, editSubCate } = require("../model/category")

// 获取所有分类
module.exports.getCategorysInfo = async (ctx) => {
    const result = await getCategorys()
    for (let i = 0; i < result.length; i++) {
        const subresult = await getSubcategory(result[i].cate_id)
        result[i].children = subresult
    }
    ctx.body = {
        data: result
    }
}
// 添加二级分类
module.exports.plusSubcategory = async (ctx) => {
    const { name, id } = ctx.request.query
    const cateName = await findCate(name)
    if (cateName[0]) {
        ctx.body = {
            status: 1000,
            msg: '该分类已存在'
        }
    } else {
        const result = await addSubcategory(name, id)
        ctx.body = {
            status: 200,
            msg: '添加二级分类成功'
        }
    }
}
// 添加一级分类
module.exports.plusOnecategory = async (ctx) => {
    const { name } = ctx.request.query
    console.log(name)
    const findCate = await findOneCate(name)
    if (findCate[0]) {
        ctx.body = {
            status: 1000,
            msg: '该分类已存在'
        }
    } else {
        const result = await addOnecategory(name)
        ctx.body = {
            status: 200,
            msg: '添加一级分类成功'
        }
    }
}
// 删除二级分类
module.exports.deleteSubCategory = async (ctx) => {
    const { id } = ctx.request.query
    const result = await delSubCategory(id)
    ctx.body = {
        status: 200,
        msg: '删除成功'
    }
}
// 修改一级分类
module.exports.editOneCateInfo = async (ctx) => {
    const { name, cate_id } = ctx.request.query
    const result = await editOneCate(name, cate_id)
    ctx.body = {
        status: 200,
        msg: '修改一级分类成功'
    }
}
// 修改二级分类
module.exports.editSubCateInfo = async (ctx) => {
    const { name, id } = ctx.request.query
    const result = await editSubCate(name, id)
    ctx.body = {
        status: 200,
        msg: '修改二级分类成功'
    }
}
// 获取所有一级分类
module.exports.getOneCate = async (ctx) => {
    const result = await getCategorys()
    ctx.body = {
        data: result
    }
}