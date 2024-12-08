const path = require('path');
const rootDir = require('../util/path');

module.exports.getProductController = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

module.exports.postProductController = (req, res) => {
    console.log(req.body);
    res.redirect('/');
}