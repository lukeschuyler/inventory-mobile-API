'use strict';

const { Router } = require('express');

const { getAll, getOne, addItem } = require('../controllers/inv_line_itemCtrl');

const router = Router();

router.get('/inv_line_items', getAll);
router.get('/inv_line_items/:id', getOne);
router.post('/inv_line_items', addItem)

module.exports = router;
