const express = require('express')

const admin = express.Router()

admin.get('/add-product',(req,res)=>{
    res.send("<form action='/admin/add-product' method='POST'><label>Name:<input type='text' name='username'></label><label>Size:<input type='number' name='size'></label><button type='submit'>Add</button></form>")
})

admin.post('/add-product',(req,res)=>{
    console.log(req.body)
    res.redirect('/shop')
})

module.exports = admin