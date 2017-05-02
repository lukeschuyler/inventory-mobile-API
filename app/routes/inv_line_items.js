'use strict';

const { Router } = require('express');

const { getAll, getOne, add } = require('../controllers/inv_line-itemCtrl');

const router = Router();

router.get('/inv_line_items', getAll);
router.get('/inv_line_items/:id', getOne);
router.post('/inv_line_items', add)

module.exports = router;
