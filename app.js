const express = require('express')
const logger = require('morgan')
const indexRouter = require('./router/index')
const todosRouter = require('./router/todos')
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use('/', indexRouter)
app.use('/api/todo', todosRouter)

app.listen(3000, ()=>{
    console.log('Server started.')
})