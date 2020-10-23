//引入express
const express = require('express')
const path = require('path')
    // const artTemplate = require('express-art-template')

//创建服务器
const app = express()

app.use(express.static(path.join(__dirname, 'public')))


//设置模板引擎
//在应用中使用art-template模板引擎 后缀是art
app.engine('html', require('express-art-template'))

//设置模板，模板存放目录名字叫views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

app.locals.user = {
    name: '张三',
    age: 18
}

app.get('/', (req, res) => {
    let str = '首页'
    res.render('index', {
        title: str
    })
})

app.get('/about', (req, res) => {
    let data = {
        title: '关于我们',
        list: ['看电视', '打豆豆']
    }

    res.render("about", data)
})

//监听
app.listen(80, () => {
    console.log('请打开：http://localhost')
})