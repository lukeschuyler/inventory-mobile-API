'use strict';

const { Router } = require('express');

const { getAll, getAllCurrent, getOne, addProduct, deleteProduct, editProduct } = require('../controllers/productCtrl');

const router = Router();

router.get('/all_products', getAll);
router.get('/products', getAllCurrent);
router.get('/products/:id', getOne);
router.post('/products', addProduct)
router.delete('/products/:id', deleteProduct)
router.patch('/products', editProduct)

module.exports = router;
