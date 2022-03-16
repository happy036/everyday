const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
var jwt = require('koa-jwt');
const { jwtSecret } = require('./config');
// 跨域
const cors = require("koa2-cors")

// 错误处理
onerror(app)
// 使用koa-jwt中间件  来拦截 客户端在调用服务端接口时，如果请求头中没有设置token  返回401 
app.use(function (ctx, next) {
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = 'Protected resource, use Authorization header to get access\n';
    } else {
      throw err;
    }
  });
});
// 配置跨域
app.use(cors());
// 加载路由
const users = require('./routes/users')
const goods = require('./routes/goods')
const category = require('./routes/category')
const order = require('./routes/order')
const rights = require('./routes/rights')
// app.use(jwt({ secret: jwtSecret }).unless({ path: [/^\/public/, /^\/users/] }))
//中间件
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
// 注册路由
app.use(users.routes(), users.allowedMethods())
app.use(goods.routes(), goods.allowedMethods())
app.use(category.routes(), category.allowedMethods())
app.use(order.routes(), order.allowedMethods())
app.use(rights.routes(), rights.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
