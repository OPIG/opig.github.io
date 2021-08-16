---
title: create simple node server
category: [nodejs]
---

``` js
var http = require('http')
http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type': 'text/plain'})
        res.end('Hello Node world')
}).listen(7789)

console.log(':tada:')

```

## koa 简易server

```js

  const koa = require('koa')
  const static = require("koa-static")
  const Router = require('koa-router')

  const app = new koa()

  app.use(static(__dirname))
  const router = new Router()
  router.get("/api", ctx => {
    ctx.body = {
      myName: "zhangsan",
      age: 25
    }
  })

  router.get("/", ctx => {
    ctx.body = "this is homepage123123"
  })

  app.use(router.routes())

  app.listen(8989)


```
### koa 增加log中间件

``` js
// index.js
  const koa = require('koa')
  const log = require('./log')
  const app= new koa()
  let m1 = function(ctx,next){
    console.log(1);
    next()
    console.log(2);
  }

  let m2 = function(ctx,next){
    console.log(3);
    next()
    console.log(4);
  }

  app.use(m1)
  app.use(m2)
  app.use(log)

  app.use(ctx => {
    ctx.body="this is body"
  })

  app.listen(8989)

```

```js
 // log.js
  const fs = require('fs')
  module.exports = async (ctx, next) => {
    const startTime = Date.now()
    const reqTime = startTime
    await next()
    const ms = Date.now() - startTime
    const log = `${ctx.request.ip} -- ${reqTime}--${ctx.method} -- ${ms}ms`

    fs.appendFileSync('./log.txt', log)
  }

```

### koa 解决跨域

服务端添加 `ctx.set('Access-Control-Allow-Origin', "*")` *会有安全问题，需要指定ip, 会有一些凭证携带不了

添加`koa-server-http-proxy`中间件代理

```js

  const koa = require('koa')
  const static = require("koa-static")
  const koaServerHttpProxy = require('koa-server-http-proxy')
  const Router = require('koa-router')

  const app = new koa()

 // 代理
  app.use(koaServerHttpProxy('/api', {
    // 转向真正请求的服务器
    target: 'http://localhost:8990',
    pathRewrite: {"^/api":''}
  }))

   // 客户端发送请求请求 http://localhost:8989/api/接口

  app.use(static(__dirname))
  const router = new Router()

  router.get("/", ctx => {
    ctx.body = "this is homepage123123"
  })

  app.use(router.routes())

  app.listen(8989)

```