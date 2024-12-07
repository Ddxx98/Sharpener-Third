const express = require('express')
const bodyParser = require('body-parser')

const shop = require('./routes/shop')
const admin = require('./routes/admin')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req,res,next)=>{
    console.log("From First Middleware")
    next()
})

app.use('/admin',admin)
app.use('/shop',shop)

app.use((req,res)=>{
    res.status(404).send('<h1>Page Not Found!!</h1>')
})

app.listen(3000,()=>{
    console.log("Server is running in 3000!!!")
})