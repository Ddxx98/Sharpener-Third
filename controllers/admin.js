const path = require('path');
const rootDir = require('../util/path');
const Product = require('../models/product');

module.exports.getProductController = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

module.exports.postProductController = (req, res) => {
    const price = Math.random() * 100;
    req.user.createProduct({ title: req.body.title, price: price }).then(ans => res.redirect('/')).catch(err => console.log(err))
}

module.exports.getProductWithID = (req, res) => {
    const prodId = req.params.productId;
    console.log(prodId)
    Product.findById(prodId).then((product) => {
        console.log(product)
        res.redirect('/no');
    }).catch(err => console.log(err));
}

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    req.user
        .getProducts({ where: { id: prodId } })
        // Product.findById(prodId)
        .then(products => {
            const product = products[0];
            if (!product) {
                return res.redirect('/');
            }
            res.render('admin/edit-product', {
                pageTitle: 'Edit Product',
                path: '/admin/edit-product',
                editing: editMode,
                product: product
            });
        })
        .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    Product.findById(prodId)
        .then(product => {
            product.title = updatedTitle;
            product.price = updatedPrice;
            product.description = updatedDesc;
            product.imageUrl = updatedImageUrl;
            return product.save();
        })
        .then(result => {
            console.log('UPDATED PRODUCT!');
            res.redirect('/admin/products');
        })
        .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
    req.user
        .getProducts()
        .then(products => {
            res.render('admin/products', {
                prods: products,
                pageTitle: 'Admin Products',
                path: '/admin/products'
            });
        })
        .catch(err => console.log(err));
};