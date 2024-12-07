const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const success = express.Router();

success.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'success.html'));
});

module.exports = success;