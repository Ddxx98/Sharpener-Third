const path = require('path');
const rootDir = require('../util/path');

module.exports.getSuccess = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
}