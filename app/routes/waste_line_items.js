'use strict';

const { Router } = require('express');

const { getAll, getOne, addItem, deleteItem } = require('../controllers/waste_line_itemCtrl');

const router = Router();

router.get('/waste_line_items', getAll);
router.get('/waste_line_items/:id', getOne);
router.post('/waste_line_items', addItem)
router.delete('/waste_line_items/:id', deleteItem)

module.exports = router;
