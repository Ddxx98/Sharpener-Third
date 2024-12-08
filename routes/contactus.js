const express = require('express');
const contactus = require('../controllers/contactus')

const contact = express.Router();

contact.get('/', contactus.getContactus);

contact.post('/', contactus.postContactus);

module.exports = contact;