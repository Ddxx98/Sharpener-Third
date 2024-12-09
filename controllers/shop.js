const path = require('path');
const rootDir = require('../util/path');
const Product = require('../models/product');
const Cart = require('../models/cart');

module.exports.getShop = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}

exports.postCart = (req, res) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
};