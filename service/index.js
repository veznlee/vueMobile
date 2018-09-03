// const Koa = require('koa')
// const app = new Koa()
// app.use( async (ctx) => {
//     ctx.body = '<h1>hello Koa2</h1>'
// })
// app.listen(3000, () => {
//     console.log('[Server] starting at port 3000')
// })

//引入connect
const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const {connect , initSchemas} = require('./database/init.js')
//koa-router：cnpm install --save koa-router
const Router = require('koa-router')
//koa-bodyparser，处理前端请求：cnpm install --save koa-bodyparser
const bodyParser = require('koa-bodyparser')
//支持跨域，处理前端请求：cnpm install --save koa2-cors
const cors = require('koa2-cors')

//使用koa-bodyparser
app.use(bodyParser())
//使用koa2-cors
app.use(cors())

//装载所有子路由
let router = new Router();

//引入对应的api模块
let user = require('./appApi/user.js')
router.use('/user',user.routes())

let goods = require('./appApi/goods.js')
router.use('/goods',goods.routes())

//加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())
 
//立即执行函数
;(async () =>{
    await connect()
    initSchemas()
    // const User = mongoose.model('User')
    // let oneUser = new User({userName:'jspang13',password:'123456'})
  
    // oneUser.save().then(()=>{
    //     console.log('插入成功')
    // })
    // let  users = await  User.findOne({}).exec()
    
    // console.log('------------------')
    // console.log(users)
    // console.log('------------------')  
})()

app.use(async(ctx)=>{
    ctx.body = '<h1>hello Koa2</h1>'
})
 
app.listen(3000,()=>{
    console.log('[Server] starting at port 3000')
})