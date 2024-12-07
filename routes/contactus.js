const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const contact = express.Router();

contact.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
});

contact.post('/', (req, res) => {
  console.log(req.body);
  res.redirect('/success');
});

module.exports = contact;