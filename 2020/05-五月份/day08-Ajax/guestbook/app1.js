const express = require('express')
const path = require('path')
const db = require('./data/db.json')
const fs = require('fs')
const app = express()
app.use(express.static(path.join(__dirname, 'public')))

//设置post请求数据获取中间件
app.use(express.urlencoded({ extended: false }))

//处理查找留言请求
app.get('/findGuest', (req, res) => {
    res.status(200).send(db)
})

//处理添加留言请求
app.post('/addGuest', (req, res) => {
    //把前端获取的数据处理成db.json需要的格式
    let reqData = {
        name: req.body.name,
        content: req.body.content,
        created: new Date().toLocaleString()
    }

    //把数据添加到db.json中去
    db.unshift(reqData)

    //把弄好的数据写入到db.json
    fs.writeFile(path.join(__dirname, 'data', 'db.json'), JSON.stringify(db), (err) => {
        if (err != null) {
            console.log(err)
        }

        res.status(200).json({
            //返回给前端的状态数据
            code: 200,
            //返回给前端的状态数据对应的信息
            msg: '数据添加成功'
        })
    })
})


app.listen(3000, () => {
    console.log('请打开：http://localhost:3000')
})


// const express = require('express')
// const path = require('path')
// const db = require('./data/db.json')
// const fs = require('fs')
// const app = express()
// app.use(express.static(path.join(__dirname, 'public')))

// //设置post请求数据获取中间件
// app.use(express.urlencoded({ extended: false }))

// //处理查找留言请求
// app.get('/findGuest', (req, res) => {
//     res.status(200).send(db)
// })

// //处理添加留言请求
// app.post('/addGuest', (req, res) => {
//     //把前端获取的数据处理成db.json需要的格式
//     let reqData = {
//         name: req.body.name,
//         content: req.body.content,
//         created: new Date().toLocaleString()
//     }

//     //把数据添加到db.json中去
//     db.unshift(reqData)

//     //把弄好的数据写入到db.json
//     fs.writeFile(path.join(__dirname, 'data', 'db.json'), JSON.stringify(db), (err) => {
//         if (err != null) {
//             console.log(err)
//         }

//         res.status(200).json({
//             //返回给前端的状态数据
//             code: 200,
//             //返回给前端的状态数据对应的信息
//             msg: '数据添加成功'
//         })
//     })
// })


// app.listen(3000, () => {
//     console.log('请打开：http://localhost:3000')
// })


// const express = require('express')
// const path = require('path')
// const db = require('./data/db.json')
// const fs = require('fs')
// const app = express()
// app.use(express.static(path.join(__dirname, 'public')))

// //设置post请求数据获取中间件
// app.use(express.urlencoded({ extended: false }))

// //处理查找留言请求
// app.get('/findGuest', (req, res) => {
//     res.status(200).send(db)
// })

// //处理添加留言请求
// app.post('/addGuest', (req, res) => {
//     //把前端获取的数据处理成db.json需要的格式
//     let reqData = {
//         name: req.body.name,
//         content: req.body.content,
//         created: new Date().toLocaleString()
//     }

//     //把数据添加到db.json中去
//     db.unshift(reqData)

//     //把弄好的数据写入到db.json
//     fs.writeFile(path.join(__dirname, 'data', 'db.json'), JSON.stringify(db), (err) => {
//         if (err != null) {
//             console.log(err)
//         }

//         res.status(200).json({
//             //返回给前端的状态数据
//             code: 200,
//             //返回给前端的状态数据对应的信息
//             msg: '数据添加成功'
//         })
//     })
// })


// app.listen(3000, () => {
//     console.log('请打开：http://localhost:3000')
// })