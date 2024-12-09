const path = require('path');
const rootDir = require('../util/path');
const Product = require('../models/product');

module.exports.getProductController = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

module.exports.postProductController = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

module.exports.getProductWithID = (req, res) => {
    const prodId = req.params.productId;
    console.log(prodId)
    Product.findById(prodId, product => {
        console.log(product)
        res.redirect('/no');
    });
}