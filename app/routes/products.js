'use strict';

const { Router } = require('express');

const { getAll, getOne, addProduct, deleteProduct, editProduct } = require('../controllers/productCtrl');

const router = Router();

router.get('/products', getAll);
router.get('/products/:id', getOne);
router.post('/products', addProduct)
router.delete('/products/:id', deleteProduct)
router.patch('/products', editProduct)

module.exports = router;
