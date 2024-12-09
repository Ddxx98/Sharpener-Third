const express = require('express');
const adminController = require('../controllers/admin')

const router = express.Router();

router.get('/add-product',adminController.getProductController);

router.post('/add-product', adminController.postProductController);

router.get('/product/:productId',adminController.getProductWithID)

module.exports = router;