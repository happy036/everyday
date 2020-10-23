// 导入express框架
const express = require('express');
// 导入path模块
const path = require('path');

//引入登陆页面陆由
const indexRouter = require('./routes/indexRouter')

//引入关于用户的路由
const userRouter = require('./routes/userRouter')

//引入关于文章的路由
const articleRouter = require('./routes/articleRouter')

//引入express-session
const session = require('express-session');
const app = express()

//设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')))

//模板设置
//用的模板引擎是art-template
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

//post请求处理中间件
app.use(express.urlencoded({ extended: false }))

//连接数据库
require('./model/dbConnect')

//设置express-session
//cookie的生命周期 如果不设置cookie的生命周期 它的生命周期就是浏览器打开出现 浏览器结束消失
app.use(session({
    // keyboard cat就是一个普通的字符串
    // 密钥 sercet 在这里表示的是签名（必须的）
    secret: 'keyboard cat',
    // maxAge就是cookie在浏览器中存在的生命周期，单位是毫秒
    cookie: { maxAge: 60000 }
}))

//处理请求（挂载路由）
app.use(indexRouter)
app.use('/user', userRouter)
app.use('/article', articleRouter)

// 指定端口启动服务
app.listen(3000, () => {
    console.log("服务器已启动,请打开 http://localhost:3000");
})