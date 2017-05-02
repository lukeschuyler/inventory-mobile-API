'use strict';

const { Router } = require('express');

const { getAll, getOne, add } = require('../controllers/waste_line-itemCtrl');

const router = Router();

router.get('/waste_line_items', getAll);
router.get('/waste_line_items/:id', getOne);
router.post('/waste_line_items', add)

module.exports = router;
