const express = require('express')

const shop = express.Router()

shop.get("/",(req,res)=>{
    res.send("<h1>Hi from Main</h1>")
})

module.exports = shop