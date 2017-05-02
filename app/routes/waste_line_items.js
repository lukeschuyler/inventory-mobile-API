'use strict';

const { Router } = require('express');

const { getAll, getOne, addItem } = require('../controllers/waste_line_itemCtrl');

const router = Router();

router.get('/waste_line_items', getAll);
router.get('/waste_line_items/:id', getOne);
router.post('/waste_line_items', addItem)

module.exports = router;
