const Koa = require('koa')
const jwt = require('koa-jwt')
const { router } = require('./router')
const { TOKEN_SERECT } = require('./config')

const app = new Koa()

// app.use(jwt({ secret: TOKEN_SERECT }))

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('The api server is running on port 3000.')
})
