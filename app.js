const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req,res,next)=>{
    console.log("From Second Middleware")
    next()
})

app.get('/add-product',(req,res)=>{
    res.send("<form action='/product' method='POST'><label>Name:<input type='text' name='username'></label><label>Size:<input type='number' name='size'></label><button type='submit'>Add</button></form>")
})

app.post('/product',(req,res)=>{
    console.log(req.body)
    res.redirect('/add-product')
})

app.listen(3000,()=>{
    console.log("Server is running in 3000!!!")
})