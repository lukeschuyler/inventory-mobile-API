'use strict';

const { Router } = require('express');

const { getAll, getOne, add } = require('../controllers/productCtrl');

const router = Router();

router.get('/products', getAll);
router.get('/products/:id', getOne);
router.post('/products', add)

module.exports = router;
