const Router = require('koa-router')

const router = new Router({
  prefix: '/api'
})

router.get('/', (ctx, next) => {
  ctx.body = 'Hello Router'
})

module.exports = {
  router
}
