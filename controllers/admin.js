const path = require('path');
const rootDir = require('../util/path');
const Product = require('../models/product');

module.exports.getProductController = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

module.exports.postProductController = (req, res) => {
    const price = Math.random() * 100;
    console.log(req.body.title, price)
    const product = new Product(req.body.title, price);
    product.save().then(() => {
        res.redirect('/');
    }).catch(err => console.log(err));
}

module.exports.getProductWithID = (req, res) => {
    const prodId = req.params.productId;
    console.log(prodId)
    Product.findById(prodId).then((product) => {
        console.log(product)
        res.redirect('/no');
    }).catch(err=>console.log(err));
}