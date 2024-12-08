const express = require('express');
const successController = require('../controllers/success')

const success = express.Router();

success.get('/', successController.getSuccess);

module.exports = success;