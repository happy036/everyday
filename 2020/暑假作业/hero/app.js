//引包
const express = require('express')

// 导入path模块
const path = require('path')

// 导入首页路由
const index = require('./routes/indexrouter')

const add = require('./routes/addrouter')

const edit = require('./routes/editrouter')

const login = require('./routes/loginrouter')

// 导入ejs包
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

// 配置中间件
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

// 路由拦截
app.use(function(req, res, next) {
    // 获取url
    let url = req.originalUrl;
    if (url != '/login' && !req.session.user) {
        // 重定向到登录页
        return res.redirect("/login");
    }
    next();
})

//挂载路由
app.use(index)

app.use(add)

app.use(edit)

app.use(login)

// 指定端口并启动服务
app.listen(3000, () => {
    console.log('请打开：http://localhost:3000')
})