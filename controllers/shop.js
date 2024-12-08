const path = require('path');
const rootDir = require('../util/path');

module.exports.getShop = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}