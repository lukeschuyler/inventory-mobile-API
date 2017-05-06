'use strict';

const { Router } = require('express');

const { getAll, getOne, addItem, deleteItem } = require('../controllers/inv_line_itemCtrl');

const router = Router();

router.get('/inv_line_items', getAll);
router.get('/inv_line_items/:id', getOne);
router.post('/inv_line_items', addItem)
router.delete('/inv_line_items/:id', deleteItem)

module.exports = router;
