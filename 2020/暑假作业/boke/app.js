// 引包
const express = require('express')
const path = require('path')
const login = require('./routers/loginRouter')
const posts = require('./routers/postsRouter')
const postadd = require('./routers/postAddRouter')
const postedit = require('./routers/postsEditRouter')
const ejs = require('ejs')
const session = require('express-session')

// 创建服务器
const app = express()

// 配置静态资源
app.use(express.static(path.join(__dirname, 'public')));

// 把views设置为模板文件的根目录
app.set('views', path.join(__dirname, 'views'));

// 设置模板引擎为ejs
app.set('view engine', 'ejs');

// 设置中间件
app.use(express.urlencoded({ extended: false }))

// 配置session包
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000 * 10
    }
}))

// 拦截
app.use(function(req, res, next) {
    let url = req.originalUrl
    if (url != '/' && !req.session.user) {
        return res.redirect('/')
    }
    next()
})

//挂载路由
app.use(login)
app.use(posts)
app.use(postadd)
app.use(postedit)

//指定端口并启动服务
app.listen(3000, () => {
    console.log('请打开：http://localhost:3000')
})