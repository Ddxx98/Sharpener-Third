const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus')
const successRoutes = require('./routes/success')
const errorController = require('./controllers/error')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/contactus',contactRoutes)
app.use('/success',successRoutes)

app.use(errorController.getError);

app.listen(3000,()=>{
    console.log("Server running in 3000")
});
