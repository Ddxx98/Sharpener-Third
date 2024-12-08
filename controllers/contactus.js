const path = require('path');
const rootDir = require('../util/path');

module.exports.getContactus = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
}

module.exports.postContactus = (req, res) => {
    console.log(req.body);
    res.redirect('/success');
}