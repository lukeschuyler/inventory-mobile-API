'use strict';

const { Router } = require('express');

const { getAll, getOne, addProduct } = require('../controllers/productCtrl');

const router = Router();

router.get('/products', getAll);
router.get('/products/:id', getOne);
router.post('/products', addProduct)

module.exports = router;
