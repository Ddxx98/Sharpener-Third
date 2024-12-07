const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log("From First Middleware")
    next()
})

app.use((req,res,next)=>{
    console.log("From Second Middleware")
    res.send('<h1>Welcome to my page</h1>')
})

app.listen(3000,()=>{
    console.log("Server is running in 3000!!!")
})