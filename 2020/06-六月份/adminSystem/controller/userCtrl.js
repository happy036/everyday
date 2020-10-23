// 引入用户集合
const User = require('../model/dbUser')

// 引入mongeoose-sex-page
const mongooseSexPage = require('mongoose-sex-page')

// 显示用户页面
module.exports.showUser = (req, res) => {
    // console.log(req.session)
    // res.send("首页")
    //判断一下 req.session.username
    if (!req.session.username) {
        // 如果用户强行进入 /user这个路由 如果没有用户名 我们应该让页面跳转到登录页面让用户登录
        res.redirect('/')
    } else {
        //如果有跳转到用户列表页面 当我们访问路由localhost:3000/的时候，我想让页面跳到别的页面 这叫重定向 redirect(地址)
        res.render('user')
    }
}


//查找所有用户
module.exports.findUsers = async(req, res) => {
    // let pageNum = req.query.pageNum
    let { pageNum, pageSize } = req.query
    console.log(pageNum, pageSize)
    let result = await mongooseSexPage(User).page(parseInt(pageNum)).size(parseInt(pageSize)).display(5).find().exec()
        // console.log(result)
    res.status(200).send({
        code: 200,
        msg: '数据获取成功',
        data: result
    })
}

// 显示用户编辑页面
module.exports.editUser = (req, res) => {
    // res.send("文章编辑")
    res.render('user-edit')
}