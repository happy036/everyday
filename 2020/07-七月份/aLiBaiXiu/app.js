// 引包
const express = require('express')

// 导入path
const path = require('path')

// 导入用户系统首页路由
const index = require('./routes/indexRouter')

// 导入用户系统列表路由
const list = require('./routes/listRouter')

// 导入用户系统详情路由
const detail = require('./routes/detailRouter')

// 导入ejs包
// const ejs = require('ejs')

// 导入后台系统登录路由
const adminLogin = require('./routes/adminLoginRouter');
// 导入后台系统首页路由
const adminIndex = require('./routes/adminIndexRouter');
// 导入后台系统文章路由
const adminPosts = require('./routes/adminPostsRouter');
// 导入后台系统评论路由
const adminComments = require('./routes/adminCommentsRouter');
// 导入后台系统用户路由
const adminUsers = require('./routes/adminUsersRouter');
// 导入后台系统设置路由
const adminSettings = require('./routes/adminSettingsRouter');

// 创建服务器
const app = express()

// 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')))

// 把views设置为模板文件的根目录
app.set('views', path.join(__dirname, 'views'));

// 设置模板引擎为ejs
app.set('view engine', 'ejs');

// 中间件
app.use(express.urlencoded({ extended: false }));

// 挂载路由
// 挂载首页路由
app.use(index)

// 挂载列表路由
app.use(list)

//挂载详情路由
app.use(detail)

//  挂载登录路由
app.use('/admin', adminLogin);
//  挂载首页路由
app.use('/admin', adminIndex);
//  挂载文章路由
app.use('/admin', adminPosts);
//  挂载评论路由
app.use('/admin', adminComments);
//  挂载用户路由
app.use('/admin', adminUsers);
//  挂载设置路由
app.use('/admin', adminSettings);
// 指定端口并启动服务
app.listen(3000, () => {
    console.log('请打开：http://localhost:3000')
})