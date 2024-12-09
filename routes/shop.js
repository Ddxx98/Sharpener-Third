const express = require('express');
const shopController = require('../controllers/shop')

const router = express.Router();

router.get('/', shopController.getShop);

router.post('/cart/:productId', shopController.postCart)

module.exports = router;
